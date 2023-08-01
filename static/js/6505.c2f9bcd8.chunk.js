"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[6505],{2670:function(n,a,t){var e=t(2791),r=t(5798),i=t(4398),u=t.n(i),c=t(184),o="9{6,17}";a.Z=function(n){var a=n.onChange,t=n.value,i=(0,e.useRef)(null);return(0,e.useLayoutEffect)((function(){i.current&&u()({mask:o,showMaskOnHover:!1,showMaskOnFocus:!1,jitMasking:!0}).mask(i.current)}),[o]),(0,c.jsx)(r.II,{"data-testid":"ssn-input",variant:"primary",ref:i,onChange:function(n){var t,e=n.target.value,r=u().isValid(e,{mask:o}),c=null===(t=i.current)||void 0===t?void 0:t.inputmask.unmaskedvalue();a(e,c,r)},value:t})}},1023:function(n,a,t){var e=t(2791),r=t(5798),i=t(4398),u=t.n(i),c=t(184);a.Z=function(n){var a=n.onChange,t=n.value,i=n.placeholder,o=n.prefix,s=n.digits,l=(0,e.useRef)(null);return(0,e.useLayoutEffect)((function(){l.current&&u()("currency",{autoUnmask:!0,allowMinus:!1,prefix:null!==o&&void 0!==o?o:"$ ",placeholder:i,rightAlign:!1,digits:s,numericInput:!0}).mask(l.current)}),[o,s,i]),(0,c.jsx)(r.II,{"data-testid":"currency-input",variant:"primary",placeholder:i||"$ 0.00",ref:l,onChange:function(n){var t=n.target.value;a(t)},value:t})}},8040:function(n,a,t){var e=t(2791),r=t(5798),i=t(4398),u=t.n(i),c=t(184),o="999999999";a.Z=function(n){var a=n.onChange,t=n.value,i=(0,e.useRef)(null);return(0,e.useLayoutEffect)((function(){i.current&&u()({mask:o,showMaskOnHover:!1,showMaskOnFocus:!1,jitMasking:!0}).mask(i.current)}),[o]),(0,c.jsx)(r.II,{"data-testid":"routing-input",variant:"primary",ref:i,onChange:function(n){var t,e=n.target.value,r=u().isValid(e,{mask:o}),c=null===(t=i.current)||void 0===t?void 0:t.inputmask.unmaskedvalue();a(e,c,r)},value:t})}},5694:function(n,a,t){t.d(a,{V:function(){return r}});var e=t(2560),r=function(n){return{type:e.Q,payload:n}}},4785:function(n,a,t){t.d(a,{DN:function(){return s},ee:function(){return u},nc:function(){return l},rc:function(){return c},zt:function(){return o}});var e=t(286),r=t(80),i=t(5694),u=function(n){return function(a){return new Promise((function(t,u){(0,r.V_)(!0),e.Z.post("v1/send/intrabank",n).then((function(n){var e=n.data;a((0,i.V)(e)),t(e)})).catch(u).finally((function(){(0,r.V_)(!1)}))}))}},c=function(n){return function(a){return new Promise((function(t,u){(0,r.V_)(!0),e.Z.post("v1/send/ach",n).then((function(n){var e=n.data;a((0,i.V)(e)),t(e)})).catch(u).finally((function(){(0,r.V_)(!1)}))}))}},o=function(n){return function(a){return new Promise((function(t,u){(0,r.V_)(!0),e.Z.post("v1/send/wire",n).then((function(n){var e=n.data;a((0,i.V)(e)),t(e)})).catch(u).finally((function(){(0,r.V_)(!1)}))}))}},s=function(n){return function(a){return new Promise((function(t,u){(0,r.V_)(!0),e.Z.post("v1/send/card",n).then((function(n){var e=n.data;a((0,i.V)(e)),t(e)})).catch(u).finally((function(){(0,r.V_)(!1)}))}))}},l=function(n){return function(a){return new Promise((function(t,u){(0,r.V_)(!0),e.Z.post("v1/send/check",n).then((function(n){var e=n.data;a((0,i.V)(e)),t(e)})).catch(u).finally((function(){(0,r.V_)(!1)}))}))}}},6505:function(n,a,t){t.r(a);var e=t(1413),r=t(9439),i=t(2791),u=t(2504),c=t(8735),o=t(3393),s=t(5798),l=t(7640),v=t(2020),d=t(5048),h=t(7689),m=t(5649),f=t(5304),p=t(4785),g=t(7770),y=t(80),k=t(1778),x=t(9578),b=t(2942),j=t(1023),N=t(8040),Z=t(2670),C=t(184),_={personalSavings:"Personal Savings",personalChecking:"Personal Checking",businessSavings:"Business Savings",businessChecking:"Business Checking"};a.default=function(){var n,a,t,I,w=(0,v.$)().t,V=(0,f.Qo)(),T=(0,h.s0)(),S=(0,k.qu)().startScreen,P=void 0===S?"options":S,M=(0,k._f)("ach").showBack,X=(0,f.CG)((function(n){return n.account.selectedAccount}),d.wU),B=(0,f.CG)((function(n){return n.contact.selectedContact}),d.wU),E=(0,i.useState)({name:(null===B||void 0===B?void 0:B.name)||"",accountNumber:(null===B||void 0===B||null===(n=B.ach)||void 0===n?void 0:n.accountNumber)||"",routingNumber:(null===B||void 0===B||null===(a=B.ach)||void 0===a?void 0:a.routingNumber)||"",bankName:(null===B||void 0===B||null===(t=B.ach)||void 0===t?void 0:t.bankName)||"",accountType:(null===B||void 0===B||null===(I=B.ach)||void 0===I?void 0:I.accountType)||"personalSavings"}),O=(0,r.Z)(E,2),H=O[0],R=O[1],A=(0,i.useState)({amount:"",description:"",contactId:(null===B||void 0===B?void 0:B.id)||"",accountId:(null===X||void 0===X?void 0:X.id)||""}),F=(0,r.Z)(A,2),G=F[0],L=F[1],U=(0,i.useMemo)((function(){return 0!==H.name.length&&0!==H.accountNumber.length&&0!==H.accountType.length&&0!==H.routingNumber.length&&0!==H.bankName.length&&0!==G.amount.length&&parseFloat(G.amount)>=.01&&0!==G.description.length}),[H,G]),W=(0,i.useCallback)((function(){null!==B&&void 0!==B&&B.id&&U&&V((0,g.Tk)(B.id,{accountId:B.accountId,name:H.name,ach:{accountNumber:H.accountNumber,routingNumber:H.routingNumber,bankName:H.bankName,accountType:H.accountType}})).then((function(){V((0,p.rc)(G)).then((function(){T("/payments/success")})).catch(y.WH)})).catch(y.WH)}),[U,G,H]);return(0,C.jsx)("div",{className:"page",children:(0,C.jsx)(m.Z,{heading:w("payments_ach.title"),footer:(0,C.jsx)(u.zx,{width:"100%",variant:"primary",disabled:!U,onClick:W,children:w("payments_ach.ctaText")}),showBack:"ach"!==P||!!M,onBack:function(){(0,x.bG)(b.CW.BACK_PRESSED,{from:"ach"}),"ach"!==P&&T(-1)},children:(0,C.jsxs)(c.xu,{width:"100%",paddingTop:"15px",children:[(0,C.jsxs)(o.NI,{variant:"primary",children:[(0,C.jsx)(o.lX,{variant:"primary",children:w("payments_ach.name")}),(0,C.jsx)(s.II,{variant:"primary",value:(null===H||void 0===H?void 0:H.name)||"",onChange:function(n){R((0,e.Z)((0,e.Z)({},H),{},{name:n.target.value}))}})]}),(0,C.jsxs)(o.NI,{variant:"primary",children:[(0,C.jsx)(o.lX,{variant:"primary",children:w("payments_ach.accountNumber")}),(0,C.jsx)(Z.Z,{value:H.accountNumber,onChange:function(n,a){R((0,e.Z)((0,e.Z)({},H),{},{accountNumber:a}))}})]}),(0,C.jsxs)(o.NI,{variant:"primary",children:[(0,C.jsx)(o.lX,{variant:"primary",children:w("payments_ach.routingNumber")}),(0,C.jsx)(N.Z,{value:H.routingNumber,onChange:function(n,a){R((0,e.Z)((0,e.Z)({},H),{},{routingNumber:a}))}})]}),(0,C.jsxs)(o.NI,{variant:"primary",children:[(0,C.jsx)(o.lX,{variant:"primary",children:w("payments_ach.accountType")}),(0,C.jsx)(l.Ph,{variant:"primary",value:H.accountType,onChange:function(n){R((0,e.Z)((0,e.Z)({},H),{},{accountType:n.target.value}))},children:Object.keys(_).map((function(n){return(0,C.jsx)("option",{value:n,children:_[n]},n)}))})]}),(0,C.jsxs)(o.NI,{variant:"primary",children:[(0,C.jsx)(o.lX,{variant:"primary",children:w("payments_ach.bank")}),(0,C.jsx)(s.II,{variant:"primary",value:H.bankName,onChange:function(n){R((0,e.Z)((0,e.Z)({},H),{},{bankName:n.target.value}))}})]}),(0,C.jsxs)(o.NI,{variant:"primary",children:[(0,C.jsx)(o.lX,{variant:"primary",children:w("payments_ach.amount")}),(0,C.jsx)(j.Z,{value:G.amount,onChange:function(n){L((0,e.Z)((0,e.Z)({},G),{},{amount:n||""}))}})]}),(0,C.jsxs)(o.NI,{variant:"primary",children:[(0,C.jsx)(o.lX,{variant:"primary",children:w("payments_ach.purpose")}),(0,C.jsx)(s.II,{variant:"primary",value:G.description,onChange:function(n){L((0,e.Z)((0,e.Z)({},G),{},{description:n.target.value}))}})]})]})})})}}}]);
//# sourceMappingURL=6505.c2f9bcd8.chunk.js.map