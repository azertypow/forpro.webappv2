import{d as h,r as u,B as f,b as t,c as o,g as r,L as v,f as i,t as m,e as a,h as g,w as k,T as y,i as w,p as L,m as I,v as D}from"./entry.ef8929e3.js";const T=""+new URL("mail_FILL0_wght400_GRAD0_opsz48.8526c89c.svg",import.meta.url).href,B=""+new URL("link_FILL0_wght400_GRAD0_opsz48.ad686f62.svg",import.meta.url).href,_=l=>(L("data-v-51580576"),l=l(),I(),l),S={class:"v-profile-item__header"},z={class:"v-profile-item__name"},C={key:1,class:"v-profile-item__type"},N={key:2,class:"v-profile-item__icon"},P=_(()=>r("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24"},[r("path",{d:"m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"})],-1)),b=[P],R={key:0,class:"v-profile-item__details"},$=["innerHTML"],M={class:"v-profile-item__link-container fp-grid-coll-container"},V=["href"],A=_(()=>r("img",{src:T,alt:"get mail contact"},null,-1)),F=[A],G=["href"],H=_(()=>r("img",{src:B,alt:"get external link"},null,-1)),U=[H],x=h({__name:"ProfileItem",props:{src:{},small:{type:Boolean},mail:{},externalLink:{},profileDesc:{},listMode:{type:Boolean},profileName:{},profileType:{}},setup(l){const s=l,n=u(!1),c=f(()=>!(s.src||!s.profileDesc&&!s.externalLink&&!s.mail)),d=f(()=>s.src?!0:s.profileDesc?s.src&&s.profileDesc?!0:n.value:!1);return(e,p)=>(t(),o("section",{class:w(["v-profile-item",{"with-photo":e.src,"v-profile-item--is-open":a(n),"has-details-to-show":a(c)}]),onClick:p[0]||(p[0]=E=>n.value=!a(n))},[r("div",S,[e.src?(t(),o("div",{key:0,class:"v-profile-item__img",style:v({backgroundImage:`url(${e.src.resize.reg})`||""})},null,4)):i("",!0),r("h5",z,m(e.profileName),1),e.profileType?(t(),o("h5",C,m(e.profileType),1)):i("",!0),a(c)?(t(),o("span",N,b)):i("",!0)]),g(y,null,{default:k(()=>[a(d)?(t(),o("div",R,[e.profileDesc?(t(),o("div",{key:0,class:"v-profile-item__desc fp-remove-margin-child",innerHTML:e.profileDesc},null,8,$)):i("",!0),r("div",M,[e.mail?(t(),o("a",{key:0,class:"v-profile-item__link",href:`mailto:${e.mail}`,target:"_blank"},F,8,V)):i("",!0),e.externalLink?(t(),o("a",{key:1,class:"v-profile-item__link",href:`${e.externalLink}`,target:"_blank"},U,8,G)):i("",!0)])])):i("",!0)]),_:1})],2))}});const Z=D(x,[["__scopeId","data-v-51580576"]]);export{Z as P};
