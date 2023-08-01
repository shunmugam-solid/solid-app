"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[7551],{7551:function(e,r,a){a.r(r),a.d(r,{default:function(){return C}});var t=a(1413),n=a(9439),o=a(2791),i=a(1938),d=a(2504),c=a(8735),s=a(3393),l=a(7718),u=a(2020),p=a(5048),f=a(5649),h=a(5304),m=a(80),v=a(3266),b=a(7770),y="LinkCard_iframeInput__91+Lu",x=a(4661),g=a(184),C=function(){var e=(0,u.$)().t,r=(0,o.useRef)(),a=(0,x.y)().goBack,C=(0,h.Qo)(),j=(0,o.useState)(!0),k=(0,n.Z)(j,2),w=k[0],_=k[1],N=(0,h.CG)((function(e){return e.core.config.mode})),S=(0,h.CG)((function(e){return e.account.selectedAccount}),p.wU),E=(0,i.jC)("Input",{variant:"primary"}),T=(0,i.Fg)(),O={"--input-color":T.styles.global[":root"]["--input-color"],"--input-placeholderColor":T.styles.global[":root"]["--input-placeholderColor"]},I=(0,t.Z)((0,t.Z)((0,t.Z)({},O),E.field),{},{boxSizing:"border-box","::placeholder":{color:"var(--input-placeholderColor)"}}),Z={boxShadow:E.field.boxShadow,border:"".concat(E.field.borderWidth,"px ").concat(E.field.borderColor," solid"),borderRadius:E.field.borderRadius,display:w?"none":""},A=(0,o.useMemo)((function(){return"string"===typeof E.field.height||"number"===typeof E.field.height?E.field.height:"48px"}),[E]),V=(0,o.useCallback)((function(){r.current=window.VGSCollect.create((0,m.Ab)(),"live"===N?"live":"sandbox",(function(){_(!1)})),r.current.field("#card-number",{type:"card-number",name:"debitCard.cardNumber",placeholder:"**** **** **** ****",showCardIcon:!1,validations:["required","validCardNumberExtended"],css:I}),r.current.field("#card-expiration-date",{type:"card-expiration-date",name:"debitCard",placeholder:"MM / YYYY",yearLength:"4",serializers:[{name:"separate",options:{monthName:"expiryMonth",yearName:"expiryYear"}}],validations:["required","validCardExpirationDate"],css:I})}),[]);(0,o.useEffect)((function(){var e=document.createElement("script");return e.id="vgs-collect-script",e.crossOrigin="anonymous",e.src="https://js.verygoodvault.com/vgs-collect/2.11.0/vgs-collect.js",e.type="text/javascript",e.onload=V,document.head.append(e),function(){var e;window.VGSShow=void 0,null===(e=document.getElementById("vgs-collect-script"))||void 0===e||e.remove()}}),[]);var G=(0,o.useCallback)((function(){(0,m.V_)(!0);var e=r.current.state["debitCard.cardNumber"],n=r.current.state.debitCard;e.isValid&&n.isValid?S&&C((0,v.Ay)()).then((function(e){C((0,b.rE)({accountId:null===S||void 0===S?void 0:S.id,name:"".concat(e.firstName," ").concat(e.lastName),phone:e.phone,email:e.email,card:{address:e.address?(0,t.Z)((0,t.Z)({},e.address),{},{addressType:"card"}):void 0}})).then((function(n){n.id&&C((0,b.r5)(n.id)).then((function(o){var i=o.debitCardToken;r.current.submit("/v1/contact/".concat(n.id,"/debitcard"),{headers:{"sd-debitcard-token":i},method:"PATCH",mapDotToObject:"merge",data:{debitCard:{address:(0,t.Z)((0,t.Z)({},e.address),{},{addressType:""})}}},(function(e,r){(0,m.V_)(!1),200!==e?(400===e&&"expiry year"===r.sysMessage?(0,m.c0)("An error occurred.","Invalid expiry date","error"):(0,m.c0)("An error occurred.",r.message,"error"),n.id&&C((0,b.GK)(n.id)).catch(m.WH)):a()}),(function(){(0,m.V_)(!1),n.id&&C((0,b.GK)(n.id)).catch(m.WH),(0,m.c0)("An error occurred.","Something went wrong","error")}))}))})).catch(m.WH)})).catch(m.WH):((0,m.V_)(!1),(0,m.c0)("An error occurred.","Invalid card details","error"))}),[S]);return(0,g.jsx)("div",{className:"page",children:(0,g.jsx)(f.Z,{heading:e("link_card.title"),footer:(0,g.jsx)(d.zx,{width:"100%",variant:"primary",onClick:G,children:e("link_card.ctaText")}),children:(0,g.jsxs)(c.xu,{width:"100%",paddingTop:"15px",children:[(0,g.jsxs)(s.NI,{variant:"primary",children:[(0,g.jsx)(s.lX,{variant:"primary",children:e("link_card.card")}),w&&(0,g.jsx)(l.Od,{w:"100%",h:A}),(0,g.jsx)(c.xu,{h:A,className:y,style:Z,id:"card-number"})]}),(0,g.jsxs)(s.NI,{variant:"primary",children:[(0,g.jsx)(s.lX,{variant:"primary",children:e("link_card.expiry")}),w&&(0,g.jsx)(l.Od,{w:"100%",h:A}),(0,g.jsx)(c.xu,{h:A,className:y,style:Z,id:"card-expiration-date"})]})]})})})}},7718:function(e,r,a){a.d(r,{Od:function(){return f}});var t=a(1938),n=a(6831),o=a(2791);a(5866);n.jU?o.useLayoutEffect:o.useEffect;n.Ts;n.Ts;var i=a(2554),d=a(5223);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},c.apply(this,arguments)}function s(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}var l=["startColor","endColor","isLoaded","fadeDuration","speed","className"],u=(0,t.m$)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),p=(0,i.F4)({from:{opacity:0},to:{opacity:1}}),f=(0,t.Gp)((function(e,r){var a=(0,t.mq)("Skeleton",e),i=function(){var e=o.useRef(!0);return o.useEffect((function(){e.current=!1}),[]),e.current}(),f=(0,t.Lr)(e);f.startColor,f.endColor;var h=f.isLoaded,m=f.fadeDuration;f.speed;var v=f.className,b=s(f,l),y=(0,d.D9)(h),x=(0,n.cx)("chakra-skeleton",v);if(h){var g=i||y?"none":p+" "+m+"s";return o.createElement(t.m$.div,c({ref:r,className:x,__css:{animation:g}},b))}return o.createElement(u,c({ref:r,className:x},b,{__css:a}))}));f.defaultProps={fadeDuration:.4,speed:.8},n.Ts&&(f.displayName="Skeleton");n.Ts;n.Ts}}]);
//# sourceMappingURL=7551.1ec06109.chunk.js.map