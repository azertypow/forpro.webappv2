import{d as m,r as g,N as u,o as v,n as f,u as y,G as w,b as s,c as i,i as b,z as H,f as x,g as a,t as C,p as I,m as S,v as k}from"./entry.4ac70a77.js";const p=e=>(I("data-v-9870b5de"),e=e(),S(),e),q={class:"v-page-header__graphique-image v-page-header__graphique-image--left",viewBox:"0 0 4310.6665 1991.5146",xmlns:"http://www.w3.org/2000/svg",ref:"graphicToMove"},B=p(()=>a("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,4000)"},[a("path",{d:"m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341",style:{fill:"#f500b4","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"}})],-1)),P=[B],E={class:"v-page-header__graphique-image v-page-header__graphique-image--right",viewBox:"0 0 4310.6665 1991.5146",xmlns:"http://www.w3.org/2000/svg",ref:"graphicToMove"},T=p(()=>a("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,4000)"},[a("path",{d:"m 0,1623.1341 v 1260.096 c 0,84.069 38.732,116.77 122.24197,116.77 H 1703.679 c 149.938,-47.145 382.746,-214.095 519.991,-372.894 179.769,-207.998 377.718,-278.564 668.365,-278.564 H 3203 c 16.568,0 30,-13.431 30,-30 v -130.72 c 0,-16.569 -13.432,-30 -30,-30 h -310.965 c -199.5435,3.2233 -488.596,-70.566 -668.365,-278.564 -137.245,-158.799 -257.798,-372.894 -519.991,-372.894 H 122.24197 C 38.732,1506.3641 0,1539.0651 0,1623.1341",style:{fill:"#f500b4","fill-opacity":"1","fill-rule":"nonzero",stroke:"none"}})],-1)),L=[T],M={class:"v-page-header__title fp-grid-with-gutter fp-remove-margin-child"},z=m({__name:"PageHeader",props:{pageTitle:{type:String,required:!0},imageDataForProAPI:{type:Object,required:!1},isHome:{type:Boolean,required:!1,default:!1}},setup(e){const r=g(null),l=g(null);u().app.baseURL,v(()=>{f(()=>{if(!(l.value instanceof HTMLElement))return;new IntersectionObserver(t=>{t.forEach(o=>{y().isIntersecting=o.isIntersecting})}).observe(l.value)}),window.addEventListener("scroll",c)}),w(()=>{window.removeEventListener("scroll",c)});const c=()=>{if(!(r.value instanceof HTMLElement))return;document.querySelectorAll(".v-page-header__graphique-image").forEach(t=>{if(!(t instanceof SVGElement))return;const o=_(r.value.getBoundingClientRect().height+r.value.getBoundingClientRect().top,0,r.value.getBoundingClientRect().height,0,100);t.style.setProperty("--scroll-percent",(o/100).toString())})},_=(n,t,o,d,h)=>(n-t)*(h-d)/(o-t)+d;return(n,t)=>(s(),i("header",{ref_key:"headerMain",ref:r,class:"v-page-header fp-remove-margin-child"},[e.imageDataForProAPI?(s(),i("div",{key:0,ref_key:"headerContainer",ref:l,class:b(["v-page-header__img",{"is-home":e.isHome}]),style:H({backgroundImage:`url(${e.imageDataForProAPI.resize.xxl})`||""})},[(s(),i("svg",q,P,512)),(s(),i("svg",E,L,512))],6)):x("",!0),a("div",M,[a("h1",null,C(e.pageTitle),1)])],512))}});const R=k(z,[["__scopeId","data-v-9870b5de"]]);export{R as _};