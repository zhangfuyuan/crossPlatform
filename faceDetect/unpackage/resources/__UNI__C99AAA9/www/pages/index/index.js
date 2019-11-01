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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../work/faceDetect/pages/index/index.nvue?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../work/faceDetect/pages/index/index.nvue?entry":
/*!*********************************************************************!*\
  !*** E:/crossPlatform/work/faceDetect/pages/index/index.nvue?entry ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-loader!../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-178751bd!../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-178751bd!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../work/faceDetect/pages/index/index.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/script-loader!babel-loader!../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../work/faceDetect/pages/index/index.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/template-compiler?id=data-v-178751bd!../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-178751bd!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../work/faceDetect/pages/index/index.nvue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-178751bd"
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

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../work/faceDetect/pages/index/index.nvue":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!E:/crossPlatform/work/faceDetect/pages/index/index.nvue ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = {
  data: function data() {
    return {
      dWidth: WXEnvironment.deviceWidth,
      dHeight: WXEnvironment.deviceHeight,
      isLandscape: +WXEnvironment.deviceWidth > +WXEnvironment.deviceHeight,
      //是否横屏（默认竖屏）
      shortcutList: [{
        label: 'information',
        name: '信息发布',
        // 小百合播放器包名：com.harison.adver
        url: '/static/images/information.png',
        activeUrl: '/static/images/information_on.png',
        package: ['com.harison.adver']
      }, {
        label: 'file_manager',
        name: '文件管理',
        // 资源管理器包名：3288 -> com.android.rk
        url: '/static/images/file_manager.png',
        activeUrl: '/static/images/file_manager_on.png',
        package: ['com.android.rk']
      }, {
        label: 'time_switch',
        name: '定时开关',
        // 原生设置 | 系统设置包名：com.android.settings | com.lango.system.settings
        url: '/static/images/time_switch.png',
        activeUrl: '/static/images/time_switch_on.png',
        package: ['com.lango.system.settings', 'com.android.settings']
      }, {
        label: 'network_settings',
        name: '网络设置',
        // 原生设置 | 系统设置包名：com.android.settings | com.lango.system.settings
        url: '/static/images/network_settings.png',
        activeUrl: '/static/images/network_settings_on.png',
        package: ['com.lango.system.settings', 'com.android.settings']
      }, {
        label: 'browser',
        name: '浏览器',
        // 浏览器包名：com.android.browser
        url: '/static/images/browser.png',
        activeUrl: '/static/images/browser_on.png',
        package: ['com.android.browser']
      }, {
        label: 'application',
        name: '应用列表',
        url: '/static/images/application.png',
        activeUrl: '/static/images/application_on.png'
      }],
      activeIndex: 0,
      netId: '00-00-00-00-00-00',
      netIp: '0.0.0.0',
      netWayUrl: '/static/images/lan_disabled.png',
      navigateToFlag: false
    };
  },
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    launchApp: function launchApp(obj, index) {}
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-178751bd!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../work/faceDetect/pages/index/index.nvue":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-178751bd!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!E:/crossPlatform/work/faceDetect/pages/index/index.nvue ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "home-wrap": {
    "width": "750",
    "backgroundColor": "#2C2C2C",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "home-net": {
    "position": "absolute",
    "top": "21",
    "right": "21",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "is-landscape-home-net": {
    "top": "12",
    "right": "12"
  },
  "net-info": {
    "marginRight": "28"
  },
  "is-landscape-net-info": {
    "marginRight": "16"
  },
  "net-id": {
    "color": "#ffffff",
    "fontSize": "12",
    "marginBottom": "12"
  },
  "is-landscape-net-id": {
    "fontSize": "7",
    "marginBottom": "7"
  },
  "net-ip": {
    "fontSize": "12",
    "color": "#ffffff"
  },
  "is-landscape-net-ip": {
    "fontSize": "7"
  },
  "net-way": {
    "width": "28",
    "height": "28"
  },
  "is-landscape-net-way": {
    "width": "16",
    "height": "16"
  },
  "home-cont": {
    "width": "523",
    "height": "783",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "position": "relative"
  },
  "is-landscape-home-cont": {
    "width": "442",
    "height": "294"
  },
  "cut-box": {
    "position": "absolute",
    "top": "0",
    "left": "0"
  },
  "cut-line-col1": {
    "position": "absolute",
    "top": "0",
    "left": "259",
    "width": "4",
    "height": "783",
    "backgroundImage": "linear-gradient(to right, #111111, #464646)"
  },
  "cut-line-row1": {
    "position": "absolute",
    "top": "259",
    "left": "0",
    "width": "522",
    "height": "4",
    "backgroundImage": "linear-gradient(to bottom, #111111, #464646)"
  },
  "cut-line-row2": {
    "position": "absolute",
    "top": "520",
    "left": "0",
    "width": "522",
    "height": "4",
    "backgroundImage": "linear-gradient(to bottom, #111111, #464646)"
  },
  "is-landscape-cut-line-row1": {
    "position": "absolute",
    "top": "145",
    "left": "0",
    "width": "441",
    "height": "4",
    "backgroundImage": "linear-gradient(to bottom, #111111, #464646)"
  },
  "is-landscape-cut-line-col1": {
    "position": "absolute",
    "top": "0",
    "left": "145",
    "width": "4",
    "height": "294",
    "backgroundImage": "linear-gradient(to right, #111111, #464646)"
  },
  "is-landscape-cut-line-col2": {
    "position": "absolute",
    "top": "0",
    "left": "292",
    "width": "4",
    "height": "294",
    "backgroundImage": "linear-gradient(to right, #111111, #464646)"
  },
  "shortcut-cell": {
    "width": "261",
    "height": "261",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "is-landscape-shortcut-cell": {
    "width": "147",
    "height": "147"
  },
  "hide-input": {
    "backgroundColor": "#ffffff",
    "paddingLeft": "10",
    "borderWidth": "1",
    "height": "80",
    "fontSize": "30",
    "borderRadius": "10",
    "width": "80",
    "opacity": 0
  },
  "shortcut-img": {
    "width": "82",
    "height": "82"
  },
  "is-landscape-shortcut-img": {
    "width": "47",
    "height": "47"
  },
  "shortcut-txt": {
    "paddingTop": "32",
    "fontSize": "20",
    "color": "#c0c6c9"
  },
  "is-landscape-shortcut-txt": {
    "paddingTop": "18",
    "fontSize": "11"
  },
  "shortcut-txt-active": {
    "color": "#3babd0"
  }
}

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-178751bd!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../work/faceDetect/pages/index/index.nvue":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-178751bd!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!E:/crossPlatform/work/faceDetect/pages/index/index.nvue ***!
  \***************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["home-wrap"]
  }, [_c('div', {
    class: ['home-net', _vm.isLandscape ? 'is-landscape-home-net' : '']
  }, [_c('div', {
    class: [_vm.isLandscape ? 'is-landscape-net-info' : 'net-info']
  }, [_c('text', {
    class: ['net-id', _vm.isLandscape ? 'is-landscape-net-id' : '']
  }, [_vm._v("ID : " + _vm._s(_vm.netId))]), _c('text', {
    class: ['net-ip', _vm.isLandscape ? 'is-landscape-net-ip' : '']
  }, [_vm._v("IP : " + _vm._s(_vm.netIp))])])]), _c('div', {
    class: ['home-cont', _vm.isLandscape ? 'is-landscape-home-cont' : '']
  }, [(_vm.isLandscape) ? _c('div', {
    staticClass: ["cut-box"]
  }, [_c('div', {
    staticClass: ["is-landscape-cut-line-row1"]
  }), _c('div', {
    staticClass: ["is-landscape-cut-line-col1"]
  }), _c('div', {
    staticClass: ["is-landscape-cut-line-col2"]
  })]) : _c('div', {
    staticClass: ["cut-box"]
  }, [_c('div', {
    staticClass: ["cut-line-col1"]
  }), _c('div', {
    staticClass: ["cut-line-row1"]
  }), _c('div', {
    staticClass: ["cut-line-row2"]
  })])])])
},staticRenderFns: []}

/***/ })

/******/ });