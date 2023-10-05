import{T as C,a as x}from"./TheButton-b0c00a93.js";import{u as y}from"./AllocationStore-16898ab9.js";import{_ as k,q as p,o as i,c as r,v as f,a as c,F as b,r as v,t as _,n as d,z as h,A}from"./index-8a95c875.js";import{u as L}from"./TemplsStore-7a90a15e.js";import{u as w}from"./DateStore-5979228b.js";const F={components:{TheInputText:C,TheButton:x},name:"AllocationTempl",props:["open","templs","funeral"],data(){return{inputTempl:""}},computed:{getTempls(){let u=this.$props.templs,t=this.inputTempl.toLowerCase();return t===""||this.isTempl?void 0:u.filter(l=>{let a=l.name.toLowerCase().includes(t),o=l.abbot?l.abbot.toLowerCase().includes(t):!1,s=l.label?l.label.toLowerCase().includes(t):!1;return a||o||s})},isTempl(){return this.$props.templs.find(t=>t.name.toLowerCase()===this.inputTempl.toLowerCase())}},methods:{updateAllocation(){this.isTempl&&y().putAllocations({templ:this.inputTempl},this.$props.funeral.id)}}},g={class:"add-templ__blanks"},S=["onClick"],V={class:"add-templ__blank--name"},B={class:"add-templ__blank--label"},E={class:"add-templ__blank--abbot"};function N(u,t,e,l,a,o){const s=p("the-input-text"),m=p("the-button");return i(),r("div",{class:d(["allocation__templs",{"allocation__templs--open":e.open,"allocation__templs--open-max":o.getTempls}])},[f(s,{type:"text",label:"Выбрать храм",modelValue:a.inputTempl,"onUpdate:modelValue":t[0]||(t[0]=n=>a.inputTempl=n),modelModifiers:{trim:!0}},null,8,["modelValue"]),c("div",g,[(i(!0),r(b,null,v(o.getTempls,n=>(i(),r("div",{class:"add-templ__blank",key:n.id,onClick:T=>a.inputTempl=n.name},[c("div",V,_(n==null?void 0:n.name),1),c("div",B,_(n==null?void 0:n.label),1),c("div",E,_(n==null?void 0:n.abbot),1)],8,S))),128))]),f(m,{text:"Распределить",onClick:t[1]||(t[1]=n=>o.updateAllocation())})],2)}const O=k(F,[["render",N]]);const D={components:{AllocationTempl:O},name:"ReadPoint",props:["funeral"],data(){return{isOpenEdit:!1}},computed:{getTemplsSort(){return L().templs}},methods:{isTempl(u){return u==="false"?"Не распределено":u}}},P={class:"allocation__point"},z={class:"funeral__time"},q={class:"funeral__info"},I={key:0,class:"funeral-info__surname"},M={key:1,class:"funeral-info__templ"},R={class:"funeral__status"},U={key:0,class:"funeral__comment"};function j(u,t,e,l,a,o){const s=p("font-awesome-icon"),m=p("allocation-templ");return i(),r("div",P,[c("div",{class:"read-funeral",onClick:t[0]||(t[0]=n=>a.isOpenEdit=!a.isOpenEdit)},[c("div",z,_(e.funeral.time),1),c("div",q,[c("div",{class:d(["funeral-info__location",{"funeral-info__location--ws":!e.funeral.surname}])},_(e.funeral.locationTempl||e.funeral.locationCemetery||e.funeral.locationAddress),3),e.funeral.surname?(i(),r("div",I,_(e.funeral.surname),1)):h("",!0),e.funeral.locationTempl!==e.funeral.templ?(i(),r("div",M,[c("span",{class:d({"funeral-red":e.funeral.templ==="false"})},_(o.isTempl(e.funeral.templ)),3)])):h("",!0)]),c("div",R,[f(s,{icon:["fab","bitcoin"],class:d({"funeral-red":!e.funeral.payment,"funeral-green":e.funeral.payment})},null,8,["class"]),e.funeral.phoneLocation!==null?(i(),A(s,{key:0,icon:["fas","circle-check"],class:d({"funeral-red":e.funeral.phoneLocation==="false","funeral-green":e.funeral.phoneLocation=="true"})},null,8,["class"])):h("",!0),f(s,{icon:["fas","circle-check"],class:d({"funeral-red":!e.funeral.phoneTempl,"funeral-green":e.funeral.phoneTempl})},null,8,["class"])]),e.funeral.comment?(i(),r("div",U," *"+_(e.funeral.comment),1)):h("",!0)]),f(m,{open:a.isOpenEdit,templs:o.getTemplsSort,funeral:e.funeral},null,8,["open","templs","funeral"])])}const G=k(D,[["render",j]]);const H={name:"AppFunAllocation",components:{AllocationPoint:G},computed:{getFunerals(){return y().allocations.reduce((e,l)=>{if(w().getDateForSupabase==l.date){const{locationTempl:a}=l,{locationCemetery:o}=l,{locationAddress:s}=l;a&&(e[a]=e[a]??[],e[a].push(l)),o&&(e[o]=e[o]??[],e[o].push(l)),s&&(e[s]=e[s]??[],e[s].push(l))}return e},{})}}},J={class:"app__allocation"},K=c("h1",null,"Распределение",-1);function Q(u,t,e,l,a,o){const s=p("allocation-point");return i(),r("div",J,[K,(i(!0),r(b,null,v(o.getFunerals,(m,n)=>(i(),r("div",{class:"allocation__data",key:m.id},[c("h2",null,_(n),1),(i(!0),r(b,null,v(m,T=>(i(),A(s,{key:T.id,funeral:T},null,8,["funeral"]))),128))]))),128))])}const ee=k(H,[["render",Q]]);export{ee as default};
