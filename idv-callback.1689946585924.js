"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[2571],{1255:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[e._v(" Loading... ")])},n=[],i=t(629),r=t(2424),c=t(9896),a={mixins:[r.Z],created(){try{const e=window.sessionStorage.getItem("user_auth_tokens"),s=window.sessionStorage.getItem("app_env");if(e&&s){(0,c.Nb)(s);const t=JSON.parse(e);this.setUserAuthToken(t),this.$http.defaults.headers.common.AUTHORIZATION="Bearer "+t.accessToken,this.verifyToken(),window.sessionStorage.removeItem("user_auth_tokens"),window.sessionStorage.removeItem("app_env")}else this.goToWelcomeScreen()}catch{this.goToWelcomeScreen()}},methods:{...(0,i.nv)("user",["verifyOtp","getPerson","login"]),...(0,i.OI)("user",["setUserAuthToken"]),...(0,i.nv)("kyc",["submitKyc"]),verifyToken(){const e=this.showLoader();this.getPerson().then((e=>{setTimeout((()=>{this.startKYC(e)}),0)})).catch((e=>{this.apiErrorMessage(e),console.log(e)})).finally((()=>{e.close()}))},startKYC(e){if(e&&e.id){const s=this.showLoader();this.submitKyc(e.id).then((()=>{setTimeout((()=>{this.loginSuccess((()=>{this.$router.push("/kyc/kycStatus")}))}),0)})).catch((e=>{console.log(e),this.apiErrorMessage(e)})).finally((()=>{s.close()}))}}}},h=a,u=t(3736),l=(0,u.Z)(h,o,n,!1,null,null,null),d=l.exports}}]);
//# sourceMappingURL=idv-callback.1689946585924.js.map