import{a,o as t,f as n,F as s,B as c,k as o}from"./entry.ab9c5e97.js";const l=["src"],r=a({__name:"ImageContent",props:{src:{type:String,required:!0},fixedScroll:{type:Boolean,required:!1,default:!1}},setup(e){return(i,_)=>(t(),n("section",{class:c(["v-image-content",{"has-fixed-effect":e.fixedScroll}])},[e.fixedScroll?(t(),n("div",{key:0,class:"v-image-content__fixed-effect",style:s({backgroundImage:`url(${e.src})`})},null,4)):(t(),n("img",{key:1,class:"v-image-content__img",alt:"lorem ipsum image",src:e.src},null,8,l))],2))}});const f=o(r,[["__scopeId","data-v-697e8fd3"]]);export{f as _};