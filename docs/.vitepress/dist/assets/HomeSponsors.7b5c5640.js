import{s as l,u as S}from"./sponsors.2c54181e.js";import{C as f,_ as h,n as y,s as k,o as s,p as c,v as o,t as g,F as p,G as z,E as x,u as t,X as H,y as _,q as m}from"./plugin-vue_export-helper.463a469f.js";const d=f(!1);const C=["href","title"],B=["src","alt"],D=y({__name:"HomeSponsorsGroup",props:{name:null,size:{default:140}},setup(r){const i=r,n=k(()=>l[i.name.toLowerCase()].map(a=>({...a,imgSrc:d.value?a.imgSrcDark:a.imgSrcLight})));return(a,v)=>(s(),c(p,null,[o("h3",null,g(r.name)+" Sponsors",1),o("p",null,[(s(!0),c(p,null,z(t(n),e=>(s(),c("a",{key:e.href,href:e.href,title:e.alt,target:"_blank",rel:"sponsored noopener",class:"sponsor_wrapper"},[o("img",{src:e.imgSrc,class:x(t(d)&&e.imgSrcLight===e.imgSrcDark&&"invert-colors"),alt:e.alt,style:H({height:r.size+"px"})},null,14,B)],8,C))),128))])],64))}});var u=h(D,[["__scopeId","data-v-0ac7f660"]]);const G={class:"sponsors_outer"},b={class:"become-sponsor button white",href:"https://github.com/sponsors/posva"},L={__name:"HomeSponsors",setup(r){const{site:i}=S(),n={"en-US":"Become a Sponsor!","zh-CN":"\u6210\u4E3A\u8D5E\u52A9\u8005\uFF01"};return(a,v)=>(s(),c("div",G,[o("div",null,[t(l).platinum.length?(s(),_(u,{key:0,name:"Platinum",size:"96"})):m("",!0),t(l).gold.length?(s(),_(u,{key:1,name:"Gold",size:"48"})):m("",!0),t(l).silver.length?(s(),_(u,{key:2,name:"Silver",size:"24"})):m("",!0),o("a",b,g(n[t(i).lang]||n.en),1)])]))}};var $=h(L,[["__scopeId","data-v-65e53635"]]);export{$ as H};