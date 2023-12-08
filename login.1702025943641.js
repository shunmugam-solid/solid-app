"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[4535],{2372:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mobile-redirect"},[o("div",{staticClass:"mobile-redirect__body"},[o("BrandImg",{staticClass:"mobile-redirect__logo",attrs:{src:"logos/Logo.svg","data-testid":"logo",alt:"logo"}}),o("p",{staticClass:"mobile-redirect__info"},[t._v(" For a smoother experience, open on a desktop browser or download the app ")]),o("div",{staticClass:"mobile-redirect__logos"},[t.urls.ios&&t.urls.ios.url&&""!==t.urls.ios.url?o("a",{attrs:{href:t.urls.ios.url},on:{click:function(e){return t.redirect("ios")}}},[o("img",{attrs:{src:s(3129),alt:"Apple Store"}})]):t._e(),t.urls.android&&t.urls.android.url&&""!==t.urls.android.url?o("a",{attrs:{href:t.urls.android.url},on:{click:function(e){return t.redirect("android")}}},[o("img",{attrs:{src:s(7302),alt:"Android Store"}})]):t._e()])],1)])},r=[],i=s(9896),n=s(5315),l={computed:{urls(){const t=(0,i._7)("appUrl",{});return t}},components:{BrandImg:n.Z},methods:{redirect(t){const{urlScheme:e,url:s}=this.urls[t];""!==e&&(window.location.href=e),setTimeout((()=>window.location.href=s),3e3)}}},a=l,c=s(3736),d=(0,c.Z)(a,o,r,!1,null,null,null),u=d.exports},2248:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"widgetContainer widgetContainer--full-screen widgetContainer--center welcome"},[s("BrandImg",{staticClass:"welcome__logo",attrs:{src:"logos/Logo.svg","data-testid":"logo",alt:"logo"}}),s("div",{staticClass:"welcome__header"},[s("p",{attrs:{"data-testid":"welcome-txt"}},[t._v(" "+t._s(t.$t("welcome_title"))+" ")]),s("span",{attrs:{"data-testid":"welcome-desc"}},[t._v(t._s(t.welcomText))])]),t.person?s("div",{staticClass:"login_buttons"},[s("el-button",{staticClass:"welcome__get-started el-button__brand brand",style:{background:t.primaryColor},attrs:{type:"primary"},on:{click:function(e){return t.resume()}}},[t._v(" "+t._s(t.$t("continue"))+" ")]),s("el-button",{attrs:{type:"text"},on:{click:function(e){return t.logout()}}},[t._v(" "+t._s(t.$t("profile_logoutn_btn"))+" ")])],1):[1==t.isTestModeEnabled?s("ul",{staticClass:"welcome__switch-list"},[s("li",{staticClass:"test-mode",attrs:{"data-testid":"test-mode"},on:{click:function(e){return t.login("prod"===t.currentMode?"prodtest":t.mode)}}},[s("p",[t._v(" "+t._s(t.$t("prod_test"))+" ")]),s("span",{staticClass:"icon-Arrow-small-right"})]),s("li",{staticClass:"live-mode",attrs:{"data-testid":"live-mode"},on:{click:function(e){return t.login("prod")}}},[s("p",[t._v(" "+t._s(t.$t("prod_live"))+" ")]),s("span",{staticClass:"icon-Arrow-small-right"})])]):s("el-button",{staticClass:"welcome__get-started el-button__brand brand",style:{background:t.primaryColor},attrs:{type:"primary"},on:{click:function(e){return t.login(t.mode)}}},[t._v(" "+t._s(t.$t("Restart_get_started_button_title"))+" ")])]],2)])},r=[],i=s(9896),n=s(629),l=s(5315),a=s(144),c=s(8196),d={name:"Welcome",components:{BrandImg:l.Z},data:()=>({mode:"prodtest",person:null}),created(){if(this.mode=this.getActiveEnv,!this.isTestModeEnabled){a["default"].use(c.Z);const t=this.showLoader();a["default"].getAuth0Instance().then((()=>{setTimeout((()=>{const t=this.showLoader();this.checkSession().then((()=>{this.getPersonFromAuth0().then((t=>{t&&(this.person=t)}))})).finally((()=>{t.close()}))}),0)})).finally((()=>{t.close()}))}},computed:{...(0,n.Se)(["getActiveEnv"]),currentMode(){return"prod"},isTestModeEnabled(){return(0,i.g2)("isTestModeEnabled",!0)},primaryColor(){return(0,i._7)("primaryColor","#141414")},welcomText(){if(this.person)return this.$t("try_oldSession",{value1:this.person.name});const t=(0,i.BI)();return this.$t("solid"!==t?t+"_welcome_tagline":"welcome_desc")}},methods:{...(0,n.nv)("user",["startLogin","getPersonFromAuth0","logout","checkSession"]),async login(t){this.mode=t,(0,i.Nb)(this.mode),window.sessionStorage.setItem("selectedEnv",t),setTimeout((()=>{if(window.analytics&&window.analytics.track("getStarted"),this.isTestModeEnabled){a["default"].use(c.Z);const t=this.showLoader();a["default"].getAuth0Instance().then((()=>{setTimeout((()=>{const t=this.showLoader();this.checkSession().then((()=>{this.getPersonFromAuth0().then((t=>{t?this.person=t:this.startLogin()})).catch((()=>{this.startLogin()}))})).catch((()=>{this.startLogin()})).finally((()=>{t.close()}))}),0)})).finally((()=>{t.close()}))}else this.startLogin()}),0)},resume(){window.sessionStorage.setItem("selectedEnv",this.mode),this.startLogin()}}},u=d,m=s(3736),h=(0,m.Z)(u,o,r,!1,null,null,null),g=h.exports},7302:function(t,e,s){t.exports=s.p+"img/Android-store.80f925c3.svg"},3129:function(t,e,s){t.exports=s.p+"img/Apple-store.61ead695.svg"}}]);
//# sourceMappingURL=login.1702025943641.js.map