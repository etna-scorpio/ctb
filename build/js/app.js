/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _header = __webpack_require__(1);\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvYXBwLmpzPzcxNmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nfunction toggleMenu() {\n\tvar menuIco = document.querySelector('.js-menu-ico');\n\n\tmenuIco.addEventListener('click', function (e) {\n\t\te.preventDefault();\n\t\te.currentTarget.classList.toggle('menu-ico--active');\n\t});\n}\n\ntoggleMenu();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvaGVhZGVyLmpzPzJmMTUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcclxuXHR2YXIgbWVudUljbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1tZW51LWljbycpO1xyXG5cclxuXHRtZW51SWNvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljby0tYWN0aXZlJyk7XHJcblx0fSk7XHJcbn1cclxuXHJcbnRvZ2dsZU1lbnUoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2hlYWRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);