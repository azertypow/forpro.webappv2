import{_ as y}from"./TextIntro.vue.a433c3b5.js";import{_ as x,a as k}from"./ImageContent.91e07339.js";import{_ as B}from"./TextContent.vue.3d9ca04b.js";import{d as b,r as w,w as D,x as C,u as F,y as u,b as e,c as t,e as n,g as o,t as l,f as i,z as I,h as r,F as f,A,B as S,C as V,v as $}from"./entry.d8f2a857.js";const z={class:"v-article-name fp-page"},N={key:0,class:"v-article-name__header fp-grid-with-gutter fp-remove-margin-child"},q={class:"fp-heading-h2"},R={key:0,class:"v-article-name__date"},j={class:"fp-grid-coll-container fp-grid-coll-container--center"},E={class:"fp-grid-coll-24-24 fp-grid-coll-reg-16-24 fp-grid-with-gutter"},L={key:1,class:"fp-grid-coll-container fp-grid-coll-container--center"},O={class:"fp-grid-coll-24-24 fp-grid-coll-reg-16-24 fp-grid-with-gutter"},P={key:2,class:"fp-grid-coll-container fp-grid-coll-container--center"},T={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},G={class:"fp-grid-coll-container fp-grid-coll-container--center"},H={class:"fp-text-small"},J={class:"fp-page__sections-box"},K={key:0,class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"},M={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},Q={key:1,class:"fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"},U={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},W={key:2,class:"fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"},X={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24"},Y={key:3,class:"fp-page__sections-box__section"},Z=b({__name:"[slug]",setup(ee){const s=w(null),_=D().params.slug;typeof _=="string"&&C(_).then(c=>{s.value=c,F().updateTheme("fp-var-theme-color-default")});const d=u(()=>{const c=s.value;if(c!==null)return c.coverImage}),p=u(()=>{const c=s.value;return c===null||!c.eventDate?null:S(c.eventDate.value)});return(c,te)=>{const m=y,h=x,g=B,v=k;return e(),t("main",z,[n(s)?(e(),t("header",N,[o("h1",q,l(n(s).title.value),1),n(p)?(e(),t("h5",R,l(n(p)),1)):i("",!0),o("div",j,[o("div",E,[n(d)?(e(),t("div",{key:0,class:"v-article-name__img",style:I({backgroundImage:`url(${n(d).resize.large})`})},null,4)):i("",!0)])])])):i("",!0),n(s)?(e(),t("div",L,[o("div",O,[r(m,{content:n(s).textIntro.value},null,8,["content"])])])):i("",!0),n(s)?(e(),t("div",P,[o("div",T,[o("div",G,[o("div",null,[o("p",H,l(n(s).author),1)])])])])):i("",!0),o("div",J,[n(s)?(e(!0),t(f,{key:0},A(n(s).blockContent,a=>(e(),t(f,null,[a.type==="quote"?(e(),t("div",K,[o("div",M,[r(h,{text:a.html},null,8,["text"])])])):a.type==="text"?(e(),t("div",Q,[o("div",U,[r(g,{content:a.html},null,8,["content"])])])):a.type==="heading"?(e(),t("div",W,[o("div",X,[r(g,{content:a.html},null,8,["content"])])])):i("",!0),a.type==="image"?(e(),t("div",Y,[a.data?(e(),V(v,{key:0,imageBlockContent:a.data},null,8,["imageBlockContent"])):i("",!0)])):i("",!0)],64))),256)):i("",!0)])])}}});const ae=$(Z,[["__scopeId","data-v-9ebac53b"]]);export{ae as default};