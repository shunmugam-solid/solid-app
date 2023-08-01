"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[5420],{5420:function(e,n,a){a.d(n,{XZ:function(){return A},O:function(){return T}});var r=a(6831),t=a(9611),i=a(2791),o=a(4083),l=a(5223),s=a(1938),d=a(7406),c=a(1856),u=a(3393),v=a(1212),f=!1,m=null,p=!1,h=new Set,b="undefined"!==typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function k(e,n){h.forEach((function(a){return a(e,n)}))}function y(e){p=!0,function(e){return!(e.metaKey||!b&&e.altKey||e.ctrlKey)}(e)&&(m="keyboard",k("keyboard",e))}function C(e){m="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(p=!0,k("pointer",e))}function g(e){e.target!==window&&e.target!==document&&(p||(m="keyboard",k("keyboard",e)),p=!1)}function E(){p=!1}function x(){return"pointer"!==m}function P(e){!function(){if("undefined"!==typeof window&&!f){var e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){p=!0;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a)},document.addEventListener("keydown",y,!0),document.addEventListener("keyup",y,!0),window.addEventListener("focus",g,!0),window.addEventListener("blur",E,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",C,!0),document.addEventListener("pointermove",C,!0),document.addEventListener("pointerup",C,!0)):(document.addEventListener("mousedown",C,!0),document.addEventListener("mousemove",C,!0),document.addEventListener("mouseup",C,!0)),f=!0}}(),e(x());var n=function(){return e(x())};return h.add(n),function(){h.delete(n)}}function I(){return I=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},I.apply(this,arguments)}var _=(0,t.kr)({name:"CheckboxGroupContext",strict:!1}),w=(_[0],_[1]);function R(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}r.Ts;var B=["isIndeterminate","isChecked"];var q=function(e){var n=d.E;return"custom"in n&&"function"===typeof n.custom?n.custom(e):n(e)}(s.m$.svg),N=function(e){return i.createElement(q,I({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),i.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"}))},F=function(e){return i.createElement(q,I({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},e),i.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))},O=function(e){var n=e.open,a=e.children;return i.createElement(c.M,{initial:!1},n&&i.createElement(d.E.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},a))},D=function(e){var n=e.isIndeterminate,a=e.isChecked,r=R(e,B),t=n?F:N;return i.createElement(O,{open:a||n},i.createElement(t,r))},L=["defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function T(e){void 0===e&&(e={});var n=(0,u.Kn)(e),a=n.isDisabled,s=n.isReadOnly,d=n.isRequired,c=n.isInvalid,f=n.id,m=n.onBlur,p=n.onFocus,h=n["aria-describedby"],b=e,k=b.defaultChecked,y=b.isChecked,C=b.isFocusable,g=b.onChange,E=b.isIndeterminate,x=b.name,_=b.value,w=b.tabIndex,B=void 0===w?void 0:w,q=b["aria-label"],N=b["aria-labelledby"],F=b["aria-invalid"],O=R(b,L),D=(0,r.CE)(O,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),T=(0,o.u)(g),S=(0,o.u)(m),j=(0,o.u)(p),H=(0,i.useState)(!1),A=H[0],K=H[1],$=(0,l.kt)(),G=$[0],X=$[1],Z=(0,l.kt)(),U=Z[0],z=Z[1],Q=(0,l.kt)(),W=Q[0],Y=Q[1];(0,i.useEffect)((function(){return P(K)}),[]);var J=(0,i.useRef)(null),V=(0,i.useState)(!0),ee=V[0],ne=V[1],ae=(0,i.useState)(!!k),re=ae[0],te=ae[1],ie=(0,l.pY)(y,re),oe=ie[0],le=ie[1],se=(0,i.useCallback)((function(e){s||a?e.preventDefault():(oe||te(le?e.target.checked:!!E||e.target.checked),null==T||T(e))}),[s,a,le,oe,E,T]);(0,o.a)((function(){J.current&&(J.current.indeterminate=Boolean(E))}),[E]),(0,l.rf)((function(){a&&X.off()}),[a,X]),(0,o.a)((function(){var e=J.current;null!=e&&e.form&&(e.form.onreset=function(){te(!!k)})}),[]);var de=a&&!C,ce=(0,i.useCallback)((function(e){" "===e.key&&Y.on()}),[Y]),ue=(0,i.useCallback)((function(e){" "===e.key&&Y.off()}),[Y]);(0,o.a)((function(){J.current&&(J.current.checked!==le&&te(J.current.checked))}),[J.current]);var ve=(0,i.useCallback)((function(e,n){void 0===e&&(e={}),void 0===n&&(n=null);return I({},e,{ref:n,"data-active":(0,r.PB)(W),"data-hover":(0,r.PB)(U),"data-checked":(0,r.PB)(le),"data-focus":(0,r.PB)(G),"data-focus-visible":(0,r.PB)(G&&A),"data-indeterminate":(0,r.PB)(E),"data-disabled":(0,r.PB)(a),"data-invalid":(0,r.PB)(c),"data-readonly":(0,r.PB)(s),"aria-hidden":!0,onMouseDown:(0,r.v0)(e.onMouseDown,(function(e){e.preventDefault(),Y.on()})),onMouseUp:(0,r.v0)(e.onMouseUp,Y.off),onMouseEnter:(0,r.v0)(e.onMouseEnter,z.on),onMouseLeave:(0,r.v0)(e.onMouseLeave,z.off)})}),[W,le,a,G,A,U,E,c,s,Y,z.off,z.on]),fe=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),I({},D,e,{ref:(0,t.lq)(n,(function(e){e&&ne("LABEL"===e.tagName)})),onClick:(0,r.v0)(e.onClick,(function(){var e;ee||(null==(e=J.current)||e.click(),(0,r.T_)(J.current,{nextTick:!0}))})),"data-disabled":(0,r.PB)(a),"data-checked":(0,r.PB)(le),"data-invalid":(0,r.PB)(c)})}),[D,a,le,c,ee]),me=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),I({},e,{ref:(0,t.lq)(J,n),type:"checkbox",name:x,value:_,id:f,tabIndex:B,onChange:(0,r.v0)(e.onChange,se),onBlur:(0,r.v0)(e.onBlur,S,X.off),onFocus:(0,r.v0)(e.onFocus,j,X.on),onKeyDown:(0,r.v0)(e.onKeyDown,ce),onKeyUp:(0,r.v0)(e.onKeyUp,ue),required:d,checked:le,disabled:de,readOnly:s,"aria-label":q,"aria-labelledby":N,"aria-invalid":F?Boolean(F):c,"aria-describedby":h,"aria-disabled":a,style:v.NL})}),[x,_,f,se,X.off,X.on,S,j,ce,ue,d,le,de,s,q,N,F,c,h,a,B]),pe=(0,i.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),I({},e,{ref:n,onMouseDown:(0,r.v0)(e.onMouseDown,M),onTouchStart:(0,r.v0)(e.onTouchStart,M),"data-disabled":(0,r.PB)(a),"data-checked":(0,r.PB)(le),"data-invalid":(0,r.PB)(c)})}),[le,a,c]);return{state:{isInvalid:c,isFocused:G,isChecked:le,isActive:W,isHovered:U,isIndeterminate:E,isDisabled:a,isReadOnly:s,isRequired:d},getRootProps:fe,getCheckboxProps:ve,getInputProps:me,getLabelProps:pe,htmlProps:D}}function M(e){e.preventDefault(),e.stopPropagation()}var S=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],j=(0,s.m$)("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),H=(0,s.m$)("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"}}),A=(0,s.Gp)((function(e,n){var a=w(),t=I({},a,e),o=(0,s.jC)("Checkbox",t),l=(0,s.Lr)(e),d=l.spacing,c=void 0===d?"0.5rem":d,u=l.className,v=l.children,f=l.iconColor,m=l.iconSize,p=l.icon,h=void 0===p?i.createElement(D,null):p,b=l.isChecked,k=l.isDisabled,y=void 0===k?null==a?void 0:a.isDisabled:k,C=l.onChange,g=l.inputProps,E=R(l,S),x=b;null!=a&&a.value&&l.value&&(x=a.value.includes(l.value));var P=C;null!=a&&a.onChange&&l.value&&(P=(0,r.PP)(a.onChange,C));var _=T(I({},E,{isDisabled:y,isChecked:x,onChange:P})),B=_.state,q=_.getInputProps,N=_.getCheckboxProps,F=_.getLabelProps,O=_.getRootProps,L=i.useMemo((function(){return I({opacity:B.isChecked||B.isIndeterminate?1:0,transform:B.isChecked||B.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:m,color:f},o.icon)}),[f,m,B.isChecked,B.isIndeterminate,o.icon]),M=i.cloneElement(h,{__css:L,isIndeterminate:B.isIndeterminate,isChecked:B.isChecked});return i.createElement(H,I({__css:o.container,className:(0,r.cx)("chakra-checkbox",u)},O()),i.createElement("input",I({className:"chakra-checkbox__input"},q(g,n))),i.createElement(j,I({__css:o.control,className:"chakra-checkbox__control"},N()),M),v&&i.createElement(s.m$.span,I({className:"chakra-checkbox__label"},F(),{__css:I({marginStart:c},o.label)}),v))}));r.Ts&&(A.displayName="Checkbox")},3393:function(e,n,a){a.d(n,{Kn:function(){return I},NI:function(){return C},NJ:function(){return y},Yp:function(){return P},lX:function(){return F}});var r=a(5223),t=a(1938),i=a(6831),o=a(9611),l=a(2791),s=a(9113);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}function c(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}var u=["id","isRequired","isInvalid","isDisabled","isReadOnly"],v=["getRootProps","htmlProps"],f=(0,t.eC)("FormControl"),m=f[0],p=f[1],h=p,b=(0,o.kr)({strict:!1,name:"FormControlContext"}),k=b[0],y=b[1];var C=(0,t.Gp)((function(e,n){var a=(0,t.jC)("Form",e),s=function(e){var n=e.id,a=e.isRequired,t=e.isInvalid,s=e.isDisabled,v=e.isReadOnly,f=c(e,u),m=(0,r.Me)(),p=n||"field-"+m,h=p+"-label",b=p+"-feedback",k=p+"-helptext",y=l.useState(!1),C=y[0],g=y[1],E=l.useState(!1),x=E[0],P=E[1],I=(0,r.kt)(),_=I[0],w=I[1],R=l.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),d({id:k},e,{ref:(0,o.lq)(n,(function(e){e&&P(!0)}))})}),[k]),B=l.useCallback((function(e,n){var a,r;return void 0===e&&(e={}),void 0===n&&(n=null),d({},e,{ref:n,"data-focus":(0,i.PB)(_),"data-disabled":(0,i.PB)(s),"data-invalid":(0,i.PB)(t),"data-readonly":(0,i.PB)(v),id:null!=(a=e.id)?a:h,htmlFor:null!=(r=e.htmlFor)?r:p})}),[p,s,_,t,v,h]),q=l.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),d({id:b},e,{ref:(0,o.lq)(n,(function(e){e&&g(!0)})),"aria-live":"polite"})}),[b]),N=l.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),d({},e,f,{ref:n,role:"group"})}),[f]),F=l.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),d({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!t,isReadOnly:!!v,isDisabled:!!s,isFocused:!!_,onFocus:w.on,onBlur:w.off,hasFeedbackText:C,setHasFeedbackText:g,hasHelpText:x,setHasHelpText:P,id:p,labelId:h,feedbackId:b,helpTextId:k,htmlProps:f,getHelpTextProps:R,getErrorMessageProps:q,getRootProps:N,getLabelProps:B,getRequiredIndicatorProps:F}}((0,t.Lr)(e)),f=s.getRootProps;s.htmlProps;var p=c(s,v),h=(0,i.cx)("chakra-form-control",e.className);return l.createElement(k,{value:p},l.createElement(m,{value:a},l.createElement(t.m$.div,d({},f({},n),{className:h,__css:a.container}))))}));i.Ts&&(C.displayName="FormControl");var g=(0,t.Gp)((function(e,n){var a=y(),r=p(),o=(0,i.cx)("chakra-form__helper-text",e.className);return l.createElement(t.m$.div,d({},null==a?void 0:a.getHelpTextProps(e,n),{__css:r.helperText,className:o}))}));i.Ts&&(g.displayName="FormHelperText");var E=["isDisabled","isInvalid","isReadOnly","isRequired"],x=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function P(e){var n=I(e),a=n.isDisabled,r=n.isInvalid,t=n.isReadOnly,o=n.isRequired;return d({},c(n,E),{disabled:a,readOnly:t,required:o,"aria-invalid":(0,i.Qm)(r),"aria-required":(0,i.Qm)(o),"aria-readonly":(0,i.Qm)(t)})}function I(e){var n,a,r,t=y(),o=e.id,l=e.disabled,s=e.readOnly,u=e.required,v=e.isRequired,f=e.isInvalid,m=e.isReadOnly,p=e.isDisabled,h=e.onFocus,b=e.onBlur,k=c(e,x),C=e["aria-describedby"]?[e["aria-describedby"]]:[];return null!=t&&t.hasFeedbackText&&null!=t&&t.isInvalid&&C.push(t.feedbackId),null!=t&&t.hasHelpText&&C.push(t.helpTextId),d({},k,{"aria-describedby":C.join(" ")||void 0,id:null!=o?o:null==t?void 0:t.id,isDisabled:null!=(n=null!=l?l:p)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(a=null!=s?s:m)?a:null==t?void 0:t.isReadOnly,isRequired:null!=(r=null!=u?u:v)?r:null==t?void 0:t.isRequired,isInvalid:null!=f?f:null==t?void 0:t.isInvalid,onFocus:(0,i.v0)(null==t?void 0:t.onFocus,h),onBlur:(0,i.v0)(null==t?void 0:t.onBlur,b)})}var _=(0,t.eC)("FormError"),w=_[0],R=_[1],B=(0,t.Gp)((function(e,n){var a=(0,t.jC)("FormError",e),r=(0,t.Lr)(e),o=y();return null!=o&&o.isInvalid?l.createElement(w,{value:a},l.createElement(t.m$.div,d({},null==o?void 0:o.getErrorMessageProps(r,n),{className:(0,i.cx)("chakra-form__error-message",e.className),__css:d({display:"flex",alignItems:"center"},a.text)}))):null}));i.Ts&&(B.displayName="FormErrorMessage");var q=(0,t.Gp)((function(e,n){var a=R(),r=y();if(null==r||!r.isInvalid)return null;var t=(0,i.cx)("chakra-form__error-icon",e.className);return l.createElement(s.ZP,d({ref:n,"aria-hidden":!0},e,{__css:a.icon,className:t}),l.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));i.Ts&&(q.displayName="FormErrorIcon");var N=["className","children","requiredIndicator","optionalIndicator"],F=(0,t.Gp)((function(e,n){var a,r=(0,t.mq)("FormLabel",e),o=(0,t.Lr)(e);o.className;var s=o.children,u=o.requiredIndicator,v=void 0===u?l.createElement(O,null):u,f=o.optionalIndicator,m=void 0===f?null:f,p=c(o,N),h=y(),b=null!=(a=null==h?void 0:h.getLabelProps(p,n))?a:d({ref:n},p);return l.createElement(t.m$.label,d({},b,{className:(0,i.cx)("chakra-form__label",o.className),__css:d({display:"block",textAlign:"start"},r)}),s,null!=h&&h.isRequired?v:m)}));i.Ts&&(F.displayName="FormLabel");var O=(0,t.Gp)((function(e,n){var a=y(),r=h();if(null==a||!a.isRequired)return null;var o=(0,i.cx)("chakra-form__required-indicator",e.className);return l.createElement(t.m$.span,d({},null==a?void 0:a.getRequiredIndicatorProps(e,n),{__css:r.requiredIndicator,className:o}))}));i.Ts&&(O.displayName="RequiredIndicator")}}]);
//# sourceMappingURL=5420.a005ed38.chunk.js.map