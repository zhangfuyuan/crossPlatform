// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../work/testNvue/testNvue/pages/appList/appList.nvue?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../work/testNvue/testNvue/pages/appList/appList.nvue?entry":
/*!********************************************************************************!*\
  !*** E:/crossPlatform/work/testNvue/testNvue/pages/appList/appList.nvue?entry ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-loader!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-8c02e41e!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./appList.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-8c02e41e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../work/testNvue/testNvue/pages/appList/appList.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/script-loader!babel-loader!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=script&index=0!./appList.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../work/testNvue/testNvue/pages/appList/appList.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/template-compiler?id=data-v-8c02e41e!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=template&index=0!./appList.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-8c02e41e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../work/testNvue/testNvue/pages/appList/appList.nvue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\crossPlatform\\work\\testNvue\\testNvue\\pages\\appList\\appList.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8c02e41e"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../work/testNvue/testNvue/pages/appList/appList.nvue":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!E:/crossPlatform/work/testNvue/testNvue/pages/appList/appList.nvue ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var toast = function toast(message) {
  modal.toast({
    message: message,
    duration: 1 });

};var _default =

{
  data: function data() {
    return {
      text: '0123456' };

  },
  methods: {
    setRange: function setRange() {
      this.$refs.range.setSelectionRange(1, 4);
    },
    getRange: function getRange() {
      this.$refs.range.getSelectionRange(function (params) {
        toast("\u5F53\u524D\u6587\u672C\u9009\u533A\u4E3A ".concat(params.selectionStart, " ~ ").concat(params.selectionEnd));
      });
    },
    focus: function focus() {
      this.$refs.widget.focus();
    },
    blur: function blur() {
      this.$refs.widget.blur();
    },
    handleFocus: function handleFocus() {
      toast('获得焦点');
    },
    handleBlur: function handleBlur() {
      toast('失去焦点');
    },
    handleReturn: function handleReturn() {
      toast('点击了回车按钮');
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-8c02e41e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../work/testNvue/testNvue/pages/appList/appList.nvue":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-8c02e41e!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!E:/crossPlatform/work/testNvue/testNvue/pages/appList/appList.nvue ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "holder": {
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "title": {
    "fontSize": "50",
    "color": "#FF0000",
    "marginBottom": "20"
  },
  "warning": {
    "color": "#FF0000"
  },
  "item": {
    "marginBottom": "20",
    "borderLeftWidth": "10",
    "borderLeftColor": "#0088fb",
    "backgroundColor": "#ececec",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "30"
  },
  "btn-holder": {
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "btn": {
    "backgroundColor": "#0088fb",
    "marginBottom": "10",
    "height": "60",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "10",
    "paddingBottom": "10",
    "borderRadius": "6",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "30"
  },
  "btn-text": {
    "color": "#ffffff",
    "fontSize": "30"
  },
  "label": {
    "fontSize": "30",
    "marginBottom": "10"
  },
  "input": {
    "backgroundColor": "#ffffff",
    "paddingLeft": "10",
    "borderWidth": "1",
    "height": "80",
    "fontSize": "30",
    "borderRadius": "10",
    "width": "600"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-8c02e41e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../work/testNvue/testNvue/pages/appList/appList.nvue":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-8c02e41e!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!E:/crossPlatform/work/testNvue/testNvue/pages/appList/appList.nvue ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', [_c('div', {
    staticClass: ["holder"]
  }, [_vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _c('div', {
    staticClass: ["item"]
  }, [_c('div', {
    staticClass: ["btn-holder"]
  }, [_c('div', {
    staticClass: ["btn"],
    on: {
      "click": _vm.focus
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("focus")])]), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": _vm.blur
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("blur")])])]), _c('input', {
    ref: "widget",
    staticClass: ["input"],
    attrs: {
      "type": "text"
    },
    on: {
      "focus": _vm.handleFocus,
      "blur": _vm.handleBlur,
      "return": _vm.handleReturn
    }
  })]), _c('div', {
    staticClass: ["item"]
  }, [_c('div', {
    staticClass: ["btn-holder"]
  }, [_c('div', {
    staticClass: ["btn"],
    on: {
      "click": _vm.setRange
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("setSelectionRange (Android & IOS)")])]), _c('div', {
    staticClass: ["btn"],
    on: {
      "click": _vm.getRange
    }
  }, [_c('text', {
    staticClass: ["btn-text"]
  }, [_vm._v("getSelectionRange")])])]), _c('input', {
    ref: "range",
    staticClass: ["input"],
    attrs: {
      "value": _vm.text,
      "type": "text"
    }
  })])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("type = \"text\"")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("type = \"password\"")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("type = \"tel\"")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "tel"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("type = \"date\" (Android & IOS)")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "date"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("type = \"time\" (Android & IOS)")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "time"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("type = \"numuber\"")]), _c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "number"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });