(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/brightness/brightness"],{"09bb":function(e,n,t){},"0cef":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{title:"brightness",screen:0,keepScreenOn:!0}},onLoad:function(){var n=this;e.getScreenBrightness({success:function(e){console.log(e," at pages\\API\\brightness\\brightness.vue:28"),n.screen=(100*e.value).toFixed(),console.log("屏幕亮度值："+n.screen," at pages\\API\\brightness\\brightness.vue:30")},fail:function(e){console.log(e," at pages\\API\\brightness\\brightness.vue:33")}})},methods:{sliderChange:function(n){var t=n.detail.value;this.screen!==t&&(console.log("当前数值："+n.detail.value," at pages\\API\\brightness\\brightness.vue:42"),e.setScreenBrightness({value:t/100,success:function(){console.log("success"," at pages\\API\\brightness\\brightness.vue:46")},fail:function(e){console.log(e," at pages\\API\\brightness\\brightness.vue:49")}}),this.screen=t)},keep:function(){e.setKeepScreenOn({keepScreenOn:this.keepScreenOn}),this.keepScreenOn=!this.keepScreenOn}}};n.default=t}).call(this,t("6e42")["default"])},"299a":function(e,n,t){"use strict";t.r(n);var s=t("dff7"),r=t("bff4");for(var c in r)"default"!==c&&function(e){t.d(n,e,function(){return r[e]})}(c);t("8c77");var i=t("2877"),u=Object(i["a"])(r["default"],s["a"],s["b"],!1,null,null,null);n["default"]=u.exports},"8c77":function(e,n,t){"use strict";var s=t("09bb"),r=t.n(s);r.a},bff4:function(e,n,t){"use strict";t.r(n);var s=t("0cef"),r=t.n(s);for(var c in s)"default"!==c&&function(e){t.d(n,e,function(){return s[e]})}(c);n["default"]=r.a},dff7:function(e,n,t){"use strict";var s=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return s}),t.d(n,"b",function(){return r})}},[["83cb","common/runtime","common/vendor"]]]);