import{d as h,r as u,y as f,b as t,c as o,g as s,e as a,f as r,z as v,t as c,h as k,D as g,T as y,i as I,p as w,m as D,v as L}from"./entry.8f01c2d7.js";const b=""+new URL("mail_FILL0_wght400_GRAD0_opsz48.8526c89c.svg",import.meta.url).href,z=""+new URL("link_FILL0_wght400_GRAD0_opsz48.ad686f62.svg",import.meta.url).href,_=i=>(w("data-v-1fa453b2"),i=i(),D(),i),S={class:"v-profile-item__header"},B={key:0,class:"v-profile-item__icon"},C=_(()=>s("span",{class:"v-profile-item__icon__horizontal"},null,-1)),N=_(()=>s("span",{class:"v-profile-item__icon__vertical"},null,-1)),T=[C,N],P={class:"v-profile-item__name"},R={class:"v-profile-item__type"},$={key:0,class:"v-profile-item__details"},V={class:"v-profile-item__desc"},A=["href"],F=_(()=>s("img",{src:b,alt:"get mail contact"},null,-1)),G=[F],U=["href"],E=_(()=>s("img",{src:z,alt:"get external link"},null,-1)),M=[E],O=h({__name:"ProfileItem",props:{src:{},small:{type:Boolean},mail:{},externalLink:{},profileDesc:{},listMode:{type:Boolean},profileName:{},profileType:{}},setup(i){const l=i,n=u(!1),p=f(()=>!(!l.profileDesc&&!l.externalLink&&!l.mail)),d=f(()=>l.profileDesc?l.src?!0:n.value:!1);return(e,m)=>(t(),o("section",{class:I(["v-profile-item",{"with-photo":e.src,small:e.small,"v-profile-item--is-open":a(n),"has-details-to-show":a(p)}]),onClick:m[0]||(m[0]=j=>n.value=!a(n))},[s("div",S,[a(p)?(t(),o("span",B,T)):r("",!0),e.src?(t(),o("div",{key:1,class:"v-profile-item__img",style:v({backgroundImage:`url(${e.src})`||""})},null,4)):r("",!0),s("h5",P,c(e.profileName),1),s("h5",R,c(e.profileType),1)]),k(y,null,{default:g(()=>[a(d)?(t(),o("div",$,[s("p",V,c(e.profileDesc),1),e.mail?(t(),o("a",{key:0,class:"v-profile-item__link",href:`mailto:${e.mail}`,target:"_blank"},G,8,A)):r("",!0),e.externalLink?(t(),o("a",{key:1,class:"v-profile-item__link",href:`${e.externalLink}`,target:"_blank"},M,8,U)):r("",!0)])):r("",!0)]),_:1})],2))}});const H=L(O,[["__scopeId","data-v-1fa453b2"]]);export{H as P};