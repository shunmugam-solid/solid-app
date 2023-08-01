"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[7422],{7422:function(e,l,t){t.r(l),t.d(l,{default:function(){return _}});var i=t(9439),n=t(2791),a=t(2020),r=t(2504),s=t(8735),c=t(5048),d=t(7689),o=t(5649),u=t(5304),x=t(3717),v="ExecuteSell_details_label__V4Pxu",g="ExecuteSell_desc__JvO0I",h="ExecuteSell_details_value__sh3of",p=t(80),f=t(184),_=function(){var e=(0,a.$)().t,l=(0,u.Qo)(),t=(0,d.s0)(),_=(0,u.CG)((function(e){return e.crypto}),c.wU),j=_.sellFormData,y=_.sellQuoteData,m=(0,u.CG)((function(e){return e.crypto.selectedAccount}),c.wU),w=(0,n.useState)(30),A=(0,i.Z)(w,2),N=A[0],C=A[1],U=(0,n.useMemo)((function(){if("amount"===(null===j||void 0===j?void 0:j.type))return"".concat(null===y||void 0===y?void 0:y.amount," ").concat(null===y||void 0===y?void 0:y.quotedCurrency);var e=parseFloat((null===y||void 0===y?void 0:y.price)||"")*parseFloat((null===y||void 0===y?void 0:y.quantity)||"");return(0,p.OH)(e,(null===y||void 0===y?void 0:y.quotedCurrency)||"USD")}),[j]);(0,n.useEffect)((function(){var e=setInterval((function(){C((function(l){return 0===l?(clearInterval(e),0):l-1}))}),1e3)}),[]),(0,n.useEffect)((function(){0===N&&t("/crypto/sell")}),[N]);var q=(0,n.useCallback)((function(){m&&y&&j&&l((0,x.Og)({walletId:null===m||void 0===m?void 0:m.id,accountId:j.selectedAccount,quoteId:y.id,title:"SELL CRYPTO",description:null===j||void 0===j?void 0:j.description})).then((function(){t("/crypto/sell/success")})).catch(p.WH)}),[j,y,m]);return(0,f.jsx)("div",{className:"page",children:(0,f.jsx)(o.Z,{heading:e("crypto_sell_details.title"),footer:(0,f.jsx)(r.zx,{width:"100%",variant:"primary",onClick:q,children:e("crypto_sell_details.ctaText")}),children:(0,f.jsxs)(s.xu,{width:"100%",paddingTop:"15px",children:[(0,f.jsxs)(s.X6,{"data-testid":"status-title",variant:"primary",textAlign:"center",children:[e("crypto_sell_details.selling")," ",null===y||void 0===y?void 0:y.quantity," ","quantity"===(null===j||void 0===j?void 0:j.type)?null===y||void 0===y?void 0:y.cryptoCurrency:null===y||void 0===y?void 0:y.quotedCurrency]}),(0,f.jsxs)(s.xv,{className:"".concat(g," text-light"),variant:"regular",textAlign:"center",children:[e("crypto_sell_details.anyQuestions")," ",(0,f.jsx)(s.rU,{textDecoration:"underline",href:"mailto:chat@solidfi.com",style:{color:"inherit",textDecoration:"underline"},isExternal:!0,children:"chat@solidfi.com"})]}),(0,f.jsxs)(s.xu,{className:v,children:[(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_sell_details.source")}),(0,f.jsxs)(s.xv,{w:"50%",variant:"regular",textAlign:"left",children:[null===m||void 0===m?void 0:m.label,(0,f.jsx)("br",{}),(0,f.jsx)("span",{children:null===m||void 0===m?void 0:m.id})]})]}),(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_sell_details.destination")}),(0,f.jsxs)(s.xv,{w:"50%",variant:"regular",textAlign:"left",children:[null===j||void 0===j?void 0:j.selectedAccountLabel,(0,f.jsx)("br",{}),(0,f.jsx)("span",{children:null===j||void 0===j?void 0:j.selectedAccount})]})]}),(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_buy_details.quoteId")}),(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",children:null===y||void 0===y?void 0:y.id})]}),(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_sell_details.quantity")}),(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",children:null===y||void 0===y?void 0:y.quantity})]}),(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_sell_details.amount")}),(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",children:U})]}),(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_sell_details.exchangeRate")}),(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",children:"1 ".concat(null===y||void 0===y?void 0:y.cryptoCurrency," = ").concat(null===y||void 0===y?void 0:y.price," ").concat(null===y||void 0===y?void 0:y.quotedCurrency)})]}),(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_sell_details.fee")}),(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",children:"$0"})]}),(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_sell_details.description")}),(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",children:null===j||void 0===j?void 0:j.description})]}),(0,f.jsxs)(s.Ug,{className:h,children:[(0,f.jsx)(s.xv,{w:"50%",variant:"regular",textAlign:"left",className:"text-light",children:e("crypto_sell_details.quoteExpiresIn")}),(0,f.jsxs)(s.xv,{w:"50%",variant:"small",color:"#FF4A4A",textAlign:"left",children:["00:",1==="".concat(N).length?"0".concat(N):N]})]})]}),(0,f.jsx)(s.xv,{variant:"small",whiteSpace:"pre-line",fontSize:"9px",textAlign:"left",children:e("crypto_sell_details.poweredBy")})]})})})}}}]);
//# sourceMappingURL=7422.978fcb23.chunk.js.map