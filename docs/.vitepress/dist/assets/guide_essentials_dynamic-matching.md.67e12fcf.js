import{_ as e,N as o,o as p,p as c,H as n,v as t,r,W as s}from"./plugin-vue_export-helper.463a469f.js";const b='{"title":"Dynamic Route Matching with Params","description":"","frontmatter":{},"headers":[{"level":2,"title":"Reacting to Params Changes","slug":"reacting-to-params-changes"},{"level":2,"title":"Catch all / 404 Not found Route","slug":"catch-all-404-not-found-route"},{"level":2,"title":"Advanced Matching Patterns","slug":"advanced-matching-patterns"}],"relativePath":"guide/essentials/dynamic-matching.md","lastUpdated":1665388136080}',l={},i=t("h1",{id:"dynamic-route-matching-with-params",tabindex:"-1"},[r("Dynamic Route Matching with Params "),t("a",{class:"header-anchor",href:"#dynamic-route-matching-with-params","aria-hidden":"true"},"#")],-1),u=s(`<p>Very often we will need to map routes with the given pattern to the same component. For example we may have a <code>User</code> component which should be rendered for all users but with different user IDs. In Vue Router we can use a dynamic segment in the path to achieve that, we call that a <em>param</em>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">// these are passed to \`createRouter\`</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// dynamic segments start with a colon</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> User <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>Now URLs like <code>/users/johnny</code> and <code>/users/jolyne</code> will both map to the same route.</p><p>A <em>param</em> is denoted by a colon <code>:</code>. When a route is matched, the value of its <em>params</em> will be exposed as <code>this.$route.params</code> in every component. Therefore, we can render the current user ID by updating <code>User</code>&#39;s template to this:</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;User {{ $route.params.id }}&lt;/div&gt;&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>You can have multiple <em>params</em> in the same route, and they will map to corresponding fields on <code>$route.params</code>. Examples:</p><table><thead><tr><th>pattern</th><th>matched path</th><th>$route.params</th></tr></thead><tbody><tr><td>/users/:username</td><td>/users/eduardo</td><td><code>{ username: &#39;eduardo&#39; }</code></td></tr><tr><td>/users/:username/posts/:postId</td><td>/users/eduardo/posts/123</td><td><code>{ username: &#39;eduardo&#39;, postId: &#39;123&#39; }</code></td></tr></tbody></table><p>In addition to <code>$route.params</code>, the <code>$route</code> object also exposes other useful information such as <code>$route.query</code> (if there is a query in the URL), <code>$route.hash</code>, etc. You can check out the full details in the <a href="./../../api/#routelocationnormalized">API Reference</a>.</p><p>A working demo of this example can be found <a href="https://codesandbox.io/s/route-params-vue-router-examples-mlb14?from-embed&amp;initialpath=%2Fusers%2Feduardo%2Fposts%2F1" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="reacting-to-params-changes" tabindex="-1">Reacting to Params Changes <a class="header-anchor" href="#reacting-to-params-changes" aria-hidden="true">#</a></h2>`,10),d=s(`<p>One thing to note when using routes with params is that when the user navigates from <code>/users/johnny</code> to <code>/users/jolyne</code>, <strong>the same component instance will be reused</strong>. Since both routes render the same component, this is more efficient than destroying the old instance and then creating a new one. <strong>However, this also means that the lifecycle hooks of the component will not be called</strong>.</p><p>To react to params changes in the same component, you can simply watch anything on the <code>$route</code> object, in this scenario, the <code>$route.params</code>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token parameter">toParams<span class="token punctuation">,</span> previousParams</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// react to route changes...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Or, use the <code>beforeRouteUpdate</code> <a href="./../advanced/navigation-guards.html">navigation guard</a>, which also allows to cancel the navigation:</p><div class="language-js"><pre><code><span class="token keyword">const</span> User <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// react to route changes...</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>userData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="catch-all-404-not-found-route" tabindex="-1">Catch all / 404 Not found Route <a class="header-anchor" href="#catch-all-404-not-found-route" aria-hidden="true">#</a></h2>`,6),h=s(`<p>Regular params will only match characters in between url fragments, separated by <code>/</code>. If we want to match <strong>anything</strong>, we can use a custom <em>param</em> regexp by adding the regexp inside parentheses right after the <em>param</em>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// will match everything and put it under \`$route.params.pathMatch\`</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NotFound&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> NotFound <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// will match anything starting with \`/user-\` and put it under \`$route.params.afterUser\`</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/user-:afterUser(.*)&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> UserGeneric <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>In this specific scenario we are using a <a href="./route-matching-syntax.html#custom-regexp-in-params">custom regexp</a> between parentheses and marking the <code>pathMatch</code> param as <a href="./route-matching-syntax.html#optional-parameters">optionally repeatable</a>. This allows us to directly navigate to the route if we need to by splitting the <code>path</code> into an array:</p><div class="language-js"><pre><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NotFound&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// preserve current path and remove the first char to avoid the target URL starting with \`//\`</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">pathMatch</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>path<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// preserve existing query and hash if any</span>
  <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">,</span>
  <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>hash<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>See more in the <a href="./route-matching-syntax.html#repeatable-params">repeated params</a> section.</p><p>If you are using <a href="./history-mode.html">History mode</a>, make sure to follow the instructions to correctly configure your server as well.</p><h2 id="advanced-matching-patterns" tabindex="-1">Advanced Matching Patterns <a class="header-anchor" href="#advanced-matching-patterns" aria-hidden="true">#</a></h2><p>Vue Router uses its own path matching syntax, inspired by the one used by <code>express</code>, so it supports many advanced matching patterns such as optional params, zero or more / one or more requirements, and even custom regex patterns. Please check the <a href="./route-matching-syntax.html">Advanced Matching</a> documentation to explore them.</p>`,8);function k(m,g,y,f,w,_){const a=o("VueSchoolLink");return p(),c("div",null,[i,n(a,{href:"https://vueschool.io/lessons/dynamic-routes",title:"Learn about dynamic route matching with params"}),u,n(a,{href:"https://vueschool.io/lessons/reacting-to-param-changes",title:"Learn how to react to param changes"}),d,n(a,{href:"https://vueschool.io/lessons/404-not-found-page",title:"Learn how to make a catch all/404 not found route"}),h])}var x=e(l,[["render",k]]);export{b as __pageData,x as default};
