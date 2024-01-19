"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[4116],{1e3:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"widgetContainer widgetContainer--center widgetContainer--scrollable businessDetails"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[s("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:e.goToPreviousScreen}}),s("p",{staticClass:"title"},[e._v(" "+e._s(e.$t("kyb_address_NavTitle"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("el-form",{ref:"personAddress",staticClass:"wise-form",attrs:{model:e.formData,rules:e.formRules}},[s("div",{staticClass:"el-input--full-width el-input"},[s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.line1",rules:e.formRules.line1,label:e.$t("address_1")}},[s("el-input",{staticStyle:{display:"none"}}),s("el-input",{staticStyle:{display:"none"},model:{value:e.formData.address.line1,callback:function(t){e.$set(e.formData.address,"line1",t)},expression:"formData.address.line1"}}),s("div",{staticClass:"el-input"},[s("gmap-autocomplete",{staticClass:"el-input__inner",attrs:{placeholder:e.$t("address_1"),autocomplete:"disabled",value:e.formData.address.line1,options:{componentRestrictions:{country:e.country}},"select-first-on-enter":!0},on:{place_changed:function(t){return e.updateAddress(t)}},nativeOn:{change:function(t){e.formData.address.line1=t.target.value}}})],1)],1)],1),s("el-form-item",{attrs:{prop:"address.line2",label:e.$t("address_2")}},[s("el-input",{attrs:{placeholder:e.$t("address_2")},model:{value:e.formData.address.line2,callback:function(t){e.$set(e.formData.address,"line2",t)},expression:"formData.address.line2"}})],1),s("div",{staticClass:"wise-form__inline"},[s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.city",rules:e.formRules.city,label:e.$t("address_City")}},[s("el-input",{staticStyle:{flex:"2"},attrs:{placeholder:e.$t("address_City")},model:{value:e.formData.address.city,callback:function(t){e.$set(e.formData.address,"city",t)},expression:"formData.address.city"}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.country",rules:e.formRules.state,label:e.$t("address_State")}},[s("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_State")},model:{value:e.formData.address.state,callback:function(t){e.$set(e.formData.address,"state",t)},expression:"formData.address.state"}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.postalCode",rules:e.formRules.postalCode,label:e.$t("address_Zipcode")}},[s("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_Zipcode")},model:{value:e.formData.address.postalCode,callback:function(t){e.$set(e.formData.address,"postalCode",t)},expression:"formData.address.postalCode"}})],1)],1)],1),s("div",{staticClass:"widgetContainer__footer--fixed"},[s("el-button",{staticClass:"el-button__brand brand",attrs:{type:"primary",disabled:e.isFormValid},on:{click:function(t){return e.next()}}},[e._v(" "+e._s(e.$t("kyb_NavRightButton_Title"))+" ")])],1)],1)])},n=[],o=s(7041),l=s(629),i=s(6265),r=s(9896),u={name:"BusinessAddress",mixins:[i.Z],data(){return{formData:{address:{line1:null,line2:null,city:null,postalCode:null,country:"US",addressType:"mailing",state:null}},formRules:{line1:[{required:!0,message:"Address 1 is required"}],city:[{required:!1}],state:[{required:!1}],postalCode:[{required:!0,message:"Zip Code is required"}]}}},computed:{...(0,l.Se)("user",["getPersonDetails"]),...(0,l.Se)("kyb",["getSelectedBusiness"]),isFormValid(){let e="";e=!this.formRules.city[0].required||this.formData.address.city;let t="";return t=!this.formRules.city[0].required||this.formData.address.state,!(this.formData.address.line1&&e&&t&&this.formData.address.postalCode)},country(){const e=this.getPersonDetails,t=(0,r.em)(e.phone);return t&&t.code?t.code:"US"}},created(){const e=this.getSelectedBusiness;if(e&&e.id){const t=this.country;if(this.setCityStateRequired(t),e.address){const{line1:t,line2:s,city:a,postalCode:n,state:o}=e.address;this.formData.address={line1:t,line2:s,city:a,postalCode:n,country:"US",addressType:"legal",state:o}}}else{const e=this.showLoader();this.listAllBusiness().then((e=>{if(0!==e.total){const t=e.data;this.setSelectedBusiness(t[0])}})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{e.close()}))}},methods:{...(0,l.nv)("kyb",["updateBusiness","listAllBusiness","submitKyb"]),...(0,l.OI)("kyb",["setSelectedBusiness"]),setCityStateRequired(e){"US"===e&&(this.formRules.city=[{required:!0,message:"City is required"}],this.formRules.state=[{required:!0,message:"State is required"}])},updateAddress(e){const t=(0,o.A)(e);this.formData.address=t},next(){this.$refs.personAddress.validate((e=>{if(!e)return;const t={...this.getSelectedBusiness},{id:s,legalName:a,entityType:n,dba:o,idNumber:l,idType:i}=t,{line1:r,line2:u,city:c,postalCode:d,state:m}=this.formData.address,p=this.country,$={businessId:s,business:{legalName:a,entityType:n,dba:o,idNumber:l,idType:i,address:{line1:r,line2:u,city:c,postalCode:d,country:p,addressType:"legal",state:m}}},f=this.showLoader();this.updateBusiness($).then((()=>{setTimeout((()=>{if(["soleProprietor","singleMemberLLC"].includes(this.getSelectedBusiness.entityType)){const e=this.showLoader();this.submitKyb(s).then((()=>{this.$router.push("/kyb/businessStatus")})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{e.close()}))}else this.$router.push("/kyb/ownership")}),0)})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{f.close()}))}))}},watch:{country:function(e){this.setCityStateRequired(e)}}},c=u,d=s(3736),m=(0,d.Z)(c,a,n,!1,null,null,null),p=m.exports},8983:function(e,t,s){s.r(t),s.d(t,{default:function(){return b}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"widgetContainer widgetContainer--center widgetContainer--scrollable businessDetails"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[!0===e.$businessChecking&&!0===e.$personalChecking?s("span",{staticClass:"icon-Arrow-big-left cancel",on:{click:e.back}}):s("span",[e._v(" ")]),s("p",{staticClass:"title"},[e._v(" "+e._s(e.$t("kybEtv_NavTitle"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("el-form",{ref:"businessForm",staticClass:"wise-form",attrs:{model:e.business,rules:e.formRules},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()},submit:function(e){e.preventDefault()}}},[s("el-row",{attrs:{direction:"column",gutter:12}},e._l(e.fields,(function(t,a){return s("div",{key:"group-"+t.groupName,style:{paddingTop:0!==a?"18px":"0",paddingBottom:"18px"}},[s("el-col",{attrs:{span:24}},[s("span",{staticClass:"groupName-label"},[e._v(e._s(t.groupName))])]),s("el-col",{attrs:{span:24}},[s("el-row",{attrs:{direction:"column",gutter:28}},e._l(t.fields,(function(a){return s("div",{key:"field-"+a.name},[s("el-col",{attrs:{span:24}},[s("etv-input",{attrs:{"default-value":e.getDefaultValue(t.key,a.key),name:a.name,"key-name":"etvValue."+t.key+"."+a.key,options:e.fieldOptionsMap[a.key]},on:{change:function(s){var n=s.value,o=s.field;return e.handleInputChange({value:n,field:o,groupKey:t.key,fieldKey:a.key})}}})],1)],1)})),0)],1)],1)})),0)],1),s("div",{staticClass:"widgetContainer__footer--fixed"},[s("el-button",{staticClass:"el-button__brand brand",attrs:{type:"primary",disabled:!e.isFormValid},on:{click:function(t){return e.submitForm()}}},[e._v(" "+e._s(e.$t("kyb_NavRightButton_Title"))+" ")])],1)],1)])},n=[],o=s(629),l=s(6265),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("el-row",{staticClass:"label-row",attrs:{gutter:20,type:"flex",justify:"space-between"}},[s("el-col",{attrs:{span:16}},[s("span",{staticClass:"el-form-item__label"},[e._v(e._s(e.name))])]),s("el-col",{attrs:{span:8}},[s("span",{staticClass:"el-form-item__label"},[e._v("Count:")])])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:16}},[s("el-form-item",{attrs:{rules:{required:!0,message:"Required."},prop:e.keyName+".amount"}},[s("el-select",{staticClass:"form-control-1",attrs:{placeholder:"Select Amount"},on:{change:function(t){return e.handleChange(t,"amount")}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(t){return s("el-option",{key:t.amount,attrs:{value:t.amount}},[s("div",{staticClass:"option-grid"},[s("div",{staticClass:"title"},[e._v(" "+e._s(t.amount)+" ")])])])})),1)],1)],1),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{rules:{required:!0,message:"Required."},prop:e.keyName+".count"}},[s("el-select",{staticClass:"form-control-1",attrs:{placeholder:"Select",disabled:"$0.00-$0.00"==e.value.replaceAll(" ","")},on:{change:function(t){return e.handleChange(t,"count")}},model:{value:e.count,callback:function(t){e.count=t},expression:"count"}},e._l(e.options,(function(t){return s("el-option",{key:t.count,attrs:{value:t.count}},[s("div",{staticClass:"option-grid"},[s("div",{staticClass:"title"},[e._v(" "+e._s(t.count)+" ")])])])})),1)],1)],1)],1)],1)},r=[],u=s(4720),c={props:{name:String,keyName:String,defaultValue:{type:Object,default:null},options:Array},components:{[u.Select.name]:u.Select,[u.Option.name]:u.Option,[u.Row.name]:u.Row,[u.Col.name]:u.Col,[u.FormItem.name]:u.FormItem},data(){return{value:"",count:""}},computed:{fieldOptions(){const e=this.options.map((e=>({value:e,label:e})))||[];return e}},methods:{handleChange(e,t){"amount"==t?(this.value=e,"$0.00-$0.00"===e.replaceAll(" ","")&&(this.count="0 - 0",this.$emit("change",{value:"0 - 0",field:"count"}))):this.count=e,this.$emit("change",{value:e,field:t})}},mounted(){this.defaultValue&&(this.value=this.defaultValue.amount,this.count=this.defaultValue.count)},watch:{defaultValue(e){this.value=e.amount,this.count=e.count}}},d=c,m=s(3736),p=(0,m.Z)(d,i,r,!1,null,"5c74f945",null),$=p.exports,f=s(4506),h={name:"BusinessDetails",mixins:[l.Z],components:{EtvInput:$},created(){const e=this.getSelectedBusiness,t=this.showLoader(),s={};this.fields.forEach((e=>{const t={};e.fields.forEach((e=>{t[e.key]={count:"",amount:""}})),s[e.key]=t})),this.business.etvValue=s,this.getProjection(e.id).then((e=>{if(e.transactions&&e.transactions.annual){const t=(0,f.om)(e.transactions.annual);console.log(e.transactions.annual,t),this.business.etvValue=e.transactions.annual}})).finally((()=>{t.close()}))},computed:{...(0,o.Se)("kyb",["getSelectedBusiness","getNacisCodeData"]),...(0,o.Se)("user",["getPersonDetails"]),...(0,o.Se)("account",["getAllAccount"]),isFormValid(){const e=this.business.etvValue;return!!e&&Object.keys(e).every((t=>{const s=e[t];return Object.keys(s).every((e=>s[e].amount&&""!==s[e].amount&&s[e].count&&""!==s[e].count))}))},fieldOptionsMap(){return(0,f.lD)()},fields(){return(0,f.Nh)()}},data(){return{business:{etvValue:null},formRules:{}}},methods:{...(0,o.nv)("kyb",["updateProjection","listAllBusiness","getProjection"]),...(0,o.OI)("kyb",["setSelectedBusiness"]),back(){this.goToPreviousScreen()},submitForm(){this.$refs.businessForm.validate((e=>{if(!e)return;const t=this.getSelectedBusiness,s=this.business.etvValue,a=JSON.parse(JSON.stringify(s));Object.keys(a).forEach((e=>{const t=a[e];Object.keys(t).forEach((e=>{t[e].amount=this.findMaximumFromText(t[e].amount),t[e].count=this.findMaximumFromText(t[e].count)}))}));const n=this.showLoader();this.updateProjection({payload:{transactions:{annual:a}},businessId:t.id}).then((()=>{this.$router.push("/kyb/businessAddress")})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{n.close()}))}))},handleInputChange({value:e,field:t,groupKey:s,fieldKey:a}){const n=JSON.parse(JSON.stringify(this.business.etvValue));n[s]&&n[s][a]&&(n[s][a][t]=e,this.business.etvValue=n)},findMaximumFromText(e){const t=e.split("-"),s=t[t.length-1].replaceAll("$","").replaceAll(",","").replaceAll(" ","");if(s.includes("+")){let e=parseFloat(s);if(!Number.isNaN(e))return e+=1,`${e}`}return s},getDefaultValue(e,t){const s=this.business.etvValue&&this.business.etvValue[e]&&this.business.etvValue[e][t];return s}}},y=h,g=(0,m.Z)(y,a,n,!1,null,null,null),b=g.exports},4506:function(e,t,s){s.d(t,{Nh:function(){return n},lD:function(){return a},om:function(){return o}});const a=()=>{const e={ach:[{amount:"$0.00 - $0.00",count:"0 - 0"},{amount:"$0.01 - $5,000",count:"1 - 10"},{amount:"$5,000.01 - $10,000.00",count:"11 - 20"},{amount:"$10,000.01 - $20,000.00",count:"21 - 30"},{amount:"$20,000.01 - $30,000.00",count:"31 - 40"},{amount:"$30,000.01 - $60,000.00",count:"41 - 60"},{amount:"$60,000.01 - $100,000.00",count:"61 - 100"},{amount:"$100,000.01 - $150,000.00",count:"101 - 150"},{amount:"$150,000.01 - $225,000.00",count:"151 - 250"},{amount:"$300,000.01 - $1,000,000.00",count:"251 - 500"},{amount:"$1,000,000.01 - $2,000,000.00",count:"501 - 1000"},{amount:"$2,000,000.00+",count:"1000+"}],internationalAch:[{amount:"$0.00 - $0.00",count:"0 - 0"},{amount:"$0.01 - $250.00",count:"1 - 2"},{amount:"$250.01 - $500.00",count:"3 - 4"},{amount:"$500.01 - $750.00",count:"5 - 6"},{amount:"$750.01 - $1,000.00",count:"6 - 10"},{amount:"$1,000.01 - $2,500.00",count:"11-20"},{amount:"$2,500.01 - $5,000.00",count:"21 - 30"},{amount:"$5,000.01 - $10,000.00",count:"31 - 40"},{amount:"$10,000.01 - $20,000.00",count:"41 - 60"},{amount:"$20,000.01 - $30,000.00",count:"61 - 100"},{amount:"$30,000.01 - $60,000.00",count:"101 - 150"},{amount:"$60,000.01 - $100,000.00",count:"151 - 250"},{amount:"$100,000.01+",count:"251+"}],domesticWire:[{amount:"$0.00 - $0.00",count:"0 - 0"},{amount:"$0.01 - $5,000.00",count:"1 - 2"},{amount:"$5,000.01 - $10,000.00",count:"3 - 4"},{amount:"$10,000.01 - $15,000.00",count:"5 - 6"},{amount:"$15,000.01 - $20,000.00",count:"6 - 10"},{amount:"$20,000.01 - $30,000.00",count:"11-20"},{amount:"$30,000.01 - $40,0000.00",count:"21 - 30"},{amount:"$40,000.01 - $50,000.00",count:"31 - 40"},{amount:"$50,000.01 - $70,000.00",count:"41 - 60"},{amount:"$70,000.01 - $100,000.00",count:"61 - 100"},{amount:"$100,000.01 - $150,000.00",count:"101 - 150"},{amount:"$150,000.01 - $200,000.00",count:"151 - 250"},{amount:"$200,000.01 - $500,000.00",count:"251 - 500"},{amount:"$500,000.01 - $1,000,000.00",count:"501 - 700"},{amount:"$1,000,000.01 - $1,500,000.00",count:"701 - 800"},{amount:"$1,500,000.01-$3,000,000.00",count:"801-900"},{amount:"$3,000,000.01+",count:"901+"}],internationalWire:[{amount:"$0.00 - $0.00",count:"0 - 0"},{amount:"$0.01 - $250.00",count:"1 - 2"},{amount:"$250.01 - $500.00",count:"3 - 4"},{amount:"$500.01 - $750.00",count:"5 - 6"},{amount:"$750.01 - $1,000.00",count:"6 - 10"},{amount:"$1,000.01 - $2,500.00",count:"11-20"},{amount:"$2,500.01 - $5,000.00",count:"21 - 30"},{amount:"$5,000.01 - $10,000.00",count:"31 - 40"},{amount:"$10,000.01 - $20,000.00",count:"41 - 60"},{amount:"$20,000.01 - $30,000.00",count:"61 - 100"},{amount:"$30,000.01 - $60,000.00",count:"101 - 150"},{amount:"$60,000.01 - $100,000.00",count:"151 - 250"},{amount:"$100,000.01 - $150,000.00",count:"251 - 500"},{amount:"$150,000.01 - $225,000.00",count:"501 - 700"},{amount:"$300,000.01 - $1,000,000.00",count:"701 - 800"},{amount:"$1,000,000.01 - $2,000,000.00",count:"801 - 900"},{amount:"$2,000,000.00+",count:"901+"}],physicalCheck:[{amount:"$0.00 - $0.00",count:"0 - 0"},{amount:"$0.01 - $5,000.00",count:"1 - 2"},{amount:"$5,000.01 - $10,000.00",count:"3 - 5"},{amount:"$10,000.01 - $30,000.00",count:"6 - 10"},{amount:"$30,000.01 - $50,000.00",count:"11 - 15"},{amount:"$50,000.01 - $100,0000.00",count:"16 - 20"},{amount:"$100,000.01 - $180,000.00",count:"21 - 30"},{amount:"$180,000.01 - $300,000.00",count:"31 - 40"},{amount:"$300,000.01 - $60,0000.00",count:"41 - 50"},{amount:"$600,000.01 - $1,000,000.00",count:"51 - 75"},{amount:"$1,000,000.01 - $1500,000.00",count:"76 - 90"},{amount:"$1,500,000.01 - $2,500,000.00",count:"91- 100"},{amount:"$2,500,000.01+",count:"101+"}]};return e.achPull=e.ach,e.achPush=e.ach,e},n=()=>[{groupName:"Send",key:"send",fields:[{name:"ACH",key:"ach"},{name:"International ACH",key:"internationalAch"},{name:"Domestic Wire",key:"domesticWire"},{name:"International Wire",key:"internationalWire"},{name:"Physical Check",key:"physicalCheck"}]},{groupName:"Receive",key:"receive",fields:[{name:"ACH",key:"ach"},{name:"Physical Check",key:"physicalCheck"}]},{groupName:"Incoming",key:"incoming",fields:[{name:"ACH Push",key:"achPush"},{name:"ACH Pull",key:"achPull"},{name:"International ACH",key:"internationalAch"},{name:"Domestic Wire",key:"domesticWire"},{name:"International Wire",key:"internationalWire"}]}],o=e=>{const t=a();return Object.keys(e).forEach((s=>{Object.keys(e[s]).forEach((a=>{const{count:n,amount:o}=e[s][a];if(void 0!==o&&void 0!==n){const l=parseFloat(n),i=parseFloat(o),r=t[a].find((e=>{const t=e.count.split("-");if(2===t.length){const e=parseFloat(t[0].replaceAll(" ","").replaceAll("+","").replaceAll("$","")),s=parseFloat(t[1].replaceAll(" ","").replaceAll("+","").replaceAll("$",""));return!Number.isNaN(e)&&!Number.isNaN(s)&&!Number.isNaN(l)&&l>=e&&l<=s}const s=t[t.length-1].replaceAll(" ","").replaceAll("+","").replaceAll("$",""),a=parseFloat(s);return!Number.isNaN(a)&&!Number.isNaN(l)&&a<=l})),u=t[a].find((e=>{const t=e.amount.split("-");if(2===t.length){const e=parseFloat(t[0].replaceAll(",","").replaceAll(" ","").replaceAll("+","").replaceAll("$","")),s=parseFloat(t[1].replaceAll(",","").replaceAll(" ","").replaceAll("+","").replaceAll("$",""));return!Number.isNaN(e)&&!Number.isNaN(s)&&!Number.isNaN(i)&&i>=e&&i<=s}const s=t[t.length-1].replaceAll(",","").replaceAll(" ","").replaceAll("+","").replaceAll("$",""),a=parseFloat(s);return!Number.isNaN(a)&&!Number.isNaN(i)&&a<=i}));r&&(e[s][a].count=r.count),u&&(e[s][a].amount=u.amount)}}))})),e}},6265:function(e,t,s){var a=s(629);t["Z"]={methods:{...(0,a.OI)(["updateLogoutPopupStatus"]),...(0,a.nv)("user",["logout"]),logoutAndRedirect(){this.updateLogoutPopupStatus(!0)}}}},7041:function(e,t,s){s.d(t,{A:function(){return a}});const a=e=>{const{address_components:t,geometry:s}=e;let a={};const o=t,l=n(o,"premise"),i=n(o,"street_number"),r=n(o,"route");let u=n(o,"locality"),c=n(o,"sublocality_level_1");const d=n(o,"postal_town"),m=n(o,"administrative_area_level_1"),p=n(o,"country"),$=n(o,"postal_code"),f=n(o,"neighborhood"),h=[i,l,r];return u||(u=d||c),a.line1=h.filter((e=>e)).map((e=>e.long_name)).join(" "),a.line2=f?f.long_name:null,a.city=u?u.long_name:null,a.postalCode=$?$.long_name:null,a.state=m?m.short_name:null,a.country=p?p.short_name:null,a.latitude=s.location.lat(),a.longitude=s.location.lng(),a},n=(e,t)=>e.find((e=>e.types.includes(t)))}}]);
//# sourceMappingURL=kyb-business-address.1705666157445.js.map