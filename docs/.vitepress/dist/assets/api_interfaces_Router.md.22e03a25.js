import{_ as e,o as t,p as a,W as o}from"./plugin-vue_export-helper.463a469f.js";const f='{"title":"Interface: Router","description":"","frontmatter":{"sidebar":"auto","editLinks":false,"sidebarDepth":3},"headers":[{"level":2,"title":"Properties","slug":"properties"},{"level":3,"title":"currentRoute","slug":"currentroute"},{"level":3,"title":"listening","slug":"listening"},{"level":3,"title":"options","slug":"options"},{"level":2,"title":"Methods","slug":"methods"},{"level":3,"title":"addRoute","slug":"addroute"},{"level":3,"title":"afterEach","slug":"aftereach"},{"level":3,"title":"back","slug":"back"},{"level":3,"title":"beforeEach","slug":"beforeeach"},{"level":3,"title":"beforeResolve","slug":"beforeresolve"},{"level":3,"title":"forward","slug":"forward"},{"level":3,"title":"getRoutes","slug":"getroutes"},{"level":3,"title":"go","slug":"go"},{"level":3,"title":"hasRoute","slug":"hasroute"},{"level":3,"title":"isReady","slug":"isready"},{"level":3,"title":"onError","slug":"onerror"},{"level":3,"title":"push","slug":"push"},{"level":3,"title":"removeRoute","slug":"removeroute"},{"level":3,"title":"replace","slug":"replace"},{"level":3,"title":"resolve","slug":"resolve"}],"relativePath":"api/interfaces/Router.md","lastUpdated":1665388136064}',r={},n=o(`<p><a href="./../">API Documentation</a> / Router</p><h1 id="interface-router" tabindex="-1">Interface: Router <a class="header-anchor" href="#interface-router" aria-hidden="true">#</a></h1><p>Router instance.</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><h3 id="currentroute" tabindex="-1">currentRoute <a class="header-anchor" href="#currentroute" aria-hidden="true">#</a></h3><p>\u2022 <code>Readonly</code> <strong>currentRoute</strong>: <code>Ref</code>&lt;<a href="./RouteLocationNormalizedLoaded.html"><code>RouteLocationNormalizedLoaded</code></a>&gt;</p><p>Current <a href="./RouteLocationNormalized.html">RouteLocationNormalized</a></p><hr><h3 id="listening" tabindex="-1">listening <a class="header-anchor" href="#listening" aria-hidden="true">#</a></h3><p>\u2022 <strong>listening</strong>: <code>boolean</code></p><p>Allows turning off the listening of history events. This is a low level api for micro-frontends.</p><hr><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h3><p>\u2022 <code>Readonly</code> <strong>options</strong>: <a href="./RouterOptions.html"><code>RouterOptions</code></a></p><p>Original options object passed to create the Router</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h2><h3 id="addroute" tabindex="-1">addRoute <a class="header-anchor" href="#addroute" aria-hidden="true">#</a></h3><p>\u25B8 <strong>addRoute</strong>(<code>parentName</code>, <code>route</code>): () =&gt; <code>void</code></p><p>Add a new <a href="./../#routerecordraw">route record</a> as the child of an existing route.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>parentName</code></td><td style="text-align:left;"><a href="./../#routerecordname"><code>RouteRecordName</code></a></td><td style="text-align:left;">Parent Route Record where <code>route</code> should be appended at</td></tr><tr><td style="text-align:left;"><code>route</code></td><td style="text-align:left;"><a href="./../#routerecordraw"><code>RouteRecordRaw</code></a></td><td style="text-align:left;">Route Record to add</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>fn</code></p><p>\u25B8 (): <code>void</code></p><p>Add a new <a href="./../#routerecordraw">route record</a> as the child of an existing route.</p><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h5><p><code>void</code></p><p>\u25B8 <strong>addRoute</strong>(<code>route</code>): () =&gt; <code>void</code></p><p>Add a new <a href="./../#routerecordraw">route record</a> to the router.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>route</code></td><td style="text-align:left;"><a href="./../#routerecordraw"><code>RouteRecordRaw</code></a></td><td style="text-align:left;">Route Record to add</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>fn</code></p><p>\u25B8 (): <code>void</code></p><p>Add a new <a href="./../#routerecordraw">route record</a> to the router.</p><h5 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h5><p><code>void</code></p><hr><h3 id="aftereach" tabindex="-1">afterEach <a class="header-anchor" href="#aftereach" aria-hidden="true">#</a></h3><p>\u25B8 <strong>afterEach</strong>(<code>guard</code>): () =&gt; <code>void</code></p><p>Add a navigation hook that is executed after every navigation. Returns a function that removes the registered hook.</p><p><strong><code>Example</code></strong></p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> failure</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNavigationFailure</span><span class="token punctuation">(</span>failure<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;failed navigation&#39;</span><span class="token punctuation">,</span> failure<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guard</code></td><td style="text-align:left;"><a href="./NavigationHookAfter.html"><code>NavigationHookAfter</code></a></td><td style="text-align:left;">navigation hook to add</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>fn</code></p><p>\u25B8 (): <code>void</code></p><p>Add a navigation hook that is executed after every navigation. Returns a function that removes the registered hook.</p><p><strong><code>Example</code></strong></p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> failure</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNavigationFailure</span><span class="token punctuation">(</span>failure<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;failed navigation&#39;</span><span class="token punctuation">,</span> failure<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h5 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h5><p><code>void</code></p><hr><h3 id="back" tabindex="-1">back <a class="header-anchor" href="#back" aria-hidden="true">#</a></h3><p>\u25B8 <strong>back</strong>(): <code>void</code></p><p>Go back in history if possible by calling <code>history.back()</code>. Equivalent to <code>router.go(-1)</code>.</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>void</code></p><hr><h3 id="beforeeach" tabindex="-1">beforeEach <a class="header-anchor" href="#beforeeach" aria-hidden="true">#</a></h3><p>\u25B8 <strong>beforeEach</strong>(<code>guard</code>): () =&gt; <code>void</code></p><p>Add a navigation guard that executes before any navigation. Returns a function that removes the registered guard.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guard</code></td><td style="text-align:left;"><a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt;</td><td style="text-align:left;">navigation guard to add</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>fn</code></p><p>\u25B8 (): <code>void</code></p><p>Add a navigation guard that executes before any navigation. Returns a function that removes the registered guard.</p><h5 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h5><p><code>void</code></p><hr><h3 id="beforeresolve" tabindex="-1">beforeResolve <a class="header-anchor" href="#beforeresolve" aria-hidden="true">#</a></h3><p>\u25B8 <strong>beforeResolve</strong>(<code>guard</code>): () =&gt; <code>void</code></p><p>Add a navigation guard that executes before navigation is about to be resolved. At this state all component have been fetched and other navigation guards have been successful. Returns a function that removes the registered guard.</p><p><strong><code>Example</code></strong></p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeResolve</span><span class="token punctuation">(</span><span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requiresAuth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>guard</code></td><td style="text-align:left;"><a href="./NavigationGuardWithThis.html"><code>NavigationGuardWithThis</code></a>&lt;<code>undefined</code>&gt;</td><td style="text-align:left;">navigation guard to add</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>fn</code></p><p>\u25B8 (): <code>void</code></p><p>Add a navigation guard that executes before navigation is about to be resolved. At this state all component have been fetched and other navigation guards have been successful. Returns a function that removes the registered guard.</p><p><strong><code>Example</code></strong></p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeResolve</span><span class="token punctuation">(</span><span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>requiresAuth <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h5 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-hidden="true">#</a></h5><p><code>void</code></p><hr><h3 id="forward" tabindex="-1">forward <a class="header-anchor" href="#forward" aria-hidden="true">#</a></h3><p>\u25B8 <strong>forward</strong>(): <code>void</code></p><p>Go forward in history if possible by calling <code>history.forward()</code>. Equivalent to <code>router.go(1)</code>.</p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-hidden="true">#</a></h4><p><code>void</code></p><hr><h3 id="getroutes" tabindex="-1">getRoutes <a class="header-anchor" href="#getroutes" aria-hidden="true">#</a></h3><p>\u25B8 <strong>getRoutes</strong>(): <a href="./RouteRecordNormalized.html"><code>RouteRecordNormalized</code></a>[]</p><p>Get a full list of all the <a href="./../#routerecord">route records</a>.</p><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-hidden="true">#</a></h4><p><a href="./RouteRecordNormalized.html"><code>RouteRecordNormalized</code></a>[]</p><hr><h3 id="go" tabindex="-1">go <a class="header-anchor" href="#go" aria-hidden="true">#</a></h3><p>\u25B8 <strong>go</strong>(<code>delta</code>): <code>void</code></p><p>Allows you to move forward or backward through the history. Calls <code>history.go()</code>.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>delta</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">The position in the history to which you want to move, relative to the current page</td></tr></tbody></table><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-hidden="true">#</a></h4><p><code>void</code></p><hr><h3 id="hasroute" tabindex="-1">hasRoute <a class="header-anchor" href="#hasroute" aria-hidden="true">#</a></h3><p>\u25B8 <strong>hasRoute</strong>(<code>name</code>): <code>boolean</code></p><p>Checks if a route with a given name exists</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><a href="./../#routerecordname"><code>RouteRecordName</code></a></td><td style="text-align:left;">Name of the route to check</td></tr></tbody></table><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14" aria-hidden="true">#</a></h4><p><code>boolean</code></p><hr><h3 id="isready" tabindex="-1">isReady <a class="header-anchor" href="#isready" aria-hidden="true">#</a></h3><p>\u25B8 <strong>isReady</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Returns a Promise that resolves when the router has completed the initial navigation, which means it has resolved all async enter hooks and async components that are associated with the initial route. If the initial navigation already happened, the promise resolves immediately.</p><p>This is useful in server-side rendering to ensure consistent output on both the server and the client. Note that on server side, you need to manually push the initial location while on client side, the router automatically picks it up from the URL.</p><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><hr><h3 id="onerror" tabindex="-1">onError <a class="header-anchor" href="#onerror" aria-hidden="true">#</a></h3><p>\u25B8 <strong>onError</strong>(<code>handler</code>): () =&gt; <code>void</code></p><p>Adds an error handler that is called every time a non caught error happens during navigation. This includes errors thrown synchronously and asynchronously, errors returned or passed to <code>next</code> in any navigation guard, and errors occurred when trying to resolve an async component that is required to render a route.</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>handler</code></td><td style="text-align:left;"><code>_ErrorHandler</code></td><td style="text-align:left;">error handler to register</td></tr></tbody></table><h4 id="returns-16" tabindex="-1">Returns <a class="header-anchor" href="#returns-16" aria-hidden="true">#</a></h4><p><code>fn</code></p><p>\u25B8 (): <code>void</code></p><p>Adds an error handler that is called every time a non caught error happens during navigation. This includes errors thrown synchronously and asynchronously, errors returned or passed to <code>next</code> in any navigation guard, and errors occurred when trying to resolve an async component that is required to render a route.</p><h5 id="returns-17" tabindex="-1">Returns <a class="header-anchor" href="#returns-17" aria-hidden="true">#</a></h5><p><code>void</code></p><hr><h3 id="push" tabindex="-1">push <a class="header-anchor" href="#push" aria-hidden="true">#</a></h3><p>\u25B8 <strong>push</strong>(<code>to</code>): <code>Promise</code>&lt;<code>undefined</code> | <code>void</code> | <a href="./NavigationFailure.html"><code>NavigationFailure</code></a>&gt;</p><p>Programmatically navigate to a new URL by pushing an entry in the history stack.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><a href="./../#routelocationraw"><code>RouteLocationRaw</code></a></td><td style="text-align:left;">Route location to navigate to</td></tr></tbody></table><h4 id="returns-18" tabindex="-1">Returns <a class="header-anchor" href="#returns-18" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>undefined</code> | <code>void</code> | <a href="./NavigationFailure.html"><code>NavigationFailure</code></a>&gt;</p><hr><h3 id="removeroute" tabindex="-1">removeRoute <a class="header-anchor" href="#removeroute" aria-hidden="true">#</a></h3><p>\u25B8 <strong>removeRoute</strong>(<code>name</code>): <code>void</code></p><p>Remove an existing route by its name.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><a href="./../#routerecordname"><code>RouteRecordName</code></a></td><td style="text-align:left;">Name of the route to remove</td></tr></tbody></table><h4 id="returns-19" tabindex="-1">Returns <a class="header-anchor" href="#returns-19" aria-hidden="true">#</a></h4><p><code>void</code></p><hr><h3 id="replace" tabindex="-1">replace <a class="header-anchor" href="#replace" aria-hidden="true">#</a></h3><p>\u25B8 <strong>replace</strong>(<code>to</code>): <code>Promise</code>&lt;<code>undefined</code> | <code>void</code> | <a href="./NavigationFailure.html"><code>NavigationFailure</code></a>&gt;</p><p>Programmatically navigate to a new URL by replacing the current entry in the history stack.</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><a href="./../#routelocationraw"><code>RouteLocationRaw</code></a></td><td style="text-align:left;">Route location to navigate to</td></tr></tbody></table><h4 id="returns-20" tabindex="-1">Returns <a class="header-anchor" href="#returns-20" aria-hidden="true">#</a></h4><p><code>Promise</code>&lt;<code>undefined</code> | <code>void</code> | <a href="./NavigationFailure.html"><code>NavigationFailure</code></a>&gt;</p><hr><h3 id="resolve" tabindex="-1">resolve <a class="header-anchor" href="#resolve" aria-hidden="true">#</a></h3><p>\u25B8 <strong>resolve</strong>(<code>to</code>, <code>currentLocation?</code>): <a href="./RouteLocation.html"><code>RouteLocation</code></a> &amp; { <code>href</code>: <code>string</code> }</p><p>Returns the <a href="./RouteLocation.html">normalized version</a> of a <a href="./../#routelocationraw">route location</a>. Also includes an <code>href</code> property that includes any existing <code>base</code>. By default, the <code>currentLocation</code> used is <code>route.currentRoute</code> and should only be overridden in advanced use cases.</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>to</code></td><td style="text-align:left;"><a href="./../#routelocationraw"><code>RouteLocationRaw</code></a></td><td style="text-align:left;">Raw route location to resolve</td></tr><tr><td style="text-align:left;"><code>currentLocation?</code></td><td style="text-align:left;"><a href="./RouteLocationNormalizedLoaded.html"><code>RouteLocationNormalizedLoaded</code></a></td><td style="text-align:left;">Optional current location to resolve against</td></tr></tbody></table><h4 id="returns-21" tabindex="-1">Returns <a class="header-anchor" href="#returns-21" aria-hidden="true">#</a></h4><p><a href="./RouteLocation.html"><code>RouteLocation</code></a> &amp; { <code>href</code>: <code>string</code> }</p>`,166),s=[n];function d(i,c,l,h,p,u){return t(),a("div",null,s)}var y=e(r,[["render",d]]);export{f as __pageData,y as default};
