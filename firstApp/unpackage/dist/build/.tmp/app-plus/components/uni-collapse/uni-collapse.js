(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"005f":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(t,e){t.isOpen&&n.push(t.nameSync)}),this.$emit("change",n)}}};t.default=c},"501d":function(n,t,e){"use strict";var c=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return c}),e.d(t,"b",function(){return u})},"79c5":function(n,t,e){"use strict";e.r(t);var c=e("501d"),u=e("7bc7");for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);e("a24f");var o=e("2877"),r=Object(o["a"])(u["default"],c["a"],c["b"],!1,null,null,null);t["default"]=r.exports},"7bc7":function(n,t,e){"use strict";e.r(t);var c=e("005f"),u=e.n(c);for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);t["default"]=u.a},a24f:function(n,t,e){"use strict";var c=e("c964"),u=e.n(c);u.a},c964:function(n,t,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("79c5"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);                
