import{_ as a,N as t,o as p,p as e,H as o,v as n,r as c,W as r}from"./plugin-vue_export-helper.463a469f.js";const v='{"title":"\u8DEF\u7531\u5143\u4FE1\u606F","description":"","frontmatter":{},"headers":[{"level":2,"title":"TypeScript","slug":"typescript"}],"relativePath":"zh/guide/advanced/meta.md","lastUpdated":1665388136096}',l={},u=n("h1",{id:"\u8DEF\u7531\u5143\u4FE1\u606F",tabindex:"-1"},[c("\u8DEF\u7531\u5143\u4FE1\u606F "),n("a",{class:"header-anchor",href:"#\u8DEF\u7531\u5143\u4FE1\u606F","aria-hidden":"true"},"#")],-1),i=r(`<p>\u6709\u65F6\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u5C06\u4EFB\u610F\u4FE1\u606F\u9644\u52A0\u5230\u8DEF\u7531\u4E0A\uFF0C\u5982\u8FC7\u6E21\u540D\u79F0\u3001\u8C01\u53EF\u4EE5\u8BBF\u95EE\u8DEF\u7531\u7B49\u3002\u8FD9\u4E9B\u4E8B\u60C5\u53EF\u4EE5\u901A\u8FC7\u63A5\u6536\u5C5E\u6027\u5BF9\u8C61\u7684<code>meta</code>\u5C5E\u6027\u6765\u5B9E\u73B0\uFF0C\u5E76\u4E14\u5B83\u53EF\u4EE5\u5728\u8DEF\u7531\u5730\u5740\u548C\u5BFC\u822A\u5B88\u536B\u4E0A\u90FD\u88AB\u8BBF\u95EE\u5230\u3002\u5B9A\u4E49\u8DEF\u7531\u7684\u65F6\u5019\u4F60\u53EF\u4EE5\u8FD9\u6837\u914D\u7F6E <code>meta</code> \u5B57\u6BB5\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/posts&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> PostsLayout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;new&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> PostsNew<span class="token punctuation">,</span>
        <span class="token comment">// \u53EA\u6709\u7ECF\u8FC7\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u7528\u6237\u624D\u80FD\u521B\u5EFA\u5E16\u5B50</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;:id&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> PostsDetail
        <span class="token comment">// \u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u9605\u8BFB\u6587\u7AE0</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u90A3\u4E48\u5982\u4F55\u8BBF\u95EE\u8FD9\u4E2A <code>meta</code> \u5B57\u6BB5\u5462\uFF1F</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u79F0\u547C <code>routes</code> \u914D\u7F6E\u4E2D\u7684\u6BCF\u4E2A\u8DEF\u7531\u5BF9\u8C61\u4E3A <strong>\u8DEF\u7531\u8BB0\u5F55</strong>\u3002\u8DEF\u7531\u8BB0\u5F55\u53EF\u4EE5\u662F\u5D4C\u5957\u7684\uFF0C\u56E0\u6B64\uFF0C\u5F53\u4E00\u4E2A\u8DEF\u7531\u5339\u914D\u6210\u529F\u540E\uFF0C\u5B83\u53EF\u80FD\u5339\u914D\u591A\u4E2A\u8DEF\u7531\u8BB0\u5F55\u3002</p><p>\u4F8B\u5982\uFF0C\u6839\u636E\u4E0A\u9762\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C<code>/posts/new</code> \u8FD9\u4E2A URL \u5C06\u4F1A\u5339\u914D\u7236\u8DEF\u7531\u8BB0\u5F55 (<code>path: &#39;/posts&#39;</code>) \u4EE5\u53CA\u5B50\u8DEF\u7531\u8BB0\u5F55 (<code>path: &#39;new&#39;</code>)\u3002</p><p>\u4E00\u4E2A\u8DEF\u7531\u5339\u914D\u5230\u7684\u6240\u6709\u8DEF\u7531\u8BB0\u5F55\u4F1A\u66B4\u9732\u4E3A <code>$route</code> \u5BF9\u8C61(\u8FD8\u6709\u5728\u5BFC\u822A\u5B88\u536B\u4E2D\u7684\u8DEF\u7531\u5BF9\u8C61)\u7684<code>$route.matched</code> \u6570\u7EC4\u3002\u6211\u4EEC\u9700\u8981\u904D\u5386\u8FD9\u4E2A\u6570\u7EC4\u6765\u68C0\u67E5\u8DEF\u7531\u8BB0\u5F55\u4E2D\u7684 <code>meta</code> \u5B57\u6BB5\uFF0C\u4F46\u662F Vue Router \u8FD8\u4E3A\u4F60\u63D0\u4F9B\u4E86\u4E00\u4E2A <code>$route.meta</code> \u65B9\u6CD5\uFF0C\u5B83\u662F\u4E00\u4E2A\u975E\u9012\u5F52\u5408\u5E76<strong>\u6240\u6709 <code>meta</code></strong> \u5B57\u6BB5\u7684\uFF08\u4ECE\u7236\u5B57\u6BB5\u5230\u5B50\u5B57\u6BB5\uFF09\u7684\u65B9\u6CD5\u3002\u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u7B80\u5355\u5730\u5199</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u800C\u4E0D\u662F\u53BB\u68C0\u67E5\u6BCF\u6761\u8DEF\u7531\u8BB0\u5F55</span>
  <span class="token comment">// to.matched.some(record =&gt; record.meta.requiresAuth)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requiresAuth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>auth<span class="token punctuation">.</span><span class="token function">isLoggedIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6B64\u8DEF\u7531\u9700\u8981\u6388\u6743\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u5DF2\u767B\u5F55</span>
    <span class="token comment">// \u5982\u679C\u6CA1\u6709\uFF0C\u5219\u91CD\u5B9A\u5411\u5230\u767B\u5F55\u9875\u9762</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4FDD\u5B58\u6211\u4EEC\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u4EE5\u4FBF\u4EE5\u540E\u518D\u6765</span>
      <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> to<span class="token punctuation">.</span>fullPath <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u901A\u8FC7\u6269\u5C55 <code>RouteMeta</code> \u63A5\u53E3\u6765\u8F93\u5165 meta \u5B57\u6BB5\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// typings.d.ts or router.ts</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u662F\u53EF\u9009\u7684</span>
    isAdmin<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token comment">// \u6BCF\u4E2A\u8DEF\u7531\u90FD\u5FC5\u987B\u58F0\u660E</span>
    requiresAuth<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10);function k(d,m,y,h,_,g){const s=t("VueSchoolLink");return p(),e("div",null,[u,o(s,{href:"https://vueschool.io/lessons/route-meta-fields",title:"Learn how to use route meta fields"}),i])}var w=a(l,[["render",k]]);export{v as __pageData,w as default};
