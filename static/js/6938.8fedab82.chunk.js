"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[6938],{9584:function(e,n,t){t.d(n,{Z:function(){return C}});var r=t(2791),a=t(8735),s=t(3046),i=t(6450),c=t(9743),l=t(5048),o=t(7689),d=t(1087),u=t(5304),h="Dashboard_container__jNUOE",m="Dashboard_sidebar__Ttvs2",p="Dashboard_content__SmvY5",x="Dashboard_contentBody__pcxh5",f="Dashboard_nav__sl2B2",g="Dashboard_sidebarMenuItemLink__ADsKo",b="Dashboard_active__qN5k6",j="Dashboard_initialsInfoLight__hD1EA",v=t(4144),_=t(1618),y=t(184),C=function(e){var n=e.children,t=(0,o.s0)(),C=(0,u.CG)((function(e){return e.user.personDetails}),l.wU),N=(0,u.CG)((function(e){var n;return null===(n=e.core.programConfig)||void 0===n?void 0:n.brand.landscapeLogo}),l.wU),k=(0,u.CG)((function(e){return e.core.config.mode})),O=(0,r.useCallback)((function(e){return e.isActive?"".concat(g," ").concat(b):g}),[]);return(0,y.jsxs)("div",{className:h,children:[(0,y.jsxs)("aside",{className:m,children:[(0,y.jsxs)(a.xu,{width:"100%",children:[N?(0,y.jsx)(a.kC,{padding:"0 24px",justifyContent:"flex-start",height:"68px",alignItems:"center",borderBottom:"1px solid #ececec",children:(0,y.jsx)(s.Ee,{maxWidth:"254px",src:N})}):null,(0,y.jsxs)(a.kC,{padding:"0 24px",justifyContent:"space-between",height:"68px",alignItems:"center",borderBottom:"1px solid #ececec",role:"button",onClick:function(){t("/ao/account/list")},children:[(0,y.jsx)(a.xv,{variant:"large",fontWeight:"medium",children:"Select account"}),(0,y.jsx)(v.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]}),(0,y.jsx)("nav",{children:(0,y.jsxs)(a.aV,{mt:"15px",children:[(0,y.jsx)(a.HC,{mt:0,children:(0,y.jsx)(d.OL,{className:O,to:"/dashboard",children:"Overview"})}),(0,y.jsx)(a.HC,{mt:0,children:(0,y.jsx)(d.OL,{className:O,to:"/transactions",children:"Transactions"})}),(0,y.jsx)(a.HC,{mt:0,children:(0,y.jsx)(d.OL,{className:O,to:"/cards",children:"Cards"})}),(0,y.jsx)(a.HC,{mt:0,children:(0,y.jsx)(d.OL,{className:O,to:"/dashboard/transfer-money",children:"Transfer Money"})}),(0,y.jsx)(a.HC,{mt:0,children:(0,y.jsx)(d.OL,{className:O,to:"/",children:"Send Money"})})]})})]}),C&&(0,y.jsx)(a.xu,{padding:"12px",borderTop:"1px solid #e8ebee",children:(0,y.jsxs)(a.kC,{justifyContent:"space-between",alignItems:"center",children:[(0,y.jsxs)(a.kC,{alignItems:"center",children:[(0,y.jsx)("div",{className:j,children:(0,y.jsx)(a.xv,{variant:"regular",children:C.firstName.charAt(0)+C.lastName.charAt(0)})}),(0,y.jsx)(a.xv,{ml:"16px",children:"".concat(C.firstName," ").concat(C.lastName)})]}),(0,y.jsx)(v.Z,{icon:"Arrow-small-right",size:12,className:"svg-light-grey-1"})]})})]}),(0,y.jsxs)("div",{className:p,children:[(0,y.jsx)("div",{className:f,children:(0,y.jsxs)(a.kC,{width:"100%",justifyContent:"flex-end",alignItems:"center",height:"68px",gap:"10px",children:["sandbox"===k&&(0,y.jsx)(a.xu,{padding:"0 30px",borderLeft:"1px solid #e8ebee",children:(0,y.jsx)(i.Vp,{color:"#fff",backgroundColor:"#ffac4a",children:"TEST Mode"})}),(0,y.jsxs)(a.xu,{paddingLeft:"30px",borderLeft:"1px solid #e8ebee",children:[(0,y.jsx)(c.r,{variant:"primary"}),(0,y.jsx)("br",{}),(0,y.jsx)(a.xv,{variant:"small",children:"Darkmode"})]})]})}),(0,y.jsx)("div",{className:x,children:(0,y.jsx)(_.Z,{children:n})})]})]})}},6938:function(e,n,t){t.r(n);var r=t(2791),a=t(7689),s=t(9584),i=t(184),c=r.lazy((function(){return Promise.all([t.e(1951),t.e(527),t.e(9336),t.e(5614)]).then(t.bind(t,8833))})),l=r.lazy((function(){return Promise.all([t.e(4398),t.e(1951),t.e(4044),t.e(5326),t.e(6861)]).then(t.bind(t,219))}));n.default=function(){return(0,i.jsxs)(a.Z5,{children:[(0,i.jsx)(a.AW,{path:"",element:(0,i.jsx)(s.Z,{children:(0,i.jsx)(c,{})})}),(0,i.jsx)(a.AW,{path:"filter",element:(0,i.jsx)(l,{})})]})}},9743:function(e,n,t){t.d(n,{r:function(){return o}});var r=t(5420),a=t(1938),s=t(6831),i=t(2791);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var l=["spacing","children"],o=(0,a.Gp)((function(e,n){var t=(0,a.jC)("Switch",e),o=(0,a.Lr)(e),d=o.spacing,u=void 0===d?"0.5rem":d,h=o.children,m=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(o,l),p=(0,r.O)(m),x=p.state,f=p.getInputProps,g=p.getCheckboxProps,b=p.getRootProps,j=p.getLabelProps,v=i.useMemo((function(){return c({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0},t.container)}),[t.container]),_=i.useMemo((function(){return c({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},t.track)}),[t.track]),y=i.useMemo((function(){return c({userSelect:"none",marginStart:u},t.label)}),[u,t.label]);return i.createElement(a.m$.label,c({},b(),{className:(0,s.cx)("chakra-switch",e.className),__css:v}),i.createElement("input",c({className:"chakra-switch__input"},f({},n))),i.createElement(a.m$.span,c({},g(),{className:"chakra-switch__track",__css:_}),i.createElement(a.m$.span,{__css:t.thumb,className:"chakra-switch__thumb","data-checked":(0,s.PB)(x.isChecked),"data-hover":(0,s.PB)(x.isHovered)})),h&&i.createElement(a.m$.span,c({className:"chakra-switch__label"},j(),{__css:y}),h))}));s.Ts&&(o.displayName="Switch")},6450:function(e,n,t){t.d(n,{SD:function(){return g},Sn:function(){return m},Vp:function(){return h}});var r=t(9113),a=t(1938),s=t(6831),i=t(2791);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}var l=["isDisabled","children"],o=(0,a.eC)("Tag"),d=o[0],u=o[1],h=(0,a.Gp)((function(e,n){var t=(0,a.jC)("Tag",e),r=(0,a.Lr)(e),s=c({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},t.container);return i.createElement(d,{value:t},i.createElement(a.m$.span,c({ref:n},r,{__css:s})))}));s.Ts&&(h.displayName="Tag");var m=(0,a.Gp)((function(e,n){var t=u();return i.createElement(a.m$.span,c({ref:n,noOfLines:1},e,{__css:t.label}))}));s.Ts&&(m.displayName="TagLabel");var p=(0,a.Gp)((function(e,n){return i.createElement(r.JO,c({ref:n,verticalAlign:"top",marginEnd:"0.5rem"},e))}));s.Ts&&(p.displayName="TagLeftIcon");var x=(0,a.Gp)((function(e,n){return i.createElement(r.JO,c({ref:n,verticalAlign:"top",marginStart:"0.5rem"},e))}));s.Ts&&(x.displayName="TagRightIcon");var f=function(e){return i.createElement(r.JO,c({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),i.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}))};s.Ts&&(f.displayName="TagCloseIcon");var g=function(e){var n=e.isDisabled,t=e.children,r=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l),s=c({display:"flex",alignItems:"center",justifyContent:"center",outline:"0"},u().closeButton);return i.createElement(a.m$.button,c({"aria-label":"close"},r,{type:"button",disabled:n,__css:s}),t||i.createElement(f,null))};s.Ts&&(g.displayName="TagCloseButton")}}]);
//# sourceMappingURL=6938.8fedab82.chunk.js.map