(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["platforms/app-plus/speech/speech"],{1818:function(e,n,t){"use strict";t.r(n);var a=t("aa6d"),u=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=u.a},"6b8d":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u})},"79d8":function(e,n,t){"use strict";t.r(n);var a=t("6b8d"),u=t("1818");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);var s=t("2877"),c=Object(s["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},aa6d:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"speech",value:""}},onUnload:function(){this.value=""},methods:{startRecognize:function(){var e={},n=this;e.engine="baidu",n.value="",plus.speech.startRecognize(e,function(e){console.log(e," at platforms\\app-plus\\speech\\speech.vue:33"),n.value+=e},function(e){console.log("语音识别失败："+e.message," at platforms\\app-plus\\speech\\speech.vue:36")})},startRecognizeEnglish:function(){var e={},n=this;e.engine="baidu",e.lang="en-us",n.value="",plus.speech.startRecognize(e,function(e){console.log(e," at platforms\\app-plus\\speech\\speech.vue:46"),n.value+=e},function(e){console.log("语音识别失败："+e.message," at platforms\\app-plus\\speech\\speech.vue:49")})}}};n.default=a}},[["840d","common/runtime","common/vendor"]]]);