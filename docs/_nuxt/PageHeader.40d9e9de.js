import{d as h,r as c,N as m,o as _,n as f,u as v,G as y,b as d,c as g,i as w,z as x,f as C,g as e,t as I,p as S,m as L,v as k}from"./entry.13fe3845.js";const P=a=>(S("data-v-7a7fa59a"),a=a(),L(),a),b=P(()=>e("svg",{id:"Layer_2","data-name":"Layer 2",class:"v-page-header__graphique-image v-page-header__graphique-image--left",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 988.3234 372.06538"},[e("defs",null,[e("clipPath",{id:"clippath"},[e("rect",{x:".00059",width:"988.32281",height:"372.06538",style:{fill:"none"}})])]),e("g",{id:"Layer_1-2","data-name":"Layer 1"},[e("g",{style:{"clip-path":"url(#clippath)"}},[e("path",{d:"m988.32281,197.13461v-22.20205c0-6.99268-5.67041-12.66306-12.66306-12.66306l-47.73288.00893c-72.39868,0-121.70779-17.577-166.48716-69.38774C727.25064,53.33199,697.22202.00239,631.90837.00239H30.45153C9.6492.00239,0,8.14761,0,29.0899v313.88735c0,20.9423,9.6492,29.08752,30.45153,29.08752h601.45684c65.31366,0,95.34227-53.3296,129.53134-92.88828,44.77937-51.81075,94.08848-69.38776,166.48716-69.38776l47.73288.00893c6.99266,0,12.66306-5.67038,12.66306-12.66306",style:{fill:"#1754ff"}})])])],-1)),H=[b],B={class:"v-page-header__title fp-grid-with-gutter fp-remove-margin-child"},E=h({__name:"PageHeader",props:{pageTitle:{type:String,required:!0},imageDataForProAPI:{type:Object,required:!1},isHome:{type:Boolean,required:!1,default:!1}},setup(a){const n=c(null),s=c(null);m().app.baseURL,_(()=>{f(()=>{if(!(s.value instanceof HTMLElement))return;new IntersectionObserver(t=>{t.forEach(r=>{v().isIntersecting=r.isIntersecting})}).observe(s.value)}),window.addEventListener("scroll",i)}),y(()=>{window.removeEventListener("scroll",i)});const i=()=>{if(!(n.value instanceof HTMLElement))return;document.querySelectorAll(".v-page-header__graphique-image").forEach(t=>{if(!(t instanceof SVGElement))return;const r=p(n.value.getBoundingClientRect().height+n.value.getBoundingClientRect().top,0,n.value.getBoundingClientRect().height,0,100);t.style.setProperty("--scroll-percent",(r/100).toString())})},p=(o,t,r,l,u)=>(o-t)*(u-l)/(r-t)+l;return(o,t)=>(d(),g("header",{ref_key:"headerMain",ref:n,class:"v-page-header fp-remove-margin-child"},[a.imageDataForProAPI?(d(),g("div",{key:0,ref_key:"headerContainer",ref:s,class:w(["v-page-header__img",{"is-home":a.isHome}]),style:x({backgroundImage:`url(${a.imageDataForProAPI.resize.xxl})`||""})},H,6)):C("",!0),e("div",B,[e("h1",null,I(a.pageTitle),1)])],512))}});const T=k(E,[["__scopeId","data-v-7a7fa59a"]]);export{T as _};
