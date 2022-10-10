import{_ as a,N as t,o as e,p,H as o,v as n,r,W as c}from"./plugin-vue_export-helper.463a469f.js";const f='{"title":"Nested Routes","description":"","frontmatter":{},"headers":[{"level":2,"title":"Nested Named Routes","slug":"nested-named-routes"}],"relativePath":"guide/essentials/nested-routes.md","lastUpdated":1665388136080}',l={},i=n("h1",{id:"nested-routes",tabindex:"-1"},[r("Nested Routes "),n("a",{class:"header-anchor",href:"#nested-routes","aria-hidden":"true"},"#")],-1),u=c(`<p>Some application&#39;s UIs are composed of components that are nested multiple levels deep. In this case, it is very common that the segments of a URL corresponds to a certain structure of nested components, for example:</p><div class="language-"><pre><code>/user/johnny/profile                     /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------&gt;  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
</code></pre></div><p>With Vue Router, you can express this relationship using nested route configurations.</p><p>Given the app we created in the last chapter:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// these are passed to \`createRouter\`</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>The <code>&lt;router-view&gt;</code> here is a top-level <code>router-view</code>. It renders the component matched by a top level route. Similarly, a rendered component can also contain its own, nested <code>&lt;router-view&gt;</code>. For example, if we add one inside the <code>User</code> component&#39;s template:</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div class=&quot;user&quot;&gt;
      &lt;h2&gt;User {{ $route.params.id }}&lt;/h2&gt;
      &lt;router-view&gt;&lt;/router-view&gt;
    &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>To render components into this nested <code>router-view</code>, we need to use the <code>children</code> option in any of the routes:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// UserProfile will be rendered inside User&#39;s &lt;router-view&gt;</span>
        <span class="token comment">// when /user/:id/profile is matched</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> UserProfile<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token comment">// UserPosts will be rendered inside User&#39;s &lt;router-view&gt;</span>
        <span class="token comment">// when /user/:id/posts is matched</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;posts&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> UserPosts<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p><strong>Note that nested paths that start with <code>/</code> will be treated as a root path. This allows you to leverage the component nesting without having to use a nested URL.</strong></p><p>As you can see the <code>children</code> option is just another Array of routes like <code>routes</code> itself. Therefore, you can keep nesting views as much as you need.</p><p>At this point, with the above configuration, when you visit <code>/user/eduardo</code>, nothing will be rendered inside <code>User</code>&#39;s <code>router-view</code>, because no nested route is matched. Maybe you do want to render something there. In such case you can provide an empty nested path:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// UserHome will be rendered inside User&#39;s &lt;router-view&gt;</span>
      <span class="token comment">// when /user/:id is matched</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserHome <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token comment">// ...other sub routes</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>A working demo of this example can be found <a href="https://codesandbox.io/s/nested-views-vue-router-4-examples-hl326?initialpath=%2Fusers%2Feduardo" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="nested-named-routes" tabindex="-1">Nested Named Routes <a class="header-anchor" href="#nested-named-routes" aria-hidden="true">#</a></h2><p>When dealing with <a href="./named-routes.html">Named Routes</a>, you usually <strong>name the children routes</strong>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token comment">// notice how only the child route has a name</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserHome <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>This will ensure navigating to <code>/user/:id</code> will always display the nested route.</p><p>In some scenarios, you may want to navigate to a named route without navigating to the nested route. For example, if you want to navigate to <code>/user/:id</code> without displaying the nested route. In that case, you can <strong>also</strong> name the parent route but note <strong>that reloading the page will always display the nested child</strong> as it&#39;s considered a navigation to the path <code>/users/:id</code> instead of the named route:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user-parent&#39;</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserHome <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div>`,21);function d(k,h,m,g,y,v){const s=t("VueSchoolLink");return e(),p("div",null,[i,o(s,{href:"https://vueschool.io/lessons/nested-routes",title:"Learn about nested routes"}),u])}var _=a(l,[["render",d]]);export{f as __pageData,_ as default};
