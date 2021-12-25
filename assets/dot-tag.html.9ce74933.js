import{r as p,b as c,c as l,e as n,g as s,w as u,f as a,d as o}from"./app.53e812f5.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const r={},k={class:"mp-cu-doc-view"},d={class:"mp-cu-doc"},m=n("h1",{id:"\u70B9\u6807\u7B7E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u70B9\u6807\u7B7E","aria-hidden":"true"},"#"),a(" \u70B9\u6807\u7B7E")],-1),g=a("\u5F15\u7528\u7EC4\u4EF6\uFF0C\u8BF7\u53C2\u8003"),b=a("\u8BF4\u660E"),q=a("\u6587\u6863\uFF0C\u4E0B\u9762\u7684\u5F15\u5165\u53EA\u662F\u4F5C\u4E3A\u6F14\u793A\uFF0C\u5B9E\u9645\u5F15\u5165\u8DEF\u5F84\uFF0C\u8BF7\u6839\u636E\u60A8\u7684\u9879\u76EE\u67B6\u6784\u66F4\u6539\u3002"),h=o(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dot-tag&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;/packageB/components/dot-tag/dot-tag&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u7840\u4F7F\u7528</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-2 img-dot-tag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-img</span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radius border<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{imgA}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ColorUI<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot-tag-right<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">right</span> <span class="token attr-name"><span class="token namespace">bind:</span>tagTap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tapDotTag<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot-tag-bottom<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">bottom</span> <span class="token attr-name"><span class="token namespace">bind:</span>tagTap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tapDotTag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cicon-creative<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ml-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u52A0\u70B9\u56FE\u6807<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dot-tag</span><span class="token punctuation">&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7EC4\u4EF6\u5E93<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot-tag-top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">top</span> <span class="token attr-name"><span class="token namespace">bind:</span>tagTap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tapDotTag<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MP-CU<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot-tag-left<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">left</span> <span class="token attr-name"><span class="token namespace">bind:</span>tagTap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tapDotTag<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u5C3A\u5BF8" aria-hidden="true">#</a> \u5C3A\u5BF8</h2><p>\u7ED9 <code>ui</code> \u53C2\u6570\uFF0C\u6DFB\u52A0 <code>sm</code> <code>lg</code> <code>xxl</code> \uFF0C\u63A7\u5236\u5C3A\u5BF8\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-2 img-dot-tag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-img</span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radius border<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{imgB}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u7EC4\u4EF6\u5E93<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot-tag-right lg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">right</span><span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u70B9\u6807\u7B7E\u70B9\u6807\u7B7E<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot-tag-bottom xxl<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">bottom</span><span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>MP-CU<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot-tag-top<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">top</span><span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ColorUI<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dot-tag-left sm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">left</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u62D6\u52A8" tabindex="-1"><a class="header-anchor" href="#\u62D6\u52A8" aria-hidden="true">#</a> \u62D6\u52A8</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-2 img-dot-tag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- movable-area\u53C2\u8003\u6587\u6863\uFF1Ahttps://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>movable-area</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 154px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-img</span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radius border<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{imgC}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>movable-view</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{x}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{y}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>all<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span><span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">bindchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movableChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u62D6\u52A8<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">right</span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>movable-view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>movable-area</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,8),v={class:"custom-container tip"},_=n("p",{class:"custom-container-title"},"TIP",-1),f=a("\u91C7\u7528\u4E86\u5FAE\u4FE1\u5B98\u65B9\u7684 "),x={href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html",target:"_blank",rel:"noopener noreferrer"},y=a("movable-area"),w=a(" \u3001"),B={href:"https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html",target:"_blank",rel:"noopener noreferrer"},C=a("movable-view"),T=a(" \u5BB9\u5668\u642D\u914D\u5B9E\u73B0\u7684\u62D6\u52A8\u6548\u679C\u3002"),D=o(`<h2 id="\u5750\u6807" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807" aria-hidden="true">#</a> \u5750\u6807</h2><p>\u6709 <code>x\uFF0Cy</code> \u5750\u6807\u53C2\u6570\uFF0C\u53EF\u4EE5\u6839\u636E\u62D6\u52A8\u7684\u53C2\u6570\uFF0C\u8BBE\u7F6E\u6807\u7B7E\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u5982\u679C\u53D1\u73B0\u70B9\uFF0C\u6709\u504F\u79FB\uFF0C\u53EF\u4F7F\u7528 <code>dot=&quot;0&quot;</code> \u8BBE\u7F6E\u504F\u79FB\u91CF</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-2 img-dot-tag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ui-img</span> <span class="token attr-name">ui</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radius border<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{imgD}}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dot-tag</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5750\u6807<span class="token punctuation">&quot;</span></span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{x}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{y}}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">dot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">animation</span> <span class="token attr-name">right</span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u6570\u636E\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a> \u6570\u636E\u683C\u5F0F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
        imgA<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> imgB<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> imgC<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> imgD<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> x<span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> <span class="token number">15</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> url <span class="token operator">=</span> i  <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;https://cos.color-ui.com/wallpaper/10&#39;</span> <span class="token operator">+</span> url <span class="token operator">+</span> <span class="token string">&#39;.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">let</span> imgA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getImage</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> imgB <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getImage</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> imgC <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getImage</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> imgD <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getImage</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            imgA<span class="token operator">:</span> imgA<span class="token punctuation">,</span>
            imgB<span class="token operator">:</span> imgB<span class="token punctuation">,</span>
            imgC<span class="token operator">:</span> imgC<span class="token punctuation">,</span>
            imgD<span class="token operator">:</span> imgD
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">getImage</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> list<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">tapDotTag</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u70B9\u51FB\u4E86\uFF1A&#39;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">movableChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            x<span class="token operator">:</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
            y<span class="token operator">:</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>y
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a> \u53C2\u6570</h2><p><code>name</code> \u53C2\u6570\u4E0D\u8BBE\u7F6E\u65F6\uFF0C\u5F00\u542F\u9ED8\u8BA4\u63D2\u69FD\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>ui</td><td>String</td><td>-</td><td>-</td><td>\u5176\u5B83class\u6837\u5F0F</td></tr><tr><td>bg</td><td>String</td><td>-</td><td>-</td><td>\u80CC\u666Fclass</td></tr><tr><td>tagUi</td><td>String</td><td>-</td><td>-</td><td>\u6807\u7B7E\u6837\u5F0F</td></tr><tr><td>name</td><td>String</td><td>-</td><td>-</td><td>\u540D\u79F0</td></tr><tr><td>top</td><td>Boolean</td><td>-</td><td>false</td><td>\u70B9\u5728\u4E0A\u9762</td></tr><tr><td>left</td><td>Boolean</td><td>-</td><td>false</td><td>\u70B9\u5728\u5DE6\u8FB9</td></tr><tr><td>right</td><td>Boolean</td><td>-</td><td>false</td><td>\u70B9\u5728\u53F3\u8FB9</td></tr><tr><td>bottom</td><td>Boolean</td><td>-</td><td>false</td><td>\u70B9\u5728\u4E0B\u9762</td></tr><tr><td>animation</td><td>Boolean</td><td>-</td><td>false</td><td>\u70B9\u52A8\u753B\u6548\u679C</td></tr><tr><td>x</td><td>Number/String</td><td>-</td><td>-</td><td>x\u8F74\u5750\u6807</td></tr><tr><td>y</td><td>Number/String</td><td>-</td><td>-</td><td>y\u8F74\u5750\u6807</td></tr><tr><td>dot</td><td>Number/String</td><td>-</td><td>-</td><td>\u70B9\u504F\u79FB</td></tr><tr><td>bind:tagTap</td><td>Event</td><td>-</td><td>event.detail = name</td><td>\u6807\u7B7E\u88AB\u70B9\u51FB</td></tr></tbody></table>`,8),j=n("div",{class:"mp-cu-doc-image",style:{"max-height":"inherit"}},[n("p",null,[n("img",{src:"https://colorui-assest.vercel.app/mp-cu-doc/test/dot-tag.jpg",alt:"mp-cu"})])],-1);function I(S,N){const e=p("RouterLink"),t=p("ExternalLinkIcon");return c(),l("div",k,[n("div",d,[m,n("p",null,[g,s(e,{to:"/laboratory/"},{default:u(()=>[b]),_:1}),q]),h,n("div",v,[_,n("p",null,[f,n("a",x,[y,s(t)]),w,n("a",B,[C,s(t)]),T])]),D]),j])}var U=i(r,[["render",I]]);export{U as default};
