(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1465:function(t,e,n){"use strict";n(59),n(35),n(33),n(25),n(54);var r=n(27),o=n(75);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={props:{txs:{type:[Array,Object],default:function(){return[]}},title:{type:String,default:""},subtitle:{type:String,default:""},txName:{type:String,default:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)("txHashKeeper",["txExplorerUrl","txHashToRender","txStatusClass"]),{show:function(){return"multisendTxs"===this.txName?this.txs.length>0:this.txs.txHash},multisend:function(){return"multisendTxs"===this.txName}})},d=n(15),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"token-field"},[t.title?n("div",{staticClass:"title",class:{"is-spaced":t.subtitle}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?n("div",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]):t._e(),t._v(" "),t.multisend?n("ol",{staticClass:"txs"},t._l(t.txs,(function(e){var r=e.txHash,o=e.status;return n("li",{key:r,staticClass:"txs__item",class:t.txStatusClass(o)},[n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName,r),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName,r))+"\n      ")]),t._v(" "),n("div",{staticClass:"txs__status"})])})),0):n("div",{staticClass:"txs"},[n("div",{staticClass:"txs__item",class:t.txStatusClass(t.txs.status)},[n("a",{staticClass:"txs__address",attrs:{href:t.txExplorerUrl(t.txName),target:"_blank"}},[t._v("\n        "+t._s(t.txHashToRender(t.txName))+"\n      ")]),t._v(" "),n("div",{staticClass:"txs__status"})])])]):t._e()}),[],!1,null,null,null);e.a=component.exports},1466:function(t,e,n){"use strict";n(280);var r={props:{activeStep:{type:Number,default:0},lastStepLabel:{type:String,default:"push"}},computed:{label:function(){return"pull"===this.lastStepLabel?this.$t("createPool"):this.$t("multisend")}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-steps",{attrs:{type:"is-primary","has-navigation":!1},model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[n("b-step-item",{attrs:{label:t.$t("prepare")}}),t._v(" "),n("b-step-item",{attrs:{label:t.$t("approve")}}),t._v(" "),n("b-step-item",{attrs:{label:t.label}})],1)}),[],!1,null,null,null);e.a=component.exports},1473:function(t,e,n){"use strict";n.r(e);n(59),n(35),n(33),n(25),n(54),n(36);var r=n(5),o=n(27),l=n(1466),c=n(1465),d=n(75),v=n(17);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=n(20),h={head:{bodyAttrs:{class:"no-bg"}},components:{Steps:l.a,Tx:c.a},data:function(){return{approveSize:"unlimited",isApproved:!1,infoBox:this.$t("preparing"),alreadyPressed:!1,errorMessage:""}},computed:f({},Object(d.d)("distribution",["list","totalTokens","strategy","currentCheck"]),{},Object(d.d)("token",["tokenBalance","decimals"]),{},Object(d.d)("metamask",["ethBalance"]),{},Object(d.d)("txHashKeeper",["approveTx"]),{},Object(d.c)("token",["toDecimals","getTokenSymbol","isUnlimitedAllowance","allowance"]),{},Object(d.c)("metamask",["networkConfig"]),{},Object(d.c)("distribution",["hasEnoughApprovedTokens"]),{isNotEnoughTokens:function(){var t=new m(this.tokenBalance),e=new m(this.totalTokens);return t.isLessThan(e)},approveButtonText:function(){return this.hasEnoughApprovedTokens?this.$t("proceed"):this.$t("approveButton")},isLoading:function(){switch(this.approveTx.status){case v.default.waitingForReciept:return!0;case v.default.success:return!this.isApproved}return!1}}),beforeCreate:function(){0===this.$store.state.distribution.list.length&&this.$store.dispatch("router/goToIndex")},mounted:function(){this.$nuxt.$loading.finish()},methods:f({},Object(d.b)("token",["sendApprove"]),{},Object(d.b)("router",["goToTheNextPage"]),{explorerBaseUrl:function(t){var e=new window.URL(this.networkConfig.explorerUrl.tx).origin;return"".concat(e,"/address/").concat(t)},approveButtonAction:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.hasEnoughApprovedTokens){e.next=8;break}return t.alreadyPressed=!0,e.next=5,t.sendApprove(t.approveSize);case 5:t.isApproved=e.sent,e.next=13;break;case 8:return t.alreadyPressed=!0,e.next=11,t.$store.dispatch("token/preAirDropCheck");case 11:t.$store.dispatch("distribution/addMore"),t.goToTheNextPage();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),t.errorMessage=e.t0.message;case 18:return e.prev=18,t.alreadyPressed=!1,e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})))()},renderableAllowance:function(){return this.isUnlimitedAllowance?"∞":this.toDecimals(this.allowance)}})},k=n(15),component=Object(k.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"m-container"},[n("Steps",{attrs:{"active-step":1,"last-step-label":t.strategy}})],1),t._v(" "),n("div",{staticClass:"columns is-multiline has-token-info is-centered"},[n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v(t._s(t.renderableAllowance()))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("currentApproval")))])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v("\n          "+t._s(t.toDecimals(t.totalTokens,null,6))+" "+t._s(t.getTokenSymbol)+"\n        ")]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("totalTokensToSend")))])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v(t._s(t.toDecimals(t.tokenBalance))+" "+t._s(t.getTokenSymbol))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v(t._s(t.$t("yourBalance")))])])]),t._v(" "),n("div",{staticClass:"column is-half-tablet is-one-quarter-desktop"},[n("div",{staticClass:"token-info"},[n("div",{staticClass:"token-info__value"},[t._v(t._s(t.toDecimals(t.ethBalance,18)))]),t._v(" "),n("div",{staticClass:"token-info__name"},[t._v("\n          "+t._s(t.$t("yourTokenBalance",{token:t.networkConfig.currencyName}))+"\n        ")])])])]),t._v(" "),n("div",{staticClass:"m-container"},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("airdropList")))]),t._v(" "),n("b-table",{staticClass:"approve-list",attrs:{data:t.list,"per-page":50,paginated:"","pagination-simple":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{staticClass:"address",attrs:{label:t.$t("address"),width:"65%"}},[n("a",{attrs:{href:t.explorerBaseUrl(e.row[0]),target:"_blank",role:"button"}},[t._v(t._s(e.row[0]))])]),t._v(" "),n("b-table-column",{staticClass:"break",attrs:{label:t.$t("totalAmount"),numeric:""}},[t._v("\n          "+t._s(t.toDecimals(e.row[1],null,t.decimals))+"\n        ")])]}}])})],1),t._v(" "),n("div",{staticClass:"m-container"},[n("div",{staticClass:"token-field",attrs:{hidden:t.isNotEnoughTokens||t.hasEnoughApprovedTokens}},[n("div",{staticClass:"title"},[t._v(t._s(t.$t("amountToApprove")))]),t._v(" "),n("div",{staticClass:"columns is-centered is-vcentered"},[n("div",{staticClass:"column is-narrow"},[n("div",{staticClass:"field"},[n("b-radio",{attrs:{"native-value":t.totalTokens,size:"is-medium"},model:{value:t.approveSize,callback:function(e){t.approveSize=e},expression:"approveSize"}},[t._v("\n              "+t._s(t.$t("exactAmountToSent"))+" ("+t._s(t.toDecimals(t.totalTokens,null,t.decimals))+"\n              "+t._s(t.getTokenSymbol)+")\n            ")])],1)]),t._v(" "),n("div",{staticClass:"column is-narrow"},[n("div",{staticClass:"field"},[n("b-radio",{attrs:{"native-value":"unlimited",size:"is-medium"},model:{value:t.approveSize,callback:function(e){t.approveSize=e},expression:"approveSize"}},[t._v("\n              "+t._s(t.$t("unlimitedAmount"))+"\n            ")])],1)])])]),t._v(" "),n("Tx",{attrs:{txs:t.approveTx,title:t.$t("approveTransactionHash"),"tx-name":"approveTx"}})],1),t._v(" "),n("div",{staticClass:"buttons is-centered"},[n("b-button",{staticClass:"is-next",attrs:{id:"approve-and-proceed-button",loading:t.isLoading,disabled:t.alreadyPressed||t.isNotEnoughTokens,type:"is-primary"},on:{click:t.approveButtonAction}},[t._v("\n      "+t._s(t.approveButtonText)+"\n    ")])],1),t._v(" "),n("div",{staticClass:"m-container"},[n("b-notification",{attrs:{closable:!1,active:t.alreadyPressed,type:"is-success"},on:{"update:active":function(e){t.alreadyPressed=e}}},[t._v("\n      "+t._s(t.infoBox)+"...\n    ")]),t._v(" "),t.currentCheck.method?n("b-notification",{attrs:{closable:!1,active:t.alreadyPressed,type:"is-primary"},on:{"update:active":function(e){t.alreadyPressed=e}}},[t._v("\n      "+t._s(t.$t(t.currentCheck.method))+" "+t._s(t.$t("from"))+" "+t._s(t.currentCheck.from)),t.currentCheck.to?n("span",[t._v(" "+t._s(t.$t("to"))+" ")]):t._e(),t._v(" "+t._s(t.currentCheck.to)+"\n    ")]):t._e(),t._v(" "),n("b-notification",{attrs:{closable:!1,active:t.isNotEnoughTokens,type:"is-danger",role:"alert"},on:{"update:active":function(e){t.isNotEnoughTokens=e}}},[t._v("\n      "+t._s(t.$t("notEnoughTokens"))+"\n    ")]),t._v(" "),t.errorMessage?n("b-notification",{attrs:{closable:!1,type:"is-danger",role:"alert"}},[n("ul",[n("li",[t._v("\n          "+t._s(t.errorMessage)+"\n        ")])])]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);