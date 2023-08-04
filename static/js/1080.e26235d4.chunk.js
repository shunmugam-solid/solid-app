"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[1080],{5744:function(n,t,e){e(2791);var r=e(5798),a=e(184);t.Z=function(n){var t=n.value,e=n.placeholder,i=n.onChange;return(0,a.jsx)(r.II,{type:"number",variant:"primary",value:t,"data-testid":"percentage-input",placeholder:e,onChange:function(n){if(!n.target.value.startsWith("0")){var t=parseInt(n.target.value);if(!(t>100)){var e=!Number.isNaN(t)&&t>25;i(t,e)}}}})}},5808:function(n,t,e){e.d(t,{$N:function(){return s},Ny:function(){return i},T8:function(){return o},Z2:function(){return a}});var r=e(3152),a=function(n){return{type:r.km,payload:n}},i=function(n){return{type:r.z0,payload:n}},o=function(n){return{type:r.KY,payload:n}},s=function(n){return{type:r.fY,payload:n}}},9270:function(n,t,e){e.d(t,{Am:function(){return u},NB:function(){return c},RG:function(){return f},XD:function(){return h},gb:function(){return d},lM:function(){return l},mi:function(){return s},vd:function(){return p},zL:function(){return o}});var r=e(80),a=e(286),i=e(5808),o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(e){return new Promise((function(o,s){(0,r.V_)(!0);var u="v1/business?include=accounts&limit=".concat(n,"&offset=").concat(t);a.Z.get(u).then((function(n){var t=n.data;e((0,i.Z2)(t.data)),o(t)})).catch((function(n){n.response&&n.response.data?s(n.response.data):s(n)})).finally((function(){(0,r.V_)(!1)}))}))}},s=function(n){return function(t){return new Promise((function(e,o){(0,r.V_)(!0),a.Z.post("v1/business",n).then((function(n){var r=n.data;t((0,i.Ny)(r)),e(r)})).catch((function(n){n.response&&n.response.data?o(n.response.data):o(n)})).finally((function(){(0,r.V_)(!1)}))}))}},u=function(n,t){return function(e){return new Promise((function(o,s){(0,r.V_)(!0),a.Z.patch("v1/business/".concat(n),t).then((function(n){var t=n.data;e((0,i.Ny)(t)),o(t)})).catch((function(n){n.response&&n.response.data?s(n.response.data):s(n)})).finally((function(){(0,r.V_)(!1)}))}))}},c=function(n){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return function(){return new Promise((function(e,i){t&&(0,r.V_)(!0);var o="v1/business/".concat(n);a.Z.get(o).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?i(n.response.data):i(n)})).finally((function(){t&&(0,r.V_)(!1)}))}))}},l=function(n){return function(t){return new Promise((function(e,o){(0,r.V_)(!0),a.Z.get("v1/owner?businessId=".concat(n)).then((function(n){var r=n.data;t((0,i.T8)(r.data)),e(r)})).catch((function(n){n.response&&n.response.data?o(n.response.data):o(n)})).finally((function(){(0,r.V_)(!1)}))}))}},d=function(n){return function(){return new Promise((function(t,e){(0,r.V_)(!0),a.Z.post("v1/business/".concat(n,"/kyb"),{businessId:n}).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?e(n.response.data):e(n)})).finally((function(){(0,r.V_)(!1)}))}))}},f=function(n,t){return function(){return new Promise((function(e,i){(0,r.V_)(!0),a.Z.patch("v1/owner/".concat(n),t).then((function(n){var t=n.data;e(t)})).catch((function(n){n.response&&n.response.data?i(n.response.data):i(n)})).finally((function(){(0,r.V_)(!1)}))}))}},p=function(n){return function(){return new Promise((function(t,e){(0,r.V_)(!0),a.Z.post("v1/owner",n).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?e(n.response.data):e(n)})).finally((function(){(0,r.V_)(!1)}))}))}},h=function(n){return function(){return new Promise((function(t,e){(0,r.V_)(!0),a.Z.post("v1/owner/".concat(n,"/kyc")).then((function(n){var e=n.data;t(e)})).catch((function(n){n.response&&n.response.data?e(n.response.data):e(n)})).finally((function(){(0,r.V_)(!1)}))}))}}},1080:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r=e(9439),a=e(2791),i=e(2020),o=e(1938),s=e(8735),u=e(2504),c=e(9743),l=e(3393),d=e(5048),f=e(7689),p=e(5649),h="YourOwnerShip_sendByCardContainer__J1tVm",m=e(5304),v=e(9270),y=e(80),g=e(5744),_=e(184),x=function(){var n=(0,i.$)().t,t=(0,f.s0)(),e=(0,a.useState)(!1),x=(0,r.Z)(e,2),b=x[0],w=x[1],N=(0,a.useState)(""),I=(0,r.Z)(N,2),E=I[0],j=I[1],C=(0,m.Qo)(),V=(0,o.mq)("FormControl",{variant:"primary"}),k=(0,m.CG)((function(n){return n.business}),d.wU),S=k.owners,Z=k.selectedBusiness,G=(0,a.useMemo)((function(){return!b||!Number.isNaN(E)&&""!==E&&E>=25&&E<=100}),[E,b]);(0,a.useEffect)((function(){Z&&C((0,v.lM)(Z.id))}),[Z]),(0,a.useEffect)((function(){0!==S.length&&parseInt(S[0].ownership)>=25&&(w(!0),j(parseInt(S[0].ownership)))}),[S]);var R=(0,a.useCallback)((function(){0!==S.length&&G&&C((0,v.RG)(S[0].id,{ownership:"".concat(b?E:0)})).then((function(){t("/ao/kyb/ownersList")})).catch(y.WH)}),[E,S,b,G]);return(0,_.jsx)("div",{className:"page",children:(0,_.jsx)("form",{onSubmit:function(n){n.preventDefault(),R()},children:(0,_.jsx)(p.Z,{varient:"box",heading:n("your_ownership.title"),footer:(0,_.jsxs)(s.xu,{children:[(0,_.jsx)(s.xv,{variant:"small",pb:"16px",children:n("your_ownership.toHelp")}),(0,_.jsx)(u.zx,{"data-testid":"submit-btn",disabled:!G,width:"100%",variant:"primary",type:"submit",children:n("your_ownership.ctaText")})]}),children:(0,_.jsxs)(s.xu,{width:"100%",children:[(0,_.jsxs)(s.kC,{className:h,children:[(0,_.jsxs)(s.xu,{children:[(0,_.jsx)(s.xv,{"data-testid":"title",variant:"large",textAlign:"left",children:n("your_ownership.yourOwnership")}),(0,_.jsx)(s.xv,{"data-testid":"description",variant:"regular",pr:"100px",className:"text-light",textAlign:"left",children:n("your_ownership.moreThan25")})]}),(0,_.jsx)(c.r,{"data-testid":"toggle-switch",variant:"primary",id:"send-by-email",isChecked:b,onChange:function(){w(!b)}})]}),b?(0,_.jsxs)(l.NI,{variant:"primary",style:V,children:[(0,_.jsx)(l.lX,{variant:"primary",children:n("your_ownership.enterPercentage")}),(0,_.jsx)(g.Z,{placeholder:"0%",value:E,onChange:j})]}):null]})})})})}},5798:function(n,t,e){e.d(t,{II:function(){return d}});var r=e(3393),a=e(1938),i=e(6831),o=e(2791),s=e(9611);function u(){return u=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},u.apply(this,arguments)}function c(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}var l=["htmlSize"],d=(0,a.Gp)((function(n,t){var e=n.htmlSize,s=c(n,l),d=(0,a.jC)("Input",s),f=(0,a.Lr)(s),p=(0,r.Yp)(f),h=(0,i.cx)("chakra-input",n.className);return o.createElement(a.m$.input,u({size:e},p,{__css:d.field,ref:t,className:h}))}));i.Ts&&(d.displayName="Input"),d.id="Input";var f=["children","className"],p=(0,a.eC)("InputGroup"),h=p[0],m=p[1],v=(0,a.Gp)((function(n,t){var e=(0,a.jC)("Input",n),r=(0,a.Lr)(n),l=r.children,d=r.className,p=c(r,f),m=(0,i.cx)("chakra-input__group",d),v={},y=(0,s.WR)(l),g=e.field;y.forEach((function(n){if(e){var t,r;if(g&&"InputLeftElement"===n.type.id)v.paddingStart=null!=(t=g.height)?t:g.h;if(g&&"InputRightElement"===n.type.id)v.paddingEnd=null!=(r=g.height)?r:g.h;"InputRightAddon"===n.type.id&&(v.borderEndRadius=0),"InputLeftAddon"===n.type.id&&(v.borderStartRadius=0)}}));var _=y.map((function(t){var e,r,a=(0,i.YU)({size:(null==(e=t.props)?void 0:e.size)||n.size,variant:(null==(r=t.props)?void 0:r.variant)||n.variant});return"Input"!==t.type.id?o.cloneElement(t,a):o.cloneElement(t,Object.assign(a,v,t.props))}));return o.createElement(a.m$.div,u({className:m,ref:t,__css:{width:"100%",display:"flex",position:"relative"}},p),o.createElement(h,{value:e},_))}));i.Ts&&(v.displayName="InputGroup");var y=["placement"],g={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},_=(0,a.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),x=(0,a.Gp)((function(n,t){var e,r=n.placement,a=void 0===r?"left":r,i=c(n,y),s=null!=(e=g[a])?e:{},l=m();return o.createElement(_,u({ref:t},i,{__css:u({},l.addon,s)}))}));i.Ts&&(x.displayName="InputAddon");var b=(0,a.Gp)((function(n,t){return o.createElement(x,u({ref:t,placement:"left"},n,{className:(0,i.cx)("chakra-input__left-addon",n.className)}))}));i.Ts&&(b.displayName="InputLeftAddon"),b.id="InputLeftAddon";var w=(0,a.Gp)((function(n,t){return o.createElement(x,u({ref:t,placement:"right"},n,{className:(0,i.cx)("chakra-input__right-addon",n.className)}))}));i.Ts&&(w.displayName="InputRightAddon"),w.id="InputRightAddon";var N=["placement"],I=["className"],E=["className"],j=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),C=(0,a.Gp)((function(n,t){var e,r,a,i=n.placement,s=void 0===i?"left":i,l=c(n,N),d=m(),f=d.field,p=u(((a={})["left"===s?"insetStart":"insetEnd"]="0",a.width=null!=(e=null==f?void 0:f.height)?e:null==f?void 0:f.h,a.height=null!=(r=null==f?void 0:f.height)?r:null==f?void 0:f.h,a.fontSize=null==f?void 0:f.fontSize,a),d.element);return o.createElement(j,u({ref:t,__css:p},l))}));C.id="InputElement",i.Ts&&(C.displayName="InputElement");var V=(0,a.Gp)((function(n,t){var e=n.className,r=c(n,I),a=(0,i.cx)("chakra-input__left-element",e);return o.createElement(C,u({ref:t,placement:"left",className:a},r))}));V.id="InputLeftElement",i.Ts&&(V.displayName="InputLeftElement");var k=(0,a.Gp)((function(n,t){var e=n.className,r=c(n,E),a=(0,i.cx)("chakra-input__right-element",e);return o.createElement(C,u({ref:t,placement:"right",className:a},r))}));k.id="InputRightElement",i.Ts&&(k.displayName="InputRightElement")}}]);
//# sourceMappingURL=1080.e26235d4.chunk.js.map