import{_ as s,N as t,o as e,p as o,H as p,v as n,r as c,W as r}from"./plugin-vue_export-helper.463a469f.js";const _='{"title":"Route Meta Fields","description":"","frontmatter":{},"headers":[{"level":2,"title":"TypeScript","slug":"typescript"}],"relativePath":"guide/advanced/meta.md","lastUpdated":1665388136064}',l={},i=n("h1",{id:"route-meta-fields",tabindex:"-1"},[c("Route Meta Fields "),n("a",{class:"header-anchor",href:"#route-meta-fields","aria-hidden":"true"},"#")],-1),u=r(`<p>Sometimes, you might want to attach arbitrary information to routes like transition names, who can access the route, etc. This can be achieved through the <code>meta</code> property which accepts an object of properties and can be accessed on the route location and navigation guards. You can define <code>meta</code> properties like this:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/posts&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> PostsLayout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;new&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> PostsNew<span class="token punctuation">,</span>
        <span class="token comment">// only authenticated users can create posts</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;:id&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> PostsDetail<span class="token punctuation">,</span>
        <span class="token comment">// anybody can read a post</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">requiresAuth</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>So how do we access this <code>meta</code> field?</p><p>First, each route object in the <code>routes</code> configuration is called a <strong>route record</strong>. Route records may be nested. Therefore when a route is matched, it can potentially match more than one route record.</p><p>For example, with the above route config, the URL <code>/posts/new</code> will match both the parent route record (<code>path: &#39;/posts&#39;</code>) and the child route record (<code>path: &#39;new&#39;</code>).</p><p>All route records matched by a route are exposed on the <code>$route</code> object (and also route objects in navigation guards) as the <code>$route.matched</code> Array. We could loop through that array to check all <code>meta</code> fields, but Vue Router also provides you a <code>$route.meta</code> that is a non-recursive merge of <strong>all <code>meta</code></strong> fields from parent to child. Meaning you can simply write</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// instead of having to check every route record with</span>
  <span class="token comment">// to.matched.some(record =&gt; record.meta.requiresAuth)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requiresAuth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>auth<span class="token punctuation">.</span><span class="token function">isLoggedIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this route requires auth, check if logged in</span>
    <span class="token comment">// if not, redirect to login page.</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// save the location we were at to come back later</span>
      <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> to<span class="token punctuation">.</span>fullPath <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h2><p>It is possible to type the meta field by extending the <code>RouteMeta</code> interface from <code>vue-router</code>:</p><div class="language-ts"><pre><code><span class="token comment">// This can be directly added to any of your \`.ts\` files like \`router.ts\`</span>
<span class="token comment">// It can also be added to a \`.d.ts\` file, in which case you will need to add an export</span>
<span class="token comment">// to ensure it is treated as a module</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue-router&#39;</span> <span class="token punctuation">{</span>
  <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>
    <span class="token comment">// is optional</span>
    isAdmin<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
    <span class="token comment">// must be declared by every route</span>
    requiresAuth<span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10);function d(k,h,m,y,f,g){const a=t("VueSchoolLink");return e(),o("div",null,[i,p(a,{href:"https://vueschool.io/lessons/route-meta-fields",title:"Learn how to use route meta fields"}),u])}var w=s(l,[["render",d]]);export{_ as __pageData,w as default};
