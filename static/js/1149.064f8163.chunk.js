"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[1149],{1059:function(n,e,t){var s=t(2791),a=t(9259),r=t(184),i=function(n){var e=n.address,t=n.zoom,a=(0,s.useRef)(null);return(0,s.useEffect)((function(){a.current&&(new window.google.maps.Geocoder).geocode({address:e},(function(n,e){if(e===window.google.maps.GeocoderStatus.OK&&n&&0!==n.length){var s=n[0].geometry.location.lat(),r=n[0].geometry.location.lng();if(a.current){var i=new window.google.maps.Map(a.current,{center:{lat:s,lng:r},zoom:t});new window.google.maps.Marker({position:{lat:s,lng:r},map:i,title:"Hello World!"})}}}))}),[e]),(0,r.jsx)("div",{ref:a,id:"map",style:{height:"100%"}})},o=function(n){return n===a.Status.FAILURE?(0,r.jsx)(r.Fragment,{children:"..."}):(0,r.jsx)(r.Fragment,{children:"...."})};e.Z=function(n){var e=n.address,t=n.zoom,s=n.apiKey;return(0,r.jsx)(a.Wrapper,{apiKey:s,render:o,children:(0,r.jsx)(i,{address:e,zoom:t})})}},5808:function(n,e,t){t.d(e,{$N:function(){return o},Ny:function(){return r},T8:function(){return i},Z2:function(){return a}});var s=t(3152),a=function(n){return{type:s.km,payload:n}},r=function(n){return{type:s.z0,payload:n}},i=function(n){return{type:s.KY,payload:n}},o=function(n){return{type:s.fY,payload:n}}},9270:function(n,e,t){t.d(e,{Am:function(){return c},NB:function(){return l},RG:function(){return f},XD:function(){return h},gb:function(){return d},lM:function(){return u},mi:function(){return o},vd:function(){return x},zL:function(){return i}});var s=t(80),a=t(286),r=t(5808),i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(t){return new Promise((function(i,o){(0,s.V_)(!0);var c="v1/business?include=accounts&limit=".concat(n,"&offset=").concat(e);a.Z.get(c).then((function(n){var e=n.data;t((0,r.Z2)(e.data)),i(e)})).catch((function(n){n.response&&n.response.data?o(n.response.data):o(n)})).finally((function(){(0,s.V_)(!1)}))}))}},o=function(n){return function(e){return new Promise((function(t,i){(0,s.V_)(!0),a.Z.post("v1/business",n).then((function(n){var s=n.data;e((0,r.Ny)(s)),t(s)})).catch((function(n){n.response&&n.response.data?i(n.response.data):i(n)})).finally((function(){(0,s.V_)(!1)}))}))}},c=function(n,e){return function(t){return new Promise((function(i,o){(0,s.V_)(!0),a.Z.patch("v1/business/".concat(n),e).then((function(n){var e=n.data;t((0,r.Ny)(e)),i(e)})).catch((function(n){n.response&&n.response.data?o(n.response.data):o(n)})).finally((function(){(0,s.V_)(!1)}))}))}},l=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(){return new Promise((function(t,r){e&&(0,s.V_)(!0);var i="v1/business/".concat(n);a.Z.get(i).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?r(n.response.data):r(n)})).finally((function(){e&&(0,s.V_)(!1)}))}))}},u=function(n){return function(e){return new Promise((function(t,i){(0,s.V_)(!0),a.Z.get("v1/owner?businessId=".concat(n)).then((function(n){var s=n.data;e((0,r.T8)(s.data)),t(s)})).catch((function(n){n.response&&n.response.data?i(n.response.data):i(n)})).finally((function(){(0,s.V_)(!1)}))}))}},d=function(n){return function(){return new Promise((function(e,t){(0,s.V_)(!0),a.Z.post("v1/business/".concat(n,"/kyb"),{businessId:n}).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?t(n.response.data):t(n)})).finally((function(){(0,s.V_)(!1)}))}))}},f=function(n,e){return function(){return new Promise((function(t,r){(0,s.V_)(!0),a.Z.patch("v1/owner/".concat(n),e).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?r(n.response.data):r(n)})).finally((function(){(0,s.V_)(!1)}))}))}},x=function(n){return function(){return new Promise((function(e,t){(0,s.V_)(!0),a.Z.post("v1/owner",n).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?t(n.response.data):t(n)})).finally((function(){(0,s.V_)(!1)}))}))}},h=function(n){return function(){return new Promise((function(e,t){(0,s.V_)(!0),a.Z.post("v1/owner/".concat(n,"/kyc")).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?t(n.response.data):t(n)})).finally((function(){(0,s.V_)(!1)}))}))}}},8421:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var s=t(9439),a=t(2791),r=t(2020),i=t(8735),o=t(5048),c=t(4144),l="BusinessDetails_pageBg__30Yoy",u="BusinessDetails_otherDetails__HXqBg",d="BusinessDetails_otherDetailsInfo__-aGvz",f="BusinessDetails_otherDetailsInfo1__dk4KJ",x="BusinessDetails_otherDetailsInfoLabel__6iyuF",h="BusinessDetails_otherDetailsInfoValue__CpB8X",g="BusinessDetails_otherDetailsInfoValue1__hxVCF",p="BusinessDetails_statement__IE6XO",v="BusinessDetails_location__map__fClzQ",m=t(5304),_=t(5649),j=t(6559),y=t(9270),b=t(3741),N=t(80),w=t(1059),V=t(4661),Z=t(184),A=function(){var n=(0,r.$)().t,e=(0,m.Qo)(),t=(0,a.useState)(null),A=(0,s.Z)(t,2),B=A[0],D=A[1],z=(0,m.CG)((function(n){return n.account.accounts}),o.wU),k=(0,V.y)().data,I=null===k||void 0===k?void 0:k.id,C=(0,a.useMemo)((function(){if(B){var n=B.address;return n?"".concat(B.address.line1,", ").concat(B.address.line2,", ").concat(B.address.city,", ").concat(B.address.state,", ").concat(n.country):""}return""}),[B]);return(0,a.useEffect)((function(){I&&(e((0,y.NB)(I)).then((function(n){D(n)})).catch(N.WH),e((0,b.Sg)(I)).catch(N.WH))}),[I]),(0,Z.jsx)("div",{className:"".concat(l," page"),children:B?(0,Z.jsx)(_.Z,{heading:n("business_profile.title"),children:(0,Z.jsxs)(i.xu,{width:"100%",paddingTop:"15px",children:[(0,Z.jsx)(i.xv,{variant:"large",children:n("business_profile.profile")}),(0,Z.jsxs)(i.xu,{className:u,children:[(0,Z.jsxs)(i.xu,{className:d,children:[(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:"".concat(x," text-light"),children:n("business_profile.name")}),(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:h,children:B.legalName})]}),(0,Z.jsxs)(i.xu,{className:d,children:[(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:"".concat(x," text-light"),children:n("business_profile.dba")}),(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:h,children:B.dba})]})]}),(0,Z.jsx)(i.xv,{variant:"large",children:n("business_profile.accounts")}),(0,Z.jsx)(i.xu,{className:u,children:z.map((function(n,e){return(0,Z.jsx)(i.xu,{borderBottom:e===z.length-1?"none":"1px solid var(--border-color-1)",children:(0,Z.jsxs)(i.xu,{className:d,children:[(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:h,children:n.label}),(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:"".concat(x," text-light"),children:n.accountNumber})]})},"account-".concat(n.id))}))}),(0,Z.jsx)(i.xv,{variant:"large",mb:"16px",children:n("business_profile.actions")}),(0,Z.jsxs)(i.xu,{marginBottom:"32px",children:[(0,Z.jsx)(i.xu,{role:"button",onClick:function(){(0,N.Z4)()},children:(0,Z.jsxs)(i.Ug,{className:p,children:[(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",children:n("business_profile.help")}),(0,Z.jsx)(c.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})}),(0,Z.jsx)(i.xu,{role:"button",onClick:function(){(0,N.W5)()},children:(0,Z.jsxs)(i.Ug,{className:p,children:[(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",children:n("business_profile.getInTouch")}),(0,Z.jsx)(c.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})}),(0,Z.jsx)(i.xu,{role:"button",onClick:function(){(0,N.de)()},children:(0,Z.jsxs)(i.Ug,{className:p,children:[(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",children:n("business_profile.disclosures")}),(0,Z.jsx)(c.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})})]}),(0,Z.jsx)(i.xv,{variant:"large",mb:"16px",children:n("business_profile.location")}),(0,Z.jsxs)(i.xu,{className:u,children:[(0,Z.jsx)(i.xu,{className:v,children:(0,Z.jsx)(w.Z,{zoom:7,apiKey:"AIzaSyDcW61NFxklslLuuUxNw0SzoBmHyC4Zhh4",address:C})}),(0,Z.jsxs)(i.xu,{className:f,borderBottom:"1px solid var(--border-color-1)",children:[(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:"text-light",children:n("business_profile.address")}),(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:g,children:"".concat(B.address.line1," ").concat(B.address.line2," ").concat(B.address.city," ").concat(B.address.state)})]}),(0,Z.jsxs)(i.xu,{className:f,children:[(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:"text-light",children:n("business_profile.country")}),(0,Z.jsx)(i.xv,{variant:"regular",textAlign:"left",className:g,children:B.address.country})]})]})]})}):(0,Z.jsx)(j.Z,{name:"AccountDetails"})})}}}]);
//# sourceMappingURL=1149.064f8163.chunk.js.map