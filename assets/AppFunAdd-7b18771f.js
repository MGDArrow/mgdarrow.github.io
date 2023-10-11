import{A as x,a as C,b as F,c as g}from"./AddPayment-7ba354be.js";import{T as k}from"./TheButton-97779aeb.js";import{T as D}from"./TheInputText-8273d8e0.js";import{_ as V,B as S,q as s,o as m,c as u,a as r,t as a,D as y,v as i}from"./index-6e138ed7.js";import{a as h,u as b}from"./FuneralsStore-1d165f0a.js";import"./ServicesStore-a525ca32.js";import"./CemeterysStore-d46b4b06.js";import"./TemplsStore-bea0f60a.js";const B={components:{AddServices:x,TheButton:k,AddTime:C,AddTempl:F,TheInputText:D,AddPayment:g},name:"AppFunAdd",data(){return{service:"",time:"",locationTempl:"",locationCemetery:"",locationAddress:"",surname:"",comment:"",payment:!0}},computed:{getDate(){return`Добавить на${h().getDateDay}`}},methods:{addFuneral(){let n=S().user.user.email;if(n){let e=h().getDateForSupabase,p=this.locationTempl&&this.locationTempl!=="Свято-Пантелеимоновский храм (ГБ №2)"?this.locationTempl:!1,d=this.locationTempl==="Свято-Пантелеимоновский храм (ГБ №2)"?!1:null,t=!1;(this.locationTempl||this.locationCemetery||this.locationAddress)&&b().postFunerals({service:this.service.name,date:e,time:this.time,locationTempl:this.locationTempl,locationCemetery:this.locationCemetery,locationAddress:this.locationAddress,surname:this.surname,comment:this.comment,payment:this.payment,templ:p,phoneLocation:d,phoneTempl:t,idUserName:n}).then(this.clearForm())}else this.$router.replace({path:"/login"})},getLocation(n){this.locationTempl=n.type==="templ"?n.location:"",this.locationCemetery=n.type==="cemetery"?n.location:"",this.locationAddress=n.type==="address"?n.location:""},clearForm(){this.time="",this.locationTempl="",this.locationCemetery="",this.locationAddress="",this.surname="",this.comment="",this.payment=!0}}},L={class:"app__add"},U={key:2,class:"add-funeral"};function N(n,e,p,d,t,l){const _=s("add-services"),v=s("add-time"),T=s("add-templ"),c=s("the-input-text"),f=s("add-payment"),A=s("the-button");return m(),u("div",L,[r("h1",null,a(l.getDate),1),t.service?t.time?(m(),u("div",U,[r("h2",{onClick:e[2]||(e[2]=o=>t.service="")},a(t.service.name),1),r("h2",{onClick:e[3]||(e[3]=o=>t.time="")},a(t.time),1),i(T,{onLocation:e[4]||(e[4]=o=>l.getLocation(o))}),i(c,{label:"Фамилия",type:"text",modelValue:t.surname,"onUpdate:modelValue":e[5]||(e[5]=o=>t.surname=o),modelModifiers:{trim:!0}},null,8,["modelValue"]),i(c,{label:"Комментарий",type:"text",modelValue:t.comment,"onUpdate:modelValue":e[6]||(e[6]=o=>t.comment=o),modelModifiers:{trim:!0}},null,8,["modelValue"]),i(f,{payment:t.payment,onPay:e[7]||(e[7]=o=>t.payment=!t.payment)},null,8,["payment"]),i(A,{text:"Добавить",onClick:e[8]||(e[8]=o=>l.addFuneral())})])):(m(),y(v,{key:1,onGetTime:e[1]||(e[1]=o=>t.time=o)})):(m(),y(_,{key:0,onGetService:e[0]||(e[0]=o=>t.service=o)}))])}const z=V(B,[["render",N]]);export{z as default};
