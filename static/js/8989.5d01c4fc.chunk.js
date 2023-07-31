"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[8989],{5694:function(e,n,t){t.d(n,{V:function(){return a}});var c=t(2560),a=function(e){return{type:c.Q,payload:e}}},1739:function(e,n,t){t.d(n,{$t:function(){return l},Ak:function(){return u},oR:function(){return d}});var c=t(3433),a=t(1413),i=t(286),r=t(80),o=t(5694),s=t(5182),l=function(e){return function(n){return new Promise((function(t,c){(0,r.V_)(!0),i.Z.post("v1/receive/check",e).then((function(e){var c=e.data;n((0,o.V)(c)),t(c)})).catch(c).finally((function(){(0,r.V_)(!1)}))}))}},d=function(e,n){return function(t,c){return new Promise((function(t,a){(0,r.V_)(!0);var i=c(),o=i.user.authTokenDetails,s=i.core.config.apiBasePath,l=new XMLHttpRequest;l.open("PATCH","".concat(s,"v1/receive/check/").concat(e,"/files")),"accessToken"in o&&l.setRequestHeader("AUTHORIZATION","Bearer ".concat(o.accessToken)),l.addEventListener("load",(function(){if(l.status>=200&&l.status<=300){var e=l.response;"string"===typeof l.response&&(e=JSON.parse(l.response)),t(e)}else{var n=l.response;"string"===typeof l.response&&(n=JSON.parse(l.response)),a(n)}(0,r.V_)(!1)})),l.addEventListener("error",(function(e){var n=e;"string"===typeof e&&(n=JSON.parse(e)),a(n),(0,r.V_)(!1)})),l.send(n)}))}},u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return function(o,l){return new Promise((function(d,u){(0,r.V_)(!0),i.Z.get("v1/receive/check?accountId=".concat(e,"&limit=").concat(n,"&offset=").concat(t)).then((function(e){var n=e.data,i=l().checkdeposit,r={total:0,data:[]};if(0===t)r=n;else{var u=(0,a.Z)({},i.checkList);r={data:[].concat((0,c.Z)(u.data),(0,c.Z)(n.data)),total:n.total}}o((0,s.g)(r)),d(r)})).catch(u).finally((function(){(0,r.V_)(!1)}))}))}}},8445:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var c=t(2791),a=t(2020),i=t(2504),r=t(8735),o=t(5420),s=t(3046),l=t(5048),d=t(5649),u={bodyStyles:"CheckDetailsConfirm_bodyStyles__JKI4h",addCheckImagesTitle:"CheckDetailsConfirm_addCheckImagesTitle__rT2PN",upload:"CheckDetailsConfirm_upload__KW1sd",label:"CheckDetailsConfirm_label__TQ4YR",checkInfo:"CheckDetailsConfirm_checkInfo__3KwDb",checkInfoItem:"CheckDetailsConfirm_checkInfoItem__ucUYo"},f=t(5304),h=t(80),m=t(1739),x=t(4661),p=t(184),k=c.lazy((function(){return Promise.all([t.e(7625),t.e(8817)]).then(t.bind(t,8817))})),g=function(){var e=(0,a.$)().t,n=(0,x.y)().open,t=(0,f.Qo)(),g=(0,f.CG)((function(e){return e.checkdeposit.checkData}),l.wU),_=(0,f.CG)((function(e){return e.contact.selectedContact}),l.wU),v=(0,f.CG)((function(e){return e.account.selectedAccount}),l.wU),I=(0,c.useMemo)((function(){return null===g.frontImage?"":URL.createObjectURL(g.frontImage)}),[g.frontImage]),C=(0,c.useMemo)((function(){return null===g.backImage?"":URL.createObjectURL(g.backImage)}),[g.frontImage]),j=(0,c.useCallback)((function(){v&&null!==_&&void 0!==_&&_.id&&t((0,m.$t)({accountId:v.id,contactId:_.id,amount:g.amount,description:"Payment"})).then((function(e){if(g.frontImage&&g.backImage){var c=new FormData;c.append("front",g.frontImage),c.append("back",g.backImage),c.append("accountId",v.id),t((0,m.oR)(e.id,c)).then((function(){n(k)})).catch(h.WH)}})).catch(h.WH)}),[v,_,g]);return(0,p.jsx)("div",{className:"page",children:(0,p.jsx)(d.Z,{heading:e("check_details_confirm.title"),bodyClass:u.bodyStyles,footer:(0,p.jsx)(i.zx,{width:"100%",variant:"primary",onClick:j,children:e("check_details_confirm.ctaText")}),children:(0,p.jsxs)(r.xu,{width:"100%",paddingTop:"15px",children:[(0,p.jsxs)(r.xu,{className:u.checkInfo,children:[(0,p.jsxs)(r.Ug,{className:u.checkInfoItem,children:[(0,p.jsx)(r.xv,{variant:"regular",className:"".concat(u.label," text-dark"),textAlign:"left",children:e("check_details_confirm.checkAmount")}),(0,p.jsx)(r.xu,{w:"50%",children:(0,p.jsx)(r.xv,{variant:"regular",textAlign:"left",children:(0,h.OH)(g.amount)})})]}),(0,p.jsxs)(r.Ug,{className:u.checkInfoItem,children:[(0,p.jsx)(r.xv,{variant:"regular",className:"".concat(u.label," text-dark"),textAlign:"left",children:e("check_details_confirm.depositTo")}),(0,p.jsx)(r.xu,{w:"50%",children:(0,p.jsx)(r.xv,{variant:"regular",textAlign:"left",children:null===_||void 0===_?void 0:_.name})})]})]}),(0,p.jsxs)(r.xu,{className:u.upload,children:[(0,p.jsx)(r.xu,{display:"flex",children:(0,p.jsx)(o.XZ,{size:"lg",isChecked:!0,children:(0,p.jsx)(r.xv,{variant:"regular",ml:"8px",fontSize:"16px",children:e("check_details_confirm.frontOfCheck")})})}),(0,p.jsx)(r.M5,{pt:"24px",children:(0,p.jsx)(s.Ei,{className:u.card_image,src:I,alt:"logo","data-testid":"card-img"})})]}),(0,p.jsxs)(r.xu,{className:u.upload,children:[(0,p.jsx)(r.xu,{display:"flex",children:(0,p.jsx)(o.XZ,{size:"lg",isChecked:!0,children:(0,p.jsx)(r.xv,{variant:"regular",ml:"8px",fontSize:"16px",children:e("check_details_confirm.backOfCheck")})})}),(0,p.jsx)(r.M5,{pt:"24px",children:(0,p.jsx)(s.Ei,{className:u.card_image,src:C,alt:"logo","data-testid":"card-img"})})]})]})})})}}}]);
//# sourceMappingURL=8989.5d01c4fc.chunk.js.map