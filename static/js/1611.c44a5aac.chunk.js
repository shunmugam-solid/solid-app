(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[1611,2970,6154],{9458:function(e,n,r){"use strict";var a=r(2791),t=r(9275);n.Z=function(e){var n={token:e.token,onSuccess:e.onSuccess,onExit:e.onExit},r=(0,t.usePlaidLink)(n),i=r.open,o=r.ready;return(0,a.useEffect)((function(){o&&i()}),[o,i]),null}},1611:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return j}});var a=r(9439),t=r(2791),i=r(2020),o=r(2504),l=r(8735),s=r(3445),u=r(7689),c=r(5048),d=r(5649),f=r(4144),v="MoveFundsAnotherBank_bankList__rOFOF",p="MoveFundsAnotherBank_pullFrom__2wZWm",b="MoveFundsAnotherBank_bankInfo__w2vAO",h="MoveFundsAnotherBank_removeBank__J95Cs",m="MoveFundsAnotherBank_linkAccount__OtDC-",y="MoveFundsAnotherBank_transferType__iTsG1",k=r(5304),g=r(3741),x=r(80),_=r(9458),O=r(1778),P=r(9578),E=r(2942),C=r(184),j=function(){var e=(0,i.$)().t,n=(0,u.s0)(),r=(0,k.Qo)(),j=(0,k.CG)((function(e){return e.account}),c.wU),F=j.selectedAccount,N=j.selfBankAccounts,w=(0,t.useState)(null),I=(0,a.Z)(w,2),R=I[0],S=I[1],B=(0,t.useState)(""),T=(0,a.Z)(B,2),D=T[0],q=T[1],A=(0,O.qu)().startScreen,M=(0,O._f)("toOtherBank").showBack,L=(0,t.useCallback)((function(){F&&r((0,g.MI)(null===F||void 0===F?void 0:F.id)).then((function(e){S(e.linkToken)})).catch(x.WH)}),[F]),G=(0,t.useCallback)((function(e,n){var a;(S(null),null!==F&&void 0!==F&&F.id)&&r((0,g.GS)({accountId:F.id,plaidAccountId:null===(a=n.accounts[0])||void 0===a?void 0:a.id,plaidToken:e})).catch((function(){(0,x.c0)("An error occurred.","Unable to verify plaid account","error")}))}),[F]);return(0,t.useEffect)((function(){F&&r((0,g.CB)(F.id))}),[F]),(0,C.jsx)("div",{className:"page",children:(0,C.jsx)(d.Z,{heading:e("move_funds_another_bank.title"),footer:(0,C.jsx)(o.zx,{width:"100%",variant:"primary",disabled:""===D,onClick:function(){n("/pullfunds/otherbank/info/".concat(D))},children:e("move_funds_another_bank.ctaText")}),showBack:M,onBack:function(){(0,P.bG)(E.CW.BACK_PRESSED,{from:"toOtherBank"}),"toOtherBank"!==A&&n(-1)},children:(0,C.jsxs)(l.xu,{width:"100%",children:[0!==N.length?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(l.xv,{variant:"large",className:p,children:e("move_funds_another_bank.list_title")}),(0,C.jsx)(l.xu,{className:v,children:(0,C.jsx)(s.Ee,{onChange:q,value:D,children:N.map((function(n){return(0,C.jsxs)(l.xu,{className:b,children:[(0,C.jsx)(s.Y8,{value:n.id,children:(0,C.jsxs)(l.xv,{variant:"regular",className:"text-dark",children:[n.ach.bankName," ","XXXXXX"," ",n.ach.accountNumber.slice(n.ach.accountNumber.length-4)]})}),(0,C.jsx)(l.xv,{className:h,onClick:function(){r((0,g.d8)(n.id))},children:e("move_funds_another_bank.remove")})]},n.id)}))})})]}):null,(0,C.jsx)(l.xv,{variant:"large",className:m,children:e("move_funds_another_bank.linkAccount")}),(0,C.jsx)(o.zx,{width:"100%",variant:"unstyled",onClick:function(){L()},children:(0,C.jsxs)(l.Ug,{className:y,children:[(0,C.jsx)(l.xu,{children:(0,C.jsx)(l.xv,{variant:"regular",children:e("move_funds_another_bank.linkAnotherAccount")})}),(0,C.jsx)(f.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})}),R?(0,C.jsx)(_.Z,{token:R,onSuccess:G,onExit:function(){S(null)}}):null]})})})}},3393:function(e,n,r){"use strict";r.d(n,{Kn:function(){return E},NI:function(){return g},NJ:function(){return k},Yp:function(){return P},lX:function(){return R}});var a=r(5223),t=r(1938),i=r(6831),o=r(9611),l=r(2791),s=r(9113);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}var d=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],v=(0,t.eC)("FormControl"),p=v[0],b=v[1],h=b,m=(0,o.kr)({strict:!1,name:"FormControlContext"}),y=m[0],k=m[1];var g=(0,t.Gp)((function(e,n){var r=(0,t.jC)("Form",e),s=function(e){var n=e.id,r=e.isRequired,t=e.isInvalid,s=e.isDisabled,f=e.isReadOnly,v=c(e,d),p=(0,a.Me)(),b=n||"field-"+p,h=b+"-label",m=b+"-feedback",y=b+"-helptext",k=l.useState(!1),g=k[0],x=k[1],_=l.useState(!1),O=_[0],P=_[1],E=(0,a.kt)(),C=E[0],j=E[1],F=l.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),u({id:y},e,{ref:(0,o.lq)(n,(function(e){e&&P(!0)}))})}),[y]),N=l.useCallback((function(e,n){var r,a;return void 0===e&&(e={}),void 0===n&&(n=null),u({},e,{ref:n,"data-focus":(0,i.PB)(C),"data-disabled":(0,i.PB)(s),"data-invalid":(0,i.PB)(t),"data-readonly":(0,i.PB)(f),id:null!=(r=e.id)?r:h,htmlFor:null!=(a=e.htmlFor)?a:b})}),[b,s,C,t,f,h]),w=l.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),u({id:m},e,{ref:(0,o.lq)(n,(function(e){e&&x(!0)})),"aria-live":"polite"})}),[m]),I=l.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),u({},e,v,{ref:n,role:"group"})}),[v]),R=l.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),u({},e,{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!t,isReadOnly:!!f,isDisabled:!!s,isFocused:!!C,onFocus:j.on,onBlur:j.off,hasFeedbackText:g,setHasFeedbackText:x,hasHelpText:O,setHasHelpText:P,id:b,labelId:h,feedbackId:m,helpTextId:y,htmlProps:v,getHelpTextProps:F,getErrorMessageProps:w,getRootProps:I,getLabelProps:N,getRequiredIndicatorProps:R}}((0,t.Lr)(e)),v=s.getRootProps;s.htmlProps;var b=c(s,f),h=(0,i.cx)("chakra-form-control",e.className);return l.createElement(y,{value:b},l.createElement(p,{value:r},l.createElement(t.m$.div,u({},v({},n),{className:h,__css:r.container}))))}));i.Ts&&(g.displayName="FormControl");var x=(0,t.Gp)((function(e,n){var r=k(),a=b(),o=(0,i.cx)("chakra-form__helper-text",e.className);return l.createElement(t.m$.div,u({},null==r?void 0:r.getHelpTextProps(e,n),{__css:a.helperText,className:o}))}));i.Ts&&(x.displayName="FormHelperText");var _=["isDisabled","isInvalid","isReadOnly","isRequired"],O=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function P(e){var n=E(e),r=n.isDisabled,a=n.isInvalid,t=n.isReadOnly,o=n.isRequired;return u({},c(n,_),{disabled:r,readOnly:t,required:o,"aria-invalid":(0,i.Qm)(a),"aria-required":(0,i.Qm)(o),"aria-readonly":(0,i.Qm)(t)})}function E(e){var n,r,a,t=k(),o=e.id,l=e.disabled,s=e.readOnly,d=e.required,f=e.isRequired,v=e.isInvalid,p=e.isReadOnly,b=e.isDisabled,h=e.onFocus,m=e.onBlur,y=c(e,O),g=e["aria-describedby"]?[e["aria-describedby"]]:[];return null!=t&&t.hasFeedbackText&&null!=t&&t.isInvalid&&g.push(t.feedbackId),null!=t&&t.hasHelpText&&g.push(t.helpTextId),u({},y,{"aria-describedby":g.join(" ")||void 0,id:null!=o?o:null==t?void 0:t.id,isDisabled:null!=(n=null!=l?l:b)?n:null==t?void 0:t.isDisabled,isReadOnly:null!=(r=null!=s?s:p)?r:null==t?void 0:t.isReadOnly,isRequired:null!=(a=null!=d?d:f)?a:null==t?void 0:t.isRequired,isInvalid:null!=v?v:null==t?void 0:t.isInvalid,onFocus:(0,i.v0)(null==t?void 0:t.onFocus,h),onBlur:(0,i.v0)(null==t?void 0:t.onBlur,m)})}var C=(0,t.eC)("FormError"),j=C[0],F=C[1],N=(0,t.Gp)((function(e,n){var r=(0,t.jC)("FormError",e),a=(0,t.Lr)(e),o=k();return null!=o&&o.isInvalid?l.createElement(j,{value:r},l.createElement(t.m$.div,u({},null==o?void 0:o.getErrorMessageProps(a,n),{className:(0,i.cx)("chakra-form__error-message",e.className),__css:u({display:"flex",alignItems:"center"},r.text)}))):null}));i.Ts&&(N.displayName="FormErrorMessage");var w=(0,t.Gp)((function(e,n){var r=F(),a=k();if(null==a||!a.isInvalid)return null;var t=(0,i.cx)("chakra-form__error-icon",e.className);return l.createElement(s.ZP,u({ref:n,"aria-hidden":!0},e,{__css:r.icon,className:t}),l.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}));i.Ts&&(w.displayName="FormErrorIcon");var I=["className","children","requiredIndicator","optionalIndicator"],R=(0,t.Gp)((function(e,n){var r,a=(0,t.mq)("FormLabel",e),o=(0,t.Lr)(e);o.className;var s=o.children,d=o.requiredIndicator,f=void 0===d?l.createElement(S,null):d,v=o.optionalIndicator,p=void 0===v?null:v,b=c(o,I),h=k(),m=null!=(r=null==h?void 0:h.getLabelProps(b,n))?r:u({ref:n},b);return l.createElement(t.m$.label,u({},m,{className:(0,i.cx)("chakra-form__label",o.className),__css:u({display:"block",textAlign:"start"},a)}),s,null!=h&&h.isRequired?f:p)}));i.Ts&&(R.displayName="FormLabel");var S=(0,t.Gp)((function(e,n){var r=k(),a=h();if(null==r||!r.isRequired)return null;var o=(0,i.cx)("chakra-form__required-indicator",e.className);return l.createElement(t.m$.span,u({},null==r?void 0:r.getRequiredIndicatorProps(e,n),{__css:a.requiredIndicator,className:o}))}));i.Ts&&(S.displayName="RequiredIndicator")},3445:function(e,n,r){"use strict";r.d(n,{Ee:function(){return k},Y8:function(){return P},ar:function(){return p},xL:function(){return x}});var a=r(1938),t=r(7160),i=r(6831),o=r(2791),l=r(9611),s=r(5223),u=r(3393),c=r(1212);function d(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},f.apply(this,arguments)}var v=["onChange","value","defaultValue","name","isDisabled","isFocusable","isNative"];function p(e){void 0===e&&(e={});var n=e,r=n.onChange,a=n.value,t=n.defaultValue,u=n.name,c=n.isDisabled,p=n.isFocusable,b=n.isNative,h=d(n,v),m=o.useState(t||""),y=m[0],k=m[1],g=(0,s.pY)(a,y),x=g[0],_=g[1],O=o.useRef(null),P=o.useCallback((function(){var e=O.current;if(e){var n="input:not(:disabled):checked",r=e.querySelector(n);if(r)r.focus();else{n="input:not(:disabled)";var a=e.querySelector(n);null==a||a.focus()}}}),[]),E=(0,s.Me)(void 0,"radio"),C=u||E,j=o.useCallback((function(e){var n=(0,i.kA)(e)?e.target.value:e;x||k(n),null==r||r(String(n))}),[r,x]),F=o.useCallback((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),f({},e,{ref:(0,l.lq)(n,O),role:"radiogroup"})}),[]),N=o.useCallback((function(e,n){var r;return void 0===e&&(e={}),void 0===n&&(n=null),f({},e,((r={ref:n,name:C})[b?"checked":"isChecked"]=null!=_?e.value===_:void 0,r.onChange=j,r["data-radiogroup"]=!0,r))}),[b,C,j,_]);return{getRootProps:F,getRadioProps:N,name:C,ref:O,focus:P,setValue:k,value:_,onChange:j,isDisabled:c,isFocusable:p,htmlProps:h}}var b=["colorScheme","size","variant","children","className","isDisabled","isFocusable"],h=(0,l.kr)({name:"RadioGroupContext",strict:!1}),m=h[0],y=h[1],k=(0,a.Gp)((function(e,n){var r=e.colorScheme,t=e.size,l=e.variant,s=e.children,u=e.className,c=e.isDisabled,v=e.isFocusable,h=p(d(e,b)),y=h.value,k=h.onChange,g=h.getRootProps,x=h.name,_=h.htmlProps,O=o.useMemo((function(){return{name:x,size:t,onChange:k,colorScheme:r,value:y,variant:l,isDisabled:c,isFocusable:v}}),[x,t,k,r,y,l,c,v]),P=g(_,n),E=(0,i.cx)("chakra-radio-group",u);return o.createElement(m,{value:O},o.createElement(a.m$.div,f({},P,{className:E}),s))}));i.Ts&&(k.displayName="RadioGroup");var g=["defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isInvalid","name","value","id","data-radiogroup","aria-describedby"];function x(e){void 0===e&&(e={});var n=e,r=n.defaultChecked,a=n.isChecked,t=n.isFocusable,l=n.isDisabled,v=n.isReadOnly,p=n.isRequired,b=n.onChange,h=n.isInvalid,m=n.name,k=n.value,x=n.id,O=n["data-radiogroup"],P=n["aria-describedby"],E=d(n,g),C=(0,s.Me)(void 0,"radio"),j=(0,u.NJ)(),F=y(),N=!!j&&!(!!F||!!O)?j.id:C;N=null!=x?x:N;var w=null!=l?l:null==j?void 0:j.isDisabled,I=null!=v?v:null==j?void 0:j.isReadOnly,R=null!=p?p:null==j?void 0:j.isRequired,S=null!=h?h:null==j?void 0:j.isInvalid,B=(0,s.kt)(),T=B[0],D=B[1],q=(0,s.kt)(),A=q[0],M=q[1],L=(0,s.kt)(),G=L[0],H=L[1],Z=(0,o.useState)(Boolean(r)),$=Z[0],U=Z[1],K=(0,s.pY)(a,$),X=K[0],z=K[1],Q=(0,o.useCallback)((function(e){I||w?e.preventDefault():(X||U(e.target.checked),null==b||b(e))}),[X,w,I,b]),Y=(0,o.useCallback)((function(e){" "===e.key&&H.on()}),[H]),V=(0,o.useCallback)((function(e){" "===e.key&&H.off()}),[H]),J=(0,o.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),f({},e,{ref:n,"data-active":(0,i.PB)(G),"data-hover":(0,i.PB)(A),"data-disabled":(0,i.PB)(w),"data-invalid":(0,i.PB)(S),"data-checked":(0,i.PB)(z),"data-focus":(0,i.PB)(T),"data-readonly":(0,i.PB)(I),"aria-hidden":!0,onMouseDown:(0,i.v0)(e.onMouseDown,H.on),onMouseUp:(0,i.v0)(e.onMouseUp,H.off),onMouseEnter:(0,i.v0)(e.onMouseEnter,M.on),onMouseLeave:(0,i.v0)(e.onMouseLeave,M.off)})}),[G,A,w,S,z,T,I,H.on,H.off,M.on,M.off]),W=null!=j?j:{},ee=W.onFocus,ne=W.onBlur,re=(0,o.useCallback)((function(e,n){void 0===e&&(e={}),void 0===n&&(n=null);var r=w&&!t;return f({},e,{id:N,ref:n,type:"radio",name:m,value:k,onChange:(0,i.v0)(e.onChange,Q),onBlur:(0,i.v0)(ne,e.onBlur,D.off),onFocus:(0,i.v0)(ee,e.onFocus,D.on),onKeyDown:(0,i.v0)(e.onKeyDown,Y),onKeyUp:(0,i.v0)(e.onKeyUp,V),checked:z,disabled:r,readOnly:I,required:R,"aria-invalid":(0,i.Qm)(S),"aria-disabled":(0,i.Qm)(r),"aria-required":(0,i.Qm)(R),"data-readonly":(0,i.PB)(I),"aria-describedby":P,style:c.NL})}),[w,t,N,m,k,Q,ne,D,ee,Y,V,z,I,R,S,P]);return{state:{isInvalid:S,isFocused:T,isChecked:z,isActive:G,isHovered:A,isDisabled:w,isReadOnly:I,isRequired:R},getCheckboxProps:J,getInputProps:re,getLabelProps:function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),f({},e,{ref:n,onMouseDown:(0,i.v0)(e.onMouseDown,_),onTouchStart:(0,i.v0)(e.onTouchStart,_),"data-disabled":(0,i.PB)(w),"data-checked":(0,i.PB)(z),"data-invalid":(0,i.PB)(S)})},getRootProps:function(e,n){return void 0===n&&(n=null),f({},e,{ref:n,"data-disabled":(0,i.PB)(w),"data-checked":(0,i.PB)(z),"data-invalid":(0,i.PB)(S)})},htmlProps:E}}function _(e){e.preventDefault(),e.stopPropagation()}var O=["spacing","children","isDisabled","isFocusable","inputProps"],P=(0,a.Gp)((function(e,n){var r,l=y(),s=e.onChange,u=e.value,c=(0,a.jC)("Radio",f({},l,e)),v=(0,a.Lr)(e),p=v.spacing,b=void 0===p?"0.5rem":p,h=v.children,m=v.isDisabled,k=void 0===m?null==l?void 0:l.isDisabled:m,g=v.isFocusable,_=void 0===g?null==l?void 0:l.isFocusable:g,P=v.inputProps,E=d(v,O),C=e.isChecked;null!=(null==l?void 0:l.value)&&null!=u&&(C=l.value===u);var j=s;null!=l&&l.onChange&&null!=u&&(j=(0,i.PP)(l.onChange,s));var F=x(f({},E,{isChecked:C,isFocusable:_,isDisabled:k,onChange:j,name:null!=(r=null==e?void 0:e.name)?r:null==l?void 0:l.name})),N=F.getInputProps,w=F.getCheckboxProps,I=F.getLabelProps,R=F.getRootProps,S=F.htmlProps,B=(0,i.Vl)(S,t.oE),T=B[0],D=w(B[1]),q=N(P,n),A=I(),M=Object.assign({},T,R()),L=f({display:"inline-flex",alignItems:"center",verticalAlign:"top",cursor:"pointer",position:"relative"},c.container),G=f({display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0},c.control),H=f({userSelect:"none",marginStart:b},c.label);return o.createElement(a.m$.label,f({className:"chakra-radio"},M,{__css:L}),o.createElement("input",f({className:"chakra-radio__input"},q)),o.createElement(a.m$.span,f({className:"chakra-radio__control"},D,{__css:G})),h&&o.createElement(a.m$.span,f({className:"chakra-radio__label"},A,{__css:H}),h))}));i.Ts&&(P.displayName="Radio")},9275:function(e,n,r){!function(e,n){"use strict";var a="default"in n?n.default:n;function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}function s(e,n){if(null==e)return{};var r,a,t=l(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function u(e,n){return c(e)||d(e,n)||f(e,n)||p()}function c(e){if(Array.isArray(e))return e}function d(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,t,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!n||i.length!==n);o=!0);}catch(s){l=!0,t=s}finally{try{o||null==r.return||r.return()}finally{if(l)throw t}}return i}}function f(e,n){if(e){if("string"===typeof e)return v(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,n):void 0}}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,a=new Array(n);r<n;r++)a[r]=e[r];return a}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var b="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:"undefined"!==typeof self?self:{};function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function m(e,n){return e(n={exports:{}},n.exports),n.exports}var y=m((function(e,n){var r=b&&b.__rest||function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]])}return r};Object.defineProperty(n,"__esModule",{value:!0}),n.scripts=void 0,n.scripts={};var t=function(e){var r=document.querySelector('script[src="'+e+'"]');if(r)return n.scripts[e]={loading:!1,error:null,scriptEl:r}};function i(e){var i=e.src,l=e.checkForExisting,s=void 0!==l&&l,u=r(e,["src","checkForExisting"]),c=i?n.scripts[i]:void 0;!c&&s&&i&&o&&(c=t(i));var d=(0,a.useState)(c?c.loading:Boolean(i)),f=d[0],v=d[1],p=(0,a.useState)(c?c.error:null),b=p[0],h=p[1];return(0,a.useEffect)((function(){if(o&&i&&f&&!b){var e;!(c=n.scripts[i])&&s&&(c=t(i)),c?e=c.scriptEl:((e=document.createElement("script")).src=i,Object.keys(u).forEach((function(n){void 0===e[n]?e.setAttribute(n,u[n]):e[n]=u[n]})),c=n.scripts[i]={loading:!0,error:null,scriptEl:e});var r=function(){c&&(c.loading=!1),v(!1)},a=function(e){c&&(c.error=e),h(e)};return e.addEventListener("load",r),e.addEventListener("error",a),document.body.appendChild(e),function(){e.removeEventListener("load",r),e.removeEventListener("error",a)}}}),[i]),[f,b]}n.default=i;var o="undefined"!==typeof window&&"undefined"!==typeof window.document}));h(y),y.scripts;var k,g=m((function(e,n){var r=b&&b.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.scripts=n.default=void 0,Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r(y).default}}),Object.defineProperty(n,"scripts",{enumerable:!0,get:function(){return y.scripts}})})),x=h(g),_=(g.scripts,function(e,n,r){var a={};return delete Object.assign(a,e,o({},r,e[n]))[n],a}),O=function(e,n){var r={plaid:null,open:!1,onExitCallback:null};if("undefined"===typeof window||!window.Plaid)throw new Error("Plaid not loaded");return r.plaid=n(i(i({},e),{},{onExit:function(n,a){r.open=!1,e.onExit&&e.onExit(n,a),r.onExitCallback&&r.onExitCallback()}})),{open:function(){r.plaid&&(r.open=!0,r.onExitCallback=null,r.plaid.open())},exit:function(e,n){r.open&&r.plaid?(r.onExitCallback=n,r.plaid.exit(e),e&&e.force&&(r.open=!1)):n&&n()},destroy:function(){r.plaid&&(r.plaid.destroy(),r.plaid=null)}}},P=function(e,n){var r=_(e,"publicKey","key");return O(r,n)},E="https://cdn.plaid.com/link/v2/stable/link-initialize.js",C=function(){},j=function(e){var r=u(x({src:E,checkForExisting:!0}),2),a=r[0],t=r[1],o=u(n.useState(null),2),l=o[0],s=o[1],c=u(n.useState(!1),2),d=c[0],f=c[1],v=(e.product||[]).slice().sort().join(",");n.useEffect((function(){if(!a&&(e.token||e.publicKey)){if(!t&&window.Plaid){null!=l&&l.exit({force:!0},(function(){return l.destroy()}));var n=P(i(i({},e),{},{onLoad:function(){f(!0),e.onLoad&&e.onLoad()}}),window.Plaid.create);return s(n),function(){return n.exit({force:!0},(function(){return n.destroy()}))}}console.error("Error loading Plaid",t)}}),[a,t,e.publicKey,e.token,v]);var p=function(){e.token||console.warn("react-plaid-link: You cannot call open() without a valid token supplied to usePlaidLink. This is a no-op.")};return{error:t,ready:null!=l&&(!a||d),exit:l?l.exit:C,open:l?l.open:p}},F=["children","style","className"],N=function(e){var n=e.children,r=e.style,t=e.className,o=s(e,F),l=j(i({},o)),u=l.error,c=l.open;return a.createElement("button",{disabled:Boolean(u),type:"button",className:t,style:i({padding:"6px 4px",outline:"none",background:"#FFFFFF",border:"2px solid #F1F1F1",borderRadius:"4px"},r),onClick:function(){return c()}},n)};N.displayName="PlaidLink",(k=e.PlaidLinkStableEvent||(e.PlaidLinkStableEvent={})).OPEN="OPEN",k.EXIT="EXIT",k.HANDOFF="HANDOFF",k.SELECT_INSTITUTION="SELECT_INSTITUTION",k.ERROR="ERROR",e.PlaidLink=N,e.usePlaidLink=j,Object.defineProperty(e,"__esModule",{value:!0})}(n,r(2791))}}]);
//# sourceMappingURL=1611.c44a5aac.chunk.js.map