import{_ as s,N as t,o as p,p as o,H as e,v as n,r as c,W as u}from"./plugin-vue_export-helper.463a469f.js";const h='{"title":"\u6269\u5C55 RouterLink","description":"","frontmatter":{},"relativePath":"zh/guide/advanced/extending-router-link.md","lastUpdated":1665388136096}',l={},k=n("h1",{id:"\u6269\u5C55-routerlink",tabindex:"-1"},[c("\u6269\u5C55 RouterLink "),n("a",{class:"header-anchor",href:"#\u6269\u5C55-routerlink","aria-hidden":"true"},"#")],-1),r=u(`<p>RouterLink \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u8DB3\u591F\u7684 <code>props</code> \u6765\u6EE1\u8DB3\u5927\u591A\u6570\u57FA\u672C\u5E94\u7528\u7A0B\u5E8F\u7684\u9700\u6C42\uFF0C\u4F46\u5B83\u5E76\u672A\u5C1D\u8BD5\u6DB5\u76D6\u6240\u6709\u53EF\u80FD\u7684\u7528\u4F8B\uFF0C\u5728\u67D0\u4E9B\u9AD8\u7EA7\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u4F1A\u53D1\u73B0\u81EA\u5DF1\u4F7F\u7528\u4E86 <code>v-slot</code>\u3002\u5728\u5927\u591A\u6570\u4E2D\u578B\u5230\u5927\u578B\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u503C\u5F97\u521B\u5EFA\u4E00\u4E2A\uFF08\u5982\u679C\u4E0D\u662F\u591A\u4E2A\uFF09\u81EA\u5B9A\u4E49 RouterLink \u7EC4\u4EF6\uFF0C\u4EE5\u5728\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u91CD\u7528\u5B83\u4EEC\u3002\u4F8B\u5982\u5BFC\u822A\u83DC\u5355\u4E2D\u7684\u94FE\u63A5\uFF0C\u5904\u7406\u5916\u90E8\u94FE\u63A5\uFF0C\u6DFB\u52A0 <code>inactive-class</code> \u7B49\u3002</p><p>\u8BA9\u6211\u4EEC\u6269\u5C55 RouterLink \u6765\u5904\u7406\u5916\u90E8\u94FE\u63A5\uFF0C\u5E76\u5728 <code>AppLink.vue</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 <code>inactive-class</code>\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isExternalLink<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>to<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span>
    <span class="token attr-name">v-else</span>
    <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$props<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">custom</span>
    <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ isActive, href, navigate }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>
      <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>href<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>navigate<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isActive ? activeClass : inactiveClass<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> RouterLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;AppLink&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">inheritAttrs</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4F7F\u7528 TypeScript\uFF0C\u8BF7\u6DFB\u52A0 @ts-ignore</span>
    <span class="token operator">...</span>RouterLink<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
    <span class="token literal-property property">inactiveClass</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">isExternalLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5982\u679C\u4F60\u559C\u6B22\u4F7F\u7528\u6E32\u67D3\u51FD\u6570\u6216\u521B\u5EFA <code>computed</code> \u5C5E\u6027\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <a href="./composition-api.html">Composition API</a> \u4E2D\u7684 <code>useLink</code> \uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> RouterLink<span class="token punctuation">,</span> useLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;AppLink&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4F7F\u7528 TypeScript\uFF0C\u8BF7\u6DFB\u52A0 @ts-ignore</span>
    <span class="token operator">...</span>RouterLink<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
    <span class="token literal-property property">inactiveClass</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \`props\` \u5305\u542B \`to\` \u548C\u4EFB\u4F55\u5176\u4ED6\u53EF\u4EE5\u4F20\u9012\u7ED9 &lt;router-link&gt; \u7684 prop</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> navigate<span class="token punctuation">,</span> href<span class="token punctuation">,</span> route<span class="token punctuation">,</span> isActive<span class="token punctuation">,</span> isExactActive <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLink</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>

    <span class="token comment">// profit!</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> isExternalLink <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u5C06\u4F60\u7684 <code>AppLink</code> \u7EC4\u4EF6\u7528\u4E8E\u5E94\u7528\u7A0B\u5E8F\u7684\u4E0D\u540C\u90E8\u5206\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528 <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>\uFF0C\u4F60\u53EF\u4EE5\u7528\u6240\u6709\u7684\u7C7B\u521B\u5EFA\u4E00\u4E2A <code>NavLink.vue</code> \u7EC4\u4EF6\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AppLink</span>
    <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 focus:outline-none transition duration-150 ease-in-out hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">active-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>border-indigo-500 text-gray-900 focus:border-indigo-700<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">inactive-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AppLink</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,7);function i(d,g,v,m,y,q){const a=t("VueSchoolLink");return p(),o("div",null,[k,e(a,{href:"https://vueschool.io/lessons/extending-router-link-for-external-urls",title:"Learn how to extend router-link"}),r])}var _=s(l,[["render",i]]);export{h as __pageData,_ as default};
