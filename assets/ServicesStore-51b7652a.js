import{L as r,s}from"./index-8a95c875.js";const i=r("ServicesStore",{state(){return{services:[]}},actions:{async getServices(){await s.from("SERVICE").select("*").order("id",{ascending:!0}).then(e=>{this.services=e.data})},async postServices(e){await s.from("SERVICE").insert(e)},async putServices(e,t){await s.from("SERVICE").update(e).eq("id",t)},async deleteServices(e){await s.from("SERVICE").delete().eq("id",e)}}});export{i as u};
