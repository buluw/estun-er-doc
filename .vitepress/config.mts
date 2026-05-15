import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";
import estunGrammar from "./grammars/estun.tmLanguage.json";

// 中文分词 tokenize（2-gram 切分）
function tokenizeChinese(text: string): string[] {
  const tokens: string[] = [];
  const segments = text.split(/([一-鿿㐀-䶿豈-﫿]+)/);
  for (const seg of segments) {
    if (/[一-鿿㐀-䶿]/.test(seg)) {
      // 单字也索引，双字组合也索引
      for (let i = 0; i < seg.length; i++) {
        tokens.push(seg[i]);
      }
      for (let i = 0; i < seg.length - 1; i++) {
        tokens.push(seg.substring(i, i + 2));
      }
    } else {
      tokens.push(...seg.split(/[\s,.;:!?()[\]{}<>]+/).filter(Boolean));
    }
  }
  return tokens.filter((t) => t.length > 0);
}

export default defineConfig(
  withSidebar(
    {
      title: "ER系列指令系统手册",
      description: "ESTUN ER系列机器人编程语言指令参考文档",
      cleanUrls: true,
      lang: "zh-CN",

      head: [["link", { rel: "icon", href: "/favicon.ico" }]],

      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "指令手册", link: "/3. 指令/1. 运动指令/MovJ" },
          { text: "更新日志", link: "/ChangeLog" },
        ],

        search: {
          provider: "local",
          options: {
            miniSearch: {
              options: {
                tokenize: tokenizeChinese,
                processTerm: (term: string) => term.toLowerCase(),
                searchOptions: {
                  fuzzy: 0.2,
                  prefix: true,
                },
              },
            },
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: "搜索文档",
                    buttonAriaLabel: "搜索文档",
                  },
                  modal: {
                    displayDetails: "显示详细结果",
                    resetButtonTitle: "重置搜索",
                    backButtonTitle: "关闭",
                    noResultsText: "无结果",
                    footer: {
                      selectText: "选择",
                      navigateText: "切换",
                      closeText: "关闭",
                    },
                  },
                },
              },
            },
          },
        },

        docFooter: {
          prev: "上一页",
          next: "下一页",
        },

        outline: {
          label: "页面导航",
          level: [2, 3],
        },

        lastUpdated: {
          text: "最后更新",
        },

        footer: {
          message: "ESTUN Robotics — ER 系列机器人编程语言指令参考",
          // copyright: `© ${new Date().getFullYear()} ESTUN Automation`,
        },
      },

      markdown: {
        languages: [estunGrammar],
        lineNumbers: true,
        math: true,
      },
    },
    {
      // vitepress-sidebar options
      documentRootPath: "/",
      resolvePath: "/",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title",
      collapsed: true,
      capitalizeFirst: false,
      // 按标题中数字前缀自然排序（1,2,3... 而非 1,10,11,2）
      sortMenusOrderNumericallyFromTitle: true,
      // 文件夹可通过 指令列表.md 点击跳转
      includeFolderIndexFile: true,
      useFolderLinkFromIndexFile: true,
      useFolderTitleFromIndexFile: true,
      // 排除非文档内容
      excludeByGlobPattern: [
        "index.md",
        "404.md",
      ],
    },
  ),
);
