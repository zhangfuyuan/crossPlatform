(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/save-media/save-media"],{"3a23":function(e,a,t){},"6d22":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{title:"saveImage/saveVideo",imagePath:"",videoPath:""}},onLoad:function(){},methods:{videoErrorCallback:function(a){e.showModal({content:a.target.errMsg,showCancel:!1})},saveImage:function(){var a=this;e.chooseImage({count:1,sourceType:["camera"],success:function(e){a.imagePath=e.tempFilePaths[0],a.getTempFilePath(e.tempFilePaths[0],"imageTempPath")}})},saveVideo:function(){var a=this;e.chooseVideo({count:1,sourceType:["camera"],success:function(e){console.log(e.tempFilePath," at pages\\API\\save-media\\save-media.vue:56"),a.videoPath=e.tempFilePath,a.getTempFilePath(e.tempFilePath,"videoTempPath")}})},getTempFilePath:function(a,t){var o={filePath:a,success:function(){console.log("save success"," at pages\\API\\save-media\\save-media.vue:68"),e.showModal({content:"保存成功",showCancel:!1}),e.hideLoading()},fail:function(a){e.hideLoading(),e.showModal({content:"保存失败",showCancel:!1})}};e.showLoading({title:"保存中..."}),"videoTempPath"===t?e.saveVideoToPhotosAlbum(o):e.saveImageToPhotosAlbum(o)}}};a.default=t}).call(this,t("6e42")["default"])},7019:function(e,a,t){"use strict";t.r(a);var o=t("6d22"),n=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(a,e,function(){return o[e]})}(i);a["default"]=n.a},"89a5":function(e,a,t){"use strict";t.r(a);var o=t("fbf6"),n=t("7019");for(var i in n)"default"!==i&&function(e){t.d(a,e,function(){return n[e]})}(i);t("dc1d");var s=t("2877"),c=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,null,null);a["default"]=c.exports},dc1d:function(e,a,t){"use strict";var o=t("3a23"),n=t.n(o);n.a},fbf6:function(e,a,t){"use strict";var o=function(){var e=this,a=e.$createElement;e._self._c},n=[];t.d(a,"a",function(){return o}),t.d(a,"b",function(){return n})}},[["dcbf","common/runtime","common/vendor"]]]);