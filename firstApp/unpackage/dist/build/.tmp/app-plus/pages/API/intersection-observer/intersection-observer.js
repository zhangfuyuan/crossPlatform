(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/intersection-observer/intersection-observer"],{"5ae5":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=null,a={data:function(){return{appear:!1,title:"intersectionObserver"}},onReady:function(){var n=this;t=e.createIntersectionObserver(this),t.relativeTo(".scroll-view").observe(".ball",function(e){e.intersectionRatio>0&&!n.appear?n.appear=!0:!e.intersectionRatio>0&&n.appear&&(n.appear=!1)})},onUnload:function(){t&&t.disconnect()}};n.default=a}).call(this,t("6e42")["default"])},"6da2":function(e,n,t){"use strict";t.r(n);var a=t("5ae5"),r=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=r.a},"9d00":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return r})},aaef:function(e,n,t){"use strict";var a=t("b939"),r=t.n(a);r.a},b939:function(e,n,t){},d392:function(e,n,t){"use strict";t.r(n);var a=t("9d00"),r=t("6da2");for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);t("aaef");var i=t("2877"),u=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=u.exports}},[["0214","common/runtime","common/vendor"]]]);