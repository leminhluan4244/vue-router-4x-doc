import{_ as s,N as e,o as t,p as o,H as p,v as a,r,W as c}from"./plugin-vue_export-helper.463a469f.js";const f='{"title":"Named Routes","description":"","frontmatter":{},"relativePath":"guide/essentials/named-routes.md","lastUpdated":1665388136080}',l={},u=a("h1",{id:"named-routes",tabindex:"-1"},[r("Named Routes "),a("a",{class:"header-anchor",href:"#named-routes","aria-hidden":"true"},"#")],-1),i=c(`<p>Alongside the <code>path</code>, you can provide a <code>name</code> to any route. This has the following advantages:</p><ul><li>No hardcoded URLs</li><li>Automatic encoding/decoding of <code>params</code></li><li>Prevents you from having a typo in the url</li><li>Bypassing path ranking (e.g. to display a )</li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:username&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>To link to a named route, you can pass an object to the <code>router-link</code> component&#39;s <code>to</code> prop:</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ name: <span class="token punctuation">&#39;</span>user<span class="token punctuation">&#39;</span>, params: { username: <span class="token punctuation">&#39;</span>erina<span class="token punctuation">&#39;</span> }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  User
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>This is the exact same object used programmatically with <code>router.push()</code>:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;user&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;erina&#39;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>In both cases, the router will navigate to the path <code>/user/erina</code>.</p><p>Full example <a href="https://github.com/vuejs/vue-router/blob/dev/examples/named-routes/app.js" target="_blank" rel="noopener noreferrer">here</a>.</p>`,9);function d(k,h,m,g,_,v){const n=e("VueSchoolLink");return t(),o("div",null,[u,p(n,{href:"https://vueschool.io/lessons/named-routes",title:"Learn about the named routes"}),i])}var T=s(l,[["render",d]]);export{f as __pageData,T as default};