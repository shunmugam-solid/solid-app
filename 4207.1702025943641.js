"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[4207,8243],{4207:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"widgetContainer cardSuccess"},[a("div",{staticClass:"navigationHeader"},[a("div",{staticClass:"navigationHeader__inner"},[a("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("physical"===t.getSelectedCard.cardType?"physicalCardSuccess_title":"virtualCardSuccess_title"))+" ")]),a("span",{staticClass:"el-icon-close",on:{click:t.drawerClose}})])]),a("div",{staticClass:"widgetContainer__body center-content"},[a("LottieAnimation",{attrs:{"animation-name":"success",reference:"created-card-success",loop:!0}}),a("div",[a("p",{staticClass:"header-title"},[t._v(" "+t._s(t.$t("physical"===t.getSelectedCard.cardType?"physicalCardSuccess_title":"virtualCardSuccess_title"))+" ")]),a("div",{staticClass:"cardSuccess__details"},[a("p",[a("span",[t._v(t._s(t.$t("card_label")))]),a("span",[t._v(t._s(t.getSelectedCard.label))])]),a("p",[a("span",[t._v(t._s(t.$t("card_spendLimit")))]),a("span",[t._v(" "+t._s(t._f("currency")(t.getSelectedCard.limitAmount))+" "+t._s(" "+t.spendingLimit)+" ")])]),a("p",[a("span",[t._v(t._s(t.$t("card_status")))]),a("span",[t._v(t._s(t.status))])])]),"physical"===t.getSelectedCard.cardType?a("p",{staticClass:"note"},[t._v(" "+t._s(t.$t("cardSuccess_desc"))+" ")]):t._e()])],1),a("div",{staticClass:"el-drawer__footer"},[a("el-button",{staticClass:"done-btn el-button__brand brand",attrs:{"data-testid":"submit"},on:{click:t.done}},[t._v(" "+t._s(t.$t("done"))+" ")])],1)])},s=[],c=a(629),n=a(9651),r=a(6537),l={components:{LottieAnimation:r.Z},computed:{...(0,c.Se)("card",["getSelectedCard"]),spendingLimit(){return n.KZ[this.getSelectedCard.limitInterval]},status(){return n.l3[this.getSelectedCard.cardStatus]}},created(){this.$emit("afterCreated")},methods:{done(){"physical"===this.getSelectedCard.cardType?this.drawerClose():this.$emit("goToDetailsScreen","pendingActivation"===this.getSelectedCard.cardStatus?"activate":"manage")}}},d=l,o=a(3736),u=(0,o.Z)(d,i,s,!1,null,"d6df4468",null),_=u.exports},9651:function(t,e,a){a.d(e,{Iw:function(){return n},KZ:function(){return s},l3:function(){return c}});var i=a(3328);const s={daily:i.Z.t("limitPerDay"),weekly:i.Z.t("limitPerWeek"),monthly:i.Z.t("limitPerMonth"),yearly:i.Z.t("limitPerYear"),allTime:i.Z.t("allTime"),perTransaction:i.Z.t("limitPerTransaction"),cardBoxTitle:{daily:i.Z.t("limitDay"),weekly:i.Z.t("limitWeek"),monthly:i.Z.t("limitMonth"),yearly:i.Z.t("limitYear"),allTime:i.Z.t("limitAllTime"),perTransaction:i.Z.t("limitTransaction")}},c={active:"Active",inactive:"Frozen",pendingActivation:"Inactive"},n={physical:i.Z.t("cardType_physical"),virtual:i.Z.t("cardType_virtual")}}}]);
//# sourceMappingURL=4207.1702025943641.js.map