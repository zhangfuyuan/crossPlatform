(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/API/pull-down-refresh/pull-down-refresh"],{6797:function(t,n,o){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},e=[];o.d(n,"a",function(){return a}),o.d(n,"b",function(){return e})},7811:function(t,n,o){"use strict";o.r(n);var a=o("d408"),e=o.n(a);for(var r in a)"default"!==r&&function(t){o.d(n,t,function(){return a[t]})}(r);n["default"]=e.a},b919:function(t,n,o){},c660:function(t,n,o){"use strict";var a=o("b919"),e=o.n(a);e.a},cdfc:function(t,n,o){"use strict";o.r(n);var a=o("6797"),e=o("7811");for(var r in e)"default"!==r&&function(t){o.d(n,t,function(){return e[t]})}(r);o("c660");var u=o("2877"),i=Object(u["a"])(e["default"],a["a"],a["b"],!1,null,null,null);n["default"]=i.exports},d408:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{title:"下拉刷新 + 加载更多",data:[],loadMoreText:"加载中...",showLoadMore:!1,max:0}},onLoad:function(){this.initData()},onUnload:function(){this.max=0,this.data=[],this.loadMoreText="加载更多",this.showLoadMore=!1},onReachBottom:function(){var t=this;console.log("onReachBottom"," at pages\\API\\pull-down-refresh\\pull-down-refresh.vue:31"),this.max>40?this.loadMoreText="没有更多数据了!":(this.showLoadMore=!0,setTimeout(function(){t.setDate()},300))},onPullDownRefresh:function(){console.log("onPullDownRefresh"," at pages\\API\\pull-down-refresh\\pull-down-refresh.vue:42"),this.initData()},methods:{initData:function(){var n=this;setTimeout(function(){n.max=0,n.data=[];var o=[];n.max+=10;for(var a=n.max-9;a<n.max+1;a++)o.push(a);n.data=n.data.concat(o),t.stopPullDownRefresh()},300)},setDate:function(){var t=[];this.max+=10;for(var n=this.max-9;n<this.max+1;n++)t.push(n);this.data=this.data.concat(t)}}};n.default=o}).call(this,o("6e42")["default"])}},[["6597","common/runtime","common/vendor"]]]);