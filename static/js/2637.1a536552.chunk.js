"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[2637,1330,5798],{5919:function(e,r,n){n.d(r,{Z:function(){return f}});var t=n(1413),i=n(9439),a=n(2791),l=n(5568),o=n(5048),s=n(9916),u=n(5798),d=n(5304),c=function(e,r){return e.find((function(e){return e.types.includes(r)}))},p=n(184),f=function(e){var r=e.address,n=e.onChange,f=e.googleApiKey,v=e.placeholder,m=e.restrictedCountry,g=e.international,y=(0,a.useState)((0,t.Z)({},r)),h=(0,i.Z)(y,2),b=h[0],_=h[1],O=(0,a.useState)((null===r||void 0===r?void 0:r.line1)||""),j=(0,i.Z)(O,2),I=j[0],E=j[1],P=(0,a.useRef)(null),x=(0,d.CG)((function(e){return e.user.personDetails}),o.wU),S=(0,a.useMemo)((function(){if(m)return m;if(null!==x&&void 0!==x&&x.phone)try{var e=(0,s.SR)(null===x||void 0===x?void 0:x.phone);return(null===e||void 0===e?void 0:e.country)||"US"}catch(r){return"US"}return"US"}),[x,m]);(0,a.useEffect)((function(){window.gm_authFailure=function(){return P.current.disabled=!1,P.current.placeholder="",P.current.style.backgroundImage="",P.current.focus(),!1}}),[]),(0,a.useEffect)((function(){r&&(_(r),E(r.line1))}),[r]);return(0,p.jsx)(u.II,{variant:"primary","data-testid":"address-line1",as:l.default,ref:P,apiKey:f,onPlaceSelected:function(e){if(e){var r=function(e){var r=e.address_components,n=e.geometry,t={},i=r,a=c(i,"premise"),l=c(i,"street_number"),o=c(i,"route"),s=c(i,"locality"),u=c(i,"sublocality_level_1"),d=c(i,"postal_town"),p=c(i,"administrative_area_level_1"),f=c(i,"country"),v=c(i,"postal_code"),m=[l,a,o];return s||(s=d||u),t.line1=m.filter((function(e){return e})).map((function(e){return e.long_name})).join(" "),t.line2=null,t.city=s?s.long_name:null,t.postalCode=v?v.long_name:null,t.state=p?p.short_name:null,t.country=f?f.short_name:null,t.latitude=n.location.lat,t.longitude=n.location.lng,t}(e),i=r.line1,a=r.line2,l=r.city,o=r.state,s=r.postalCode,u=r.country,d=(0,t.Z)((0,t.Z)({},b),{},{line1:i,line2:a,city:l,state:o,country:u,postalCode:s});_(d),n(d),E(i)}},value:I,placeholder:v||"",onChange:function(e){E(e.target.value);var r=(0,t.Z)((0,t.Z)({},b),{},{line1:e.target.value});g||(r.country=S),n(r)},options:{types:["address"],componentRestrictions:g?void 0:{country:S}}})}},2637:function(e,r,n){n.r(r);var t=n(4942),i=n(1413),a=n(2791),l=n(1938),o=n(2504),s=n(8735),u=n(3393),d=n(5798),c=n(2020),p=n(5048),f=n(5425),v=n(5919),m=n(5304),g=n(80),y=n(3746),h=n(7208),b=n(4661),_=n(184),O=a.lazy((function(){return Promise.all([n.e(7625),n.e(3054)]).then(n.bind(n,3054))}));r.default=function(){var e,r,n,j,I,E,P,x,S,A=(0,c.$)().t,C=(0,m.Qo)(),R=(0,b.y)(),w=R.open,N=R.goBack,k=(0,l.mq)("FormControl",{variant:"primary"}),T=(0,m.CG)((function(e){return e.card.cardPayload}),p.wU),M=(0,m.CG)((function(e){return e.card.replaceCardId})),L=(0,a.useCallback)((function(e,r){if(T){var n=(0,i.Z)((0,i.Z)({},T),{},(0,t.Z)({},e,r));C((0,y.Qr)(n))}}),[T]),G=(0,a.useMemo)((function(){return T&&!!T.shipping&&!!T.shipping.shippingAddress.line1&&!!T.shipping.shippingAddress.city&&!!T.shipping.shippingAddress.state&&!!T.shipping.shippingAddress.country&&!!T.shipping.shippingAddress.postalCode&&0!==T.shipping.shippingAddress.line1.length&&0!==T.shipping.shippingAddress.city.length&&0!==T.shipping.shippingAddress.state.length&&0!==T.shipping.shippingAddress.country.length&&0!==T.shipping.shippingAddress.postalCode.length}),[T]),Z=(0,a.useCallback)((function(){G&&T&&C((0,h.LH)(T)).then((function(){M?C((0,h.XN)(M)).catch(g.WH).finally((function(){w(O)})):w(O)})).catch(g.WH)}),[G,M]);return(0,_.jsx)("div",{className:"page",children:(0,_.jsx)("form",{onSubmit:function(e){e.preventDefault(),Z()},children:(0,_.jsx)(f.Z,{heading:A("create_card_info.title_".concat(null===T||void 0===T?void 0:T.cardType)),onBack:N,footer:(0,_.jsx)(o.zx,{width:"100%",variant:"primary",disabled:!G,onClick:Z,children:A("create_card_address.ctaText")}),children:(0,_.jsxs)(s.xu,{width:"100%",children:[(0,_.jsx)(s.X6,{variant:"primary",mt:3,size:"md",children:A("create_card_address.confirmBillingAddressTitle")}),(0,_.jsxs)(u.NI,{variant:"primary",style:k,children:[(0,_.jsx)(u.lX,{variant:"primary",children:A("create_card_address.address1")}),(0,_.jsx)(v.Z,{placeholder:A("create_card_address.address1"),googleApiKey:"AIzaSyDcW61NFxklslLuuUxNw0SzoBmHyC4Zhh4",address:(null===T||void 0===T||null===(e=T.shipping)||void 0===e?void 0:e.shippingAddress)||void 0,onChange:function(e){L("shipping",{shippingAddress:(0,i.Z)((0,i.Z)({},e),{},{addressType:"mailing"})})}})]}),(0,_.jsxs)(u.NI,{variant:"primary",style:k,children:[(0,_.jsx)(u.lX,{variant:"primary",children:A("create_card_address.address2")}),(0,_.jsx)(d.II,{variant:"primary",placeholder:A("create_card_address.address2"),value:null===T||void 0===T||null===(r=T.shipping)||void 0===r||null===(n=r.shippingAddress)||void 0===n?void 0:n.line2,onChange:function(e){var r;L("shipping",{shippingAddress:(0,i.Z)((0,i.Z)({},(null===T||void 0===T||null===(r=T.shipping)||void 0===r?void 0:r.shippingAddress)||{}),{},{line2:e.target.value})})}})]}),(0,_.jsxs)(u.NI,{variant:"primary",style:k,children:[(0,_.jsx)(u.lX,{variant:"primary",children:A("create_card_address.addressCity")}),(0,_.jsx)(d.II,{variant:"primary",placeholder:A("create_card_address.addressCity"),value:null===T||void 0===T||null===(j=T.shipping)||void 0===j||null===(I=j.shippingAddress)||void 0===I?void 0:I.city,onChange:function(e){var r;L("shipping",{shippingAddress:(0,i.Z)((0,i.Z)({},(null===T||void 0===T||null===(r=T.shipping)||void 0===r?void 0:r.shippingAddress)||{}),{},{city:e.target.value})})}})]}),(0,_.jsxs)(u.NI,{variant:"primary",style:k,children:[(0,_.jsx)(u.lX,{variant:"primary",children:A("create_card_address.addressState")}),(0,_.jsx)(d.II,{variant:"primary",placeholder:A("create_card_address.addressState"),value:null===T||void 0===T||null===(E=T.shipping)||void 0===E||null===(P=E.shippingAddress)||void 0===P?void 0:P.state,onChange:function(e){var r;L("shipping",{shippingAddress:(0,i.Z)((0,i.Z)({},(null===T||void 0===T||null===(r=T.shipping)||void 0===r?void 0:r.shippingAddress)||{}),{},{state:e.target.value})})}})]}),(0,_.jsxs)(u.NI,{variant:"primary",style:k,children:[(0,_.jsx)(u.lX,{variant:"primary",children:A("create_card_address.addressZipcode")}),(0,_.jsx)(d.II,{variant:"primary",placeholder:A("create_card_address.addressZipcode"),value:null===T||void 0===T||null===(x=T.shipping)||void 0===x||null===(S=x.shippingAddress)||void 0===S?void 0:S.postalCode,onChange:function(e){var r;L("shipping",{shippingAddress:(0,i.Z)((0,i.Z)({},(null===T||void 0===T||null===(r=T.shipping)||void 0===r?void 0:r.shippingAddress)||{}),{},{postalCode:e.target.value})})}})]})]})})})})}},3393:function(e,r,n){n.d(r,{Kn:function(){return P},NI:function(){return _},NJ:function(){return b},Yp:function(){return E},lX:function(){return N}});var t=n(5223),i=n(1938),a=n(6831),l=n(9611),o=n(2791),s=n(9113);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function d(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var c=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],f=(0,i.eC)("FormControl"),v=f[0],m=f[1],g=m,y=(0,l.kr)({strict:!1,name:"FormControlContext"}),h=y[0],b=y[1];var _=(0,i.Gp)((function(e,r){var n=(0,i.jC)("Form",e),s=function(e){var r=e.id,n=e.isRequired,i=e.isInvalid,s=e.isDisabled,p=e.isReadOnly,f=d(e,c),v=(0,t.Me)(),m=r||"field-"+v,g=m+"-label",y=m+"-feedback",h=m+"-helptext",b=o.useState(!1),_=b[0],O=b[1],j=o.useState(!1),I=j[0],E=j[1],P=(0,t.kt)(),x=P[0],S=P[1],A=o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),u({id:h},e,{ref:(0,l.lq)(r,(function(e){e&&E(!0)}))})}),[h]),C=o.useCallback((function(e,r){var n,t;return void 0===e&&(e={}),void 0===r&&(r=null),u({},e,{ref:r,"data-focus":(0,a.PB)(x),"data-disabled":(0,a.PB)(s),"data-invalid":(0,a.PB)(i),"data-readonly":(0,a.PB)(p),id:null!=(n=e.id)?n:g,htmlFor:null!=(t=e.htmlFor)?t:m})}),[m,s,x,i,p,g]),R=o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),u({id:y},e,{ref:(0,l.lq)(r,(function(e){e&&O(!0)})),"aria-live":"polite"})}),[y]),w=o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),u({},e,f,{ref:r,role:"group"})}),[f]),N=o.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),u({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!p,isDisabled:!!s,isFocused:!!x,onFocus:S.on,onBlur:S.off,hasFeedbackText:_,setHasFeedbackText:O,hasHelpText:I,setHasHelpText:E,id:m,labelId:g,feedbackId:y,helpTextId:h,htmlProps:f,getHelpTextProps:A,getErrorMessageProps:R,getRootProps:w,getLabelProps:C,getRequiredIndicatorProps:N}}((0,i.Lr)(e)),f=s.getRootProps;s.htmlProps;var m=d(s,p),g=(0,a.cx)("chakra-form-control",e.className);return o.createElement(h,{value:m},o.createElement(v,{value:n},o.createElement(i.m$.div,u({},f({},r),{className:g,__css:n.container}))))}));a.Ts&&(_.displayName="FormControl");var O=(0,i.Gp)((function(e,r){var n=b(),t=m(),l=(0,a.cx)("chakra-form__helper-text",e.className);return o.createElement(i.m$.div,u({},null==n?void 0:n.getHelpTextProps(e,r),{__css:t.helperText,className:l}))}));a.Ts&&(O.displayName="FormHelperText");var j=["isDisabled","isInvalid","isReadOnly","isRequired"],I=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function E(e){var r=P(e),n=r.isDisabled,t=r.isInvalid,i=r.isReadOnly,l=r.isRequired;return u({},d(r,j),{disabled:n,readOnly:i,required:l,"aria-invalid":(0,a.Qm)(t),"aria-required":(0,a.Qm)(l),"aria-readonly":(0,a.Qm)(i)})}function P(e){var r,n,t,i=b(),l=e.id,o=e.disabled,s=e.readOnly,c=e.required,p=e.isRequired,f=e.isInvalid,v=e.isReadOnly,m=e.isDisabled,g=e.onFocus,y=e.onBlur,h=d(e,I),_=e["aria-describedby"]?[e["aria-describedby"]]:[];return null!=i&&i.hasFeedbackText&&null!=i&&i.isInvalid&&_.push(i.feedbackId),null!=i&&i.hasHelpText&&_.push(i.helpTextId),u({},h,{"aria-describedby":_.join(" ")||void 0,id:null!=l?l:null==i?void 0:i.id,isDisabled:null!=(r=null!=o?o:m)?r:null==i?void 0:i.isDisabled,isReadOnly:null!=(n=null!=s?s:v)?n:null==i?void 0:i.isReadOnly,isRequired:null!=(t=null!=c?c:p)?t:null==i?void 0:i.isRequired,isInvalid:null!=f?f:null==i?void 0:i.isInvalid,onFocus:(0,a.v0)(null==i?void 0:i.onFocus,g),onBlur:(0,a.v0)(null==i?void 0:i.onBlur,y)})}var x=(0,i.eC)("FormError"),S=x[0],A=x[1],C=(0,i.Gp)((function(e,r){var n=(0,i.jC)("FormError",e),t=(0,i.Lr)(e),l=b();return null!=l&&l.isInvalid?o.createElement(S,{value:n},o.createElement(i.m$.div,u({},null==l?void 0:l.getErrorMessageProps(t,r),{className:(0,a.cx)("chakra-form__error-message",e.className),__css:u({display:"flex",alignItems:"center"},n.text)}))):null}));a.Ts&&(C.displayName="FormErrorMessage");var R=(0,i.Gp)((function(e,r){var n=A(),t=b();if(null==t||!t.isInvalid)return null;var i=(0,a.cx)("chakra-form__error-icon",e.className);return o.createElement(s.ZP,u({ref:r,"aria-hidden":!0},e,{__css:n.icon,className:i}),o.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));a.Ts&&(R.displayName="FormErrorIcon");var w=["className","children","requiredIndicator","optionalIndicator"],N=(0,i.Gp)((function(e,r){var n,t=(0,i.mq)("FormLabel",e),l=(0,i.Lr)(e);l.className;var s=l.children,c=l.requiredIndicator,p=void 0===c?o.createElement(k,null):c,f=l.optionalIndicator,v=void 0===f?null:f,m=d(l,w),g=b(),y=null!=(n=null==g?void 0:g.getLabelProps(m,r))?n:u({ref:r},m);return o.createElement(i.m$.label,u({},y,{className:(0,a.cx)("chakra-form__label",l.className),__css:u({display:"block",textAlign:"start"},t)}),s,null!=g&&g.isRequired?p:v)}));a.Ts&&(N.displayName="FormLabel");var k=(0,i.Gp)((function(e,r){var n=b(),t=g();if(null==n||!n.isRequired)return null;var l=(0,a.cx)("chakra-form__required-indicator",e.className);return o.createElement(i.m$.span,u({},null==n?void 0:n.getRequiredIndicatorProps(e,r),{__css:t.requiredIndicator,className:l}))}));a.Ts&&(k.displayName="RequiredIndicator")},5798:function(e,r,n){n.d(r,{II:function(){return c}});var t=n(3393),i=n(1938),a=n(6831),l=n(2791),o=n(9611);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}function u(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var d=["htmlSize"],c=(0,i.Gp)((function(e,r){var n=e.htmlSize,o=u(e,d),c=(0,i.jC)("Input",o),p=(0,i.Lr)(o),f=(0,t.Yp)(p),v=(0,a.cx)("chakra-input",e.className);return l.createElement(i.m$.input,s({size:n},f,{__css:c.field,ref:r,className:v}))}));a.Ts&&(c.displayName="Input"),c.id="Input";var p=["children","className"],f=(0,i.eC)("InputGroup"),v=f[0],m=f[1],g=(0,i.Gp)((function(e,r){var n=(0,i.jC)("Input",e),t=(0,i.Lr)(e),d=t.children,c=t.className,f=u(t,p),m=(0,a.cx)("chakra-input__group",c),g={},y=(0,o.WR)(d),h=n.field;y.forEach((function(e){if(n){var r,t;if(h&&"InputLeftElement"===e.type.id)g.paddingStart=null!=(r=h.height)?r:h.h;if(h&&"InputRightElement"===e.type.id)g.paddingEnd=null!=(t=h.height)?t:h.h;"InputRightAddon"===e.type.id&&(g.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(g.borderStartRadius=0)}}));var b=y.map((function(r){var n,t,i=(0,a.YU)({size:(null==(n=r.props)?void 0:n.size)||e.size,variant:(null==(t=r.props)?void 0:t.variant)||e.variant});return"Input"!==r.type.id?l.cloneElement(r,i):l.cloneElement(r,Object.assign(i,g,r.props))}));return l.createElement(i.m$.div,s({className:m,ref:r,__css:{width:"100%",display:"flex",position:"relative"}},f),l.createElement(v,{value:n},b))}));a.Ts&&(g.displayName="InputGroup");var y=["placement"],h={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},b=(0,i.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),_=(0,i.Gp)((function(e,r){var n,t=e.placement,i=void 0===t?"left":t,a=u(e,y),o=null!=(n=h[i])?n:{},d=m();return l.createElement(b,s({ref:r},a,{__css:s({},d.addon,o)}))}));a.Ts&&(_.displayName="InputAddon");var O=(0,i.Gp)((function(e,r){return l.createElement(_,s({ref:r,placement:"left"},e,{className:(0,a.cx)("chakra-input__left-addon",e.className)}))}));a.Ts&&(O.displayName="InputLeftAddon"),O.id="InputLeftAddon";var j=(0,i.Gp)((function(e,r){return l.createElement(_,s({ref:r,placement:"right"},e,{className:(0,a.cx)("chakra-input__right-addon",e.className)}))}));a.Ts&&(j.displayName="InputRightAddon"),j.id="InputRightAddon";var I=["placement"],E=["className"],P=["className"],x=(0,i.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),S=(0,i.Gp)((function(e,r){var n,t,i,a=e.placement,o=void 0===a?"left":a,d=u(e,I),c=m(),p=c.field,f=s(((i={})["left"===o?"insetStart":"insetEnd"]="0",i.width=null!=(n=null==p?void 0:p.height)?n:null==p?void 0:p.h,i.height=null!=(t=null==p?void 0:p.height)?t:null==p?void 0:p.h,i.fontSize=null==p?void 0:p.fontSize,i),c.element);return l.createElement(x,s({ref:r,__css:f},d))}));S.id="InputElement",a.Ts&&(S.displayName="InputElement");var A=(0,i.Gp)((function(e,r){var n=e.className,t=u(e,E),i=(0,a.cx)("chakra-input__left-element",n);return l.createElement(S,s({ref:r,placement:"left",className:i},t))}));A.id="InputLeftElement",a.Ts&&(A.displayName="InputLeftElement");var C=(0,i.Gp)((function(e,r){var n=e.className,t=u(e,P),i=(0,a.cx)("chakra-input__right-element",n);return l.createElement(S,s({ref:r,placement:"right",className:i},t))}));C.id="InputRightElement",a.Ts&&(C.displayName="InputRightElement")},5568:function(e,r,n){e.exports=n(3984)},7802:function(e,r,n){function t(e){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!==typeof e)return{default:e};var n=s(r);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=a?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(i,l,o):i[l]=e[l]}i.default=e,n&&n.set(e,i);return i}(n(2791)),a=o(n(2007)),l=o(n(9476));function o(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:r})(e)}function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u.apply(this,arguments)}function d(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function c(e){var r=e.onPlaceSelected,n=e.apiKey,t=e.libraries,a=e.inputAutocompleteValue,o=e.options,s=e.googleMapsScriptBaseUrl,c=e.refProp,p=e.language,f=d(e,["onPlaceSelected","apiKey","libraries","inputAutocompleteValue","options","googleMapsScriptBaseUrl","refProp","language"]),v=(0,l.default)({ref:c,googleMapsScriptBaseUrl:s,onPlaceSelected:r,apiKey:n,libraries:t,inputAutocompleteValue:a,options:o,language:p}).ref;return i.default.createElement("input",u({ref:v},f))}c.propTypes={apiKey:a.default.string,libraries:a.default.arrayOf(a.default.string),ref:a.default.oneOfType([a.default.func,a.default.shape({current:a.default.any})]),googleMapsScriptBaseUrl:a.default.string,onPlaceSelected:a.default.func,inputAutocompleteValue:a.default.string,options:a.default.shape({componentRestrictions:a.default.object,bounds:a.default.object,location:a.default.object,offset:a.default.number,origin:a.default.object,radius:a.default.number,sessionToken:a.default.object,types:a.default.arrayOf(a.default.string)}),language:a.default.string};var p=(0,i.forwardRef)((function(e,r){return i.default.createElement(c,u({},e,{refProp:r}))}));r.default=p},6615:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.GOOGLE_MAP_SCRIPT_BASE_URL=void 0;r.GOOGLE_MAP_SCRIPT_BASE_URL="https://maps.googleapis.com/maps/api/js"},3984:function(e,r,n){Object.defineProperty(r,"default",{enumerable:!0,get:function(){return t.default}});var t=a(n(7802)),i=a(n(9476));function a(e){return e&&e.__esModule?e:{default:e}}},9476:function(e,r,n){function t(e){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r=e.ref,n=e.onPlaceSelected,t=e.apiKey,o=e.libraries,s=void 0===o?"places":o,d=e.inputAutocompleteValue,c=void 0===d?"new-password":d,p=e.options,f=(p=void 0===p?{}:p).types,v=void 0===f?["(cities)"]:f,m=p.componentRestrictions,g=p.fields,y=void 0===g?["address_components","geometry.location","place_id","formatted_address"]:g,h=p.bounds,b=function(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(p,["types","componentRestrictions","fields","bounds"]),_=e.googleMapsScriptBaseUrl,O=void 0===_?l.GOOGLE_MAP_SCRIPT_BASE_URL:_,j=e.language,I=(0,i.useRef)(null),E=(0,i.useRef)(null),P=(0,i.useRef)(null),x=(0,i.useRef)(null),S=j?"&language=".concat(j):"",A="".concat(O,"?libraries=").concat(s,"&key=").concat(t).concat(S),C=(0,i.useCallback)((function(){return(0,a.loadGoogleMapScript)(O,A)}),[O,A]);return(0,i.useEffect)((function(){var e=u(u({},b),{},{fields:y,types:v,bounds:h});if(m&&(e.componentRestrictions=m),!P.current&&I.current&&a.isBrowser){r&&!r.current&&(r.current=I.current);var i=function(){var r;return"undefined"===typeof google?console.error("Google has not been found. Make sure your provide apiKey prop."):null!==(r=google.maps)&&void 0!==r&&r.places?!I.current instanceof HTMLInputElement?console.error("Input ref must be HTMLInputElement."):(P.current=new google.maps.places.Autocomplete(I.current,e),void(P.current&&(E.current=P.current.addListener("place_changed",(function(){n&&P&&P.current&&n(P.current.getPlace(),I.current,P.current)}))))):console.error("Google maps places API must be loaded.")};return t?C().then((function(){return i()})):i(),function(){return E.current?E.current.remove():void 0}}}),[]),(0,i.useEffect)((function(){var e;(null===i.default||void 0===i.default||null===(e=i.default.version)||void 0===e||!e.startsWith("18"))&&a.isBrowser&&window.MutationObserver&&I.current&&I.current instanceof HTMLInputElement&&(x.current=new MutationObserver((function(){x.current.disconnect(),I.current&&(I.current.autocomplete=c)})),x.current.observe(I.current,{attributes:!0,attributeFilter:["autocomplete"]}))}),[c]),(0,i.useEffect)((function(){P.current&&P.current.setFields(y)}),[y]),(0,i.useEffect)((function(){P.current&&P.current.setBounds(h)}),[h]),(0,i.useEffect)((function(){P.current&&P.current.setComponentRestrictions(m)}),[m]),(0,i.useEffect)((function(){P.current&&P.current.setOptions(b)}),[b]),{ref:I,autocompleteRef:P}};var i=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!==typeof e)return{default:e};var n=o(r);if(n&&n.has(e))return n.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=a?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(i,l,s):i[l]=e[l]}i.default=e,n&&n.set(e,i);return i}(n(2791)),a=n(2170),l=n(6615);function o(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:r})(e)}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){d(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}},2170:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.loadGoogleMapScript=r.isBrowser=void 0;var n="undefined"!==typeof window&&window.document;r.isBrowser=n;r.loadGoogleMapScript=function(e,r){if(!n)return Promise.resolve();if("undefined"!==typeof google&&google.maps&&google.maps.api)return Promise.resolve();var t=document.querySelectorAll('script[src*="'.concat(e,'"]'));if(t&&t.length)return new Promise((function(e){if("undefined"!==typeof google)return e();t[0].addEventListener("load",(function(){return e()}))}));var i=new URL(r);i.searchParams.set("callback","__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__");var a=document.createElement("script");return a.src=i.toString(),new Promise((function(e){window.__REACT_GOOGLE_AUTOCOMPLETE_CALLBACK__=e,document.body.appendChild(a)}))}}}]);
//# sourceMappingURL=2637.1a536552.chunk.js.map