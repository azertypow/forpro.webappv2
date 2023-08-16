import{_ as k}from"./PageHeader.801b1ddf.js";import{_ as C}from"./TextIntro.vue.d29ec490.js";import{_ as b,a as w}from"./ImageContent.c88062d8.js";import{_ as B}from"./TextContent.vue.a7f6c4c0.js";import{d as u,b as e,c as o,r as L,E as S,u as T,e as s,C as g,f as c,g as i,h as _,F as l,A as p,p as $,m as F,v as q}from"./entry.6d6e67cd.js";import{P as f}from"./ProfileItem.b8f6e963.js";const A=["innerHTML"],N=u({__name:"TextBulletPoint",props:{htmlContent:{}},setup(r){return(n,a)=>(e(),o("section",{class:"v-text-bullet-point v-text-content",innerHTML:n.htmlContent},null,8,A))}});const h=r=>($("data-v-d0273be8"),r=r(),F(),r),V={class:"v-fondation fp-page"},j={class:"fp-grid-coll-container fp-grid-coll-container--center"},E={key:0,class:"fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"},H={class:"fp-page__sections-box"},M={key:0,class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"},O={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},D={key:1,class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"},z={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},G={key:2,class:"fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"},J={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},K={key:3,class:"fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"},Q={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24"},R={key:4,class:"fp-page__sections-box__section fp-page__sections-box__section--is-image"},U={key:1,class:"fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"},W=h(()=>i("h2",null,"L'équipe",-1)),X={class:"fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles"},Y={class:"fp-grid-coll-24-24 fp-grid-coll-reg-8-24"},Z={key:2,class:"fp-grid-coll-reg-16-24 fp-grid-with-gutter fp-page__sections-box__section"},I=h(()=>i("h3",null,"Le Conseil de Fondation",-1)),P={class:"fp-grid-coll-container"},tt={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},et=u({__name:"fondation",setup(r){const n=L(null);return S().then(a=>{n.value=a,T().updateTheme("fp-var-theme-color-default")}),(a,ot)=>{const v=k,m=C,x=b,d=B,y=w;return e(),o("main",V,[s(n)?(e(),g(v,{key:0,"page-title":s(n).title},null,8,["page-title"])):c("",!0),i("div",j,[s(n)?(e(),o("div",E,[_(m,{content:s(n).textIntro},null,8,["content"])])):c("",!0),i("div",H,[s(n)?(e(!0),o(l,{key:0},p(s(n).blockContent,t=>(e(),o(l,null,[t.type==="list"?(e(),o("div",M,[i("div",O,[_(N,{htmlContent:t.html},null,8,["htmlContent"])])])):c("",!0),t.type==="quote"?(e(),o("div",D,[i("div",z,[_(x,{text:t.html},null,8,["text"])])])):t.type==="text"?(e(),o("div",G,[i("div",J,[_(d,{content:t.html},null,8,["content"])])])):t.type==="heading"?(e(),o("div",K,[i("div",Q,[_(d,{content:t.html},null,8,["content"])])])):t.type==="image"?(e(),o("div",R,[t.data?(e(),g(y,{key:0,imageBlockContent:t.data},null,8,["imageBlockContent"])):c("",!0)])):c("",!0)],64))),256)):c("",!0)]),s(n)&&s(n).team.length>0?(e(),o("div",U,[W,i("div",X,[(e(!0),o(l,null,p(s(n).team,t=>(e(),o("div",Y,[_(f,{"profile-desc":t.text?t.text:void 0,"profile-name":t.name,"profile-type":t.topic?t.topic:void 0,src:t.cover?Object.values(t.cover)[0]:void 0,mail:t.link?t.link:void 0},null,8,["profile-desc","profile-name","profile-type","src","mail"])]))),256))])])):c("",!0),s(n)&&s(n).conseil.length>0?(e(),o("div",Z,[I,i("div",P,[(e(!0),o(l,null,p(s(n).conseil,t=>(e(),o("div",tt,[_(f,{"profile-desc":t.text?t.text:void 0,"profile-name":t.name,"profile-type":t.topic?t.topic:void 0,src:t.cover?Object.values(t.cover)[0]:void 0,mail:t.link?t.link:void 0},null,8,["profile-desc","profile-name","profile-type","src","mail"])]))),256))])])):c("",!0)])])}}});const lt=q(et,[["__scopeId","data-v-d0273be8"]]);export{lt as default};