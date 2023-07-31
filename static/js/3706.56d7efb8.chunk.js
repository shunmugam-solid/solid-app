"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[3706],{1023:function(n,e,r){var t=r(2791),i=r(5798),u=r(4398),o=r.n(u),c=r(184);e.Z=function(n){var e=n.onChange,r=n.value,u=n.placeholder,a=n.prefix,l=n.digits,s=(0,t.useRef)(null);return(0,t.useLayoutEffect)((function(){s.current&&o()("currency",{autoUnmask:!0,allowMinus:!1,prefix:null!==a&&void 0!==a?a:"$ ",placeholder:u,rightAlign:!1,digits:l,numericInput:!0}).mask(s.current)}),[a,l,u]),(0,c.jsx)(i.II,{"data-testid":"currency-input",variant:"primary",placeholder:u||"$ 0.00",ref:s,onChange:function(n){var r=n.target.value;e(r)},value:r})}},4126:function(n,e,r){r.d(e,{D:function(){return i},p:function(){return u}});var t=r(552),i=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"quantity",i=t.Z.getState().crypto.supportedCurrencies.data.find((function(e){return e.currency===n}));if(i){var u=i.limits[e];return"quantity"===r?u.minimumQty:u.minimumAmount||"0"}return"0"},u=function(n,e){var r=t.Z.getState().crypto.supportedCurrencies.data.find((function(e){return e.currency===n}));if(r){var i,u,o=(null===(i=r.limits[e].minimumQty)||void 0===i||null===(u=i.split(".")[1])||void 0===u?void 0:u.length)||2;return 0!==o?o:2}return 6}},3706:function(n,e,r){r.r(e),r.d(e,{default:function(){return Z}});var t=r(9439),i=r(2791),u=r(2020),o=r(1938),c=r(2504),a=r(8735),l=r(3393),s=r(5798),d=r(5048),p=r(7689),f=r(5649),v=r(4144),h=r(5223),y=r(4946),m=r(9241),x=r(184),g="html5qr-code-full-region",j=i.forwardRef((function(n,e){var r=(0,h.qY)(),t=r.isOpen,u=r.onOpen,o=r.onClose,c=(0,i.useRef)(null),a=(0,i.useCallback)((function(){var e={};return n.fps&&(e.fps=n.fps),n.qrbox&&(e.qrbox=n.qrbox),n.aspectRatio&&(e.aspectRatio=n.aspectRatio),void 0!==n.disableFlip&&(e.disableFlip=n.disableFlip),e}),[n]),l=(0,i.useCallback)((function(){o(),c.current&&c.current.stop().catch((function(n){console.error("Failed to clear html5QrcodeScanner. ",n)}))}),[c.current]);return(0,i.useImperativeHandle)(e,(function(){return{open:function(){u(),setTimeout((function(){var e=a();c.current=new m.t2(g),c.current.start({facingMode:"environment"},e,(function(e){n.onSuccess(e),l()}),n.onError)}),0)}}})),(0,x.jsxs)(y.u_,{onClose:l,size:"full",isOpen:t,children:[(0,x.jsx)(y.ZA,{}),(0,x.jsxs)(y.hz,{children:[(0,x.jsx)(y.xB,{children:"Scan"}),(0,x.jsx)(y.ol,{}),(0,x.jsx)(y.fe,{children:(0,x.jsx)("div",{id:g})})]})]})})),C=r(5304),_=r(2966),b=r(80),w=r(3717),S=r(1778),k=r(9578),q=r(2942),I=r(4126),R=r(1023),Z=function(){var n=(0,u.$)().t,e=(0,C.Qo)(),r=(0,p.s0)(),h=(0,o.mq)("FormControl",{variant:"primary"}),y=(0,i.useRef)(null),m=(0,i.useState)(""),g=(0,t.Z)(m,2),Z=g[0],A=g[1],E=(0,i.useState)(""),M=(0,t.Z)(E,2),B=M[0],F=M[1],N=(0,i.useState)(""),z=(0,t.Z)(N,2),D=z[0],Q=z[1],H=(0,C.CG)((function(n){return n.crypto}),d.wU),O=H.selectedAccount,T=H.supportedCurrencies,X=(0,i.useMemo)((function(){return null!==O&&void 0!==O&&O.currency?(0,I.p)(null===O||void 0===O?void 0:O.currency,"send"):2}),[O,T]),$=(0,i.useMemo)((function(){return null!==O&&void 0!==O&&O.currency?(0,I.D)(null===O||void 0===O?void 0:O.currency,"send","quantity"):0}),[O,T]),G=(0,i.useMemo)((function(){return"0.".concat("0".repeat(X))}),[X]),U=(0,i.useMemo)((function(){return""!==B&&parseFloat(B)>0&&""!==D&&0!==Z.length}),[B,D,Z]),W=(0,S._f)("sendCrypto").showBack;(0,i.useEffect)((function(){e((0,w._Y)())}),[]);var Y=(0,i.useCallback)((function(){U&&O&&e((0,w.z7)({cryptoCurrency:O.currency})).then((function(){e((0,_.fV)({destinationCryptoAddress:Z,cryptoCurrency:O.currency,quantity:B,description:D})),r("/crypto/send/preview")})).catch(b.WH)}),[U,B,D,null===O||void 0===O?void 0:O.currency,Z]);return(0,x.jsx)("div",{className:"page",children:(0,x.jsxs)("form",{autoComplete:"off",onSubmit:function(n){n.preventDefault(),Y()},children:[(0,x.jsxs)(f.Z,{showBack:W,heading:n("send_crypto_amount.title"),onBack:function(){(0,k.bG)(q.CW.BACK_PRESSED,{from:"sendCrypto"})},footer:(0,x.jsx)(c.zx,{disabled:!U,width:"100%",variant:"primary",type:"submit",children:n("send_crypto_amount.ctaText")}),children:[(0,x.jsxs)(a.xu,{width:"100%",paddingTop:"15px",children:[(0,x.jsxs)(l.NI,{variant:"primary",style:h,children:[(0,x.jsx)(l.lX,{variant:"primary",children:n("send_crypto_amount.walletAddress",{currency:null===O||void 0===O?void 0:O.currency})}),(0,x.jsxs)(s.BZ,{children:[(0,x.jsx)(s.II,{variant:"primary",value:Z,paddingRight:"30px",onChange:function(n){return A(n.target.value)}}),(0,x.jsx)(s.xH,{className:h.inputRightElement,cursor:"pointer",height:"100%",onClick:function(){var n;null===y||void 0===y||null===(n=y.current)||void 0===n||n.open()},children:(0,x.jsx)(v.Z,{icon:"photo",size:16})})]})]}),(0,x.jsx)(a.xv,{variant:"small",whiteSpace:"pre-line",color:"#2EC193",p:"24px",pt:"8px",textAlign:"left",children:n("send_crypto_amount.note",{currency:null===O||void 0===O?void 0:O.currency})}),(0,x.jsxs)(l.NI,{variant:"primary",style:h,children:[(0,x.jsx)(l.lX,{variant:"primary",children:n("send_crypto_amount.quantity")}),(0,x.jsx)(R.Z,{prefix:"",digits:X,placeholder:G,value:B,onChange:function(n){F(n)}}),(0,x.jsx)(a.xv,{variant:"small",className:"text-light",textAlign:"right",children:"Min: ".concat($," ").concat(null===O||void 0===O?void 0:O.currency)})]}),(0,x.jsxs)(l.NI,{variant:"primary",style:h,children:[(0,x.jsx)(l.lX,{variant:"primary",children:n("send_crypto_amount.description")}),(0,x.jsx)(s.II,{variant:"primary",type:"text",value:D,onChange:function(n){return Q(n.target.value)}})]})]}),(0,x.jsx)(a.xv,{variant:"small",pt:"24px",whiteSpace:"pre-line",mt:"auto",textAlign:"center",children:n("send_crypto_amount.footerInfo")})]}),(0,x.jsx)(j,{ref:y,onSuccess:function(n){A(n)},fps:50,aspectRatio:"1.0",qrbox:{width:250,height:400}})]})})}}}]);
//# sourceMappingURL=3706.56d7efb8.chunk.js.map