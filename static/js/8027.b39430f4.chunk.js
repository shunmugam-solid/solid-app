"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[8027],{8819:function(t,e,a){var n=a(2791),c=a(8735),s=a(3046),r=a(5048),i=a(2020),o=a(1098),l=a(5304),d=a(7208),u=a(80),x=a(2019),h=a(184),v=n.memo((function(t){var e=t.data,a=t.showSecrets,v=t.onReady,m=e,p=(0,i.$)().t,g=(0,l.Qo)(),f=(0,n.useRef)(null),_=(0,n.useRef)(null),j=(0,l.CG)((function(t){return t.core.programConfig}),r.wU),b=(0,l.CG)((function(t){return t.business.selectedBusiness}),r.wU),w=(0,n.useMemo)((function(){return"physical"===m.cardType?null===j||void 0===j?void 0:j.brand.cardArtPhysical:null===j||void 0===j?void 0:j.brand.cardArtVirtual}),[m,j]),C=(0,n.useMemo)((function(){return"physical"===m.cardType?null===j||void 0===j?void 0:j.brand.physicalCardTextColor:null===j||void 0===j?void 0:j.brand.virtualCardTextColor}),[m,j]),N=(0,n.useCallback)((function(){(0,u.V_)(!0),g((0,d.ms)(e.id)).then((function(t){(0,u.V_)(!0);var a=setTimeout((function(){(0,u.V_)(!1)}),15e3),n=window.VGSShow.create((0,u.Ab)(),(function(t){var e,n;!0===(null===t||void 0===t||null===(e=t.cvvIframe)||void 0===e?void 0:e.revealed)&&!0===(null===t||void 0===t||null===(n=t.cardNoIframe)||void 0===n?void 0:n.revealed)&&(clearTimeout(a),(0,u.V_)(!1))})),c={"sd-show-token":t.showToken};n.request({name:"cardNoIframe",method:"GET",headers:c,path:"/v1/card/".concat(e.id,"/show"),jsonPathSelector:"cardNumber",serializers:[n.SERIALIZERS.replace("(\\d{4})(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3 $4")]}).render(f.current,{color:C,fontSize:"15px",height:"20px",overflow:"hidden",fontWeight:"700"}),n.request({name:"cvvIframe",method:"GET",headers:c,path:"/v1/card/".concat(e.id,"/show"),jsonPathSelector:"cvv"}).render(_.current,{color:C,fontSize:"13px",display:"block",height:"16px",overflow:"hidden"}),v&&v({show:n,headers:c})})).catch(u.WH).finally((function(){return(0,u.V_)(!1)}))}),[e]);return(0,n.useEffect)((function(){if(a){var t=document.createElement("script");t.id="vgs-script",t.crossOrigin="anonymous";t.src="https://js.verygoodvault.com/vgs-show/1.3/".concat("ACci3u9aEmutHr7zpAeVY2Zc",".js"),t.type="text/javascript",t.onload=N,document.head.append(t)}return function(){var t;window.VGSShow=void 0,null===(t=document.getElementById("vgs-script"))||void 0===t||t.remove()}}),[a]),(0,h.jsxs)(c.xu,{opacity:"inactive"===m.cardStatus?"0.5":"1",className:"".concat(o.Z.card_image_info," ").concat(o.Z.cardList__card_image_info_white),children:[(0,h.jsx)(s.Ee,{className:o.Z.card_image,alt:"logo",src:w,fallbackSrc:x.Z,"data-testid":"card-img"}),(0,h.jsxs)(c.xu,{className:o.Z.card_details,children:[(0,h.jsxs)(c.xu,{pt:"14px",mb:"auto",children:[(0,h.jsx)(c.xv,{color:C,fontWeight:"500",fontSize:"10px",children:p("cards_list.".concat(m.cardType))}),(0,h.jsx)(c.xv,{color:"#A1A1A1",fontSize:"10px",children:"Limited Use"})]}),a?(0,h.jsx)(c.kC,{children:(0,h.jsx)(c.xu,{className:o.Z["secret-wrapper"],height:"20px",width:"60%",overflow:"hidden",ref:f,mb:"12px"})}):(0,h.jsxs)(c.xv,{color:C,fontWeight:"700",fontSize:"15px",pb:"8px",children:["**** **** ****"," ",m.last4]}),(0,h.jsxs)(c.Ug,{children:[(0,h.jsxs)(c.xu,{alignItems:"flex-start",mr:"40px",children:[(0,h.jsx)(c.xv,{color:"#A1A1A1",fontSize:"10px",children:p("cards_list.expDate")}),(0,h.jsxs)(c.xv,{color:C,fontSize:"13px",children:[m.expiryMonth,"/",m.expiryYear]})]}),(0,h.jsxs)(c.xu,{alignItems:"flex-start",children:[(0,h.jsx)(c.xv,{color:"#A1A1A1",fontSize:"10px",children:p("cards_list.cvv")}),a?(0,h.jsx)(c.xu,{className:o.Z["secret-wrapper"],height:"20px",width:"50px",ref:_}):(0,h.jsx)(c.xv,{color:C,fontSize:"13px",children:"***"})]})]}),(0,h.jsxs)(c.xu,{mt:"auto",children:[(0,h.jsx)(c.xv,{color:C,fontWeight:"700",fontSize:"9px",children:""!==m.embossingPerson?m.embossingPerson:m.cardholder.name}),(0,h.jsx)(c.xv,{color:C,fontWeight:"700",fontSize:"9px",children:""!==m.embossingBusiness?m.embossingBusiness:null===b||void 0===b?void 0:b.legalName})]})]})]})}));e.Z=v},2559:function(t,e,a){var n=a(9439),c=a(2791),s=a(2020),r=a(8735),i=a(2504),o=a(5798),l=a(5048),d=a(4771),u=a(7689),x=a(4144),h=a(8709),v=a(5304),m=a(7208),p=a(80),g=a(8819),f=a(3746),_=a(1778),j=a(729),b=a(6559),w=a(1605),C=a(4661),N=a(3692),y=a(184),k=c.lazy((function(){return a.e(2723).then(a.bind(a,2723))})),L=c.lazy((function(){return Promise.all([a.e(4398),a.e(3046)]).then(a.bind(a,9998))})),A=c.lazy((function(){return a.e(1708).then(a.bind(a,9944))})),Z=c.forwardRef((function(t,e){var a=t.showSearch,Z=t.showAddCard,z=t.cardsPerView,S=t.pagination,D=t.showExtendedDetails,I=t.showCompactView,M=(0,s.$)().t,H=(0,v.Qo)(),T=(0,c.useRef)(1),V=(0,C.y)().open,R=(0,u.s0)(),E=(0,c.useRef)(!1),U=(0,c.useRef)(""),G=(0,c.useState)(""),B=(0,n.Z)(G,2),P=B[0],W=B[1],$=(0,v.CG)((function(t){return t.core.config.mode})),O=(0,v.CG)((function(t){return t.card}),l.wU),Q=O.cards,q=O.cardLoading,F=(0,v.CG)((function(t){return t.account.selectedAccount}),l.wU),X=(0,v.CG)((function(t){return t.user.personDetails}),l.wU),Y=(0,v.CG)((function(t){return t.core.config}),l.wU).isDarkMode,J=(0,_.Vd)("cards").showDOSHRewards,K=(0,v.CG)((function(t){return t.core.programConfig}),l.wU),tt=(0,c.useMemo)((function(){return"0001"===(null===K||void 0===K?void 0:K.code)?Z&&I&&Q.data.length>0:Z&&I}),[Z,Q,K,I]),et=(0,c.useCallback)((function(){F&&H((0,m.on)(F.id,z,(T.current-1)*z,0===P.length?void 0:P)).catch(p.WH)}),[F,z,T,P]),at=(0,c.useCallback)((function(){X&&H((0,m.$e)(X.id)).then((function(t){if(t){var e=btoa,a={jwt:t.accessToken};"live"!==$&&(a.debugLoggingEnabled=!0);var n="https://poweredby.dosh.com/partners/solidFi/setup/";n+=e(JSON.stringify(a)),window.open(n,"_blank")}})).catch(p.WH)}),[m.$e,X]),nt=(0,c.useCallback)((function(){H((0,f.Py)(null)),V(k)}),[]);(0,c.useEffect)((function(){return(0,p.pt)(null===K||void 0===K?void 0:K.brand.cardArtPhysical),(0,p.pt)(null===K||void 0===K?void 0:K.brand.cardArtVirtual),et(),N.T.subscribe(N.z.CARD_REFRESH,(function(){console.log("refresh called"),T.current=1,et()}))}),[F]),(0,j.bX)((function(){E.current&&(T.current=1,U.current=P,et())}),1e3,[P,E]),(0,c.useImperativeHandle)(e,(function(){return{cardListRefresh:function(){T.current=1,et()}}}));var ct=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,y.jsx)(r.xu,{className:"".concat(h.Z.cardList__add_container," default-bg ").concat(t?h.Z.cardList__add_container_horizontal:""),onClick:nt,children:(0,y.jsxs)(r.M5,{className:h.Z.cardList__add,children:[(0,y.jsx)(x.Z,{icon:"icon-add",className:"icon-customizable",size:40}),(0,y.jsx)(r.xv,{variant:"regular",pt:"10px",children:M("cards_list.addACard")})]})})},st=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,y.jsxs)(r.xu,{className:"".concat(h.Z.autoCardHeight," ").concat(0===Q.data.length?h.Z.dBlock:""," "),children:[0===Q.data.length&&0===U.current.length&&!E.current&&Z&&"0001"===(null===K||void 0===K?void 0:K.code)&&J?(0,y.jsxs)(r.xu,{className:"".concat(Y?h.Z.rewards_get_card_dark:""," ").concat(h.Z.rewards_get_card," ").concat(h.Z.is_large),children:[(0,y.jsxs)(r.xv,{className:h.Z.rewards_text,children:[M("cards_list.earnRewardsBy"),(0,y.jsx)(r.xv,{px:"4px",as:"span",color:"var(--blue-1)",children:M("cards_list.virtualCard")}),M("cards_list.today")]}),(0,y.jsxs)(i.zx,{className:h.Z.rewards_get_card_btn,onClick:function(){nt()},children:[(0,y.jsx)(r.xv,{pr:"12px",children:M("cards_list.rewardsbtn")}),(0,y.jsx)(x.Z,{icon:"icon-Arrow-big-right",size:12,className:"color-white"})]})]}):0!==Q.data.length&&0===U.current.length&&"0001"===(null===K||void 0===K?void 0:K.code)&&J?(0,y.jsx)(r.xu,{className:"".concat(Y?h.Z.see_rewards_dark:""," ").concat(h.Z.see_rewards),onClick:function(){return at()},children:(0,y.jsxs)(r.xv,{className:h.Z.rewards_text,children:[M("cards_list.seeRewardsClickTo"),(0,y.jsx)(r.xv,{px:"4px",as:"span",color:"var(--blue-1)",children:M("cards_list.seeRewardsRewards")})]})}):0!==Q.data.length||tt?null:(0,y.jsx)(r.M5,{py:2,children:(0,y.jsx)(r.xv,{variant:"regular",className:"text-light",textAlign:"center",children:M("cards_list.noData")})}),Q.data.map((function(t){return(0,y.jsxs)(r.xu,{className:"".concat(h.Z.cardList__card_container," ").concat(D?"has-border":""," ").concat("inactive"===t.cardStatus?h.Z["cardList__card_container--freezed"]:""),onClick:function(){H((0,f.Vf)(t)),setTimeout((function(){V("pendingActivation"!==t.cardStatus?A:L,{id:t.id})}),0)},children:[(0,y.jsx)(g.Z,{data:t}),D?(0,y.jsx)(r.xu,{pt:3,children:(0,y.jsxs)(r.Ug,{className:h.Z.cardList__label_limit,children:[(0,y.jsxs)(r.xu,{w:"48%",children:[(0,y.jsx)(r.xv,{variant:"small",textAlign:"left",children:M("cards_list.label")}),(0,y.jsx)(r.xv,{variant:"regular",textAlign:"left",children:t.label})]}),(0,y.jsxs)(r.xu,{w:"52%",className:h.Z.cardList__spending_limit,children:[(0,y.jsx)(r.xv,{variant:"small",textAlign:"left",children:M("cards_list.spendingLimit")}),(0,y.jsxs)(r.xv,{variant:"regular",textAlign:"left",children:["$"," ",t.limitAmount]})]})]})}):null]},"card-".concat(t.id))})),tt?ct(t):null]})},rt=(0,c.useCallback)((function(){R("/cards")}),[]);return(0,y.jsx)(r.M5,{className:"page",height:"100%",children:q&&1===T.current&&!E.current?(0,y.jsx)(b.Z,{name:I?"CardGrid":"CardList",showHeader:!I}):(0,y.jsxs)(r.xu,{width:"100%",flexDirection:"column",height:"100%",display:"flex",children:[(0,y.jsxs)(r.xu,{p:I?"":"15px",children:[(0,y.jsxs)(r.Ug,{width:"100%",justifyContent:"space-between",mb:"24px",children:[(0,y.jsx)(r.xv,{variant:"large",children:M("cards_list.title")}),I?(0,y.jsxs)(r.xv,{variant:"regular",className:"text-light",fontSize:"16px",cursor:"pointer",onClick:rt,children:[M("cards_list.viewAll"),(0,y.jsx)(x.Z,{style:{marginLeft:"10px"},icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}):null]}),(0,y.jsxs)(r.Ug,{mt:"16px",children:[a&&!I?(0,y.jsxs)(r.xu,{className:h.Z.cardList__search,children:[(0,y.jsx)(x.Z,{icon:"icon-search",className:h.Z.cardList__search__icon,size:18}),(0,y.jsx)(o.II,{placeholder:M("cards_list.searchCards"),variant:"primary",className:h.Z.cardList__search__input,onChange:function(t){E.current=!0,W(t.target.value)},value:P})]}):null,Z&&a&&!I?(0,y.jsxs)(r.M5,{className:"".concat(h.Z.contactAddContainer," button-icon-bg"),onClick:nt,children:[(0,y.jsx)(x.Z,{className:"dark-color",icon:"icon-plus",size:16}),(0,y.jsx)(r.xv,{className:"".concat(h.Z.contactAddTxt," dark-color"),children:M("select_contact.add")})]}):null]})]}),q&&E.current?(0,y.jsx)(b.Z,{name:"CardList",showHeader:!1}):I?(0,y.jsx)("div",{className:h.Z.scrollableDivHorizontal,id:"scrollableDiv",children:st(!0)}):(0,y.jsx)("div",{className:h.Z.scrollableDiv,id:"scrollableDiv",children:(0,y.jsx)(d.Z,{dataLength:Q.data.length,next:function(){T.current+=1,et()},hasMore:S&&Q.data.length<Q.total&&0!==Q.total,loader:(0,y.jsx)(r.M5,{my:3,children:(0,y.jsx)(w.Z,{showModal:!1,show:!0})}),endMessage:q?null:(0,y.jsx)(r.M5,{py:2,children:(0,y.jsx)(r.xv,{variant:"regular",className:"text-light",textAlign:"center",children:M(0===Q.total?Z?"":"cards_list.noData":"cards_list.noMoreCards")})}),scrollableTarget:"scrollableDiv",children:st()})})]})})}));e.Z=Z},680:function(t,e,a){a.d(e,{Z:function(){return C}});var n=a(9439),c=a(2791),s=a(2020),r=a(8735),i=a(5798),o=a(5048),l=a(4771),d=a(7689),u=a(4144),x={contactBox:"ContactList_contactBox__h6l0B",contactSearch:"ContactList_contactSearch__u1UNW",contactSearchIcon:"ContactList_contactSearchIcon__CdleE",navTitle:"ContactList_navTitle__dPu7y",headingContainer:"ContactList_headingContainer__rJFQk",backIcon:"ContactList_backIcon__m7ykd",contactSearchInput:"ContactList_contactSearchInput__+TtUP",contactAddContainer:"ContactList_contactAddContainer__eRbYY",contactAddTxt:"ContactList_contactAddTxt__IMpEV",contactList:"ContactList_contactList__P3UPv",contactListHorizontal:"ContactList_contactListHorizontal__mrsDK",contactListItem:"ContactList_contactListItem__WtxQ8",contactListItemHorizontal:"ContactList_contactListItemHorizontal__hiuIx",contactListInitials:"ContactList_contactListInitials__jRDw8",contactListInitialsHorizontal:"ContactList_contactListInitialsHorizontal__8AGmi",contactListName:"ContactList_contactListName__XjWRI",contactListNameHorizontal:"ContactList_contactListNameHorizontal__1Owi0",scrollableDiv:"ContactList_scrollableDiv__ul6eb",scrollableDivHorizontal:"ContactList_scrollableDivHorizontal__QkoM1",bodyStyles:"ContactList_bodyStyles__SSQG5",p15:"ContactList_p15__sGN-Z",contactNavContainer:"ContactList_contactNavContainer__ErsL9"},h=a(5304),v=a(7770),m=a(2364),p=a(729),g=a(9578),f=a(6559),_=a(2942),j=a(1605),b=a(184),w=function(t){var e=t.c,a=t.showMiniDetails,s=t.onClick,i=(0,c.useMemo)((function(){var t=e.name.split(" "),a=(0,n.Z)(t,2),c=a[0],s=a[1],r=c.charAt(0);return r+=s?s.charAt(0):c.charAt(1)||""}),[e.name]);return a?(0,b.jsxs)(r.HC,{className:x.contactListItemHorizontal,onClick:s,"data-class":"contact-list-item",children:[(0,b.jsx)(r.M5,{className:"".concat(x.contactListInitials," ").concat(x.contactListInitialsHorizontal),children:(0,b.jsx)(r.xv,{variant:"regular",children:i})}),(0,b.jsx)(r.xv,{width:"100%",noOfLines:2,variant:"regular",className:"".concat(x.contactListName," ").concat(x.contactListNameHorizontal," text-dark"),children:e.name})]}):(0,b.jsxs)(r.HC,{className:x.contactListItem,onClick:s,"data-class":"contact-list-item",children:[(0,b.jsx)(r.M5,{className:x.contactListInitials,children:(0,b.jsx)(r.xv,{variant:"regular",children:i})}),(0,b.jsx)(r.xv,{variant:"regular",className:"".concat(x.contactListName," text-dark"),children:e.name}),(0,b.jsx)(u.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})},C=function(t){var e=t.showBack,a=t.showSearch,C=t.showAdd,N=t.showCompactView,y=t.pagination,k=t.contactsPerView,L=t.showEmptyState,A=(0,s.$)().t,Z=(0,c.useRef)(1),z=(0,c.useRef)(!1),S=(0,d.s0)(),D=(0,c.useState)(""),I=(0,n.Z)(D,2),M=I[0],H=I[1],T=(0,h.CG)((function(t){return t.account.selectedAccount}),o.wU),V=(0,h.CG)((function(t){return t.contact}),o.wU),R=V.contacts,E=V.loadingState,U=(0,h.Qo)(),G=(0,c.useCallback)((function(){setTimeout((function(){S("/contacts/create")}),0)}),[]),B=(0,c.useCallback)((function(){}),[]),P=(0,c.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(T){var e=(Z.current-1)*k;U((0,v.mk)(T.id,k,e,t))}}),[T,Z,k]);(0,p.bX)((function(){z.current&&(Z.current=1,P(M))}),1e3,[M,z]),(0,c.useEffect)((function(){P()}),[T]);var W=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return 0===R.total?(0,b.jsx)(r.M5,{py:2,children:(0,b.jsx)(r.xv,{variant:"regular",textAlign:"center",className:"text-light",children:A(0===R.total?"select_contact.noData":1===Z.current?"":"select_contact.noMoreContacts")})}):(0,b.jsx)(r.aV,{"data-class":"contact-list",border:t?"none":"1px solid var(--border-color-1)",className:t?x.contactListHorizontal:x.contactList,children:R.data.map((function(t){return(0,b.jsx)(w,{showMiniDetails:N,onClick:function(){U((0,m.m4)(t)),setTimeout((function(){S("/contacts/details/".concat(t.id))}),0)},c:t},"contact-item-".concat(t.id))}))})};return(0,b.jsx)(r.xu,{className:"page",children:(0,b.jsx)(r.xu,{children:E&&!z.current&&1===Z.current?(0,b.jsx)(r.xu,{p:"15px",w:"100%",children:(0,b.jsx)(f.Z,{name:N?"ContactGrid":"ContactListDashboard",showHeader:!N})}):0!==R.total||!1!==L?(0,b.jsxs)(r.xu,{width:"100%",flexDirection:"column",display:"flex",children:[(0,b.jsxs)(r.Eq,{flex:"0 0 auto",children:[(0,b.jsx)(r.Uc,{width:"100%",children:(0,b.jsxs)(r.kC,{align:"center",gap:e?"":"25px",width:"100%",className:e?"".concat(x.contactNavContainer," navContainer"):"",children:[e?(0,b.jsx)(u.Z,{role:"button","aria-hidden":!0,icon:"Arrow-big-left",className:"".concat(x.backIcon," cancel icon-customizable"),size:16,"data-testid":"back-arrow",onClick:function(){(0,g.bG)(_.CW.BACK_PRESSED,{from:"contactList"})}}):null,(0,b.jsx)(r.xu,{className:e?x.headingContainer:"",children:x.navTitle&&!N?(0,b.jsx)(r.X6,{variant:"navTitle",className:x.heading,children:A("select_contact.selectContacts")}):(0,b.jsx)(r.xv,{variant:"large",children:A("select_contact.title")})}),N?(0,b.jsxs)(r.xv,{variant:"regular",className:"text-light",fontSize:"16px",cursor:"pointer",ml:"auto",onClick:B,children:[A("select_contact.viewAll"),(0,b.jsx)(u.Z,{style:{marginLeft:"8px"},icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}):C&&!a?(0,b.jsxs)(r.M5,{className:"".concat(x.contactAddContainer," button-icon-bg"),onClick:G,children:[(0,b.jsx)(u.Z,{className:"dark-color",icon:"icon-plus",size:16}),(0,b.jsx)(r.xv,{className:"".concat(x.contactAddTxt," dark-color"),children:A("select_contact.add")})]}):null]})}),(0,b.jsx)(r.Uc,{width:"100%",pb:"4",children:(0,b.jsxs)(r.Ug,{width:"100%",pt:N?0:"7px",className:e?x.p15:"",children:[a&&!N?(0,b.jsxs)(r.xu,{className:x.contactSearch,children:[(0,b.jsx)(u.Z,{icon:"icon-search",className:x.contactSearchIcon,size:15}),(0,b.jsx)(i.II,{onChange:function(t){z.current=!0,H(t.target.value)},value:M,placeholder:A("select_contact.searchContact"),variant:"primary",className:x.contactSearchInput})]}):null,C&&a&&!N?(0,b.jsxs)(r.M5,{className:"".concat(x.contactAddContainer," button-icon-bg"),onClick:G,children:[(0,b.jsx)(u.Z,{className:"dark-color",icon:"icon-plus",size:16}),(0,b.jsx)(r.xv,{className:"".concat(x.contactAddTxt," dark-color"),children:A("select_contact.add")})]}):null]})})]}),E&&z.current?(0,b.jsx)(f.Z,{name:"ContactListDashboard",showHeader:!1}):N||!y?(0,b.jsx)("div",{className:x.scrollableDivHorizontal,id:"scrollableDiv",children:W(N)}):(0,b.jsx)("div",{className:"".concat(x.scrollableDiv," ").concat(e?x.p15:""),id:"scrollableDiv",children:(0,b.jsx)(l.Z,{dataLength:R.data.length,next:function(){Z.current+=1,P()},hasMore:R.data.length<R.total&&0!==R.total,loader:(0,b.jsx)(r.M5,{my:3,children:(0,b.jsx)(j.Z,{showModal:!1,show:!0})}),endMessage:E?null:(0,b.jsx)(r.M5,{py:2,children:A(0===R.total&&1!==Z.current?"select_contact.noMoreContacts":"")}),scrollableTarget:"scrollableDiv",children:W()})})]}):null})})}},6903:function(t,e,a){a.r(e),a.d(e,{default:function(){return w}});var n=a(2791),c=a(5223),s=a(8735),r=a(5048),i=a(2020),o=a(7689),l=a(5304),d=a(80),u=a(4144),x=a(680),h=a(9336),v=a(2559),m="Dashboard_hideItInMobile__6wcqm",p="Dashboard_showItInMobile__BlcTM",g="Dashboard_accountLabel__BRzeD",f=a(1778),_=a(4661),j=a(184),b=n.lazy((function(){return a.e(5772).then(a.bind(a,5756))})),w=function(){var t=(0,i.$)().t,e=(0,_.y)().open,a=(0,o.s0)(),w=(0,l.CG)((function(t){return t.user.personDetails}),r.wU),C=(0,l.CG)((function(t){return t.account}),r.wU),N=C.selectedAccount,y=C.selectedAccountType,k=(0,l.CG)((function(t){return t.business.selectedBusiness}),r.wU),L=(0,f.Vd)("dashboard"),A=(0,c.VP)((null===N||void 0===N?void 0:N.accountNumber)||"",2e3),Z=A.hasCopied,z=A.onCopy,S=(0,n.useRef)(null),D=(0,n.useMemo)((function(){return k?k.legalName:"".concat(null===w||void 0===w?void 0:w.firstName," ").concat(null===w||void 0===w?void 0:w.lastName)}),[w,k]),I=(0,n.useCallback)((function(){e(b)}),[]),M=(0,n.useCallback)((function(){}),[]),H=(0,n.useCallback)((function(){a("/dashboard/transfer-money")}),[]),T=(0,n.useCallback)((function(){}),[]);return(0,j.jsxs)("div",{className:"page",id:"dashboard-page",children:[L.showBusinessProfile?(0,j.jsx)(s.xu,{mb:"24px",children:(0,j.jsxs)(s.kC,{children:[(0,j.jsx)(s.xv,{"data-testid":"heading",variant:"large",mr:"auto",children:D}),k?(0,j.jsx)(s.xv,{variant:"small",cursor:"pointer",className:"text-light",onClick:M,children:"View Details"}):null]})}):null,(0,j.jsx)(s.xu,{mb:"24px",children:(0,j.jsxs)(s.kC,{gap:"24px",flexWrap:{base:"wrap",md:"nowrap"},children:[L.showAccountDetails?(0,j.jsxs)(s.xu,{width:{base:"100%",md:"cardAccount"!==(null===N||void 0===N?void 0:N.type)?"50%":"100%"},borderRadius:"4px",backgroundColor:"var(--dashboard-card-background-color)",color:"var(--dashboard-card-text-color)",padding:"24px",children:[(0,j.jsxs)(s.kC,{mb:"12px",justifyContent:"space-between",children:[(0,j.jsx)(s.xv,{className:g,lineHeight:"24px",fontSize:"20px",children:null===N||void 0===N?void 0:N.label}),(0,j.jsx)(s.xv,{cursor:"pointer",fontSize:"14px",textDecoration:"underline",onClick:I,className:m,children:"View Details"}),(0,j.jsx)(s.xv,{display:"none",fontWeight:"bold",textAlign:"left",mb:"8px",fontSize:"14px",className:p,children:N?(0,d.OH)(N.availableBalance,N.currency):null})]}),(0,j.jsx)(s.xv,{fontWeight:"bold",textAlign:"left",mb:"34px",fontSize:"30px",className:m,children:N?(0,d.OH)(N.availableBalance,N.currency):null}),(0,j.jsxs)(s.kC,{justify:"space-between",children:[(0,j.jsxs)(s.kC,{gap:"21px",alignItems:"center",children:[(0,j.jsxs)(s.xv,{color:"var(--dashboard-card-text-color)",variant:"regular",children:[t("dashboard.dashboard_accNo_title")," ",null===N||void 0===N?void 0:N.accountNumber]}),Z?(0,j.jsx)(u.Z,{icon:"tick",cursor:"pointer",size:12}):(0,j.jsx)(u.Z,{onClick:z,icon:"copy",cursor:"pointer",size:12})]}),(0,j.jsx)(s.xv,{display:"none",cursor:"pointer",fontSize:"14px",textDecoration:"underline",color:"var(--dashboard-card-text-color)",onClick:I,className:p,children:"View Details"})]})]}):null,"cardAccount"!==(null===N||void 0===N?void 0:N.type)?(0,j.jsxs)(s.gC,{width:{base:"100%",md:"50%"},children:[L.showTransferMoney?(0,j.jsx)(s.xu,{cursor:"pointer",width:"100%",padding:"16px 24px 16px 16px",backgroundColor:"var(--list-item-background)",onClick:H,children:(0,j.jsxs)(s.Ug,{justifyContent:"space-between",children:[(0,j.jsxs)("div",{className:"details",children:[(0,j.jsx)(s.xv,{fontSize:"20px",lineHeight:"24px",paddingBottom:"12px",variant:"regular",textAlign:"left",children:t("dashboard.dashboard_row_fund_title")}),(0,j.jsx)(s.xv,{variant:"small",textAlign:"left",children:t("dashboard.dashboard_row_fund_desc",{value:null===N||void 0===N?void 0:N.label})})]}),(0,j.jsx)(u.Z,{style:{marginLeft:"8px"},icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})}):null,L.showSendMoney?(0,j.jsx)(s.xu,{cursor:"pointer",width:"100%",padding:"16px 24px 16px 16px",backgroundColor:"var(--list-item-background)",onClick:T,children:(0,j.jsxs)(s.Ug,{justifyContent:"space-between",children:[(0,j.jsxs)("div",{className:"details",children:[(0,j.jsx)(s.xv,{fontSize:"20px",lineHeight:"24px",paddingBottom:"12px",variant:"regular",textAlign:"left",children:t("dashboard.dashboard_row_pay_title")}),(0,j.jsx)(s.xv,{variant:"small",textAlign:"left",children:t("dashboard.dashboard_row_pay_desc",{value:null===N||void 0===N?void 0:N.label})})]}),(0,j.jsx)(u.Z,{style:{marginLeft:"8px"},icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})}):null]}):null]})}),L.showContacts?(0,j.jsx)(s.xu,{children:(0,j.jsx)(x.Z,{showSearch:!1,showAdd:!1,showEmptyState:!1,showCompactView:!0,pagination:!1,contactsPerView:10,showBack:!1})}):null,L.showTransactions?(0,j.jsx)(s.xu,{mt:"24px",mb:"24px",children:(0,j.jsx)(h.Z,{accountType:y,filterRequest:void 0,showFilter:!1,showExport:!1,showMonth:!1,showSearch:!1,showCompactView:!0,scrollBoxHeight:void 0,transactionsPerView:20,dateFormat:"MMM d, yyyy 'at' h:mm aa"})}):null,L.showCards?(0,j.jsx)(s.xu,{children:(0,j.jsx)(v.Z,{ref:S,showSearch:!1,showAddCard:!0,cardsPerView:20,pagination:!1,showExtendedDetails:!1,showCompactView:!0})}):null]})}}}]);
//# sourceMappingURL=8027.b39430f4.chunk.js.map