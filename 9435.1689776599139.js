(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[9435],{1548:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"el-input"},[s("the-mask",{ref:"ssnNumber",staticClass:"el-input__inner",attrs:{mask:e.mask,autocomplete:"off",name:"ssn",masked:!0,value:e.value},nativeOn:{input:function(t){return e.updateInput(t)}}})],1)},r=[],i=s(9896),a=s(2982),o={name:"SSNInput",components:{TheMask:a.TheMask},props:{value:{type:String,default:""},idType:{type:String,default:"ssn"},autofocus:{type:Boolean,default:!1},isLast4:{type:Boolean,default:!1},country:{type:String,default:"US"}},mounted(){this.autofocus&&this.$refs.ssnNumber.$el.focus()},computed:{selectedCountry(){const e=(0,i.oE)();return e.find((e=>e.code===this.country))},selectedDocumentType(){const e=(0,i.Qj)(),t=this.idType||"ssn";return e.find((e=>e.type===t))},mask(){const e=this.selectedDocumentType;return this.isLast4?"XXXX":e.full}},methods:{updateInput(e){let t=e.target.value;if(t){const e=Array.isArray(this.mask)?this.mask.map((e=>e.length)):[this.mask.length],s={rawValue:t,value:t.replace(/[^0-9a-zA-Z]/g,""),isValid:e.includes(t.length),country:this.selectedCountry,documentType:this.selectedDocumentType};this.$emit("input",s)}else this.$emit("input",null)}}},u=o,l=s(3736),c=(0,l.Z)(u,n,r,!1,null,"5d46ea55",null),d=c.exports},9435:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return _}});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"widgetContainer widgetContainer--scrollable widgetContainer--center bg-white personDetails"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[s("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:e.goToPreviousScreen}}),s("p",{staticClass:"title"},[e._v(" "+e._s(e.$t("kyc_NavTitle"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("el-form",{ref:"user",staticClass:"wise-form",attrs:{model:e.user,rules:e.rules.user},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()},submit:function(e){e.preventDefault()}}},[s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"firstName",label:e.$t("fName")}},[s("el-input",{model:{value:e.user.firstName,callback:function(t){e.$set(e.user,"firstName",t)},expression:"user.firstName"}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"lastName",label:e.$t("lName")}},[s("el-input",{model:{value:e.user.lastName,callback:function(t){e.$set(e.user,"lastName",t)},expression:"user.lastName"}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"phone",label:e.$t("phone")}},[s("MobileInput",{attrs:{value:e.user.phone,"show-country-code-selector":!0,autofocus:!1},on:{input:e.mobileNumberUpdate}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"email",label:e.$t("email")}},[s("el-input",{attrs:{type:"email"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),s("el-form-item",{staticClass:"is-no-asterisk date-of-birth",attrs:{prop:"dateOfBirth",label:e.$t("dob")}},[s("el-date-picker",{attrs:{format:"MM-dd-yyyy","picker-options":e.datePickerOptions,"default-value":e.minDate,"value-format":"yyyy-MM-dd",type:"date"},model:{value:e.user.dateOfBirth,callback:function(t){e.$set(e.user,"dateOfBirth",t)},expression:"user.dateOfBirth"}})],1),s("el-form-item",{staticClass:"is-no-asterisk document-type",attrs:{label:e.$t("Document Type")}},[s("el-select",{model:{value:e.user.idType,callback:function(t){e.$set(e.user,"idType",t)},expression:"user.idType"}},e._l(e.documentTypes,(function(t){return s("el-option",{key:t.type,attrs:{value:t.type,label:e.$t(t.type)}})})),1)],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"idNumber",label:e.$t(e.user.idType)}},[s("SSNInput",{attrs:{"id-type":e.user.idType,country:e.country,value:e.user.idNumber,autofocus:!1},on:{input:e.ssnChange}})],1)],1),s("div",{staticClass:"widgetContainer__footer--fixed"},[s("el-button",{staticClass:"el-button__brand brand",attrs:{type:"primary",disabled:e.isFormValid},on:{click:e.submitForm}},[e._v(" "+e._s(e.$t("kyc_NavRightButton_Title"))+" ")])],1)],1)])},r=[],i=s(629),a=s(3840),o=s(1956),u=s(1548),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:"el-input "+(e.showCountryCodeSelector?"with-country-code":"")},[s("the-mask",{ref:"mobileNumber",staticClass:"el-input__inner mobile_number",attrs:{mask:e.mask,type:"tel",autocomplete:"off",name:"mobile_number",masked:!0,value:e.phone,placeholder:e.placeholder},nativeOn:{input:function(t){return e.updateInput(t)}}}),e.showCountryCodeSelector?s("el-select",{staticClass:"country-code-selector",attrs:{size:"mini"},model:{value:e.selectedCountryCode,callback:function(t){e.selectedCountryCode=t},expression:"selectedCountryCode"}},e._l(e.supportedCountries,(function(t){return s("el-option",{key:t.dial_code,attrs:{value:t.dial_code,label:t.dial_code}},[s("span",{staticClass:"flag"},[s("img",{attrs:{src:e.flag(t),alt:t.name}})]),s("span",{staticClass:"select-country-code"},[e._v(" "+e._s(t.dial_code)+" ")])])})),1):e._e()],1)},c=[],d=s(9896),p=s(2982),f={components:{TheMask:p.TheMask},props:{value:{type:String,default:""},autofocus:{type:Boolean,default:!1},showCountryCodeSelector:{type:Boolean,default:!1}},computed:{supportedCountries(){return(0,d.oE)()},selectedCountry(){const e=this.supportedCountries.find((e=>e.dial_code===this.selectedCountryCode));return e},mask(){const e=this.supportedCountries.find((e=>e.dial_code===this.selectedCountryCode));return this.showCountryCodeSelector?e.mask:e.dial_code+" "+e.mask},placeholder(){const e=this.mask;let t=0;const s=e.split("").map((e=>"#"===e?(t++,t>=10?t%10:t):e)).join("");return s}},data(){return{selectedCountryCode:"+1",phone:""}},mounted(){this.autofocus&&this.$refs.mobileNumber.$el.focus()},methods:{updateInput(e){let t=e.target.value;t?this.showCountryCodeSelector?this.$emit("input",{value:this.selectedCountryCode+t.replace(/\D+/g,""),number:t,dial_code:this.selectedCountryCode,selectedCountry:this.selectedCountry,isValid:this.selectedCountry.mask.length===t.length}):this.$emit("input","+"+t.replace(/\D+/g,"")):this.$emit("input",null)},flag(e){const t=(0,d.dU)("VUE_APP_ASSETS");return`${t}/flags/${e.code}.png`}},watch:{value:{handler:function(e){if(this.showCountryCodeSelector&&""!==e&&null!==e){const{dial_code:t}=(0,d.em)(e);this.selectedCountryCode=t,this.phone=e.replace(t,"")}else this.phone=e},immediate:!0}}},m=f,h=s(3736),y=(0,h.Z)(m,l,c,!1,null,null,null),v=y.exports,g=s(1394),k={name:"OwnerDetails",components:{SSNInput:u.Z,MobileInput:v},mixins:[o.Z],data(){return{datePickerOptions:{disabledDate(e){const t=new Date;return t.setFullYear(t.getFullYear()-18),e>t}},user:{firstName:"",lastName:"",email:"",dateOfBirth:"",idNumber:"",idType:"ssn",phone:""},isPhoneNumberValid:!1,isSsnValid:!1,rules:{user:{firstName:(0,g.x)("First Name",!0),lastName:(0,g.x)("Last Name",!0),phone:[{required:!0,message:"Mobile Number is required",trigger:"blur"}],email:[{required:!0,message:"Email is required",trigger:"blur"},{type:"email",message:"Please provide a valid email address",trigger:"blur"}],dateOfBirth:[{required:!0,message:"Date of birth is required"}],idNumber:[{required:!0,message:"Tax ID is required"}]}}}},created(){this.getCreatePageOwnersDetail&&this.getCreatePageOwnersDetail.person&&(this.user=this.getCreatePageOwnersDetail.person,this.user.idType=this.user.idType||"ssn",this.user.phone&&(this.isPhoneNumberValid=!0),this.user.idNumber&&(this.isSsnValid=!0))},computed:{...(0,i.Se)("kyb",["getCreatePageOwnersDetail"]),...(0,i.Se)("user",["getPersonDetails"]),minDate(){const e=new Date;e.setFullYear(e.getFullYear()-18);let t=e.getMonth()+1;t=1===(""+t).length?"0"+t:t;let s=e.getDate();return s=1===(""+s).length?"0"+s:s,e.getFullYear()+"-"+t+"-"+s},country(){const e=(0,d.em)(this.getPersonDetails.phone);return e&&e.code?e.code:"US"},selectedCountry(){const e=(0,d.oE)();return e.find((e=>e.code===this.country))},documentTypes(){return(0,d.Qj)()},isFormValid(){return!(this.user.firstName&&this.user.lastName&&this.user.email&&this.user.dateOfBirth&&this.user.idNumber&&this.isSsnValid)}},methods:{...(0,i.OI)("kyb",["setCreatePageOwnerDetails"]),ssnChange(e){e&&(this.isSsnValid=e.isValid,this.user.idNumber=e.value)},mobileNumberUpdate(e){if(e){const{value:t,isValid:s}=e;this.user.phone=t,this.isPhoneNumberValid=s}},submitForm(){this.$refs.user.validate((e=>{if(!e)return;const t=this.user;"string"!==typeof t.dateOfBirth&&(t.dateOfBirth=(0,a.Z)(t.dateOfBirth,"yyyy-MM-dd")),this.setCreatePageOwnerDetails({businessId:this.getSelectedBusiness.id,person:t}),setTimeout((()=>{this.$router.push("/kyb/ownerAddress")}),0)}))}}},b=k,C=(0,h.Z)(b,n,r,!1,null,null,null),_=C.exports},1956:function(e,t,s){"use strict";var n=s(629);t["Z"]={computed:{...(0,n.Se)("kyb",["getSelectedBusiness"])},methods:{...(0,n.nv)("kyb",["fetchAllOwners","listAllBusiness","updateOwner"]),...(0,n.OI)("kyb",["setSelectedBusiness"])},created(){const e=this.getSelectedBusiness;if(e)this.afterBusiness&&"function"===typeof this.afterBusiness&&this.afterBusiness(e);else{const e=this.showLoader();this.listAllBusiness().then((e=>{if(0!==e.total){const t=e.data;this.setSelectedBusiness(t[0]),this.afterBusiness&&"function"===typeof this.afterBusiness&&setTimeout((()=>{this.afterBusiness(t[0])}),0)}})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{e.close()}))}}}},1394:function(e,t,s){"use strict";s.d(t,{x:function(){return n}});const n=(e,t=!0)=>{const s=[];return t&&s.push({required:!0,message:`${e||"This field"} is required`,trigger:"blur"}),s.push({pattern:/^[a-zA-Z]([a-zA-Z\s]?)+$/,message:"special characters are not allowed",trigger:"blur"}),s}},2982:function(e){(function(t,s){e.exports=s()})(0,(function(){return function(e){function t(n){if(s[n])return s[n].exports;var r=s[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var s={};return t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,n){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=10)}([function(e,t){e.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(e){return e.toLocaleLowerCase()}},"!":{escape:!0}}},function(e,t,s){"use strict";function n(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var r=s(2),i=s(0),a=s.n(i);t.a=function(e,t){var i=t.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:a.a}),"INPUT"!==e.tagName.toLocaleUpperCase()){var o=e.getElementsByTagName("input");if(1!==o.length)throw new Error("v-mask directive requires 1 input, found "+o.length);e=o[0]}e.oninput=function(t){if(t.isTrusted){var a=e.selectionEnd,o=e.value[a-1];for(e.value=s.i(r.a)(e.value,i.mask,!0,i.tokens);a<e.value.length&&e.value.charAt(a-1)!==o;)a++;e===document.activeElement&&(e.setSelectionRange(a,a),setTimeout((function(){e.setSelectionRange(a,a)}),0)),e.dispatchEvent(n("input"))}};var u=s.i(r.a)(e.value,i.mask,!0,i.tokens);u!==e.value&&(e.value=u,e.dispatchEvent(n("input")))}},function(e,t,s){"use strict";var n=s(6),r=s(5);t.a=function(e,t){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments[3];return Array.isArray(t)?s.i(r.a)(n.a,t,a)(e,t,i,a):s.i(n.a)(e,t,i,a)}},function(e,t,s){"use strict";function n(e){e.component(u.a.name,u.a),e.directive("mask",a.a)}Object.defineProperty(t,"__esModule",{value:!0});var r=s(0),i=s.n(r),a=s(1),o=s(7),u=s.n(o);s.d(t,"TheMask",(function(){return u.a})),s.d(t,"mask",(function(){return a.a})),s.d(t,"tokens",(function(){return i.a})),s.d(t,"version",(function(){return l}));var l="0.11.1";t.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(1),r=s(0),i=s.n(r),a=s(2);t.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return i.a}}},directives:{mask:n.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(e){e!==this.lastValue&&(this.display=e)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(e){e.isTrusted||this.refresh(e.target.value)},refresh:function(e){this.display=e;e=s.i(a.a)(e,this.mask,this.masked,this.tokens);e!==this.lastValue&&(this.lastValue=e,this.$emit("input",e))}}}},function(e,t,s){"use strict";function n(e,t,s){return t=t.sort((function(e,t){return e.length-t.length})),function(n,r){for(var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=0;a<t.length;){var o=t[a];a++;var u=t[a];if(!(u&&e(n,u,!0,s).length>o.length))return e(n,o,i,s)}return""}}t.a=n},function(e,t,s){"use strict";function n(e,t){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3];e=e||"",t=t||"";for(var r=0,i=0,a="";r<t.length&&i<e.length;){var o=t[r],u=n[o],l=e[i];u&&!u.escape?(u.pattern.test(l)&&(a+=u.transform?u.transform(l):l,r++),i++):(u&&u.escape&&(r++,o=t[r]),s&&(a+=o),l===o&&i++,r++)}for(var c="";r<t.length&&s;){o=t[r];if(n[o]){c="";break}c+=o,r++}return a+c}t.a=n},function(e,t,s){var n=s(8)(s(4),s(9),null,null);e.exports=n.exports},function(e,t){e.exports=function(e,t,s,n){var r,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,i=e.default);var o="function"==typeof i?i.options:i;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),s&&(o._scopeId=s),n){var u=o.computed||(o.computed={});Object.keys(n).forEach((function(e){var t=n[e];u[e]=function(){return t}}))}return{esModule:r,exports:i,options:o}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"mask",rawName:"v-mask",value:e.config,expression:"config"}],attrs:{type:"text"},domProps:{value:e.display},on:{input:e.onInput}})},staticRenderFns:[]}},function(e,t,s){e.exports=s(3)}])}))}}]);
//# sourceMappingURL=9435.1689776599139.js.map