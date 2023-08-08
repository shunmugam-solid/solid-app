"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[5756],{5756:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(2791),s=a(2020),n=a(967),i=a(5223),c=a(8735),r=a(5048),o=a(1951),u=a(4144),x={pageBg:"AccountDetails_pageBg__CwZgi",balanceBox:"AccountDetails_balanceBox__vCxi4",balanceAmount:"AccountDetails_balanceAmount__xVEwo",numberValue:"AccountDetails_numberValue__kkpcW",otherDetails:"AccountDetails_otherDetails__o1yMw",otherDetailsInfo:"AccountDetails_otherDetailsInfo__CdxXo",otherDetailsInfoLabel:"AccountDetails_otherDetailsInfoLabel__c7RVS",otherDetailsInfoValue:"AccountDetails_otherDetailsInfoValue__qgBYq",statement:"AccountDetails_statement__07fJD"},d=a(5304),h=a(80),g=a(5649),m=a(6559),f=a(4661),v=a(184),j=l.lazy((function(){return a.e(248).then(a.bind(a,248))})),b=function(){var e=(0,s.$)().t,t=(0,f.y)(),a=t.close,b=t.open,_=(0,n.pm)(),p=(0,d.CG)((function(e){return e.account.selectedAccount}),r.wU),N=(0,i.VP)((null===p||void 0===p?void 0:p.accountNumber)||"",2e3),A=N.hasCopied,D=N.onCopy,I=(0,i.VP)((null===p||void 0===p?void 0:p.routingNumber)||"",2e3),k=I.hasCopied,C=I.onCopy,y=(0,l.useCallback)((function(){p&&b(j,{id:null===p||void 0===p?void 0:p.id})}),[p]);return(0,v.jsx)("div",{className:"".concat(x.pageBg," page"),children:p?(0,v.jsx)(g.Z,{showBack:!0,onBack:function(){a()},heading:e("account_details.title"),children:(0,v.jsxs)(c.xu,{width:"100%",paddingTop:"15px",children:[(0,v.jsx)(c.xv,{variant:"large",children:p.label}),(0,v.jsxs)(c.xu,{className:x.balanceBox,border:"1px solid var(--border-color-1)",children:[(0,v.jsxs)(c.Ug,{justify:"space-between",pb:"32px",children:[(0,v.jsx)(c.xv,{variant:"regular",className:"".concat(x.balanceTitle," text-light"),textAlign:"left",children:e("account_details.balance")}),(0,v.jsx)(c.xv,{variant:"regular",className:x.balanceAmount,textAlign:"right",children:(0,h.OH)(p.availableBalance,p.currency)})]}),(0,v.jsxs)(c.kC,{justifyContent:"space-between",children:[(0,v.jsxs)(c.xu,{children:[(0,v.jsx)(c.xv,{variant:"regular",className:"text-light",textAlign:"left",children:e("account_details.accountNumber")}),(0,v.jsxs)(c.kC,{alignItems:"center",children:[(0,v.jsx)(c.xv,{variant:"regular",className:x.numberValue,textAlign:"left",children:p.accountNumber}),A?(0,v.jsx)(u.Z,{icon:"tick",cursor:"pointer",className:"icon-customizable",size:12}):(0,v.jsx)(u.Z,{onClick:function(){D(),_({title:"Account Number copied.",status:"success",duration:9e3,isClosable:!0,position:"top-right"})},icon:"copy",cursor:"pointer",className:"icon-customizable",size:12})]})]}),(0,v.jsxs)(c.xu,{children:[(0,v.jsx)(c.xv,{variant:"regular",className:"text-light",textAlign:"left",children:e("account_details.routingNumber")}),(0,v.jsxs)(c.kC,{alignItems:"center",children:[(0,v.jsx)(c.xv,{variant:"regular",className:x.numberValue,textAlign:"left",children:p.routingNumber}),k?(0,v.jsx)(u.Z,{icon:"tick",cursor:"pointer",className:"icon-customizable",size:12}):(0,v.jsx)(u.Z,{onClick:function(){C(),_({title:"Routing Number copied.",status:"success",duration:9e3,isClosable:!0,position:"top-right"})},icon:"copy",cursor:"pointer",className:"icon-customizable",size:12})]})]})]})]}),(0,v.jsx)(c.xv,{variant:"large",children:e("account_details.otherDetails")}),(0,v.jsxs)(c.xu,{className:x.otherDetails,children:[(0,v.jsxs)(c.xu,{className:x.otherDetailsInfo,children:[(0,v.jsx)(c.xv,{variant:"regular",className:"".concat(x.otherDetailsInfoLabel," text-light"),textAlign:"left",children:e("account_details.type")}),(0,v.jsx)(c.xv,{variant:"regular",className:x.otherDetailsInfoValue,textAlign:"left",children:e("account_details.accountType".concat(p.type))})]}),(0,v.jsxs)(c.xu,{className:x.otherDetailsInfo,children:[(0,v.jsx)(c.xv,{variant:"regular",className:"".concat(x.otherDetailsInfoLabel," text-light"),textAlign:"left",children:e("account_details.dateOpened")}),(0,v.jsx)(c.xv,{variant:"regular",className:x.otherDetailsInfoValue,textAlign:"left",children:(0,o.default)(new Date(p.createdAt),"MMM d, yyyy 'at' h:mm aa")})]}),(0,v.jsxs)(c.xu,{className:x.otherDetailsInfo,children:[(0,v.jsx)(c.xv,{variant:"regular",className:"".concat(x.otherDetailsInfoLabel," text-light"),textAlign:"left",children:e("account_details.sponsorBank")}),(0,v.jsx)(c.xv,{variant:"regular",className:x.otherDetailsInfoValue,textAlign:"left",children:p.sponsorBankName})]}),(0,v.jsxs)(c.xu,{className:x.otherDetailsInfo,children:[(0,v.jsx)(c.xv,{variant:"regular",className:"".concat(x.otherDetailsInfoLabel," text-light"),textAlign:"left",children:e("account_details.interest")}),(0,v.jsxs)(c.xv,{variant:"regular",className:x.otherDetailsInfoValue,textAlign:"left",children:[p.interest,"%"," ","APY"]})]}),(0,v.jsxs)(c.xu,{className:x.otherDetailsInfo,children:[(0,v.jsx)(c.xv,{variant:"regular",className:"".concat(x.otherDetailsInfoLabel," text-light"),textAlign:"left",children:e("account_details.fees")}),(0,v.jsxs)(c.xv,{variant:"regular",className:x.otherDetailsInfoValue,textAlign:"left",children:[(0,h.OH)(p.fees),"/",p.accountInterestFrequency]})]})]}),(0,v.jsx)(c.xv,{variant:"large",mb:"16px",children:e("account_details.actions")}),(0,v.jsxs)(c.xu,{role:"link",onClick:y,children:[(0,v.jsxs)(c.Ug,{className:x.statement,children:[(0,v.jsx)(c.xv,{variant:"regular",textAlign:"left",children:e("account_details.statements")}),(0,v.jsx)(u.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}),(0,v.jsx)(c.xu,{role:"button",onClick:function(){(0,h.de)()},children:(0,v.jsxs)(c.Ug,{className:x.statement,children:[(0,v.jsx)(c.xv,{variant:"regular",textAlign:"left",children:e("account_details.disclosures")}),(0,v.jsx)(u.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})})]})]})}):(0,v.jsx)(m.Z,{name:"AccountDetails"})})}}}]);
//# sourceMappingURL=5756.051a6d40.chunk.js.map