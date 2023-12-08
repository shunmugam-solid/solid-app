"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[7453],{8297:function(t,s,e){e.r(s),e.d(s,{default:function(){return d}});var c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"widgetContainer bg-white addAccount widgetContainer--center"},[e("div",{staticClass:"navigationHeader"},[e("div",{staticClass:"navigationHeader__inner"},[e("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:t.goToPreviousScreen}}),e("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("selectAcc_screenTitle"))+" ")])])]),e("div",{staticClass:"widgetContainer__body"},[e("p",{staticClass:"header-2"},[t._v(" "+t._s(t.$t("selectAcc_addAccType"))+" ")]),e("el-radio-group",{on:{change:function(s){return t.setAccountType(s)}},model:{value:t.selectedAccountType,callback:function(s){t.selectedAccountType=s},expression:"selectedAccountType"}},t._l(t.accountTypeOptions,(function(s){return e("el-radio",{key:s,staticClass:"brand",attrs:{label:s}},[t._v(" "+t._s(s)+" ")])})),1),e("div",{staticClass:"listWithActionsv2 border-on"},[e("p",{staticClass:"header-2"},[t._v(" "+t._s(t.$t("selectAcc_accTitle"))+" ")]),e("ul",{staticStyle:{"margin-bottom":"12px"}},[!0===t.$personalChecking?e("li",{on:{click:t.personalAccountSelection}},[e("div",{staticClass:"details"},[e("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("personal_checking"))+" ")])]),t._m(0)]):t._e()])]),!0!==t.$businessChecking||0===t.getBusinessList.length&&!t.showAddBusiness?t._e():e("div",{staticClass:"listWithActionsv2 border-on"},[e("ul",[t._l(t.getBusinessList,(function(s,c){return e("li",{key:c,on:{click:function(e){return t.selectBusiness(s)}}},[e("div",{staticClass:"details"},[e("p",{staticClass:"label"},[t._v(" "+t._s(s.legalName)+" ")])]),t._m(1,!0)])})),t.showAddBusiness?e("li",{on:{click:t.addBusiness}},[e("div",{staticClass:"details"},[e("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("selectAcc_businessCell_title"))+" ")])]),t._m(2)]):t._e()],2)])],1)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"action"},[e("span",{staticClass:"icon-Arrow-small-right"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"action"},[e("span",{staticClass:"icon-Arrow-small-right"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"action"},[e("span",{staticClass:"icon-Arrow-small-right"})])}],a=e(5368),n=e(629),l={name:"AddAccount",mixins:[a.Z],data(){return{accountTypeOptions:["Cash","Card"],selectedAccountType:"Cash"}},created(){this.fetchBusinessList()},computed:{...(0,n.Se)("kyb",["getBusinessList"]),...(0,n.Se)("account",["getCreateAccountData"]),showAddBusiness(){return!0===this.$businessChecking&&"Cash"===this.selectedAccountType}},methods:{...(0,n.nv)("kyb",["listAllBusiness"]),...(0,n.OI)("account",["updateCreateAccountData","setAddAccountBackPage","setSelectedAccountType"]),fetchBusinessList(){const t=this.showLoader();this.listAllBusiness().catch((t=>{this.apiErrorMessage(t)})).finally((()=>{t.close()}))},selectBusiness(t){if(t.kyb&&"approved"===t.kyb.status){let s=t.id;this.updateCreateAccountData({businessId:s,type:"businessChecking"}),setTimeout((()=>{this.$router.push("/account/setup")}),0)}else"notStarted"===t.kyb.status?this.addBusiness():this.$router.push("/kyb/businessStatus")},personalAccountSelection(){this.updateCreateAccountData({businessId:null,type:"personalChecking"}),setTimeout((()=>{this.$router.push("/account/setup")}),0)},addBusiness(){this.setAddAccountBackPage(null),this.$router.push("/kyb/businessDetails?forceNew=true")},next(){this.getCreateAccountData&&"object"===typeof this.getCreateAccountData&&this.getCreateAccountData.businessId&&this.$router.push("/account/setup")},setAccountType(t){this.setSelectedAccountType(t)}}},u=l,o=e(3736),r=(0,o.Z)(u,c,i,!1,null,null,null),d=r.exports},5368:function(t,s,e){var c=e(629);s["Z"]={computed:{...(0,c.Se)("kyb",["getSelectedBusiness"]),...(0,c.Se)("account",["getSelectedAccount"])},methods:{...(0,c.OI)("account",["setSelectedAccount"])}}}}]);
//# sourceMappingURL=AddAccount.1702025943641.js.map