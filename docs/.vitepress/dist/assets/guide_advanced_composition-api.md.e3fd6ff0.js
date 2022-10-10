import{_ as a,N as t,o,p,H as e,v as n,r as c,W as u}from"./plugin-vue_export-helper.463a469f.js";const v='{"title":"Vue Router and the Composition API","description":"","frontmatter":{},"headers":[{"level":2,"title":"Accessing the Router and current Route inside setup","slug":"accessing-the-router-and-current-route-inside-setup"},{"level":2,"title":"Navigation Guards","slug":"navigation-guards"},{"level":2,"title":"useLink","slug":"uselink"}],"relativePath":"guide/advanced/composition-api.md","lastUpdated":1665388136064}',i={},r=n("h1",{id:"vue-router-and-the-composition-api",tabindex:"-1"},[c("Vue Router and the Composition API "),n("a",{class:"header-anchor",href:"#vue-router-and-the-composition-api","aria-hidden":"true"},"#")],-1),l=u(`<p>The introduction of <code>setup</code> and Vue&#39;s <a href="https://v3.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">Composition API</a>, open up new possibilities but to be able to get the full potential out of Vue Router, we will need to use a few new functions to replace access to <code>this</code> and in-component navigation guards.</p><h2 id="accessing-the-router-and-current-route-inside-setup" tabindex="-1">Accessing the Router and current Route inside <code>setup</code> <a class="header-anchor" href="#accessing-the-router-and-current-route-inside-setup" aria-hidden="true">#</a></h2><p>Because we don&#39;t have access to <code>this</code> inside of <code>setup</code>, we cannot directly access <code>this.$router</code> or <code>this.$route</code> anymore. Instead we use the <code>useRouter</code> function:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter<span class="token punctuation">,</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">pushWithQuery</span><span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;search&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token operator">...</span>route<span class="token punctuation">.</span>query<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The <code>route</code> object is a reactive object, so any of its properties can be watched and you should <strong>avoid watching the whole <code>route</code></strong> object. In most scenarios, you should directly watch the param you are expecting to change</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> userData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// fetch the user information when params change</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token keyword">async</span> <span class="token parameter">newId</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        userData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span>newId<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Note we still have access to <code>$router</code> and <code>$route</code> in templates, so there is no need to return <code>router</code> or <code>route</code> inside of <code>setup</code>.</p><h2 id="navigation-guards" tabindex="-1">Navigation Guards <a class="header-anchor" href="#navigation-guards" aria-hidden="true">#</a></h2><p>While you can still use in-component navigation guards with a <code>setup</code> function, Vue Router exposes update and leave guards as Composition API functions:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onBeforeRouteLeave<span class="token punctuation">,</span> onBeforeRouteUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// same as beforeRouteLeave option with no access to \`this\`</span>
    <span class="token function">onBeforeRouteLeave</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> answer <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span>
        <span class="token string">&#39;Do you really want to leave? you have unsaved changes!&#39;</span>
      <span class="token punctuation">)</span>
      <span class="token comment">// cancel the navigation and stay on the same page</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>answer<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> userData <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// same as beforeRouteUpdate option with no access to \`this\`</span>
    <span class="token function">onBeforeRouteUpdate</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// only fetch the user if the id changed as maybe only the query or the hash changed</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id <span class="token operator">!==</span> from<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        userData<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchUser</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>params<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Composition API guards can also be used in any component rendered by <code>&lt;router-view&gt;</code>, they don&#39;t have to be used directly on the route component like in-component guards.</p><h2 id="uselink" tabindex="-1"><code>useLink</code> <a class="header-anchor" href="#uselink" aria-hidden="true">#</a></h2><p>Vue Router exposes the internal behavior of RouterLink as a Composition API function. It gives access to the same properties as the <a href="./../../api/#router-link-s-v-slot"><code>v-slot</code> API</a>:</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterLink<span class="token punctuation">,</span> useLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;AppLink&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// add @ts-ignore if using TypeScript</span>
    <span class="token operator">...</span>RouterLink<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
    <span class="token literal-property property">inactiveClass</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> route<span class="token punctuation">,</span> href<span class="token punctuation">,</span> isActive<span class="token punctuation">,</span> isExactActive<span class="token punctuation">,</span> navigate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLink</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

    <span class="token keyword">const</span> isExternalLink <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> props<span class="token punctuation">.</span>to <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> props<span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> isExternalLink<span class="token punctuation">,</span> href<span class="token punctuation">,</span> navigate<span class="token punctuation">,</span> isActive <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14);function k(d,h,f,m,y,g){const s=t("VueSchoolLink");return o(),p("div",null,[r,e(s,{href:"https://vueschool.io/lessons/router-and-the-composition-api",title:"Learn how to use Vue Router with the composition API"}),l])}var _=a(i,[["render",k]]);export{v as __pageData,_ as default};
