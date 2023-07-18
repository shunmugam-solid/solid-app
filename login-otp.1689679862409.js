(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[6413],{8412:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return b}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"widgetContainer widgetContainer--center bg-white loginOtp"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[s("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:t.cancel}}),s("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("tfa_NavTitle"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("el-form",{ref:"user",staticClass:"wise-form",attrs:{model:t.user,rules:t.rules},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm()},submit:function(t){t.preventDefault()}}},[s("el-form-item",{attrs:{prop:"otp",label:t.$t("tfa_Title")}},[s("MobileOtp",{attrs:{autofocus:!0},model:{value:t.user.otp,callback:function(e){t.$set(t.user,"otp",e)},expression:"user.otp"}})],1),s("p",{staticClass:"loginOtp__resend-text"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.timer>0,expression:"timer > 0"}],staticClass:"loginOtp__resend-timer"},[t._v("00:"+t._s(1===(""+this.timer).length?"0"+this.timer:this.timer))]),s("span",{staticClass:"loginOtp__resend-btn",class:{"is-disabled":t.timer>0||t.isDisabled},on:{click:t.resendOtp}},[t._v(t._s(t.$t("tfa_Resend")))])])],1),s("div",{staticClass:"widgetContainer__footer--fixed border-0"},[s("el-button",{staticClass:"el-button__brand brand",attrs:{"data-testid":"submit",type:"primary",disabled:t.isFormInValid||t.isDisabled},on:{click:function(e){return t.submitForm()}}},[t._v(" "+t._s(t.$t("next"))+" ")])],1)],1)])},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"el-input"},[s("the-mask",{ref:"otpNumber",staticClass:"el-input__inner",attrs:{mask:"######",type:"tel",autocomplete:"off",name:"otp",masked:!0,value:t.value},nativeOn:{input:function(e){return t.updateInput(e)}}})],1)},a=[],o=s(2982),u={components:{TheMask:o.TheMask},props:{value:{type:String,default:""},autofocus:{type:Boolean,default:!1}},mounted(){this.autofocus&&this.$refs.otpNumber.$el.focus()},methods:{updateInput(t){let e=t.target.value;e?this.$emit("input",e.replace(/\D+/g,"")):this.$emit("input",null)}}},l=u,c=s(3736),p=(0,c.Z)(l,r,a,!1,null,"1f5c6868",null),d=p.exports,f=s(629),h=s(2424),m={name:"Login",mixins:[h.Z],components:{MobileOtp:d},data(){return{timer:60,isDisabled:!1,user:{otp:""},rules:{otp:"required"}}},computed:{...(0,f.Se)("user",["getUserDetails"]),isFormInValid(){return!this.user.otp||6!=this.user.otp.length}},created(){this.timerStart();const t=this.getUserDetails;t&&t.phone||this.$router.push("/user/login")},methods:{...(0,f.nv)("user",["verifyOtp","getPerson","login"]),...(0,f.OI)("user",["updateUserOtp","setUserDetails"]),async loginWithRecaptcha(){this.isDisabled=!0,await this.$recaptchaLoaded();const t=await this.$recaptcha("login"),e=this.getUserDetails,s=this.showLoader();this.login({mobileNumber:e.phone,recaptchaToken:t}).then((()=>{this.lastResendTime=new Date,this.$notify({title:"Success",message:this.$t("tfa_ResendSuccess"),type:"success"})})).catch((t=>{this.apiErrorMessage(t)})).finally((()=>{this.isDisabled=!1,s.close(),this.timerStart(),this.isDisabled=!1}))},submitForm(){if(this.isFormInValid)return;this.isDisabled=!0;const t=this.showLoader(),e={otp:this.user.otp};this.verifyOtp(e).catch((t=>{this.apiErrorMessage(t.description),"EC_Identity_ERROR"===t.code&&(this.user.otp=""),console.log(t)})).finally((()=>{this.isDisabled=!1,t.close()}))},resendOtp(){if(0===this.timer){const t=this.getUserDetails,e=this.showLoader();t&&t.phone&&this.login({mobileNumber:t.phone}).then((()=>{this.user.otp="",this.lastResendTime=new Date,this.$notify({title:"Success",message:this.$t("tfa_ResendSuccess"),type:"success"})})).catch((t=>{this.apiErrorMessage(t.description)})).finally((()=>{this.isDisabled=!1,e.close(),this.timerStart(),this.isDisabled=!1}))}},cancel(){this.setUserDetails({phone:null,idNumberLast4Required:null,otp:null}),setTimeout((()=>{this.$router.push("/user/login")}),0)},timerStart(){this.timer=60;let t=setInterval((()=>{this.timer=this.timer-1,0===this.timer&&clearInterval(t)}),1e3)}},destroyed(){const t=this.$recaptchaInstance;t&&t.hideBadge()}},v=m,g=(0,c.Z)(v,n,i,!1,null,null,null),b=g.exports},2982:function(t){(function(e,s){t.exports=s()})(0,(function(){return function(t){function e(n){if(s[n])return s[n].exports;var i=s[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var s={};return e.m=t,e.c=s,e.i=function(t){return t},e.d=function(t,s,n){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,s){"use strict";function n(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var i=s(2),r=s(0),a=s.n(r);e.a=function(t,e){var r=e.value;if((Array.isArray(r)||"string"==typeof r)&&(r={mask:r,tokens:a.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var o=t.getElementsByTagName("input");if(1!==o.length)throw new Error("v-mask directive requires 1 input, found "+o.length);t=o[0]}t.oninput=function(e){if(e.isTrusted){var a=t.selectionEnd,o=t.value[a-1];for(t.value=s.i(i.a)(t.value,r.mask,!0,r.tokens);a<t.value.length&&t.value.charAt(a-1)!==o;)a++;t===document.activeElement&&(t.setSelectionRange(a,a),setTimeout((function(){t.setSelectionRange(a,a)}),0)),t.dispatchEvent(n("input"))}};var u=s.i(i.a)(t.value,r.mask,!0,r.tokens);u!==t.value&&(t.value=u,t.dispatchEvent(n("input")))}},function(t,e,s){"use strict";var n=s(6),i=s(5);e.a=function(t,e){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3];return Array.isArray(e)?s.i(i.a)(n.a,e,a)(t,e,r,a):s.i(n.a)(t,e,r,a)}},function(t,e,s){"use strict";function n(t){t.component(u.a.name,u.a),t.directive("mask",a.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=s(0),r=s.n(i),a=s(1),o=s(7),u=s.n(o);s.d(e,"TheMask",(function(){return u.a})),s.d(e,"mask",(function(){return a.a})),s.d(e,"tokens",(function(){return r.a})),s.d(e,"version",(function(){return l}));var l="0.11.1";e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(1),i=s(0),r=s.n(i),a=s(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return r.a}}},directives:{mask:n.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=s.i(a.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,s){"use strict";function n(t,e,s){return e=e.sort((function(t,e){return t.length-e.length})),function(n,i){for(var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;a<e.length;){var o=e[a];a++;var u=e[a];if(!(u&&t(n,u,!0,s).length>o.length))return t(n,o,r,s)}return""}}e.a=n},function(t,e,s){"use strict";function n(t,e){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3];t=t||"",e=e||"";for(var i=0,r=0,a="";i<e.length&&r<t.length;){var o=e[i],u=n[o],l=t[r];u&&!u.escape?(u.pattern.test(l)&&(a+=u.transform?u.transform(l):l,i++),r++):(u&&u.escape&&(i++,o=e[i]),s&&(a+=o),l===o&&r++,i++)}for(var c="";i<e.length&&s;){o=e[i];if(n[o]){c="";break}c+=o,i++}return a+c}e.a=n},function(t,e,s){var n=s(8)(s(4),s(9),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,s,n){var i,r=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,r=t.default);var o="function"==typeof r?r.options:r;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),s&&(o._scopeId=s),n){var u=o.computed||(o.computed={});Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}}))}return{esModule:i,exports:r,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,s){t.exports=s(3)}])}))}}]);
//# sourceMappingURL=login-otp.1689679862409.js.map