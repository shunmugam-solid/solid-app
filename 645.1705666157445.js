"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[645],{645:function(e,s,t){t.r(s),t.d(s,{default:function(){return h}});var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:".kyb-eSign"},[e._v(" Loading... ")])},n=[],o=t(1956),r=t(629),c={name:"ESignView",components:{},mixins:[o.Z],data(){return{retryCount:0,showESign:!1,isLoading:!1}},created(){this.startEsign()},computed:{...(0,r.Se)(["getActiveEnv"]),...(0,r.Se)("user",["getUserAuthToken"])},methods:{...(0,r.nv)("kyb",["fetchBusiness","listAllBusiness","updateOwnershipDisclosure","getOwnershipDisclosure"]),...(0,r.OI)("kyb",["setSelectedBusiness"]),...(0,r.OI)("account",["updateCreateAccountData"]),performSignAction(e){const s=this.showLoader();this.updateOwnershipDisclosure({businessId:this.getSelectedBusiness.id,payload:{action:e,redirectUri:window.location.origin+"/kyb/eSignCallback"}}).then((e=>{e.url&&(window.sessionStorage.setItem("app_env",this.getActiveEnv),window.sessionStorage.setItem("user_auth_tokens",JSON.stringify(this.getUserAuthToken)),window.sessionStorage.setItem("device_id",this.$http.defaults.headers.common["SD-Device-ID"]),window.location.href=e.url)})).finally((()=>{s.close()}))},startEsign(){const e=this.showLoader();this.getOwnershipDisclosure(this.getSelectedBusiness.id).then((e=>{console.log(e),"pending"===e.status&&setTimeout((()=>{this.performSignAction("regenrate")}),0)})).catch((e=>{console.log("e",e),"EC_BUSINESS_AGREEMENT_NOT_FOUND"===e.code&&setTimeout((()=>{this.performSignAction("regenrate")}),0)})).finally((()=>{e.close()}))}}},a=c,l=t(3736),u=(0,l.Z)(a,i,n,!1,null,null,null),h=u.exports},1956:function(e,s,t){var i=t(629);s["Z"]={computed:{...(0,i.Se)("kyb",["getSelectedBusiness"])},methods:{...(0,i.nv)("kyb",["fetchAllOwners","listAllBusiness","updateOwner"]),...(0,i.OI)("kyb",["setSelectedBusiness"])},created(){const e=this.getSelectedBusiness;if(e)this.afterBusiness&&"function"===typeof this.afterBusiness&&this.afterBusiness(e);else{const e=this.showLoader();this.listAllBusiness().then((e=>{if(0!==e.total){const s=e.data;this.setSelectedBusiness(s[0]),this.afterBusiness&&"function"===typeof this.afterBusiness&&setTimeout((()=>{this.afterBusiness(s[0])}),0)}})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{e.close()}))}}}}}]);
//# sourceMappingURL=645.1705666157445.js.map