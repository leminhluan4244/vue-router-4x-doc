import{_ as a,N as t,o as p,p as o,H as e,v as n,r as c,W as u}from"./plugin-vue_export-helper.463a469f.js";const f='{"title":"\u5165\u95E8","description":"","frontmatter":{},"headers":[{"level":2,"title":"HTML","slug":"html"},{"level":3,"title":"router-link","slug":"router-link"},{"level":3,"title":"router-view","slug":"router-view"},{"level":2,"title":"JavaScript","slug":"javascript"}],"relativePath":"zh/guide/index.md","lastUpdated":1665388136111}',l={},r=n("h1",{id:"\u5165\u95E8",tabindex:"-1"},[c("\u5165\u95E8 "),n("a",{class:"header-anchor",href:"#\u5165\u95E8","aria-hidden":"true"},"#")],-1),k=u(`<p>\u7528 Vue + Vue Router \u521B\u5EFA\u5355\u9875\u5E94\u7528\u975E\u5E38\u7B80\u5355\uFF1A\u901A\u8FC7 Vue.js\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u7528\u7EC4\u4EF6\u7EC4\u6210\u4E86\u6211\u4EEC\u7684\u5E94\u7528\u3002\u5F53\u52A0\u5165 Vue Router \u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u7684\u5C31\u662F\u5C06\u6211\u4EEC\u7684\u7EC4\u4EF6\u6620\u5C04\u5230\u8DEF\u7531\u4E0A\uFF0C\u8BA9 Vue Router \u77E5\u9053\u5728\u54EA\u91CC\u6E32\u67D3\u5B83\u4EEC\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u57FA\u672C\u7684\u4F8B\u5B50\uFF1A</p><h2 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-hidden="true">#</a></h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/vue-router@4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Hello App!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--\u4F7F\u7528 router-link \u7EC4\u4EF6\u8FDB\u884C\u5BFC\u822A --&gt;</span>
    <span class="token comment">&lt;!--\u901A\u8FC7\u4F20\u9012 \`to\` \u6765\u6307\u5B9A\u94FE\u63A5 --&gt;</span>
    <span class="token comment">&lt;!--\`&lt;router-link&gt;\` \u5C06\u5448\u73B0\u4E00\u4E2A\u5E26\u6709\u6B63\u786E \`href\` \u5C5E\u6027\u7684 \`&lt;a&gt;\` \u6807\u7B7E--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Go to About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \u8DEF\u7531\u51FA\u53E3 --&gt;</span>
  <span class="token comment">&lt;!-- \u8DEF\u7531\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u5C06\u6E32\u67D3\u5728\u8FD9\u91CC --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="router-link" tabindex="-1"><code>router-link</code> <a class="header-anchor" href="#router-link" aria-hidden="true">#</a></h3><p>\u8BF7\u6CE8\u610F\uFF0C\u6211\u4EEC\u6CA1\u6709\u4F7F\u7528\u5E38\u89C4\u7684 <code>a</code> \u6807\u7B7E\uFF0C\u800C\u662F\u4F7F\u7528\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6 <code>router-link</code> \u6765\u521B\u5EFA\u94FE\u63A5\u3002\u8FD9\u4F7F\u5F97 Vue Router \u53EF\u4EE5\u5728\u4E0D\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u7684\u60C5\u51B5\u4E0B\u66F4\u6539 URL\uFF0C\u5904\u7406 URL \u7684\u751F\u6210\u4EE5\u53CA\u7F16\u7801\u3002\u6211\u4EEC\u5C06\u5728\u540E\u9762\u770B\u5230\u5982\u4F55\u4ECE\u8FD9\u4E9B\u529F\u80FD\u4E2D\u83B7\u76CA\u3002</p><h3 id="router-view" tabindex="-1"><code>router-view</code> <a class="header-anchor" href="#router-view" aria-hidden="true">#</a></h3><p><code>router-view</code> \u5C06\u663E\u793A\u4E0E url \u5BF9\u5E94\u7684\u7EC4\u4EF6\u3002\u4F60\u53EF\u4EE5\u628A\u5B83\u653E\u5728\u4EFB\u4F55\u5730\u65B9\uFF0C\u4EE5\u9002\u5E94\u4F60\u7684\u5E03\u5C40\u3002</p><h2 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// 1. \u5B9A\u4E49\u8DEF\u7531\u7EC4\u4EF6.</span>
<span class="token comment">// \u4E5F\u53EF\u4EE5\u4ECE\u5176\u4ED6\u6587\u4EF6\u5BFC\u5165</span>
<span class="token keyword">const</span> Home <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;Home&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;About&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span>

<span class="token comment">// 2. \u5B9A\u4E49\u4E00\u4E9B\u8DEF\u7531</span>
<span class="token comment">// \u6BCF\u4E2A\u8DEF\u7531\u90FD\u9700\u8981\u6620\u5C04\u5230\u4E00\u4E2A\u7EC4\u4EF6\u3002</span>
<span class="token comment">// \u6211\u4EEC\u540E\u9762\u518D\u8BA8\u8BBA\u5D4C\u5957\u8DEF\u7531\u3002</span>
<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Home <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> About <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token comment">// 3. \u521B\u5EFA\u8DEF\u7531\u5B9E\u4F8B\u5E76\u4F20\u9012 \`routes\` \u914D\u7F6E</span>
<span class="token comment">// \u4F60\u53EF\u4EE5\u5728\u8FD9\u91CC\u8F93\u5165\u66F4\u591A\u7684\u914D\u7F6E\uFF0C\u4F46\u6211\u4EEC\u5728\u8FD9\u91CC</span>
<span class="token comment">// \u6682\u65F6\u4FDD\u6301\u7B80\u5355</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> VueRouter<span class="token punctuation">.</span><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 4. \u5185\u90E8\u63D0\u4F9B\u4E86 history \u6A21\u5F0F\u7684\u5B9E\u73B0\u3002\u4E3A\u4E86\u7B80\u5355\u8D77\u89C1\uFF0C\u6211\u4EEC\u5728\u8FD9\u91CC\u4F7F\u7528 hash \u6A21\u5F0F\u3002</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> VueRouter<span class="token punctuation">.</span><span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span> <span class="token comment">// \`routes: routes\` \u7684\u7F29\u5199</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 5. \u521B\u5EFA\u5E76\u6302\u8F7D\u6839\u5B9E\u4F8B</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//\u786E\u4FDD _use_ \u8DEF\u7531\u5B9E\u4F8B\u4F7F</span>
<span class="token comment">//\u6574\u4E2A\u5E94\u7528\u652F\u6301\u8DEF\u7531\u3002</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u73B0\u5728\uFF0C\u5E94\u7528\u5DF2\u7ECF\u542F\u52A8\u4E86\uFF01</span>
</code></pre></div><p>\u901A\u8FC7\u8C03\u7528 <code>app.use(router)</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728\u4EFB\u610F\u7EC4\u4EF6\u4E2D\u4EE5 <code>this.$router</code> \u7684\u5F62\u5F0F\u8BBF\u95EE\u5B83\uFF0C\u5E76\u4E14\u4EE5 <code>this.$route</code> \u7684\u5F62\u5F0F\u8BBF\u95EE\u5F53\u524D\u8DEF\u7531\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// Home.vue</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">username</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6211\u4EEC\u5F88\u5FEB\u5C31\u4F1A\u770B\u5230 \`params\` \u662F\u4EC0\u4E48</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>params<span class="token punctuation">.</span>username
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">goToDashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/login&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8981\u5728 <code>setup</code> \u51FD\u6570\u4E2D\u8BBF\u95EE\u8DEF\u7531\uFF0C\u8BF7\u8C03\u7528 <code>useRouter</code> \u6216 <code>useRoute</code> \u51FD\u6570\u3002\u6211\u4EEC\u5C06\u5728 <a href="./advanced/composition-api.html#\u5728-setup-\u4E2D\u8BBF\u95EE\u8DEF\u7531\u548C\u5F53\u524D\u8DEF\u7531">Composition API</a> \u4E2D\u4E86\u89E3\u66F4\u591A\u4FE1\u606F\u3002</p><p>\u5728\u6574\u4E2A\u6587\u6863\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u7ECF\u5E38\u4F7F\u7528 <code>router</code> \u5B9E\u4F8B\uFF0C\u8BF7\u8BB0\u4F4F\uFF0C<code>this.$router</code> \u4E0E\u76F4\u63A5\u4F7F\u7528\u901A\u8FC7 <code>createRouter</code> \u521B\u5EFA\u7684 <code>router</code> \u5B9E\u4F8B\u5B8C\u5168\u76F8\u540C\u3002\u6211\u4EEC\u4F7F\u7528 <code>this.$router</code> \u7684\u539F\u56E0\u662F\uFF0C\u6211\u4EEC\u4E0D\u60F3\u5728\u6BCF\u4E2A\u9700\u8981\u64CD\u4F5C\u8DEF\u7531\u7684\u7EC4\u4EF6\u4E2D\u90FD\u5BFC\u5165\u8DEF\u7531\u3002</p>`,13);function i(d,g,m,h,v,y){const s=t("VueSchoolLink");return p(),o("div",null,[r,e(s,{href:"https://vueschool.io/courses/vue-router-4-for-everyone",title:"Learn how to build powerful Single Page Applications with the Vue Router on Vue School"}),k])}var w=a(l,[["render",i]]);export{f as __pageData,w as default};