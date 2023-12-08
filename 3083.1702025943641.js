"use strict";(self["webpackChunkSolid"]=self["webpackChunkSolid"]||[]).push([[3083],{3083:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"\n    widgetContainer\n    bg-white\n    widgetContainer--scrollable\n    paySuccess paySuccess--completed\n  "},[a("div",{staticClass:"navigationHeader"},[a("div",{staticClass:"navigationHeader__inner"},[a("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("paid_success"))+" ")]),a("span",{staticClass:"el-icon-close",on:{click:t.done}})])]),a("div",{staticClass:"widgetContainer__body"},[a("div",{staticClass:"payment-done-header"},[a("LottieAnimation",{attrs:{"animation-name":"success",reference:"pay-success",loop:!0}}),a("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("paid_amount_title",{value1:t.amount}))+" ")]),"ach"===t.getPaymentType?a("p",{staticClass:"description"},[t._v(" "+t._s(t.$t("pay_success_description",{value1:t.getSelectedContactData.name}))+" ")]):"check"===t.getPaymentType?a("p",{staticClass:"description"},[t._v(" "+t._s(t.$t("pay_check_success_description",{value1:t.getSelectedContactData.name}))+" ")]):"cardPayment"===t.getPaymentType?a("p",{staticClass:"description"},[t._v(" "+t._s(t.$t("pay_card_success_description",{value1:t.getSelectedContactData.name}))+" ")]):a("p",{staticClass:"description"},[t._v(" "+t._s(t.$t("pay_intra_success_description"))+" ")])],1),a("div",{staticClass:"paySuccess__details"},[a("div",{staticClass:"listWithInfo border-on"},[a("ul",[a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("pay_section_source")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.getSelectedAccount.label)+" ")])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("pay_section_destination")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.getCompletedPaymentDetails.name)+" ")])]),"ach"===t.getPaymentType||"domesticWire"===t.getPaymentType?[a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("contact_Account_AccNo")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.getCompletedPaymentDetails.accountNumber)+" ")])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("contact_Account_RoutingNo")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.getCompletedPaymentDetails.routingNumber)+" ")])]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("payment_sucess_bankname")))]),"ach"===t.getPaymentType?a("span",{staticClass:"value"},[t._v(" "+t._s(t.getSelectedContactData.ach.bankName)+" ")]):"domesticWire"===t.getPaymentType?a("span",{staticClass:"value"},[t._v(" "+t._s(t.getSelectedContactData.wire.domestic.bankName)+" ")]):t._e()]),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("contact_Account_Type")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.accountTypeName)+" ")])])]:"check"===t.getPaymentType&&t.getCompletedPaymentDetails.address?[a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("address")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.getCompletedPaymentDetails.address.line1+","+(""!==t.getCompletedPaymentDetails.address.line2?t.getCompletedPaymentDetails.address.line2+",":"")+t.getCompletedPaymentDetails.address.city+","+t.getCompletedPaymentDetails.address.state+" "+t.getCompletedPaymentDetails.address.postalCode)+" ")])])]:"cardPayment"===t.getPaymentType?[t.getSelectedContactData.email&&""!==t.getSelectedContactData.email?a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("email")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.getSelectedContactData.email)+" ")])]):t._e(),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("contact_phone_title")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.getSelectedContactData.phone)+" ")])])]:t._e(),a("li",[a("span",{staticClass:"label"},[t._v(t._s(t.$t("pay_row_purpose")))]),a("span",{staticClass:"value"},[t._v(" "+t._s(t.getCompletedPaymentDetails.description)+" ")])])],2)])])]),a("div",{staticClass:"el-drawer__footer"},[a("el-button",{staticClass:"width-100 el-button__brand brand",attrs:{type:"primary"},on:{click:t.done}},[t._v(" "+t._s(t.$t("done"))+" ")])],1)])},n=[],i=a(629),c=a(8794),l=a(6537),o=a(1712),p={components:{LottieAnimation:l.Z},props:{page:{type:String,default:""}},computed:{...(0,i.Se)("pay",["getPaymentType","getCompletedPaymentDetails"]),...(0,i.Se)("account",["getSelectedAccount"]),...(0,i.Se)("contact",["getSelectedContactData"]),accountTypeName(){return c.l[this.getCompletedPaymentDetails.accountType]},amount(){return(0,o.oB)(this.getCompletedPaymentDetails.amount)}},created(){this.getPaymentType||"send-card"===this.page||this.$router.push("/pay/paymentType"),this.$emit("onPay")},methods:{done(){this.drawerClose(),"send-card"===this.page?this.$emit("refresh"):this.goToDashboard()}}},d=p,_=a(3736),r=(0,_.Z)(d,s,n,!1,null,null,null),m=r.exports},8794:function(t,e,a){a.d(e,{l:function(){return s}});const s={personalSavings:"Personal Savings",personalChecking:"Personal Checking",businessSavings:"Business Savings",businessChecking:"Business Checking",cardAccount:"Card Account"}}}]);
//# sourceMappingURL=3083.1702025943641.js.map