(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/video/video"],{"0206":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"1b8f":function(t,n,e){},"9f64":function(t,n,e){"use strict";var o=e("1b8f"),a=e.n(o);a.a},b2ef:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"video",src:"",danmuList:[{text:"第 1s 出现的弹幕",color:"#ff0000",time:1},{text:"第 3s 出现的弹幕",color:"#ff00ff",time:3}],danmuValue:""}},onReady:function(n){this.videoContext=t.createVideoContext("myVideo")},methods:{sendDanmu:function(){this.videoContext.sendDanmu({text:this.danmuValue,color:this.getRandomColor()}),this.danmuValue=""},videoErrorCallback:function(n){t.showModal({content:n.target.errMsg,showCancel:!1})},getRandomColor:function(){for(var t=[],n=0;n<3;++n){var e=Math.floor(256*Math.random()).toString(16);e=1==e.length?"0"+e:e,t.push(e)}return"#"+t.join("")}}};n.default=e}).call(this,e("6e42")["default"])},bb80:function(t,n,e){"use strict";e.r(n);var o=e("0206"),a=e("c902");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("9f64");var u=e("2877"),i=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports},c902:function(t,n,e){"use strict";e.r(n);var o=e("b2ef"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a}},[["89b7","common/runtime","common/vendor"]]]);