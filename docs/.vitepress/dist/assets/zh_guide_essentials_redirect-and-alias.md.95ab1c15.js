import{_ as a,N as p,o as t,p as e,H as o,v as s,r as c,W as r}from"./plugin-vue_export-helper.463a469f.js";const f='{"title":"\u91CD\u5B9A\u5411\u548C\u522B\u540D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u91CD\u5B9A\u5411","slug":"\u91CD\u5B9A\u5411"},{"level":3,"title":"\u76F8\u5BF9\u91CD\u5B9A\u5411","slug":"\u76F8\u5BF9\u91CD\u5B9A\u5411"},{"level":2,"title":"\u522B\u540D","slug":"\u522B\u540D"}],"relativePath":"zh/guide/essentials/redirect-and-alias.md","lastUpdated":1665388136111}',l={},u=s("h1",{id:"\u91CD\u5B9A\u5411\u548C\u522B\u540D",tabindex:"-1"},[c("\u91CD\u5B9A\u5411\u548C\u522B\u540D "),s("a",{class:"header-anchor",href:"#\u91CD\u5B9A\u5411\u548C\u522B\u540D","aria-hidden":"true"},"#")],-1),i=r(`<h2 id="\u91CD\u5B9A\u5411" tabindex="-1">\u91CD\u5B9A\u5411 <a class="header-anchor" href="#\u91CD\u5B9A\u5411" aria-hidden="true">#</a></h2><p>\u91CD\u5B9A\u5411\u4E5F\u662F\u901A\u8FC7 <code>routes</code> \u914D\u7F6E\u6765\u5B8C\u6210\uFF0C\u4E0B\u9762\u4F8B\u5B50\u662F\u4ECE <code>/home</code> \u91CD\u5B9A\u5411\u5230 <code>/</code>\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u547D\u540D\u7684\u8DEF\u7531\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;homepage&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>\u751A\u81F3\u662F\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u52A8\u6001\u8FD4\u56DE\u91CD\u5B9A\u5411\u76EE\u6807\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// /search/screens -&gt; /search?q=screens</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/search/:searchText&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">redirect</span><span class="token operator">:</span> <span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u65B9\u6CD5\u63A5\u6536\u76EE\u6807\u8DEF\u7531\u4F5C\u4E3A\u53C2\u6570</span>
      <span class="token comment">// return \u91CD\u5B9A\u5411\u7684\u5B57\u7B26\u4E32\u8DEF\u5F84/\u8DEF\u5F84\u5BF9\u8C61</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/search&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">q</span><span class="token operator">:</span> to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>searchText <span class="token punctuation">}</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/search&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u8BF7\u6CE8\u610F\uFF0C<strong><a href="./../advanced/navigation-guards.html">\u5BFC\u822A\u5B88\u536B</a>\u5E76\u6CA1\u6709\u5E94\u7528\u5728\u8DF3\u8F6C\u8DEF\u7531\u4E0A\uFF0C\u800C\u4EC5\u4EC5\u5E94\u7528\u5728\u5176\u76EE\u6807\u4E0A</strong>\u3002\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D\uFF0C\u5728 <code>/home</code> \u8DEF\u7531\u4E2D\u6DFB\u52A0 <code>beforeEnter</code> \u5B88\u536B\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6548\u679C\u3002</p><p>\u5728\u5199 <code>redirect</code> \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u7701\u7565 <code>component</code> \u914D\u7F6E\uFF0C\u56E0\u4E3A\u5B83\u4ECE\u6765\u6CA1\u6709\u88AB\u76F4\u63A5\u8BBF\u95EE\u8FC7\uFF0C\u6240\u4EE5\u6CA1\u6709\u7EC4\u4EF6\u8981\u6E32\u67D3\u3002\u552F\u4E00\u7684\u4F8B\u5916\u662F<a href="./nested-routes.html">\u5D4C\u5957\u8DEF\u7531</a>\uFF1A\u5982\u679C\u4E00\u4E2A\u8DEF\u7531\u8BB0\u5F55\u6709 <code>children</code> \u548C <code>redirect</code> \u5C5E\u6027\uFF0C\u5B83\u4E5F\u5E94\u8BE5\u6709 <code>component</code> \u5C5E\u6027\u3002</p><h3 id="\u76F8\u5BF9\u91CD\u5B9A\u5411" tabindex="-1">\u76F8\u5BF9\u91CD\u5B9A\u5411 <a class="header-anchor" href="#\u76F8\u5BF9\u91CD\u5B9A\u5411" aria-hidden="true">#</a></h3><p>\u4E5F\u53EF\u4EE5\u91CD\u5B9A\u5411\u5230\u76F8\u5BF9\u4F4D\u7F6E\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// \u5C06\u603B\u662F\u628A/users/123/posts\u91CD\u5B9A\u5411\u5230/users/123/profile\u3002</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id/posts&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">redirect</span><span class="token operator">:</span> <span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8BE5\u51FD\u6570\u63A5\u6536\u76EE\u6807\u8DEF\u7531\u4F5C\u4E3A\u53C2\u6570</span>
      <span class="token comment">// \u76F8\u5BF9\u4F4D\u7F6E\u4E0D\u4EE5\`/\`\u5F00\u5934</span>
      <span class="token comment">// \u6216 { path: &#39;profile&#39;}</span>
      <span class="token keyword">return</span> <span class="token string">&#39;profile&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="\u522B\u540D" tabindex="-1">\u522B\u540D <a class="header-anchor" href="#\u522B\u540D" aria-hidden="true">#</a></h2><p>\u91CD\u5B9A\u5411\u662F\u6307\u5F53\u7528\u6237\u8BBF\u95EE <code>/home</code> \u65F6\uFF0CURL \u4F1A\u88AB <code>/</code> \u66FF\u6362\uFF0C\u7136\u540E\u5339\u914D\u6210 <code>/</code>\u3002\u90A3\u4E48\u4EC0\u4E48\u662F\u522B\u540D\u5462\uFF1F</p><p><strong>\u5C06 <code>/</code> \u522B\u540D\u4E3A <code>/home</code>\uFF0C\u610F\u5473\u7740\u5F53\u7528\u6237\u8BBF\u95EE <code>/home</code> \u65F6\uFF0CURL \u4ECD\u7136\u662F <code>/home</code>\uFF0C\u4F46\u4F1A\u88AB\u5339\u914D\u4E3A\u7528\u6237\u6B63\u5728\u8BBF\u95EE <code>/</code>\u3002</strong></p><p>\u4E0A\u9762\u5BF9\u5E94\u7684\u8DEF\u7531\u914D\u7F6E\u4E3A\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Homepage<span class="token punctuation">,</span> <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>\u901A\u8FC7\u522B\u540D\uFF0C\u4F60\u53EF\u4EE5\u81EA\u7531\u5730\u5C06 UI \u7ED3\u6784\u6620\u5C04\u5230\u4E00\u4E2A\u4EFB\u610F\u7684 URL\uFF0C\u800C\u4E0D\u53D7\u914D\u7F6E\u7684\u5D4C\u5957\u7ED3\u6784\u7684\u9650\u5236\u3002\u4F7F\u522B\u540D\u4EE5 <code>/</code> \u5F00\u5934\uFF0C\u4EE5\u4F7F\u5D4C\u5957\u8DEF\u5F84\u4E2D\u7684\u8DEF\u5F84\u6210\u4E3A\u7EDD\u5BF9\u8DEF\u5F84\u3002\u4F60\u751A\u81F3\u53EF\u4EE5\u5C06\u4E24\u8005\u7ED3\u5408\u8D77\u6765\uFF0C\u7528\u4E00\u4E2A\u6570\u7EC4\u63D0\u4F9B\u591A\u4E2A\u522B\u540D\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UsersLayout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u4E3A\u8FD9 3 \u4E2A URL \u5448\u73B0 UserList</span>
      <span class="token comment">// - /users</span>
      <span class="token comment">// - /users/list</span>
      <span class="token comment">// - /people</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserList<span class="token punctuation">,</span> <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/people&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u5982\u679C\u4F60\u7684\u8DEF\u7531\u6709\u53C2\u6570\uFF0C\u8BF7\u786E\u4FDD\u5728\u4EFB\u4F55\u7EDD\u5BF9\u522B\u540D\u4E2D\u5305\u542B\u5B83\u4EEC\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UsersByIdLayout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u4E3A\u8FD9 3 \u4E2A URL \u5448\u73B0 UserDetails</span>
      <span class="token comment">// - /users/24</span>
      <span class="token comment">// - /users/24/profile</span>
      <span class="token comment">// - /24</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserDetails<span class="token punctuation">,</span> <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/:id&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p><strong>\u5173\u4E8E SEO \u7684\u6CE8\u610F\u4E8B\u9879</strong>: \u4F7F\u7528\u522B\u540D\u65F6\uFF0C\u4E00\u5B9A\u8981<a href="https://support.google.com/webmasters/answer/139066?hl=en" target="_blank" rel="noopener noreferrer">\u5B9A\u4E49\u89C4\u8303\u94FE\u63A5</a>.</p>`,22);function k(d,h,m,y,g,_){const n=p("VueSchoolLink");return t(),e("div",null,[u,o(n,{href:"https://vueschool.io/lessons/vue-router-4-redirect-and-alias",title:"Learn how to use redirect and alias"}),i])}var U=a(l,[["render",k]]);export{f as __pageData,U as default};
