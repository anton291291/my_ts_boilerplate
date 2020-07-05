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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nmodule.exports = function (originalModule) {\n  if (!originalModule.webpackPolyfill) {\n    var module = Object.create(originalModule); // module.parent = undefined by default\n\n    if (!module.children) module.children = [];\n    Object.defineProperty(module, \"loaded\", {\n      enumerable: true,\n      get: function get() {\n        return module.l;\n      }\n    });\n    Object.defineProperty(module, \"id\", {\n      enumerable: true,\n      get: function get() {\n        return module.i;\n      }\n    });\n    Object.defineProperty(module, \"exports\", {\n      enumerable: true\n    });\n    module.webpackPolyfill = 1;\n  }\n\n  return module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"core-js/modules/es.regexp.exec\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace */ \"core-js/modules/es.string.replace\");\n/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/App */ \"./src/App.tsx\");\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_6___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_6___default.a.static('./build'));\napp.get('/*', function (req, res) {\n  var context = {};\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_7___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.listen(PORT, function () {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PORT, \"PORT\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\server\\\\index.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\server\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/Routes */ \"./src/routes/Routes.tsx\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.ts\");\n/* harmony import */ var _global_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/GlobalStyle */ \"./src/global/GlobalStyle.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"Provider\"], {\n    store: _store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_global_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__[\"GlobalStyle\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes_Routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)));\n};\n\nvar _default = Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__[\"hot\"])(App);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\App.tsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\App.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/components/Cell/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Cell/index.tsx ***!
  \***************************************/
/*! exports provided: StyledCell, Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledCell\", function() { return StyledCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar StyledCell = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"Cell__StyledCell\",\n  componentId: \"ybaiwl-0\"\n})([\"background:\", \";border:1px solid darkgrey;padding:2px;width:20px;height:20px;font-size:10px;display:flex;justify-content:center;align-items:center;color:white;text-align:center;cursor:pointer;transition:all 0.2s;user-select:none;\"], function (_ref) {\n  var isClicked = _ref.isClicked;\n  return isClicked ? 'darkslateblue' : 'transparent';\n});\nvar Cell = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(__signature__(function Cell(props) {\n  var index = props.index,\n      isClicked = props.isClicked;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (index) {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__[\"CellsActions\"].clickCell(index));\n  }, [dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledCell, {\n    onClick: function onClick() {\n      return handleClick(index);\n    },\n    isClicked: isClicked\n  });\n}, \"useDispatch{dispatch}\\nuseCallback{handleClick}\", function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"]];\n}));\nCell.displayName = 'Cell';\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(StyledCell, \"StyledCell\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Cell\\\\index.tsx\");\n  reactHotLoader.register(Cell, \"Cell\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Cell\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/Cell/index.tsx?");

/***/ }),

/***/ "./src/components/DasboardBtn/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/DasboardBtn/index.tsx ***!
  \**********************************************/
/*! exports provided: Btn, StyledDrawer, DasboardBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Btn\", function() { return Btn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledDrawer\", function() { return StyledDrawer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DasboardBtn\", function() { return DasboardBtn; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"core-js/modules/es.symbol\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"core-js/modules/es.symbol.description\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"core-js/modules/es.symbol.iterator\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ \"core-js/modules/es.array.from\");\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"core-js/modules/es.array.iterator\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"core-js/modules/es.array.slice\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"core-js/modules/es.function.name\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"core-js/modules/es.regexp.to-string\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"core-js/modules/es.string.iterator\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"core-js/modules/web.dom-collections.iterator\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Drawer */ \"@material-ui/core/Drawer\");\n/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions/index.ts\");\n/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ \"@material-ui/icons/Dashboard\");\n/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _SizeSlider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../SizeSlider */ \"./src/components/SizeSlider/index.tsx\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/utils/helper */ \"./src/utils/helper/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar Btn = styled_components__WEBPACK_IMPORTED_MODULE_17___default()(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_14___default.a).withConfig({\n  displayName: \"DasboardBtn__Btn\",\n  componentId: \"sc-1wy4hl4-0\"\n})([\"color:white;cursor:pointer;position:absolute;left:2px;transition:transform 0.8s;&:hover{transform:rotate(360deg);}\"]);\nvar StyledDrawer = styled_components__WEBPACK_IMPORTED_MODULE_17___default()(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_12___default.a).withConfig({\n  displayName: \"DasboardBtn__StyledDrawer\",\n  componentId: \"sc-1wy4hl4-1\"\n})([\"&&{.MuiDrawer-paper{background-color:rgba(0,0,0,0.7);box-shadow:0 0 10px 0 rgba(255,255,255,0.4);}}\"]);\nvar DasboardBtn = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"memo\"])(__signature__(function DashboardBtn(props) {\n  _objectDestructuringEmpty(props);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      isOpen = _useState2[0],\n      setIsOpen = _useState2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__[\"useSelector\"])(function (state) {\n    return state.grid;\n  }),\n      _useSelector$axis = _useSelector.axis,\n      x = _useSelector$axis.x,\n      y = _useSelector$axis.y,\n      speed = _useSelector.speed,\n      randomIndex = _useSelector.randomIndex;\n\n  var length = x * y;\n  var handleOpen = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useCallback\"])(function () {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__[\"PlayerActions\"].setIsStop());\n    setIsOpen(!isOpen);\n  }, [dispatch]);\n\n  var handleClose = function handleClose() {\n    setIsOpen(false);\n  };\n\n  var handleChangeY = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useCallback\"])(function (event, newValue) {\n    if (newValue * x > length) {\n      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__[\"AxisActions\"].increaseYaxis(newValue));\n    } else if (newValue * x < length) {\n      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__[\"AxisActions\"].decreaseYaxis(newValue));\n    }\n  }, [y]);\n  var handleChangeX = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useCallback\"])(function (event, newValue) {\n    if (newValue * y > length) {\n      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__[\"AxisActions\"].increaseXaxis(newValue));\n    } else if (newValue * y < length) {\n      dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__[\"AxisActions\"].decreaseXaxis(newValue));\n    }\n  }, [x]);\n  var handleChangeSpeed = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useCallback\"])(function (event, newValue) {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__[\"PlayerActions\"].setSpeed(newValue));\n  }, [dispatch]);\n  var handleChangeRandomIndex = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useCallback\"])(function (event, newValue) {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_13__[\"PlayerActions\"].setRandomIndex(newValue));\n  }, [dispatch]);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      maxWidth = _useState4[0],\n      setMaxWidth = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useState\"])(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      maxHeight = _useState6[0],\n      setMaxHeight = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_15__[\"useEffect\"])(function () {\n    setMaxHeight(Object(_utils_helper__WEBPACK_IMPORTED_MODULE_19__[\"checkGridMaxHeight\"])());\n    setMaxWidth(Object(_utils_helper__WEBPACK_IMPORTED_MODULE_19__[\"checkGridMaxWidth\"])());\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_15___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(Btn, {\n    onClick: handleOpen\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(StyledDrawer, {\n    anchor: \"bottom\",\n    open: isOpen,\n    onClose: handleClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    display: \"flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    pl: \"20px\",\n    display: \"flex\",\n    flexDirection: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_SizeSlider__WEBPACK_IMPORTED_MODULE_18__[\"SizeSlider\"], {\n    label: \"Y-axis\",\n    min: 5,\n    max: maxHeight,\n    value: y,\n    onChange: handleChangeY\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_SizeSlider__WEBPACK_IMPORTED_MODULE_18__[\"SizeSlider\"], {\n    label: \"X-axis\",\n    min: 5,\n    max: maxWidth,\n    value: x,\n    onChange: handleChangeX\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_11___default.a, {\n    borderLeft: \"1px solid rgb(255 255 255 /0.1)\",\n    pr: \"20px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    width: \"50%\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_SizeSlider__WEBPACK_IMPORTED_MODULE_18__[\"SizeSlider\"], {\n    label: \"Speed\",\n    min: 1,\n    max: 30,\n    value: speed,\n    onChange: handleChangeSpeed\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(_SizeSlider__WEBPACK_IMPORTED_MODULE_18__[\"SizeSlider\"], {\n    label: \"Random Index\",\n    step: 0.1,\n    min: 0.1,\n    max: 0.9,\n    value: randomIndex,\n    onChange: handleChangeRandomIndex\n  })))));\n}, \"useState{[isOpen, setIsOpen](false)}\\nuseDispatch{dispatch}\\nuseSelector{{\\r\\n        axis: { x, y },\\r\\n        speed,\\r\\n        randomIndex\\r\\n    }}\\nuseCallback{handleOpen}\\nuseCallback{handleChangeY}\\nuseCallback{handleChangeX}\\nuseCallback{handleChangeSpeed}\\nuseCallback{handleChangeRandomIndex}\\nuseState{[maxWidth, setMaxWidth](null)}\\nuseState{[maxHeight, setMaxHeight](null)}\\nuseEffect{}\", function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_16__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_16__[\"useSelector\"]];\n}));\nDasboardBtn.displayName = 'DashboardBtn';\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Btn, \"Btn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\DasboardBtn\\\\index.tsx\");\n  reactHotLoader.register(StyledDrawer, \"StyledDrawer\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\DasboardBtn\\\\index.tsx\");\n  reactHotLoader.register(DasboardBtn, \"DasboardBtn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\DasboardBtn\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/DasboardBtn/index.tsx?");

/***/ }),

/***/ "./src/components/EntranceForm/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/EntranceForm/index.tsx ***!
  \***********************************************/
/*! exports provided: EntranceForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EntranceForm\", function() { return EntranceForm; });\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Fade */ \"@material-ui/core/Fade\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StyledComponents */ \"./src/components/StyledComponents/index.tsx\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions/index.ts\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/helper */ \"./src/utils/helper/index.ts\");\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"EntranceForm__FormContainer\",\n  componentId: \"qvz05a-0\"\n})([\"width:600px;margin:auto;background-color:rgba(0,0,0,0.7);border:1px solid white;border-radius:10px;box-shadow:0 0 7px 0 white;padding:20px;display:flex;align-items:center;flex-direction:column;\"]);\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"EntranceForm__Header\",\n  componentId: \"qvz05a-1\"\n})([\"&&{margin-bottom:30px;}\"]);\nvar EntranceForm = function EntranceForm(props) {\n  _objectDestructuringEmpty(props);\n\n  var state = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"])(function (state) {\n    return state.grid;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"])();\n  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_5__[\"useHistory\"])();\n  var handleReset = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"PlayerActions\"].setIsPlay());\n  }, [dispatch]);\n\n  var handleStart = function handleStart() {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__[\"GreetingFormActions\"].setStart());\n    history.push('/game');\n  };\n\n  var handleForm = function handleForm(e) {\n    Object(_utils_helper__WEBPACK_IMPORTED_MODULE_8__[\"setLogIn\"])(e.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    timeout: 500,\n    in: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Header, {\n    variant: \"h4\"\n  }, \"Welcome to Conway`s Game of Life\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__[\"StyledInput\"], {\n    required: true,\n    label: \"Enter your name\",\n    variant: \"outlined\",\n    onChange: handleForm\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__[\"StyledBtn\"], {\n    onClick: handleStart\n  }, \"Start\"))));\n};\n\n__signature__(EntranceForm, \"useSelector{state}\\nuseDispatch{dispatch}\\nuseHistory{history}\\nuseCallback{handleReset}\", function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_6__[\"useDispatch\"], react_router__WEBPACK_IMPORTED_MODULE_5__[\"useHistory\"]];\n});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FormContainer, \"FormContainer\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\EntranceForm\\\\index.tsx\");\n  reactHotLoader.register(Header, \"Header\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\EntranceForm\\\\index.tsx\");\n  reactHotLoader.register(EntranceForm, \"EntranceForm\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\EntranceForm\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/EntranceForm/index.tsx?");

/***/ }),

/***/ "./src/components/Grid/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Grid/index.tsx ***!
  \***************************************/
/*! exports provided: Container, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return Grid; });\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"core-js/modules/es.array.map\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cell */ \"./src/components/Cell/index.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"Grid__Container\",\n  componentId: \"sc-82w3lp-0\"\n})([\"display:flex;flex-wrap:wrap;transition:all 0.01s;width:\", \";height:\", \";margin:auto;box-shadow:0 0 20px 0 rgba(255,255,255,0.4);border:1px solid darkgrey;\"], function (_ref) {\n  var width = _ref.width;\n  return \"\".concat(26 * width, \"px\");\n}, function (_ref2) {\n  var height = _ref2.height;\n  return \"\".concat(26 * height, \"px\");\n});\nvar Grid = function Grid(props) {\n  _objectDestructuringEmpty(props);\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.grid;\n  }),\n      cells = _useSelector.cells,\n      _useSelector$axis = _useSelector.axis,\n      x = _useSelector$axis.x,\n      y = _useSelector$axis.y;\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {\n    width: x,\n    height: y\n  }, cells.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Cell__WEBPACK_IMPORTED_MODULE_3__[\"Cell\"], {\n      isClicked: item.isClicked,\n      key: item.index,\n      index: item.index\n    });\n  }));\n};\n\n__signature__(Grid, \"useSelector{{\\r\\n        cells,\\r\\n        axis: { x, y }\\r\\n    }}\", function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Container, \"Container\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Grid\\\\index.tsx\");\n  reactHotLoader.register(Grid, \"Grid\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Grid\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/Grid/index.tsx?");

/***/ }),

/***/ "./src/components/HelloWorld/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/HelloWorld/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../StyledComponents */ \"./src/components/StyledComponents/index.tsx\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar HelloWorld = function HelloWorld(props) {\n  var username = props.username;\n\n  var handleClick = function handleClick() {\n    alert('Click!');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_1__[\"StyledBtn\"], {\n    onClick: handleClick\n  }, \"Hello World \", username);\n};\n\nvar _default = HelloWorld;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(HelloWorld, \"HelloWorld\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\HelloWorld\\\\index.tsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\HelloWorld\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/HelloWorld/index.tsx?");

/***/ }),

/***/ "./src/components/LogoutBtn/index.tsx":
/*!********************************************!*\
  !*** ./src/components/LogoutBtn/index.tsx ***!
  \********************************************/
/*! exports provided: LogoutBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoutBtn\", function() { return LogoutBtn; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ \"@material-ui/icons/ExitToApp\");\n/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/helper */ \"./src/utils/helper/index.ts\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar Logout = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({\n  displayName: \"LogoutBtn__Logout\",\n  componentId: \"sc-16zpe0z-0\"\n})([\"position:absolute;right:5px;color:white;transition:all 1s;&:hover{transform:scale(1.2);}\"]);\nvar LogoutBtn = function LogoutBtn(props) {\n  _objectDestructuringEmpty(props);\n\n  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_3__[\"useHistory\"])();\n\n  var handleLogout = function handleLogout() {\n    Object(_utils_helper__WEBPACK_IMPORTED_MODULE_4__[\"logOut\"])();\n    history.push('/');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logout, {\n    onClick: handleLogout\n  }));\n};\n\n__signature__(LogoutBtn, \"useHistory{history}\", function () {\n  return [react_router__WEBPACK_IMPORTED_MODULE_3__[\"useHistory\"]];\n});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Logout, \"Logout\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\LogoutBtn\\\\index.tsx\");\n  reactHotLoader.register(LogoutBtn, \"LogoutBtn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\LogoutBtn\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/LogoutBtn/index.tsx?");

/***/ }),

/***/ "./src/components/Player/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Player/index.tsx ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.every */ \"core-js/modules/es.array.every\");\n/* harmony import */ var core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"core-js/modules/es.function.name\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ \"@material-ui/icons/PlayArrow\");\n/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Stop */ \"@material-ui/icons/Stop\");\n/* harmony import */ var _material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Pause__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Pause */ \"@material-ui/icons/Pause\");\n/* harmony import */ var _material_ui_icons_Pause__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Pause__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Shuffle */ \"@material-ui/icons/Shuffle\");\n/* harmony import */ var _material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions/index.ts\");\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/utils/helper */ \"./src/utils/helper/index.ts\");\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\nvar Stop = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_icons_Stop__WEBPACK_IMPORTED_MODULE_7___default.a).withConfig({\n  displayName: \"Player__Stop\",\n  componentId: \"sc-19bymjj-0\"\n})([\"color:white;transition:all 1s;&:hover{transform:scale(1.2);}\"]);\nvar Random = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_icons_Shuffle__WEBPACK_IMPORTED_MODULE_9___default.a).withConfig({\n  displayName: \"Player__Random\",\n  componentId: \"sc-19bymjj-1\"\n})([\"color:white;transition:all 1s;margin-right:20px;&:hover{transform:scale(1.2);}\"]);\nvar Play = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_6___default.a).withConfig({\n  displayName: \"Player__Play\",\n  componentId: \"sc-19bymjj-2\"\n})([\"color:white;transition:all 1s;margin-left:20px;&:hover{transform:scale(1.2);}\"]);\nvar Pause = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_icons_Pause__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({\n  displayName: \"Player__Pause\",\n  componentId: \"sc-19bymjj-3\"\n})([\"color:white;transition:all 1s;margin-left:20px;&:hover{transform:scale(1.2);}\"]);\nvar IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({\n  displayName: \"Player__IconContainer\",\n  componentId: \"sc-19bymjj-4\"\n})([\"margin:0 5px;height:23px;\"]);\nvar GenField = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({\n  displayName: \"Player__GenField\",\n  componentId: \"sc-19bymjj-5\"\n})([\"width:120px;\"]);\nvar NameField = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({\n  displayName: \"Player__NameField\",\n  componentId: \"sc-19bymjj-6\"\n})([\"\"]);\nvar Player = function Player(props) {\n  _objectDestructuringEmpty(props);\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"useSelector\"])(function (state) {\n    return state.grid;\n  }),\n      cells = _useSelector.cells,\n      gen = _useSelector.gen,\n      name = _useSelector.name,\n      isPlay = _useSelector.isPlay;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useLayoutEffect\"])(function () {\n    Object(_utils_helper__WEBPACK_IMPORTED_MODULE_12__[\"isLoggedIn\"])() && dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__[\"PlayerActions\"].getName());\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    cells.every(function (obj) {\n      return obj.isClicked === false;\n    }) && (dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__[\"PlayerActions\"].setIsStop()), dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__[\"PlayerActions\"].setGen(1)));\n  }, [cells]);\n  var handleReset = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])(function () {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__[\"PlayerActions\"].setReset());\n  }, [dispatch]);\n  var handlePlay = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])(function () {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__[\"PlayerActions\"].setIsPlay());\n  }, [dispatch]);\n  var handleRandom = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])(function () {\n    handleReset();\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__[\"CellsActions\"].randomCells());\n  }, [dispatch, handleReset]);\n  var handlePause = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useCallback\"])(function () {\n    dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_11__[\"PlayerActions\"].setIsStop());\n  }, [dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    display: \"flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(GenField, null, \"Generation: \", gen), isPlay ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Pause, {\n    onClick: handlePause\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Play, {\n    onClick: handlePlay\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(IconContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Stop, {\n    onClick: handleReset\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Random, {\n    onClick: handleRandom\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(NameField, null, name));\n};\n\n__signature__(Player, \"useSelector{{ cells, gen, name, isPlay }}\\nuseDispatch{dispatch}\\nuseLayoutEffect{}\\nuseEffect{}\\nuseCallback{handleReset}\\nuseCallback{handlePlay}\\nuseCallback{handleRandom}\\nuseCallback{handlePause}\", function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_10__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_10__[\"useDispatch\"]];\n});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Stop, \"Stop\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Player\\\\index.tsx\");\n  reactHotLoader.register(Random, \"Random\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Player\\\\index.tsx\");\n  reactHotLoader.register(Play, \"Play\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Player\\\\index.tsx\");\n  reactHotLoader.register(Pause, \"Pause\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Player\\\\index.tsx\");\n  reactHotLoader.register(IconContainer, \"IconContainer\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Player\\\\index.tsx\");\n  reactHotLoader.register(GenField, \"GenField\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Player\\\\index.tsx\");\n  reactHotLoader.register(NameField, \"NameField\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Player\\\\index.tsx\");\n  reactHotLoader.register(Player, \"Player\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\Player\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/Player/index.tsx?");

/***/ }),

/***/ "./src/components/SizeSlider/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/SizeSlider/index.tsx ***!
  \*********************************************/
/*! exports provided: SizeSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SizeSlider\", function() { return SizeSlider; });\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _StyledComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StyledComponents */ \"./src/components/StyledComponents/index.tsx\");\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar Label = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"SizeSlider__Label\",\n  componentId: \"fm75r3-0\"\n})([\"width:60px;padding-left:20px;\"]);\nvar SizeSlider = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"memo\"])(function SizeSlider(props) {\n  var label = props.label,\n      onChange = props.onChange,\n      value = props.value,\n      min = props.min,\n      max = props.max,\n      step = props.step;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    display: \"flex\",\n    alignItems: \"center\",\n    height: \"110px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Label, null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    width: \"300px\",\n    m: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StyledComponents__WEBPACK_IMPORTED_MODULE_4__[\"StyledSlider\"], {\n    step: step,\n    min: min,\n    max: max,\n    onChange: onChange,\n    value: value,\n    valueLabelDisplay: \"auto\"\n  })));\n});\nSizeSlider.displayName = 'SizeSlider';\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Label, \"Label\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\SizeSlider\\\\index.tsx\");\n  reactHotLoader.register(SizeSlider, \"SizeSlider\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\SizeSlider\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/SizeSlider/index.tsx?");

/***/ }),

/***/ "./src/components/StyledComponents/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/StyledComponents/index.tsx ***!
  \***************************************************/
/*! exports provided: StyledBtn, StyledSlider, StyledInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledBtn\", function() { return StyledBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledSlider\", function() { return StyledSlider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledInput\", function() { return StyledInput; });\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Slider */ \"@material-ui/core/Slider\");\n/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nvar StyledBtn = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({\n  displayName: \"StyledComponents__StyledBtn\",\n  componentId: \"sc-5skuza-0\"\n})([\"max-width:200px;text-align:center;background-color:#52af77;border-radius:10px;color:white;padding:10px;margin-top:20px;box-shadow:0 0 20px 0px rgba(255,255,255,0.3);transition:all 0.5s;cursor:pointer;text-transform:uppercase;user-select:none;&:hover{transform:translateY(3px);box-shadow:0 3px 40px 0px rgba(255,255,255,0.5);}\"]);\nvar StyledSlider = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({\n  displayName: \"StyledComponents__StyledSlider\",\n  componentId: \"sc-5skuza-1\"\n})([\"&&{&.MuiSlider-root{color:#52af77;}.MuiSlider-rail{height:5px;border-radius:10px;}.MuiSlider-track{height:5px;border-radius:10px;}.MuiSlider-thumb{margin-top:-4px;&:hover,:active,:focus{box-shadow:inherit;}}}\"]);\nvar StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_0___default.a).withConfig({\n  displayName: \"StyledComponents__StyledInput\",\n  componentId: \"sc-5skuza-2\"\n})([\"&&{.MuiOutlinedInput-input{color:white;}.Mui-focused{fieldset{border-color:#52af77;}}.MuiOutlinedInput-notchedOutline{border-color:white;}&:hover fieldset{border-color:#52af77;}label{color:white;&.Mui-focused{color:#52af77;}}}\"]);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(StyledBtn, \"StyledBtn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\StyledComponents\\\\index.tsx\");\n  reactHotLoader.register(StyledSlider, \"StyledSlider\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\StyledComponents\\\\index.tsx\");\n  reactHotLoader.register(StyledInput, \"StyledInput\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\components\\\\StyledComponents\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/components/StyledComponents/index.tsx?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Grid, Cell, SizeSlider, DasboardBtn, HelloWorld, Player, EntranceForm, LogoutBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ \"./src/components/Grid/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Grid\", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"]; });\n\n/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ \"./src/components/Cell/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _Cell__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony import */ var _SizeSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SizeSlider */ \"./src/components/SizeSlider/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SizeSlider\", function() { return _SizeSlider__WEBPACK_IMPORTED_MODULE_2__[\"SizeSlider\"]; });\n\n/* harmony import */ var _DasboardBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DasboardBtn */ \"./src/components/DasboardBtn/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DasboardBtn\", function() { return _DasboardBtn__WEBPACK_IMPORTED_MODULE_3__[\"DasboardBtn\"]; });\n\n/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HelloWorld */ \"./src/components/HelloWorld/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HelloWorld\", function() { return _HelloWorld__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Player */ \"./src/components/Player/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return _Player__WEBPACK_IMPORTED_MODULE_5__[\"Player\"]; });\n\n/* harmony import */ var _EntranceForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EntranceForm */ \"./src/components/EntranceForm/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EntranceForm\", function() { return _EntranceForm__WEBPACK_IMPORTED_MODULE_6__[\"EntranceForm\"]; });\n\n/* harmony import */ var _LogoutBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LogoutBtn */ \"./src/components/LogoutBtn/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"LogoutBtn\", function() { return _LogoutBtn__WEBPACK_IMPORTED_MODULE_7__[\"LogoutBtn\"]; });\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/index.ts?");

/***/ }),

/***/ "./src/global/GlobalStyle.tsx":
/*!************************************!*\
  !*** ./src/global/GlobalStyle.tsx ***!
  \************************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"core-js/modules/es.array.slice\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.freeze */ \"core-js/modules/es.object.freeze\");\n/* harmony import */ var core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\n  body {\\n  background: rgba(0,0,0,0.9);\\n  margin: 0;\\n  color: white;\\n}\\n\\n:focus{\\n  outline: none;\\n}\\n\\n.MuiTypography-root {\\n    margin: 0;\\n    color: white;\\n}\\n\\n\\n.MuiBackdrop-root {\\n  filter: blur(4px);\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"])(_templateObject());\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(GlobalStyle, \"GlobalStyle\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\global\\\\GlobalStyle.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/global/GlobalStyle.tsx?");

/***/ }),

/***/ "./src/pages/Greetings/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/Greetings/index.tsx ***!
  \***************************************/
/*! exports provided: Greetings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Greetings\", function() { return Greetings; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ \"./src/components/index.ts\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/helper */ \"./src/utils/helper/index.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/actions */ \"./src/store/actions/index.ts\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({\n  displayName: \"Greetings__Container\",\n  componentId: \"sc-1vjett3-0\"\n})([\"width:100vw;height:100vh;display:flex;\"]);\nvar Greetings = function Greetings(props) {\n  _objectDestructuringEmpty(props);\n\n  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"useHistory\"])();\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_utils_helper__WEBPACK_IMPORTED_MODULE_3__[\"isLoggedIn\"])() && dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_6__[\"PlayerActions\"].getName()) && history.push('/game');\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__[\"EntranceForm\"], null));\n};\n\n__signature__(Greetings, \"useHistory{history}\\nuseDispatch{dispatch}\\nuseEffect{}\", function () {\n  return [react_router__WEBPACK_IMPORTED_MODULE_2__[\"useHistory\"], react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"]];\n});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Container, \"Container\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\pages\\\\Greetings\\\\index.tsx\");\n  reactHotLoader.register(Greetings, \"Greetings\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\pages\\\\Greetings\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/pages/Greetings/index.tsx?");

/***/ }),

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return Home; });\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Fade */ \"@material-ui/core/Fade\");\n/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ \"./src/components/index.ts\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/helper */ \"./src/utils/helper/index.ts\");\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError(\"Cannot destructure undefined\"); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar Home = function Home(props) {\n  _objectDestructuringEmpty(props);\n\n  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_4__[\"useHistory\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    !Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__[\"isLoggedIn\"])() && history.push('/');\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    timeout: 300,\n    in: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    display: \"flex\",\n    width: \"100%\",\n    boxSizing: \"border-box\",\n    p: \"5px\",\n    height: \"30px\",\n    mr: \"auto\",\n    ml: \"auto\",\n    justifyContent: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[\"DasboardBtn\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[\"Player\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[\"LogoutBtn\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    display: \"flex\",\n    flexDirection: \"column\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__[\"Grid\"], null))));\n};\n\n__signature__(Home, \"useHistory{history}\\nuseEffect{}\", function () {\n  return [react_router__WEBPACK_IMPORTED_MODULE_4__[\"useHistory\"]];\n});\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, \"Home\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\pages\\\\Home\\\\index.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/pages/Home/index.tsx?");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: Home, Greetings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/pages/Home/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Home\", function() { return _Home__WEBPACK_IMPORTED_MODULE_0__[\"Home\"]; });\n\n/* harmony import */ var _Greetings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Greetings */ \"./src/pages/Greetings/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Greetings\", function() { return _Greetings__WEBPACK_IMPORTED_MODULE_1__[\"Greetings\"]; });\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/pages/index.tsx?");

/***/ }),

/***/ "./src/routes/Routes.tsx":
/*!*******************************!*\
  !*** ./src/routes/Routes.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages */ \"./src/pages/index.tsx\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nvar AppRoutes = function AppRoutes() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: _pages__WEBPACK_IMPORTED_MODULE_2__[\"Greetings\"],\n    path: \"/hello\",\n    exact: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    component: _pages__WEBPACK_IMPORTED_MODULE_2__[\"Home\"],\n    path: \"/game\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    from: \"*\",\n    to: \"/hello\"\n  }));\n};\n\nvar _default = AppRoutes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(AppRoutes, \"AppRoutes\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\routes\\\\Routes.tsx\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\routes\\\\Routes.tsx\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/routes/Routes.tsx?");

/***/ }),

/***/ "./src/store/actions/index.ts":
/*!************************************!*\
  !*** ./src/store/actions/index.ts ***!
  \************************************/
/*! exports provided: PlayerActions, GreetingFormActions, AxisActions, CellsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerActions\", function() { return PlayerActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GreetingFormActions\", function() { return GreetingFormActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AxisActions\", function() { return AxisActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CellsActions\", function() { return CellsActions; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar PlayerActions = {\n  setIsPlay: function setIsPlay() {\n    return {\n      type: 'PLAYER:PLAY',\n      payload: true\n    };\n  },\n  setIsStop: function setIsStop() {\n    return {\n      type: 'PLAYER:STOP',\n      payload: false\n    };\n  },\n  setReset: function setReset() {\n    return {\n      type: 'PLAYER:RESET'\n    };\n  },\n  setRandomIndex: function setRandomIndex(index) {\n    return {\n      type: 'PLAYER:SET_RANDOM_INDEX',\n      payload: index\n    };\n  },\n  setSpeed: function setSpeed(index) {\n    return {\n      type: 'PLAYER:SET_SPEED_INDEX',\n      payload: index\n    };\n  },\n  setGen: function setGen(value) {\n    return {\n      type: 'PLAYER:SET_GENERATION',\n      payload: value\n    };\n  },\n  getName: function getName() {\n    return {\n      type: 'PLAYER:GET_NAME'\n    };\n  }\n};\nvar GreetingFormActions = {\n  setReady: function setReady() {\n    return {\n      type: 'GREETINGFORM:READY_GREED'\n    };\n  },\n  setStart: function setStart() {\n    return {\n      type: 'GREETINGFORM:START_GAME'\n    };\n  }\n};\nvar AxisActions = {\n  increaseXaxis: function increaseXaxis(value) {\n    return {\n      type: 'AXIS:INCREASE_X',\n      payload: value\n    };\n  },\n  decreaseXaxis: function decreaseXaxis(value) {\n    return {\n      type: 'AXIS:DECREASE_X',\n      payload: value\n    };\n  },\n  increaseYaxis: function increaseYaxis(value) {\n    return {\n      type: 'AXIS:INCREASE_Y',\n      payload: value\n    };\n  },\n  decreaseYaxis: function decreaseYaxis(value) {\n    return {\n      type: 'AXIS:DECREASE_Y',\n      payload: value\n    };\n  }\n};\nvar CellsActions = {\n  clickCell: function clickCell(index) {\n    return {\n      type: 'CELLS:CLICK',\n      payload: index\n    };\n  },\n  randomCells: function randomCells() {\n    return {\n      type: 'CELLS:RANDOM'\n    };\n  },\n  simulateLife: function simulateLife() {\n    return {\n      type: 'CELLS:SIMULATE_LIFE'\n    };\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PlayerActions, \"PlayerActions\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\actions\\\\index.ts\");\n  reactHotLoader.register(GreetingFormActions, \"GreetingFormActions\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\actions\\\\index.ts\");\n  reactHotLoader.register(AxisActions, \"AxisActions\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\actions\\\\index.ts\");\n  reactHotLoader.register(CellsActions, \"CellsActions\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\actions\\\\index.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/actions/index.ts?");

/***/ }),

/***/ "./src/store/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/store/reducers/index.ts ***!
  \*************************************/
/*! exports provided: GridReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GridReducer\", function() { return GridReducer; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"core-js/modules/es.symbol\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"core-js/modules/es.symbol.description\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"core-js/modules/es.symbol.iterator\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ \"core-js/modules/es.array.concat\");\n/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"core-js/modules/es.array.filter\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"core-js/modules/es.array.for-each\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from */ \"core-js/modules/es.array.from\");\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"core-js/modules/es.array.iterator\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"core-js/modules/es.array.map\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"core-js/modules/es.array.slice\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"core-js/modules/es.function.name\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"core-js/modules/es.object.get-own-property-descriptor\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ \"core-js/modules/es.object.get-own-property-descriptors\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"core-js/modules/es.object.keys\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"core-js/modules/es.regexp.to-string\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"core-js/modules/es.string.iterator\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"core-js/modules/web.dom-collections.for-each\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"core-js/modules/web.dom-collections.iterator\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/utils/helper */ \"./src/utils/helper/index.ts\");\n/* harmony import */ var _utils_algorithm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/utils/algorithm */ \"./src/utils/algorithm/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nvar y = 15;\nvar x = 30;\nvar initialState = {\n  axis: {\n    x: x,\n    y: y\n  },\n  cells: Array.from({\n    length: y * x\n  }, function (item, index) {\n    return {\n      index: index,\n      isClicked: false\n    };\n  }),\n  gen: 1,\n  name: null,\n  isPlay: false,\n  speed: 1,\n  randomIndex: 0.7\n};\nvar GridReducer = function GridReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  var x = state.axis.x;\n  var y = state.axis.y;\n  var length = x * y - 1;\n\n  switch (action.type) {\n    case 'PLAYER:PLAY':\n      return _objectSpread({}, state, {\n        isPlay: action.payload\n      });\n\n    case 'PLAYER:STOP':\n      return _objectSpread({}, state, {\n        isPlay: action.payload\n      });\n\n    case 'PLAYER:RESET':\n      return _objectSpread({}, state, {\n        cells: state.cells.map(function (obj) {\n          return _objectSpread({}, obj, {\n            isClicked: false\n          });\n        }),\n        isPlay: false,\n        gen: 1\n      });\n\n    case 'PLAYER:SET_GENERATION':\n      return _objectSpread({}, state, {\n        gen: action.payload\n      });\n\n    case 'PLAYER:SET_RANDOM_INDEX':\n      return _objectSpread({}, state, {\n        randomIndex: action.payload\n      });\n\n    case 'PLAYER:SET_SPEED_INDEX':\n      return _objectSpread({}, state, {\n        speed: action.payload\n      });\n\n    case 'PLAYER:GET_NAME':\n      return _objectSpread({}, state, {\n        name: Object(_utils_helper__WEBPACK_IMPORTED_MODULE_19__[\"getLogIn\"])()\n      });\n\n    case 'AXIS:DECREASE_Y':\n      return _objectSpread({}, state, {\n        axis: _objectSpread({}, state.axis, {\n          y: action.payload\n        }),\n        cells: state.cells.slice(0, action.payload * x)\n      });\n\n    case 'AXIS:INCREASE_Y':\n      return _objectSpread({}, state, {\n        axis: _objectSpread({}, state.axis, {\n          y: action.payload\n        }),\n        cells: [].concat(_toConsumableArray(state.cells), _toConsumableArray(Array.from({\n          length: action.payload * x - x * y\n        }, function () {\n          return {\n            index: ++length,\n            isClicked: false\n          };\n        })))\n      });\n\n    case 'AXIS:DECREASE_X':\n      return _objectSpread({}, state, {\n        axis: _objectSpread({}, state.axis, {\n          x: action.payload\n        }),\n        cells: state.cells.slice(0, action.payload * y)\n      });\n\n    case 'AXIS:INCREASE_X':\n      return _objectSpread({}, state, {\n        axis: _objectSpread({}, state.axis, {\n          x: action.payload\n        }),\n        cells: [].concat(_toConsumableArray(state.cells), _toConsumableArray(Array.from({\n          length: action.payload * y - x * y\n        }, function () {\n          return {\n            index: ++length,\n            isClicked: false\n          };\n        })))\n      });\n\n    case 'CELLS:RANDOM':\n      return _objectSpread({}, state, {\n        cells: state.cells.map(function (obj) {\n          return Object(_utils_helper__WEBPACK_IMPORTED_MODULE_19__[\"randomCells\"])(obj, state);\n        })\n      });\n\n    case 'CELLS:CLICK':\n      return _objectSpread({}, state, {\n        cells: state.cells.map(function (obj) {\n          if (obj.index === action.payload) return _objectSpread({}, obj, {\n            isClicked: !obj.isClicked\n          });\n          return obj;\n        })\n      });\n\n    case 'CELLS:SIMULATE_LIFE':\n      return _objectSpread({}, state, {\n        cells: state.cells.map(function (obj, index, arr) {\n          return Object(_utils_algorithm__WEBPACK_IMPORTED_MODULE_20__[\"simulateLife\"])(obj, index, arr, state);\n        }),\n        gen: state.gen + 1\n      });\n\n    case 'GREETINGFORM:READY_GREED':\n      return _objectSpread({}, state, {\n        cells: state.cells.map(function (obj) {\n          if (Math.random() > 0.7) {\n            return _objectSpread({}, obj, {\n              isClicked: true\n            });\n          }\n\n          return obj;\n        }),\n        isPlay: true,\n        speed: 1\n      });\n\n    case 'GREETINGFORM:START_GAME':\n      return _objectSpread({}, state);\n\n    default:\n      // eslint-disable-next-line @typescript-eslint/no-unused-vars\n      var exhaustiveCheck = action;\n      return state;\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(y, \"y\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\reducers\\\\index.ts\");\n  reactHotLoader.register(x, \"x\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\reducers\\\\index.ts\");\n  reactHotLoader.register(initialState, \"initialState\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\reducers\\\\index.ts\");\n  reactHotLoader.register(GridReducer, \"GridReducer\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\reducers\\\\index.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/reducers/index.ts?");

/***/ }),

/***/ "./src/store/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/store/rootReducer.ts ***!
  \**********************************/
/*! exports provided: rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootReducer\", function() { return rootReducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ \"redux-form\");\n/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_form__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/index */ \"./src/store/reducers/index.ts\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nvar rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  form: redux_form__WEBPACK_IMPORTED_MODULE_1__[\"reducer\"],\n  grid: _reducers_index__WEBPACK_IMPORTED_MODULE_2__[\"GridReducer\"]\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(rootReducer, \"rootReducer\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\rootReducer.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/rootReducer.ts?");

/***/ }),

/***/ "./src/store/sagas/index.ts":
/*!**********************************!*\
  !*** ./src/store/sagas/index.ts ***!
  \**********************************/
/*! exports provided: startSimulateLife, startGameFromForm, watchStartGame, watchStartGameFromForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startSimulateLife\", function() { return startSimulateLife; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startGameFromForm\", function() { return startGameFromForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchStartGame\", function() { return watchStartGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"watchStartGameFromForm\", function() { return watchStartGameFromForm; });\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors */ \"./src/store/selectors/index.ts\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ \"./src/store/actions/index.ts\");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(startSimulateLife),\n    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(startGameFromForm),\n    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(watchStartGame),\n    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(watchStartGameFromForm);\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nfunction startSimulateLife() {\n  var speed;\n  return regeneratorRuntime.wrap(function startSimulateLife$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(_selectors__WEBPACK_IMPORTED_MODULE_2__[\"speedSelector\"]);\n\n        case 2:\n          speed = _context.sent;\n\n        case 3:\n          _context.next = 5;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"select\"])(_selectors__WEBPACK_IMPORTED_MODULE_2__[\"isPlaySelector\"]);\n\n        case 5:\n          if (!_context.sent) {\n            _context.next = 12;\n            break;\n          }\n\n          _context.next = 8;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(_actions__WEBPACK_IMPORTED_MODULE_3__[\"CellsActions\"].simulateLife());\n\n        case 8:\n          _context.next = 10;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"delay\"])(speed * 100);\n\n        case 10:\n          _context.next = 3;\n          break;\n\n        case 12:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\nfunction startGameFromForm() {\n  return regeneratorRuntime.wrap(function startGameFromForm$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          _context2.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"put\"])(_actions__WEBPACK_IMPORTED_MODULE_3__[\"GreetingFormActions\"].setReady());\n\n        case 2:\n          _context2.next = 4;\n          return startSimulateLife();\n\n        case 4:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  }, _marked2);\n}\nfunction watchStartGame() {\n  return regeneratorRuntime.wrap(function watchStartGame$(_context3) {\n    while (1) {\n      switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_actions__WEBPACK_IMPORTED_MODULE_3__[\"PlayerActions\"].setIsPlay().type, startSimulateLife);\n\n        case 2:\n        case \"end\":\n          return _context3.stop();\n      }\n    }\n  }, _marked3);\n}\nfunction watchStartGameFromForm() {\n  return regeneratorRuntime.wrap(function watchStartGameFromForm$(_context4) {\n    while (1) {\n      switch (_context4.prev = _context4.next) {\n        case 0:\n          _context4.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"takeLatest\"])(_actions__WEBPACK_IMPORTED_MODULE_3__[\"GreetingFormActions\"].setStart().type, startGameFromForm);\n\n        case 2:\n        case \"end\":\n          return _context4.stop();\n      }\n    }\n  }, _marked4);\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(startSimulateLife, \"startSimulateLife\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\sagas\\\\index.ts\");\n  reactHotLoader.register(startGameFromForm, \"startGameFromForm\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\sagas\\\\index.ts\");\n  reactHotLoader.register(watchStartGame, \"watchStartGame\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\sagas\\\\index.ts\");\n  reactHotLoader.register(watchStartGameFromForm, \"watchStartGameFromForm\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\sagas\\\\index.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/sagas/index.ts?");

/***/ }),

/***/ "./src/store/sagas/rootSaga.ts":
/*!*************************************!*\
  !*** ./src/store/sagas/rootSaga.ts ***!
  \*************************************/
/*! exports provided: rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootSaga\", function() { return rootSaga; });\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"regenerator-runtime/runtime\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ \"./src/store/sagas/index.ts\");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar _marked = /*#__PURE__*/regeneratorRuntime.mark(rootSaga);\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nfunction rootSaga() {\n  return regeneratorRuntime.wrap(function rootSaga$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__[\"all\"])([Object(___WEBPACK_IMPORTED_MODULE_2__[\"watchStartGameFromForm\"])(), Object(___WEBPACK_IMPORTED_MODULE_2__[\"watchStartGame\"])()]);\n\n        case 2:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _marked);\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(rootSaga, \"rootSaga\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\sagas\\\\rootSaga.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/sagas/rootSaga.ts?");

/***/ }),

/***/ "./src/store/selectors/index.ts":
/*!**************************************!*\
  !*** ./src/store/selectors/index.ts ***!
  \**************************************/
/*! exports provided: intervalIDselector, speedSelector, isPlaySelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"intervalIDselector\", function() { return intervalIDselector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"speedSelector\", function() { return speedSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPlaySelector\", function() { return isPlaySelector; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar intervalIDselector = function intervalIDselector(state) {\n  return state.grid.intervalID;\n};\nvar speedSelector = function speedSelector(state) {\n  return state.grid.speed;\n};\nvar isPlaySelector = function isPlaySelector(state) {\n  return state.grid.isPlay;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(intervalIDselector, \"intervalIDselector\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\selectors\\\\index.ts\");\n  reactHotLoader.register(speedSelector, \"speedSelector\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\selectors\\\\index.ts\");\n  reactHotLoader.register(isPlaySelector, \"isPlaySelector\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\selectors\\\\index.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/selectors/index.ts?");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ \"./src/store/rootReducer.ts\");\n/* harmony import */ var _sagas_rootSaga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sagas/rootSaga */ \"./src/store/sagas/rootSaga.ts\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nvar composeEnhancers = (undefined === null || undefined === void 0 ? void 0 : undefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"];\nvar sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_2___default()();\nvar middleware = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, sagaMiddleware));\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_rootReducer__WEBPACK_IMPORTED_MODULE_3__[\"rootReducer\"], middleware);\nsagaMiddleware.run(_sagas_rootSaga__WEBPACK_IMPORTED_MODULE_4__[\"rootSaga\"]);\nvar _default = store;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(composeEnhancers, \"composeEnhancers\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\store.ts\");\n  reactHotLoader.register(sagaMiddleware, \"sagaMiddleware\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\store.ts\");\n  reactHotLoader.register(middleware, \"middleware\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\store.ts\");\n  reactHotLoader.register(store, \"store\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\store.ts\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\store\\\\store.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/store/store.ts?");

/***/ }),

/***/ "./src/utils/algorithm/index.ts":
/*!**************************************!*\
  !*** ./src/utils/algorithm/index.ts ***!
  \**************************************/
/*! exports provided: splitCells, checkRulesForRightColumn, checkRulesForLeftColumn, checkBottomRow, checkUpRow, checkRestElems, simulateLife */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"splitCells\", function() { return splitCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkRulesForRightColumn\", function() { return checkRulesForRightColumn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkRulesForLeftColumn\", function() { return checkRulesForLeftColumn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkBottomRow\", function() { return checkBottomRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkUpRow\", function() { return checkUpRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkRestElems\", function() { return checkRestElems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"simulateLife\", function() { return simulateLife; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"core-js/modules/es.symbol\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"core-js/modules/es.symbol.description\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ \"core-js/modules/es.symbol.iterator\");\n/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"core-js/modules/es.array.filter\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"core-js/modules/es.array.for-each\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ \"core-js/modules/es.array.from\");\n/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes */ \"core-js/modules/es.array.includes\");\n/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ \"core-js/modules/es.array.iterator\");\n/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ \"core-js/modules/es.array.slice\");\n/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ \"core-js/modules/es.function.name\");\n/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"core-js/modules/es.object.get-own-property-descriptor\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ \"core-js/modules/es.object.get-own-property-descriptors\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"core-js/modules/es.object.keys\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ \"core-js/modules/es.object.to-string\");\n/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ \"core-js/modules/es.regexp.to-string\");\n/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.includes */ \"core-js/modules/es.string.includes\");\n/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ \"core-js/modules/es.string.iterator\");\n/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"core-js/modules/web.dom-collections.for-each\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ \"core-js/modules/web.dom-collections.iterator\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar splitCells = function splitCells(state) {\n  var leftColumn = [];\n  var rightColumn = [];\n  var upRow = [];\n  var bottomRow = [];\n\n  for (var _index = 0; _index < state.cells.length; _index = _index + state.axis.x) {\n    leftColumn.push(_index);\n  }\n\n  for (var _index2 = state.axis.x - 1; _index2 < state.cells.length; _index2 = _index2 + state.axis.x) {\n    rightColumn.push(_index2);\n  }\n\n  for (var _index3 = 1; _index3 < state.axis.x - 1; _index3++) {\n    upRow.push(_index3);\n  }\n\n  for (var _index4 = state.cells.length - state.axis.x + 1; _index4 < state.cells.length - 1; _index4++) {\n    bottomRow.push(_index4);\n  }\n\n  return [leftColumn, rightColumn, upRow, bottomRow];\n};\nvar checkRulesForRightColumn = function checkRulesForRightColumn(obj, index, arr, state, rightColumn) {\n  if (obj.index === rightColumn[0]) {\n    var count = 0;\n    arr[index - 1].isClicked === true && count++;\n    arr[index + state.axis.x].isClicked === true && count++;\n    arr[index + state.axis.x - 1].isClicked === true && count++;\n\n    if (obj.isClicked === false && count === 3) {\n      return _objectSpread({}, obj, {\n        isClicked: true\n      });\n    } else if (obj.isClicked === true && (count == 2 || count == 3)) {\n      return obj;\n    } else {\n      return _objectSpread({}, obj, {\n        isClicked: false\n      });\n    }\n  } else if (obj.index === rightColumn[rightColumn.length - 1]) {\n    var _count = 0;\n    arr[index - 1].isClicked === true && _count++;\n    arr[index - state.axis.x].isClicked === true && _count++;\n    arr[index - state.axis.x - 1].isClicked === true && _count++;\n\n    if (obj.isClicked === false && _count === 3) {\n      return _objectSpread({}, obj, {\n        isClicked: true\n      });\n    } else if (obj.isClicked === true && _count == 2 || _count == 3) {\n      return obj;\n    } else {\n      return _objectSpread({}, obj, {\n        isClicked: false\n      });\n    }\n  } else {\n    var _count2 = 0;\n    arr[index - state.axis.x].isClicked === true && _count2++;\n    arr[index - state.axis.x - 1].isClicked === true && _count2++;\n    arr[index - 1].isClicked === true && _count2++;\n    arr[index + state.axis.x].isClicked === true && _count2++;\n    arr[index + state.axis.x - 1].isClicked === true && _count2++;\n\n    if (obj.isClicked === false && _count2 == 3) {\n      return _objectSpread({}, obj, {\n        isClicked: true\n      });\n    } else if (obj.isClicked === true && _count2 == 2 || _count2 == 3) {\n      return obj;\n    } else {\n      return _objectSpread({}, obj, {\n        isClicked: false\n      });\n    }\n  }\n};\nvar checkRulesForLeftColumn = function checkRulesForLeftColumn(obj, index, arr, state, leftColumn) {\n  if (obj.index === leftColumn[0]) {\n    var count = 0;\n    arr[index + 1].isClicked === true && count++;\n    arr[index + state.axis.x].isClicked === true && count++;\n    arr[index + state.axis.x + 1].isClicked === true && count++;\n\n    if (obj.isClicked === false && count === 3) {\n      return _objectSpread({}, obj, {\n        isClicked: true\n      });\n    } else if (obj.isClicked === true && (count == 2 || count == 3)) {\n      return obj;\n    } else {\n      return _objectSpread({}, obj, {\n        isClicked: false\n      });\n    }\n  } else if (obj.index === leftColumn[leftColumn.length - 1]) {\n    var _count3 = 0;\n    arr[index + 1].isClicked === true && _count3++;\n    arr[index - state.axis.x].isClicked === true && _count3++;\n    arr[index - state.axis.x + 1].isClicked === true && _count3++;\n\n    if (obj.isClicked === false && _count3 === 3) {\n      return _objectSpread({}, obj, {\n        isClicked: true\n      });\n    } else if (obj.isClicked === true && (_count3 == 2 || _count3 == 3)) {\n      return obj;\n    } else {\n      return _objectSpread({}, obj, {\n        isClicked: false\n      });\n    }\n  } else {\n    var _count4 = 0;\n    arr[index - state.axis.x].isClicked === true && _count4++;\n    arr[index - state.axis.x + 1].isClicked === true && _count4++;\n    arr[index + 1].isClicked === true && _count4++;\n    arr[index + state.axis.x].isClicked === true && _count4++;\n    arr[index + state.axis.x + 1].isClicked === true && _count4++;\n\n    if (obj.isClicked === false && _count4 == 3) {\n      return _objectSpread({}, obj, {\n        isClicked: true\n      });\n    } else if (obj.isClicked === true && (_count4 == 2 || _count4 == 3)) {\n      return obj;\n    } else {\n      return _objectSpread({}, obj, {\n        isClicked: false\n      });\n    }\n  }\n};\nvar checkBottomRow = function checkBottomRow(obj, index, arr, state) {\n  var count = 0;\n  arr[index - 1].isClicked === true && count++;\n  arr[index + 1].isClicked === true && count++;\n  arr[index - state.axis.x].isClicked === true && count++;\n  arr[index - state.axis.x - 1].isClicked === true && count++;\n  arr[index - state.axis.x + 1].isClicked === true && count++;\n\n  if (obj.isClicked === false && count == 3) {\n    return _objectSpread({}, obj, {\n      isClicked: true\n    });\n  } else if (obj.isClicked === true && (count == 2 || count == 3)) {\n    return obj;\n  } else {\n    return _objectSpread({}, obj, {\n      isClicked: false\n    });\n  }\n};\nvar checkUpRow = function checkUpRow(obj, index, arr, state) {\n  var count = 0;\n  arr[index - 1].isClicked === true && count++;\n  arr[index + 1].isClicked === true && count++;\n  arr[index + state.axis.x].isClicked === true && count++;\n  arr[index + state.axis.x - 1].isClicked === true && count++;\n  arr[index + state.axis.x + 1].isClicked === true && count++;\n\n  if (obj.isClicked === false && count == 3) {\n    return _objectSpread({}, obj, {\n      isClicked: true\n    });\n  } else if (obj.isClicked === true && (count == 2 || count == 3)) {\n    return obj;\n  } else {\n    return _objectSpread({}, obj, {\n      isClicked: false\n    });\n  }\n};\nvar checkRestElems = function checkRestElems(obj, index, arr, state) {\n  var count = 0;\n  arr[index - state.axis.x - 1].isClicked === true && count++;\n  arr[index - state.axis.x].isClicked === true && count++;\n  arr[index - state.axis.x + 1].isClicked === true && count++;\n  arr[index - 1].isClicked === true && count++;\n  arr[index + 1].isClicked === true && count++;\n  arr[index + state.axis.x - 1].isClicked === true && count++;\n  arr[index + state.axis.x].isClicked === true && count++;\n  arr[index + state.axis.x + 1].isClicked === true && count++;\n\n  if (obj.isClicked === false && count == 3) {\n    return _objectSpread({}, obj, {\n      isClicked: true\n    });\n  } else if (obj.isClicked === true && (count == 2 || count == 3)) {\n    return obj;\n  } else {\n    return _objectSpread({}, obj, {\n      isClicked: false\n    });\n  }\n};\nvar simulateLife = function simulateLife(obj, index, arr, state) {\n  var _splitCells = splitCells(state),\n      _splitCells2 = _slicedToArray(_splitCells, 4),\n      leftColumn = _splitCells2[0],\n      rightColumn = _splitCells2[1],\n      upRow = _splitCells2[2],\n      bottomRow = _splitCells2[3];\n\n  if (rightColumn.includes(obj.index)) {\n    return checkRulesForRightColumn(obj, index, arr, state, rightColumn);\n  } else if (leftColumn.includes(obj.index)) {\n    return checkRulesForLeftColumn(obj, index, arr, state, leftColumn);\n  } else if (upRow.includes(obj.index)) {\n    return checkUpRow(obj, index, arr, state);\n  } else if (bottomRow.includes(obj.index)) {\n    return checkBottomRow(obj, index, arr, state);\n  } else {\n    return checkRestElems(obj, index, arr, state);\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(splitCells, \"splitCells\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\algorithm\\\\index.ts\");\n  reactHotLoader.register(checkRulesForRightColumn, \"checkRulesForRightColumn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\algorithm\\\\index.ts\");\n  reactHotLoader.register(checkRulesForLeftColumn, \"checkRulesForLeftColumn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\algorithm\\\\index.ts\");\n  reactHotLoader.register(checkBottomRow, \"checkBottomRow\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\algorithm\\\\index.ts\");\n  reactHotLoader.register(checkUpRow, \"checkUpRow\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\algorithm\\\\index.ts\");\n  reactHotLoader.register(checkRestElems, \"checkRestElems\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\algorithm\\\\index.ts\");\n  reactHotLoader.register(simulateLife, \"simulateLife\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\algorithm\\\\index.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/utils/algorithm/index.ts?");

/***/ }),

/***/ "./src/utils/helper/index.ts":
/*!***********************************!*\
  !*** ./src/utils/helper/index.ts ***!
  \***********************************/
/*! exports provided: checkGridMaxHeight, checkGridMaxWidth, randomCells, setLogIn, logOut, getLogIn, isLoggedIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkGridMaxHeight\", function() { return checkGridMaxHeight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkGridMaxWidth\", function() { return checkGridMaxWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomCells\", function() { return randomCells; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLogIn\", function() { return setLogIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logOut\", function() { return logOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLogIn\", function() { return getLogIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLoggedIn\", function() { return isLoggedIn; });\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"core-js/modules/es.symbol\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"core-js/modules/es.array.filter\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"core-js/modules/es.array.for-each\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ \"core-js/modules/es.object.get-own-property-descriptor\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ \"core-js/modules/es.object.get-own-property-descriptors\");\n/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ \"core-js/modules/es.object.keys\");\n/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"core-js/modules/web.dom-collections.for-each\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar checkGridMaxHeight = function checkGridMaxHeight() {\n  var maxHeight;\n  maxHeight = Math.floor(document.documentElement.clientHeight / 27);\n  return maxHeight;\n};\nvar checkGridMaxWidth = function checkGridMaxWidth() {\n  var maxWidth;\n  maxWidth = Math.floor(document.documentElement.clientWidth / 26);\n  return maxWidth;\n};\nvar randomCells = function randomCells(obj, state) {\n  if (Math.random() > state.randomIndex) {\n    return _objectSpread({}, obj, {\n      isClicked: true\n    });\n  }\n\n  return obj;\n};\nvar setLogIn = function setLogIn(name) {\n  localStorage.setItem('name', name);\n};\nvar logOut = function logOut() {\n  localStorage.removeItem('name');\n};\nvar getLogIn = function getLogIn() {\n  return localStorage.getItem('name');\n};\nvar isLoggedIn = function isLoggedIn() {\n  var checkIsLoggedIn = localStorage.getItem('name');\n  return !!checkIsLoggedIn;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(checkGridMaxHeight, \"checkGridMaxHeight\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\helper\\\\index.ts\");\n  reactHotLoader.register(checkGridMaxWidth, \"checkGridMaxWidth\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\helper\\\\index.ts\");\n  reactHotLoader.register(randomCells, \"randomCells\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\helper\\\\index.ts\");\n  reactHotLoader.register(setLogIn, \"setLogIn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\helper\\\\index.ts\");\n  reactHotLoader.register(logOut, \"logOut\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\helper\\\\index.ts\");\n  reactHotLoader.register(getLogIn, \"getLogIn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\helper\\\\index.ts\");\n  reactHotLoader.register(isLoggedIn, \"isLoggedIn\", \"C:\\\\Users\\\\xiaom\\\\Desktop\\\\new\\\\my_ts_boilerplate\\\\src\\\\utils\\\\helper\\\\index.ts\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/utils/helper/index.ts?");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Box\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Box%22?");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Drawer\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Drawer%22?");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Fade\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Fade%22?");

/***/ }),

/***/ "@material-ui/core/Slider":
/*!*******************************************!*\
  !*** external "@material-ui/core/Slider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Slider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Slider%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Dashboard\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Dashboard%22?");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ExitToApp\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ExitToApp%22?");

/***/ }),

/***/ "@material-ui/icons/Pause":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Pause" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Pause\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Pause%22?");

/***/ }),

/***/ "@material-ui/icons/PlayArrow":
/*!***********************************************!*\
  !*** external "@material-ui/icons/PlayArrow" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/PlayArrow\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/PlayArrow%22?");

/***/ }),

/***/ "@material-ui/icons/Shuffle":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Shuffle" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Shuffle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Shuffle%22?");

/***/ }),

/***/ "@material-ui/icons/Stop":
/*!******************************************!*\
  !*** external "@material-ui/icons/Stop" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Stop\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Stop%22?");

/***/ }),

/***/ "core-js/modules/es.array.concat":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.concat" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.concat\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.concat%22?");

/***/ }),

/***/ "core-js/modules/es.array.every":
/*!*************************************************!*\
  !*** external "core-js/modules/es.array.every" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.every\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.every%22?");

/***/ }),

/***/ "core-js/modules/es.array.filter":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.filter" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.filter\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.filter%22?");

/***/ }),

/***/ "core-js/modules/es.array.for-each":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.for-each" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.for-each\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.for-each%22?");

/***/ }),

/***/ "core-js/modules/es.array.from":
/*!************************************************!*\
  !*** external "core-js/modules/es.array.from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.from\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.from%22?");

/***/ }),

/***/ "core-js/modules/es.array.includes":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.includes" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.includes\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.includes%22?");

/***/ }),

/***/ "core-js/modules/es.array.iterator":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.iterator" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.iterator%22?");

/***/ }),

/***/ "core-js/modules/es.array.map":
/*!***********************************************!*\
  !*** external "core-js/modules/es.array.map" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.map\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.map%22?");

/***/ }),

/***/ "core-js/modules/es.array.slice":
/*!*************************************************!*\
  !*** external "core-js/modules/es.array.slice" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.slice\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.array.slice%22?");

/***/ }),

/***/ "core-js/modules/es.function.name":
/*!***************************************************!*\
  !*** external "core-js/modules/es.function.name" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.function.name\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.function.name%22?");

/***/ }),

/***/ "core-js/modules/es.object.freeze":
/*!***************************************************!*\
  !*** external "core-js/modules/es.object.freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.freeze\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.freeze%22?");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.get-own-property-descriptor\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.get-own-property-descriptor%22?");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.get-own-property-descriptors\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.get-own-property-descriptors%22?");

/***/ }),

/***/ "core-js/modules/es.object.keys":
/*!*************************************************!*\
  !*** external "core-js/modules/es.object.keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.keys\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.keys%22?");

/***/ }),

/***/ "core-js/modules/es.object.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.object.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.object.to-string%22?");

/***/ }),

/***/ "core-js/modules/es.regexp.exec":
/*!*************************************************!*\
  !*** external "core-js/modules/es.regexp.exec" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.regexp.exec\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.regexp.exec%22?");

/***/ }),

/***/ "core-js/modules/es.regexp.to-string":
/*!******************************************************!*\
  !*** external "core-js/modules/es.regexp.to-string" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.regexp.to-string\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.regexp.to-string%22?");

/***/ }),

/***/ "core-js/modules/es.string.includes":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.includes" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.string.includes\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.string.includes%22?");

/***/ }),

/***/ "core-js/modules/es.string.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.string.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.string.iterator%22?");

/***/ }),

/***/ "core-js/modules/es.string.replace":
/*!****************************************************!*\
  !*** external "core-js/modules/es.string.replace" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.string.replace\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.string.replace%22?");

/***/ }),

/***/ "core-js/modules/es.symbol":
/*!********************************************!*\
  !*** external "core-js/modules/es.symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.symbol\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.symbol%22?");

/***/ }),

/***/ "core-js/modules/es.symbol.description":
/*!********************************************************!*\
  !*** external "core-js/modules/es.symbol.description" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.symbol.description\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.symbol.description%22?");

/***/ }),

/***/ "core-js/modules/es.symbol.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.symbol.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.symbol.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es.symbol.iterator%22?");

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each":
/*!***************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.for-each" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/web.dom-collections.for-each\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/web.dom-collections.for-each%22?");

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator":
/*!***************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/web.dom-collections.iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/web.dom-collections.iterator%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-form":
/*!*****************************!*\
  !*** external "redux-form" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-form\");\n\n//# sourceURL=webpack:///external_%22redux-form%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime/runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime/runtime%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });