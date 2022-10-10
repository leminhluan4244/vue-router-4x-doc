import{_ as a,N as e,o as t,p,H as o,v as s,r,W as c}from"./plugin-vue_export-helper.463a469f.js";const f='{"title":"Passing Props to Route Components","description":"","frontmatter":{},"headers":[{"level":2,"title":"Boolean mode","slug":"boolean-mode"},{"level":2,"title":"Named views","slug":"named-views"},{"level":2,"title":"Object mode","slug":"object-mode"},{"level":2,"title":"Function mode","slug":"function-mode"}],"relativePath":"guide/essentials/passing-props.md","lastUpdated":1665388136080}',l={},i=s("h1",{id:"passing-props-to-route-components",tabindex:"-1"},[r("Passing Props to Route Components "),s("a",{class:"header-anchor",href:"#passing-props-to-route-components","aria-hidden":"true"},"#")],-1),u=c(`<p>Using <code>$route</code> in your component creates a tight coupling with the route which limits the flexibility of the component as it can only be used on certain URLs. While this is not necessarily a bad thing, we can decouple this behavior with a <code>props</code> option:</p><p>We can replace</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>with</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// make sure to add a prop named exactly like the route param</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ id }}&lt;/div&gt;&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>This allows you to use the component anywhere, which makes the component easier to reuse and test.</p><h2 id="boolean-mode" tabindex="-1">Boolean mode <a class="header-anchor" href="#boolean-mode" aria-hidden="true">#</a></h2><p>When <code>props</code> is set to <code>true</code>, the <code>route.params</code> will be set as the component props.</p><h2 id="named-views" tabindex="-1">Named views <a class="header-anchor" href="#named-views" aria-hidden="true">#</a></h2><p>For routes with named views, you have to define the <code>props</code> option for each named view:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> User<span class="token punctuation">,</span> <span class="token literal-property property">sidebar</span><span class="token operator">:</span> Sidebar <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="object-mode" tabindex="-1">Object mode <a class="header-anchor" href="#object-mode" aria-hidden="true">#</a></h2><p>When <code>props</code> is an object, this will be set as the component props as-is. Useful for when the props are static.</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/promotion/from-newsletter&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Promotion<span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">newsletterPopup</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="function-mode" tabindex="-1">Function mode <a class="header-anchor" href="#function-mode" aria-hidden="true">#</a></h2><p>You can create a function that returns props. This allows you to cast parameters into other types, combine static values with route-based values, etc.</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/search&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> SearchUser<span class="token punctuation">,</span>
    <span class="token function-variable function">props</span><span class="token operator">:</span> <span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">query</span><span class="token operator">:</span> route<span class="token punctuation">.</span>query<span class="token punctuation">.</span>q <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>The URL <code>/search?q=vue</code> would pass <code>{query: &#39;vue&#39;}</code> as props to the <code>SearchUser</code> component.</p><p>Try to keep the <code>props</code> function stateless, as it&#39;s only evaluated on route changes. Use a wrapper component if you need state to define the props, that way vue can react to state changes.</p>`,19);function d(k,h,y,m,g,v){const n=e("VueSchoolLink");return t(),p("div",null,[i,o(n,{href:"https://vueschool.io/lessons/route-props",title:"Learn how to pass props to route components"}),u])}var b=a(l,[["render",d]]);export{f as __pageData,b as default};
