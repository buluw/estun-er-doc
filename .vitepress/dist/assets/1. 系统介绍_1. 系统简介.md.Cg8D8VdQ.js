import{_ as n,o as a,c as p,ag as e}from"./chunks/framework.C9sp7nFj.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"1. 系统介绍/1. 系统简介.md","filePath":"1. 系统介绍/1. 系统简介.md","lastUpdated":1778862643000}'),l={name:"1. 系统介绍/1. 系统简介.md"};function r(o,s,i,c,t,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<p>指令系统文件结构分为工程、程序和数据三部分，其中，数据又分为系统域、全局域、工程域和程序域四个作用域。程序代码保存在文件中，后缀名：<code>.er</code> <code>.erp</code> 和<code>.erd</code>。一般都在 Project 文件夹中。</p><p>整个 Project 文件结构：</p><div class="language-Plaintext vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">Plaintext</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ROOT/</span></span>
<span class="line"><span>├── _system.erd                # 系统级文件</span></span>
<span class="line"><span>├── _global.erd                # 全局级文件</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── &quot;A_prj&quot;.er/                # 项目 A 目录</span></span>
<span class="line"><span>│   ├── prjglobal.erd          # 项目全局变量文件</span></span>
<span class="line"><span>│   ├── &quot;a_prog&quot;.erd           # 程序 a 数据文件</span></span>
<span class="line"><span>│   ├── &quot;a_prog&quot;.erp           # 程序 a 逻辑文件</span></span>
<span class="line"><span>│   ├── ...</span></span>
<span class="line"><span>│   ├── &quot;z_prog&quot;.erd           # 程序 z 数据文件</span></span>
<span class="line"><span>│   └── &quot;z_prog&quot;.erp           # 程序 z 逻辑文件</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── ...                        # 其他并行项目</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└── &quot;Z_prj&quot;.er/                # 项目 Z 目录</span></span>
<span class="line"><span>    ├── prjglobal.erd          # 项目全局变量文件</span></span>
<span class="line"><span>    ├── &quot;a_prog&quot;.erd</span></span>
<span class="line"><span>    ├── &quot;a_prog&quot;.erp</span></span>
<span class="line"><span>    ├── ...</span></span>
<span class="line"><span>    ├── &quot;z_prog&quot;.erd</span></span>
<span class="line"><span>    └── &quot;z_prog&quot;.erp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul><li>系统域数据文件 <code>_system.erd</code></li><li>全局域数据文件 <code>_global.erd</code></li><li>工程文件夹<code>&quot;A_prj&quot;.er</code><ul><li>工程域数据文件 <code>prjglobal.erd</code></li><li>程序指令文件<code>&quot;a_prog&quot;.erp</code></li><li>程序域数据文件<code>&quot;a_prog&quot;.erd</code></li></ul></li></ul><p>注意：系统和全局、工程域数据文件名称为系统指定，不可修改。其他文件名字可以自定义。</p><p>用户可以通过示教编程器或其他接口编辑指令文件。</p>`,6)])])}const _=n(l,[["render",r]]);export{b as __pageData,_ as default};
