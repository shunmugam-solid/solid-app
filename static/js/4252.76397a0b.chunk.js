"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[4252],{1023:function(e,n,t){var r=t(2791),i=t(5798),c=t(4398),l=t.n(c),a=t(184);n.Z=function(e){var n=e.onChange,t=e.value,c=e.placeholder,o=e.prefix,u=e.digits,s=(0,r.useRef)(null);return(0,r.useLayoutEffect)((function(){s.current&&l()("currency",{autoUnmask:!0,allowMinus:!1,prefix:null!==o&&void 0!==o?o:"$ ",placeholder:c,rightAlign:!1,digits:u,numericInput:!0}).mask(s.current)}),[o,u,c]),(0,a.jsx)(i.II,{"data-testid":"currency-input",variant:"primary",placeholder:c||"$ 0.00",ref:s,onChange:function(e){var t=e.target.value;n(t)},value:t})}},4126:function(e,n,t){t.d(n,{D:function(){return i},p:function(){return c}});var r=t(552),i=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"quantity",i=r.Z.getState().crypto.supportedCurrencies.data.find((function(n){return n.currency===e}));if(i){var c=i.limits[n];return"quantity"===t?c.minimumQty:c.minimumAmount||"0"}return"0"},c=function(e,n){var t=r.Z.getState().crypto.supportedCurrencies.data.find((function(n){return n.currency===e}));if(t){var i,c,l=(null===(i=t.limits[n].minimumQty)||void 0===i||null===(c=i.split(".")[1])||void 0===c?void 0:c.length)||2;return 0!==l?l:2}return 6}},4252:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(9439),i=t(2791),c=t(2020),l=t(1938),a=t(2504),o=t(8735),u=t(3393),s=t(7640),d=t(5798),p=t(5048),f=t(7689),h=t(5649),m="SellAmount_inputRightElement__qTFlY",v="SellAmount_currencyInput__+Wrwi",y=t(9578),g=t(5304),x=t(3741),_=t(4126),j=t(3717),C=t(80),S=t(2966),b=t(1778),E=t(2942),w=t(1023),N=t(184),k=function(){var e=(0,c.$)().t,n=(0,g.Qo)(),t=(0,f.s0)(),k=(0,l.mq)("FormControl",{variant:"primary"}),I=(0,g.CG)((function(e){return e.account}),p.wU),A=I.accounts,q=I.selectedAccount,Z=(0,g.CG)((function(e){return e.crypto}),p.wU),P=Z.selectedAccount,M=Z.supportedCurrencies,z=(0,b._f)("sellCrypto").showBack,B=(0,i.useState)((null===q||void 0===q?void 0:q.id)||""),H=(0,r.Z)(B,2),D=H[0],O=H[1],T=(0,i.useState)(""),$=(0,r.Z)(T,2),G=$[0],U=$[1],Y=(0,i.useState)("quantity"),F=(0,r.Z)(Y,2),L=F[0],Q=F[1],R=(0,i.useState)(""),W=(0,r.Z)(R,2),X=W[0],V=W[1],K=(0,i.useMemo)((function(){return A.filter((function(e){return"cardAccount"!==e.type}))}),[A]),J=(0,i.useMemo)((function(){return"quantity"===L&&null!==P&&void 0!==P&&P.currency?(0,_.p)(null===P||void 0===P?void 0:P.currency,"sell"):2}),[L,P,M]),ee=(0,i.useMemo)((function(){return null!==P&&void 0!==P&&P.currency?(0,_.D)(null===P||void 0===P?void 0:P.currency,"sell",L):0}),[L,P,M]),ne=(0,i.useMemo)((function(){return"0.".concat("0".repeat(J))}),[J]),te=(0,i.useMemo)((function(){return""!==G&&parseFloat(G)>0&&""!==L&&""!==D&&""!==X}),[G,L,D,X]);(0,i.useEffect)((function(){n((0,j._Y)())}),[]),(0,i.useEffect)((function(){n((0,x.Sg)(null,void 0,50))}),[]);var re=(0,i.useCallback)((function(){te&&P&&n((0,j.vh)({walletId:P.id,cryptoCurrency:P.currency,amount:"amount"===L?G:void 0,quantity:"quantity"===L?G:void 0})).then((function(){var e;n((0,S.YP)({selectedAccount:D,selectedAccountLabel:(null===(e=K.find((function(e){return e.id===D})))||void 0===e?void 0:e.label)||"",amount:G,type:L,description:X})),t("/crypto/sell/preview")})).catch(C.WH)}),[te,G,L,D,X,null===P||void 0===P?void 0:P.currency]);return(0,N.jsx)("div",{className:"page",children:(0,N.jsx)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),re()},children:(0,N.jsx)(h.Z,{heading:e("crypto_sell_account.title"),showBack:z,footer:(0,N.jsx)(a.zx,{disabled:!te,width:"100%",variant:"primary",type:"submit",children:e("crypto_sell_account.ctaText")}),onBack:function(){(0,y.bG)(E.CW.BACK_PRESSED,{from:"sellCrypto"})},children:(0,N.jsxs)(o.xu,{width:"100%",paddingTop:"15px",children:[(0,N.jsxs)(u.NI,{variant:"primary",style:k,children:[(0,N.jsx)(u.lX,{variant:"primary",children:e("crypto_sell_account.fundingAccount")}),(0,N.jsx)(s.Ph,{placeholder:e("crypto_sell_account.select"),variant:"primary",value:D,onChange:function(e){return O(e.target.value)},children:K.map((function(e){return(0,N.jsx)("option",{value:e.id,children:e.label},"account-".concat(e.id))}))})]}),(0,N.jsxs)(u.NI,{variant:"primary",style:k,children:[(0,N.jsx)(u.lX,{variant:"primary",children:e("crypto_sell_account.amountQuantity")}),(0,N.jsxs)(d.BZ,{className:v,children:[(0,N.jsx)(w.Z,{prefix:"",digits:J,placeholder:ne,value:G,onChange:function(e){U(e)}}),(0,N.jsx)(d.xH,{className:m,children:(0,N.jsxs)(s.Ph,{boxShadow:"none !important",outline:"none",fontSize:"14px",border:"0",value:L,onChange:function(e){return Q(e.target.value)},children:[(0,N.jsx)("option",{value:"quantity",children:null===P||void 0===P?void 0:P.currency}),(0,N.jsx)("option",{value:"amount",children:"USD"})]})})]}),(0,N.jsx)(o.xv,{variant:"small",className:"text-light",textAlign:"right",children:"Min: ".concat(ee," ").concat("quantity"===L?null===P||void 0===P?void 0:P.currency:"USD")})]}),(0,N.jsxs)(u.NI,{variant:"primary",style:k,children:[(0,N.jsx)(u.lX,{variant:"primary",children:e("crypto_sell_account.desc")}),(0,N.jsx)(d.II,{value:X,onChange:function(e){return V(e.target.value)},placeholder:e("crypto_sell_account.desc"),variant:"primary"})]})]})})})})}},7640:function(e,n,t){t.d(n,{Ph:function(){return v}});var r=t(3393),i=t(1938),c=t(7160),l=t(6831),a=t(6198),o=t.n(a),u=t(2791);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}var p=["children","placeholder","className"],f=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],h=["children"],m=(0,i.Gp)((function(e,n){var t=e.children,r=e.placeholder,c=e.className,a=d(e,p);return u.createElement(i.m$.select,s({},a,{ref:n,className:(0,l.cx)("chakra-select",c)}),r&&u.createElement("option",{value:""},r),t)}));l.Ts&&(m.displayName="SelectField");var v=(0,i.Gp)((function(e,n){var t=(0,i.jC)("Select",e),a=(0,i.Lr)(e),p=a.rootProps,h=a.placeholder,v=a.icon,y=a.color,g=a.height,_=a.h,j=a.minH,C=a.minHeight,S=a.iconColor,b=a.iconSize,E=d(a,f),w=(0,l.Vl)(E,c.oE),N=w[0],k=w[1],I=(0,r.Yp)(k),A={width:"100%",height:"fit-content",position:"relative",color:y},q=o()({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return u.createElement(i.m$.div,s({className:"chakra-select__wrapper",__css:A},N,p),u.createElement(m,s({ref:n,height:null!=_?_:g,minH:null!=j?j:C,placeholder:h},I,{__css:q}),e.children),u.createElement(x,s({"data-disabled":(0,l.PB)(I.disabled)},(S||y)&&{color:S||y},{__css:t.icon},b&&{fontSize:b}),v))}));l.Ts&&(v.displayName="Select");var y=function(e){return u.createElement("svg",s({viewBox:"0 0 24 24"},e),u.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},g=(0,i.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),x=function(e){var n=e.children,t=void 0===n?u.createElement(y,null):n,r=d(e,h),i=u.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return u.createElement(g,s({},r,{className:"chakra-select__icon-wrapper"}),u.isValidElement(t)?i:null)};l.Ts&&(x.displayName="SelectIcon")}}]);
//# sourceMappingURL=4252.76397a0b.chunk.js.map