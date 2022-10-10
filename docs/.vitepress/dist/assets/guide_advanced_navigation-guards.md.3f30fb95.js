import{_ as s,N as e,o as t,p as o,H as p,v as n,r as c,W as r}from"./plugin-vue_export-helper.463a469f.js";const b='{"title":"Navigation Guards","description":"","frontmatter":{},"headers":[{"level":2,"title":"Global Before Guards","slug":"global-before-guards"},{"level":3,"title":"Optional third argument next","slug":"optional-third-argument-next"},{"level":2,"title":"Global Resolve Guards","slug":"global-resolve-guards"},{"level":2,"title":"Global After Hooks","slug":"global-after-hooks"},{"level":2,"title":"Per-Route Guard","slug":"per-route-guard"},{"level":2,"title":"In-Component Guards","slug":"in-component-guards"},{"level":3,"title":"Using the options API","slug":"using-the-options-api"},{"level":3,"title":"Using the composition API","slug":"using-the-composition-api"},{"level":2,"title":"The Full Navigation Resolution Flow","slug":"the-full-navigation-resolution-flow"}],"relativePath":"guide/advanced/navigation-guards.md","lastUpdated":1665388136064}',l={},i=n("h1",{id:"navigation-guards",tabindex:"-1"},[c("Navigation Guards "),n("a",{class:"header-anchor",href:"#navigation-guards","aria-hidden":"true"},"#")],-1),u=r(`<p>As the name suggests, the navigation guards provided by Vue router are primarily used to guard navigations either by redirecting it or canceling it. There are a number of ways to hook into the route navigation process: globally, per-route, or in-component.</p><h2 id="global-before-guards" tabindex="-1">Global Before Guards <a class="header-anchor" href="#global-before-guards" aria-hidden="true">#</a></h2><p>You can register global before guards using <code>router.beforeEach</code>:</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// explicitly return false to cancel the navigation</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Global before guards are called in creation order, whenever a navigation is triggered. Guards may be resolved asynchronously, and the navigation is considered <strong>pending</strong> before all hooks have been resolved.</p><p>Every guard function receives two arguments:</p><ul><li><strong><code>to</code></strong>: the target route location <a href="./../../api/#routelocationnormalized">in a normalized format</a> being navigated to.</li><li><strong><code>from</code></strong>: the current route location <a href="./../../api/#routelocationnormalized">in a normalized format</a> being navigated away from.</li></ul><p>And can optionally return any of the following values:</p><ul><li><p><code>false</code>: cancel the current navigation. If the browser URL was changed (either manually by the user or via back button), it will be reset to that of the <code>from</code> route.</p></li><li><p>A <a href="./../../api/#routelocationraw">Route Location</a>: Redirect to a different location by passing a route location as if you were calling <a href="./../../api/#push"><code>router.push()</code></a>, which allows you to pass options like <code>replace: true</code> or <code>name: &#39;home&#39;</code>. The current navigation is dropped and a new one is created with the same <code>from</code>.</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    <span class="token comment">// make sure the user is authenticated</span>
    <span class="token operator">!</span>isAuthenticated <span class="token operator">&amp;&amp;</span>
    <span class="token comment">// \u2757\uFE0F Avoid an infinite redirect</span>
    to<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">&#39;Login&#39;</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// redirect the user to the login page</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ul><p>It&#39;s also possible to throw an <code>Error</code> if an unexpected situation was met. This will also cancel the navigation and call any callback registered via <a href="./../../api/#onerror"><code>router.onError()</code></a>.</p><p>If nothing, <code>undefined</code> or <code>true</code> is returned, <strong>the navigation is validated</strong>, and the next navigation guard is called.</p><p>All of the the things above <strong>work the same way with <code>async</code> functions</strong> and Promises:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// canUserAccess() returns \`true\` or \`false\`</span>
  <span class="token keyword">const</span> canAccess <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">canUserAccess</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>canAccess<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;/login&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="optional-third-argument-next" tabindex="-1">Optional third argument <code>next</code> <a class="header-anchor" href="#optional-third-argument-next" aria-hidden="true">#</a></h3><p>In previous versions of Vue Router, it was also possible to use a <em>third argument</em> <code>next</code>, this was a common source of mistakes and went through an <a href="https://github.com/vuejs/rfcs/blob/master/active-rfcs/0037-router-return-guards.md#motivation" target="_blank" rel="noopener noreferrer">RFC</a> to remove it. However, it is still supported, meaning you can pass a third argument to any navigation guard. In that case, <strong>you must call <code>next</code> exactly once</strong> in any given pass through a navigation guard. It can appear more than once, but only if the logical paths have no overlap, otherwise the hook will never be resolved or produce errors. Here is <strong>a bad example</strong> of redirecting to user to <code>/login</code> if they are not authenticated:</p><div class="language-js"><pre><code><span class="token comment">// BAD</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">&#39;Login&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// if the user is not authenticated, \`next\` is called twice</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Here is the correct version:</p><div class="language-js"><pre><code><span class="token comment">// GOOD</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>name <span class="token operator">!==</span> <span class="token string">&#39;Login&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">else</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="global-resolve-guards" tabindex="-1">Global Resolve Guards <a class="header-anchor" href="#global-resolve-guards" aria-hidden="true">#</a></h2><p>You can register a global guard with <code>router.beforeResolve</code>. This is similar to <code>router.beforeEach</code> because it triggers on <strong>every navigation</strong>, but resolve guards are called right before the navigation is confirmed, <strong>after all in-component guards and async route components are resolved</strong>. Here is an example that ensures the user has given access to the Camera for routes that <a href="./meta.html">have defined a custom meta</a> property <code>requiresCamera</code>:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeResolve</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requiresCamera<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token function">askForCameraPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>error <span class="token keyword">instanceof</span> <span class="token class-name">NotAllowedError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ... handle the error and then cancel the navigation</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// unexpected error, cancel the navigation and pass the error to the global handler</span>
        <span class="token keyword">throw</span> error
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>router.beforeResolve</code> is the ideal spot to fetch data or do any other operation that you want to avoid doing if the user cannot enter a page.</p><h2 id="global-after-hooks" tabindex="-1">Global After Hooks <a class="header-anchor" href="#global-after-hooks" aria-hidden="true">#</a></h2><p>You can also register global after hooks, however unlike guards, these hooks do not get a <code>next</code> function and cannot affect the navigation:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>fullPath<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>They are useful for analytics, changing the title of the page, accessibility features like announcing the page and many other things.</p><p>They also reflect <a href="./navigation-failures.html">navigation failures</a> as the third argument:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> failure</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>failure<span class="token punctuation">)</span> <span class="token function">sendToAnalytics</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>fullPath<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Learn more about navigation failures on <a href="./navigation-failures.html">its guide</a>.</p><h2 id="per-route-guard" tabindex="-1">Per-Route Guard <a class="header-anchor" href="#per-route-guard" aria-hidden="true">#</a></h2><p>You can define <code>beforeEnter</code> guards directly on a route&#39;s configuration object:</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UserDetails<span class="token punctuation">,</span>
    <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// reject the navigation</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p><code>beforeEnter</code> guards <strong>only trigger when entering the route</strong>, they don&#39;t trigger when the <code>params</code>, <code>query</code> or <code>hash</code> change e.g. going from <code>/users/2</code> to <code>/users/3</code> or going from <code>/users/2#info</code> to <code>/users/2#projects</code>. They are only triggered when navigating <strong>from a different</strong> route.</p><p>You can also pass an array of functions to <code>beforeEnter</code>, this is useful when reusing guards for different routes:</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">removeQueryParams</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>query<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> to<span class="token punctuation">.</span>path<span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> to<span class="token punctuation">.</span>hash <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">removeHash</span><span class="token punctuation">(</span><span class="token parameter">to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> to<span class="token punctuation">.</span>path<span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> to<span class="token punctuation">.</span>query<span class="token punctuation">,</span> <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/users/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UserDetails<span class="token punctuation">,</span>
    <span class="token literal-property property">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">[</span>removeQueryParams<span class="token punctuation">,</span> removeHash<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UserDetails<span class="token punctuation">,</span>
    <span class="token literal-property property">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">[</span>removeQueryParams<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><p>Note it is possible to achieve a similar behavior by using <a href="./meta.html">route meta fields</a> and <a href="#global-before-guards">global navigation guards</a>.</p><h2 id="in-component-guards" tabindex="-1">In-Component Guards <a class="header-anchor" href="#in-component-guards" aria-hidden="true">#</a></h2><p>Finally, you can directly define route navigation guards inside route components (the ones passed to the router configuration)</p><h3 id="using-the-options-api" tabindex="-1">Using the options API <a class="header-anchor" href="#using-the-options-api" aria-hidden="true">#</a></h3><p>You can add the following options to route components:</p><ul><li><code>beforeRouteEnter</code></li><li><code>beforeRouteUpdate</code></li><li><code>beforeRouteLeave</code></li></ul><div class="language-js"><pre><code><span class="token keyword">const</span> UserDetails <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">...</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// called before the route that renders this component is confirmed.</span>
    <span class="token comment">// does NOT have access to \`this\` component instance,</span>
    <span class="token comment">// because it has not been created yet when this guard is called!</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteUpdate</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// called when the route that renders this component has changed, but this component is reused in the new route.</span>
    <span class="token comment">// For example, given a route with params \`/users/:id\`, when we navigate between \`/users/1\` and \`/users/2\`,</span>
    <span class="token comment">// the same \`UserDetails\` component instance will be reused, and this hook will be called when that happens.</span>
    <span class="token comment">// Because the component is mounted while this happens, the navigation guard has access to \`this\` component instance.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeRouteLeave</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// called when the route that renders this component is about to be navigated away from.</span>
    <span class="token comment">// As with \`beforeRouteUpdate\`, it has access to \`this\` component instance.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The <code>beforeRouteEnter</code> guard does <strong>NOT</strong> have access to <code>this</code>, because the guard is called before the navigation is confirmed, thus the new entering component has not even been created yet.</p><p>However, you can access the instance by passing a callback to <code>next</code>. The callback will be called when the navigation is confirmed, and the component instance will be passed to the callback as the argument:</p><div class="language-js"><pre><code><span class="token function">beforeRouteEnter</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// access to component public instance via \`vm\`</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Note that <code>beforeRouteEnter</code> is the only guard that supports passing a callback to <code>next</code>. For <code>beforeRouteUpdate</code> and <code>beforeRouteLeave</code>, <code>this</code> is already available, so passing a callback is unnecessary and therefore <em>not supported</em>:</p><div class="language-js"><pre><code><span class="token function">beforeRouteUpdate</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// just use \`this\`</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>name
<span class="token punctuation">}</span>
</code></pre></div><p>The <strong>leave guard</strong> is usually used to prevent the user from accidentally leaving the route with unsaved edits. The navigation can be canceled by returning <code>false</code>.</p><div class="language-js"><pre><code><span class="token function">beforeRouteLeave</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> answer <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&#39;Do you really want to leave? you have unsaved changes!&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>answer<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="using-the-composition-api" tabindex="-1">Using the composition API <a class="header-anchor" href="#using-the-composition-api" aria-hidden="true">#</a></h3><p>If you are writing your component using the <a href="https://v3.vuejs.org/guide/composition-api-setup.html#setup" target="_blank" rel="noopener noreferrer">composition API and a <code>setup</code> function</a>, you can add update and leave guards through <code>onBeforeRouteUpdate</code> and <code>onBeforeRouteLeave</code> respectively. Please refer to the <a href="./composition-api.html#navigation-guards">Composition API section</a> for more details.</p><h2 id="the-full-navigation-resolution-flow" tabindex="-1">The Full Navigation Resolution Flow <a class="header-anchor" href="#the-full-navigation-resolution-flow" aria-hidden="true">#</a></h2><ol><li>Navigation triggered.</li><li>Call <code>beforeRouteLeave</code> guards in deactivated components.</li><li>Call global <code>beforeEach</code> guards.</li><li>Call <code>beforeRouteUpdate</code> guards in reused components.</li><li>Call <code>beforeEnter</code> in route configs.</li><li>Resolve async route components.</li><li>Call <code>beforeRouteEnter</code> in activated components.</li><li>Call global <code>beforeResolve</code> guards.</li><li>Navigation is confirmed.</li><li>Call global <code>afterEach</code> hooks.</li><li>DOM updates triggered.</li><li>Call callbacks passed to <code>next</code> in <code>beforeRouteEnter</code> guards with instantiated instances.</li></ol>`,53);function k(d,h,g,f,m,v){const a=e("VueSchoolLink");return t(),o("div",null,[i,p(a,{href:"https://vueschool.io/lessons/route-guards",title:"Learn how to add navigation guards"}),u])}var w=s(l,[["render",k]]);export{b as __pageData,w as default};
