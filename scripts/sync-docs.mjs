/**
 * ER系列指令手册 → VitePress 同步脚本
 *
 * 功能：
 * 1. 复制所有 .md 文件到 guide/ 目录
 * 2. 转换 Obsidian [[link]] → 标准 Markdown 相对路径链接
 * 3. 转换 Obsidian ![[image.png|alt]] → 标准 Markdown 图片
 * 4. 压缩 public/images/ 中的 PNG 图片
 *
 * 用法：
 *   node scripts/sync-docs.mjs           # 仅同步
 *   node scripts/sync-docs.mjs --squoosh  # 同步 + 压缩图片
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

// 检测是否在 CI 环境（Cloudflare Pages）
const isCI = process.env.CF_PAGES === '1' || process.env.CI === 'true'

// 源文件路径配置
let sourcePath

if (isCI) {
  // 在 Cloudflare Pages 环境中，使用已经上传到仓库的文件
  // 方案A：如果有预先同步好的文件
  sourcePath = path.join(process.cwd(), 'docs', 'source')
  
  // 方案B：如果源文件不存在，跳过同步步骤
  if (!existsSync(sourcePath)) {
    console.log('⚠️ 源文件目录不存在，跳过同步步骤（CI 环境）')
    process.exit(0) // 正常退出，不中断构建
  }
} else {
  // 本地开发环境，使用绝对路径
  sourcePath = 'D:/code/AI/test/ER系列指令手册'
  
  if (!existsSync(sourcePath)) {
    console.error('❌ 本地源文件目录不存在，请检查路径配置')
    process.exit(1)
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = "D:/code/AI/test/ER系列指令手册";
const DST = ROOT; // 同步到项目根目录（用户已将内容从 guide/ 移出）
const IMG_DIR = path.join(ROOT, "public", "images");
const DO_SQUOOSH = process.argv.includes("--squoosh");

// ============================================================
// 图片映射表：原始文件名 → /images/新文件名
// ============================================================
const IMAGE_MAP = {
  "Pasted image 20260420160629.png": "/images/blend-types-comparison.png",
  "Pasted image 20260425001759.png": "/images/poscfg-diagram-1.png",
  "Pasted image 20260425001827.png": "/images/poscfg-diagram-2.png",
  "Pasted image 20260425001852.png": "/images/poscfg-diagram-3.png",
  "Pasted image 20260425010239.png": "/images/centerpos-axis-ref.png",
  "Pasted image 20260425010330.png": "/images/centerpos-example.png",
  "Pasted image 20260508210055.png": "/images/weave-note.png",
  "Pasted image 20260420194929.png": "/images/movj-examples.png",
  "Pasted image 20260420195559.png": "/images/movcircle-diagram.png",
  "Pasted image 20260420201448.png": "/images/movh-spiral.png",
  "4748a850-b2fa-4a1e-b13a-8015a91d5166.png": "/images/movlarch-pick-place.png",
  "Pasted image 20260420200915.png": "/images/ondistance-trigger.png",
  "Pasted image 20260420195334.png": "/images/movc-motion.png",
  "Pasted image 20260424144224.png": "/images/motion-extra.png",
  "Pasted image 20260508211958.png": "/images/pallet-toput-calc.png",
  "Pasted image 20260508212504.png": "/images/pallet-toput-ref1.png",
  "Pasted image 20260508212538.png": "/images/pallet-toput-ref2.png",
  "Pasted image 20260508213326.png": "/images/pallet-toget-ref1.png",
  "Pasted image 20260508213211.png": "/images/pallet-toget-ref2.png",
  "Pasted image 20260508212849.png": "/images/pallet-fromput.png",
  "Pasted image 20260508213904.png": "/images/pallet-fromget.png",
  "Pasted image 20260508212222.png": "/images/pallet-extra-1.png",
  "Pasted image 20260508213315.png": "/images/pallet-extra-2.png",
};

// ============================================================
// 文件名 → 源目录相对路径查找表
// ============================================================
function buildNameIndex() {
  const index = new Map();

  function walk(dir, base = "") {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name.startsWith(".")) continue;
      const fp = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name === "附件" || e.name === "assets") continue;
        walk(fp, base ? `${base}/${e.name}` : e.name);
      } else if (e.name.endsWith(".md")) {
        const name = e.name.replace(/\.md$/, "");
        if (name === "指令列表" || name === "控制指令列表") continue;
        const rel = base ? `${base}/${name}` : name;
        if (index.has(name)) {
          console.warn(`  ⚠ 重复名称: ${name} — ${index.get(name)} vs ${rel}`);
        } else {
          index.set(name, rel);
        }
      }
    }
  }

  walk(SRC);
  return index;
}

// ============================================================
// 计算从 fromFile 到 toPath 的相对路径（无 .md 后缀）
// 例如 from="3. 指令/1. 运动指令/MovJ" to="3. 指令/2. 控制指令/IF"
// 返回 "../2. 控制指令/IF"
// ============================================================
function relativize(fromFile, toPath) {
  const fromParts = fromFile.split("/");
  const toParts = toPath.split("/");

  fromParts.pop(); // remove filename, keep directory
  const fromDir = fromParts;

  // find common prefix
  let i = 0;
  while (i < fromDir.length && i < toParts.length && fromDir[i] === toParts[i]) {
    i++;
  }

  const up = fromDir.length - i;
  const down = toParts.slice(i).join("/");

  return (up > 0 ? "../".repeat(up) : "./") + down;
}

// ============================================================
// 转换 Obsidian image: ![[name.png]] 或 ![[name.png|alt]]
// ============================================================
function convertImages(content) {
  return content.replace(/!\[\[([^\]]+)\]\]/g, (match, ref) => {
    const parts = ref.split("|");
    const filename = parts[0].trim();
    const alt = parts.length > 1 ? parts.slice(1).join("|").trim() : "";

    const newPath = IMAGE_MAP[filename];
    if (newPath) {
      return `![${alt}](${newPath})`;
    }
    console.warn(`  ⚠ 未找到图片映射: ${filename}`);
    return match;
  });
}

// ============================================================
// 转换 Obsidian wiki-links: [[Name]] → [Name](相对路径)
// ============================================================
function convertWikiLinks(content, nameIndex, fromRel) {
  return content.replace(/(?<!\!)\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, target, display) => {
    if (target.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i)) return match;

    const name = target.trim();
    const label = display ? display.trim() : name;

    const toPath = nameIndex.get(name);
    if (toPath) {
      const rel = relativize(fromRel, toPath);
      return `[${label}](${rel})`;
    }
    console.warn(`  ⚠ 未找到链接目标: ${name}`);
    return `[${label}](${name})`;
  });
}

// ============================================================
// 压缩图片（sharp 默认压缩 + Squoosh CLI 可选）
// ============================================================
async function compressImages() {
  const files = fs.readdirSync(IMG_DIR).filter(f => /\.(png|jpg)$/i.test(f));
  if (files.length === 0) return;

  if (DO_SQUOOSH) {
    // Squoosh CLI（更小体积但更慢）
    console.log(`\n🗜  使用 Squoosh 压缩 ${files.length} 张图片...`);
    for (const f of files) {
      const fp = path.join(IMG_DIR, f);
      const origSize = (fs.statSync(fp).size / 1024).toFixed(1);
      try {
        execSync(
          `npx @squoosh/cli --mozjpeg auto --oxipng auto "${fp}" -d "${IMG_DIR}"`,
          { stdio: "pipe", cwd: ROOT }
        );
        const newSize = (fs.statSync(fp).size / 1024).toFixed(1);
        console.log(`   ${f}: ${origSize} KB → ${newSize} KB`);
      } catch {
        console.warn(`   ⚠ ${f}: Squoosh 失败`);
      }
    }
  } else {
    // sharp 默认压缩
    console.log(`\n🗜  使用 sharp 压缩 ${files.length} 张图片...`);
    const sharp = (await import("sharp")).default;
    for (const f of files) {
      const fp = path.join(IMG_DIR, f);
      const origSize = (fs.statSync(fp).size / 1024).toFixed(1);
      const tmp = fp + ".tmp";
      try {
        await sharp(fp).png({ quality: 85, palette: true }).toFile(tmp);
        fs.renameSync(tmp, fp);
        const newSize = (fs.statSync(fp).size / 1024).toFixed(1);
        console.log(`   ${f}: ${origSize} KB → ${newSize} KB`);
      } catch {
        // cleanup on failure
        try { fs.unlinkSync(tmp); } catch {}
      }
    }
  }
}

// ============================================================
// 主流程
// ============================================================
async function syncDocs() {
  console.log("🔨 正在构建文件名索引...");
  const nameIndex = buildNameIndex();
  console.log(`   ✅ 索引完成，共 ${nameIndex.size} 个唯一名称`);

  // 清理旧内容（仅删除 ER 手册来源的目录和文件，保留 VitePress 自身文件）
  const SRC_ITEMS = fs.readdirSync(SRC, { withFileTypes: true })
    .map(e => e.name);
  for (const name of SRC_ITEMS) {
    const dstPath = path.join(DST, name);
    if (fs.existsSync(dstPath)) {
      fs.rmSync(dstPath, { recursive: true });
    }
  }

  let copiedCount = 0;
  let convertedLinks = 0;
  let convertedImages = 0;

  function processDir(srcDir, dstDir, baseRel = "") {
    if (!fs.existsSync(dstDir)) fs.mkdirSync(dstDir, { recursive: true });

    const entries = fs.readdirSync(srcDir, { withFileTypes: true });
    for (const e of entries) {
      if (e.name.startsWith(".")) continue;
      const srcPath = path.join(srcDir, e.name);

      if (e.isDirectory()) {
        if (e.name === "附件" || e.name === "assets") continue;
        const childRel = baseRel ? `${baseRel}/${e.name}` : e.name;
        const dstPath = path.join(dstDir, e.name);
        processDir(srcPath, dstPath, childRel);
      } else if (e.name.endsWith(".md")) {
        const nameNoExt = e.name.replace(/\.md$/, "");
        const fileRel = baseRel ? `${baseRel}/${nameNoExt}` : nameNoExt;

        let content = fs.readFileSync(srcPath, "utf-8");
        const beforeLen = content.length;

        // 应用转换
        content = convertImages(content);
        if (content.length !== beforeLen) convertedImages++;

        const linkPattern = content.match(/\[\[[^\]]+\]\]/g);
        content = convertWikiLinks(content, nameIndex, fileRel);
        if (linkPattern && content.match(/\[\[[^\]]+\]\]/g)?.length !== linkPattern.length) {
          convertedLinks++;
        }

        const dstPath = path.join(dstDir, e.name);
        fs.writeFileSync(dstPath, content, "utf-8");
        copiedCount++;
      }
    }
  }

  console.log("📄 正在同步文档...");
  processDir(SRC, DST);

  console.log(`\n✅ 同步完成:`);
  console.log(`   📄 文件: ${copiedCount}`);
  console.log(`   🔗 链接转换: ${convertedLinks} 个文件`);
  console.log(`   🖼  图片转换: ${convertedImages} 个文件`);

  // 压缩图片
  await compressImages();

  console.log(`\n🎉 全部完成`);
}

syncDocs();
