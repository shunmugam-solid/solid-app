"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[8350],{8350:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"widgetContainer userProfile"},[e("div",{staticClass:"navigationHeader"},[e("div",{staticClass:"navigationHeader__inner"},[e("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("personal_profile_header"))+" ")]),e("span",{staticClass:"el-icon-close",on:{click:t.drawerClose}})])]),e("div",{staticClass:"widgetContainer__body personal-profile-body"},[e("div",{staticClass:"listWithInfo border-1"},[e("ul",[e("li",[e("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("profile_name"))+" ")]),e("p",{staticClass:"value"},[t._v(" "+t._s(t._f("contactName")(t.getPersonDetails))+" ")])]),e("li",[e("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("profile_number"))+" ")]),e("p",{staticClass:"value"},[t._v(" "+t._s(t._f("phone")(t.getPersonDetails.phone))+" ")])]),e("li",[e("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("profile_email"))+" ")]),e("p",{staticClass:"value"},[t._v(" "+t._s(t.getPersonDetails.email)+" ")])])])]),0!==t.getBusinessList.length?e("div",{staticClass:"listWithAccountNumbers"},[e("p",{staticClass:"header-2"},[t._v(" "+t._s(t.$t("profile_business_header"))+" ")]),e("ul",t._l(t.getBusinessList,(function(s){return e("li",{key:s.id},[e("div",{staticClass:"details"},[e("p",{staticClass:"label"},[t._v(" "+t._s(s.legalName)+" ")])])])})),0)]):t._e(),e("div",[e("p",{staticClass:"header-2"},[t._v(" "+t._s(t.$t("profile_action_header"))+" ")]),e("div",{staticClass:"listWithActionsv2"},[e("ul",[t.isProfileHelpCenterEnabled?e("li",{on:{click:function(s){return t.helpCenter()}}},[e("div",{staticClass:"details"},[e("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("profile_helpcenter"))+" ")])]),t._m(0)]):t._e(),t.isProfileGetInTouchEnabled?e("li",{on:{click:function(s){return t.openHelp()}}},[e("div",{staticClass:"details"},[e("p",{staticClass:"label"},[t._v(" "+t._s(t.$t("profile_getintouch"))+" ")])]),t._m(1)]):t._e()])])]),e("div",{staticClass:"addressWithInfo"},[e("div",{staticClass:"addressWithInfo__header flex-between-center"},[e("p",{staticClass:"header-2"},[t._v(" "+t._s(t.$t("location"))+" ")])]),e("div",{staticClass:"addressWithInfo__body border-1"},[e("div",{staticClass:"map"},[e("ul",{staticClass:"card-with-map"},[e("div",{staticClass:"map"},[t.lat&&t.lng?e("GmapMap",{staticStyle:{width:"100%",height:"200px"},attrs:{center:{lat:t.lat,lng:t.lng},zoom:7,"map-type-id":"terrain"}},[e("GmapMarker",{attrs:{position:{lat:t.lat,lng:t.lng},clickable:!0,draggable:!1}})],1):t._e()],1),e("ul",[e("li",[e("span",{staticClass:"label"},[t._v(t._s(t.$t("address")))]),e("span",{staticClass:"value"},[t._v(t._s(t.address))])]),e("li",[e("span",{staticClass:"label"},[t._v(t._s(t.$t("contact_country_title")))]),e("span",{staticClass:"value"},[t._v(" "+t._s(t.getPersonDetails.address.country)+" ")])])])])])])])]),e("div",{staticClass:"el-drawer__footer"},[e("el-button",{staticClass:"logout brad width-100 el-button__brand brand",attrs:{type:"primary"},on:{click:t.logoutHandler}},[t._v(" "+t._s(t.$t("profile_logoutn_btn"))+" ")])],1)])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"action"},[e("span",{staticClass:"icon-Arrow-small-right icon"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"action"},[e("span",{staticClass:"icon-Arrow-small-right icon"})])}],i=e(6292),n=e(629),o=e(2424),r=e(9896),c={mixins:[o.Z],data(){return{lat:null,lng:null,isProfileHelpCenterEnabled:(0,r.g2)("isProfileHelpCenterEnabled"),isProfileGetInTouchEnabled:(0,r.g2)("isProfileGetInTouchEnabled"),isProfileDisclosureEnabled:(0,r.g2)("isProfileDisclosureEnabled")}},created(){this.getLatLong()},computed:{...(0,n.Se)("user",["getPersonDetails"]),...(0,n.Se)("kyb",["getBusinessList"]),google:i.gmapApi,address(){const t=this.getPersonDetails,s=t.address;return s.line2&&s.line2.length>0?s.line1+", "+s.line2+", "+s.city+", "+s.state:s.line1+", "+s.city+", "+s.state}},methods:{...(0,n.nv)("user",["logout"]),done(){this.goToDashboard()},popupClose(){this.editAddressDialog=!1},getLatLong(){this.$gmapApiPromiseLazy().then((()=>{if(this.google){const t=this.getPersonDetails,s=new this.google.maps.Geocoder,e=t.address,a=e.line1+","+e.line2+","+e.city+","+e.country;s.geocode({address:a},((t,s)=>{if(s==this.google.maps.GeocoderStatus.OK){const s=t[0].geometry.location.lat(),e=t[0].geometry.location.lng();this.lat=s,this.lng=e}}))}}))},logoutHandler(){const t=this.showLoader();this.logout().then((()=>{this.goToWelcomeScreen()})).catch((t=>{console.log(t),this.apiErrorMessage(t)})).finally((()=>{t.close()}))},helpCenter(){var t=window.open((0,r._7)("helpCenter","https://intercom.help/solid-2cf7e39d14f4/en/"),"_blank");t.focus()}}},d=c,_=e(3736),p=(0,_.Z)(d,a,l,!1,null,null,null),u=p.exports}}]);
//# sourceMappingURL=8350.1704777938414.js.map