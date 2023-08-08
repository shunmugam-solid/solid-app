"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[5210,5798],{326:function(e,r,a){a.d(r,{F:function(){return d}});var n=a(4942),i=a(1413),t=a(5048),l=a(3929),s=a(5304),d=function(){var e=(0,t.I0)(),r=(0,s.CG)((function(e){return e.user.personDetails}),t.wU);return[r,function(a,t){if("string"===typeof a){var s=a,d=t;s&&r&&void 0!==r[s]&&void 0!==d&&e((0,l.U)((0,i.Z)((0,i.Z)({},r),{},(0,n.Z)({},s,d))))}else e((0,l.U)(a))}]}},5210:function(e,r,a){a.r(r);var n=a(1413),i=a(9439),t=a(2791),l=a(2504),s=a(8735),d=a(3393),o=a(5798),u=a(2020),c=a(7689),p=a(5649),v=a(326),m=a(5919),f=a(5304),h=a(3266),y=a(80),g=a(184);r.default=function(){var e,r,a,I,b=(0,u.$)().t,x=(0,f.Qo)(),_=(0,c.s0)(),N=(0,v.F)(),E=(0,i.Z)(N,2),R=E[0],C=E[1],j=(0,t.useMemo)((function(){return R&&!!R.address&&!!R.address.line1&&!!R.address.city&&!!R.address.state&&!!R.address.country&&!!R.address.postalCode&&0!==R.address.line1.length&&0!==R.address.city.length&&0!==R.address.state.length&&0!==R.address.country.length&&0!==R.address.postalCode.length}),[R]),k=(0,t.useCallback)((function(){if(j&&R){var e={address:R.address};x((0,h.p6)(R.id,e)).then((function(){_("/ao/kyc/idv")})).catch(y.WH)}}),[j,R]);return(0,g.jsx)("div",{className:"page",children:(0,g.jsx)("form",{onSubmit:function(e){e.preventDefault(),k()},children:(0,g.jsx)(p.Z,{varient:"box",heading:b("person_address.title"),footer:(0,g.jsx)(l.zx,{"data-testid":"submit-btn",type:"submit",width:"100%",variant:"primary",disabled:!j,children:b("person_address.ctaText")}),children:(0,g.jsxs)(s.xu,{width:"100%",paddingTop:"15px",children:[(0,g.jsxs)(d.NI,{variant:"primary",children:[(0,g.jsx)(d.lX,{variant:"primary",children:b("person_address.address1")}),(0,g.jsx)(m.Z,{googleApiKey:"AIzaSyDcW61NFxklslLuuUxNw0SzoBmHyC4Zhh4",address:(null===R||void 0===R?void 0:R.address)||void 0,placeholder:b("person_address.address1"),onChange:function(e){C("address",(0,n.Z)((0,n.Z)({},e),{},{addressType:"mailing"}))}})]}),(0,g.jsxs)(d.NI,{variant:"primary",children:[(0,g.jsx)(d.lX,{variant:"primary",children:b("person_address.address2")}),(0,g.jsx)(o.II,{variant:"primary","data-testid":"address-line2",value:null===R||void 0===R||null===(e=R.address)||void 0===e?void 0:e.line2,placeholder:b("person_address.address2"),onChange:function(e){C("address",(0,n.Z)((0,n.Z)({},(null===R||void 0===R?void 0:R.address)||{}),{},{line2:e.target.value}))}})]}),(0,g.jsxs)(d.NI,{variant:"primary",children:[(0,g.jsx)(d.lX,{variant:"primary",children:b("person_address.addressCity")}),(0,g.jsx)(o.II,{variant:"primary","data-testid":"address-city",value:null===R||void 0===R||null===(r=R.address)||void 0===r?void 0:r.city,placeholder:b("person_address.addressCity"),onChange:function(e){C("address",(0,n.Z)((0,n.Z)({},(null===R||void 0===R?void 0:R.address)||{}),{},{city:e.target.value}))}})]}),(0,g.jsxs)(d.NI,{variant:"primary",children:[(0,g.jsx)(d.lX,{variant:"primary",children:b("person_address.addressState")}),(0,g.jsx)(o.II,{variant:"primary","data-testid":"address-state",placeholder:b("person_address.addressState"),value:null===R||void 0===R||null===(a=R.address)||void 0===a?void 0:a.state,onChange:function(e){C("address",(0,n.Z)((0,n.Z)({},(null===R||void 0===R?void 0:R.address)||{}),{},{state:e.target.value}))}})]}),(0,g.jsxs)(d.NI,{variant:"primary",children:[(0,g.jsx)(d.lX,{variant:"primary",children:b("person_address.addressZipcode")}),(0,g.jsx)(o.II,{variant:"primary","data-testid":"address-zipcode",placeholder:b("person_address.addressZipcode"),value:null===R||void 0===R||null===(I=R.address)||void 0===I?void 0:I.postalCode,onChange:function(e){C("address",(0,n.Z)((0,n.Z)({},(null===R||void 0===R?void 0:R.address)||{}),{},{postalCode:e.target.value}))}})]})]})})})})}},3393:function(e,r,a){a.d(r,{Kn:function(){return R},NI:function(){return b},NJ:function(){return I},Yp:function(){return E},lX:function(){return O}});var n=a(5223),i=a(1938),t=a(6831),l=a(9611),s=a(2791),d=a(9113);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function u(e,r){if(null==e)return{};var a,n,i={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(i[a]=e[a]);return i}var c=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],v=(0,i.eC)("FormControl"),m=v[0],f=v[1],h=f,y=(0,l.kr)({strict:!1,name:"FormControlContext"}),g=y[0],I=y[1];var b=(0,i.Gp)((function(e,r){var a=(0,i.jC)("Form",e),d=function(e){var r=e.id,a=e.isRequired,i=e.isInvalid,d=e.isDisabled,p=e.isReadOnly,v=u(e,c),m=(0,n.Me)(),f=r||"field-"+m,h=f+"-label",y=f+"-feedback",g=f+"-helptext",I=s.useState(!1),b=I[0],x=I[1],_=s.useState(!1),N=_[0],E=_[1],R=(0,n.kt)(),C=R[0],j=R[1],k=s.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),o({id:g},e,{ref:(0,l.lq)(r,(function(e){e&&E(!0)}))})}),[g]),T=s.useCallback((function(e,r){var a,n;return void 0===e&&(e={}),void 0===r&&(r=null),o({},e,{ref:r,"data-focus":(0,t.PB)(C),"data-disabled":(0,t.PB)(d),"data-invalid":(0,t.PB)(i),"data-readonly":(0,t.PB)(p),id:null!=(a=e.id)?a:h,htmlFor:null!=(n=e.htmlFor)?n:f})}),[f,d,C,i,p,h]),q=s.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),o({id:y},e,{ref:(0,l.lq)(r,(function(e){e&&x(!0)})),"aria-live":"polite"})}),[y]),F=s.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),o({},e,v,{ref:r,role:"group"})}),[v]),O=s.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),o({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!i,isReadOnly:!!p,isDisabled:!!d,isFocused:!!C,onFocus:j.on,onBlur:j.off,hasFeedbackText:b,setHasFeedbackText:x,hasHelpText:N,setHasHelpText:E,id:f,labelId:h,feedbackId:y,helpTextId:g,htmlProps:v,getHelpTextProps:k,getErrorMessageProps:q,getRootProps:F,getLabelProps:T,getRequiredIndicatorProps:O}}((0,i.Lr)(e)),v=d.getRootProps;d.htmlProps;var f=u(d,p),h=(0,t.cx)("chakra-form-control",e.className);return s.createElement(g,{value:f},s.createElement(m,{value:a},s.createElement(i.m$.div,o({},v({},r),{className:h,__css:a.container}))))}));t.Ts&&(b.displayName="FormControl");var x=(0,i.Gp)((function(e,r){var a=I(),n=f(),l=(0,t.cx)("chakra-form__helper-text",e.className);return s.createElement(i.m$.div,o({},null==a?void 0:a.getHelpTextProps(e,r),{__css:n.helperText,className:l}))}));t.Ts&&(x.displayName="FormHelperText");var _=["isDisabled","isInvalid","isReadOnly","isRequired"],N=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function E(e){var r=R(e),a=r.isDisabled,n=r.isInvalid,i=r.isReadOnly,l=r.isRequired;return o({},u(r,_),{disabled:a,readOnly:i,required:l,"aria-invalid":(0,t.Qm)(n),"aria-required":(0,t.Qm)(l),"aria-readonly":(0,t.Qm)(i)})}function R(e){var r,a,n,i=I(),l=e.id,s=e.disabled,d=e.readOnly,c=e.required,p=e.isRequired,v=e.isInvalid,m=e.isReadOnly,f=e.isDisabled,h=e.onFocus,y=e.onBlur,g=u(e,N),b=e["aria-describedby"]?[e["aria-describedby"]]:[];return null!=i&&i.hasFeedbackText&&null!=i&&i.isInvalid&&b.push(i.feedbackId),null!=i&&i.hasHelpText&&b.push(i.helpTextId),o({},g,{"aria-describedby":b.join(" ")||void 0,id:null!=l?l:null==i?void 0:i.id,isDisabled:null!=(r=null!=s?s:f)?r:null==i?void 0:i.isDisabled,isReadOnly:null!=(a=null!=d?d:m)?a:null==i?void 0:i.isReadOnly,isRequired:null!=(n=null!=c?c:p)?n:null==i?void 0:i.isRequired,isInvalid:null!=v?v:null==i?void 0:i.isInvalid,onFocus:(0,t.v0)(null==i?void 0:i.onFocus,h),onBlur:(0,t.v0)(null==i?void 0:i.onBlur,y)})}var C=(0,i.eC)("FormError"),j=C[0],k=C[1],T=(0,i.Gp)((function(e,r){var a=(0,i.jC)("FormError",e),n=(0,i.Lr)(e),l=I();return null!=l&&l.isInvalid?s.createElement(j,{value:a},s.createElement(i.m$.div,o({},null==l?void 0:l.getErrorMessageProps(n,r),{className:(0,t.cx)("chakra-form__error-message",e.className),__css:o({display:"flex",alignItems:"center"},a.text)}))):null}));t.Ts&&(T.displayName="FormErrorMessage");var q=(0,i.Gp)((function(e,r){var a=k(),n=I();if(null==n||!n.isInvalid)return null;var i=(0,t.cx)("chakra-form__error-icon",e.className);return s.createElement(d.ZP,o({ref:r,"aria-hidden":!0},e,{__css:a.icon,className:i}),s.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));t.Ts&&(q.displayName="FormErrorIcon");var F=["className","children","requiredIndicator","optionalIndicator"],O=(0,i.Gp)((function(e,r){var a,n=(0,i.mq)("FormLabel",e),l=(0,i.Lr)(e);l.className;var d=l.children,c=l.requiredIndicator,p=void 0===c?s.createElement(Z,null):c,v=l.optionalIndicator,m=void 0===v?null:v,f=u(l,F),h=I(),y=null!=(a=null==h?void 0:h.getLabelProps(f,r))?a:o({ref:r},f);return s.createElement(i.m$.label,o({},y,{className:(0,t.cx)("chakra-form__label",l.className),__css:o({display:"block",textAlign:"start"},n)}),d,null!=h&&h.isRequired?p:m)}));t.Ts&&(O.displayName="FormLabel");var Z=(0,i.Gp)((function(e,r){var a=I(),n=h();if(null==a||!a.isRequired)return null;var l=(0,t.cx)("chakra-form__required-indicator",e.className);return s.createElement(i.m$.span,o({},null==a?void 0:a.getRequiredIndicatorProps(e,r),{__css:n.requiredIndicator,className:l}))}));t.Ts&&(Z.displayName="RequiredIndicator")},5798:function(e,r,a){a.d(r,{II:function(){return c}});var n=a(3393),i=a(1938),t=a(6831),l=a(2791),s=a(9611);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function o(e,r){if(null==e)return{};var a,n,i={},t=Object.keys(e);for(n=0;n<t.length;n++)a=t[n],r.indexOf(a)>=0||(i[a]=e[a]);return i}var u=["htmlSize"],c=(0,i.Gp)((function(e,r){var a=e.htmlSize,s=o(e,u),c=(0,i.jC)("Input",s),p=(0,i.Lr)(s),v=(0,n.Yp)(p),m=(0,t.cx)("chakra-input",e.className);return l.createElement(i.m$.input,d({size:a},v,{__css:c.field,ref:r,className:m}))}));t.Ts&&(c.displayName="Input"),c.id="Input";var p=["children","className"],v=(0,i.eC)("InputGroup"),m=v[0],f=v[1],h=(0,i.Gp)((function(e,r){var a=(0,i.jC)("Input",e),n=(0,i.Lr)(e),u=n.children,c=n.className,v=o(n,p),f=(0,t.cx)("chakra-input__group",c),h={},y=(0,s.WR)(u),g=a.field;y.forEach((function(e){if(a){var r,n;if(g&&"InputLeftElement"===e.type.id)h.paddingStart=null!=(r=g.height)?r:g.h;if(g&&"InputRightElement"===e.type.id)h.paddingEnd=null!=(n=g.height)?n:g.h;"InputRightAddon"===e.type.id&&(h.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(h.borderStartRadius=0)}}));var I=y.map((function(r){var a,n,i=(0,t.YU)({size:(null==(a=r.props)?void 0:a.size)||e.size,variant:(null==(n=r.props)?void 0:n.variant)||e.variant});return"Input"!==r.type.id?l.cloneElement(r,i):l.cloneElement(r,Object.assign(i,h,r.props))}));return l.createElement(i.m$.div,d({className:f,ref:r,__css:{width:"100%",display:"flex",position:"relative"}},v),l.createElement(m,{value:a},I))}));t.Ts&&(h.displayName="InputGroup");var y=["placement"],g={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},I=(0,i.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),b=(0,i.Gp)((function(e,r){var a,n=e.placement,i=void 0===n?"left":n,t=o(e,y),s=null!=(a=g[i])?a:{},u=f();return l.createElement(I,d({ref:r},t,{__css:d({},u.addon,s)}))}));t.Ts&&(b.displayName="InputAddon");var x=(0,i.Gp)((function(e,r){return l.createElement(b,d({ref:r,placement:"left"},e,{className:(0,t.cx)("chakra-input__left-addon",e.className)}))}));t.Ts&&(x.displayName="InputLeftAddon"),x.id="InputLeftAddon";var _=(0,i.Gp)((function(e,r){return l.createElement(b,d({ref:r,placement:"right"},e,{className:(0,t.cx)("chakra-input__right-addon",e.className)}))}));t.Ts&&(_.displayName="InputRightAddon"),_.id="InputRightAddon";var N=["placement"],E=["className"],R=["className"],C=(0,i.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),j=(0,i.Gp)((function(e,r){var a,n,i,t=e.placement,s=void 0===t?"left":t,u=o(e,N),c=f(),p=c.field,v=d(((i={})["left"===s?"insetStart":"insetEnd"]="0",i.width=null!=(a=null==p?void 0:p.height)?a:null==p?void 0:p.h,i.height=null!=(n=null==p?void 0:p.height)?n:null==p?void 0:p.h,i.fontSize=null==p?void 0:p.fontSize,i),c.element);return l.createElement(C,d({ref:r,__css:v},u))}));j.id="InputElement",t.Ts&&(j.displayName="InputElement");var k=(0,i.Gp)((function(e,r){var a=e.className,n=o(e,E),i=(0,t.cx)("chakra-input__left-element",a);return l.createElement(j,d({ref:r,placement:"left",className:i},n))}));k.id="InputLeftElement",t.Ts&&(k.displayName="InputLeftElement");var T=(0,i.Gp)((function(e,r){var a=e.className,n=o(e,R),i=(0,t.cx)("chakra-input__right-element",a);return l.createElement(j,d({ref:r,placement:"right",className:i},n))}));T.id="InputRightElement",t.Ts&&(T.displayName="InputRightElement")}}]);
//# sourceMappingURL=5210.3ddaa353.chunk.js.map