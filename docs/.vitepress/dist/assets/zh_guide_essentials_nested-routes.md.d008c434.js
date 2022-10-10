import{_ as a,N as t,o as p,p as e,H as o,v as n,r,W as c}from"./plugin-vue_export-helper.463a469f.js";const U='{"title":"\u5D4C\u5957\u8DEF\u7531","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5D4C\u5957\u7684\u547D\u540D\u8DEF\u7531","slug":"\u5D4C\u5957\u7684\u547D\u540D\u8DEF\u7531"}],"relativePath":"zh/guide/essentials/nested-routes.md","lastUpdated":1665388136111}',l={},u=n("h1",{id:"\u5D4C\u5957\u8DEF\u7531",tabindex:"-1"},[r("\u5D4C\u5957\u8DEF\u7531 "),n("a",{class:"header-anchor",href:"#\u5D4C\u5957\u8DEF\u7531","aria-hidden":"true"},"#")],-1),i=c(`<p>\u4E00\u4E9B\u5E94\u7528\u7A0B\u5E8F\u7684 UI \u7531\u591A\u5C42\u5D4C\u5957\u7684\u7EC4\u4EF6\u7EC4\u6210\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0CURL \u7684\u7247\u6BB5\u901A\u5E38\u5BF9\u5E94\u4E8E\u7279\u5B9A\u7684\u5D4C\u5957\u7EC4\u4EF6\u7ED3\u6784\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-"><pre><code>/user/johnny/profile                     /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------&gt;  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
</code></pre></div><p>\u901A\u8FC7 Vue Router\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5D4C\u5957\u8DEF\u7531\u914D\u7F6E\u6765\u8868\u8FBE\u8FD9\u79CD\u5173\u7CFB\u3002</p><p>\u63A5\u7740\u4E0A\u8282\u521B\u5EFA\u7684 app \uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD9\u4E9B\u90FD\u4F1A\u4F20\u9012\u7ED9 \`createRouter\`</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>\u8FD9\u91CC\u7684 <code>&lt;router-view&gt;</code> \u662F\u4E00\u4E2A\u9876\u5C42\u7684 <code>router-view</code>\u3002\u5B83\u6E32\u67D3\u9876\u5C42\u8DEF\u7531\u5339\u914D\u7684\u7EC4\u4EF6\u3002\u540C\u6837\u5730\uFF0C\u4E00\u4E2A\u88AB\u6E32\u67D3\u7684\u7EC4\u4EF6\u4E5F\u53EF\u4EE5\u5305\u542B\u81EA\u5DF1\u5D4C\u5957\u7684 <code>&lt;router-view&gt;</code>\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u5728 <code>User</code> \u7EC4\u4EF6\u7684\u6A21\u677F\u5185\u6DFB\u52A0\u4E00\u4E2A <code>&lt;router-view&gt;</code>\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div class=&quot;user&quot;&gt;
      &lt;h2&gt;User {{ $route.params.id }}&lt;/h2&gt;
      &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8981\u5C06\u7EC4\u4EF6\u6E32\u67D3\u5230\u8FD9\u4E2A\u5D4C\u5957\u7684 <code>router-view</code> \u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u5728\u8DEF\u7531\u4E2D\u914D\u7F6E <code>children</code>\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5F53 /user/:id/profile \u5339\u914D\u6210\u529F</span>
        <span class="token comment">// UserProfile \u5C06\u88AB\u6E32\u67D3\u5230 User \u7684 &lt;router-view&gt; \u5185\u90E8</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> UserProfile<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// \u5F53 /user/:id/posts \u5339\u914D\u6210\u529F</span>
        <span class="token comment">// UserPosts \u5C06\u88AB\u6E32\u67D3\u5230 User \u7684 &lt;router-view&gt; \u5185\u90E8</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;posts&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> UserPosts<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF0C\u4EE5 <code>/</code> \u5F00\u5934\u7684\u5D4C\u5957\u8DEF\u5F84\u5C06\u88AB\u89C6\u4E3A\u6839\u8DEF\u5F84\u3002\u8FD9\u5141\u8BB8\u4F60\u5229\u7528\u7EC4\u4EF6\u5D4C\u5957\uFF0C\u800C\u4E0D\u5FC5\u4F7F\u7528\u5D4C\u5957\u7684 URL\u3002</strong></p><p>\u5982\u4F60\u6240\u89C1\uFF0C<code>children</code> \u914D\u7F6E\u53EA\u662F\u53E6\u4E00\u4E2A\u8DEF\u7531\u6570\u7EC4\uFF0C\u5C31\u50CF <code>routes</code> \u672C\u8EAB\u4E00\u6837\u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u8981\uFF0C\u4E0D\u65AD\u5730\u5D4C\u5957\u89C6\u56FE\u3002</p><p>\u6B64\u65F6\uFF0C\u6309\u7167\u4E0A\u9762\u7684\u914D\u7F6E\uFF0C\u5F53\u4F60\u8BBF\u95EE <code>/user/eduardo</code> \u65F6\uFF0C\u5728 <code>User</code> \u7684 <code>router-view</code> \u91CC\u9762\u4EC0\u4E48\u90FD\u4E0D\u4F1A\u5448\u73B0\uFF0C\u56E0\u4E3A\u6CA1\u6709\u5339\u914D\u5230\u5D4C\u5957\u8DEF\u7531\u3002\u4E5F\u8BB8\u4F60\u786E\u5B9E\u60F3\u5728\u90A3\u91CC\u6E32\u67D3\u4E00\u4E9B\u4E1C\u897F\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u7A7A\u7684\u5D4C\u5957\u8DEF\u5F84\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// \u5F53 /user/:id \u5339\u914D\u6210\u529F</span>
      <span class="token comment">// UserHome \u5C06\u88AB\u6E32\u67D3\u5230 User \u7684 &lt;router-view&gt; \u5185\u90E8</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserHome <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// ...\u5176\u4ED6\u5B50\u8DEF\u7531</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u8FD9\u4E2A\u4F8B\u5B50\u7684 demo \u53EF\u4EE5\u5728<a href="https://codesandbox.io/s/nested-views-vue-router-4-examples-hl326?initialpath=%2Fusers%2Feduardo" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\u627E\u5230\u3002</p><h2 id="\u5D4C\u5957\u7684\u547D\u540D\u8DEF\u7531" tabindex="-1">\u5D4C\u5957\u7684\u547D\u540D\u8DEF\u7531 <a class="header-anchor" href="#\u5D4C\u5957\u7684\u547D\u540D\u8DEF\u7531" aria-hidden="true">#</a></h2><p>\u5728\u5904\u7406<a href="./named-routes.html">\u547D\u540D\u8DEF\u7531</a>\u65F6\uFF0C<strong>\u4F60\u901A\u5E38\u4F1A\u7ED9\u5B50\u8DEF\u7531\u547D\u540D</strong>\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token comment">// \u8BF7\u6CE8\u610F\uFF0C\u53EA\u6709\u5B50\u8DEF\u7531\u5177\u6709\u540D\u79F0</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserHome <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u8FD9\u5C06\u786E\u4FDD\u5BFC\u822A\u5230 <code>/user/:id</code> \u65F6\u59CB\u7EC8\u663E\u793A\u5D4C\u5957\u8DEF\u7531\u3002</p><p>\u5728\u4E00\u4E9B\u573A\u666F\u4E2D\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u5BFC\u822A\u5230\u547D\u540D\u8DEF\u7531\u800C\u4E0D\u5BFC\u822A\u5230\u5D4C\u5957\u8DEF\u7531\u3002\u4F8B\u5982\uFF0C\u4F60\u60F3\u5BFC\u822A <code>/user/:id</code> \u800C\u4E0D\u663E\u793A\u5D4C\u5957\u8DEF\u7531\u3002\u90A3\u6837\u7684\u8BDD\uFF0C\u4F60\u8FD8\u53EF\u4EE5<strong>\u547D\u540D\u7236\u8DEF\u7531</strong>\uFF0C\u4F46\u8BF7\u6CE8\u610F<strong>\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u5C06\u59CB\u7EC8\u663E\u793A\u5D4C\u5957\u7684\u5B50\u8DEF\u7531</strong>\uFF0C\u56E0\u4E3A\u5B83\u88AB\u89C6\u4E3A\u6307\u5411\u8DEF\u5F84<code>/users/:id</code> \u7684\u5BFC\u822A\uFF0C\u800C\u4E0D\u662F\u547D\u540D\u8DEF\u7531\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">&#39;user-parent&#39;</span>
    component<span class="token operator">:</span> User<span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserHome <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div>`,21);function k(d,g,y,m,h,v){const s=t("VueSchoolLink");return p(),e("div",null,[u,o(s,{href:"https://vueschool.io/lessons/nested-routes",title:"Learn about nested routes"}),i])}var w=a(l,[["render",k]]);export{U as __pageData,w as default};
