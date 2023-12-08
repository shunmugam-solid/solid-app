"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[4715],{4715:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"widgetContainer widgetContainer--center widgetContainer--scrollable yourOwnership"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[s("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:e.logoutAndRedirect}}),s("p",{staticClass:"title"},[e._v(" "+e._s(e.$t("addOwnerPercentage_NavTitle"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("el-form",{staticClass:"wise-form",nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit()},submit:function(e){e.preventDefault()}},model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}},[s("div",{staticClass:"borderWrapper yourOwnership__switch-wrapper"},[s("p",{staticClass:"wise-form__header"},[e._v(" "+e._s(e.$t("addOwnerPercentage_Title"))+" ")]),s("div",{staticClass:"wise-form__text-with-switch"},[s("p",{staticClass:"wise-forn__info"},[e._v(" "+e._s(e.$t("addOwnerPercentage_Switch_Descriptions"))+" ")]),s("el-switch",{attrs:{"active-color":"var(--branding)","inactive-color":"#dfdfe4"},model:{value:e.greaterThan25,callback:function(t){e.greaterThan25=t},expression:"greaterThan25"}})],1)]),e.greaterThan25?s("el-form-item",{staticClass:"is-no-asterisk column-input",attrs:{prop:"percentage",label:e.$t("addOwnerPercentage_TextField_Descriptions")}},[e.greaterThan25?s("el-input",{staticClass:"is-no-asterisk",attrs:{type:"number",maxlength:"3"},model:{value:e.formData.percentage,callback:function(t){e.$set(e.formData,"percentage",t)},expression:"formData.percentage"}}):e._e()],1):e._e(),s("p",{staticClass:"yourOwnership__verify-description wise-form__info"},[e._v(" "+e._s(e.$t("addOwnerPercentage_Descriptions"))+" ")])],1),s("div",{staticClass:"widgetContainer__footer--fixed"},[s("el-button",{staticClass:"el-button__brand brand",attrs:{type:"primary",disabled:e.isFormInValid},on:{click:e.submit}},[e._v(" "+e._s(e.$t("addOwnerPercentage_NextButton"))+" ")])],1)],1)])},i=[],n=s(629),r=s(1956),o={name:"YourOwnership",mixins:[r.Z],data(){return{formData:{percentage:null},greaterThan25:null,ownerDetails:null}},computed:{isFormInValid(){return!!this.greaterThan25&&!(this.formData.percentage&&""!==this.formData.percentage&&this.formData.percentage>=25&&this.formData.percentage<=100)}},methods:{...(0,n.nv)("kyb",["fetchAllOwners","updateOwner"]),afterBusiness(){this.getAllOwners(this.getSelectedBusiness.id)},getAllOwners(e){const t=this.showLoader();this.fetchAllOwners(e).then((e=>{0!==e.data.length&&(this.ownerDetails=e.data[0],0!=this.ownerDetails.ownership&&(this.greaterThan25=!0,this.formData.percentage=this.ownerDetails.ownership))})).catch((e=>{this.apiErrorMessage(e)})).finally((()=>{t.close()}))},submit(){if(this.isFormInValid)return;this.greaterThan25||(this.formData.percentage=0);const e=this.ownerDetails;if(e){const t=this.showLoader();this.updateOwner({ownerId:e.id,details:{businessId:this.getSelectedBusiness.id,ownership:""+this.formData.percentage,title:"other"}}).then((()=>{this.$router.push("/kyb/ownersList")})).catch((e=>{this.apiErrorMessage(e)})).finally((()=>{t.close()}))}}}},l=o,c=s(3736),d=(0,c.Z)(l,a,i,!1,null,null,null),h=d.exports},1956:function(e,t,s){var a=s(629);t["Z"]={computed:{...(0,a.Se)("kyb",["getSelectedBusiness"])},methods:{...(0,a.nv)("kyb",["fetchAllOwners","listAllBusiness","updateOwner"]),...(0,a.OI)("kyb",["setSelectedBusiness"])},created(){const e=this.getSelectedBusiness;if(e)this.afterBusiness&&"function"===typeof this.afterBusiness&&this.afterBusiness(e);else{const e=this.showLoader();this.listAllBusiness().then((e=>{if(0!==e.total){const t=e.data;this.setSelectedBusiness(t[0]),this.afterBusiness&&"function"===typeof this.afterBusiness&&setTimeout((()=>{this.afterBusiness(t[0])}),0)}})).catch((e=>{this.apiErrorMessage(e)})).finally((()=>{e.close()}))}}}}}]);
//# sourceMappingURL=4715.1702025943641.js.map