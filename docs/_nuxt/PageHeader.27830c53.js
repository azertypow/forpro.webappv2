import{d as m,r as l,N as _,o as f,n as v,u as h,b as c,c as d,i as y,z as I,f as w,g as r,t as x,p as C,m as b,v as k}from"./entry.7db20cfa.js";const H=e=>(C("data-v-9797c932"),e=e(),b(),e),S=H(()=>r("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,4000)"},[r("path",{d:"m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341",style:{fill:"#f500b4","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"}})],-1)),B=[S],P={class:"v-page-header__title fp-grid-with-gutter fp-remove-margin-child"},T=m({__name:"PageHeader",props:{pageTitle:{type:String,required:!0},imageDataForProAPI:{type:Object,required:!1},isHome:{type:Boolean,required:!1,default:!1}},setup(e){const t=l(null),o=l(null),s=l(null);_().app.baseURL,f(()=>{v(()=>{if(!(o.value instanceof HTMLElement))return;new IntersectionObserver(n=>{n.forEach(i=>{h().isIntersecting=i.isIntersecting})}).observe(o.value)}),window.addEventListener("scroll",()=>{if(!(t.value instanceof HTMLElement)||!(s.value instanceof SVGElement))return;const a=u(t.value.getBoundingClientRect().height+t.value.getBoundingClientRect().top,0,t.value.getBoundingClientRect().height,-100,50);s.value.style.transform=`translate(0, ${a}px)`})});const u=(a,n,i,g,p)=>(a-n)*(p-g)/(i-n)+g;return(a,n)=>(c(),d("header",{ref_key:"headerMain",ref:t,class:"v-page-header fp-remove-margin-child"},[e.imageDataForProAPI?(c(),d("div",{key:0,ref_key:"headerContainer",ref:o,class:y(["v-page-header__img",{"is-home":e.isHome}]),style:I({backgroundImage:`url(${e.imageDataForProAPI.resize.xxl})`||""})},[(c(),d("svg",{class:"v-page-header__graphique-image",viewBox:"0 0 4310.6665 1991.5146",xmlns:"http://www.w3.org/2000/svg",ref_key:"graphicToMove",ref:s},B,512))],6)):w("",!0),r("div",P,[r("h1",null,x(e.pageTitle),1)])],512))}});const E=k(T,[["__scopeId","data-v-9797c932"]]);export{E as _};