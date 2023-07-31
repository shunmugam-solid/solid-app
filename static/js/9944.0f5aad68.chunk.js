"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[9944,1708],{2019:function(e,a,t){t(2791);a.Z=t.p+"static/media/card-dummy.19c76a5b99fbc47d33e218cb877d1407.svg"},8819:function(e,a,t){var r=t(2791),n=t(8735),c=t(3046),i=t(5048),l=t(2020),s=t(1098),o=t(5304),d=t(7208),u=t(80),x=t(2019),h=t(184),f=r.memo((function(e){var a=e.data,t=e.showSecrets,f=e.onReady,m=a,_=(0,l.$)().t,p=(0,o.Qo)(),v=(0,r.useRef)(null),g=(0,r.useRef)(null),j=(0,o.CG)((function(e){return e.core.programConfig}),i.wU),C=(0,o.CG)((function(e){return e.business.selectedBusiness}),i.wU),w=(0,r.useMemo)((function(){return"physical"===m.cardType?null===j||void 0===j?void 0:j.brand.cardArtPhysical:null===j||void 0===j?void 0:j.brand.cardArtVirtual}),[m,j]),b=(0,r.useMemo)((function(){return"physical"===m.cardType?null===j||void 0===j?void 0:j.brand.physicalCardTextColor:null===j||void 0===j?void 0:j.brand.virtualCardTextColor}),[m,j]),S=(0,r.useCallback)((function(){(0,u.V_)(!0),p((0,d.ms)(a.id)).then((function(e){(0,u.V_)(!0);var t=setTimeout((function(){(0,u.V_)(!1)}),15e3),r=window.VGSShow.create((0,u.Ab)(),(function(e){var a,r;!0===(null===e||void 0===e||null===(a=e.cvvIframe)||void 0===a?void 0:a.revealed)&&!0===(null===e||void 0===e||null===(r=e.cardNoIframe)||void 0===r?void 0:r.revealed)&&(clearTimeout(t),(0,u.V_)(!1))})),n={"sd-show-token":e.showToken};r.request({name:"cardNoIframe",method:"GET",headers:n,path:"/v1/card/".concat(a.id,"/show"),jsonPathSelector:"cardNumber",serializers:[r.SERIALIZERS.replace("(\\d{4})(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3 $4")]}).render(v.current,{color:b,fontSize:"15px",height:"20px",overflow:"hidden",fontWeight:"700"}),r.request({name:"cvvIframe",method:"GET",headers:n,path:"/v1/card/".concat(a.id,"/show"),jsonPathSelector:"cvv"}).render(g.current,{color:b,fontSize:"13px",display:"block",height:"16px",overflow:"hidden"}),f&&f({show:r,headers:n})})).catch(u.WH).finally((function(){return(0,u.V_)(!1)}))}),[a]);return(0,r.useEffect)((function(){if(t){var e=document.createElement("script");e.id="vgs-script",e.crossOrigin="anonymous";e.src="https://js.verygoodvault.com/vgs-show/1.3/".concat("ACci3u9aEmutHr7zpAeVY2Zc",".js"),e.type="text/javascript",e.onload=S,document.head.append(e)}return function(){var e;window.VGSShow=void 0,null===(e=document.getElementById("vgs-script"))||void 0===e||e.remove()}}),[t]),(0,h.jsxs)(n.xu,{opacity:"inactive"===m.cardStatus?"0.5":"1",className:"".concat(s.Z.card_image_info," ").concat(s.Z.cardList__card_image_info_white),children:[(0,h.jsx)(c.Ee,{className:s.Z.card_image,alt:"logo",src:w,fallbackSrc:x.Z,"data-testid":"card-img"}),(0,h.jsxs)(n.xu,{className:s.Z.card_details,children:[(0,h.jsxs)(n.xu,{pt:"14px",mb:"auto",children:[(0,h.jsx)(n.xv,{color:b,fontWeight:"500",fontSize:"10px",children:_("cards_list.".concat(m.cardType))}),(0,h.jsx)(n.xv,{color:"#A1A1A1",fontSize:"10px",children:"Limited Use"})]}),t?(0,h.jsx)(n.kC,{children:(0,h.jsx)(n.xu,{className:s.Z["secret-wrapper"],height:"20px",width:"60%",overflow:"hidden",ref:v,mb:"12px"})}):(0,h.jsxs)(n.xv,{color:b,fontWeight:"700",fontSize:"15px",pb:"8px",children:["**** **** ****"," ",m.last4]}),(0,h.jsxs)(n.Ug,{children:[(0,h.jsxs)(n.xu,{alignItems:"flex-start",mr:"40px",children:[(0,h.jsx)(n.xv,{color:"#A1A1A1",fontSize:"10px",children:_("cards_list.expDate")}),(0,h.jsxs)(n.xv,{color:b,fontSize:"13px",children:[m.expiryMonth,"/",m.expiryYear]})]}),(0,h.jsxs)(n.xu,{alignItems:"flex-start",children:[(0,h.jsx)(n.xv,{color:"#A1A1A1",fontSize:"10px",children:_("cards_list.cvv")}),t?(0,h.jsx)(n.xu,{className:s.Z["secret-wrapper"],height:"20px",width:"50px",ref:g}):(0,h.jsx)(n.xv,{color:b,fontSize:"13px",children:"***"})]})]}),(0,h.jsxs)(n.xu,{mt:"auto",children:[(0,h.jsx)(n.xv,{color:b,fontWeight:"700",fontSize:"9px",children:""!==m.embossingPerson?m.embossingPerson:m.cardholder.name}),(0,h.jsx)(n.xv,{color:b,fontWeight:"700",fontSize:"9px",children:""!==m.embossingBusiness?m.embossingBusiness:null===C||void 0===C?void 0:C.legalName})]})]})]})}));a.Z=f},6864:function(e,a,t){t.d(a,{Z:function(){return u}});t(2791);var r=t(4946),n=t(8735),c=t(2504),i="ConfirmModal_modal__fS-v4",l="ConfirmModal_modalHeader__M3BcQ",s="ConfirmModal_modalBody__uHbgc",o="ConfirmModal_modalClose__Xh2Cs",d=t(184),u=function(e){var a=e.title,t=e.description,u=e.cancelButton,x=e.submitButton,h=e.showModal,f=e.onCancel,m=e.onOk;return(0,d.jsxs)(r.u_,{isOpen:h,size:"sm",isCentered:!0,onClose:function(){return f},children:[(0,d.jsx)(r.ZA,{}),(0,d.jsxs)(r.hz,{className:"".concat(i),children:[(0,d.jsx)(r.xB,{className:"".concat(l),children:a}),(0,d.jsx)(r.ol,{onClick:f,className:"".concat(o)}),(0,d.jsx)(r.fe,{className:"".concat(s),children:(0,d.jsx)(n.xv,{children:t})}),(0,d.jsxs)(r.mz,{children:[(0,d.jsx)(c.zx,{colorScheme:"branding",variant:"outline",mr:3,onClick:f,children:u||"Cancel"}),(0,d.jsx)(c.zx,{onClick:m,variant:"primary",children:x||"Submit"})]})]})]})}},9944:function(e,a,t){t.r(a),t.d(a,{default:function(){return N}});var r=t(9439),n=t(2791),c=t(2020),i=t(967),l=t(5223),s=t(8735),o=t(9743),d=t(4144),u="CardDetails_pointer__wpB4y",x="CardDetails_cardDetails__action_in_list__-IbkW",h="CardDetails_iconCopy__8Jl5g",f="CardDetails_cardNumber__tiHE-",m="CardDetails_cardDetails__cardNo__BOpAt",_=t(6864),p=t(5304),v=t(7208),g=t(80),j=t(8819),C=t(3746),w=t(1778),b=t(5649),S=t(4661),y=t(184),z=n.lazy((function(){return Promise.all([t.e(4398),t.e(9935)]).then(t.bind(t,9935))})),k=n.lazy((function(){return t.e(9355).then(t.bind(t,9355))})),N=function(){var e=(0,c.$)().t,a=(0,p.Qo)(),t=(0,i.pm)(),N=(0,S.y)(),A=N.open,Z=N.close,I=N.data,B=(null===I||void 0===I?void 0:I.id)||"",D=(0,n.useState)(null),E=(0,r.Z)(D,2),M=E[0],T=E[1],W=(0,l.kt)(),V=(0,r.Z)(W,2),H=V[0],L=V[1],R=(0,n.useState)(!1),$=(0,r.Z)(R,2),G=$[0],O=$[1],P=(0,n.useState)(!1),U=(0,r.Z)(P,2),q=U[0],F=U[1],Q=(0,n.useState)(!1),X=(0,r.Z)(Q,2),Y=X[0],J=X[1],K=(0,n.useState)(!1),ee=(0,r.Z)(K,2),ae=ee[0],te=ee[1],re=(0,n.useRef)(null),ne=(0,n.useRef)(null),ce=(0,w.Vd)("cards"),ie=ce.showFreezeCard,le=ce.showCardLabel,se=ce.showSpendingLimit,oe=ce.showTransactions,de=ce.showAtmInfo,ue=ce.showCancelCard,xe=ce.showGetHelp;(0,n.useEffect)((function(){B&&a((0,v.nO)(B)).then((function(e){T(e),a((0,C.Vf)(e)),"inactive"===e.cardStatus&&L.on()})).catch(g.WH)}),[B]);var he=(0,n.useCallback)((function(){null!==M&&void 0!==M&&M.id&&a((0,v.OV)(M.id,{cardStatus:H?"inactive":"active"})).then((function(e){T(e),a((0,C.Vf)(e))})).catch((function(e){L.toggle(),(0,g.WH)(e)})).finally((function(){O(!1),F(!1)}))}),[null===M||void 0===M?void 0:M.id,H]),fe=(0,n.useCallback)((function(){null!==M&&void 0!==M&&M.id&&(J(!1),a((0,v.XN)(M.id)).then((function(){})).catch(g.WH))}),[M]),me=(0,n.useCallback)((function(){M&&console.log("cardData")}),[M]),_e=(0,n.useCallback)((function(e){var a=e.show,r=e.headers;if(M){var n=a.request({name:"cardNoIframe2",method:"GET",headers:r,path:"/v1/card/".concat(M.id,"/show"),jsonPathSelector:"cardNumber",serializers:[a.SERIALIZERS.replace("(\\d{4})(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3 $4")]});n.render(re.current,{color:"#767676",fontSize:"16px",display:"block",height:"16px",fontWeight:500,letterSpacing:.5,lineHeight:"24px"}),a.copyFrom(n,{text:'<svg width="13" height="13" viewBox="0 0 30 30" style=""><g transform="scale(0.03125 0.03125)"><path d="M373.336 832c-99.969 0-181.336-81.374-181.336-181.338v-437.328h-74.664c-64.726 0-117.336 52.601-117.336 117.328v575.997c0 64.734 52.61 117.342 117.336 117.342h533.331c64.725 0 117.333-52.608 117.333-117.342v-74.658h-394.664z"></path><path d="M938.667 117.336c0-64.812-52.523-117.336-117.333-117.336h-447.997c-64.812 0-117.336 52.524-117.336 117.336v533.328c0 64.813 52.524 117.336 117.336 117.336h447.997c64.811 0 117.333-52.523 117.333-117.336v-533.328z"></path></g></svg>'},(function(e){"success"===e&&t({title:"Card Number copied.",status:"success",duration:9e3,isClosable:!0})})).render(ne.current,{cursor:"pointer",overflow:"hidden",left:"auto",right:"0",width:"auto",fill:getComputedStyle(document.documentElement).getPropertyValue("--icon-color")})}}),[M]);return null===M?null:(0,y.jsx)(s.xu,{className:"page",children:(0,y.jsxs)(b.Z,{showBack:!0,onBack:function(){Z()},heading:e("card_details.title"),children:[(0,y.jsxs)(s.xu,{width:"100%",children:[(0,y.jsx)(j.Z,{data:M,showSecrets:!0,onReady:_e},M.id),(0,y.jsxs)(s.xu,{className:"".concat(x," ").concat(m),children:[(0,y.jsx)(s.xv,{variant:"regular",pr:"2px",textAlign:"left",children:e("card_details.cardNo")}),(0,y.jsx)(s.xv,{className:"".concat(f," cardIframeWrapper cardIframeWrapper__number"),ref:re,variant:"regular text-light"}),(0,y.jsx)("span",{className:"".concat(h," cardIframeWrapper cardIframeWrapper__copy"),ref:ne})]}),oe?(0,y.jsxs)(s.xu,{onClick:me,className:"".concat(x," ").concat(u),children:[(0,y.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.transactions")}),(0,y.jsx)(d.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}):null,(0,y.jsx)(s.xv,{variant:"large",pt:"20px",pb:"16px",children:e("card_details.actions")}),(0,y.jsxs)(s.xu,{rounded:"4px",pb:"20px",children:[ie?(0,y.jsxs)(s.xu,{className:x,children:[(0,y.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.freezeCard")}),(0,y.jsx)(o.r,{variant:"primary",id:"send-by-email",isChecked:H,onChange:function(e){return e.target.checked?O(!0):F(!0),void L.toggle()}})]}):null,le?(0,y.jsxs)(s.xu,{className:x,children:[(0,y.jsxs)(s.xv,{variant:"regular",textAlign:"left",children:[e("card_details.cardLabel"),":"]}),(0,y.jsx)(s.xv,{variant:"regular",pl:"8px",mr:"auto",className:"text-light",children:M.label}),(0,y.jsx)(s.xv,{variant:"small",className:"".concat(u," text-dark"),fontSize:"14px",textDecor:"underline",onClick:function(){return A(z)},children:e("card_details.edit")})]}):null,se?(0,y.jsxs)(s.xu,{className:x,children:[(0,y.jsx)(s.xv,{variant:"regular",textAlign:"left",children:e("card_details.spendingLimit")}),(0,y.jsxs)(s.xv,{variant:"regular",color:"#2EC193",pl:"8px",mr:"auto",textAlign:"left",children:["$"," ",M.limitAmount]}),(0,y.jsx)(s.xv,{variant:"small",className:"".concat(u," text-dark"),fontSize:"14px",textDecor:"underline",onClick:function(){return A(z)},children:e("card_details.edit")})]}):null,de&&"active"===M.cardStatus?(0,y.jsxs)(s.xu,{className:"".concat(x," ").concat(u),onClick:function(){return A(k)},children:[(0,y.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.atmInfo")}),(0,y.jsx)(d.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}):null,ue?(0,y.jsxs)(s.xu,{className:"".concat(x," ").concat(u),onClick:function(){return J(!0)},children:[(0,y.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.cancelCard")}),(0,y.jsx)(d.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}):null,xe?(0,y.jsxs)(s.xu,{className:"".concat(x," ").concat(u),onClick:function(){},children:[(0,y.jsx)(s.xv,{variant:"regular",mr:"auto",textAlign:"left",children:e("card_details.getHelp")}),(0,y.jsx)(s.xv,{variant:"small",fontSize:"14px",textDecor:"underline",className:"".concat(u," text-dark"),children:e("card_details.chat")})]}):null]})]}),(0,y.jsx)(_.Z,{showModal:G,submitButton:e("card_details.cardInfo_freeze_button"),cancelButton:e("card_details.cancel"),title:e("card_details.freezeCard"),description:e("card_details.freezeDescription"),onCancel:function(){O(!1),L.toggle()},onOk:he}),(0,y.jsx)(_.Z,{showModal:q,submitButton:e("card_details.cardInfo_unfreeze_button"),cancelButton:e("card_details.cancel"),title:e("card_details.unFreezeCard"),description:e("card_details.unFreezeDescription"),onCancel:function(){F(!1),O(!1),L.toggle()},onOk:he}),(0,y.jsx)(_.Z,{showModal:Y,submitButton:e("card_details.yes"),cancelButton:e("card_details.no"),title:e("card_details.cancelCard"),description:e("card_details.cardInfo_cancel_alert_messsage"),onCancel:function(){return J(!1)},onOk:fe}),(0,y.jsx)(_.Z,{showModal:ae,submitButton:e("card_details.yes"),cancelButton:e("card_details.no"),title:e("card_details.replaceCard"),description:"Replacing your card will discard your exisiting card information and a new card will be issued with a different card number",onOk:function(){a((0,C.Py)(M.id)),te(!1),a((0,C.Qr)({cardType:M.cardType,accountId:M.accountId,currency:"USD"})),setTimeout((function(){A(z)}),0)},onCancel:function(){te(!1)}})]})})}},1098:function(e,a){a.Z={card_image_info:"Card_card_image_info__1lu3-",cardList__card_image_info_white:"Card_cardList__card_image_info_white__oomdL",card_image:"Card_card_image__zhqS8",card_details:"Card_card_details__wrMqr","secret-wrapper":"Card_secret-wrapper__XSUD8",cancel_card:"Card_cancel_card__ZnXGe",sent_card:"Card_sent_card__modhG",is_cancelled:"Card_is_cancelled__oods1"}}}]);
//# sourceMappingURL=9944.0f5aad68.chunk.js.map