import{_ as s,N as t,o as e,p as o,H as p,v as n,r,W as c}from"./plugin-vue_export-helper.463a469f.js";const w='{"title":"Dynamic Routing","description":"","frontmatter":{},"headers":[{"level":2,"title":"Adding Routes","slug":"adding-routes"},{"level":2,"title":"Adding Routes inside navigation guards","slug":"adding-routes-inside-navigation-guards"},{"level":2,"title":"Removing routes","slug":"removing-routes"},{"level":2,"title":"Adding nested routes","slug":"adding-nested-routes"},{"level":2,"title":"Looking at existing routes","slug":"looking-at-existing-routes"}],"relativePath":"guide/advanced/dynamic-routing.md","lastUpdated":1665388136064}',i={},u=n("h1",{id:"dynamic-routing",tabindex:"-1"},[r("Dynamic Routing "),n("a",{class:"header-anchor",href:"#dynamic-routing","aria-hidden":"true"},"#")],-1),l=c(`<p>Adding routes to your router is usually done via the <a href="./../../api/#routes"><code>routes</code> option</a> but in some situations, you might want to add or remove routes while the application is already running. Application with extensible interfaces like <a href="https://cli.vuejs.org/dev-guide/ui-api.html" target="_blank" rel="noopener noreferrer">Vue CLI UI</a> can use this to make the application grow.</p><h2 id="adding-routes" tabindex="-1">Adding Routes <a class="header-anchor" href="#adding-routes" aria-hidden="true">#</a></h2><p>Dynamic routing is achieved mainly via two functions: <code>router.addRoute()</code> and <code>router.removeRoute()</code>. They <strong>only</strong> register a new route, meaning that if the newly added route matches the current location, it would require you to <strong>manually navigate</strong> with <code>router.push()</code> or <code>router.replace()</code> to display that new route. Let&#39;s take a look at an example:</p><p>Imagine having the following router with one single route:</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:articleName&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Article <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>Going to any page, <code>/about</code>, <code>/store</code>, or <code>/3-tricks-to-improve-your-routing-code</code> ends up rendering the <code>Article</code> component. If we are on <code>/about</code> and we add a new route:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>The page will still show the <code>Article</code> component, we need to manually call <code>router.replace()</code> to change the current location and overwrite where we were (instead of pushing a new entry, ending up in the same location twice in our history):</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// we could also use this.$route or route = useRoute() (inside a setup)</span>
router<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>value<span class="token punctuation">.</span>fullPath<span class="token punctuation">)</span>
</code></pre></div><p>Remember you can <code>await router.replace()</code> if you need to wait for the new route to be displayed.</p><h2 id="adding-routes-inside-navigation-guards" tabindex="-1">Adding Routes inside navigation guards <a class="header-anchor" href="#adding-routes-inside-navigation-guards" aria-hidden="true">#</a></h2><p>If you decide to add or remove routes inside of a navigation guard, you should not call <code>router.replace()</code> but trigger a redirection by returning the new location:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token parameter">to</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasNecessaryRoute</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token function">generateRoute</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment">// trigger a redirection</span>
    <span class="token keyword">return</span> to<span class="token punctuation">.</span>fullPath
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>The example above assumes two things: first, the newly added route record will match the <code>to</code> location, effectively resulting in a different location from the one we were trying to access. Second, <code>hasNecessaryRoute()</code> returns <code>false</code> after adding the new route to avoid an infinite redirection.</p><p>Because we are redirecting, we are replacing the ongoing navigation, effectively behaving like the example shown before. In real world scenarios, adding is more likely to happen outside of navigation guards, e.g. when a view component mounts, it register new routes.</p><h2 id="removing-routes" tabindex="-1">Removing routes <a class="header-anchor" href="#removing-routes" aria-hidden="true">#</a></h2><p>There are few different ways to remove existing routes:</p><ul><li>By adding a route with a conflicting name. If you add a route that has the same name as an existing route, it will remove the route first and then add the route:<div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// this will remove the previously added route because they have the same name and names are unique</span>
router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/other&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Other <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li>By calling the callback returned by <code>router.addRoute()</code>:<div class="language-js"><pre><code><span class="token keyword">const</span> removeRoute <span class="token operator">=</span> router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span>routeRecord<span class="token punctuation">)</span>
<span class="token function">removeRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// removes the route if it exists</span>
</code></pre></div>This is useful when the routes do not have a name</li><li>By using <code>router.removeRoute()</code> to remove a route by its name:<div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// remove the route</span>
router<span class="token punctuation">.</span><span class="token function">removeRoute</span><span class="token punctuation">(</span><span class="token string">&#39;about&#39;</span><span class="token punctuation">)</span>
</code></pre></div>Note you can use <code>Symbol</code>s for names in routes if you wish to use this function but want to avoid conflicts in names.</li></ul><p>Whenever a route is removed, <strong>all of its aliases and children</strong> are removed with it.</p><h2 id="adding-nested-routes" tabindex="-1">Adding nested routes <a class="header-anchor" href="#adding-nested-routes" aria-hidden="true">#</a></h2><p>To add nested routes to an existing route, you can pass the <em>name</em> of the route as its first parameter to <code>router.addRoute()</code>, this will effectively add the route as if it was added through <code>children</code>:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/admin&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Admin <span class="token punctuation">}</span><span class="token punctuation">)</span>
router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;settings&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> AdminSettings <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>This is equivalent to:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">addRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/admin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> Admin<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;settings&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> AdminSettings <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="looking-at-existing-routes" tabindex="-1">Looking at existing routes <a class="header-anchor" href="#looking-at-existing-routes" aria-hidden="true">#</a></h2><p>Vue Router gives you two functions to look at existing routes:</p><ul><li><a href="./../../api/#hasroute"><code>router.hasRoute()</code></a>: check if a route exists</li><li><a href="./../../api/#getroutes"><code>router.getRoutes()</code></a>: get an array with all the route records.</li></ul>`,27);function d(k,g,h,y,m,f){const a=t("VueSchoolLink");return e(),o("div",null,[u,p(a,{href:"https://vueschool.io/lessons/vue-router-4-dynamic-routing",title:"Learn how to add routes at runtime"}),l])}var R=s(i,[["render",d]]);export{w as __pageData,R as default};
