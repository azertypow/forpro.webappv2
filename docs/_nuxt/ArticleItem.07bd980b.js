import{d as o,b as i,z as _,w as u,g as t,t as n,c as s,e as a,N as c,f as r,M as d,Q as m,i as v,E as g,v as f}from"./entry.71fc97fd.js";const y={class:"v-article-item__title fp-remove-margin-child"},h={key:0,class:"v-article-item__date"},p=["innerHTML"],x={class:"v-article-item__info"},C={class:"fp-ui-button fp-ui-button--small fp-ui-button--light"},I={key:0,class:"v-article-item__date fp-grid-with-gutter"},b=o({__name:"ArticleItem",props:{imageInstance:{type:Object,required:!0},title:{type:String,required:!0},textIntro:{type:String,required:!0},typeOfContent:{type:Object,required:!0},date:{type:String,required:!0},slug:{type:String,required:!0},isNegativeColor:{type:Boolean,required:!1,default:!1}},setup(e){return(k,q)=>{const l=g;return i(),_(l,{class:v(["v-article-item",{"is-negative-color":e.isNegativeColor}]),href:`/news/${e.slug}`},{default:u(()=>[t("div",y,[t("h4",null,n(e.title),1),e.typeOfContent==="event"?(i(),s("h5",h,n(a(c)(e.date)),1)):r("",!0)]),t("div",{class:"v-article-item__img",style:d({backgroundImage:`url(${e.imageInstance.resize.small})`})},null,4),t("div",{class:"v-article-item__content",innerHTML:e.textIntro},null,8,p),t("div",x,[t("div",C,n(a(m)(e.typeOfContent)),1),e.typeOfContent!=="event"?(i(),s("div",I,n(a(c)(e.date,!1)),1)):r("",!0)])]),_:1},8,["href","class"])}}});const O=f(b,[["__scopeId","data-v-cccee910"]]);export{O as _};