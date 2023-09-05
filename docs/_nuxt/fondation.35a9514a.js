import{_ as C}from"./PageHeader.29b65cd5.js";import{_ as b}from"./TextIntro.vue.93203aac.js";import{_ as w}from"./TextQuote.vue.783ccef1.js";import{_ as B}from"./TextContent.vue.f8d21c46.js";import{_ as L}from"./ImageContent.2d7b8413.js";import{d as h,b as e,c as n,r as S,E as T,u as $,w as F,e as s,C as f,f as c,g as i,h as _,F as l,A as d,p as N,m as q,v as A}from"./entry.1e58c378.js";import{P as u}from"./ProfileItem.9f882822.js";const V=["innerHTML"],j=h({__name:"TextBulletPoint",props:{htmlContent:{}},setup(a){return(o,r)=>(e(),n("section",{class:"v-text-bullet-point v-text-content",innerHTML:o.htmlContent},null,8,V))}});const v=a=>(N("data-v-6b6f7723"),a=a(),q(),a),E={class:"v-fondation fp-page"},H={class:"fp-grid-coll-container fp-grid-coll-container--center"},M={key:0,class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},O={class:"fp-page__sections-box"},D={key:0,class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"},R={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},z={key:1,class:"fp-grid-coll-container fp-grid-coll-container--center fp-page__sections-box__section"},G={class:"fp-grid-coll-24-24 fp-grid-with-gutter"},J={key:2,class:"fp-page__sections-box__section fp-grid-coll-container fp-grid-coll-container--center"},K={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24 fp-grid-with-gutter"},Q={key:3,class:"fp-page__sections-box__section fp-page__sections-box__section--is-heading fp-grid-coll-container fp-grid-coll-container--center"},U={class:"fp-grid-coll-24-24 fp-grid-coll-reg-18-24"},W={key:4,class:"fp-page__sections-box__section fp-page__sections-box__section--is-image"},X={class:"fp-page__sections-box"},Y={class:"fp-grid-coll-container fp-grid-coll-container--center"},Z={class:"fp-grid-coll-24-24 fp-grid-coll-reg-16-24"},I={key:0,class:"fp-page__sections-box__section"},P=v(()=>i("h2",null,"L'équipe",-1)),tt={class:"fp-grid-coll-container fp-grid-coll-container--center v-fondation__profiles"},et={class:"fp-grid-coll-24-24 fp-grid-coll-reg-8-24"},ot={class:"fp-grid-with-gutter fp-grid-coll-container fp-grid-coll-container--center"},nt={key:1,class:"fp-page__sections-box__section"},it=v(()=>i("h3",null,"Le Conseil de Fondation",-1)),st={class:"fp-grid-coll-container"},ct={class:"fp-grid-coll-24-24 fp-grid-coll-reg-12-24 fp-grid-with-gutter"},_t=h({__name:"fondation",setup(a){const o=S(null);return T().then(r=>{var p;o.value=r,$().updateTheme("fp-var-theme-color-default"),F().meta.pageName=(p=o.value)==null?void 0:p.title}),(r,p)=>{const m=C,x=b,y=w,g=B,k=L;return e(),n("main",E,[s(o)?(e(),f(m,{key:0,"page-title":s(o).title,"image-data-for-pro-a-p-i":s(o).coverImage},null,8,["page-title","image-data-for-pro-a-p-i"])):c("",!0),i("div",H,[s(o)?(e(),n("div",M,[_(x,{content:s(o).textIntro},null,8,["content"])])):c("",!0)]),i("div",O,[s(o)?(e(!0),n(l,{key:0},d(s(o).blockContent,t=>(e(),n(l,null,[t.type==="list"?(e(),n("div",D,[i("div",R,[_(j,{htmlContent:t.html},null,8,["htmlContent"])])])):c("",!0),t.type==="quote"?(e(),n("div",z,[i("div",G,[_(y,{text:t.html},null,8,["text"])])])):t.type==="text"?(e(),n("div",J,[i("div",K,[_(g,{content:t.html},null,8,["content"])])])):t.type==="heading"?(e(),n("div",Q,[i("div",U,[_(g,{content:t.html},null,8,["content"])])])):t.type==="image"?(e(),n("div",W,[t.data?(e(),f(k,{key:0,imageBlockContent:t.data},null,8,["imageBlockContent"])):c("",!0)])):c("",!0)],64))),256)):c("",!0)]),i("div",X,[i("div",Y,[i("div",Z,[s(o)&&s(o).team.length>0?(e(),n("div",I,[P,i("div",tt,[(e(!0),n(l,null,d(s(o).team,t=>(e(),n("div",et,[i("div",ot,[_(u,{"profile-desc":t.text?t.text:void 0,"profile-name":t.name,"profile-type":t.topic?t.topic:void 0,src:t.cover?Object.values(t.cover)[0]:void 0,mail:t.email?t.email:void 0,"external-link":t.link?t.link:void 0},null,8,["profile-desc","profile-name","profile-type","src","mail","external-link"])])]))),256))])])):c("",!0),s(o)&&s(o).conseil.length>0?(e(),n("div",nt,[it,i("div",st,[(e(!0),n(l,null,d(s(o).conseil,t=>(e(),n("div",ct,[_(u,{"profile-desc":t.text?t.text:void 0,"profile-name":t.name,"profile-type":t.topic?t.topic:void 0,src:t.cover?Object.values(t.cover)[0]:void 0,mail:t.email?t.email:void 0,"external-link":t.link?t.link:void 0},null,8,["profile-desc","profile-name","profile-type","src","mail","external-link"])]))),256))])])):c("",!0)])])])])}}});const ut=A(_t,[["__scopeId","data-v-6b6f7723"]]);export{ut as default};