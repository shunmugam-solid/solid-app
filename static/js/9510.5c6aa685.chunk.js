"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[9510],{2249:function(n,t,e){e.d(t,{Z:function(){return d}});var a=e(8735),c=(e(2791),e(2020)),o=e(80),i="AccountListItem_listItem__EP7DX",s="AccountListItem_tag__Il-LV",r="AccountListItem_tagCash__qGgKp",u="AccountListItem_tagCard__2+Rzz",l="AccountListItem_tagCrypto__KVpIj",f=e(184),d=function(n){var t=n.accountDetails,e=n.onSelect,d=(0,c.$)().t;return(0,f.jsx)(a.HC,{className:"".concat(i),onClick:function(){e&&e(t)},children:(0,f.jsxs)(a.kC,{gap:4,children:[(0,o.Lt)(t)?(0,f.jsx)(a.xu,{className:"".concat(s," ").concat(l),children:(0,f.jsx)(a.xv,{variant:"small",textAlign:"center",color:"inherit",children:d("account_list.crypto")})}):"cardAccount"===t.type?(0,f.jsx)(a.xu,{className:"".concat(s," ").concat(u),children:(0,f.jsx)(a.xv,{variant:"small",textAlign:"center",color:"inherit",children:d("account_list.card")})}):(0,f.jsx)(a.xu,{className:"".concat(s," ").concat(r),children:(0,f.jsx)(a.xv,{variant:"small",textAlign:"center",color:"inherit",children:d("account_list.cash")})}),(0,f.jsxs)(a.xu,{children:[(0,f.jsx)(a.xv,{variant:"regular",className:"text-dark",textAlign:"left",children:t.label}),(0,f.jsxs)(a.xv,{variant:"small",textAlign:"left",className:"text-light",children:[d("account_list.balance"),": \xa0",(0,o.Lt)(t)?"".concat(t.cryptoBalance," ").concat(t.currency):(0,o.OH)(t.availableBalance,t.currency)]})]})]})})}},5808:function(n,t,e){e.d(t,{$N:function(){return s},Ny:function(){return o},T8:function(){return i},Z2:function(){return c}});var a=e(3152),c=function(n){return{type:a.km,payload:n}},o=function(n){return{type:a.z0,payload:n}},i=function(n){return{type:a.KY,payload:n}},s=function(n){return{type:a.fY,payload:n}}},2966:function(n,t,e){e.d(t,{D0:function(){return o},G7:function(){return c},dz:function(){return i}});var a=e(4199),c=function(n){return{type:a.a2,payload:n}},o=function(n){return{type:a.Su,payload:n}},i=function(n){return{type:a.$q,payload:n}}},9270:function(n,t,e){e.d(t,{Am:function(){return r},NB:function(){return u},RG:function(){return d},XD:function(){return h},gb:function(){return f},lM:function(){return l},mi:function(){return s},vd:function(){return p},zL:function(){return i}});var a=e(80),c=e(286),o=e(5808),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(e){return new Promise((function(i,s){(0,a.V_)(!0);var r="v1/business?include=accounts&limit=".concat(n,"&offset=").concat(t);c.Z.get(r).then((function(n){var t=n.data;e((0,o.Z2)(t.data)),i(t)})).catch((function(n){n.response&&n.response.data?s(n.response.data):s(n)})).finally((function(){(0,a.V_)(!1)}))}))}},s=function(n){return function(t){return new Promise((function(e,i){(0,a.V_)(!0),c.Z.post("v1/business",n).then((function(n){var a=n.data;t((0,o.Ny)(a)),e(a)})).catch((function(n){n.response&&n.response.data?i(n.response.data):i(n)})).finally((function(){(0,a.V_)(!1)}))}))}},r=function(n,t){return function(e){return new Promise((function(i,s){(0,a.V_)(!0),c.Z.patch("v1/business/".concat(n),t).then((function(n){var t=n.data;e((0,o.Ny)(t)),i(t)})).catch((function(n){n.response&&n.response.data?s(n.response.data):s(n)})).finally((function(){(0,a.V_)(!1)}))}))}},u=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(){return new Promise((function(e,o){t&&(0,a.V_)(!0);var i="v1/business/".concat(n);c.Z.get(i).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?o(n.response.data):o(n)})).finally((function(){t&&(0,a.V_)(!1)}))}))}},l=function(n){return function(t){return new Promise((function(e,i){(0,a.V_)(!0),c.Z.get("v1/owner?businessId=".concat(n)).then((function(n){var a=n.data;t((0,o.T8)(a.data)),e(a)})).catch((function(n){n.response&&n.response.data?i(n.response.data):i(n)})).finally((function(){(0,a.V_)(!1)}))}))}},f=function(n){return function(){return new Promise((function(t,e){(0,a.V_)(!0),c.Z.post("v1/business/".concat(n,"/kyb"),{businessId:n}).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?e(n.response.data):e(n)})).finally((function(){(0,a.V_)(!1)}))}))}},d=function(n,t){return function(){return new Promise((function(e,o){(0,a.V_)(!0),c.Z.patch("v1/owner/".concat(n),t).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?o(n.response.data):o(n)})).finally((function(){(0,a.V_)(!1)}))}))}},p=function(n){return function(){return new Promise((function(t,e){(0,a.V_)(!0),c.Z.post("v1/owner",n).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?e(n.response.data):e(n)})).finally((function(){(0,a.V_)(!1)}))}))}},h=function(n){return function(){return new Promise((function(t,e){(0,a.V_)(!0),c.Z.post("v1/owner/".concat(n,"/kyc")).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?e(n.response.data):e(n)})).finally((function(){(0,a.V_)(!1)}))}))}}},3717:function(n,t,e){e.d(t,{Qi:function(){return i},_Y:function(){return r},k4:function(){return s}});var a=e(286),c=e(80),o=e(2966),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return function(s){return new Promise((function(r,u){(0,c.V_)(!0);var l="v1/crypto?limit=".concat(e,"&offset=").concat(i);n&&(l+="&businessId=".concat(n)),"all"!==t&&(l+="&type=".concat(t)),a.Z.get(l).then((function(n){var t=n.data;s((0,o.G7)(t)),r(t)})).catch((function(n){n.response&&n.response.data?u(n.response.data):u(n)})).finally((function(){(0,c.V_)(!1)}))}))}},s=function(n){return function(){return new Promise((function(t,e){(0,c.V_)(!0),a.Z.post("v1/crypto",n).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?e(n.response.data):e(n)})).finally((function(){(0,c.V_)(!1)}))}))}},r=function(){return function(n){return new Promise((function(t,e){(0,c.V_)(!0),a.Z.get("v1/crypto/currency").then((function(e){var a=e.data;n((0,o.dz)(a)),t(a)})).catch((function(n){n.response&&n.response.data?e(n.response.data):e(n)})).finally((function(){(0,c.V_)(!1)}))}))}}},9510:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var a=e(1413),c=e(9439),o=e(2791),i=e(2504),s=e(8735),r=e(2020),u=e(5048),l=e(7689),f=e(5649),d=e(5304),p=e(3741),h=e(9270),v=e(1458),x=e(80),y=e(2249),g=e(3717),m=e(2966),_=e(4144),b="List_bodyStyles__+-493",j=e(5808),I=e(184),k=function(){var n=(0,r.$)().t,t=(0,l.s0)(),e=(0,d.Qo)(),k=(0,d.CG)((function(n){return n.user.personDetails}),u.wU),w=(0,o.useState)([]),V=(0,c.Z)(w,2),Z=V[0],A=V[1],C=(0,o.useState)(!1),N=(0,c.Z)(C,2),L=N[0],B=N[1],P=(0,d.CG)((function(n){return n.core.programConfig}),u.wU),z=(0,d.CG)((function(n){return n.account.totalAccounts})),D=(0,o.useState)("cash"),S=(0,c.Z)(D,1)[0],G=(0,o.useCallback)((function(){e((0,h.zL)()).then((function(n){var t=n.data,c={personChecking:{id:"personChecking",legalName:"".concat(null===k||void 0===k?void 0:k.firstName," ").concat(null===k||void 0===k?void 0:k.lastName),totalBalance:0,total:0}};t.forEach((function(n){c[n.id]=(0,a.Z)((0,a.Z)({},n),{},{accounts:[],totalBalance:0,total:0})})),"cash"===S?e((0,p.Sg)(null,"all",50)).then((function(n){n.data.forEach((function(n){var t=(0,a.Z)({},n);""===t.businessId&&(t.businessId="personChecking"),c[t.businessId]&&(void 0===c[t.businessId].accounts&&(c[t.businessId].accounts=[]),c[t.businessId].accounts.push(t),c[t.businessId].total+=1,c[t.businessId].totalBalance+=parseFloat(t.availableBalance))})),A(Object.values(c)),e((0,v.sF)(c))})).catch(x.WH).finally((function(){B(!0)})):"crypto"===S&&e((0,g.Qi)(null,"all",50)).then((function(n){n.data.forEach((function(n){var t=(0,a.Z)({},n);""===t.businessId&&(t.businessId="personChecking"),c[t.businessId]&&(void 0===c[t.businessId].accounts&&(c[t.businessId].accounts=[]),c[t.businessId].accounts.push(t),c[t.businessId].total+=1,c[t.businessId].totalBalance+=parseFloat(t.usdBalance))})),A(Object.values(c)),e((0,v.sF)(c))})).catch(x.WH).finally((function(){B(!0)}))})).catch(x.WH)}),[S]);(0,o.useEffect)((function(){G()}),[S]);var H=(0,o.useMemo)((function(){try{var n,t,e,a;return parseInt(null===P||void 0===P||null===(n=P.bank)||void 0===n||null===(t=n.maxAccounts)||void 0===t?void 0:t.personal,10)+parseInt(null===P||void 0===P||null===(e=P.bank)||void 0===e||null===(a=e.maxAccounts)||void 0===a?void 0:a.business,10)}catch(c){return-1}}),[P]);return(0,I.jsx)("div",{className:"page",children:(0,I.jsx)(f.Z,{varient:"box",showBack:!0,bodyClass:b,onBack:function(){t(-1)},footer:-1===H||H>z?(0,I.jsx)(i.zx,{width:"100%",variant:"primary",onClick:function(){t("/ao/account/setup-options")},children:n("account_list.buttn_addAccount")}):null,children:(0,I.jsx)(s.xu,{width:"100%",children:0===Z.length&&L?(0,I.jsx)(s.M5,{py:2,children:(0,I.jsx)(s.xv,{variant:"regular",textAlign:"center",className:"text-light",children:n("account_list.noData","No Account found")})}):Z.map((function(a,c){var o;return""!==a.legalName&&a.total>0?(0,I.jsxs)(s.xu,{paddingTop:0!==c?"30px":"0",children:[(0,I.jsxs)(s.kC,{justifyContent:"space-between",marginBottom:"16px",children:[(0,I.jsxs)(s.xu,{children:[(0,I.jsx)(s.xv,{variant:"regular",fontWeight:"500",display:"block",textAlign:"left",children:a.legalName}),(0,I.jsxs)(s.xv,{variant:"small",display:"block",textAlign:"left",children:[a.total," ",n("account_list.accounts")]})]}),(0,I.jsxs)(s.xu,{children:[(0,I.jsx)(s.xv,{display:"block",variant:"regular",textAlign:"right",className:"text-dark",children:(0,x.OH)(a.totalBalance)}),a.total>2?(0,I.jsxs)(s.kC,{alignItems:"center",cursor:"pointer",justifyContent:"flex-end",onClick:function(){t("/ao/account/list-by-business/".concat(a.id))},children:[(0,I.jsx)(s.xv,{textAlign:"right",display:"block",variant:"regular",className:"text-light",children:n("account_list.viewAll")}),(0,I.jsx)(_.Z,{icon:"Arrow-small-right",size:11,style:{marginLeft:"8px",width:"auto"},className:"svg-light-grey-1"})]}):null]})]}),(0,I.jsx)(s.aV,{children:null===(o=a.accounts)||void 0===o?void 0:o.slice(0,2).map((function(n){return(0,I.jsx)(y.Z,{accountDetails:n,onSelect:function(n){"crypto"===S&&(0,x.Lt)(n)?e((0,m.D0)(n)):(0,x.Lt)(n)||e((0,v.se)(n)),e((0,v.Uw)(S)),e((0,j.Ny)(a)),t("/dashboard")}},n.id)}))})]},a.legalName):null}))})})})}}}]);
//# sourceMappingURL=9510.5c6aa685.chunk.js.map