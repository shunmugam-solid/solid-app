"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[714],{1059:function(a,t,n){var e=n(2791),i=n(9259),r=n(184),l=function(a){var t=a.address,n=a.zoom,i=(0,e.useRef)(null);return(0,e.useEffect)((function(){i.current&&(new window.google.maps.Geocoder).geocode({address:t},(function(a,t){if(t===window.google.maps.GeocoderStatus.OK&&a&&0!==a.length){var e=a[0].geometry.location.lat(),r=a[0].geometry.location.lng();if(i.current){var l=new window.google.maps.Map(i.current,{center:{lat:e,lng:r},zoom:n});new window.google.maps.Marker({position:{lat:e,lng:r},map:l,title:"Hello World!"})}}}))}),[t]),(0,r.jsx)("div",{ref:i,id:"map",style:{height:"100%"}})},c=function(a){return a===i.Status.FAILURE?(0,r.jsx)(r.Fragment,{children:"..."}):(0,r.jsx)(r.Fragment,{children:"...."})};t.Z=function(a){var t=a.address,n=a.zoom,e=a.apiKey;return(0,r.jsx)(i.Wrapper,{apiKey:e,render:c,children:(0,r.jsx)(l,{address:t,zoom:n})})}},714:function(a,t,n){n.r(t),n.d(t,{default:function(){return f}});var e=n(9439),i=n(2791),r=n(5048),l=n(2020),c=n(8735),s=n(2504),o=n(1951),d={bodyStyles:"TransactionDetails_bodyStyles__dBETv",transaction__summary:"TransactionDetails_transaction__summary__XXdaU",tag:"TransactionDetails_tag__fhHdO",tag__ach:"TransactionDetails_tag__ach__UXsAw",tag__intrabank:"TransactionDetails_tag__intrabank__REi8h",tag__card:"TransactionDetails_tag__card__FIIa0",transaction__description:"TransactionDetails_transaction__description__QBay8",transaction__received:"TransactionDetails_transaction__received__pWutq",transaction__sent:"TransactionDetails_transaction__sent__yrSrX",transaction__other_details:"TransactionDetails_transaction__other_details__98O2I",actions__action:"TransactionDetails_actions__action__QxqcR",attachments:"TransactionDetails_attachments__BDJG9",attachment__container:"TransactionDetails_attachment__container__CeAxz",attachment__container__full_width:"TransactionDetails_attachment__container__full_width__c-Wrn",attachment:"TransactionDetails_attachment__js4bD",attachment__img_container:"TransactionDetails_attachment__img_container__uPe4S",attachment__img:"TransactionDetails_attachment__img__NEgZ3",location__container:"TransactionDetails_location__container__6VB-W",location__map:"TransactionDetails_location__map__sLmeg",location__info:"TransactionDetails_location__info__ADUHk"},u=n(5304),x=n(80),m=(n(6559),n(1059)),_=n(184),v=function(a){var t,n,e,v,h,g,p,f,y,j,b,w,k=a.data,N=a.showReportButton,T=a.showPdfButton,A=a.amountFontWeight,C=a.amountFontSize,I=a.amountSentColor,D=a.amountReceivedColor,U=a.dateFormat,W=void 0===U?"MMM d, yyyy 'at' h:mm aa":U,z=a.onExport,S=(0,l.$)().t,B=(0,u.CG)((function(a){return a.account.accounts}),r.wU),F=(0,u.CG)((function(a){return a.crypto.selectedAccount}),r.wU),E=(0,i.useMemo)((function(){var a,t,n,e,i,r,l,c,s,d,u,x,m,_;if(k.walletId&&k.transferType){var v=k.transferType,h=k[v],g=B.find((function(a){return a.id===h.accountId}));switch(u=k.description,v){case"buy":s=g?g.label:h.accountId,m=null===F||void 0===F?void 0:F.label;break;case"sell":s=null===F||void 0===F?void 0:F.label,m=g?g.label:h.accountId;break;case"send":s=null===F||void 0===F?void 0:F.label,m=h.destinationCryptoAddress;break;case"receive":m=null===F||void 0===F?void 0:F.label,s="zerohash"}}else switch(x=k.id,u=k.description,k.transferType){case"intrabank":var p,f;if("debit"===k.txnType)s=k.accountId,m=null===(p=k.intrabank)||void 0===p?void 0:p.name;else s=null===(f=k.intrabank)||void 0===f?void 0:f.name,m=k.accountId;_=null===(a=k.intrabank)||void 0===a?void 0:a.bankName;break;case"ach":var y,j;if("debit"===k.txnType)s=k.accountId,m=null===(y=k.ach)||void 0===y?void 0:y.name;else s=null===(j=k.ach)||void 0===j?void 0:j.name,m=k.accountId;_=null===(t=k.ach)||void 0===t?void 0:t.bankName;break;case"domesticWire":var b,w,N;if("debit"===k.txnType)s=k.accountId,m=(null===(b=k.domesticWire)||void 0===b?void 0:b.name)||(null===(w=k.domesticWire)||void 0===w?void 0:w.accountNumber);else s=null===(N=k.domesticWire)||void 0===N?void 0:N.name,m=k.accountId;_=null===(n=k.domesticWire)||void 0===n?void 0:n.bankName;break;case"internationalWire":var T,A,C;if(s=k.accountId,"debit"===k.txnType)s=k.accountId,m=(null===(T=k.internationalWire)||void 0===T?void 0:T.name)||(null===(A=k.internationalWire)||void 0===A?void 0:A.accountNumber);else s=null===(C=k.internationalWire)||void 0===C?void 0:C.name,m=k.accountId;_=null===(e=k.internationalWire)||void 0===e?void 0:e.beneficiaryBank;break;case"physicalCheck":var I,D,U;if("debit"===k.txnType)s=k.accountId,m=(null===(I=k.physicalCheck)||void 0===I?void 0:I.name)||(null===(D=k.domesticWire)||void 0===D?void 0:D.accountNumber);else s=null===(U=k.physicalCheck)||void 0===U?void 0:U.name,m=k.accountId;break;case"card":var z,S,E,R,G,H,M,Z,L,O;if("debit"===k.txnType)s=null===(z=k.card)||void 0===z?void 0:z.label,m=(null===(S=k.card)||void 0===S||null===(E=S.merchant)||void 0===E?void 0:E.name)||(null===(R=k.card)||void 0===R||null===(G=R.merchant)||void 0===G?void 0:G.merchantName);else s=null===(H=k.card)||void 0===H?void 0:H.label,m=(null===(M=k.card)||void 0===M||null===(Z=M.merchant)||void 0===Z?void 0:Z.name)||(null===(L=k.card)||void 0===L||null===(O=L.merchant)||void 0===O?void 0:O.merchantName);break;case"solidCard":var K,P;if(s=null===(i=k.solidCard)||void 0===i?void 0:i.name,"debit"===k.txnType)s=k.accountId,m=null===(K=k.solidCard)||void 0===K?void 0:K.name;else s=null===(P=k.solidCard)||void 0===P?void 0:P.name,m=k.accountId;d=null===(r=k.card)||void 0===r||null===(l=r.merchant)||void 0===l?void 0:l.name;break;case"debitCard":s=null===(c=k.debitCard)||void 0===c?void 0:c.name,m=k.accountId;break;case"sell":case"buy":"credit"===k.txnType?m=k.accountId:s=k.accountId;break;default:u=k.description}return{source:s,destination:m,paidTo:d,bank:_,receivedFrom:undefined,description:u,transactionId:x,location:undefined,date:(0,o.default)(new Date(k.txnDate),W)}}),[k]),R=(0,i.useCallback)((function(){(0,x.W5)()}),[]);return(0,_.jsx)(c.xu,{width:"100%",children:(0,_.jsxs)(_.Fragment,{children:[null,(0,_.jsxs)(c.xu,{className:d.transaction__summary,children:[(0,_.jsxs)(c.Ug,{justifyContent:"space-between",mb:"16px",children:[(0,_.jsx)(c.xv,{"data-testid":"currency-data",variant:"regular",fontSize:C,color:"credit"===k.txnType?D:I,fontWeight:A,className:"credit"===k.txnType?d.transaction__received:d.transaction__sent,children:k.walletId?"".concat(k.amount," ").concat(k.currency):(0,x.OH)(k.amount)}),(0,_.jsx)(c.xu,{className:"".concat(d.tag," ").concat(d["tag__".concat(k.transferType)]),children:(0,_.jsx)(c.xv,{"data-testid":"transaction-type",variant:"small",className:d.tag_text,textTransform:"capitalize",textAlign:"center",children:S("transaction_summary.".concat(k.transferType),k.transferType)})})]}),(0,_.jsxs)(c.xu,{children:[(0,_.jsx)(c.xv,{"data-testid":"title",variant:"regular",textAlign:"left",className:"text-dark",children:k.title}),(0,_.jsx)(c.xv,{variant:"small","data-testid":"date",className:"text-light",textAlign:"left",children:E.date})]}),(0,_.jsx)(c.xu,{})]}),(0,_.jsxs)(c.xu,{children:[(0,_.jsx)(c.xv,{variant:"large",className:"transactions__title",mb:"16px",children:S("transaction_summary.otherDetails")}),k.walletId?(0,_.jsxs)(c.xu,{className:d.transaction__other_details,children:[(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.source")}),(0,_.jsx)(c.xv,{variant:"regular",w:"60%",textAlign:"left",children:E.source})]}),(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.destination")}),(0,_.jsx)(c.xv,{variant:"regular",w:"60%",textAlign:"left",children:E.destination})]}),(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.quantity")}),(0,_.jsx)(c.xv,{variant:"regular",w:"60%",textAlign:"left",children:k.amount.replace("-","")})]}),(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.description")}),(0,_.jsx)(c.xv,{variant:"regular",w:"60%",textAlign:"left",children:E.description})]}),(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.status")}),(0,_.jsx)(c.xv,{variant:"regular",w:"60%",textAlign:"left",children:k.status})]})]}):(0,_.jsxs)(c.xu,{className:d.transaction__other_details,children:[E.source?(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.source")}),(0,_.jsx)(c.xv,{"data-testid":"source",variant:"regular",w:"60%",textAlign:"left",children:E.source})]}):null,E.destination?(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.destination")}),(0,_.jsx)(c.xv,{"data-testid":"destination",variant:"regular",w:"60%",textAlign:"left",children:E.destination})]}):null,E.bank?(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.bank")}),(0,_.jsx)(c.xv,{"data-testid":"bank",textTransform:"capitalize",variant:"regular",w:"60%",textAlign:"left",children:E.bank})]}):null,(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.transactionID")}),(0,_.jsx)(c.xv,{variant:"regular",w:"60%",textAlign:"left",children:E.transactionId})]}),E.description&&0!==E.description.length?(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.description")}),(0,_.jsx)(c.xv,{"data-testid":"description",textTransform:"capitalize",variant:"regular",w:"60%",textAlign:"left",children:E.description})]}):null,(0,_.jsxs)(c.Ug,{py:"8px",align:"start",children:[(0,_.jsx)(c.xv,{variant:"regular",w:"40%",className:"text-light",textAlign:"left",children:S("transaction_summary.status")}),(0,_.jsx)(c.xv,{"data-testid":"status",textTransform:"capitalize",variant:"regular",w:"60%",textAlign:"left",children:k.status})]})]})]}),(0,_.jsxs)(c.xu,{children:[(0,_.jsx)(c.xv,{variant:"large",className:"transactions__title",mb:"16px",children:S("transaction_summary.actions")}),(0,_.jsxs)(c.Ug,{gap:"8px",mt:"16px",mb:"32px",children:[T?(0,_.jsx)(s.zx,{variant:"primary",onClick:z,className:d.actions__action,children:S("transaction_summary.viewAsPdf")}):null,N?(0,_.jsx)(s.zx,{variant:"primary",onClick:R,className:d.actions__action,children:S("transaction_summary.reportIssue")}):null]})]}),"card"===k.transferType&&null!==(t=k.card)&&void 0!==t&&t.merchant?(0,_.jsxs)(c.xu,{children:[(0,_.jsx)(c.xv,{variant:"large",className:"transactions__title",mb:"16px",children:S("transaction_summary.location")}),(0,_.jsxs)(c.xu,{className:d.location__container,children:[(0,_.jsx)(c.xu,{className:d.location__map,children:(0,_.jsx)(m.Z,{zoom:7,apiKey:"AIzaSyDcW61NFxklslLuuUxNw0SzoBmHyC4Zhh4",address:"".concat(null===(n=k.card)||void 0===n?void 0:n.merchant.merchantCity,",").concat(null===(e=k.card)||void 0===e?void 0:e.merchant.merchantState,",").concat(null===(v=k.card)||void 0===v?void 0:v.merchant.merchantCountry)})}),(0,_.jsxs)(c.xu,{className:d.location__info,children:[(0,_.jsx)(c.xv,{variant:"regular",className:"text-light",textAlign:"left",children:S("transaction_summary.address")}),(0,_.jsx)(c.xv,{variant:"branding",children:"".concat(null===(h=k.card)||void 0===h||null===(g=h.merchant)||void 0===g?void 0:g.merchantName,", ").concat(null===(p=k.card)||void 0===p||null===(f=p.merchant)||void 0===f?void 0:f.merchantCity,", ").concat(null===(y=k.card)||void 0===y||null===(j=y.merchant)||void 0===j?void 0:j.merchantState)})]}),(0,_.jsxs)(c.xu,{className:d.location__info,children:[(0,_.jsx)(c.xv,{variant:"regular",className:"text-light",textAlign:"left",children:S("transaction_summary.country")}),(0,_.jsx)(c.xv,{variant:"branding",children:null===(b=k.card)||void 0===b||null===(w=b.merchant)||void 0===w?void 0:w.merchantCountry})]})]})]}):null]})})},h=n(7427),g=n(5649),p=n(4661),f=function(){var a=(0,p.y)().data,t=(0,l.$)().t,n=(0,u.Qo)(),s=(0,p.y)().close,o=(0,u.CG)((function(a){return a.account.selectedAccount}),r.wU),m=(0,i.useState)(null),f=(0,e.Z)(m,2),y=f[0],j=f[1],b=(0,i.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"json",e=o?o.id:"";""!==e&&null!==a&&void 0!==a&&a.id&&n((0,h.a)(e,"cash",a.id,t)).then((function(n){if("pdf"===t){var e=window.URL.createObjectURL(n),i=document.createElement("a");i.href=e,i.download="".concat(a.id,"-statement.pdf"),i.click(),i.remove()}else j(n)})).catch(x.WH)}),[a,o]);return(0,i.useEffect)((function(){b()}),[a,o]),(0,_.jsx)(c.xu,{className:"page",children:(0,_.jsx)(g.Z,{showBack:!0,bodyClass:d.bodyStyles,onBack:s,heading:t("transaction_summary.title"),children:y?(0,_.jsx)(v,{data:y,showReportButton:!0,showPdfButton:!0,onExport:function(){return b("pdf")},amountReceivedColor:"#2EC193",amountSentColor:"#FF4A4A"}):null})})}}}]);
//# sourceMappingURL=714.7cfc08ba.chunk.js.map