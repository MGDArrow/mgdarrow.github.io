import{T as C,a as x}from"./TheButton-b0c00a93.js";import{A as F,a as k,b as V,c as b}from"./AddPayment-d18d27e7.js";import{_ as g,M as S,q as s,o as l,c,A as y,a as r,t as h,v as i}from"./index-8a95c875.js";import{u as E}from"./DateStore-5979228b.js";import{u as m}from"./FuneralsStore-aedddf84.js";import"./ServicesStore-51b7652a.js";import"./CemeterysStore-1b0ecc7c.js";import"./TemplsStore-7a90a15e.js";const B={name:"AppFunEdit",components:{AddServices:F,AddTime:k,AddTempl:V,TheInputText:C,AddPayment:b,TheButton:x},data(){return{funeral:null,service:"",time:"",locationTempl:"",locationCemetery:"",locationAddress:"",surname:"",comment:"",payment:!0}},methods:{getLocation(e){this.locationTempl=e.type==="templ"?e.location:"",this.locationCemetery=e.type==="cemetery"?e.location:"",this.locationAddress=e.type==="address"?e.location:""},async editFuneral(){let e=S().user.user.email;if(e){let t=E().getDateForSupabase,a=this.locationTempl&&this.locationTempl!=="Свято-Пантелеимоновский храм (ГБ №2)"?this.locationTempl:!1,p=this.locationTempl==="Свято-Пантелеимоновский храм (ГБ №2)"?!1:null,o=!1;(this.locationTempl||this.locationCemetery||this.locationAddress)&&m().putFunerals({service:this.service.name,date:t,time:this.time,locationTempl:this.locationTempl,locationCemetery:this.locationCemetery,locationAddress:this.locationAddress,surname:this.surname,comment:this.comment,payment:this.payment,templ:a,phoneLocation:p,phoneTempl:o,idUserName:e},this.$route.params.id).then(this.$router.replace({path:"/read"}))}else this.$router.replace({path:"/login"})}},beforeMount(){m().getFuneralsForEdit(this.$route.params.id).then(()=>{let e=m().funeralsEdit;this.funeral=e,this.service=e.service,this.time=e.time,this.locationTempl=e.locationTempl,this.locationCemetery=e.locationCemetery,this.locationAddress=e.locationAddress,this.surname=e.surname,this.comment=e.comment,this.payment=e.paymen})}},L={class:"app__edit"},M=r("h1",null,"Редактирование",-1),P={key:2,class:"edit-funeral"};function U(e,t,a,p,o,u){const f=s("add-services"),_=s("add-time"),v=s("add-templ"),d=s("the-input-text"),T=s("add-payment"),A=s("the-button");return l(),c("div",L,[M,o.service?o.time?(l(),c("div",P,[r("h2",{onClick:t[2]||(t[2]=n=>o.service="")},h(o.service),1),r("h2",{onClick:t[3]||(t[3]=n=>o.time="")},h(o.time),1),i(v,{onLocation:t[4]||(t[4]=n=>u.getLocation(n)),inputPrors:o.funeral.locationTempl||o.funeral.locationCemetery||o.funeral.locationAddress},null,8,["inputPrors"]),i(d,{label:"Фамилия",type:"text",modelValue:o.surname,"onUpdate:modelValue":t[5]||(t[5]=n=>o.surname=n),modelModifiers:{trim:!0}},null,8,["modelValue"]),i(d,{label:"Комментарий",type:"text",modelValue:o.comment,"onUpdate:modelValue":t[6]||(t[6]=n=>o.comment=n),modelModifiers:{trim:!0}},null,8,["modelValue"]),i(T,{payment:o.payment,onPay:t[7]||(t[7]=n=>o.payment=!o.payment)},null,8,["payment"]),i(A,{text:"Редактировать",onClick:t[8]||(t[8]=n=>u.editFuneral())})])):(l(),y(_,{key:1,onGetTime:t[1]||(t[1]=n=>o.time=n)})):(l(),y(f,{key:0,onGetService:t[0]||(t[0]=n=>o.service=n.name)}))])}const H=g(B,[["render",U]]);export{H as default};
