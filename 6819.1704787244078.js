"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[6819],{6819:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widgetContainer"},[a("div",{staticClass:"navigationHeader"},[a("div",{staticClass:"navigationHeader__inner"},[a("span",{staticClass:"el-icon-close cancel",on:{click:t.cancel}}),a("p",{staticClass:"title"},[t._v(" "+t._s(t.$t(t.getCreateContactData&&t.getCreateContactData.id?"contact_details_EditTitle":"contact_Details_NavTitle"))+" ")]),a("span",{staticClass:"el-icon-close",on:{click:t.drawerClose}})])]),a("div",{staticClass:"widgetContainer__body"},[a("el-form",{ref:"personAddress",staticClass:"wise-form",attrs:{model:t.formData,rules:t.formRules}},[a("div",{staticClass:"el-input--full-width el-input"},[a("p",{staticClass:"wise-form__header"},[t._v(" "+t._s(t.$t("contact_Address_Title"))+" ")]),a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.line1",rules:t.formRules.line1,label:t.$t("address_1")}},[a("el-input",{staticStyle:{display:"none"}}),a("el-input",{staticStyle:{display:"none"},model:{value:t.formData.address.line1,callback:function(e){t.$set(t.formData.address,"line1",e)},expression:"formData.address.line1"}}),a("div",{staticClass:"el-input"},[a("gmap-autocomplete",{staticClass:"el-input__inner",attrs:{placeholder:t.$t("address_1"),autocomplete:"disabled",value:t.formData.address.line1,options:{componentRestrictions:{country:t.country}},"select-first-on-enter":!0},on:{place_changed:function(e){return t.updateAddress(e)}},nativeOn:{change:function(e){t.formData.address.line1=e.target.value}}})],1)],1)],1),a("el-form-item",{attrs:{prop:"address.line2",label:t.$t("address_2")}},[a("el-input",{attrs:{placeholder:t.$t("address_2")},model:{value:t.formData.address.line2,callback:function(e){t.$set(t.formData.address,"line2",e)},expression:"formData.address.line2"}})],1),a("div",{staticClass:"wise-form__inline"},[a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.city",rules:t.formRules.city,label:t.$t("address_City")}},[a("el-input",{staticStyle:{flex:"2"},attrs:{placeholder:t.$t("address_City")},model:{value:t.formData.address.city,callback:function(e){t.$set(t.formData.address,"city",e)},expression:"formData.address.city"}})],1),a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.country",rules:t.formRules.state,label:t.$t("address_State")}},[a("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:t.$t("address_State")},model:{value:t.formData.address.state,callback:function(e){t.$set(t.formData.address,"state",e)},expression:"formData.address.state"}})],1),a("el-form-item",{staticClass:"is-no-asterisk",attrs:{prop:"address.postalCode",rules:t.formRules.postalCode,label:t.$t("address_Zipcode")}},[a("el-input",{staticStyle:{flex:"1"},attrs:{placeholder:t.$t("address_Zipcode")},model:{value:t.formData.address.postalCode,callback:function(e){t.$set(t.formData.address,"postalCode",e)},expression:"formData.address.postalCode"}})],1)],1)],1)],1),a("div",{staticClass:"el-drawer__footer"},[a("el-button",{staticClass:"width-100 el-button__brand brand",attrs:{type:"primary",disabled:"isFormValid"},on:{click:function(e){return t.next()}}},[t._v(" "+t._s(t.$t("contact_Details_NavRightButton_Title"))+" ")])],1)])},r=[],l=a(7041),i=a(629),o=a(9896),n={name:"ContactAddressForm",data(){return{formData:{address:{line1:null,line2:null,city:null,postalCode:null,country:"US",addressType:"legal",state:null}},formRules:{line1:[{required:!0,message:"Address 1 is required"}],city:[{required:!0,message:"City is required"}],state:[{required:!0,message:"State is required"}],postalCode:[{required:!0,message:"Zip Code is required"}]}}},computed:{...(0,i.Se)("contact",["getCreateContactData"]),...(0,i.Se)("user",["getPersonDetails"]),isFormValid(){return!(this.formData.address.line1&&this.formData.address.city&&this.formData.address.postalCode)},country(){const t=this.getPersonDetails,e=(0,o.em)(t.phone);return e&&e.code?e.code:"US"}},created(){const t=this.getCreateContactData;if(t&&t.id&&t.address){const{line1:e,line2:a,city:s,postalCode:r,state:l}=t.address,i=this.country;this.formData.address={line1:e,line2:a,city:s,postalCode:r,country:i,addressType:"legal",state:l}}},methods:{...(0,i.OI)("contact",["updateCreateContactData"]),updateAddress(t){const e=(0,l.A)(t);this.formData.address=e},next(){this.$refs.personAddress.validate((t=>{if(!t)return;const e={...this.getCreateContactData},{line1:a,line2:s,city:r,postalCode:l,state:i}=this.formData.address,o=this.country,n={...e,address:{line1:a,line2:s,city:r,postalCode:l,country:o,addressType:"legal",state:i}};this.updateCreateContactData(n),this.$router.push("/contact/accountForm")}))},cancel(){this.getCreateContactData&&this.getCreateContactData.id?this.$router.push("/contact/details"):this.$router.push("/contact/list")}}},d=n,c=a(3736),u=(0,c.Z)(d,s,r,!1,null,null,null),p=u.exports},7041:function(t,e,a){a.d(e,{A:function(){return s}});const s=t=>{const{address_components:e,geometry:a}=t;let s={};const l=e,i=r(l,"premise"),o=r(l,"street_number"),n=r(l,"route");let d=r(l,"locality"),c=r(l,"sublocality_level_1");const u=r(l,"postal_town"),p=r(l,"administrative_area_level_1"),m=r(l,"country"),f=r(l,"postal_code"),C=r(l,"neighborhood"),_=[o,i,n];return d||(d=u||c),s.line1=_.filter((t=>t)).map((t=>t.long_name)).join(" "),s.line2=C?C.long_name:null,s.city=d?d.long_name:null,s.postalCode=f?f.long_name:null,s.state=p?p.short_name:null,s.country=m?m.short_name:null,s.latitude=a.location.lat(),s.longitude=a.location.lng(),s},r=(t,e)=>t.find((t=>t.types.includes(e)))}}]);
//# sourceMappingURL=6819.1704787244078.js.map