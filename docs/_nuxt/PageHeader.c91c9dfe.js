import{d as m,r as g,L as _,o as h,n as v,u as f,O as y,b as i,c,i as b,z as w,f as I,g as n,t as S,p as C,m as k,v as x}from"./entry.0acedfe0.js";const H=e=>(C("data-v-856b5179"),e=e(),k(),e),P={class:"v-page-header__graphique-image",viewBox:"0 0 4310.6665 1991.5146",xmlns:"http://www.w3.org/2000/svg",ref:"graphicToMove"},B=H(()=>n("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,4000)"},[n("path",{d:"m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341",style:{fill:"#f500b4","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"}})],-1)),E=[B],T={class:"v-page-header__title fp-grid-with-gutter fp-remove-margin-child"},q=m({__name:"PageHeader",props:{pageTitle:{type:String,required:!0},imageDataForProAPI:{type:Object,required:!1},isHome:{type:Boolean,required:!1,default:!1}},setup(e){const r=g(null),o=g(null);_().app.baseURL,h(()=>{v(()=>{if(!(o.value instanceof HTMLElement))return;new IntersectionObserver(t=>{t.forEach(s=>{f().isIntersecting=s.isIntersecting})}).observe(o.value)}),window.addEventListener("scroll",l)}),y(()=>{window.removeEventListener("scroll",l)});const l=()=>{if(!(r.value instanceof HTMLElement))return;const a=document.querySelector(".v-page-header__graphique-image");if(!(a instanceof SVGElement))return;const t=p(r.value.getBoundingClientRect().height+r.value.getBoundingClientRect().top,0,r.value.getBoundingClientRect().height,0,100);a.style.setProperty("--scroll-percent",(t/100).toString())},p=(a,t,s,d,u)=>(a-t)*(u-d)/(s-t)+d;return(a,t)=>(i(),c("header",{ref_key:"headerMain",ref:r,class:"v-page-header fp-remove-margin-child"},[e.imageDataForProAPI?(i(),c("div",{key:0,ref_key:"headerContainer",ref:o,class:b(["v-page-header__img",{"is-home":e.isHome}]),style:w({backgroundImage:`url(${e.imageDataForProAPI.resize.xxl})`||""})},[(i(),c("svg",P,E,512))],6)):I("",!0),n("div",T,[n("h1",null,S(e.pageTitle),1)])],512))}});const M=x(q,[["__scopeId","data-v-856b5179"]]);export{M as _};
