import{_ as a,N as t,o as p,p as e,H as o,v as n,r as c,W as l}from"./plugin-vue_export-helper.463a469f.js";const y='{"title":"\u547D\u540D\u89C6\u56FE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5D4C\u5957\u547D\u540D\u89C6\u56FE","slug":"\u5D4C\u5957\u547D\u540D\u89C6\u56FE"}],"relativePath":"zh/guide/essentials/named-views.md","lastUpdated":1665388136111}',r={},u=n("h1",{id:"\u547D\u540D\u89C6\u56FE",tabindex:"-1"},[c("\u547D\u540D\u89C6\u56FE "),n("a",{class:"header-anchor",href:"#\u547D\u540D\u89C6\u56FE","aria-hidden":"true"},"#")],-1),i=l(`<p>\u6709\u65F6\u5019\u60F3\u540C\u65F6 (\u540C\u7EA7) \u5C55\u793A\u591A\u4E2A\u89C6\u56FE\uFF0C\u800C\u4E0D\u662F\u5D4C\u5957\u5C55\u793A\uFF0C\u4F8B\u5982\u521B\u5EFA\u4E00\u4E2A\u5E03\u5C40\uFF0C\u6709 <code>sidebar</code> (\u4FA7\u5BFC\u822A) \u548C <code>main</code> (\u4E3B\u5185\u5BB9) \u4E24\u4E2A\u89C6\u56FE\uFF0C\u8FD9\u4E2A\u65F6\u5019\u547D\u540D\u89C6\u56FE\u5C31\u6D3E\u4E0A\u7528\u573A\u4E86\u3002\u4F60\u53EF\u4EE5\u5728\u754C\u9762\u4E2D\u62E5\u6709\u591A\u4E2A\u5355\u72EC\u547D\u540D\u7684\u89C6\u56FE\uFF0C\u800C\u4E0D\u662F\u53EA\u6709\u4E00\u4E2A\u5355\u72EC\u7684\u51FA\u53E3\u3002\u5982\u679C <code>router-view</code> \u6CA1\u6709\u8BBE\u7F6E\u540D\u5B57\uFF0C\u90A3\u4E48\u9ED8\u8BA4\u4E3A <code>default</code>\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view left-sidebar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LeftSidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view main-content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>view right-sidebar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RightSidebar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4E00\u4E2A\u89C6\u56FE\u4F7F\u7528\u4E00\u4E2A\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u540C\u4E2A\u8DEF\u7531\uFF0C\u591A\u4E2A\u89C6\u56FE\u5C31\u9700\u8981\u591A\u4E2A\u7EC4\u4EF6\u3002\u786E\u4FDD\u6B63\u786E\u4F7F\u7528 <code>components</code> \u914D\u7F6E (\u5E26\u4E0A <strong>s</strong>)\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">default</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
        <span class="token comment">// LeftSidebar: LeftSidebar \u7684\u7F29\u5199</span>
        LeftSidebar<span class="token punctuation">,</span>
        <span class="token comment">// \u5B83\u4EEC\u4E0E \`&lt;router-view&gt;\` \u4E0A\u7684 \`name\` \u5C5E\u6027\u5339\u914D</span>
        RightSidebar<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4EE5\u4E0A\u6848\u4F8B\u76F8\u5173\u7684\u53EF\u8FD0\u884C\u4EE3\u7801\u8BF7<a href="https://codesandbox.io/s/named-views-vue-router-4-examples-rd20l" target="_blank" rel="noopener noreferrer">\u79FB\u6B65\u8FD9\u91CC</a>.</p><h2 id="\u5D4C\u5957\u547D\u540D\u89C6\u56FE" tabindex="-1">\u5D4C\u5957\u547D\u540D\u89C6\u56FE <a class="header-anchor" href="#\u5D4C\u5957\u547D\u540D\u89C6\u56FE" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u4E5F\u6709\u53EF\u80FD\u4F7F\u7528\u547D\u540D\u89C6\u56FE\u521B\u5EFA\u5D4C\u5957\u89C6\u56FE\u7684\u590D\u6742\u5E03\u5C40\u3002\u8FD9\u65F6\u4F60\u4E5F\u9700\u8981\u547D\u540D\u7528\u5230\u7684\u5D4C\u5957 <code>router-view</code> \u7EC4\u4EF6\u3002\u6211\u4EEC\u4EE5\u4E00\u4E2A\u8BBE\u7F6E\u9762\u677F\u4E3A\u4F8B\uFF1A</p><div class="language-"><pre><code>/settings/emails                                       /settings/profile
+-----------------------------------+                  +------------------------------+
| UserSettings                      |                  | UserSettings                 |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
| | Nav | UserEmailsSubscriptions | |  +------------&gt;  | | Nav | UserProfile        | |
| |     +-------------------------+ |                  | |     +--------------------+ |
| |     |                         | |                  | |     | UserProfilePreview | |
| +-----+-------------------------+ |                  | +-----+--------------------+ |
+-----------------------------------+                  +------------------------------+
</code></pre></div><ul><li><code>Nav</code> \u53EA\u662F\u4E00\u4E2A\u5E38\u89C4\u7EC4\u4EF6\u3002</li><li><code>UserSettings</code> \u662F\u4E00\u4E2A\u89C6\u56FE\u7EC4\u4EF6\u3002</li><li><code>UserEmailsSubscriptions</code>\u3001<code>UserProfile</code>\u3001<code>UserProfilePreview</code> \u662F\u5D4C\u5957\u7684\u89C6\u56FE\u7EC4\u4EF6\u3002</li></ul><p><strong>\u6CE8\u610F</strong>\uFF1A<em>\u6211\u4EEC\u5148\u5FD8\u8BB0 HTML/CSS \u5177\u4F53\u7684\u5E03\u5C40\u7684\u6837\u5B50\uFF0C\u53EA\u4E13\u6CE8\u5728\u7528\u5230\u7684\u7EC4\u4EF6\u4E0A\u3002</em></p><p><code>UserSettings</code> \u7EC4\u4EF6\u7684 <code>&lt;template&gt;</code> \u90E8\u5206\u5E94\u8BE5\u662F\u7C7B\u4F3C\u4E0B\u9762\u7684\u8FD9\u6BB5\u4EE3\u7801:</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- UserSettings.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>User Settings<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NavBar</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>helper<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u90A3\u4E48\u4F60\u5C31\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u8DEF\u7531\u914D\u7F6E\u6765\u5B9E\u73B0\u4E0A\u9762\u7684\u5E03\u5C40\uFF1A</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/settings&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4F60\u4E5F\u53EF\u4EE5\u5728\u9876\u7EA7\u8DEF\u7531\u5C31\u914D\u7F6E\u547D\u540D\u89C6\u56FE</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span> UserSettings<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;emails&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UserEmailsSubscriptions
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;profile&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">default</span><span class="token operator">:</span> UserProfile<span class="token punctuation">,</span>
      <span class="token literal-property property">helper</span><span class="token operator">:</span> UserProfilePreview
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4EE5\u4E0A\u6848\u4F8B\u76F8\u5173\u7684\u53EF\u8FD0\u884C\u4EE3\u7801\u8BF7<a href="https://codesandbox.io/s/nested-named-views-vue-router-4-examples-re9yl?&amp;initialpath=%2Fsettings%2Femails" target="_blank" rel="noopener noreferrer">\u79FB\u6B65\u8FD9\u91CC</a>.</p>`,15);function k(d,g,v,m,h,f){const s=t("VueSchoolLink");return p(),e("div",null,[u,o(s,{href:"https://vueschool.io/lessons/vue-router-4-named-views",title:"Learn how to use named views"}),i])}var w=a(r,[["render",k]]);export{y as __pageData,w as default};
