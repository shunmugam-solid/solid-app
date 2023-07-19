(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[1358],{1548:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"el-input"},[n("the-mask",{ref:"ssnNumber",staticClass:"el-input__inner",attrs:{mask:t.mask,autocomplete:"off",name:"ssn",masked:!0,value:t.value},nativeOn:{input:function(e){return t.updateInput(e)}}})],1)},r=[],i=n(9896),a=n(2982),o={name:"SSNInput",components:{TheMask:a.TheMask},props:{value:{type:String,default:""},idType:{type:String,default:"ssn"},autofocus:{type:Boolean,default:!1},isLast4:{type:Boolean,default:!1},country:{type:String,default:"US"}},mounted(){this.autofocus&&this.$refs.ssnNumber.$el.focus()},computed:{selectedCountry(){const t=(0,i.oE)();return t.find((t=>t.code===this.country))},selectedDocumentType(){const t=(0,i.Qj)(),e=this.idType||"ssn";return t.find((t=>t.type===e))},mask(){const t=this.selectedDocumentType;return this.isLast4?"XXXX":t.full}},methods:{updateInput(t){let e=t.target.value;if(e){const t=Array.isArray(this.mask)?this.mask.map((t=>t.length)):[this.mask.length],n={rawValue:e,value:e.replace(/[^0-9a-zA-Z]/g,""),isValid:t.includes(e.length),country:this.selectedCountry,documentType:this.selectedDocumentType};this.$emit("input",n)}else this.$emit("input",null)}}},u=o,c=n(3736),l=(0,c.Z)(u,s,r,!1,null,"5d46ea55",null),f=l.exports},2017:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"widgetContainer widgetContainer--center widgetContainer--scrollable bg-white login"},[n("div",{staticClass:"navigationHeader"},[n("div",{staticClass:"navigationHeader__inner"},[n("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("ssn_NavTitle"))+" ")])])]),n("div",{staticClass:"widgetContainer__body"},[n("el-form",{ref:"user",staticClass:"wise-form",attrs:{model:t.user,rules:t.rules},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm()},submit:function(t){t.preventDefault()}}},[n("el-form-item",{attrs:{prop:"otp",label:t.$t("ssn_Title")}},[n("SSNInput",{attrs:{"is-last4":!0,autofocus:!0,country:t.countryCode},on:{input:t.ssnChange}})],1),n("p",{staticClass:"wise-form__info"},[t._v(" "+t._s(t.$t("ssn_Desc"))+" ")])],1),n("div",{staticClass:"widgetContainer__footer--fixed"},[n("el-button",{staticClass:"el-button__brand brand",attrs:{type:"primary",disabled:t.isDisabled},on:{click:function(e){return t.submitForm()}}},[t._v(" "+t._s(t.$t("ssn_NavRightButton_Title"))+" ")])],1)],1)])},r=[],i=n(1548),a=n(629),o=n(2424),u=n(9896),c={name:"Login",mixins:[o.Z],components:{SSNInput:i.Z},computed:{...(0,a.Se)("user",["getUserDetails","getUserAuthToken"]),isDisabled(){return!this.user.ssn||4!=this.user.ssn.length},selectedCountry(){const t=(0,u.oE)();return t.find((t=>t.code===this.countryCode))}},data(){return{user:{ssn:""},rules:{ssn:"required"},countryCode:"US"}},created(){const t=this.getUserDetails;if(t&&t.phone){const e=(0,u.em)(t.phone);e&&e.code&&(this.countryCode=e.code)}else this.goToWelcomeScreen()},methods:{...(0,a.nv)("user",["verifyOtp","getPerson"]),submitForm(){if(this.isDisabled)return;const t=this.getUserDetails;if(t&&t.phone){const t=this.showLoader(),{accessToken:e}=this.getUserAuthToken;console.log("accessToken",e),this.verify(e,this.user.ssn).catch((t=>{"EC_NEW_DEVICE_LOGIN_FAILED"===t.code?this.apiErrorMessage(t.message):this.$router.push("/welcome")})).finally((()=>{t.close()}))}},ssnChange(t){this.user.ssn=t.value}}},l=c,f=n(3736),d=(0,f.Z)(l,s,r,!1,null,null,null),p=d.exports},2982:function(t){(function(e,n){t.exports=n()})(0,(function(){return function(t){function e(s){if(n[s])return n[s].exports;var r=n[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,s){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function s(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var r=n(2),i=n(0),a=n.n(i);e.a=function(t,e){var i=e.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:a.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var o=t.getElementsByTagName("input");if(1!==o.length)throw new Error("v-mask directive requires 1 input, found "+o.length);t=o[0]}t.oninput=function(e){if(e.isTrusted){var a=t.selectionEnd,o=t.value[a-1];for(t.value=n.i(r.a)(t.value,i.mask,!0,i.tokens);a<t.value.length&&t.value.charAt(a-1)!==o;)a++;t===document.activeElement&&(t.setSelectionRange(a,a),setTimeout((function(){t.setSelectionRange(a,a)}),0)),t.dispatchEvent(s("input"))}};var u=n.i(r.a)(t.value,i.mask,!0,i.tokens);u!==t.value&&(t.value=u,t.dispatchEvent(s("input")))}},function(t,e,n){"use strict";var s=n(6),r=n(5);e.a=function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3];return Array.isArray(e)?n.i(r.a)(s.a,e,a)(t,e,i,a):n.i(s.a)(t,e,i,a)}},function(t,e,n){"use strict";function s(t){t.component(u.a.name,u.a),t.directive("mask",a.a)}Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),i=n.n(r),a=n(1),o=n(7),u=n.n(o);n.d(e,"TheMask",(function(){return u.a})),n.d(e,"mask",(function(){return a.a})),n.d(e,"tokens",(function(){return i.a})),n.d(e,"version",(function(){return c}));var c="0.11.1";e.default=s,"undefined"!=typeof window&&window.Vue&&window.Vue.use(s)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),r=n(0),i=n.n(r),a=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return i.a}}},directives:{mask:s.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=n.i(a.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function s(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(s,r){for(var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;a<e.length;){var o=e[a];a++;var u=e[a];if(!(u&&t(s,u,!0,n).length>o.length))return t(s,o,i,n)}return""}}e.a=s},function(t,e,n){"use strict";function s(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments[3];t=t||"",e=e||"";for(var r=0,i=0,a="";r<e.length&&i<t.length;){var o=e[r],u=s[o],c=t[i];u&&!u.escape?(u.pattern.test(c)&&(a+=u.transform?u.transform(c):c,r++),i++):(u&&u.escape&&(r++,o=e[r]),n&&(a+=o),c===o&&i++,r++)}for(var l="";r<e.length&&n;){o=e[r];if(s[o]){l="";break}l+=o,r++}return a+l}e.a=s},function(t,e,n){var s=n(8)(n(4),n(9),null,null);t.exports=s.exports},function(t,e){t.exports=function(t,e,n,s){var r,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,i=t.default);var o="function"==typeof i?i.options:i;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),s){var u=o.computed||(o.computed={});Object.keys(s).forEach((function(t){var e=s[t];u[t]=function(){return e}}))}return{esModule:r,exports:i,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])}))}}]);
//# sourceMappingURL=login-ssn.1689776599139.js.map