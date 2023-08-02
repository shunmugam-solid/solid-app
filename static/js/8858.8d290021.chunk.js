"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[8858,5798],{9154:function(e,n,r){r.r(n);r(2791);var a=r(680),t=r(184);n.default=function(){return(0,t.jsx)(a.Z,{showHeader:!1,showBack:!0,showSearch:!0,showAdd:!0,showCompactView:!1,pagination:!0,contactsPerView:20})}},3393:function(e,n,r){r.d(n,{Kn:function(){return R},NI:function(){return g},NJ:function(){return y},Yp:function(){return x},lX:function(){return P}});var a=r(5223),t=r(1938),l=r(6831),i=r(9611),s=r(2791),d=r(9113);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function u(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}var c=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],m=(0,t.eC)("FormControl"),v=m[0],f=m[1],h=f,b=(0,i.kr)({strict:!1,name:"FormControlContext"}),I=b[0],y=b[1];var g=(0,t.Gp)((function(e,n){var r=(0,t.jC)("Form",e),d=function(e){var n=e.id,r=e.isRequired,t=e.isInvalid,d=e.isDisabled,p=e.isReadOnly,m=u(e,c),v=(0,a.Me)(),f=n||"field-"+v,h=f+"-label",b=f+"-feedback",I=f+"-helptext",y=s.useState(!1),g=y[0],N=y[1],_=s.useState(!1),E=_[0],x=_[1],R=(0,a.kt)(),k=R[0],T=R[1],q=s.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),o({id:I},e,{ref:(0,i.lq)(n,(function(e){e&&x(!0)}))})}),[I]),O=s.useCallback((function(e,n){var r,a;return void 0===e&&(e={}),void 0===n&&(n=null),o({},e,{ref:n,"data-focus":(0,l.PB)(k),"data-disabled":(0,l.PB)(d),"data-invalid":(0,l.PB)(t),"data-readonly":(0,l.PB)(p),id:null!=(r=e.id)?r:h,htmlFor:null!=(a=e.htmlFor)?a:f})}),[f,d,k,t,p,h]),C=s.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),o({id:b},e,{ref:(0,i.lq)(n,(function(e){e&&N(!0)})),"aria-live":"polite"})}),[b]),F=s.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),o({},e,m,{ref:n,role:"group"})}),[m]),P=s.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),o({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!p,isDisabled:!!d,isFocused:!!k,onFocus:T.on,onBlur:T.off,hasFeedbackText:g,setHasFeedbackText:N,hasHelpText:E,setHasHelpText:x,id:f,labelId:h,feedbackId:b,helpTextId:I,htmlProps:m,getHelpTextProps:q,getErrorMessageProps:C,getRootProps:F,getLabelProps:O,getRequiredIndicatorProps:P}}((0,t.Lr)(e)),m=d.getRootProps;d.htmlProps;var f=u(d,p),h=(0,l.cx)("chakra-form-control",e.className);return s.createElement(I,{value:f},s.createElement(v,{value:r},s.createElement(t.m$.div,o({},m({},n),{className:h,__css:r.container}))))}));l.Ts&&(g.displayName="FormControl");var N=(0,t.Gp)((function(e,n){var r=y(),a=f(),i=(0,l.cx)("chakra-form__helper-text",e.className);return s.createElement(t.m$.div,o({},null==r?void 0:r.getHelpTextProps(e,n),{__css:a.helperText,className:i}))}));l.Ts&&(N.displayName="FormHelperText");var _=["isDisabled","isInvalid","isReadOnly","isRequired"],E=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function x(e){var n=R(e),r=n.isDisabled,a=n.isInvalid,t=n.isReadOnly,i=n.isRequired;return o({},u(n,_),{disabled:r,readOnly:t,required:i,"aria-invalid":(0,l.Qm)(a),"aria-required":(0,l.Qm)(i),"aria-readonly":(0,l.Qm)(t)})}function R(e){var n,r,a,t=y(),i=e.id,s=e.disabled,d=e.readOnly,c=e.required,p=e.isRequired,m=e.isInvalid,v=e.isReadOnly,f=e.isDisabled,h=e.onFocus,b=e.onBlur,I=u(e,E),g=e["aria-describedby"]?[e["aria-describedby"]]:[];return null!=t&&t.hasFeedbackText&&null!=t&&t.isInvalid&&g.push(t.feedbackId),null!=t&&t.hasHelpText&&g.push(t.helpTextId),o({},I,{"aria-describedby":g.join(" ")||void 0,id:null!=i?i:null==t?void 0:t.id,isDisabled:null!=(n=null!=s?s:f)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(r=null!=d?d:v)?r:null==t?void 0:t.isReadOnly,isRequired:null!=(a=null!=c?c:p)?a:null==t?void 0:t.isRequired,isInvalid:null!=m?m:null==t?void 0:t.isInvalid,onFocus:(0,l.v0)(null==t?void 0:t.onFocus,h),onBlur:(0,l.v0)(null==t?void 0:t.onBlur,b)})}var k=(0,t.eC)("FormError"),T=k[0],q=k[1],O=(0,t.Gp)((function(e,n){var r=(0,t.jC)("FormError",e),a=(0,t.Lr)(e),i=y();return null!=i&&i.isInvalid?s.createElement(T,{value:r},s.createElement(t.m$.div,o({},null==i?void 0:i.getErrorMessageProps(a,n),{className:(0,l.cx)("chakra-form__error-message",e.className),__css:o({display:"flex",alignItems:"center"},r.text)}))):null}));l.Ts&&(O.displayName="FormErrorMessage");var C=(0,t.Gp)((function(e,n){var r=q(),a=y();if(null==a||!a.isInvalid)return null;var t=(0,l.cx)("chakra-form__error-icon",e.className);return s.createElement(d.ZP,o({ref:n,"aria-hidden":!0},e,{__css:r.icon,className:t}),s.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));l.Ts&&(C.displayName="FormErrorIcon");var F=["className","children","requiredIndicator","optionalIndicator"],P=(0,t.Gp)((function(e,n){var r,a=(0,t.mq)("FormLabel",e),i=(0,t.Lr)(e);i.className;var d=i.children,c=i.requiredIndicator,p=void 0===c?s.createElement(j,null):c,m=i.optionalIndicator,v=void 0===m?null:m,f=u(i,F),h=y(),b=null!=(r=null==h?void 0:h.getLabelProps(f,n))?r:o({ref:n},f);return s.createElement(t.m$.label,o({},b,{className:(0,l.cx)("chakra-form__label",i.className),__css:o({display:"block",textAlign:"start"},a)}),d,null!=h&&h.isRequired?p:v)}));l.Ts&&(P.displayName="FormLabel");var j=(0,t.Gp)((function(e,n){var r=y(),a=h();if(null==r||!r.isRequired)return null;var i=(0,l.cx)("chakra-form__required-indicator",e.className);return s.createElement(t.m$.span,o({},null==r?void 0:r.getRequiredIndicatorProps(e,n),{__css:a.requiredIndicator,className:i}))}));l.Ts&&(j.displayName="RequiredIndicator")},5798:function(e,n,r){r.d(n,{II:function(){return c}});var a=r(3393),t=r(1938),l=r(6831),i=r(2791),s=r(9611);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},d.apply(this,arguments)}function o(e,n){if(null==e)return{};var r,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}var u=["htmlSize"],c=(0,t.Gp)((function(e,n){var r=e.htmlSize,s=o(e,u),c=(0,t.jC)("Input",s),p=(0,t.Lr)(s),m=(0,a.Yp)(p),v=(0,l.cx)("chakra-input",e.className);return i.createElement(t.m$.input,d({size:r},m,{__css:c.field,ref:n,className:v}))}));l.Ts&&(c.displayName="Input"),c.id="Input";var p=["children","className"],m=(0,t.eC)("InputGroup"),v=m[0],f=m[1],h=(0,t.Gp)((function(e,n){var r=(0,t.jC)("Input",e),a=(0,t.Lr)(e),u=a.children,c=a.className,m=o(a,p),f=(0,l.cx)("chakra-input__group",c),h={},b=(0,s.WR)(u),I=r.field;b.forEach((function(e){if(r){var n,a;if(I&&"InputLeftElement"===e.type.id)h.paddingStart=null!=(n=I.height)?n:I.h;if(I&&"InputRightElement"===e.type.id)h.paddingEnd=null!=(a=I.height)?a:I.h;"InputRightAddon"===e.type.id&&(h.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(h.borderStartRadius=0)}}));var y=b.map((function(n){var r,a,t=(0,l.YU)({size:(null==(r=n.props)?void 0:r.size)||e.size,variant:(null==(a=n.props)?void 0:a.variant)||e.variant});return"Input"!==n.type.id?i.cloneElement(n,t):i.cloneElement(n,Object.assign(t,h,n.props))}));return i.createElement(t.m$.div,d({className:f,ref:n,__css:{width:"100%",display:"flex",position:"relative"}},m),i.createElement(v,{value:r},y))}));l.Ts&&(h.displayName="InputGroup");var b=["placement"],I={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},y=(0,t.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),g=(0,t.Gp)((function(e,n){var r,a=e.placement,t=void 0===a?"left":a,l=o(e,b),s=null!=(r=I[t])?r:{},u=f();return i.createElement(y,d({ref:n},l,{__css:d({},u.addon,s)}))}));l.Ts&&(g.displayName="InputAddon");var N=(0,t.Gp)((function(e,n){return i.createElement(g,d({ref:n,placement:"left"},e,{className:(0,l.cx)("chakra-input__left-addon",e.className)}))}));l.Ts&&(N.displayName="InputLeftAddon"),N.id="InputLeftAddon";var _=(0,t.Gp)((function(e,n){return i.createElement(g,d({ref:n,placement:"right"},e,{className:(0,l.cx)("chakra-input__right-addon",e.className)}))}));l.Ts&&(_.displayName="InputRightAddon"),_.id="InputRightAddon";var E=["placement"],x=["className"],R=["className"],k=(0,t.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),T=(0,t.Gp)((function(e,n){var r,a,t,l=e.placement,s=void 0===l?"left":l,u=o(e,E),c=f(),p=c.field,m=d(((t={})["left"===s?"insetStart":"insetEnd"]="0",t.width=null!=(r=null==p?void 0:p.height)?r:null==p?void 0:p.h,t.height=null!=(a=null==p?void 0:p.height)?a:null==p?void 0:p.h,t.fontSize=null==p?void 0:p.fontSize,t),c.element);return i.createElement(k,d({ref:n,__css:m},u))}));T.id="InputElement",l.Ts&&(T.displayName="InputElement");var q=(0,t.Gp)((function(e,n){var r=e.className,a=o(e,x),t=(0,l.cx)("chakra-input__left-element",r);return i.createElement(T,d({ref:n,placement:"left",className:t},a))}));q.id="InputLeftElement",l.Ts&&(q.displayName="InputLeftElement");var O=(0,t.Gp)((function(e,n){var r=e.className,a=o(e,R),t=(0,l.cx)("chakra-input__right-element",r);return i.createElement(T,d({ref:n,placement:"right",className:t},a))}));O.id="InputRightElement",l.Ts&&(O.displayName="InputRightElement")}}]);
//# sourceMappingURL=8858.8d290021.chunk.js.map