"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[2888,5895],{5895:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"widgetContainer shippingAddress"},[s("div",{staticClass:"loginHeader"},[s("img",{staticClass:"loginHeader__logo",attrs:{src:e.logoUrl,alt:"logo"}}),s("div",{staticClass:"loginHeader__footer"},[s("p",{staticClass:"cancel",on:{click:e.cancel}},[e._v(" "+e._s(e.$t("cancel"))+" ")]),s("p",{staticClass:"description"},[e._v(" "+e._s(e.$t("card.text.replaceCard"))+" ")]),s("p",{staticClass:"submit",class:{disabled:e.isFormValid},on:{click:function(t){return e.next()}}},[e._v(" "+e._s(e.$t("next"))+" ")])])]),s("div",{staticClass:"widgetContainer__body"},[s("el-form",{ref:"personAddress",staticClass:"wise-form",attrs:{model:e.formData,rules:e.formRules}},[s("div",{staticClass:"el-input--full-width el-input"},[s("p",{staticClass:"wise-form__header"},[e._v(" "+e._s(e.$t("card_BillingAddress_HeaderTitle"))+" ")]),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.line1",rules:e.formRules.line1,label:e.$t("address_1")}},[s("el-input",{staticStyle:{display:"none"}}),s("el-input",{staticStyle:{display:"none"},model:{value:e.formData.address.line1,callback:function(t){e.$set(e.formData.address,"line1",t)},expression:"formData.address.line1"}}),s("div",{staticClass:"el-input"},[s("gmap-autocomplete",{staticClass:"el-input__inner",attrs:{placeholder:e.$t("address_1"),autocomplete:"disabled",value:e.formData.address.line1,options:{componentRestrictions:{country:"us"}},"select-first-on-enter":!0},on:{place_changed:function(t){return e.updateAddress(t)}},nativeOn:{change:function(t){e.formData.address.line1=t.target.value}}})],1)],1)],1),s("el-form-item",{attrs:{prop:"address.line2",label:e.$t("address_2")}},[s("el-input",{attrs:{placeholder:e.$t("address_2")},model:{value:e.formData.address.line2,callback:function(t){e.$set(e.formData.address,"line2",t)},expression:"formData.address.line2"}})],1),s("div",{staticClass:"wise-form__inline"},[s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.city",rules:e.formRules.city,label:e.$t("address_City")}},[s("el-input",{staticStyle:{flex:"2"},attrs:{placeholder:e.$t("address_City")},model:{value:e.formData.address.city,callback:function(t){e.$set(e.formData.address,"city",t)},expression:"formData.address.city"}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.country",rules:e.formRules.state,label:e.$t("address_State")}},[s("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_State")},model:{value:e.formData.address.state,callback:function(t){e.$set(e.formData.address,"state",t)},expression:"formData.address.state"}})],1),s("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.postalCode",rules:e.formRules.postalCode,label:e.$t("address_Zipcode")}},[s("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:e.$t("address_Zipcode")},model:{value:e.formData.address.postalCode,callback:function(t){e.$set(e.formData.address,"postalCode",t)},expression:"formData.address.postalCode"}})],1)],1)],1)],1)])},l=[],r=s(7041),i=s(629),d=s(8663),o={name:"ContactAddressForm",mixins:[d.Z],data(){return{formData:{address:{line1:null,line2:null,city:null,postalCode:null,country:"US",addressType:"billing",state:null}},sameAddress:!0,formRules:{line1:[{required:!0,message:"Address 1 is required"}],city:[{required:!0,message:"City is required"}],state:[{required:!0,message:"State is required"}],postalCode:[{required:!0,message:"Zip Code is required"}]}}},computed:{...(0,i.Se)("card",["getReplaceCardData"]),isFormValid(){return!(this.formData.address.line1&&this.formData.address.city&&this.formData.address.postalCode)}},methods:{...(0,i.OI)("card",["updateReplaceCardDate"]),...(0,i.nv)("card",["replaceCard"]),updateAddress(e){const t=(0,r.A)(e);this.formData.address=t},next(){this.$refs.personAddress.validate((e=>{if(!e)return;const t={...this.getReplaceCardData},{line1:s,line2:a,city:l,postalCode:r,country:i,state:d}=this.formData.address,o={...t,shipping:{shippingAddress:{line1:s,line2:a,city:l,postalCode:r,country:i,addressType:"billing",state:d}}};this.updateReplaceCardDate(o)}))},cancel(){this.$router.push("/card/cardManagement")}}},n=o,c=s(3736),u=(0,c.Z)(n,a,l,!1,null,"44bd417c",null),p=u.exports},8663:function(e,t,s){var a=s(629);t["Z"]={computed:{...(0,a.Se)("kyb",["getSelectedBusiness"]),...(0,a.Se)("account",["getSelectedAccount"])},created(){this.getSelectedAccount||this.goToWelcomeScreen()}}},7041:function(e,t,s){s.d(t,{A:function(){return a}});const a=e=>{const{address_components:t,geometry:s}=e;let a={};const r=t,i=l(r,"premise"),d=l(r,"street_number"),o=l(r,"route");let n=l(r,"locality"),c=l(r,"sublocality_level_1");const u=l(r,"postal_town"),p=l(r,"administrative_area_level_1"),m=l(r,"country"),f=l(r,"postal_code"),_=l(r,"neighborhood"),C=[d,i,o];return n||(n=u||c),a.line1=C.filter((e=>e)).map((e=>e.long_name)).join(" "),a.line2=_?_.long_name:null,a.city=n?n.long_name:null,a.postalCode=f?f.long_name:null,a.state=p?p.short_name:null,a.country=m?m.short_name:null,a.latitude=s.location.lat(),a.longitude=s.location.lng(),a},l=(e,t)=>e.find((e=>e.types.includes(t)))}}]);
//# sourceMappingURL=2888.1702025943641.js.map