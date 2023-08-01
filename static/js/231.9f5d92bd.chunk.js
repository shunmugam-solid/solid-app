"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[231],{231:function(n,e,i){i.r(e),i.d(e,{default:function(){return k}});var s=i(2791),a=i(5223),t=i(8735),l=i(2020),r=i(5048),o=i(5649),d="TransferMoney_listWithActionsv2__HOMh1",c="TransferMoney_fund__move-in__s5w0-",x="TransferMoney_fund__move-out__Xid-j",u="TransferMoney_details__YyAvk",p="TransferMoney_label__l2-r8",h=i(5304),m=i(4144),f=i(4661),_=i(184),g=s.lazy((function(){return i.e(2957).then(i.bind(i,2957))})),v=s.lazy((function(){return i.e(5078).then(i.bind(i,5078))})),j=s.lazy((function(){return Promise.all([i.e(4398),i.e(3436)]).then(i.bind(i,3436))})),N=s.lazy((function(){return i.e(1611).then(i.bind(i,1611))})),k=function(){var n=(0,l.$)().t,e=(0,f.y)().open,i=(0,h.CG)((function(n){return n.account}),r.wU).selectedAccount,k=(0,a.VP)((null===i||void 0===i?void 0:i.accountNumber)||"",2e3),C=k.hasCopied,b=k.onCopy,z=(0,a.VP)((null===i||void 0===i?void 0:i.routingNumber)||"",2e3),y=z.hasCopied,w=z.onCopy,S=(0,s.useCallback)((function(){e(g,{option:"bank"})}),[]),A=(0,s.useCallback)((function(){e(g,{option:"card"})}),[]),W=(0,s.useCallback)((function(){e(v)}),[]),T=(0,s.useCallback)((function(){e(j)}),[]),B=(0,s.useCallback)((function(){e(N)}),[]);return(0,_.jsx)("div",{className:"page",id:"transfermoney-page",children:(0,_.jsx)(o.Z,{children:(0,_.jsxs)(t.xu,{width:"100%",children:[(0,_.jsxs)(t.xu,{className:"fund__push-funds",backgroundColor:"var(--dashboard-card-background-color)",color:"var(--dashboard-card-text-color)",display:"flex",minHeight:"117px",borderRadius:"var(--radius)",padding:"35px 30px 30px 30px",margin:"20px 0 32px 0",justifyContent:"space-between",flexWrap:"wrap",children:[(0,_.jsxs)(t.kC,{width:{base:"100%",md:"unset"},className:"fund__push-funds__headers",display:"flex",justifyContent:"center",flexDirection:"column",children:[(0,_.jsx)(t.xv,{className:"top-row main-title",paddingBottom:"12px",fontSize:"24px",children:n("intraBankFundVC.fund_row_title")}),(0,_.jsx)(t.xv,{className:"fund__push-funds__headers",paddingRight:"7px",fontSize:"14px",display:"inline-block",maxWidth:"270px",lineHeight:"18px",children:n("move_funds_another_bank.fund_desc")})]}),(0,_.jsxs)(t.xu,{width:{base:"100%",md:"unset"},className:"fund__push-funds__numbers",position:"relative",children:[(0,_.jsxs)(t.kC,{className:"top-row",padding:"8px 100px 8px 0",children:[(0,_.jsx)(t.xv,{fontSize:"14px",minWidth:"134px",fontWeight:"600",children:n("account_details.accountNumber")}),(0,_.jsx)(t.xv,{fontSize:"14px",children:null===i||void 0===i?void 0:i.accountNumber}),(0,_.jsx)(t.xu,{cursor:"pointer",ml:"5px",top:"7px",right:"0",opacity:"0.6",transition:".3s",children:C?(0,_.jsx)(m.Z,{icon:"tick",cursor:"pointer",size:12}):(0,_.jsx)(m.Z,{onClick:b,icon:"copy",cursor:"pointer",size:12})})]}),(0,_.jsxs)(t.kC,{className:"top-row",padding:"8px 100px 8px 0",children:[(0,_.jsx)(t.xv,{fontSize:"14px",minWidth:"134px",fontWeight:"600",children:n("account_details.routingNumber")}),(0,_.jsx)(t.xv,{fontSize:"14px",children:null===i||void 0===i?void 0:i.routingNumber}),""!==(null===i||void 0===i?void 0:i.routingNumber)&&(0,_.jsx)(t.xu,{cursor:"pointer",ml:"5px",top:"7px",right:"0",opacity:"0.6",transition:".3s",children:y?(0,_.jsx)(m.Z,{icon:"tick",cursor:"pointer",size:12}):(0,_.jsx)(m.Z,{onClick:w,icon:"copy",cursor:"pointer",size:12})})]}),(0,_.jsxs)(t.kC,{className:"top-row",padding:"8px 100px 8px 0",children:[(0,_.jsx)(t.xv,{fontSize:"14px",minWidth:"134px",fontWeight:"600",children:n("account_details.type")}),(0,_.jsx)(t.xv,{fontSize:"14px",children:null===i||void 0===i?void 0:i.type})]}),(0,_.jsxs)(t.kC,{className:"top-row",padding:"8px 100px 8px 0",children:[(0,_.jsx)(t.xv,{fontSize:"14px",minWidth:"134px",fontWeight:"600",children:n("account_details.sponsorBank")}),(0,_.jsx)(t.xv,{fontSize:"14px",children:null===i||void 0===i?void 0:i.sponsorBankName})]})]})]}),(0,_.jsxs)(t.xu,{width:{base:"100%",md:"48%"},className:c,children:[(0,_.jsx)(t.xv,{className:"header-1",color:"var(--branding)",fontWeight:"500",fontSize:"24px",lineHeight:"26px",paddingBottom:"16px",children:n("move_funds_another_bank.fund_account_tittle")}),(0,_.jsx)(t.xu,{className:d,children:(0,_.jsxs)("ul",{children:[(0,_.jsxs)("li",{"aria-hidden":"true",onClick:S,children:[(0,_.jsxs)(t.kC,{className:u,marginRight:"auto",children:[(0,_.jsx)(t.xv,{className:p,fontSize:"16px",lineHeight:"20px",variant:"regular",textAlign:"left",children:n("pull_funds_options.fromBankTitle")}),(0,_.jsx)(t.xv,{className:"value",fontSize:"12px",paddingTop:"6px",variant:"small",textAlign:"left",children:n("pull_funds_options.fromBankDesc")})]}),(0,_.jsx)(t.xu,{className:"action",children:(0,_.jsx)("span",{className:"icon-Arrow-small-right"})})]}),(0,_.jsxs)("li",{"aria-hidden":"true",onClick:A,children:[(0,_.jsxs)(t.kC,{className:u,marginRight:"auto",children:[(0,_.jsx)(t.xv,{className:p,fontSize:"16px",lineHeight:"20px",variant:"regular",textAlign:"left",children:n("pull_funds_options.fromCardTitle")}),(0,_.jsx)(t.xv,{className:"value",fontSize:"12px",paddingTop:"6px",variant:"small",textAlign:"left",children:n("pull_funds_options.fromCardDesc")})]}),(0,_.jsx)(t.xu,{className:"action",children:(0,_.jsx)("span",{className:"icon-Arrow-small-right"})})]}),(0,_.jsxs)("li",{"aria-hidden":"true",onClick:W,children:[(0,_.jsxs)(t.kC,{className:u,marginRight:"auto",children:[(0,_.jsx)(t.xv,{className:p,fontSize:"16px",lineHeight:"20px",variant:"regular",textAlign:"left",children:n("pull_funds_options.depositCheck")}),(0,_.jsx)(t.xv,{className:"value",fontSize:"12px",paddingTop:"6px",variant:"small",textAlign:"left",children:n("deposit_check_requirements.RCD_depositCheckDesc")})]}),(0,_.jsx)(t.xu,{className:"action",children:(0,_.jsx)("span",{className:"icon-Arrow-small-right"})})]})]})})]}),(0,_.jsxs)(t.xu,{width:{base:"100%",md:"48%"},className:x,children:[(0,_.jsx)(t.xv,{className:"header-1",color:"var(--branding)",fontWeight:"500",fontSize:"24px",lineHeight:"26px",paddingBottom:"16px",children:n("sendFundVC.move_fund_row_title")}),(0,_.jsx)(t.xu,{className:d,children:(0,_.jsxs)("ul",{children:[(0,_.jsxs)("li",{"aria-hidden":"true",onClick:T,children:[(0,_.jsxs)(t.kC,{className:u,marginRight:"auto",children:[(0,_.jsx)(t.xv,{className:p,fontSize:"16px",lineHeight:"20px",variant:"regular",textAlign:"left",children:n("sendFundVC.move_fund_intrabank_title")}),(0,_.jsx)(t.xv,{className:"value",variant:"small",textAlign:"left",fontSize:"12px",paddingTop:"6px",children:n("sendFundVC.move_fund_intrabank_desc")})]}),(0,_.jsx)(t.xu,{className:"action",children:(0,_.jsx)("span",{className:"icon-Arrow-small-right"})})]}),(0,_.jsxs)("li",{"aria-hidden":"true",onClick:B,children:[(0,_.jsxs)(t.kC,{className:u,marginRight:"auto",children:[(0,_.jsx)(t.xv,{className:p,fontSize:"16px",lineHeight:"20px",variant:"regular",textAlign:"left",children:n("sendFundVC.move_fund_anotherBank_title")}),(0,_.jsx)(t.xv,{className:"value",variant:"small",textAlign:"left",fontSize:"12px",paddingTop:"6px",children:n("sendFundVC.move_fund_anotherBank_desc")})]}),(0,_.jsx)(t.xu,{className:"action",children:(0,_.jsx)("span",{className:"icon-Arrow-small-right"})})]})]})})]})]})})})}}}]);
//# sourceMappingURL=231.9f5d92bd.chunk.js.map