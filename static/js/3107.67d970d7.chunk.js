"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[3107],{3107:function(e,n,t){t.r(n),t.d(n,{default:function(){return K}});var r=t(9439),i=t(2791),a=t(2020),s=t(1938),o=t(967),u=t(8735),l=t(2504),d=t(3393),c=t(6831),f=t(9611);function v(){return v=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},v.apply(this,arguments)}function p(e){return e.sort((function(e,n){var t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function m(e,n,t){var r=e+1;return t&&r>=n&&(r=0),r}function h(e,n,t){var r=e-1;return t&&r<0&&(r=n),r}var x="undefined"!==typeof window?i.useLayoutEffect:i.useEffect,b=function(e){return e},g=function(){var e=this;this.descendants=new Map,this.register=function(n){var t;if(null!=n)return"object"==typeof(t=n)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?e.registerNode(n):function(t){e.registerNode(t,n)}},this.unregister=function(n){e.descendants.delete(n);var t=p(Array.from(e.descendants.keys()));e.assignIndex(t)},this.destroy=function(){e.descendants.clear()},this.assignIndex=function(n){e.descendants.forEach((function(e){var t=n.indexOf(e.node);e.index=t,e.node.dataset.index=e.index.toString()}))},this.count=function(){return e.descendants.size},this.enabledCount=function(){return e.enabledValues().length},this.values=function(){return Array.from(e.descendants.values()).sort((function(e,n){return e.index-n.index}))},this.enabledValues=function(){return e.values().filter((function(e){return!e.disabled}))},this.item=function(n){if(0!==e.count())return e.values()[n]},this.enabledItem=function(n){if(0!==e.enabledCount())return e.enabledValues()[n]},this.first=function(){return e.item(0)},this.firstEnabled=function(){return e.enabledItem(0)},this.last=function(){return e.item(e.descendants.size-1)},this.lastEnabled=function(){var n=e.enabledValues().length-1;return e.enabledItem(n)},this.indexOf=function(n){var t,r;return n&&null!=(t=null==(r=e.descendants.get(n))?void 0:r.index)?t:-1},this.enabledIndexOf=function(n){return null==n?-1:e.enabledValues().findIndex((function(e){return e.node.isSameNode(n)}))},this.next=function(n,t){void 0===t&&(t=!0);var r=m(n,e.count(),t);return e.item(r)},this.nextEnabled=function(n,t){void 0===t&&(t=!0);var r=e.item(n);if(r){var i=m(e.enabledIndexOf(r.node),e.enabledCount(),t);return e.enabledItem(i)}},this.prev=function(n,t){void 0===t&&(t=!0);var r=h(n,e.count()-1,t);return e.item(r)},this.prevEnabled=function(n,t){void 0===t&&(t=!0);var r=e.item(n);if(r){var i=h(e.enabledIndexOf(r.node),e.enabledCount()-1,t);return e.enabledItem(i)}},this.registerNode=function(n,t){if(n&&!e.descendants.has(n)){var r=p(Array.from(e.descendants.keys()).concat(n));null!=t&&t.disabled&&(t.disabled=!!t.disabled);var i=v({node:n,index:-1},t);e.descendants.set(n,i),e.assignIndex(r)}}};var y=(0,f.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),N=y[0],C=y[1];var I=t(5223);function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O.apply(this,arguments)}function _(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var j=["index"],E=[b(N),function(){return b(C())},function(){return function(){var e=(0,i.useRef)(new g);return x((function(){return function(){return e.current.destroy()}})),e.current}()},function(e){return function(e){var n=C(),t=(0,i.useState)(-1),r=t[0],a=t[1],s=(0,i.useRef)(null);x((function(){return function(){s.current&&n.unregister(s.current)}}),[]),x((function(){if(s.current){var e=Number(s.current.dataset.index);r==e||Number.isNaN(e)||a(e)}}));var o=b(e?n.register(e):n.register);return{descendants:n,index:r,enabledIndex:n.enabledIndexOf(s.current),register:(0,f.lq)(o,s)}}(e)}],T=E[0],k=E[2],w=E[3],P=(0,f.kr)({name:"PinInputContext",errorMessage:"usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"}),S=P[0],D=P[1],A=function(e){return null==e?void 0:e.split("")};function M(e,n){return("alphanumeric"===n?/^[a-zA-Z0-9]+$/i:/^[0-9]+$/).test(e)}var V=["children"],F=["descendants"],U=function(e){var n=(0,s.mq)("PinInput",e),t=(0,s.Lr)(e),r=t.children,a=function(e){void 0===e&&(e={});var n=e,t=n.autoFocus,r=n.value,a=n.defaultValue,s=n.onChange,o=n.onComplete,u=n.placeholder,l=void 0===u?"\u25cb":u,d=n.manageFocus,f=void 0===d||d,v=n.otp,p=void 0!==v&&v,m=n.id,h=n.isDisabled,x=n.isInvalid,b=n.type,g=void 0===b?"number":b,y=n.mask,N=(0,I.Me)(),C=null!=m?m:"pin-input-"+N,E=k(),T=i.useState(!0),w=T[0],P=T[1],S=i.useState(-1),D=S[0],V=S[1],F=(0,I.Tx)({defaultValue:A(a)||[],value:A(r),onChange:function(e){return null==s?void 0:s(e.join(""))}}),U=F[0],B=F[1];i.useEffect((function(){if(t){var e=E.first();e&&(0,c.T_)(e.node,{nextTick:!0})}}),[E]);var G=i.useCallback((function(e){if(w&&f){var n=E.next(e,!1);n&&(0,c.T_)(n.node,{nextTick:!0})}}),[E,w,f]),L=i.useCallback((function(e,n){var t=[].concat(U);t[n]=e,B(t),""!==e&&t.length===E.count()&&t.every((function(e){return null!=e&&""!==e}))?null==o||o(t.join("")):G(n)}),[U,B,G,o,E]),q=i.useCallback((function(){var e=Array(E.count()).fill("");B(e);var n=E.first();n&&(0,c.T_)(n.node)}),[E,B]),R=i.useCallback((function(e,n){var t=n;return(null==e?void 0:e.length)>0&&(e[0]===n.charAt(0)?t=n.charAt(1):e[0]===n.charAt(1)&&(t=n.charAt(0))),t}),[]),z=i.useCallback((function(e){var n=e.index,t=_(e,j),r=D===n;return O({"aria-label":"Please enter your pin code",inputMode:"number"===g?"numeric":"text",type:y?"password":"number"===g?"tel":"text"},t,{id:C+"-"+n,disabled:h,"aria-invalid":(0,c.Qm)(x),onChange:(0,c.v0)(t.onChange,(function(e){var t=e.target.value,r=U[n],i=R(r,t);if(""!==i)if(t.length>2){if(M(t,g)){var a=t.split("").filter((function(e,n){return n<E.count()}));B(a),a.length===E.count()&&(null==o||o(a.join("")))}}else M(i,g)&&L(i,n),P(!0);else L("",n)})),onKeyDown:(0,c.v0)(t.onKeyDown,(function(e){if("Backspace"===e.key&&f)if(""===e.target.value){var t=E.prev(n,!1);t&&(L("",n-1),(0,c.T_)(t.node),P(!0))}else P(!1)})),onFocus:(0,c.v0)(t.onFocus,(function(){V(n)})),onBlur:(0,c.v0)(t.onBlur,(function(){V(-1)})),value:U[n]||"",autoComplete:p?"one-time-code":"off",placeholder:r?"":l})}),[E,D,R,C,h,y,x,f,o,p,l,L,B,g,U]);return{getInputProps:z,id:C,descendants:E,values:U,setValue:L,setValues:B,clear:q}}(_(t,V)),o=a.descendants,u=_(a,F),l=(0,f.WR)(r).map((function(e){return i.cloneElement(e,{__css:n})}));return i.createElement(T,{value:o},i.createElement(S,{value:u},l))};c.Ts&&(U.displayName="PinInput");var B=(0,s.Gp)((function(e,n){var t=function(e,n){void 0===e&&(e={}),void 0===n&&(n=null);var t=D().getInputProps,r=w(),i=r.index,a=r.register;return t(O({},e,{ref:(0,f.lq)(a,n),index:i}))}(e,n);return i.createElement(s.m$.input,O({},t,{className:(0,c.cx)("chakra-pin-input",e.className)}))}));c.Ts&&(B.displayName="PinInputField");var G=t(5048),L=t(5649),q="AtmPin_input_field__ulY3+",R=t(5304),z=t(80),Y=t(7208),Z=t(4661),$=t(184),K=function(){var e=(0,i.useRef)(),n=(0,Z.y)().goBack,t=(0,a.$)().t,c=(0,i.useState)(""),f=(0,r.Z)(c,2),v=f[0],p=f[1],m=(0,i.useState)(""),h=(0,r.Z)(m,2),x=h[0],b=h[1],g=(0,R.Qo)(),y=(0,R.CG)((function(e){return e.core.config.mode})),N=(0,R.CG)((function(e){return e.card.selectedCard}),G.wU),C=(0,s.mq)("Input",{variant:"primary"}),I=(0,i.useCallback)((function(){e.current=window.VGSCollect.create((0,z.Ab)(),"live"===y?"live":"sandbox",(function(){})),e.current.field("#dummy",{type:"text",name:"dummy"})}),[]);(0,i.useEffect)((function(){var e=document.createElement("script");return e.id="vgs-collect-script",e.crossOrigin="anonymous",e.src="https://js.verygoodvault.com/vgs-collect/2.11.0/vgs-collect.js",e.type="text/javascript",e.onload=I,document.head.append(e),function(){var e;window.VGSShow=void 0,null===(e=document.getElementById("vgs-collect-script"))||void 0===e||e.remove()}}),[]);var O=(0,i.useCallback)((function(){var r=(0,o.I2)().toast;if(v!==x)r({title:"An error occurred.",position:"top-right",description:t("atm_pin.samePin"),status:"error",duration:9e3,isClosable:!0});else if(-1!=="0123456789".indexOf(v)||-1!=="9876543210".indexOf(v)||v.split(v.charAt(0)).length-1===4)r({title:"An error occurred.",position:"top-right",description:t("atm_pin.atmPinCombination"),status:"error",duration:9e3,isClosable:!0});else if(N){var i={pin:v,expiryMonth:null===N||void 0===N?void 0:N.expiryMonth,expiryYear:null===N||void 0===N?void 0:N.expiryYear,last4:null===N||void 0===N?void 0:N.last4};g((0,Y.e)(null===N||void 0===N?void 0:N.id)).then((function(a){var s={"sd-pin-token":a.pinToken};(0,z.V_)(!0),e.current.submit("/v1/card/".concat(null===N||void 0===N?void 0:N.id,"/pin"),{data:function(){return i},headers:s},(function(e,i){200===e&&i&&((0,z.V_)(!1),r({title:"Success",position:"top-right",description:t("atm_pin.pinSetSuccess"),status:"success",duration:9e3,isClosable:!0}),n())}),(function(){(0,z.V_)(!1),r({title:"An error occurred.",position:"top-right",description:"Something went wrong and we could not process your request.",status:"error",duration:9e3,isClosable:!0})}))}))}}),[v,x]);return(0,$.jsx)("div",{className:"page",children:(0,$.jsx)(L.Z,{onBack:n,heading:t("atm_pin.title"),footer:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(u.xu,{pb:"16px",children:(0,$.jsxs)(u.xv,{display:"inline",variant:"small",className:"text-light",children:[t("atm_pin.footerDesc"),(0,$.jsx)("br",{}),(0,$.jsx)(u.rU,{display:"inline",variant:"primary",href:"https://www.solidfi.com/",isExternal:!0,children:t("atm_pin.learnMore")})]})}),(0,$.jsx)(l.zx,{width:"100%",variant:"primary",onClick:O,disabled:4!==v.length||4!==x.length,children:t("atm_pin.ctaText")})]}),children:(0,$.jsxs)(u.xu,{width:"100%",paddingTop:"15px",children:[(0,$.jsx)("div",{id:"dummy",className:"field-wrapper",style:{display:"none"}}),(0,$.jsx)(d.lX,{variant:"primary",mb:"16px",children:t("atm_pin.enterPin")}),(0,$.jsx)(u.xu,{mb:"32px",children:(0,$.jsxs)(U,{placeholder:"",mask:!0,onChange:p,value:v,children:[(0,$.jsx)(B,{className:q,style:C.field}),(0,$.jsx)(B,{className:q,style:C.field}),(0,$.jsx)(B,{className:q,style:C.field}),(0,$.jsx)(B,{className:q,style:C.field})]})}),(0,$.jsx)(d.lX,{variant:"primary",mb:"16px",children:t("atm_pin.reEnterPin")}),(0,$.jsx)(u.xu,{mb:"32px",children:(0,$.jsxs)(U,{placeholder:"",mask:!0,onChange:b,value:x,children:[(0,$.jsx)(B,{className:q,style:C.field}),(0,$.jsx)(B,{className:q,style:C.field}),(0,$.jsx)(B,{className:q,style:C.field}),(0,$.jsx)(B,{className:q,style:C.field})]})})]})})})}}}]);
//# sourceMappingURL=3107.67d970d7.chunk.js.map