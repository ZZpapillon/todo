/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/BioRhyme-Bold.ttf */ "./src/icons/BioRhyme-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/icons/BioRhyme-ExtraBold.ttf */ "./src/icons/BioRhyme-ExtraBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! icons/mountain.jpg */ "./src/icons/mountain.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23000000%27 d=%27M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23000000%27 d=%27M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'MyFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n        \n\n}\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar content\"\n        \"footer footer\";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 5fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n        /* Resizes the background image to cover the entire header */\n        background-position: center;\n        /* Centers the background image within the header */\n    opacity: 0.8;\n    padding: 20px;\n    color: var(--light-blue);\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n    \n}\n.header-icon img {\n  width: 90px;\n  height: 90px;\n  \n}\n.header-name {\n    font-size: 90px;\n    font-weight: bolder;\n    white-space: nowrap;\n    text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;\n        /* Set the white shadow around the edges */\n    \n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: var(--light-blue);\n    padding: 20px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    overflow-y: auto;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n  \n    \n}\n\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    gap: 10px;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    \n}\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 15px;\n    grid-template-columns: auto;\n}\n.icons img {\n    width: 35px;\n    height: 35px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 17px;\n    grid-template-columns: auto;\n    font-size: 25px\n}\n\n.selection {\n    color: white;\n    font-size: 30px;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n.newProject {\n    height: 20px;\n    width: 100px;\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n        grid-template-columns: 1fr;\n        gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 400px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n.form {\n    display: grid;\n    gap: 20px;\n}\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type=\"text\"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type=\"submit\"] {\n    padding: 15px 25px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type=\"submit\"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto\n}\n\n.form button[type=\"submit\"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n    border: 2px solid transparent;\n    margin-top: 10px;\n}\n\n.priority-circle.selected {\n    \n    display: inline-block;\n    border: 5px solid lightblue;\n        width: 45px;\n        height: 45px;\n        border-radius: 50%;\n        margin-right: 5px;\n        vertical-align: middle;\n       \n}\n\n.priority-circle.gray {\n    background-color: gray;\n}\n\n.priority-circle.blue {\n    background-color: blue;\n}\n\n.priority-circle.red {\n    background-color: red;\n}\n\n.newPost {\n    padding: 10px;\n    background-color: #f0f0f0;\n    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\n    box-shadow: 20px 20px rgba(84, 84, 84, 0.15);\n        transition: all .4s ease;\n}\n.newPost:hover {\n    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n    box-shadow: 10px 10px rgba(93, 93, 93, 0.25);\n}\n\n.newPost .title {\n    font-weight: bold;\n}\n\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-auto-rows: min-content;\n    grid-template-areas:\n            \"selection newpost newproject\";\n            \n            \n    justify-items: center;\n        align-items: start;\n        gap: 30px;\n        \n}\n.selection {\n    grid-area: selection;\n}\n.newProject {\n    grid-area: newproject;\n    \n    \n}\n.newPost {\n    grid-area: newpost;\n    \n    \n    \n\n}\n.newPost:nth-child(1) {\n    grid-area: newpost;\n    /* Add this line to position the first newPost element */\n}\n\n.newPost:nth-child(n+2) {\n    grid-row-start: span 2;\n    /* Add this line to push subsequent newPost elements down by 1 row */\n}\n\n.checkbox-input {\n    height: 20px;\n    width: 20px;\n}\n\n.newPost {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n    grid-template-areas:\n        \"priority title delete\"\n        \"checkbox description category\"\n        \". . .\";\n    grid-gap: 10px;\n    height: 70px;\n    width: 900px;\n    border-radius: 25px;\n    border: 2px solid white;\n    background-color: rgba(229, 229, 229, 0.5);\n    overflow: hidden;\n    margin-top: 20px;\n    margin-bottom: 50px;\n}\n\n\n.deleteButton {\n    grid-area: delete;\n    height: 20px;\n    \n}\n\n.titlePart {\n    grid-area: title;\n}\n\n.checkbox-input {\n    grid-area: checkbox;\n  \n}\n\n.priorityPart {\n    grid-area: priority;\n    height: 10px;\n   \n}\n\n.categoryPart {\n    grid-area: category;\n    justify-self: end;\n    place-self: end;\n\n}\n\n.describtionPart {\n    grid-area: description;\n}\n\n.content {\n    background: linear-gradient(-45deg, #bdc3c7, #ffffff, #b3e6ff);\n    background-size: 400% 400%;\n    animation: gradient 15s ease infinite;\n    \n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./icons/BioRhyme-Bold.ttf') format('truetype'),\n         url('/src/icons/BioRhyme-ExtraBold.ttf') format('ttf');\n        \n\n}\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar content\"\n        \"footer footer\";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 5fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-image: url(icons/mountain.jpg);\n    background-size: cover;\n        /* Resizes the background image to cover the entire header */\n        background-position: center;\n        /* Centers the background image within the header */\n    opacity: 0.8;\n    padding: 20px;\n    color: var(--light-blue);\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n    \n}\n.header-icon img {\n  width: 90px;\n  height: 90px;\n  \n}\n.header-name {\n    font-size: 90px;\n    font-weight: bolder;\n    white-space: nowrap;\n    text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;\n        /* Set the white shadow around the edges */\n    \n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: var(--light-blue);\n    padding: 20px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    overflow-y: auto;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n  \n    \n}\n\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    gap: 10px;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    \n}\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 15px;\n    grid-template-columns: auto;\n}\n.icons img {\n    width: 35px;\n    height: 35px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 17px;\n    grid-template-columns: auto;\n    font-size: 25px\n}\n\n.selection {\n    color: white;\n    font-size: 30px;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n.newProject {\n    height: 20px;\n    width: 100px;\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n        grid-template-columns: 1fr;\n        gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 400px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n.form {\n    display: grid;\n    gap: 20px;\n}\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type=\"text\"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%23000000' d='M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type=\"submit\"] {\n    padding: 15px 25px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type=\"submit\"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto\n}\n\n.form button[type=\"submit\"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n    border: 2px solid transparent;\n    margin-top: 10px;\n}\n\n.priority-circle.selected {\n    \n    display: inline-block;\n    border: 5px solid lightblue;\n        width: 45px;\n        height: 45px;\n        border-radius: 50%;\n        margin-right: 5px;\n        vertical-align: middle;\n       \n}\n\n.priority-circle.gray {\n    background-color: gray;\n}\n\n.priority-circle.blue {\n    background-color: blue;\n}\n\n.priority-circle.red {\n    background-color: red;\n}\n\n.newPost {\n    padding: 10px;\n    background-color: #f0f0f0;\n    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\n    box-shadow: 20px 20px rgba(84, 84, 84, 0.15);\n        transition: all .4s ease;\n}\n.newPost:hover {\n    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n    box-shadow: 10px 10px rgba(93, 93, 93, 0.25);\n}\n\n.newPost .title {\n    font-weight: bold;\n}\n\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-auto-rows: min-content;\n    grid-template-areas:\n            \"selection newpost newproject\";\n            \n            \n    justify-items: center;\n        align-items: start;\n        gap: 30px;\n        \n}\n.selection {\n    grid-area: selection;\n}\n.newProject {\n    grid-area: newproject;\n    \n    \n}\n.newPost {\n    grid-area: newpost;\n    \n    \n    \n\n}\n.newPost:nth-child(1) {\n    grid-area: newpost;\n    /* Add this line to position the first newPost element */\n}\n\n.newPost:nth-child(n+2) {\n    grid-row-start: span 2;\n    /* Add this line to push subsequent newPost elements down by 1 row */\n}\n\n.checkbox-input {\n    height: 20px;\n    width: 20px;\n}\n\n.newPost {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n    grid-template-areas:\n        \"priority title delete\"\n        \"checkbox description category\"\n        \". . .\";\n    grid-gap: 10px;\n    height: 70px;\n    width: 900px;\n    border-radius: 25px;\n    border: 2px solid white;\n    background-color: rgba(229, 229, 229, 0.5);\n    overflow: hidden;\n    margin-top: 20px;\n    margin-bottom: 50px;\n}\n\n\n.deleteButton {\n    grid-area: delete;\n    height: 20px;\n    \n}\n\n.titlePart {\n    grid-area: title;\n}\n\n.checkbox-input {\n    grid-area: checkbox;\n  \n}\n\n.priorityPart {\n    grid-area: priority;\n    height: 10px;\n   \n}\n\n.categoryPart {\n    grid-area: category;\n    justify-self: end;\n    place-self: end;\n\n}\n\n.describtionPart {\n    grid-area: description;\n}\n\n.content {\n    background: linear-gradient(-45deg, #bdc3c7, #ffffff, #b3e6ff);\n    background-size: 400% 400%;\n    animation: gradient 15s ease infinite;\n    \n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMposter.js":
/*!**************************!*\
  !*** ./src/DOMposter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentDom": () => (/* binding */ contentDom)
/* harmony export */ });
const contentDom = (() => {
    const posts = {
        Today: [],
        Projects: [],
        Personal: [],
        Work: [],
        domManipulator: function (project) {
            posts.Today.push(project);
            if (project.category === 'Projects') {
                posts.Projects.push(project);
            }
            if (project.category === 'Personal') {
                posts.Personal.push(project);
            }
            if (project.category === 'Work') {
                posts.Work.push(project);
            }
        },

        domPoster: function (projectArray) {
            const content = document.querySelector('.content'); // Get the content element
            const existingPosts = content.querySelectorAll('.newPost');

            // const rowSpan = existingPosts.length + 5;

            // existingPosts.forEach((post) => {
            //     post.style.gridRowEnd = `span ${rowSpan}`;
            // });

            // Clear the existingPosts before appending new posts
            existingPosts.forEach((post) => {
                post.remove();
            });
            // const existingPosts = content.querySelectorAll('.newPost');
            // if (!existingPosts || existingPosts.length === 0) {
            //     return; // Exit the function if no "newPost" elements are found
            // }
            // const rowSpan = existingPosts.length + 2;

            

            // existingPosts.forEach((post) => {
            //     post.style.gridRowEnd = `span ${rowSpan}`;
            // });

            projectArray.forEach((project) => {
                const newPost = document.createElement('div');
                newPost.classList.add('newPost');
                

                const category = document.createElement('div');
                category.classList.add('categoryPart');
                category.textContent = project.category;

                const title = document.createElement('div');
                title.classList.add('titlePart');
                title.textContent = project.title;

                const describtion = document.createElement('div');
                describtion.classList.add('describtionPart');
                describtion.textContent = project.description;

                const priorityPart = document.createElement('div');
                priorityPart.classList.add('priorityPart');

                const selectedCircle = document.createElement('span');
                selectedCircle.classList.add('priority-circle');
                selectedCircle.style.backgroundColor = project.priority;

                priorityPart.appendChild(selectedCircle);

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('checkbox-input');

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('deleteButton');
                deleteButton.textContent = 'X';
                deleteButton.addEventListener('click', () => {
                    const index = projectArray.findIndex((post) => post === project);
                    if (index !== -1) {
                        projectArray.splice(index, 1);
                        newPost.remove();

                        // Remove the post from the "Today" section
                        const todayPosts = contentDom.posts.Today;
                        const todayIndex = todayPosts.findIndex((post) => post === project);
                        if (todayIndex !== -1) {
                            todayPosts.splice(todayIndex, 1);
                        }

                        // Remove the post from the respective selection
                        const selectionText = selection.textContent.replace(':', '');
                        const selectionPosts = contentDom.posts[selectionText];
                        const selectionIndex = selectionPosts.findIndex((post) => post === project);
                        if (selectionIndex !== -1) {
                            selectionPosts.splice(selectionIndex, 1);
                        }

                        // Update the display for "Today" and the respective selection
                        contentDom.posts.domPoster(contentDom.posts.Today);
                        contentDom.posts.domPoster(selectionPosts);
                    }
                });




                newPost.appendChild(deleteButton);
                newPost.appendChild(category);
                newPost.appendChild(title);
                newPost.appendChild(describtion);
                newPost.appendChild(priorityPart);
                newPost.appendChild(checkbox);

                content.prepend(newPost);
            });
        },
    };

    return {
        posts,
    };
})();









/***/ }),

/***/ "./src/domSwitcher.js":
/*!****************************!*\
  !*** ./src/domSwitcher.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domChecker": () => (/* binding */ domChecker)
/* harmony export */ });
/* harmony import */ var _DOMposter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMposter */ "./src/DOMposter.js");






const domChecker = (() => {
    function checker(selection) {
        if (selection === 'Today:') {
            _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.domPoster(_DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Today)
        }
        if (selection === 'Projects:') {
            _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.domPoster(_DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Projects)
        }
        if (selection === 'Personal:') {
            _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.domPoster(_DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Personal)
        }
        if (selection === 'Work:') {
            _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.domPoster(_DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Work)
        }
    }

    function changeOfSelection() {
        const today = document.querySelector('.today');
        const projects = document.querySelector('.projects');
        const personal = document.querySelector('.personal');
        const work = document.querySelector('.work');
        const selection = document.querySelector('.selection')

        function handleSelectionChange(selectedText) {
            selection.textContent = selectedText;
            domChecker.checker(selection.textContent);
        }

        today.addEventListener('click', () => {
            handleSelectionChange('Today:');
            console.log(_DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Today)
        });
        projects.addEventListener('click', () => {
            handleSelectionChange('Projects:');
        });
        personal.addEventListener('click', () => {
            handleSelectionChange('Personal:');
        });
        work.addEventListener('click', () => {
            handleSelectionChange('Work:');
        });
        domChecker.checker(selection.textContent);
    }

    return {
        checker,
        changeOfSelection,
    };
})();



/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
function createForm(callback) {
    const container = document.querySelector('.container');
    const clickButton = document.querySelector('.newProject');

    
        // Clear existing content
        container.classList.add('blur');

        // Create the form container
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        formContainer.style.display = 'block';

        // Create the form element
        const form = document.createElement('form');
        form.classList.add('form');

        // Create the select input for category
        const selectLabel = document.createElement('label');
        selectLabel.textContent = 'Category:';
        const selectInput = document.createElement('select');
        selectInput.name = 'category';
        const categories = ['Projects', 'Personal', 'Work'];
        categories.forEach((category) => {
            const option = document.createElement('option');
            option.textContent = category;
            selectInput.appendChild(option);
        });
        selectLabel.appendChild(selectInput);

        // Create the input for title
        const titleLabel = document.createElement('label');
        titleLabel.textContent = 'Title:';
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.name = 'title';
        titleLabel.appendChild(titleInput);

        // Create the input for description
        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'Description:';
        const descriptionInput = document.createElement('textarea');
        descriptionInput.name = 'description';
        descriptionLabel.appendChild(descriptionInput);

        // Create the input for priority
        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = 'Priority:';

        const priorityDiv = document.createElement('div');

        const grayCircle = createPriorityCircle('gray');
        const blueCircle = createPriorityCircle('blue');
        const redCircle = createPriorityCircle('red');

        priorityDiv.appendChild(grayCircle);
        priorityDiv.appendChild(blueCircle);
        priorityDiv.appendChild(redCircle);

        priorityLabel.appendChild(priorityDiv);

        // Create the submit button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';

        // Append all the form elements to the form
        form.appendChild(selectLabel);
        form.appendChild(titleLabel);
        form.appendChild(descriptionLabel);
        form.appendChild(priorityLabel);
        form.appendChild(submitButton);

        // Append the form to the form container
        formContainer.appendChild(form);

        // Append the form container to the container
        container.appendChild(formContainer);

        // Scroll to the form container
        container.scrollTo({
            top: formContainer.offsetTop,
            behavior: 'smooth',
        });

        // Handle form submission
        const handleSubmit = (event) => {
            event.preventDefault();

            // Retrieve form values
            const category = selectInput.value;
            const title = titleInput.value;
            const description = descriptionInput.value;
            const priority = getSelectedPriority();

            callback(category, title, description, priority);

            

            formContainer.remove();
            container.classList.remove('blur');
            form.reset();
        };

        form.addEventListener('submit', handleSubmit);

        // Helper function to create a priority circle
        function createPriorityCircle(color) {
            const circle = document.createElement('span');
            circle.classList.add('priority-circle');
            circle.classList.add(color);
            circle.addEventListener('click', () => {
                grayCircle.classList.remove('selected');
                blueCircle.classList.remove('selected');
                redCircle.classList.remove('selected');
                circle.classList.add('selected');
            });
            return circle;
        }

        // Helper function to get the selected priority
        function getSelectedPriority() {
            if (grayCircle.classList.contains('selected')) {
                return 'gray';
            } else if (blueCircle.classList.contains('selected')) {
                return 'blue';
            } else if (redCircle.classList.contains('selected')) {
                return 'red';
            }
            return '';
        }
    
}


/***/ }),

/***/ "./src/projectgenerator.js":
/*!*********************************!*\
  !*** ./src/projectgenerator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectGen": () => (/* binding */ ProjectGen)
/* harmony export */ });


class ProjectGen {
    constructor(category, title, description, priority) {
        this.category = category;
        this.title = title;
        this.description = description;
        this.priority = priority;
    }

    info() {
        return `Category: ${this.category}, Title: ${this.title}, Description: ${this.description}, Priority: ${this.priority}`;
    }
}




/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23000000%27 d=%27M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z%27/%3E%3C/svg%3E":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23000000%27 d=%27M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z%27/%3E%3C/svg%3E ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23000000%27 d=%27M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z%27/%3E%3C/svg%3E";

/***/ }),

/***/ "./src/icons/BioRhyme-Bold.ttf":
/*!*************************************!*\
  !*** ./src/icons/BioRhyme-Bold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "114db6f044ce13c78069.ttf";

/***/ }),

/***/ "./src/icons/BioRhyme-ExtraBold.ttf":
/*!******************************************!*\
  !*** ./src/icons/BioRhyme-ExtraBold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de9666d81037cf49084b.ttf";

/***/ }),

/***/ "./src/icons/mountain.jpg":
/*!********************************!*\
  !*** ./src/icons/mountain.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d172b9e34b503fe031c4.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectgenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectgenerator */ "./src/projectgenerator.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _DOMposter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMposter */ "./src/DOMposter.js");
/* harmony import */ var _domSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domSwitcher */ "./src/domSwitcher.js");







console.log('Radi radi')


const container = document.querySelector('.container');
const header = document.querySelector('.header');
const headerIcon = document.querySelector('.header-icon');
const headerName = document.querySelector('.header-name');
const sidebar = document.querySelector('.sidebar');
const icons = document.querySelector('.icons');
const todayIcon = document.querySelector('.today-icon');
const projectsIcon = document.querySelector('.projects-icon');
const personalIcon = document.querySelector('.personal-icon');
const workIcon = document.querySelector('.work-icon');
const todos = document.querySelector('.todos');
const today = document.querySelector('.today');
const projects = document.querySelector('.projects');
const personal = document.querySelector('.personal');
const work = document.querySelector('.work');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');



// Create a new div element
const selection = document.createElement('div');
selection.classList.add('selection');
selection.textContent = 'Today:';

// Append the selection div to the content element
content.appendChild(selection);


const clickButton = document.createElement('button');
clickButton.classList.add('newProject')
clickButton.textContent = 'Click';

// Append the button to the content element
content.appendChild(clickButton);


clickButton.addEventListener('click', () => {
    (0,_form__WEBPACK_IMPORTED_MODULE_2__.createForm)((category, title, description, priority) => {
        const project = new _projectgenerator__WEBPACK_IMPORTED_MODULE_1__.ProjectGen(category, title, description, priority);
        _DOMposter__WEBPACK_IMPORTED_MODULE_3__.contentDom.posts.domManipulator(project)
        _domSwitcher__WEBPACK_IMPORTED_MODULE_4__.domChecker.checker(selection.textContent)

        
        
        
    });
});
_domSwitcher__WEBPACK_IMPORTED_MODULE_4__.domChecker.changeOfSelection();
_domSwitcher__WEBPACK_IMPORTED_MODULE_4__.domChecker.checker(selection)
console.log(selection.textContent)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxTQUFTLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxjQUFjLE1BQU0sS0FBSyxnQkFBZ0IsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFV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WUFBWSxrRUFBMEIsQ0FBQyw2REFBcUI7QUFDNUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qiw4REFBc0I7QUFDOUMsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERNO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsY0FBYyxXQUFXLFdBQVcsaUJBQWlCLGlCQUFpQixjQUFjLGNBQWM7QUFDOUg7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMEI7QUFDWDtBQUNLO0FBQ0U7OztBQUczQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLElBQUksaURBQVU7QUFDZCw0QkFBNEIseURBQVU7QUFDdEMsUUFBUSx1RUFBK0I7QUFDdkMsUUFBUSw0REFBa0I7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Qsc0VBQTRCO0FBQzVCLDREQUFrQjtBQUNsQixrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET01wb3N0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21Td2l0Y2hlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0Z2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pY29ucy9CaW9SaHltZS1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvaWNvbnMvQmlvUmh5bWUtRXh0cmFCb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImljb25zL21vdW50YWluLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3OCUyNyBoZWlnaHQ9JTI3OCUyNyB2aWV3Qm94PSUyNzAgMCA4IDglMjclM0UlM0NwYXRoIGZpbGw9JTI3JTIzMDAwMDAwJTI3IGQ9JTI3TTggM0w1IDZWMHpNMCAzbDMtM2gydjZIM0wwIDN6JTI3LyUzRSUzQy9zdmclM0VcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG4gICAgICAgIFxcblxcbn1cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBSZXBsYWNlIHdpdGggeW91ciBkZXNpcmVkIGJhY2tncm91bmQgY29sb3IgKi9cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjQUREOEU2O1xcbiAgICAtLWxpZ2h0LWdyYXk6ICNEM0QzRDM7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBjb250ZW50XFxcIlxcbiAgICAgICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICAvKiBSZXNpemVzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgaGVhZGVyICovXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHdpdGhpbiB0aGUgaGVhZGVyICovXFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTBmcjtcXG4gICAgXFxufVxcbi5oZWFkZXItaWNvbiBpbWcge1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBcXG59XFxuLmhlYWRlci1uYW1lIHtcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAtMnB4IDAgI2ZmZiwgMnB4IC0ycHggMCAjZmZmLCAtMnB4IDJweCAwICNmZmYsIDJweCAycHggMCAjZmZmO1xcbiAgICAgICAgLyogU2V0IHRoZSB3aGl0ZSBzaGFkb3cgYXJvdW5kIHRoZSBlZGdlcyAqL1xcbiAgICBcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgXFxuICAgIFxcbn1cXG5cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBcXG59XFxuLmljb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMTBmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxufVxcbi5pY29ucyBpbWcge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxMGZyO1xcbiAgICBnYXA6IDE3cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgZm9udC1zaXplOiAyNXB4XFxufVxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcbi5uZXdQcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYmx1cj4qOm5vdCguZm9ybS1jb250YWluZXIpIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIEZvcm0gY29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ2FwOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmZvcm0gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0gc2VsZWN0LFxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzlENkRGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5mb3JtIHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JGRjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIEFkZGl0aW9uYWwgU3R5bGluZyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvXFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuc2VsZWN0ZWQge1xcbiAgICBcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgICAgICB3aWR0aDogNDVweDtcXG4gICAgICAgIGhlaWdodDogNDVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICAgXFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuZ3JheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUucmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubmV3UG9zdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlIDAlIDAlIDAlIC8gMCUgMCUgMCUgMCU7XFxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCByZ2JhKDg0LCA4NCwgODQsIDAuMTUpO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xcbn1cXG4ubmV3UG9zdDpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlIDAlIDUwJSA1MCUgLyAwJSAwJSA1JSA1JTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYmEoOTMsIDkzLCA5MywgMC4yNSk7XFxufVxcblxcbi5uZXdQb3N0IC50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICAgICAgXFxcInNlbGVjdGlvbiBuZXdwb3N0IG5ld3Byb2plY3RcXFwiO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIFxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBnYXA6IDMwcHg7XFxuICAgICAgICBcXG59XFxuLnNlbGVjdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogc2VsZWN0aW9uO1xcbn1cXG4ubmV3UHJvamVjdCB7XFxuICAgIGdyaWQtYXJlYTogbmV3cHJvamVjdDtcXG4gICAgXFxuICAgIFxcbn1cXG4ubmV3UG9zdCB7XFxuICAgIGdyaWQtYXJlYTogbmV3cG9zdDtcXG4gICAgXFxuICAgIFxcbiAgICBcXG5cXG59XFxuLm5ld1Bvc3Q6bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1hcmVhOiBuZXdwb3N0O1xcbiAgICAvKiBBZGQgdGhpcyBsaW5lIHRvIHBvc2l0aW9uIHRoZSBmaXJzdCBuZXdQb3N0IGVsZW1lbnQgKi9cXG59XFxuXFxuLm5ld1Bvc3Q6bnRoLWNoaWxkKG4rMikge1xcbiAgICBncmlkLXJvdy1zdGFydDogc3BhbiAyO1xcbiAgICAvKiBBZGQgdGhpcyBsaW5lIHRvIHB1c2ggc3Vic2VxdWVudCBuZXdQb3N0IGVsZW1lbnRzIGRvd24gYnkgMSByb3cgKi9cXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLm5ld1Bvc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInByaW9yaXR5IHRpdGxlIGRlbGV0ZVxcXCJcXG4gICAgICAgIFxcXCJjaGVja2JveCBkZXNjcmlwdGlvbiBjYXRlZ29yeVxcXCJcXG4gICAgICAgIFxcXCIuIC4gLlxcXCI7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA5MDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMjksIDIyOSwgMC41KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuXFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIFxcbn1cXG5cXG4udGl0bGVQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG4gIFxcbn1cXG5cXG4ucHJpb3JpdHlQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgIFxcbn1cXG5cXG4uY2F0ZWdvcnlQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBjYXRlZ29yeTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG5cXG59XFxuXFxuLmRlc2NyaWJ0aW9uUGFydCB7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2JkYzNjNywgI2ZmZmZmZiwgI2IzZTZmZik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcbiAgICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xcbiAgICBcXG59XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQjs4REFDMkQ7OztBQUcvRDtBQUNBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDViwrQ0FBK0M7SUFDL0MseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7O3VCQUdtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseURBQXlDO0lBQ3pDLHNCQUFzQjtRQUNsQiw0REFBNEQ7UUFDNUQsMkJBQTJCO1FBQzNCLG1EQUFtRDtJQUN2RCxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUNBQW1DOztBQUV2QztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0FBRWQ7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLCtFQUErRTtRQUMzRSwwQ0FBMEM7O0FBRWxEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjs7O0FBR3BCOzs7QUFHQTtJ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RTs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQjs7O2VBR1c7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDhEQUE4RDtJQUM5RCwwQkFBMEI7SUFDMUIscUNBQXFDOztBQUV6Qzs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vaWNvbnMvQmlvUmh5bWUtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgICAgICAgdXJsKCcvc3JjL2ljb25zL0Jpb1JoeW1lLUV4dHJhQm9sZC50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbiAgICAgICAgXFxuXFxufVxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWJsdWU6ICNBREQ4RTY7XFxuICAgIC0tbGlnaHQtZ3JheTogI0QzRDNEMztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiXFxuICAgICAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDExZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGljb25zL21vdW50YWluLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICAvKiBSZXNpemVzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgaGVhZGVyICovXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHdpdGhpbiB0aGUgaGVhZGVyICovXFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTBmcjtcXG4gICAgXFxufVxcbi5oZWFkZXItaWNvbiBpbWcge1xcbiAgd2lkdGg6IDkwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBcXG59XFxuLmhlYWRlci1uYW1lIHtcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAtMnB4IDAgI2ZmZiwgMnB4IC0ycHggMCAjZmZmLCAtMnB4IDJweCAwICNmZmYsIDJweCAycHggMCAjZmZmO1xcbiAgICAgICAgLyogU2V0IHRoZSB3aGl0ZSBzaGFkb3cgYXJvdW5kIHRoZSBlZGdlcyAqL1xcbiAgICBcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgXFxuICAgIFxcbn1cXG5cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBcXG59XFxuLmljb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMTBmcjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxufVxcbi5pY29ucyBpbWcge1xcbiAgICB3aWR0aDogMzVweDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxMGZyO1xcbiAgICBnYXA6IDE3cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgZm9udC1zaXplOiAyNXB4XFxufVxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcbi5uZXdQcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYmx1cj4qOm5vdCguZm9ybS1jb250YWluZXIpIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIEZvcm0gY29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgICAgZ2FwOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuLmZvcm0gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0gc2VsZWN0LFxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzlENkRGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5mb3JtIHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBmaWxsPSclMjMwMDAwMDAnIGQ9J004IDNMNSA2VjB6TTAgM2wzLTNoMnY2SDNMMCAzeicvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA4cHggY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBBZGRpdGlvbmFsIFN0eWxpbmcgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmZvcm0gbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgbWF4LWhlaWdodDogNTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0b1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLnNlbGVjdGVkIHtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgbGlnaHRibHVlO1xcbiAgICAgICAgd2lkdGg6IDQ1cHg7XFxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgICAgIFxcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLmdyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLmJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm5ld1Bvc3Qge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwJSAwJSAwJSAwJSAvIDAlIDAlIDAlIDAlO1xcbiAgICBib3gtc2hhZG93OiAyMHB4IDIwcHggcmdiYSg4NCwgODQsIDg0LCAwLjE1KTtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcXG59XFxuLm5ld1Bvc3Q6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDkzLCA5MywgOTMsIDAuMjUpO1xcbn1cXG5cXG4ubmV3UG9zdCAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgICAgIFxcXCJzZWxlY3Rpb24gbmV3cG9zdCBuZXdwcm9qZWN0XFxcIjtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgICAgXFxufVxcbi5zZWxlY3Rpb24ge1xcbiAgICBncmlkLWFyZWE6IHNlbGVjdGlvbjtcXG59XFxuLm5ld1Byb2plY3Qge1xcbiAgICBncmlkLWFyZWE6IG5ld3Byb2plY3Q7XFxuICAgIFxcbiAgICBcXG59XFxuLm5ld1Bvc3Qge1xcbiAgICBncmlkLWFyZWE6IG5ld3Bvc3Q7XFxuICAgIFxcbiAgICBcXG4gICAgXFxuXFxufVxcbi5uZXdQb3N0Om50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtYXJlYTogbmV3cG9zdDtcXG4gICAgLyogQWRkIHRoaXMgbGluZSB0byBwb3NpdGlvbiB0aGUgZmlyc3QgbmV3UG9zdCBlbGVtZW50ICovXFxufVxcblxcbi5uZXdQb3N0Om50aC1jaGlsZChuKzIpIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IHNwYW4gMjtcXG4gICAgLyogQWRkIHRoaXMgbGluZSB0byBwdXNoIHN1YnNlcXVlbnQgbmV3UG9zdCBlbGVtZW50cyBkb3duIGJ5IDEgcm93ICovXFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJwcmlvcml0eSB0aXRsZSBkZWxldGVcXFwiXFxuICAgICAgICBcXFwiY2hlY2tib3ggZGVzY3JpcHRpb24gY2F0ZWdvcnlcXFwiXFxuICAgICAgICBcXFwiLiAuIC5cXFwiO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogOTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDAuNSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcblxcbi5kZWxldGVCdXR0b24ge1xcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBcXG59XFxuXFxuLnRpdGxlUGFydCB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxuICBcXG59XFxuXFxuLnByaW9yaXR5UGFydCB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICBcXG59XFxuXFxuLmNhdGVnb3J5UGFydCB7XFxuICAgIGdyaWQtYXJlYTogY2F0ZWdvcnk7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBwbGFjZS1zZWxmOiBlbmQ7XFxuXFxufVxcblxcbi5kZXNjcmlidGlvblBhcnQge1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNiZGMzYzcsICNmZmZmZmYsICNiM2U2ZmYpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG4gICAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcXG4gICAgXFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNvbnRlbnREb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RzID0ge1xuICAgICAgICBUb2RheTogW10sXG4gICAgICAgIFByb2plY3RzOiBbXSxcbiAgICAgICAgUGVyc29uYWw6IFtdLFxuICAgICAgICBXb3JrOiBbXSxcbiAgICAgICAgZG9tTWFuaXB1bGF0b3I6IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBwb3N0cy5Ub2RheS5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgaWYgKHByb2plY3QuY2F0ZWdvcnkgPT09ICdQcm9qZWN0cycpIHtcbiAgICAgICAgICAgICAgICBwb3N0cy5Qcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2plY3QuY2F0ZWdvcnkgPT09ICdQZXJzb25hbCcpIHtcbiAgICAgICAgICAgICAgICBwb3N0cy5QZXJzb25hbC5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2plY3QuY2F0ZWdvcnkgPT09ICdXb3JrJykge1xuICAgICAgICAgICAgICAgIHBvc3RzLldvcmsucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkb21Qb3N0ZXI6IGZ1bmN0aW9uIChwcm9qZWN0QXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvLyBHZXQgdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQb3N0cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld1Bvc3QnKTtcblxuICAgICAgICAgICAgLy8gY29uc3Qgcm93U3BhbiA9IGV4aXN0aW5nUG9zdHMubGVuZ3RoICsgNTtcblxuICAgICAgICAgICAgLy8gZXhpc3RpbmdQb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcG9zdC5zdHlsZS5ncmlkUm93RW5kID0gYHNwYW4gJHtyb3dTcGFufWA7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nUG9zdHMgYmVmb3JlIGFwcGVuZGluZyBuZXcgcG9zdHNcbiAgICAgICAgICAgIGV4aXN0aW5nUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvc3QucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGV4aXN0aW5nUG9zdHMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdQb3N0Jyk7XG4gICAgICAgICAgICAvLyBpZiAoIWV4aXN0aW5nUG9zdHMgfHwgZXhpc3RpbmdQb3N0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47IC8vIEV4aXQgdGhlIGZ1bmN0aW9uIGlmIG5vIFwibmV3UG9zdFwiIGVsZW1lbnRzIGFyZSBmb3VuZFxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gY29uc3Qgcm93U3BhbiA9IGV4aXN0aW5nUG9zdHMubGVuZ3RoICsgMjtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIGV4aXN0aW5nUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHBvc3Quc3R5bGUuZ3JpZFJvd0VuZCA9IGBzcGFuICR7cm93U3Bhbn1gO1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5ld1Bvc3QuY2xhc3NMaXN0LmFkZCgnbmV3UG9zdCcpO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVBhcnQnKTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IHByb2plY3QuY2F0ZWdvcnk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlUGFydCcpO1xuICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaWJ0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpYnRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpYnRpb25QYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpYnRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlQYXJ0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5UGFydCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaXJjbGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5UGFydC5hcHBlbmRDaGlsZChzZWxlY3RlZENpcmNsZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc3QucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSBcIlRvZGF5XCIgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXlQb3N0cyA9IGNvbnRlbnREb20ucG9zdHMuVG9kYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheUluZGV4ID0gdG9kYXlQb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZGF5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXlQb3N0cy5zcGxpY2UodG9kYXlJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSByZXNwZWN0aXZlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uVGV4dCA9IHNlbGVjdGlvbi50ZXh0Q29udGVudC5yZXBsYWNlKCc6JywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uUG9zdHMgPSBjb250ZW50RG9tLnBvc3RzW3NlbGVjdGlvblRleHRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSW5kZXggPSBzZWxlY3Rpb25Qb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblBvc3RzLnNwbGljZShzZWxlY3Rpb25JbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZGlzcGxheSBmb3IgXCJUb2RheVwiIGFuZCB0aGUgcmVzcGVjdGl2ZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnREb20ucG9zdHMuZG9tUG9zdGVyKGNvbnRlbnREb20ucG9zdHMuVG9kYXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoc2VsZWN0aW9uUG9zdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cblxuXG5cbiAgICAgICAgICAgICAgICBuZXdQb3N0LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChkZXNjcmlidGlvbik7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChwcmlvcml0eVBhcnQpO1xuICAgICAgICAgICAgICAgIG5ld1Bvc3QuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgICAgICAgICAgY29udGVudC5wcmVwZW5kKG5ld1Bvc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzLFxuICAgIH07XG59KSgpO1xuXG5cblxuXG5cblxuXG4iLCJcblxuaW1wb3J0IHsgY29udGVudERvbSB9IGZyb20gJy4vRE9NcG9zdGVyJztcblxuXG5cbmV4cG9ydCBjb25zdCBkb21DaGVja2VyID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjaGVja2VyKHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnVG9kYXk6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5Ub2RheSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnUHJvamVjdHM6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5Qcm9qZWN0cylcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnUGVyc29uYWw6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5QZXJzb25hbClcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnV29yazonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLldvcmspXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VPZlNlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwnKTtcbiAgICAgICAgY29uc3Qgd29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb24nKVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZFRleHQpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkVGV4dDtcbiAgICAgICAgICAgIGRvbUNoZWNrZXIuY2hlY2tlcihzZWxlY3Rpb24udGV4dENvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoJ1RvZGF5OicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudERvbS5wb3N0cy5Ub2RheSlcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKCdQcm9qZWN0czonKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBlcnNvbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKCdQZXJzb25hbDonKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoJ1dvcms6Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb21DaGVja2VyLmNoZWNrZXIoc2VsZWN0aW9uLnRleHRDb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja2VyLFxuICAgICAgICBjaGFuZ2VPZlNlbGVjdGlvbixcbiAgICB9O1xufSkoKTtcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2xpY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdCcpO1xuXG4gICAgXG4gICAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGlucHV0IGZvciBjYXRlZ29yeVxuICAgICAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gJ0NhdGVnb3J5Oic7XG4gICAgICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdElucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gWydQcm9qZWN0cycsICdQZXJzb25hbCcsICdXb3JrJ107XG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0TGFiZWwuYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZm9yIHRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpbnB1dCBmb3IgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpbnB1dCBmb3IgcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGdyYXlDaXJjbGUgPSBjcmVhdGVQcmlvcml0eUNpcmNsZSgnZ3JheScpO1xuICAgICAgICBjb25zdCBibHVlQ2lyY2xlID0gY3JlYXRlUHJpb3JpdHlDaXJjbGUoJ2JsdWUnKTtcbiAgICAgICAgY29uc3QgcmVkQ2lyY2xlID0gY3JlYXRlUHJpb3JpdHlDaXJjbGUoJ3JlZCcpO1xuXG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGdyYXlDaXJjbGUpO1xuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChibHVlQ2lyY2xlKTtcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocmVkQ2lyY2xlKTtcblxuICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgICAgIC8vIEFwcGVuZCBhbGwgdGhlIGZvcm0gZWxlbWVudHMgdG8gdGhlIGZvcm1cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIGZvcm0gdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBmb3JtIGNvbnRhaW5lciB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuICAgICAgICAvLyBTY3JvbGwgdG8gdGhlIGZvcm0gY29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUbyh7XG4gICAgICAgICAgICB0b3A6IGZvcm1Db250YWluZXIub2Zmc2V0VG9wLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gUmV0cmlldmUgZm9ybSB2YWx1ZXNcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gc2VsZWN0SW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGdldFNlbGVjdGVkUHJpb3JpdHkoKTtcblxuICAgICAgICAgICAgY2FsbGJhY2soY2F0ZWdvcnksIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xuXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcmlvcml0eSBjaXJjbGVcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlDaXJjbGUoY29sb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jaXJjbGUnKTtcbiAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKGNvbG9yKTtcbiAgICAgICAgICAgIGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBncmF5Q2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgYmx1ZUNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHJlZENpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY2lyY2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgc2VsZWN0ZWQgcHJpb3JpdHlcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcmlvcml0eSgpIHtcbiAgICAgICAgICAgIGlmIChncmF5Q2lyY2xlLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZ3JheSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJsdWVDaXJjbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibHVlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVkQ2lyY2xlLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAncmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIFxufVxuIiwiXG5cbmNsYXNzIFByb2plY3RHZW4ge1xuICAgIGNvbnN0cnVjdG9yKGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBpbmZvKCkge1xuICAgICAgICByZXR1cm4gYENhdGVnb3J5OiAke3RoaXMuY2F0ZWdvcnl9LCBUaXRsZTogJHt0aGlzLnRpdGxlfSwgRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn0sIFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3RHZW4gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQcm9qZWN0R2VuIH0gZnJvbSAnLi9wcm9qZWN0Z2VuZXJhdG9yJ1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBjb250ZW50RG9tIH0gZnJvbSAnLi9ET01wb3N0ZXInO1xuaW1wb3J0IHsgZG9tQ2hlY2tlciB9IGZyb20gJy4vZG9tU3dpdGNoZXInO1xuXG5cbmNvbnNvbGUubG9nKCdSYWRpIHJhZGknKVxuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IGhlYWRlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWljb24nKTtcbmNvbnN0IGhlYWRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW5hbWUnKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbnMnKTtcbmNvbnN0IHRvZGF5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1pY29uJyk7XG5jb25zdCBwcm9qZWN0c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtaWNvbicpO1xuY29uc3QgcGVyc29uYWxJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbmFsLWljb24nKTtcbmNvbnN0IHdvcmtJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmstaWNvbicpO1xuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwnKTtcbmNvbnN0IHdvcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yaycpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG5cblxuXG4vLyBDcmVhdGUgYSBuZXcgZGl2IGVsZW1lbnRcbmNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuc2VsZWN0aW9uLnRleHRDb250ZW50ID0gJ1RvZGF5Oic7XG5cbi8vIEFwcGVuZCB0aGUgc2VsZWN0aW9uIGRpdiB0byB0aGUgY29udGVudCBlbGVtZW50XG5jb250ZW50LmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG5cblxuY29uc3QgY2xpY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNsaWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3QnKVxuY2xpY2tCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xpY2snO1xuXG4vLyBBcHBlbmQgdGhlIGJ1dHRvbiB0byB0aGUgY29udGVudCBlbGVtZW50XG5jb250ZW50LmFwcGVuZENoaWxkKGNsaWNrQnV0dG9uKTtcblxuXG5jbGlja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVGb3JtKChjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RHZW4oY2F0ZWdvcnksIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbU1hbmlwdWxhdG9yKHByb2plY3QpXG4gICAgICAgIGRvbUNoZWNrZXIuY2hlY2tlcihzZWxlY3Rpb24udGV4dENvbnRlbnQpXG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KTtcbn0pO1xuZG9tQ2hlY2tlci5jaGFuZ2VPZlNlbGVjdGlvbigpO1xuZG9tQ2hlY2tlci5jaGVja2VyKHNlbGVjdGlvbilcbmNvbnNvbGUubG9nKHNlbGVjdGlvbi50ZXh0Q29udGVudCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=