import{_ as e,N as s,o as t,p as o,H as i,v as a,r as p,W as c}from"./plugin-vue_export-helper.463a469f.js";const y=`{"title":"Waiting for the result of a Navigation","description":"","frontmatter":{},"headers":[{"level":2,"title":"Detecting Navigation Failures","slug":"detecting-navigation-failures"},{"level":2,"title":"Differentiating Navigation Failures","slug":"differentiating-navigation-failures"},{"level":2,"title":"Navigation Failures's properties","slug":"navigation-failures-s-properties"},{"level":2,"title":"Detecting Redirections","slug":"detecting-redirections"}],"relativePath":"guide/advanced/navigation-failures.md","lastUpdated":1665388136064}`,r={},l=a("h1",{id:"waiting-for-the-result-of-a-navigation",tabindex:"-1"},[p("Waiting for the result of a Navigation "),a("a",{class:"header-anchor",href:"#waiting-for-the-result-of-a-navigation","aria-hidden":"true"},"#")],-1),u=c(`<p>When using <code>router-link</code>, Vue Router calls <code>router.push</code> to trigger a navigation. While the expected behavior for most links is to navigate a user to a new page, there are a few situations where users will remain on the same page:</p><ul><li>Users are already on the page that they are trying to navigate to.</li><li>A <a href="./navigation-guards.html">navigation guard</a> aborts the navigation by doing <code>return false</code>.</li><li>A new navigation guard takes place while the previous one not finished.</li><li>A <a href="./navigation-guards.html">navigation guard</a> redirects somewhere else by returning a new location (e.g. <code>return &#39;/login&#39;</code>).</li><li>A <a href="./navigation-guards.html">navigation guard</a> throws an <code>Error</code>.</li></ul><p>If we want to do something after a navigation is finished, we need a way to wait after calling <code>router.push</code>. Imagine we have a mobile menu that allows us to go to different pages and we only want to hide the menu once we have navigated to the new page, we might want to do something like this:</p><div class="language-js"><pre><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/my-profile&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>isMenuOpen <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre></div><p>But this will close the menu right away because <strong>navigations are asynchronous</strong>, we need to <code>await</code> the promise returned by <code>router.push</code>:</p><div class="language-js"><pre><code><span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/my-profile&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>isMenuOpen <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre></div><p>Now the menu will close once the navigation is finished but it will also close if the navigation was prevented. We need a way to detect if we actually changed the page we are on or not.</p><h2 id="detecting-navigation-failures" tabindex="-1">Detecting Navigation Failures <a class="header-anchor" href="#detecting-navigation-failures" aria-hidden="true">#</a></h2><p>If a navigation is prevented, resulting in the user staying on the same page, the resolved value of the <code>Promise</code> returned by <code>router.push</code> will be a <em>Navigation Failure</em>. Otherwise, it will be a <em>falsy</em> value (usually <code>undefined</code>). This allows us to differentiate the case where we navigated away from where we are or not:</p><div class="language-js"><pre><code><span class="token keyword">const</span> navigationResult <span class="token operator">=</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/my-profile&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>navigationResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// navigation prevented</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// navigation succeeded (this includes the case of a redirection)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>isMenuOpen <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Navigation Failures</em> are <code>Error</code> instances with a few extra properties that gives us enough information to know what navigation was prevented and why. To check the nature of a navigation result, use the <code>isNavigationFailure</code> function:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NavigationFailureType<span class="token punctuation">,</span> isNavigationFailure <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token comment">// trying to leave the editing page of an article without saving</span>
<span class="token keyword">const</span> failure <span class="token operator">=</span> <span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/articles/2&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNavigationFailure</span><span class="token punctuation">(</span>failure<span class="token punctuation">,</span> NavigationFailureType<span class="token punctuation">.</span>aborted<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// show a small notification to the user</span>
  <span class="token function">showToast</span><span class="token punctuation">(</span><span class="token string">&#39;You have unsaved changes, discard and leave anyway?&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you omit the second parameter: <code>isNavigationFailure(failure)</code>, it will only check if <code>failure</code> is a <em>Navigation Failure</em>.</p></div><h2 id="differentiating-navigation-failures" tabindex="-1">Differentiating Navigation Failures <a class="header-anchor" href="#differentiating-navigation-failures" aria-hidden="true">#</a></h2><p>As we said at the beginning, there are different situations aborting a navigation, all of them resulting in different <em>Navigation Failures</em>. They can be differentiated using the <code>isNavigationFailure</code> and <code>NavigationFailureType</code>. There are three different types:</p><ul><li><code>aborted</code>: <code>false</code> was returned inside of a navigation guard to the navigation.</li><li><code>cancelled</code>: A new navigation took place before the current navigation could finish. e.g. <code>router.push</code> was called while waiting inside of a navigation guard.</li><li><code>duplicated</code>: The navigation was prevented because we are already at the target location.</li></ul><h2 id="navigation-failures-s-properties" tabindex="-1"><em>Navigation Failures</em>&#39;s properties <a class="header-anchor" href="#navigation-failures-s-properties" aria-hidden="true">#</a></h2><p>All navigation failures expose <code>to</code> and <code>from</code> properties to reflect the current location as well as the target location for the navigation that failed:</p><div class="language-js"><pre><code><span class="token comment">// trying to access the admin page</span>
router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">failure</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isNavigationFailure</span><span class="token punctuation">(</span>failure<span class="token punctuation">,</span> NavigationFailureType<span class="token punctuation">.</span>redirected<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    failure<span class="token punctuation">.</span>to<span class="token punctuation">.</span>path <span class="token comment">// &#39;/admin&#39;</span>
    failure<span class="token punctuation">.</span>from<span class="token punctuation">.</span>path <span class="token comment">// &#39;/&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>In all cases, <code>to</code> and <code>from</code> are normalized route locations.</p><h2 id="detecting-redirections" tabindex="-1">Detecting Redirections <a class="header-anchor" href="#detecting-redirections" aria-hidden="true">#</a></h2><p>When returning a new location inside of a Navigation Guard, we are triggering a new navigation that overrides the ongoing one. Differently from other return values, a redirection doesn&#39;t prevent a navigation, <strong>it creates a new one</strong>. It is therefore checked differently, by reading the <code>redirectedFrom</code> property in a Route Location:</p><div class="language-js"><pre><code><span class="token keyword">await</span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/my-profile&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>router<span class="token punctuation">.</span>currentRoute<span class="token punctuation">.</span>value<span class="token punctuation">.</span>redirectedFrom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// redirectedFrom is resolved route location like to and from in navigation guards</span>
<span class="token punctuation">}</span>
</code></pre></div>`,23);function d(g,h,k,f,v,w){const n=s("VueSchoolLink");return t(),o("div",null,[l,i(n,{href:"https://vueschool.io/lessons/vue-router-4-detecting-navigation-failures",title:"Learn how to detect navigation failures"}),u])}var N=e(r,[["render",d]]);export{y as __pageData,N as default};
