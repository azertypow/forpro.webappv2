import{_ as b}from"./TextIntro.vue.cdbe660e.js";import{_ as B}from"./TextQuote.vue.a4c7268d.js";import{_ as C}from"./TextContent.vue.6c7d8ef3.js";import{_ as N}from"./ImageContent.7a4838b2.js";import{d as V,r as F,y as f,K as I,L as A,u as m,B as h,c as s,e,g as t,t as l,f as i,M as S,h as r,F as v,A as $,w as z,N as x,E,b as o,z as q,D as L,v as M}from"./entry.c810f889.js";const P={class:"v-article-name fp-page"},R={key:0,class:"v-article-name__header"},T={class:"fp-grid-coll-container fp-grid-coll-container--center fp-grid-with-gutter"},j={class:"fp-grid-coll-18-24 fp-remove-margin-child"},K={class:"fp-heading-h2 v-article-name__title"},O={key:0,class:"v-article-name__date"},G={class:"fp-grid-coll-container fp-grid-coll-container--center"},H={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},J={key:1,class:"fp-grid-coll-container fp-grid-coll-container--center"},Q={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},U={key:2,class:"fp-grid-coll-container fp-grid-coll-container--center"},W={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},X={class:"fp-grid-coll-container fp-grid-coll-container--center"},Y={class:"fp-grid-coll-18-24"},Z={class:"fp-text-small fp-text--center v-article-name__author"},ee={key:0,class:"fp-text-small fp-text--center v-article-name__publicationDate"},te={class:"fp-page__sections-box"},oe={key:0,class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"},se={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},ne={key:1,class:"fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"},ce={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},ie={key:2,class:"fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"},ae={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24"},re={key:3,class:"fp-page__sections-box__section"},le={class:"fp-grid-coll-container fp-grid-coll-container--center",style:{"padding-top":"2rem"}},_e=V({__name:"[slug]",setup(de){const n=F(null),p=f().params.slug;typeof p=="string"&&I(p).then(c=>{var d;console.log(c),"errors"in c?A({statusCode:404,statusMessage:c.errors[0]}):(n.value=c,m().updateTheme("fp-var-theme-color-default"),f().meta.pageName=(d=m().siteData)==null?void 0:d.blogDetails.title.value)});const g=h(()=>{const c=n.value;if(c!==null)return c.coverImage}),_=h(()=>{const c=n.value;return c===null||!c.eventDate?null:x(c.eventDate.value)});return(c,d)=>{const y=b,k=B,u=C,w=N,D=E;return o(),s("main",P,[e(n)?(o(),s("header",R,[t("div",T,[t("div",j,[t("h1",K,l(e(n).title.value),1),e(_)?(o(),s("h5",O,l(e(_)),1)):i("",!0)])]),t("div",G,[t("div",H,[e(g)?(o(),s("div",{key:0,class:"v-article-name__img",style:S({backgroundImage:`url(${e(g).resize.large})`})},null,4)):i("",!0)])])])):i("",!0),e(n)?(o(),s("div",J,[t("div",Q,[r(y,{content:e(n).textIntro.value},null,8,["content"])])])):i("",!0),e(n)?(o(),s("div",U,[t("div",W,[t("div",X,[t("div",Y,[t("p",Z,l(e(n).author),1),e(_)?i("",!0):(o(),s("p",ee,"Publié le "+l(e(x)(e(n).publicationDate.value)),1))])])])])):i("",!0),t("div",te,[e(n)?(o(!0),s(v,{key:0},$(e(n).blockContent,a=>(o(),s(v,null,[a.type==="quote"?(o(),s("div",oe,[t("div",se,[r(k,{text:a.html},null,8,["text"])])])):a.type==="text"?(o(),s("div",ne,[t("div",ce,[r(u,{content:a.html},null,8,["content"])])])):a.type==="heading"?(o(),s("div",ie,[t("div",ae,[r(u,{content:a.html},null,8,["content"])])])):i("",!0),a.type==="image"?(o(),s("div",re,[a.data?(o(),q(w,{key:0,imageBlockContent:a.data},null,8,["imageBlockContent"])):i("",!0)])):i("",!0)],64))),256)):i("",!0)]),t("div",le,[r(D,{class:"fp-ui-button fp-ui-button--variante-with-background",href:{name:"news"}},{default:z(()=>[L(" Voir toutes les News ")]),_:1})])])}}});const he=M(_e,[["__scopeId","data-v-7c5f2856"]]);export{he as default};
