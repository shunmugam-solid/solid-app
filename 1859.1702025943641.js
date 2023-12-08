(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[1859],{8343:function(t,e,a){"use strict";a.d(e,{Z:function(){return l}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-input"},[a("the-mask",{ref:"accountNumber",staticClass:"el-input__inner",attrs:{mask:["######","#######","########","#########","##########","###########","############","#############","##############","###############","################","#################"],type:"tel",autocomplete:"off",name:"account",masked:!0,value:t.value},nativeOn:{input:function(e){return t.updateInput(e)}}})],1)},r=[],o=a(2982),c={components:{TheMask:o.TheMask},props:{value:{type:String,default:""},autofocus:{type:Boolean,default:!1}},mounted(){this.autofocus&&this.$refs.accountNumber.$el.focus()},methods:{updateInput(t){let e=t.target.value;e?this.$emit("input",e.replace(/\D+/g,"")):this.$emit("input",null)}}},s=c,u=a(3736),i=(0,u.Z)(s,n,r,!1,null,"35f64a9d",null),l=i.exports},8603:function(t,e,a){"use strict";a.d(e,{Z:function(){return l}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-input"},[a("the-mask",{ref:"routeNumber",staticClass:"el-input__inner",attrs:{mask:"#########",type:"tel",autocomplete:"off",name:"route",masked:!0,value:t.value},nativeOn:{input:function(e){return t.updateInput(e)}}})],1)},r=[],o=a(2982),c={components:{TheMask:o.TheMask},props:{value:{type:String,default:""},autofocus:{type:Boolean,default:!1}},mounted(){this.autofocus&&this.$refs.routeNumber.$el.focus()},methods:{updateInput(t){let e=t.target.value;e?this.$emit("input",e.replace(/\D+/g,"")):this.$emit("input",null)}}},s=c,u=a(3736),i=(0,u.Z)(s,n,r,!1,null,"1ce9b77a",null),l=i.exports},1859:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return p}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widgetContainer bg-white contact-account-form"},[a("div",{staticClass:"navigationHeader"},[a("div",{staticClass:"navigationHeader__inner"},[a("span",{staticClass:"icon-Arrow-big-left back-action",on:{click:t.cancel}}),a("p",{staticClass:"title"},[t._v(" "+t._s(t.$t(t.getCreateContactData&&t.getCreateContactData.id?"contact_details_EditTitle":"contact_Details_NavTitle"))+" ")]),a("span",{staticClass:"el-icon-close",on:{click:t.drawerClose}})])]),a("div",{staticClass:"widgetContainer__body"},[a("el-form",{ref:"contactDetail",staticClass:"wise-form",attrs:{model:t.formData,rules:t.formRules}},[a("p",{staticClass:"wise-form__header"},[t._v(" "+t._s(t.getCreateContactData.selectedAccountType)+" "+t._s(t.$t("contact_Account_Title"))+" ")]),a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"accountNumber",label:t.$t("contact_Account_AccNo")}},[a("AccountNumber",{model:{value:t.formData.accountNumber,callback:function(e){t.$set(t.formData,"accountNumber",e)},expression:"formData.accountNumber"}})],1),"ach"===t.getCreateContactData.selectedAccountType?a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"routingNumber",label:t.$t("contact_Account_RoutingNo")}},[a("RouteNumber",{model:{value:t.formData.routingNumber,callback:function(e){t.$set(t.formData,"routingNumber",e)},expression:"formData.routingNumber"}})],1):t._e(),"ach"===t.getCreateContactData.selectedAccountType?a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"accountType",label:t.$t("contact_Account_Type")}},[a("el-select",{staticStyle:{width:"100%"},model:{value:t.formData.accountType,callback:function(e){t.$set(t.formData,"accountType",e)},expression:"formData.accountType"}},[a("el-option",{attrs:{label:t.$t("personalSavings"),value:"personalSavings"}},[t._v(" "+t._s(t.$t("personalSavings"))+" ")]),a("el-option",{attrs:{label:t.$t("personalChecking"),value:"personalChecking"}},[t._v(" "+t._s(t.$t("personalChecking"))+" ")]),a("el-option",{attrs:{label:t.$t("businessSavings"),value:"businessSavings"}},[t._v(" "+t._s(t.$t("businessSavings"))+" ")]),a("el-option",{attrs:{label:t.$t("businessChecking"),value:"businessChecking"}},[t._v(" "+t._s(t.$t("businessChecking"))+" ")])],1)],1):t._e(),"ach"===t.getCreateContactData.selectedAccountType?a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"bankName",label:t.$t("contact_Account_Bank")}},[a("el-input",{model:{value:t.formData.bankName,callback:function(e){t.$set(t.formData,"bankName",e)},expression:"formData.bankName"}})],1):t._e()],1)],1),a("div",{staticClass:"el-drawer__footer"},[a("el-button",{staticClass:"width-100 el-button__brand brand",attrs:{type:"primary",disabled:!t.isFormValid},on:{click:function(e){return t.next()}}},[t._v(" "+t._s(t.$t("done"))+" ")])],1)])},r=[],o=a(629),c=a(6895),s=a(8343),u=a(8603),i={name:"ContactAccountForm",mixins:[c.Z],components:{AccountNumber:s.Z,RouteNumber:u.Z},data(){return{formData:{accountNumber:"",routingNumber:"",accountType:"",bankName:""},formRules:{accountNumber:[{required:!0,message:this.$t("accountNumberRequired"),trigger:"blur"},{pattern:/^\d{6,17}$/,message:this.$t("accountNumberNotValid"),trigger:"blur"}],routingNumber:[{required:!0,message:this.$t("routingNumberRequired"),trigger:"blur"},{pattern:/^\d{9}$/,message:this.$t("routingNumberNotValid"),trigger:"blur"}],accountType:[{required:!0,message:this.$t("accountTypeRequired"),trigger:"blur"}],bankName:[{required:!0,message:this.$t("bankNameRequired"),trigger:"blur"}]}}},created(){this.getCreateContactData?"intrabank"===this.getCreateContactData.selectedAccountType?(this.formRules={accountNumber:[{required:!0,message:this.$t("accountNumberRequired"),trigger:"blur"},{pattern:/^\d{6,17}$/,message:this.$t("accountNumberNotValid"),trigger:"blur"}]},this.formData={accountNumber:""},this.getCreateContactData.intrabank&&(this.formData={accountNumber:this.getCreateContactData.intrabank.accountNumber})):(this.formData={accountNumber:"",routingNumber:"",accountType:"",bankName:""},this.getCreateContactData.ach&&(this.formData={accountNumber:this.getCreateContactData.ach.accountNumber,routingNumber:this.getCreateContactData.ach.routingNumber,accountType:this.getCreateContactData.ach.accountType,bankName:this.getCreateContactData.ach.bankName})):this.$router.replace("/contact/detailForm")},computed:{...(0,o.Se)("contact",["getCreateContactData"]),isFormValid(){return"intrabank"===this.getCreateContactData.selectedAccountType?this.formData.accountNumber&&""!==this.formData.accountNumber&&this.formData.accountNumber.length>=6&&this.formData.accountNumber.length<=17:!!("ach"===this.getCreateContactData.selectedAccountType&&this.formData.accountNumber&&""!==this.formData.accountNumber&&""!==this.formData.routingNumber&&""!==this.formData.accountType&&""!==this.formData.bankName&&""!==this.formData.accountType&&this.formData.accountNumber.length>=6&&this.formData.accountNumber.length<=17&&9===this.formData.routingNumber.length)}},methods:{...(0,o.OI)("contact",["updateCreateContactData","updateSelectedContactData"]),...(0,o.nv)("contact",["createContact","updateContact"]),next(){this.$refs.contactDetail.validate((t=>{if(!t)return;let e="createContact";this.getCreateContactData.id&&(e="updateContact");const{selectedAccountType:a,...n}=this.getCreateContactData,r=this.showLoader();this[e]({...n,accountId:this.getSelectedAccount.id,[a]:this.formData}).then((t=>{this.updateSelectedContactData(t);const{id:e,accountId:a,address:n,ach:r,intrabank:o,firstName:c,email:s,phone:u}=t;this.updateCreateContactData({id:e,accountId:a,address:n,ach:r,intrabank:o,firstName:c,email:s,phone:u}),setTimeout((()=>{this.$router.replace("/contact/accountTypeForm")}),0)})).catch((t=>{this.apiErrorMessage(t)})).finally((()=>{r.close()}))}))},cancel(){this.$router.replace("/contact/accountTypeForm")}}},l=i,m=a(3736),f=(0,m.Z)(l,n,r,!1,null,null,null),p=f.exports},6895:function(t,e,a){"use strict";var n=a(629);e["Z"]={computed:{...(0,n.Se)("kyb",["getSelectedBusiness"]),...(0,n.Se)("account",["getSelectedAccount"])},created(){this.getSelectedAccount||this.goToWelcomeScreen()}}},2982:function(t){(function(e,a){t.exports=a()})(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,a){"use strict";function n(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var r=a(2),o=a(0),c=a.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:c.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var s=t.getElementsByTagName("input");if(1!==s.length)throw new Error("v-mask directive requires 1 input, found "+s.length);t=s[0]}t.oninput=function(e){if(e.isTrusted){var c=t.selectionEnd,s=t.value[c-1];for(t.value=a.i(r.a)(t.value,o.mask,!0,o.tokens);c<t.value.length&&t.value.charAt(c-1)!==s;)c++;t===document.activeElement&&(t.setSelectionRange(c,c),setTimeout((function(){t.setSelectionRange(c,c)}),0)),t.dispatchEvent(n("input"))}};var u=a.i(r.a)(t.value,o.mask,!0,o.tokens);u!==t.value&&(t.value=u,t.dispatchEvent(n("input")))}},function(t,e,a){"use strict";var n=a(6),r=a(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=arguments[3];return Array.isArray(e)?a.i(r.a)(n.a,e,c)(t,e,o,c):a.i(n.a)(t,e,o,c)}},function(t,e,a){"use strict";function n(t){t.component(u.a.name,u.a),t.directive("mask",c.a)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(0),o=a.n(r),c=a(1),s=a(7),u=a.n(s);a.d(e,"TheMask",(function(){return u.a})),a.d(e,"mask",(function(){return c.a})),a.d(e,"tokens",(function(){return o.a})),a.d(e,"version",(function(){return i}));var i="0.11.1";e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),r=a(0),o=a.n(r),c=a(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:n.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=a.i(c.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,a){"use strict";function n(t,e,a){return e=e.sort((function(t,e){return t.length-e.length})),function(n,r){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=0;c<e.length;){var s=e[c];c++;var u=e[c];if(!(u&&t(n,u,!0,a).length>s.length))return t(n,s,o,a)}return""}}e.a=n},function(t,e,a){"use strict";function n(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3];t=t||"",e=e||"";for(var r=0,o=0,c="";r<e.length&&o<t.length;){var s=e[r],u=n[s],i=t[o];u&&!u.escape?(u.pattern.test(i)&&(c+=u.transform?u.transform(i):i,r++),o++):(u&&u.escape&&(r++,s=e[r]),a&&(c+=s),i===s&&o++,r++)}for(var l="";r<e.length&&a;){s=e[r];if(n[s]){l="";break}l+=s,r++}return c+l}e.a=n},function(t,e,a){var n=a(8)(a(4),a(9),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,a,n){var r,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),a&&(s._scopeId=a),n){var u=s.computed||(s.computed={});Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}}))}return{esModule:r,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,a){t.exports=a(3)}])}))}}]);
//# sourceMappingURL=1859.1702025943641.js.map