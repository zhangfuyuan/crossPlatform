(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/nav-dot/nav-dot"],{"12a8":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"fced"))},i={data:function(){return{title:"nav-dot"}},onReady:function(){this.setStyle(0,!0),this.setStyle(1,!0,"9")},methods:{setStyle:function(t,e,n){var o=getCurrentPages(),i=o[o.length-1],u=i.$getAppWebview();e?0===t?u.showTitleNViewButtonRedDot({index:t,text:n}):u.setTitleNViewButtonBadge({index:t,text:n}):0===t?u.hideTitleNViewButtonRedDot({index:t}):u.removeTitleNViewButtonBadge({index:t})}},onNavigationBarButtonTap:function(e){t.showToast({title:0===e.index?"你点了消息按钮":"你点了关注按钮",icon:"none"}),this.setStyle(e.index,!1)},components:{uniIcon:o}};e.default=i}).call(this,n("6e42")["default"])},"3a0b":function(t,e,n){"use strict";n.r(e);var o=n("6850"),i=n("eb4d");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);var a=n("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},6850:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},eb4d:function(t,e,n){"use strict";n.r(e);var o=n("12a8"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=i.a}},[["43da","common/runtime","common/vendor"]]]);