"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[226],{5808:function(n,e,t){t.d(e,{$N:function(){return o},Ny:function(){return i},T8:function(){return s},Z2:function(){return r}});var a=t(3152),r=function(n){return{type:a.km,payload:n}},i=function(n){return{type:a.z0,payload:n}},s=function(n){return{type:a.KY,payload:n}},o=function(n){return{type:a.fY,payload:n}}},9270:function(n,e,t){t.d(e,{Am:function(){return u},NB:function(){return c},RG:function(){return p},XD:function(){return h},gb:function(){return l},lM:function(){return d},mi:function(){return o},vd:function(){return f},zL:function(){return s}});var a=t(80),r=t(286),i=t(5808),s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(t){return new Promise((function(s,o){(0,a.V_)(!0);var u="v1/business?include=accounts&limit=".concat(n,"&offset=").concat(e);r.Z.get(u).then((function(n){var e=n.data;t((0,i.Z2)(e.data)),s(e)})).catch((function(n){n.response&&n.response.data?o(n.response.data):o(n)})).finally((function(){(0,a.V_)(!1)}))}))}},o=function(n){return function(e){return new Promise((function(t,s){(0,a.V_)(!0),r.Z.post("v1/business",n).then((function(n){var a=n.data;e((0,i.Ny)(a)),t(a)})).catch((function(n){n.response&&n.response.data?s(n.response.data):s(n)})).finally((function(){(0,a.V_)(!1)}))}))}},u=function(n,e){return function(t){return new Promise((function(s,o){(0,a.V_)(!0),r.Z.patch("v1/business/".concat(n),e).then((function(n){var e=n.data;t((0,i.Ny)(e)),s(e)})).catch((function(n){n.response&&n.response.data?o(n.response.data):o(n)})).finally((function(){(0,a.V_)(!1)}))}))}},c=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(){return new Promise((function(t,i){e&&(0,a.V_)(!0);var s="v1/business/".concat(n);r.Z.get(s).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?i(n.response.data):i(n)})).finally((function(){e&&(0,a.V_)(!1)}))}))}},d=function(n){return function(e){return new Promise((function(t,s){(0,a.V_)(!0),r.Z.get("v1/owner?businessId=".concat(n)).then((function(n){var a=n.data;e((0,i.T8)(a.data)),t(a)})).catch((function(n){n.response&&n.response.data?s(n.response.data):s(n)})).finally((function(){(0,a.V_)(!1)}))}))}},l=function(n){return function(){return new Promise((function(e,t){(0,a.V_)(!0),r.Z.post("v1/business/".concat(n,"/kyb"),{businessId:n}).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?t(n.response.data):t(n)})).finally((function(){(0,a.V_)(!1)}))}))}},p=function(n,e){return function(){return new Promise((function(t,i){(0,a.V_)(!0),r.Z.patch("v1/owner/".concat(n),e).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?i(n.response.data):i(n)})).finally((function(){(0,a.V_)(!1)}))}))}},f=function(n){return function(){return new Promise((function(e,t){(0,a.V_)(!0),r.Z.post("v1/owner",n).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?t(n.response.data):t(n)})).finally((function(){(0,a.V_)(!1)}))}))}},h=function(n){return function(){return new Promise((function(e,t){(0,a.V_)(!0),r.Z.post("v1/owner/".concat(n,"/kyc")).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?t(n.response.data):t(n)})).finally((function(){(0,a.V_)(!1)}))}))}}},226:function(n,e,t){t.r(e);var a=t(1413),r=t(9439),i=t(2791),s=t(2020),o=t(1938),u=t(2504),c=t(8735),d=t(3393),l=t(5798),p=t(5048),f=t(7689),h=t(5649),m=t(5304),v=t(5919),y=t(9270),g=t(80),_=t(184);e.default=function(){var n=(0,s.$)().t,e=(0,f.s0)(),t=(0,m.Qo)(),b=(0,o.mq)("FormControl",{variant:"primary"}),I=(0,m.CG)((function(n){return n.business.selectedBusiness}),p.wU),x=(0,i.useState)({line1:"",line2:"",city:"",state:"",country:"",postalCode:"",addressType:"legal"}),N=(0,r.Z)(x,2),j=N[0],E=N[1],Z=(0,i.useMemo)((function(){return j.line1&&j.city&&j.state&&j.country&&j.postalCode&&0!==j.line1.length&&0!==j.city.length&&0!==j.state.length&&0!==j.country.length&&0!==j.postalCode.length}),[j]);(0,i.useEffect)((function(){null!==I&&void 0!==I&&I.address&&E(I.address)}),[]);var w=(0,i.useCallback)((function(){null!==I&&void 0!==I&&I.id&&Z&&t((0,y.Am)(null===I||void 0===I?void 0:I.id,{address:j})).then((function(){t((0,y.gb)(I.id)).then((function(){e("/ao/kyb/review")})).catch(g.WH)})).catch(g.WH)}),[j,I,Z]);return(0,_.jsx)("div",{className:"page",children:(0,_.jsx)("form",{onSubmit:function(n){n.preventDefault(),w()},children:(0,_.jsx)(h.Z,{varient:"box",heading:n("business_address.title"),footer:(0,_.jsx)(u.zx,{"data-testid":"submit-btn",width:"100%",variant:"primary",type:"submit",disabled:!Z,children:n("business_address.ctaText")}),children:(0,_.jsxs)(c.xu,{width:"100%",children:[(0,_.jsxs)(d.NI,{variant:"primary",style:b,children:[(0,_.jsx)(d.lX,{variant:"primary",children:n("business_address.address1")}),(0,_.jsx)(v.Z,{googleApiKey:"AIzaSyDcW61NFxklslLuuUxNw0SzoBmHyC4Zhh4",address:j||void 0,placeholder:n("business_address.address1"),onChange:function(n){E((0,a.Z)((0,a.Z)({},n),{},{addressType:"legal"}))}})]}),(0,_.jsxs)(d.NI,{variant:"primary",style:b,children:[(0,_.jsx)(d.lX,{variant:"primary",children:n("business_address.address2")}),(0,_.jsx)(l.II,{"data-testid":"address-line2",value:j.line2,onChange:function(n){E((0,a.Z)((0,a.Z)({},j),{},{line2:n.target.value}))},placeholder:n("business_address.address2"),variant:"primary"})]}),(0,_.jsxs)(d.NI,{variant:"primary",style:b,children:[(0,_.jsx)(d.lX,{variant:"primary",children:n("business_address.addressCity")}),(0,_.jsx)(l.II,{"data-testid":"address-city",value:j.city,onChange:function(n){E((0,a.Z)((0,a.Z)({},j),{},{city:n.target.value}))},placeholder:n("business_address.addressCity"),variant:"primary"})]}),(0,_.jsxs)(d.NI,{variant:"primary",style:b,children:[(0,_.jsx)(d.lX,{variant:"primary",children:n("business_address.addressState")}),(0,_.jsx)(l.II,{value:j.state,"data-testid":"address-state",onChange:function(n){E((0,a.Z)((0,a.Z)({},j),{},{state:n.target.value}))},placeholder:n("business_address.addressState"),variant:"primary"})]}),(0,_.jsxs)(d.NI,{variant:"primary",style:b,children:[(0,_.jsx)(d.lX,{variant:"primary",children:n("business_address.addressZipcode")}),(0,_.jsx)(l.II,{value:j.postalCode,"data-testid":"address-zipcode",onChange:function(n){E((0,a.Z)((0,a.Z)({},j),{},{postalCode:n.target.value}))},placeholder:n("business_address.addressZipcode"),variant:"primary"})]})]})})})})}},5798:function(n,e,t){t.d(e,{II:function(){return l}});var a=t(3393),r=t(1938),i=t(6831),s=t(2791),o=t(9611);function u(){return u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},u.apply(this,arguments)}function c(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}var d=["htmlSize"],l=(0,r.Gp)((function(n,e){var t=n.htmlSize,o=c(n,d),l=(0,r.jC)("Input",o),p=(0,r.Lr)(o),f=(0,a.Yp)(p),h=(0,i.cx)("chakra-input",n.className);return s.createElement(r.m$.input,u({size:t},f,{__css:l.field,ref:e,className:h}))}));i.Ts&&(l.displayName="Input"),l.id="Input";var p=["children","className"],f=(0,r.eC)("InputGroup"),h=f[0],m=f[1],v=(0,r.Gp)((function(n,e){var t=(0,r.jC)("Input",n),a=(0,r.Lr)(n),d=a.children,l=a.className,f=c(a,p),m=(0,i.cx)("chakra-input__group",l),v={},y=(0,o.WR)(d),g=t.field;y.forEach((function(n){if(t){var e,a;if(g&&"InputLeftElement"===n.type.id)v.paddingStart=null!=(e=g.height)?e:g.h;if(g&&"InputRightElement"===n.type.id)v.paddingEnd=null!=(a=g.height)?a:g.h;"InputRightAddon"===n.type.id&&(v.borderEndRadius=0),"InputLeftAddon"===n.type.id&&(v.borderStartRadius=0)}}));var _=y.map((function(e){var t,a,r=(0,i.YU)({size:(null==(t=e.props)?void 0:t.size)||n.size,variant:(null==(a=e.props)?void 0:a.variant)||n.variant});return"Input"!==e.type.id?s.cloneElement(e,r):s.cloneElement(e,Object.assign(r,v,e.props))}));return s.createElement(r.m$.div,u({className:m,ref:e,__css:{width:"100%",display:"flex",position:"relative"}},f),s.createElement(h,{value:t},_))}));i.Ts&&(v.displayName="InputGroup");var y=["placement"],g={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},_=(0,r.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),b=(0,r.Gp)((function(n,e){var t,a=n.placement,r=void 0===a?"left":a,i=c(n,y),o=null!=(t=g[r])?t:{},d=m();return s.createElement(_,u({ref:e},i,{__css:u({},d.addon,o)}))}));i.Ts&&(b.displayName="InputAddon");var I=(0,r.Gp)((function(n,e){return s.createElement(b,u({ref:e,placement:"left"},n,{className:(0,i.cx)("chakra-input__left-addon",n.className)}))}));i.Ts&&(I.displayName="InputLeftAddon"),I.id="InputLeftAddon";var x=(0,r.Gp)((function(n,e){return s.createElement(b,u({ref:e,placement:"right"},n,{className:(0,i.cx)("chakra-input__right-addon",n.className)}))}));i.Ts&&(x.displayName="InputRightAddon"),x.id="InputRightAddon";var N=["placement"],j=["className"],E=["className"],Z=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),w=(0,r.Gp)((function(n,e){var t,a,r,i=n.placement,o=void 0===i?"left":i,d=c(n,N),l=m(),p=l.field,f=u(((r={})["left"===o?"insetStart":"insetEnd"]="0",r.width=null!=(t=null==p?void 0:p.height)?t:null==p?void 0:p.h,r.height=null!=(a=null==p?void 0:p.height)?a:null==p?void 0:p.h,r.fontSize=null==p?void 0:p.fontSize,r),l.element);return s.createElement(Z,u({ref:e,__css:f},d))}));w.id="InputElement",i.Ts&&(w.displayName="InputElement");var C=(0,r.Gp)((function(n,e){var t=n.className,a=c(n,j),r=(0,i.cx)("chakra-input__left-element",t);return s.createElement(w,u({ref:e,placement:"left",className:r},a))}));C.id="InputLeftElement",i.Ts&&(C.displayName="InputLeftElement");var S=(0,r.Gp)((function(n,e){var t=n.className,a=c(n,E),r=(0,i.cx)("chakra-input__right-element",t);return s.createElement(w,u({ref:e,placement:"right",className:r},a))}));S.id="InputRightElement",i.Ts&&(S.displayName="InputRightElement")}}]);
//# sourceMappingURL=226.c699eb6f.chunk.js.map