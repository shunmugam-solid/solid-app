"use strict";(self.webpackChunkdrop_in_ui=self.webpackChunkdrop_in_ui||[]).push([[4723,3545],{3746:function(n,t,c){c.d(t,{IT:function(){return r},Py:function(){return d},Qr:function(){return l},Vf:function(){return f},YF:function(){return o},b:function(){return u},oE:function(){return e},yW:function(){return i}});var a=c(7207),o=function(n){return{type:a.Sd,payload:n}},i=function(n){return{type:a.JX,payload:n}},r=function(n){return{type:a.$S,payload:n}},e=function(n){return{type:a.iY,payload:n}},u=function(n){return{type:a.z6,payload:n}},f=function(n){return{type:a.I,payload:n}},l=function(n){return{type:a.VJ,payload:n}},d=function(n){return{type:a.Ek,payload:n}}},7208:function(n,t,c){c.d(t,{LH:function(){return f},M_:function(){return g},OV:function(){return s},P1:function(){return p},QZ:function(){return l},XN:function(){return h},e:function(){return _},ms:function(){return v},nO:function(){return d},on:function(){return u},zp:function(){return m}});var a=c(3433),o=c(1413),i=c(80),r=c(286),e=c(3746),u=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3?arguments[3]:void 0;return function(u,f){return new Promise((function(l,d){u((0,e.IT)(!0));var s="/v1/card?accountId=".concat(n,"&limit=").concat(t,"&offset=").concat(c);i&&(s+="&query=".concat(i,"&last4=").concat(i)),r.Z.get(s).then((function(n){var t=n.data,i=f().card,r={total:0,data:[]};if(0===c)r=t;else{var d=(0,o.Z)({},i.cards);r={data:[].concat((0,a.Z)(d.data),(0,a.Z)(t.data)),total:t.total}}u((0,e.YF)(r)),l(r)})).catch((function(n){d(n)})).finally((function(){u((0,e.IT)(!1))}))}))}},f=function(n){return function(t){return(0,i.V_)(!0),new Promise((function(c,a){r.Z.post("/v1/card",n).then((function(n){var a=n.data;t((0,e.Vf)(a)),c(a)})).catch((function(n){a(n)})).finally((function(){(0,i.V_)(!1)}))}))}},l=function(n,t){return function(c,a){return new Promise((function(o,e){(0,i.V_)(!0),r.Z.patch("/v1/card/".concat(n,"/activate"),t).then((function(n){var t=n.data,i=a().account.selectedAccount;i&&setTimeout((function(){c(u(i.id))}),0),o(t)})).catch((function(n){e(n)})).finally((function(){(0,i.V_)(!1)}))}))}},d=function(n){return function(){return new Promise((function(t,c){(0,i.V_)(!0),r.Z.get("/v1/card/".concat(n)).then((function(n){var c=n.data;t(c)})).catch((function(n){c(n)})).finally((function(){(0,i.V_)(!1)}))}))}},s=function(n,t){return function(){return new Promise((function(c,a){(0,i.V_)(!0),r.Z.patch("v1/card/".concat(n),t).then((function(n){var t=n.data;c(t)})).catch((function(n){a(n)})).finally((function(){(0,i.V_)(!1)}))}))}},v=function(n){return function(){return new Promise((function(t,c){r.Z.post("v1/card/".concat(n,"/show-token")).then((function(n){var c=n.data;t(c)})).catch((function(n){c(n)}))}))}},h=function(n){return function(){return new Promise((function(t,c){(0,i.V_)(!0),r.Z.delete("/v1/card/".concat(n)).then((function(n){var c=n.data;t(c)})).catch((function(n){c(n)})).finally((function(){(0,i.V_)(!1)}))}))}},m=function(n){var t=n.cardId,c=n.lat,a=n.long,o=n.limit,i=void 0===o?25:o,u=n.page,f=void 0===u?1:u;return function(n){return new Promise((function(o,u){n((0,e.b)(!0));var l=i*(f-1);r.Z.get("v1/card/atm?cardId=".concat(t,"&limit=").concat(i,"&offset=").concat(l,"&latitude=").concat(c,"&longitude=").concat(a,"&radius=5")).then((function(t){var c=t.data;n((0,e.oE)(c)),o(c)})).catch((function(n){u(n)})).finally((function(){n((0,e.b)(!1))}))}))}},_=function(n){return function(){return new Promise((function(t,c){(0,i.V_)(!0),r.Z.post("v1/card/".concat(n,"/pintoken")).then((function(n){var c=n.data;t(c)})).catch((function(n){c(n)})).finally((function(){return(0,i.V_)(!1)}))}))}},p=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3?arguments[3]:void 0;return function(u,f){return new Promise((function(l,d){u((0,e.IT)(!0));var s="/v1/send/card?accountId=".concat(n,"&limit=").concat(t,"&offset=").concat(c);i&&(s+="&query=".concat(i)),r.Z.get(s).then((function(n){var t=n.data,i=f().card,r=t.data.filter((function(n){return null!==n.card})),d={total:0,data:[]};if(0===c)d={data:r,total:r.length};else{var s=(0,o.Z)({},i.sentCards);d={data:[].concat((0,a.Z)(s.data),(0,a.Z)(r)),total:r.length}}u((0,e.yW)(d)),l(d)})).catch((function(n){d(n)})).finally((function(){u((0,e.IT)(!1))}))}))}},g=function(n){return function(){return new Promise((function(t,c){(0,i.V_)(!0),r.Z.post("/v1/send/card/cancel",{cardId:n}).then((function(n){var c=n.data;t(c)})).catch((function(n){c(n)})).finally((function(){(0,i.V_)(!1)}))}))}}},4723:function(n,t,c){c.r(t),c.d(t,{default:function(){return g}});var a=c(9439),o=c(2791),i=c(2020),r=c(8735),e=c(5048),u=c(5649),f="AtmList_contactList__FzLfD",l="AtmList_contactListItem__WIOIG",d="AtmList_contactListInitials__fNk2B",s="AtmList_contactListName__oVI7Z",v="AtmList_locationDetails__V-4KN",h=c(80),m=c(5304),_=c(7208),p=c(184),g=function(){var n=(0,i.$)().t,t=(0,o.useState)({latitude:0,longitude:0}),c=(0,a.Z)(t,2),g=c[0],y=c[1],V=(0,m.Qo)(),Z=(0,o.useState)(""),x=(0,a.Z)(Z,2),w=x[0],I=x[1],P=(0,m.CG)((function(n){return n.card.selectedCard}),e.wU),j=(0,m.CG)((function(n){return n.card}),e.wU).atmData,L=(0,o.useCallback)((function(){P&&V((0,_.zp)({cardId:P.id,lat:"".concat(g.latitude),long:"".concat(g.longitude)}))}),[P,g]);return(0,o.useEffect)((function(){navigator.geolocation?((0,h.V_)(!0),navigator.geolocation.getCurrentPosition((function(n){if(n.coords.latitude&&n.coords.longitude){var t=n.coords,c=t.latitude,a=t.longitude;y({latitude:c,longitude:a}),I(""),(0,h.V_)(!1),setTimeout((function(){L()}),0)}}),(function(){I(n("atm_list.locationPermission")),(0,h.V_)(!1)}))):(I(n("atm_list.locationNotSupported")),(0,h.V_)(!1))}),[]),(0,p.jsx)("div",{className:"page",children:(0,p.jsx)(u.Z,{heading:n("atm_list.title"),children:(0,p.jsx)(r.xu,{width:"100%","data-total":j.total,children:""!==w?(0,p.jsx)(r.xv,{variant:"regular",children:w}):0===j.total?(0,p.jsx)(r.xv,{variant:"regular",children:n("atm_list.noData")}):(0,p.jsx)(r.aV,{className:f,children:j.data.map((function(n,t){return(0,p.jsxs)(r.HC,{className:l,children:[(0,p.jsx)(r.M5,{className:d,children:(0,p.jsxs)(r.xv,{variant:"small",color:"#141414",children:[n.name.charAt(0),n.name.charAt(1)]})}),(0,p.jsxs)(r.xu,{className:v,children:[(0,p.jsx)(r.xv,{variant:"regular",className:s,children:n.name}),(0,p.jsx)(r.xv,{variant:"regular",children:n.description})]})]},"atm-".concat(n.name,"-").concat(t))}))})})})})}}}]);
//# sourceMappingURL=4723.0e8beeb2.chunk.js.map