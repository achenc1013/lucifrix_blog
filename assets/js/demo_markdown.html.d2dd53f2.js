"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[711],{6262:(e,a)=>{a.A=(e,a)=>{const r=e.__vccOpts||e;for(const[e,s]of a)r[e]=s;return r}},81:(e,a,r)=>{r.r(a),r.d(a,{comp:()=>i,data:()=>h});var s=r(641),n=r(33);const t={},i=(0,r(6262).A)(t,[["render",function(e,a){return(0,s.uX)(),(0,s.CE)("div",null,[a[0]||(a[0]=(0,s.Lk)("p",null,"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。",-1)),a[1]||(a[1]=(0,s.Lk)("p",null,"你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。",-1)),(0,s.Q3)(" more "),a[2]||(a[2]=(0,s.Fv)('<h2 id="markdown-介绍" tabindex="-1"><a class="header-anchor" href="#markdown-介绍"><span>Markdown 介绍</span></a></h2><p>如果你是一个新手，还不会编写 Markdown，请先阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown 介绍</a> 和 <a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown 演示</a>。</p><h2 id="markdown-配置" tabindex="-1"><a class="header-anchor" href="#markdown-配置"><span>Markdown 配置</span></a></h2><p>VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。</p><div class="hint-container important"><p class="hint-container-title">Frontmatter</p><p>Frontmatter 是 VuePress 中很重要的一个概念，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter 介绍</a> 了解详情。</p></div><h2 id="markdown-扩展" tabindex="-1"><a class="header-anchor" href="#markdown-扩展"><span>Markdown 扩展</span></a></h2><p>VuePress 会使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">语法扩展</a> 。</p><h3 id="vuepress-扩展" tabindex="-1"><a class="header-anchor" href="#vuepress-扩展"><span>VuePress 扩展</span></a></h3><p>为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。</p><p>关于这些扩展，请阅读 <a href="https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">VuePress 中的 Markdown 扩展</a>。</p><h3 id="主题扩展" tabindex="-1"><a class="header-anchor" href="#主题扩展"><span>主题扩展</span></a></h3><p>通过 VuePress 插件，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。</p><h4 id="选项卡" tabindex="-1"><a class="header-anchor" href="#选项卡"><span>选项卡</span></a></h4><p>::: tabs#fruit</p><p>@tab apple</p><p>Apple</p><p>@tab banana</p><p>Banana</p><p>@tab orange</p><p>Orange</p><p>:::</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注"><span>脚注</span></a></h4><p>此文字有脚注<a href="%E8%BF%99%E6%98%AF%E8%84%9A%E6%B3%A8%E5%86%85%E5%AE%B9">^first</a>.</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="导入文件" tabindex="-1"><a class="header-anchor" href="#导入文件"><span>导入文件</span></a></h4><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="tex-语法" tabindex="-1"><a class="header-anchor" href="#tex-语法"><span>TeX 语法</span></a></h4><p>$$ \\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right} $$</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/math.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="任务列表" tabindex="-1"><a class="header-anchor" href="#任务列表"><span>任务列表</span></a></h4><ul><li>[x] 计划 1</li><li>[ ] 计划 2</li></ul><p><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html" target="_blank" rel="noopener noreferrer">查看详情</a></p><h3 id="图片增强" tabindex="-1"><a class="header-anchor" href="#图片增强"><span>图片增强</span></a></h3><p>支持为图片设置颜色模式和大小。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标"><span>上下角标</span></a></h4><p>19^th^ H~2~O</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/sup-sub.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h4><div class="language-component line-numbers-mode" data-highlighter="shiki" data-ext="component" data-title="component" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>title: Mr.Hope</span></span>\n<span class="line"><span>desc: Where there is light, there is hope</span></span>\n<span class="line"><span>logo: https://mister-hope.com/logo.svg</span></span>\n<span class="line"><span>link: https://mister-hope.com</span></span>\n<span class="line"><span>background: rgba(253, 230, 138, 0.15)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/component/grammar.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="提示容器" tabindex="-1"><a class="header-anchor" href="#提示容器"><span>提示容器</span></a></h4><p>::: v-pre</p>',44)),(0,s.Lk)("p",null,"安全的在 Markdown 中使用 "+(0,n.v_)(e.variable)+"。",1),a[3]||(a[3]=(0,s.Fv)('<p>:::</p><div class="hint-container info"><p class="hint-container-title">自定义标题</p><p>信息容器，包含 <code>代码</code> 与 <a href="#%E6%8F%90%E7%A4%BA%E5%AE%B9%E5%99%A8">链接</a>。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div><div class="hint-container tip"><p class="hint-container-title">自定义标题</p><p>提示容器</p></div><div class="hint-container warning"><p class="hint-container-title">自定义标题</p><p>警告容器</p></div><div class="hint-container caution"><p class="hint-container-title">自定义标题</p><p>危险容器</p></div><details class="hint-container details"><summary>自定义标题</summary><p>详情容器</p></details><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html" target="_blank" rel="noopener noreferrer">GitHub 警示</a></li><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html" target="_blank" rel="noopener noreferrer">提示框</a></li></ul><h4 id="自定义对齐" tabindex="-1"><a class="header-anchor" href="#自定义对齐"><span>自定义对齐</span></a></h4><p>::: center</p><p>我是居中的</p><p>:::</p><p>::: right</p><p>我在右对齐</p><p>:::</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="属性支持" tabindex="-1"><a class="header-anchor" href="#属性支持"><span>属性支持</span></a></h4><p>一个拥有 ID 的 <strong>单词</strong>{#word}。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="标记" tabindex="-1"><a class="header-anchor" href="#标记"><span>标记</span></a></h4><p>你可以标记 ==重要的内容== 。</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="剧透" tabindex="-1"><a class="header-anchor" href="#剧透"><span>剧透</span></a></h4><p>VuePress Theme Hope !!十分强大!!.</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="样式化" tabindex="-1"><a class="header-anchor" href="#样式化"><span>样式化</span></a></h4><p>向 Mr.Hope 捐赠一杯咖啡。 <em>Recommended</em></p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/stylize/stylize.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="图表" tabindex="-1"><a class="header-anchor" href="#图表"><span>图表</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts"><span>ECharts</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html" width="100%" height="800"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="流程图" tabindex="-1"><a class="header-anchor" href="#流程图"><span>流程图</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="markmap" tabindex="-1"><a class="header-anchor" href="#markmap"><span>MarkMap</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid"><span>Mermaid</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html" width="100%" height="620"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="plantuml" tabindex="-1"><a class="header-anchor" href="#plantuml"><span>PlantUML</span></a></h4><p>@startuml Alice -&gt; Bob: 认证请求</p><p>alt 成功情况</p><pre><code>Bob -&gt; Alice: 认证接受\n</code></pre><p>else 某种失败情况</p><pre><code>Bob -&gt; Alice: 认证失败\ngroup 我自己的标签\nAlice -&gt; Log : 开始记录攻击日志\n    loop 1000次\n        Alice -&gt; Bob: DNS 攻击\n    end\nAlice -&gt; Log : 结束记录攻击日志\nend\n</code></pre><p>else 另一种失败</p><pre><code>Bob -&gt; Alice: 请重复\n</code></pre><p>end @enduml</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html" target="_blank" rel="noopener noreferrer">View Detail</a></li></ul><h4 id="代码块" tabindex="-1"><a class="header-anchor" href="#代码块"><span>代码块</span></a></h4><p>::: code-tabs</p><p>@tab pnpm</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vuepress-theme-hope</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>@tab yarn</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vuepress-theme-hope</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>@tab:active npm</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -D</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> vuepress-theme-hope</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>:::</p><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="代码演示" tabindex="-1"><a class="header-anchor" href="#代码演示"><span>代码演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html" width="100%" height="450"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="交互演示" tabindex="-1"><a class="header-anchor" href="#交互演示"><span>交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html" width="100%" height="480"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="kotlin-交互演示" tabindex="-1"><a class="header-anchor" href="#kotlin-交互演示"><span>Kotlin 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html" width="100%" height="220"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="sandpack-交互演示" tabindex="-1"><a class="header-anchor" href="#sandpack-交互演示"><span>Sandpack 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="vue-交互演示" tabindex="-1"><a class="header-anchor" href="#vue-交互演示"><span>Vue 交互演示</span></a></h4><iframe src="https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html" width="100%" height="380"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul><h4 id="幻灯片" tabindex="-1"><a class="header-anchor" href="#幻灯片"><span>幻灯片</span></a></h4><iframe src="https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html" width="100%" height="420"></iframe><ul><li><a href="https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html" target="_blank" rel="noopener noreferrer">查看详情</a></li></ul>',80))])}]]),h=JSON.parse('{"path":"/demo/markdown.html","title":"Markdown 展示","lang":"zh-CN","frontmatter":{"title":"Markdown 展示","icon":"fa6-brands:markdown","order":2,"category":["使用指南"],"tag":["Markdown"],"description":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/demo/markdown.html"}],["meta",{"property":"og:site_name","content":"云晞科技"}],["meta",{"property":"og:title","content":"Markdown 展示"}],["meta",{"property":"og:description","content":"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。 你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-22T07:24:31.000Z"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2025-01-22T07:24:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Markdown 展示\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-22T07:24:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Lucifrix\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Markdown 介绍","slug":"markdown-介绍","link":"#markdown-介绍","children":[]},{"level":2,"title":"Markdown 配置","slug":"markdown-配置","link":"#markdown-配置","children":[]},{"level":2,"title":"Markdown 扩展","slug":"markdown-扩展","link":"#markdown-扩展","children":[{"level":3,"title":"VuePress 扩展","slug":"vuepress-扩展","link":"#vuepress-扩展","children":[]},{"level":3,"title":"主题扩展","slug":"主题扩展","link":"#主题扩展","children":[]},{"level":3,"title":"图片增强","slug":"图片增强","link":"#图片增强","children":[]}]}],"git":{"createdTime":1737530671000,"updatedTime":1737530671000,"contributors":[{"name":"achenc1013","username":"achenc1013","email":"1013199991@qq.com","commits":1,"url":"https://github.com/achenc1013"}]},"readingTime":{"minutes":3.47,"words":1041},"filePathRelative":"demo/markdown.md","localizedDate":"2025年1月22日","excerpt":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\\n","autoDesc":true}')}}]);