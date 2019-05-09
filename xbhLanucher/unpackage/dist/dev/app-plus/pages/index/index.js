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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../work/xbhLanucher/pages/index/index.nvue?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../work/xbhLanucher/common/util.js":
/*!********************************************************!*\
  !*** E:/crossPlatform/work/xbhLanucher/common/util.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.friendlyDate = friendlyDate;exports.getIp = getIp;exports.keyHandle = keyHandle;exports.Mac = void 0;function friendlyDate(timestamp) {
  var formats = {
    'year': '%n% 年前',
    'month': '%n% 月前',
    'day': '%n% 天前',
    'hour': '%n% 小时前',
    'minute': '%n% 分钟前',
    'second': '%n% 秒前' };


  var now = Date.now();
  var seconds = Math.floor((now - timestamp) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);

  var diffType = '';
  var diffValue = 0;
  if (years > 0) {
    diffType = 'year';
    diffValue = years;
  } else {
    if (months > 0) {
      diffType = 'month';
      diffValue = months;
    } else {
      if (days > 0) {
        diffType = 'day';
        diffValue = days;
      } else {
        if (hours > 0) {
          diffType = 'hour';
          diffValue = hours;
        } else {
          if (minutes > 0) {
            diffType = 'minute';
            diffValue = minutes;
          } else {
            diffType = 'second';
            diffValue = seconds === 0 ? seconds = 1 : seconds;
          }
        }
      }
    }
  }
  return formats[diffType].replace('%n%', diffValue);
}

var Mac = {
  address: function address() {
    var Build = plus.android.importClass('android.os.Build');
    if (Build.VERSION.SDK_INT < 23) //android 6.0以下版本
      {
        return this.WifiInfoMac();
      } else if (Build.VERSION.SDK_INT == 23) //android 6.0
      {
        return this.ReaderMac();
      } else {
      return this.NetworkMac();
    }
  },
  WifiInfoMac: function WifiInfoMac() {
    var Context = plus.android.importClass("android.content.Context");
    var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");
    var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
    var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");
    var wifiInfo = wifiManager.getConnectionInfo();
    return wifiInfo.getMacAddress();
  },
  ReaderMac: function ReaderMac() {
    try {
      var BufferedReader = plus.android.importClass("java.io.BufferedReader");
      var FileReader = plus.android.importClass("java.io.FileReader");
      var file = new FileReader("/sys/class/net/wlan0/address");
      var reader = new BufferedReader(file, 256);
      var address = reader.readLine();
      reader.close();
      return address;
    } catch (error) {
      this.NetworkMac();
      return "02:00:00:00:00:00";
    }
  },
  NetworkMac: function NetworkMac() {
    var NetworkInterface = plus.android.importClass("java.net.NetworkInterface");
    var networkInterface = NetworkInterface.getByName("eth1");
    if (networkInterface == null) {
      networkInterface = NetworkInterface.getByName("wlan0");
    }
    if (networkInterface == null) {
      this.isWifi();
      return "02:00:00:00:00:00";
    }
    var mac = networkInterface.getHardwareAddress();
    var macArr = [];
    for (var i in mac) {
      macArr.push(this.format(mac[i]));
    }
    return macArr.join(":");
  },
  format: function format(mac) {
    if (parseInt(mac) >= 0) {
      var numbder = parseInt(mac).toString(16);
      var num = numbder.length == 1 ? "0" + numbder : numbder;
      return num;
    } else {
      var numbder = parseInt(256 - Math.abs(mac)).toString(16);
      var num = numbder.length == 1 ? "0" + numbder : numbder;
      return num;
    }
  },
  isWifi: function isWifi() {
    if (plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_WIFI) {
      return "02:00:00:00:00:00";
    } else {
      plus.nativeUI.confirm("需要打开WiFi才能获取到MAC地址,是否去打开WiFi", function (event) {
        if (event.index == 0) {
          var main = plus.android.runtimeMainActivity();
          var Intent = plus.android.importClass('android.content.Intent');
          var intent = new Intent();
          intent.setClassName("com.android.settings", "com.android.settings.wifi.WifiSettings");
          main.startActivity(intent);
        }
      });
    }
  } };exports.Mac = Mac;


function getIp() {
  var ip = "127.0.0.1";
  if (plus.os.name == "Android") {
    //WifiManager  
    var Context = plus.android.importClass("android.content.Context");
    var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");
    var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
    var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");
    var wifiInfo = wifiManager.getConnectionInfo();
    ip = intToIp(wifiInfo.getIpAddress());
  } else if (plus.os.name == "iOS") {

  }
  return ip;
}

function intToIp(i) {
  return (i & 0xFF) + "." + (i >> 8 & 0xFF) + "." + (i >> 16 & 0xFF) + "." + (i >> 24 & 0xFF);
}

function keyHandle(keyCode, curIndex, curLinage, minIndex, maxIndex) {
  var code = keyCode;
  var index = +curIndex;
  var linage = +curLinage;
  var min = +minIndex;
  var max = +maxIndex;

  switch (code) {
    case '19': // 上
      index = index - linage < min ? index : index - linage;
      break;
    case '20': // 下
      index = index + linage > max ? index : index + linage;
      break;
    case '21': // 左
      index = index - 1 < min ? min : index - 1;
      break;
    case '22': // 右
      index = index + 1 > max ? max : index + 1;
      console.log(index, " at common\\util.js:170");
      break;
    default:
      break;}


  return index;
}

/***/ }),

/***/ "../../../../work/xbhLanucher/pages/index/index.nvue?entry":
/*!**********************************************************************!*\
  !*** E:/crossPlatform/work/xbhLanucher/pages/index/index.nvue?entry ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-loader!../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/style-rewriter?id=data-v-1c88b17b!../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=styles&index=0!./index.nvue */ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1c88b17b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../work/xbhLanucher/pages/index/index.nvue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/script-loader!babel-loader!../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=script&index=0!./index.nvue */ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../work/xbhLanucher/pages/index/index.nvue")

/* template */
var __vue_template__ = __webpack_require__(/*! !../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/template-compiler?id=data-v-1c88b17b!../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/weex-vue-loader/lib/selector?type=template&index=0!./index.nvue */ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1c88b17b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../work/xbhLanucher/pages/index/index.nvue")
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
__vue_options__.__file = "E:\\crossPlatform\\work\\xbhLanucher\\pages\\index\\index.nvue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1c88b17b"
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

/***/ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isFn = function isFn(v) {
  return typeof v === 'function';
};

var handlePromise = function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
};

var REGEX = /^on|^create|Sync$|Manager$|^pause/;
var API_NORMAL_LIST = ['os', 'stopRecord', 'stopVoice', 'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket', 'pageScrollTo', 'drawCanvas'];

var shouldPromise = function shouldPromise(name) {
  if (REGEX.test(name) && name !== 'createBLEConnection') {
    return false;
  }
  if (~API_NORMAL_LIST.indexOf(name)) {
    return false;
  }
  return true;
};

var promisify = function promisify(api) {
  return function () {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(undefined, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(undefined, [Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
      /* eslint-disable no-extend-native */
      Promise.prototype.finally = function (callback) {
        var promise = this.constructor;
        return this.then(function (value) {
          return promise.resolve(callback()).then(function () {
            return value;
          });
        }, function (reason) {
          return promise.resolve(callback()).then(function () {
            throw reason;
          });
        });
      };
    }));
  };
};

var plus = weex.requireModule('plus');
var globalEvent = weex.requireModule('globalEvent');

var id = 0;
var callbacks = {};

var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

globalEvent.addEventListener('plusMessage', function (e) {
  if (e.data.type === 'UniAppJsApi') {
    invoke(e.data.id, e.data.data);
  } else if (e.data.type === 'onNavigationBarButtonTap') {
    if (typeof onNavigationBarButtonTapCallback === 'function') {
      onNavigationBarButtonTapCallback(e.data.data);
    }
  }
});

var createCallback = function createCallback(args, type) {
  var callback = function callback(res) {
    if (isFn(args)) {
      args(res);
    } else if (args) {
      if (~res.errMsg.indexOf(':ok')) {
        isFn(args.success) && args.success(res);
      } else if (~res.errMsg.indexOf(':fail')) {
        isFn(args.fail) && args.fail(res);
      }
      isFn(args.complete) && args.complete(res);
    }
  };
  if (isFn(args) || args && isFn(args.callback)) {
    callback.keepAlive = true;
  }
  return callback;
};

var invoke = function invoke(callbackId, data) {
  var callback = callbacks[callbackId];
  if (callback) {
    callback(data);
    if (!callback.keepAlive) {
      delete callbacks[callbackId];
    }
  } else {
    console.error('callback[' + callbackId + '] is undefined');
  }
};

var publish = function publish(_ref) {
  var id = _ref.id,
      type = _ref.type,
      params = _ref.params;

  callbacks[id] = createCallback(params, type);
  plus.postMessage({
    id: id,
    type: type,
    params: params
  }, UNIAPP_SERVICE_NVUE_ID);
};

function postMessage(data) {
  plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
}

var createPublish = function createPublish(name) {
  return function (args) {
    publish({
      id: id++,
      type: name,
      params: args
    });
  };
};

var onNavigationBarButtonTapCallback = void 0;
function onNavigationBarButtonTap(callback) {
  onNavigationBarButtonTapCallback = callback;
}

function requireNativePlugin(pluginName) {
  return weex.requireModule(pluginName);
}

var dom = weex.requireModule('dom');

function loadFontFace(_ref) {
  var family = _ref.family,
      source = _ref.source,
      desc = _ref.desc,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  dom.addRule('fontFace', {
    fontFamily: family,
    src: source.replace(/"/g, '\'')
  });
  var res = {
    errMsg: 'loadFontFace:ok',
    status: 'loaded'
  };
  isFn(success) && success(res);
  isFn(complete) && complete(res);
}

var globalEvent$1 = weex.requireModule('globalEvent');

var callbacks$1 = [];

globalEvent$1.addEventListener('plusMessage', function (e) {
  if (e.data.type === 'UniAppReady') {
    ready.isUniAppReady = true;
    if (callbacks$1.length) {
      callbacks$1.forEach(function (callback) {
        return callback();
      });
      callbacks$1 = [];
    }
  }
});

function ready(callback) {
  if (typeof callback === 'function') {
    if (this.isUniAppReady) {
      callback();
    } else {
      callbacks$1.push(callback);
    }
  }
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var stream = weex.requireModule('stream');

// let requestTaskId = 0

var METHOD_GET = 'GET';
var METHOD_POST = 'POST';
var CONTENT_TYPE_JSON = 'application/json';
var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

var serialize = function serialize(data) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
  var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
      return JSON.stringify(data);
    } else {
      return Object.keys(data).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
      }).join('&');
    }
  }
  return data;
};

function request(_ref) {
  var url = _ref.url,
      data = _ref.data,
      header = _ref.header,
      _ref$method = _ref.method,
      method = _ref$method === undefined ? 'GET' : _ref$method,
      _ref$dataType = _ref.dataType,
      dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
      responseType = _ref.responseType,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  // requestTaskId++
  var aborted = false;

  var hasContentType = false;
  var headers = {};
  if (header) {
    for (var name in header) {
      if (!hasContentType && name.toLowerCase() === 'content-type') {
        hasContentType = true;
        headers['Content-Type'] = header[name];
      } else {
        headers[name] = header[name];
      }
    }
  }
  if (method === METHOD_GET && data) {
    url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') + serialize(data);
  }
  stream.fetch({
    url: url,
    method: method,
    headers: headers,
    type: dataType === 'json' ? 'json' : 'text',
    body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
  }, function (_ref2) {
    var status = _ref2.status,
        ok = _ref2.ok,
        statusText = _ref2.statusText,
        data = _ref2.data,
        headers = _ref2.headers;

    var ret = {};
    if (!status || status === -1 || aborted) {
      ret.errMsg = 'request:fail';
      isFn(fail) && fail(ret);
    } else {
      ret.data = data;
      ret.statusCode = status;
      ret.header = headers;
      isFn(success) && success(ret);
    }
    isFn(complete) && complete(ret);
  });
  return {
    abort: function abort() {
      aborted = true;
    }
  };
}

var storage = weex.requireModule('plusstorage');
var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

function getStorage(_ref) {
  var key = _ref.key,
      data = _ref.data,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
    if (ret.result === 'success') {
      var dataType = ret.data;
      storage.getItem(key, function (res) {
        if (res.result === 'success') {
          var result = res.data;
          if (dataType && result) {
            if (dataType !== 'String') {
              result = JSON.parse(result);
            }
            isFn(success) && success({
              errMsg: 'getStorage:ok',
              data: result
            });
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
        } else {
          res.errMsg = 'setStorage:fail';
          isFn(fail) && fail(res);
        }
        isFn(complete) && complete(res);
      });
    } else {
      ret.errMsg = 'setStorage:fail';
      isFn(fail) && fail(ret);
      isFn(complete) && complete(ret);
    }
  });
}
function setStorage(_ref2) {
  var key = _ref2.key,
      data = _ref2.data,
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;

  var dataType = 'String';
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    dataType = 'Object';
    data = JSON.stringify(data);
  }
  storage.setItem(key, data, function (res) {
    if (res.result === 'success') {
      storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
        if (ret.result === 'success') {
          isFn(success) && success({
            errMsg: 'setStorage:ok'
          });
        } else {
          ret.errMsg = 'setStorage:fail';
          isFn(fail) && fail(ret);
        }
      });
    } else {
      res.errMsg = 'setStorage:fail';
      isFn(fail) && fail(res);
    }
    isFn(complete) && complete(res);
  });
}

function removeStorage(_ref3) {
  var key = _ref3.key,
      data = _ref3.data,
      success = _ref3.success,
      fail = _ref3.fail,
      complete = _ref3.complete;

  storage.removeItem(key, function (res) {
    if (res.result === 'success') {
      isFn(success) && success({
        errMsg: 'removeStorage:ok'
      });
    } else {
      res.errMsg = 'removeStorage:fail';
      isFn(fail) && fail(res);
    }
    isFn(complete) && complete(res);
  });
  storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
}

function clearStorage(_ref4) {
  var key = _ref4.key,
      data = _ref4.data,
      success = _ref4.success,
      fail = _ref4.fail,
      complete = _ref4.complete;
}

var clipboard = weex.requireModule('clipboard');

function getClipboardData(_ref) {
  var success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  clipboard.getString(function (_ref2) {
    var data = _ref2.data;

    var res = {
      errMsg: 'getClipboardData:ok',
      data: data
    };
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  });
}

function setClipboardData(_ref3) {
  var data = _ref3.data,
      success = _ref3.success,
      fail = _ref3.fail,
      complete = _ref3.complete;

  var res = {
    errMsg: 'setClipboardData:ok'
  };
  clipboard.setString(data);
  isFn(success) && success(res);
  isFn(complete) && complete(res);
}



var api = /*#__PURE__*/Object.freeze({
  loadFontFace: loadFontFace,
  ready: ready,
  request: request,
  getStorage: getStorage,
  setStorage: setStorage,
  removeStorage: removeStorage,
  clearStorage: clearStorage,
  getClipboardData: getClipboardData,
  setClipboardData: setClipboardData
});

var wx = {
  uploadFile: true,
  downloadFile: true,
  chooseImage: true,
  previewImage: true,
  getImageInfo: true,
  saveImageToPhotosAlbum: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  saveFile: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  showToast: true,
  showLoading: true,
  hideToast: true,
  hideLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  navigateTo: true,
  redirectTo: true,
  reLaunch: true,
  switchTab: true,
  navigateBack: true,
  getProvider: true,
  login: true,
  getUserInfo: true,
  share: true,
  requestPayment: true,
  subscribePush: true,
  unsubscribePush: true,
  onPush: true,
  offPush: true
};

var uni = {};

var baseUni = {
  os: {
    nvue: true
  }
};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'os') {
        return {
          nvue: true
        };
      }
      if (name === 'postMessage') {
        return postMessage;
      }
      if (name === 'requireNativePlugin') {
        return requireNativePlugin;
      }
      if (name === 'onNavigationBarButtonTap') {
        return onNavigationBarButtonTap;
      }
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        return promisify(method);
      }
      return method;
    }
  });
} else {
  Object.keys(baseUni).forEach(function (key) {
    uni[key] = baseUni[key];
  });

  uni.postMessage = postMessage;

  uni.requireNativePlugin = requireNativePlugin;

  uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

  Object.keys(wx).forEach(function (name) {
    var method = api[name];
    if (!method) {
      method = createPublish(name);
    }
    if (shouldPromise(name)) {
      uni[name] = promisify(method);
    } else {
      uni[name] = method;
    }
  });
}

var uni$1 = uni;

/* harmony default export */ __webpack_exports__["default"] = (uni$1);


/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib/index.js!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!../../../../work/xbhLanucher/pages/index/index.nvue":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/script-loader.js!./node_modules/babel-loader/lib!./node_modules/weex-vue-loader/lib/selector.js?type=script&index=0!E:/crossPlatform/work/xbhLanucher/pages/index/index.nvue ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;









































var _util = __webpack_require__(/*! @/common/util.js */ "../../../../work/xbhLanucher/common/util.js"); //
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
var modal = weex.requireModule('modal');var globalEvent = weex.requireModule('globalEvent');var stream = weex.requireModule('stream') || {};var navigator = weex.requireModule('navigator');var _default = { data: function data() {return { dWidth: WXEnvironment.deviceWidth, dHeight: WXEnvironment.deviceHeight, isLandscape: +WXEnvironment.deviceWidth > +WXEnvironment.deviceHeight, //是否横屏（默认竖屏）
      shortcutList: [{ label: 'information', name: '信息发布', // 小百合播放器包名：com.harison.adver
        url: '/static/images/information.png', activeUrl: '/static/images/information_on.png', package: ['com.harison.adver'] }, { label: 'file_manager', name: '文件管理', // 资源管理器包名：3288 -> com.android.rk
        url: '/static/images/file_manager.png', activeUrl: '/static/images/file_manager_on.png', package: ['com.android.rk'] }, { label: 'time_switch', name: '定时开关', // 原生设置 | 系统设置包名：com.android.settings | com.lango.system.settings
        url: '/static/images/time_switch.png', activeUrl: '/static/images/time_switch_on.png', package: ['com.lango.system.settings', 'com.android.settings'] }, { label: 'network_settings', name: '网络设置', // 原生设置 | 系统设置包名：com.android.settings | com.lango.system.settings
        url: '/static/images/network_settings.png', activeUrl: '/static/images/network_settings_on.png', package: ['com.lango.system.settings', 'com.android.settings'] }, { label: 'browser', name: '浏览器', // 浏览器包名：com.android.browser
        url: '/static/images/browser.png', activeUrl: '/static/images/browser_on.png', package: ['com.android.browser'] }, { label: 'application', name: '应用列表',
        url: '/static/images/application.png',
        activeUrl: '/static/images/application_on.png' }],


      activeIndex: 0,
      netId: '00-00-00-00-00-00',
      netIp: '0.0.0.0',
      netWayUrl: '/static/images/lan_disabled.png',
      navigateToFlag: false };

  },
  created: function created() {var _this = this;
    globalEvent.addEventListener("plusMessage", function (e) {
      console.log(e.data.module, " at pages\\index\\index.nvue:100");

      if (e.data.res) {
        if (e.data.module === 'MAC&IP') {
          _this.netId = e.data.res.mac;
          _this.netIp = e.data.res.ip;
        } else if (e.data.module === 'keydown') {
          if (e.data.res === '23') {// 确定
            _this.launchApp(_this.shortcutList[_this.activeIndex], _this.activeIndex);
          } else {
            _this.activeIndex = (0, _util.keyHandle)(e.data.res, _this.activeIndex, _this.isLandscape ? 3 : 2, 0, 5);
            console.log(_this.activeIndex, " at pages\\index\\index.nvue:111");
          }
        }
      }
    });
  },
  mounted: function mounted() {
    var self = this;

    if (typeof uni !== 'undefined') {
      // 获取设备MAC地址和IP地址
      uni.postMessage({ module: "MAC&IP" });

      // 获取设备网络连接状态
      uni.getNetworkType({
        success: function success(res) {
          var type = res.networkType;

          modal.toast({
            message: res.networkType });


          if (type === 'wifi') {
            self.netWayUrl = '/static/images/wifi_four.png';
          } else if (type === '2g' || type === '3g' || type === '4g') {
            self.netWayUrl = '/static/images/mobile_network_four.png';
          } else if (type === 'ethernet') {
            self.netWayUrl = '/static/images/lan.png';
          } else if (type === 'unknown') {
            self.netWayUrl = '/static/images/lan_unavailable.png';
          }
        } });


      // 动态设置 focusable 和 focusableInTouchMode
      /*uni.postMessage({
      	module: 'mounted'
      });*/
    }
  },
  methods: {
    launchApp: function launchApp(obj, index) {
      if (this.navigateToFlag) return false;

      var self = this;
      this.activeIndex = index;
      modal.toast({
        message: obj.name });


      if (typeof uni !== 'undefined') {
        if (obj.label === 'application') {
          this.navigateToFlag = true;

          uni.navigateTo({
            url: '../appList/appList',
            complete: function complete() {
              self.navigateToFlag = false;
            } });

        } else if (obj.label === 'information') {
          this.navigateToFlag = true;

          uni.navigateTo({
            url: '../infoPublish/infoPublishIndex',
            complete: function complete() {
              self.navigateToFlag = false;
            } });

        } else {
          // 调启外部应用
          uni.postMessage({
            module: 'launchApp',
            package: obj.package });

        }
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ "./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1c88b17b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!../../../../work/xbhLanucher/pages/index/index.nvue":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/style-loader.js!./node_modules/weex-vue-loader/lib/style-rewriter.js?id=data-v-1c88b17b!./node_modules/weex-vue-loader/lib/selector.js?type=styles&index=0!E:/crossPlatform/work/xbhLanucher/pages/index/index.nvue ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1c88b17b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!../../../../work/xbhLanucher/pages/index/index.nvue":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/weex-vue-loader/lib/template-compiler.js?id=data-v-1c88b17b!./node_modules/weex-vue-loader/lib/selector.js?type=template&index=0!E:/crossPlatform/work/xbhLanucher/pages/index/index.nvue ***!
  \****************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("IP : " + _vm._s(_vm.netIp))])]), _c('image', {
    class: [_vm.isLandscape ? 'is-landscape-net-way' : 'net-way'],
    attrs: {
      "resize": "contain",
      "src": _vm.netWayUrl
    }
  })]), _c('div', {
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
  })]), _vm._l((_vm.shortcutList), function(shortcut, index) {
    return (_vm.shortcutList.length > 0) ? _c('div', {
      key: index,
      class: ['shortcut-cell', _vm.isLandscape ? 'is-landscape-shortcut-cell' : ''],
      on: {
        "click": function($event) {
          _vm.launchApp(shortcut, index)
        }
      }
    }, [_c('image', {
      class: ['shortcut-img', _vm.isLandscape ? 'is-landscape-shortcut-img' : ''],
      attrs: {
        "src": _vm.activeIndex === index ? shortcut.activeUrl : shortcut.url
      }
    }), _c('text', {
      class: ['shortcut-txt', _vm.isLandscape ? 'is-landscape-shortcut-txt' : '', _vm.activeIndex === index ? 'shortcut-txt-active' : '']
    }, [_vm._v(_vm._s(shortcut.name))])]) : _vm._e()
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });