"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[8243],{4207:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"widgetContainer cardSuccess"},[s("div",{staticClass:"navigationHeader"},[s("div",{staticClass:"navigationHeader__inner"},[s("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("physical"===t.getSelectedCard.cardType?"physicalCardSuccess_title":"virtualCardSuccess_title"))+" ")]),s("span",{staticClass:"el-icon-close",on:{click:t.drawerClose}})])]),s("div",{staticClass:"widgetContainer__body center-content"},[s("LottieAnimation",{attrs:{"animation-name":"success",reference:"created-card-success",loop:!0}}),s("div",[s("p",{staticClass:"header-title"},[t._v(" "+t._s(t.$t("physical"===t.getSelectedCard.cardType?"physicalCardSuccess_title":"virtualCardSuccess_title"))+" ")]),s("div",{staticClass:"cardSuccess__details"},[s("p",[s("span",[t._v(t._s(t.$t("card_label")))]),s("span",[t._v(t._s(t.getSelectedCard.label))])]),s("p",[s("span",[t._v(t._s(t.$t("card_spendLimit")))]),s("span",[t._v(" "+t._s(t._f("currency")(t.getSelectedCard.limitAmount))+" "+t._s(" "+t.spendingLimit)+" ")])]),s("p",[s("span",[t._v(t._s(t.$t("card_status")))]),s("span",[t._v(t._s(t.status))])])]),"physical"===t.getSelectedCard.cardType?s("p",{staticClass:"note"},[t._v(" "+t._s(t.$t("cardSuccess_desc"))+" ")]):t._e()])],1),s("div",{staticClass:"el-drawer__footer"},[s("el-button",{staticClass:"done-btn el-button__brand brand",attrs:{"data-testid":"submit"},on:{click:t.done}},[t._v(" "+t._s(t.$t("done"))+" ")])],1)])},i=[],c=s(629),d=s(9651),r=s(6537),n={components:{LottieAnimation:r.Z},computed:{...(0,c.Se)("card",["getSelectedCard"]),spendingLimit(){return d.KZ[this.getSelectedCard.limitInterval]},status(){return d.l3[this.getSelectedCard.cardStatus]}},created(){this.$emit("afterCreated")},methods:{done(){"physical"===this.getSelectedCard.cardType?this.drawerClose():this.$emit("goToDetailsScreen","pendingActivation"===this.getSelectedCard.cardStatus?"activate":"manage")}}},l=n,_=s(3736),o=(0,_.Z)(l,a,i,!1,null,"d6df4468",null),u=o.exports}}]);
//# sourceMappingURL=8243.1689684392020.js.map