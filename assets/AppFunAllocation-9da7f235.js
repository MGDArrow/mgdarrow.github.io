import{R as k}from"./ReadPoint-5c1827b2.js";import{T as A}from"./TheButton-97779aeb.js";import{T as x}from"./TheInputText-8273d8e0.js";import{u as v,a as y}from"./FuneralsStore-1d165f0a.js";import{_ as T,q as m,o as i,c as r,v as d,a as c,F as b,r as h,t as u,n as C,D as F}from"./index-6e138ed7.js";import{u as $}from"./TemplsStore-bea0f60a.js";const L={components:{TheInputText:x,TheButton:A},name:"AllocationTempl",props:["open","templs","funeral"],data(){return{inputTempl:""}},computed:{getTempls(){let p=this.$props.templs,t=this.inputTempl.toLowerCase();return t===""||this.isTempl?void 0:p.filter(o=>{let l=o.name.toLowerCase().includes(t),s=o.abbot?o.abbot.toLowerCase().includes(t):!1,a=o.label?o.label.toLowerCase().includes(t):!1;return l||s||a})},isTempl(){return this.$props.templs.find(t=>t.name.toLowerCase()===this.inputTempl.toLowerCase())}},methods:{updateAllocation(){this.isTempl&&v().putFunerals({templ:this.inputTempl},this.$props.funeral.id)}}},g={class:"add-templ__blanks"},w=["onClick"],D={class:"add-templ__blank--name"},S={class:"add-templ__blank--label"},B={class:"add-templ__blank--abbot"};function E(p,t,n,o,l,s){const a=m("the-input-text"),_=m("the-button");return i(),r("div",{class:C(["allocation__templs",{"allocation__templs--open":n.open,"allocation__templs--open-max":s.getTempls}])},[d(a,{type:"text",label:"Выбрать храм",modelValue:l.inputTempl,"onUpdate:modelValue":t[0]||(t[0]=e=>l.inputTempl=e),modelModifiers:{trim:!0}},null,8,["modelValue"]),c("div",g,[(i(!0),r(b,null,h(s.getTempls,e=>(i(),r("div",{class:"add-templ__blank",key:e.id,onClick:f=>l.inputTempl=e.name},[c("div",D,u(e==null?void 0:e.name),1),c("div",S,u(e==null?void 0:e.label),1),c("div",B,u(e==null?void 0:e.abbot),1)],8,w))),128))]),d(_,{text:"Распределить",onClick:t[1]||(t[1]=e=>s.updateAllocation())})],2)}const V=T(L,[["render",E]]);const N={components:{AllocationTempl:V,ReadPoint:k},name:"AllocationPoint",props:["funeral"],data(){return{isOpenEdit:!1}},computed:{getTemplsSort(){return $().templs}}},O={class:"allocation__point"};function P(p,t,n,o,l,s){const a=m("read-point"),_=m("allocation-templ");return i(),r("div",O,[c("div",{class:"js-read-funeral",onClick:t[0]||(t[0]=e=>l.isOpenEdit=!l.isOpenEdit)},[d(a,{funeral:this.funeral},null,8,["funeral"])]),d(_,{open:l.isOpenEdit,templs:s.getTemplsSort,funeral:n.funeral},null,8,["open","templs","funeral"])])}const R=T(N,[["render",P]]);const j={name:"AppFunAllocation",components:{AllocationPoint:R},computed:{getFunerals(){return v().getFuneralsForAllocation.reduce((n,o)=>{const{locationTempl:l}=o,{locationCemetery:s}=o,{locationAddress:a}=o;return l&&(n[l]=n[l]??[],n[l].push(o)),s&&(n[s]=n[s]??[],n[s].push(o)),a&&(n[a]=n[a]??[],n[a].push(o)),n},{})},getDate(){return`Распределить на${y().getDateDay}`}}},q={class:"app__allocation"};function z(p,t,n,o,l,s){const a=m("allocation-point");return i(),r("div",q,[c("h1",null,u(s.getDate),1),(i(!0),r(b,null,h(s.getFunerals,(_,e)=>(i(),r("div",{class:"allocation__data",key:_.id},[c("h2",null,u(e),1),(i(!0),r(b,null,h(_,f=>(i(),F(a,{key:f.id,funeral:f},null,8,["funeral"]))),128))]))),128))])}const K=T(j,[["render",z]]);export{K as default};
