(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{1730:function(t,n,e){},"9db5":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return c})},b25c:function(t,n,e){"use strict";e.r(n);var o=e("bcd8"),c=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=c.a},b8f9:function(t,n,e){"use strict";e.r(n);var o=e("9db5"),c=e("b25c");for(var u in c)"default"!==u&&function(t){e.d(n,t,function(){return c[t]})}(u);e("c5af");var r=e("2877"),a=Object(r["a"])(c["default"],o["a"],o["b"],!1,null,null,null);n["default"]=a.exports},bcd8:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("2f62");function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var r={data:function(){return{}},methods:c({},(0,o.mapMutations)(["logout"]),{navTo:function(t){this.$api.msg("跳转到".concat(t))},toLogout:function(){var n=this;t.showModal({content:"确定要退出登录么",success:function(e){e.confirm&&(n.logout(),setTimeout(function(){t.navigateBack()},200))}})},switchChange:function(t){var n=t.detail.value?"打开":"关闭";this.$api.msg("".concat(n,"消息推送"))}})};n.default=r}).call(this,e("6e42")["default"])},c5af:function(t,n,e){"use strict";var o=e("1730"),c=e.n(o);c.a}},[["f4c7","common/runtime","common/vendor"]]]);