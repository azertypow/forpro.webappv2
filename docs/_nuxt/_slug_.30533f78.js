import{_ as C}from"./PageHeader.4a5c5b1b.js";import{_ as F}from"./TextIntro.vue.97cf1d89.js";import{_ as q,a as D}from"./ImageContent.4d8d98a0.js";import{_ as S}from"./TextContent.vue.d505f67f.js";import{d as v,b as o,c as s,p as w,m as N,g as e,I as u,v as x,r as P,w as f,M as V,u as j,y as O,t as Q,e as c,C as m,f as i,h as r,F as h,A as T}from"./entry.81396758.js";const y=a=>(w("data-v-1997da03"),a=a(),N(),a),z={class:"v-block-faq fp-remove-margin-child"},E=y(()=>e("h3",null,[u("Des questions?"),e("br"),u("Contactez-nous")],-1)),L=y(()=>e("button",null,[e("a",{target:"_blank",href:"mailto:info@for-pro.ch"},"info@for-pro.ch")],-1)),M=[E,L],R=v({__name:"BlockFAQ",props:{href:{}},setup(a){return(t,l)=>(o(),s("div",z,M))}});const G=x(R,[["__scopeId","data-v-1997da03"]]),H={class:"v-section-name fp-page"},J={key:1,class:"fp-grid-coll-container fp-grid-coll-container--center"},K={class:"fp-grid-coll-24-24 fp-grid-coll-reg-16-24 fp-grid-with-gutter"},U={class:"fp-page__sections-box"},W={key:0,class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"},X={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},Y={key:1,class:"fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"},Z={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},ee={key:2,class:"fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"},te={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24"},oe={key:3,class:"fp-page__sections-box__section fp-page__sections-box__section--is-image"},ne={class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section fp-page__sections--background-color"},se={class:"fp-grid-coll-24-24 fp-grid-coll-reg-16-24"},ce=v({__name:"[slug]",setup(a){const t=P(null),l=f().params.slug;typeof l=="string"&&V(l).then(_=>{var p;t.value=_,j().updateTheme(_.themeColor),f().meta.pageName=(p=t.value)==null?void 0:p.title});const I=O(()=>{const _=t.value;if(_!==null&&_.coverImage!==null)return Object.values(_.coverImage)[0]});return(_,p)=>{var g;const b=C,k=F,A=q,d=S,B=D,$=G;return o(),s("main",H,[e("head",null,[e("title",null,Q((g=c(t))==null?void 0:g.title),1)]),c(t)?(o(),m(b,{key:0,"page-title":c(t).title,imageDataForProAPI:c(I)},null,8,["page-title","imageDataForProAPI"])):i("",!0),c(t)?(o(),s("div",J,[e("div",K,[r(k,{content:c(t).textIntro},null,8,["content"])])])):i("",!0),e("div",U,[c(t)?(o(!0),s(h,{key:0},T(c(t).content,n=>(o(),s(h,null,[n.type==="quote"?(o(),s("div",W,[e("div",X,[r(A,{text:n.html},null,8,["text"])])])):n.type==="text"?(o(),s("div",Y,[e("div",Z,[r(d,{content:n.html},null,8,["content"])])])):n.type==="heading"?(o(),s("div",ee,[e("div",te,[r(d,{content:n.html},null,8,["content"])])])):n.type==="image"?(o(),s("div",oe,[n.data?(o(),m(B,{key:0,imageBlockContent:n.data},null,8,["imageBlockContent"])):i("",!0)])):i("",!0)],64))),256)):i("",!0)]),e("div",ne,[e("div",se,[r($,{href:"/faq#Accueil"})])])])}}});const pe=x(ce,[["__scopeId","data-v-5b445e90"]]);export{pe as default};