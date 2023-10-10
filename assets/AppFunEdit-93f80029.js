import{T as C,a as x}from"./TheButton-2f782603.js";import{A as F,a as k,b as V,c as S}from"./AddPayment-0fc2e8e2.js";import{_ as b,M as g,q as s,o as l,c as u,A as c,a as m,t as y,v as i}from"./index-2e3796e7.js";import{a as B,u as h}from"./FuneralsStore-9e9c8e9f.js";import"./ServicesStore-992dc7f3.js";import"./CemeterysStore-f52802e5.js";import"./TemplsStore-df0ae72c.js";const E={name:"AppFunEdit",components:{AddServices:F,AddTime:k,AddTempl:V,TheInputText:C,AddPayment:S,TheButton:x},data(){return{funeral:null,service:"",time:"",locationTempl:"",locationCemetery:"",locationAddress:"",surname:"",comment:"",payment:!0}},methods:{getLocation(o){this.locationTempl=o.type==="templ"?o.location:"",this.locationCemetery=o.type==="cemetery"?o.location:"",this.locationAddress=o.type==="address"?o.location:""},async editFuneral(){let o=g().user.user.email,e=B().getDateForSupabase,r=this.locationTempl&&this.locationTempl!=="Свято-Пантелеимоновский храм (ГБ №2)"?this.locationTempl:!1,a=this.locationTempl==="Свято-Пантелеимоновский храм (ГБ №2)"?!1:null,t=!1;(this.locationTempl||this.locationCemetery||this.locationAddress)&&h().putFunerals({service:this.service.name,date:e,time:this.time,locationTempl:this.locationTempl,locationCemetery:this.locationCemetery,locationAddress:this.locationAddress,surname:this.surname,comment:this.comment,payment:this.payment,templ:r,phoneLocation:a,phoneTempl:t,idUserName:o},this.$route.params.id).then(this.$router.replace({path:"/read"}))}},mounted(){let o=h().getFuneralsForEdit(this.$route.params.id);this.funeral=o,this.service=o.service,this.time=o.time,this.locationTempl=o.locationTempl,this.locationCemetery=o.locationCemetery,this.locationAddress=o.locationAddress,this.surname=o.surname,this.comment=o.comment,this.payment=o.payment}},L={class:"app__edit"},P=m("h1",null,"Редактирование",-1),U={key:2,class:"edit-funeral"};function D(o,e,r,a,t,p){const _=s("add-services"),v=s("add-time"),f=s("add-templ"),d=s("the-input-text"),T=s("add-payment"),A=s("the-button");return l(),u("div",L,[P,t.service?t.time?(l(),u("div",U,[m("h2",{onClick:e[2]||(e[2]=n=>t.service="")},y(t.service),1),m("h2",{onClick:e[3]||(e[3]=n=>t.time="")},y(t.time),1),i(f,{onLocation:e[4]||(e[4]=n=>p.getLocation(n)),inputPrors:t.funeral.locationTempl||t.funeral.locationCemetery||t.funeral.locationAddress},null,8,["inputPrors"]),i(d,{label:"Фамилия",type:"text",modelValue:t.surname,"onUpdate:modelValue":e[5]||(e[5]=n=>t.surname=n),modelModifiers:{trim:!0}},null,8,["modelValue"]),i(d,{label:"Комментарий",type:"text",modelValue:t.comment,"onUpdate:modelValue":e[6]||(e[6]=n=>t.comment=n),modelModifiers:{trim:!0}},null,8,["modelValue"]),i(T,{payment:t.payment,onPay:e[7]||(e[7]=n=>t.payment=!t.payment)},null,8,["payment"]),i(A,{text:"Редактировать",onClick:e[8]||(e[8]=n=>p.editFuneral())})])):(l(),c(v,{key:1,onGetTime:e[1]||(e[1]=n=>t.time=n)})):(l(),c(_,{key:0,onGetService:e[0]||(e[0]=n=>t.service=n.name)}))])}const z=b(E,[["render",D]]);export{z as default};
