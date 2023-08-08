"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[4577],{8472:function(e,n,t){t.d(n,{Z:function(){return f}});var a=t(9439),r=t(5987),i=t(1413),l=t(5798),o=t(1951),s=t(2791),u=t(9513),d=t.n(u),c=(t(8639),t(184)),p=["value","onChange"],m=s.forwardRef((function(e,n){return(0,c.jsx)(l.II,(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-testid":"date-input",variant:"primary"}))})),f=function(e){var n=e.value,t=e.onChange,l=(0,r.Z)(e,p),u=(0,s.useState)(n),f=(0,a.Z)(u,2),h=f[0],y=f[1];return(0,s.useEffect)((function(){n&&y((0,o.default)(new Date(n),"MM / dd / yyyy"))}),[n]),(0,c.jsx)(d(),(0,i.Z)((0,i.Z)({},l),{},{customInput:(0,c.jsx)(m,{}),dateFormat:"MM / dd / yyyy",value:h,onChange:function(e,n){e&&y((0,o.default)(e,"MM / dd / yyyy")),t(e,n)}}))}},2795:function(e,n,t){var a=t(2791),r=t(5798),i=t(4398),l=t.n(i),o=t(80),s=t(184),u=function(e){var n=e.onChange,t=e.value,i=e.isLast4,u=e.idType,d=void 0===u?"ssn":u,c=(0,a.useMemo)((function(){var e=o.u0.find((function(e){return e.type===d}));return e?i?e.last4:e.full:i?"9999":"999-99-9999"}),[i,o.u0,d]),p=(0,a.useRef)(null);return(0,a.useLayoutEffect)((function(){p.current&&l()({mask:c,showMaskOnHover:!1,showMaskOnFocus:!1,jitMasking:!0}).mask(p.current)}),[c]),(0,s.jsx)(r.II,{"data-testid":"ssn-input",variant:"primary",ref:p,onChange:function(e){var t,a=i?e.target.value.substring(0,4):e.target.value,r=l().isValid(a,{mask:c}),o=null===(t=p.current)||void 0===t?void 0:t.inputmask.unmaskedvalue();n(a,o,r)},value:t})};u.defaultProps={isLast4:!0},n.Z=u},5808:function(e,n,t){t.d(n,{$N:function(){return o},Ny:function(){return i},T8:function(){return l},Z2:function(){return r}});var a=t(3152),r=function(e){return{type:a.km,payload:e}},i=function(e){return{type:a.z0,payload:e}},l=function(e){return{type:a.KY,payload:e}},o=function(e){return{type:a.fY,payload:e}}},4577:function(e,n,t){t.r(n);var a=t(4942),r=t(1413),i=t(9439),l=t(2791),o=t(2020),s=t(1938),u=t(2504),d=t(8735),c=t(3393),p=t(5798),m=t(7640),f=t(9916),h=(t(7781),t(5048)),y=t(7602),v=t(1951),g=t(7689),b=t(2795),N=t(5649),x=t(8472),w=t(5304),j=t(5808),_=t(80),Z=t(184);n.default=function(){var e=(0,o.$)().t,n=(0,g.s0)(),t=(0,w.Qo)(),C=(0,l.useState)({firstName:"",lastName:"",phone:"",email:"",dateOfBirth:"",idNumber:"",idType:"ssn"}),I=(0,i.Z)(C,2),k=I[0],M=I[1],O=(0,l.useState)(!1),E=(0,i.Z)(O,2),T=E[0],S=E[1],L=(0,s.mq)("Input",{variant:"primary"}),P=(0,w.CG)((function(e){return e.business.selectedBusinessOwner}),h.wU),z=(0,l.useMemo)((function(){return 0!==k.firstName.length&&0!==k.lastName.length&&T&&0!==(null===k||void 0===k?void 0:k.idType.length)&&0!==(null===k||void 0===k?void 0:k.email.length)&&/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(k.email)}),[k,T]);(0,l.useEffect)((function(){P&&(M({firstName:P.person.firstName,lastName:P.person.lastName,email:P.person.email,phone:P.person.phone,dateOfBirth:P.person.dateOfBirth,idNumber:P.person.idNumber,idType:P.person.idType}),0!==P.person.idNumber.length&&S(!0))}),[P]);var B=(0,l.useCallback)((function(e,n){(/^[a-zA-Z\s]+$/.test(n)||""===n)&&M((0,r.Z)((0,r.Z)({},k),{},(0,a.Z)({},e,n)))}),[k]),$=(0,l.useCallback)((function(){var e={};e=P?{id:P.id,ownership:P.ownership,person:(0,r.Z)((0,r.Z)({},k),{},{address:P.person.address})}:{person:(0,r.Z)((0,r.Z)({},k),{},{address:{line1:"",line2:"",city:"",state:"",country:"",postalCode:"",addressType:"legal"}})},t((0,j.$N)(e)),setTimeout((function(){n("/ao/kyb/ownerAddress")}),0)}),[P,k]);return(0,Z.jsx)("div",{className:"page",children:(0,Z.jsx)("form",{onSubmit:function(e){e.preventDefault(),$()},children:(0,Z.jsx)(N.Z,{varient:"box",heading:e("owner_personal_details.title"),footer:(0,Z.jsx)(u.zx,{"data-testid":"submit-btn",width:"100%",variant:"primary",type:"submit",disabled:!z,children:e("owner_personal_details.ctaText")}),children:(0,Z.jsxs)(d.xu,{width:"100%",children:[(0,Z.jsxs)(c.NI,{variant:"primary",children:[(0,Z.jsx)(c.lX,{variant:"primary",children:e("owner_personal_details.firstNameLabel")}),(0,Z.jsx)(p.II,{"data-testid":"firstName",value:k.firstName,onChange:function(e){B("firstName",e.target.value)},variant:"primary"})]}),(0,Z.jsxs)(c.NI,{variant:"primary",children:[(0,Z.jsx)(c.lX,{variant:"primary",children:e("owner_personal_details.lastNameLabel")}),(0,Z.jsx)(p.II,{"data-testid":"lastName",value:k.lastName,onChange:function(e){B("lastName",e.target.value)},variant:"primary"})]}),(0,Z.jsxs)(c.NI,{variant:"primary",children:[(0,Z.jsx)(c.lX,{variant:"primary",children:e("owner_personal_details.mobileLabel")}),(0,Z.jsx)(f.ZP,{"data-testid":"mobileInput",style:L.field,className:"country-input",international:!0,limitMaxLength:!0,defaultCountry:"US",countryCallingCodeEditable:!1,value:k.phone,countries:["US","IN"],onChange:function(e){M((0,r.Z)((0,r.Z)({},k),{},{phone:e||""}))}})]}),(0,Z.jsxs)(c.NI,{variant:"primary",children:[(0,Z.jsx)(c.lX,{variant:"primary",children:e("owner_personal_details.emailLabel")}),(0,Z.jsx)(p.II,{"data-testid":"email",variant:"primary",type:"email",onChange:function(e){M((0,r.Z)((0,r.Z)({},k),{},{email:e.target.value}))},value:null===k||void 0===k?void 0:k.email})]}),(0,Z.jsxs)(c.NI,{variant:"primary",children:[(0,Z.jsx)(c.lX,{variant:"primary",children:e("owner_personal_details.dobLabel")}),(0,Z.jsx)(x.Z,{maxDate:(0,y.default)(new Date,18),dateFormat:"MM / dd / yyyy",peekNextMonth:!0,showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select",value:k.dateOfBirth,onChange:function(e){e&&M((0,r.Z)((0,r.Z)({},k),{},{dateOfBirth:(0,v.default)(e,"yyyy-MM-dd")}))}})]}),(0,Z.jsxs)(c.NI,{variant:"primary",children:[(0,Z.jsx)(c.lX,{variant:"primary",children:e("owner_personal_details.documentType")}),(0,Z.jsx)(m.Ph,{"data-testid":"document-type",variant:"primary",value:null===k||void 0===k?void 0:k.idType,onChange:function(e){return M((0,r.Z)((0,r.Z)({},k),{},{idType:e.target.value}))},placeholder:e("owner_personal_details.documentType"),children:_.u0.map((function(e){return(0,Z.jsx)("option",{value:e.type,children:e.label},e.type)}))})]}),(0,Z.jsxs)(c.NI,{variant:"primary",children:[(0,Z.jsx)(c.lX,{variant:"primary",children:e("owner_personal_details.".concat(null===k||void 0===k?void 0:k.idType),"Social Security Number")}),(0,Z.jsx)(b.Z,{isLast4:!1,idType:null===k||void 0===k?void 0:k.idType,value:k.idNumber,onChange:function(e,n,t){M((0,r.Z)((0,r.Z)({},k),{},{idNumber:n})),S(t)}})]})]})})})})}},7640:function(e,n,t){t.d(n,{Ph:function(){return y}});var a=t(3393),r=t(1938),i=t(7160),l=t(6831),o=t(6198),s=t.n(o),u=t(2791);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}var p=["children","placeholder","className"],m=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],f=["children"],h=(0,r.Gp)((function(e,n){var t=e.children,a=e.placeholder,i=e.className,o=c(e,p);return u.createElement(r.m$.select,d({},o,{ref:n,className:(0,l.cx)("chakra-select",i)}),a&&u.createElement("option",{value:""},a),t)}));l.Ts&&(h.displayName="SelectField");var y=(0,r.Gp)((function(e,n){var t=(0,r.jC)("Select",e),o=(0,r.Lr)(e),p=o.rootProps,f=o.placeholder,y=o.icon,v=o.color,g=o.height,N=o.h,x=o.minH,w=o.minHeight,j=o.iconColor,_=o.iconSize,Z=c(o,m),C=(0,l.Vl)(Z,i.oE),I=C[0],k=C[1],M=(0,a.Yp)(k),O={width:"100%",height:"fit-content",position:"relative",color:v},E=s()({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return u.createElement(r.m$.div,d({className:"chakra-select__wrapper",__css:O},I,p),u.createElement(h,d({ref:n,height:null!=N?N:g,minH:null!=x?x:w,placeholder:f},M,{__css:E}),e.children),u.createElement(b,d({"data-disabled":(0,l.PB)(M.disabled)},(j||v)&&{color:j||v},{__css:t.icon},_&&{fontSize:_}),y))}));l.Ts&&(y.displayName="Select");var v=function(e){return u.createElement("svg",d({viewBox:"0 0 24 24"},e),u.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},g=(0,r.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),b=function(e){var n=e.children,t=void 0===n?u.createElement(v,null):n,a=c(e,f),r=u.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return u.createElement(g,d({},a,{className:"chakra-select__icon-wrapper"}),u.isValidElement(t)?r:null)};l.Ts&&(b.displayName="SelectIcon")},7781:function(){},5987:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(3366);function r(e,n){if(null==e)return{};var t,r,i=(0,a.Z)(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}}}]);
//# sourceMappingURL=4577.e3170fd3.chunk.js.map