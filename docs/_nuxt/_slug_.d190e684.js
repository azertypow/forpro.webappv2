import{_ as B}from"./TextIntro.vue.5c2f2d3f.js";import{_ as b}from"./TextQuote.vue.63dfad85.js";import{_ as w}from"./TextContent.vue.3cd2688d.js";import{_ as C}from"./ImageContent.6ee1c4f3.js";import{d as F,r as I,w as f,x as A,u as m,y as h,c as n,e,g as t,t as l,f as c,z as N,h as r,F as v,A as S,B as y,b as o,C as V,v as $}from"./entry.8b6b81cf.js";const z={class:"v-article-name fp-page"},q={key:0,class:"v-article-name__header"},P={class:"fp-grid-coll-container fp-grid-coll-container--center fp-grid-with-gutter"},R={class:"fp-grid-coll-18-24 fp-remove-margin-child"},j={class:"fp-heading-h2 v-article-name__title"},E={key:0,class:"v-article-name__date"},L={class:"fp-grid-coll-container fp-grid-coll-container--center"},O={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},T={key:1,class:"fp-grid-coll-container fp-grid-coll-container--center"},G={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},H={key:2,class:"fp-grid-coll-container fp-grid-coll-container--center"},J={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},K={class:"fp-grid-coll-container fp-grid-coll-container--center"},M={class:"fp-grid-coll-18-24"},Q={class:"fp-text-small fp-text--center v-article-name__author"},U={key:0,class:"fp-text-small fp-text--center v-article-name__publicationDate"},W={class:"fp-page__sections-box"},X={key:0,class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"},Y={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},Z={key:1,class:"fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"},ee={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},te={key:2,class:"fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"},oe={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24"},ne={key:3,class:"fp-page__sections-box__section"},se=F({__name:"[slug]",setup(ce){const s=I(null),p=f().params.slug;typeof p=="string"&&A(p).then(a=>{var d;s.value=a,m().updateTheme("fp-var-theme-color-default"),f().meta.pageName=(d=m().siteData)==null?void 0:d.blogDetails.title.value});const g=h(()=>{const a=s.value;if(a!==null)return a.coverImage}),_=h(()=>{const a=s.value;return a===null||!a.eventDate?null:y(a.eventDate.value)});return(a,d)=>{const x=B,k=b,u=w,D=C;return o(),n("main",z,[e(s)?(o(),n("header",q,[t("div",P,[t("div",R,[t("h1",j,l(e(s).title.value),1),e(_)?(o(),n("h5",E,l(e(_)),1)):c("",!0)])]),t("div",L,[t("div",O,[e(g)?(o(),n("div",{key:0,class:"v-article-name__img",style:N({backgroundImage:`url(${e(g).resize.large})`})},null,4)):c("",!0)])])])):c("",!0),e(s)?(o(),n("div",T,[t("div",G,[r(x,{content:e(s).textIntro.value},null,8,["content"])])])):c("",!0),e(s)?(o(),n("div",H,[t("div",J,[t("div",K,[t("div",M,[t("p",Q,l(e(s).author),1),e(_)?c("",!0):(o(),n("p",U,"Publié le "+l(e(y)(e(s).publicationDate.value)),1))])])])])):c("",!0),t("div",W,[e(s)?(o(!0),n(v,{key:0},S(e(s).blockContent,i=>(o(),n(v,null,[i.type==="quote"?(o(),n("div",X,[t("div",Y,[r(k,{text:i.html},null,8,["text"])])])):i.type==="text"?(o(),n("div",Z,[t("div",ee,[r(u,{content:i.html},null,8,["content"])])])):i.type==="heading"?(o(),n("div",te,[t("div",oe,[r(u,{content:i.html},null,8,["content"])])])):c("",!0),i.type==="image"?(o(),n("div",ne,[i.data?(o(),V(D,{key:0,imageBlockContent:i.data},null,8,["imageBlockContent"])):c("",!0)])):c("",!0)],64))),256)):c("",!0)])])}}});const de=$(se,[["__scopeId","data-v-61262947"]]);export{de as default};