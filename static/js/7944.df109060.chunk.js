"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[7944],{1023:function(n,e,t){var i=t(2791),r=t(5798),a=t(4398),c=t.n(a),l=t(184);e.Z=function(n){var e=n.onChange,t=n.value,a=n.placeholder,o=n.prefix,u=n.digits,s=(0,i.useRef)(null);return(0,i.useLayoutEffect)((function(){s.current&&c()("currency",{autoUnmask:!0,allowMinus:!1,prefix:null!==o&&void 0!==o?o:"$ ",placeholder:a,rightAlign:!1,digits:u,numericInput:!0}).mask(s.current)}),[o,u,a]),(0,l.jsx)(r.II,{"data-testid":"currency-input",variant:"primary",placeholder:a||"$ 0.00",ref:s,onChange:function(n){var t=n.target.value;e(t)},value:t})}},5694:function(n,e,t){t.d(e,{V:function(){return r}});var i=t(2560),r=function(n){return{type:i.Q,payload:n}}},4785:function(n,e,t){t.d(e,{DN:function(){return u},ee:function(){return c},nc:function(){return s},rc:function(){return l},zt:function(){return o}});var i=t(286),r=t(80),a=t(5694),c=function(n){return function(e){return new Promise((function(t,c){(0,r.V_)(!0),i.Z.post("v1/send/intrabank",n).then((function(n){var i=n.data;e((0,a.V)(i)),t(i)})).catch(c).finally((function(){(0,r.V_)(!1)}))}))}},l=function(n){return function(e){return new Promise((function(t,c){(0,r.V_)(!0),i.Z.post("v1/send/ach",n).then((function(n){var i=n.data;e((0,a.V)(i)),t(i)})).catch(c).finally((function(){(0,r.V_)(!1)}))}))}},o=function(n){return function(e){return new Promise((function(t,c){(0,r.V_)(!0),i.Z.post("v1/send/wire",n).then((function(n){var i=n.data;e((0,a.V)(i)),t(i)})).catch(c).finally((function(){(0,r.V_)(!1)}))}))}},u=function(n){return function(e){return new Promise((function(t,c){(0,r.V_)(!0),i.Z.post("v1/send/card",n).then((function(n){var i=n.data;e((0,a.V)(i)),t(i)})).catch(c).finally((function(){(0,r.V_)(!1)}))}))}},s=function(n){return function(e){return new Promise((function(t,c){(0,r.V_)(!0),i.Z.post("v1/send/check",n).then((function(n){var i=n.data;e((0,a.V)(i)),t(i)})).catch(c).finally((function(){(0,r.V_)(!1)}))}))}}},3436:function(n,e,t){t.r(e);var i=t(1413),r=t(9439),a=t(2791),c=t(2020),l=t(2504),o=t(8735),u=t(3393),s=t(5798),d=t(7640),f=t(5048),p=t(5649),m=t(5304),h=t(3741),v=t(80),g=t(7770),y=t(4785),_=t(1023),I=t(4661),b=t(184),x=a.lazy((function(){return Promise.all([t.e(7625),t.e(5917)]).then(t.bind(t,5917))}));e.default=function(){var n=(0,c.$)().t,e=(0,I.y)().open,t=(0,m.Qo)(),E=(0,a.useState)({amount:"",description:"",destination:""}),N=(0,r.Z)(E,2),j=N[0],k=N[1],w=(0,m.CG)((function(n){return n.account}),f.wU),S=w.accounts,C=w.selectedAccount,V=(0,a.useMemo)((function(){return S.filter((function(n){return n.id!==(null===C||void 0===C?void 0:C.id)&&"cardAccount"!==n.type}))}),[S,C]),z=(0,a.useMemo)((function(){return S.find((function(n){return n.accountNumber===(null===j||void 0===j?void 0:j.destination)}))}),[S,j]),Z=(0,a.useMemo)((function(){return 0!==j.amount.length&&0!==j.description.length&&0!==j.destination.length}),[j]),G=(0,a.useCallback)((function(n){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];C&&t((0,y.ee)({amount:j.amount,description:j.description,accountId:C.id,contactId:n})).then((function(){e(x)})).catch((function(e){i&&t((0,h.GK)(n)),(0,v.WH)(e)}))}),[j]),O=(0,a.useCallback)((function(){C&&Z&&((0,v.V_)(!0),t((0,g.mk)(C.id,1,0,void 0,"selfIntrabank",{intrabankAccountNumber:j.destination})).then((function(n){var e=n.data;0!==e.length&&e[0].id?e[0].name!==(null===z||void 0===z?void 0:z.label)?t((0,g.Tk)(e[0].id,{accountId:C.id,name:(null===z||void 0===z?void 0:z.label)||""})).then((function(n){n.id&&G(n.id,!0)})).catch(v.WH):G(e[0].id):t((0,g.rE)({accountId:C.id,name:(null===z||void 0===z?void 0:z.label)||"",intrabank:{accountNumber:j.destination}})).then((function(n){n.id&&G(n.id,!0)})).catch(v.WH)})).catch(v.WH).finally((function(){(0,v.V_)(!1)})))}),[C,j,Z,z]);return(0,a.useEffect)((function(){t((0,h.Sg)()).catch(v.WH)}),[]),(0,b.jsx)("div",{className:"page",children:(0,b.jsx)(p.Z,{heading:n("move_funds.title"),footer:(0,b.jsx)(l.zx,{disabled:!Z,width:"100%",variant:"primary",onClick:O,children:n("move_funds.ctaText")}),children:(0,b.jsxs)(o.xu,{width:"100%",paddingTop:"15px",children:[(0,b.jsxs)(u.NI,{variant:"primary",children:[(0,b.jsx)(u.lX,{variant:"primary",children:n("move_funds.source")}),(0,b.jsx)(s.II,{disabled:!0,readOnly:!0,variant:"primary",defaultValue:null===C||void 0===C?void 0:C.label})]}),(0,b.jsxs)(u.NI,{variant:"primary",children:[(0,b.jsx)(u.lX,{variant:"primary",children:n("move_funds.destination")}),(0,b.jsx)(d.Ph,{variant:"primary",value:j.destination,onChange:function(n){return k((0,i.Z)((0,i.Z)({},j),{},{destination:n.target.value}))},placeholder:"Select destination",children:V.map((function(n){return(0,b.jsx)("option",{value:n.accountNumber,children:n.label},"account-".concat(n.id))}))})]}),(0,b.jsxs)(u.NI,{variant:"primary",children:[(0,b.jsx)(u.lX,{variant:"primary",children:n("move_funds.amount")}),(0,b.jsx)(_.Z,{value:j.amount,onChange:function(n){k((0,i.Z)((0,i.Z)({},j),{},{amount:n||""}))}})]}),(0,b.jsxs)(u.NI,{variant:"primary",children:[(0,b.jsx)(u.lX,{variant:"primary",children:n("move_funds.description")}),(0,b.jsx)(s.II,{variant:"primary",value:j.description,onChange:function(n){return k((0,i.Z)((0,i.Z)({},j),{},{description:n.target.value}))}})]})]})})})}},5798:function(n,e,t){t.d(e,{BZ:function(){return v},II:function(){return d},xH:function(){return C}});var i=t(3393),r=t(1938),a=t(6831),c=t(2791),l=t(9611);function o(){return o=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},o.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}var s=["htmlSize"],d=(0,r.Gp)((function(n,e){var t=n.htmlSize,l=u(n,s),d=(0,r.jC)("Input",l),f=(0,r.Lr)(l),p=(0,i.Yp)(f),m=(0,a.cx)("chakra-input",n.className);return c.createElement(r.m$.input,o({size:t},p,{__css:d.field,ref:e,className:m}))}));a.Ts&&(d.displayName="Input"),d.id="Input";var f=["children","className"],p=(0,r.eC)("InputGroup"),m=p[0],h=p[1],v=(0,r.Gp)((function(n,e){var t=(0,r.jC)("Input",n),i=(0,r.Lr)(n),s=i.children,d=i.className,p=u(i,f),h=(0,a.cx)("chakra-input__group",d),v={},g=(0,l.WR)(s),y=t.field;g.forEach((function(n){if(t){var e,i;if(y&&"InputLeftElement"===n.type.id)v.paddingStart=null!=(e=y.height)?e:y.h;if(y&&"InputRightElement"===n.type.id)v.paddingEnd=null!=(i=y.height)?i:y.h;"InputRightAddon"===n.type.id&&(v.borderEndRadius=0),"InputLeftAddon"===n.type.id&&(v.borderStartRadius=0)}}));var _=g.map((function(e){var t,i,r=(0,a.YU)({size:(null==(t=e.props)?void 0:t.size)||n.size,variant:(null==(i=e.props)?void 0:i.variant)||n.variant});return"Input"!==e.type.id?c.cloneElement(e,r):c.cloneElement(e,Object.assign(r,v,e.props))}));return c.createElement(r.m$.div,o({className:h,ref:e,__css:{width:"100%",display:"flex",position:"relative"}},p),c.createElement(m,{value:t},_))}));a.Ts&&(v.displayName="InputGroup");var g=["placement"],y={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},_=(0,r.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),I=(0,r.Gp)((function(n,e){var t,i=n.placement,r=void 0===i?"left":i,a=u(n,g),l=null!=(t=y[r])?t:{},s=h();return c.createElement(_,o({ref:e},a,{__css:o({},s.addon,l)}))}));a.Ts&&(I.displayName="InputAddon");var b=(0,r.Gp)((function(n,e){return c.createElement(I,o({ref:e,placement:"left"},n,{className:(0,a.cx)("chakra-input__left-addon",n.className)}))}));a.Ts&&(b.displayName="InputLeftAddon"),b.id="InputLeftAddon";var x=(0,r.Gp)((function(n,e){return c.createElement(I,o({ref:e,placement:"right"},n,{className:(0,a.cx)("chakra-input__right-addon",n.className)}))}));a.Ts&&(x.displayName="InputRightAddon"),x.id="InputRightAddon";var E=["placement"],N=["className"],j=["className"],k=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),w=(0,r.Gp)((function(n,e){var t,i,r,a=n.placement,l=void 0===a?"left":a,s=u(n,E),d=h(),f=d.field,p=o(((r={})["left"===l?"insetStart":"insetEnd"]="0",r.width=null!=(t=null==f?void 0:f.height)?t:null==f?void 0:f.h,r.height=null!=(i=null==f?void 0:f.height)?i:null==f?void 0:f.h,r.fontSize=null==f?void 0:f.fontSize,r),d.element);return c.createElement(k,o({ref:e,__css:p},s))}));w.id="InputElement",a.Ts&&(w.displayName="InputElement");var S=(0,r.Gp)((function(n,e){var t=n.className,i=u(n,N),r=(0,a.cx)("chakra-input__left-element",t);return c.createElement(w,o({ref:e,placement:"left",className:r},i))}));S.id="InputLeftElement",a.Ts&&(S.displayName="InputLeftElement");var C=(0,r.Gp)((function(n,e){var t=n.className,i=u(n,j),r=(0,a.cx)("chakra-input__right-element",t);return c.createElement(w,o({ref:e,placement:"right",className:r},i))}));C.id="InputRightElement",a.Ts&&(C.displayName="InputRightElement")},7640:function(n,e,t){t.d(e,{Ph:function(){return v}});var i=t(3393),r=t(1938),a=t(7160),c=t(6831),l=t(6198),o=t.n(l),u=t(2791);function s(){return s=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},s.apply(this,arguments)}function d(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}var f=["children","placeholder","className"],p=["rootProps","placeholder","icon","color","height","h","minH","minHeight","iconColor","iconSize"],m=["children"],h=(0,r.Gp)((function(n,e){var t=n.children,i=n.placeholder,a=n.className,l=d(n,f);return u.createElement(r.m$.select,s({},l,{ref:e,className:(0,c.cx)("chakra-select",a)}),i&&u.createElement("option",{value:""},i),t)}));c.Ts&&(h.displayName="SelectField");var v=(0,r.Gp)((function(n,e){var t=(0,r.jC)("Select",n),l=(0,r.Lr)(n),f=l.rootProps,m=l.placeholder,v=l.icon,g=l.color,y=l.height,I=l.h,b=l.minH,x=l.minHeight,E=l.iconColor,N=l.iconSize,j=d(l,p),k=(0,c.Vl)(j,a.oE),w=k[0],S=k[1],C=(0,i.Yp)(S),V={width:"100%",height:"fit-content",position:"relative",color:g},z=o()({paddingEnd:"2rem"},t.field,{_focus:{zIndex:"unset"}});return u.createElement(r.m$.div,s({className:"chakra-select__wrapper",__css:V},w,f),u.createElement(h,s({ref:e,height:null!=I?I:y,minH:null!=b?b:x,placeholder:m},C,{__css:z}),n.children),u.createElement(_,s({"data-disabled":(0,c.PB)(C.disabled)},(E||g)&&{color:E||g},{__css:t.icon},N&&{fontSize:N}),v))}));c.Ts&&(v.displayName="Select");var g=function(n){return u.createElement("svg",s({viewBox:"0 0 24 24"},n),u.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))},y=(0,r.m$)("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),_=function(n){var e=n.children,t=void 0===e?u.createElement(g,null):e,i=d(n,m),r=u.cloneElement(t,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return u.createElement(y,s({},i,{className:"chakra-select__icon-wrapper"}),u.isValidElement(t)?r:null)};c.Ts&&(_.displayName="SelectIcon")}}]);
//# sourceMappingURL=7944.df109060.chunk.js.map