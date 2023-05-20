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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'MyFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar content\"\n        \"footer footer\";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 6fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    /* Resizes the background image to cover the entire header */\n    background-position: center;\n    /* Centers the background image within the header */\n    opacity: 0.8;\n    padding: 20px;\n    color: var(--light-blue);\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n}\n\n.header-icon img {\n    width: 90px;\n    height: 90px;\n}\n\n.header-name {\n    font-size: 90px;\n    font-weight: bolder;\n    white-space: nowrap;\n    text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;\n    /* Set the white shadow around the edges */\n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: var(--light-blue);\n    padding: 10px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    overflow-y: auto;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n}\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    gap: 15px;\n    width: 250px;\n    box-sizing: border-box;\n    padding-top: 30px;\n}\n\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 25px;\n    grid-template-columns: auto;\n    align-items: center;\n    place-items: end;\n}\n\n.icons img {\n    width: 45px;\n    height: 45px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 30px;\n    grid-template-columns: auto;\n    font-size: 25px;\n    justify-content: start;\n    place-items: start;\n    margin-top: 10px;\n}\n.work {\n    margin-top: -7px;\n}\n.highlighted {\n    color: #ffffff;\n    /* Set the text color to white */\n    font-weight: bold;\n\n    /* Adjust the font size to your preference */\n    background-color: #55a7ee;\n    /* Set the background color to light blue */\n    padding: 5px 10px;\n    margin-left: 20px;\n    /* Add some padding for spacing */\n    border-radius: 5px;\n    opacity: 0.9;\n    transform: scale(1.3);\n\n    /* Add rounded corners */\n}\n\n/* Add styles for the \"Today\" category icon */\n.highlighted-icons img {\n    transform: scale(1.4);\n    /* Set the height of the icon */\n    fill: #55a7ee;\n    /* Set the color of the icon to match the background */\n    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));\n    /* Add a drop shadow effect */\n}\n\n.selection {\n    font-size: 24px;\n        font-weight: bold;\n        color: white;\n        text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;\n        background-color: #0082a3;\n        padding: 10px;\n        border-radius: 5px;\n        border: 2px solid black;\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n    \n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.newProject {\n    height: 20px;\n    width: 100px;\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 400px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n\n.form {\n    display: grid;\n    gap: 20px;\n}\n\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type=\"text\"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type=\"submit\"] {\n    padding: 15px 25px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type=\"submit\"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto;\n}\n\n.form button[type=\"submit\"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n    border: 2px solid transparent;\n    margin-top: 10px;\n}\n\n.priority-circle.selected {\n    display: inline-block;\n    border: 5px solid lightblue;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\n.priority-circle.gray {\n    background-color: gray;\n}\n\n.priority-circle.blue {\n    background-color: blue;\n}\n\n.priority-circle.red {\n    background-color: red;\n}\n\n.newPost {\n    padding: 10px;\n    background-color: #f0f0f0;\n    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\n    box-shadow: 20px 20px rgba(84, 84, 84, 0.15);\n    transition: all .4s ease;\n}\n\n.newPost:hover {\n    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n    box-shadow: 10px 10px rgba(93, 93, 93, 0.25);\n}\n\n.newPost .title {\n    font-weight: bold;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-auto-rows: 100px;\n    grid-template-areas:\n        \"selection newpost newproject\";\n    justify-items: center;\n    align-items: start;\n    gap: 30px;\n}\n\n.selection {\n    grid-area: selection;\n}\n\n.newProject {\n    grid-area: newproject;\n}\n\n.newPost:nth-child(1) {\n    grid-area: newpost;\n   \n}\n.newPost {\n    grid-column: newpost;\n}\n\n\n\n.checkbox-input {\n    height: 20px;\n    width: 20px;\n}\n\n.newPost {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n    grid-template-areas:\n        \"priority title delete\"\n        \"checkbox description category\"\n        \". . .\";\n    grid-gap: 10px;\n    height: 70px;\n    width: 760px;\n    border-radius: 25px;\n    border: 2px solid white;\n    background-color: rgba(229, 229, 229, 0.5);\n    overflow: hidden;\n    \n}\n\n.deleteButton {\n    grid-area: delete;\n    height: 20px;\n}\n\n.titlePart {\n    grid-area: title;\n}\n\n.checkbox-input {\n    grid-area: checkbox;\n}\n\n.priorityPart {\n    grid-area: priority;\n    height: 10px;\n}\n\n.categoryPart {\n    grid-area: category;\n    justify-self: end;\n    place-self: end;\n}\n\n.descriptionPart {\n    grid-area: description;\n}\n\n.content {\n    background: linear-gradient(-45deg, #bdc3c7, #ffffff, #b3e6ff);\n    background-size: 400% 400%;\n    animation: gradient 15s ease infinite;\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./icons/BioRhyme-Bold.ttf') format('truetype'),\n        url('/src/icons/BioRhyme-ExtraBold.ttf') format('ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar content\"\n        \"footer footer\";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 6fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-image: url(icons/mountain.jpg);\n    background-size: cover;\n    /* Resizes the background image to cover the entire header */\n    background-position: center;\n    /* Centers the background image within the header */\n    opacity: 0.8;\n    padding: 20px;\n    color: var(--light-blue);\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n}\n\n.header-icon img {\n    width: 90px;\n    height: 90px;\n}\n\n.header-name {\n    font-size: 90px;\n    font-weight: bolder;\n    white-space: nowrap;\n    text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;\n    /* Set the white shadow around the edges */\n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: var(--light-blue);\n    padding: 10px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    overflow-y: auto;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n}\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    gap: 15px;\n    width: 250px;\n    box-sizing: border-box;\n    padding-top: 30px;\n}\n\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 25px;\n    grid-template-columns: auto;\n    align-items: center;\n    place-items: end;\n}\n\n.icons img {\n    width: 45px;\n    height: 45px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 30px;\n    grid-template-columns: auto;\n    font-size: 25px;\n    justify-content: start;\n    place-items: start;\n    margin-top: 10px;\n}\n.work {\n    margin-top: -7px;\n}\n.highlighted {\n    color: #ffffff;\n    /* Set the text color to white */\n    font-weight: bold;\n\n    /* Adjust the font size to your preference */\n    background-color: #55a7ee;\n    /* Set the background color to light blue */\n    padding: 5px 10px;\n    margin-left: 20px;\n    /* Add some padding for spacing */\n    border-radius: 5px;\n    opacity: 0.9;\n    transform: scale(1.3);\n\n    /* Add rounded corners */\n}\n\n/* Add styles for the \"Today\" category icon */\n.highlighted-icons img {\n    transform: scale(1.4);\n    /* Set the height of the icon */\n    fill: #55a7ee;\n    /* Set the color of the icon to match the background */\n    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));\n    /* Add a drop shadow effect */\n}\n\n.selection {\n    font-size: 24px;\n        font-weight: bold;\n        color: white;\n        text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;\n        background-color: #0082a3;\n        padding: 10px;\n        border-radius: 5px;\n        border: 2px solid black;\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n    \n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.newProject {\n    height: 20px;\n    width: 100px;\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 400px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n\n.form {\n    display: grid;\n    gap: 20px;\n}\n\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type=\"text\"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%23000000' d='M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type=\"submit\"] {\n    padding: 15px 25px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type=\"submit\"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto;\n}\n\n.form button[type=\"submit\"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n    border: 2px solid transparent;\n    margin-top: 10px;\n}\n\n.priority-circle.selected {\n    display: inline-block;\n    border: 5px solid lightblue;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\n.priority-circle.gray {\n    background-color: gray;\n}\n\n.priority-circle.blue {\n    background-color: blue;\n}\n\n.priority-circle.red {\n    background-color: red;\n}\n\n.newPost {\n    padding: 10px;\n    background-color: #f0f0f0;\n    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\n    box-shadow: 20px 20px rgba(84, 84, 84, 0.15);\n    transition: all .4s ease;\n}\n\n.newPost:hover {\n    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n    box-shadow: 10px 10px rgba(93, 93, 93, 0.25);\n}\n\n.newPost .title {\n    font-weight: bold;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-auto-rows: 100px;\n    grid-template-areas:\n        \"selection newpost newproject\";\n    justify-items: center;\n    align-items: start;\n    gap: 30px;\n}\n\n.selection {\n    grid-area: selection;\n}\n\n.newProject {\n    grid-area: newproject;\n}\n\n.newPost:nth-child(1) {\n    grid-area: newpost;\n   \n}\n.newPost {\n    grid-column: newpost;\n}\n\n\n\n.checkbox-input {\n    height: 20px;\n    width: 20px;\n}\n\n.newPost {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n    grid-template-areas:\n        \"priority title delete\"\n        \"checkbox description category\"\n        \". . .\";\n    grid-gap: 10px;\n    height: 70px;\n    width: 760px;\n    border-radius: 25px;\n    border: 2px solid white;\n    background-color: rgba(229, 229, 229, 0.5);\n    overflow: hidden;\n    \n}\n\n.deleteButton {\n    grid-area: delete;\n    height: 20px;\n}\n\n.titlePart {\n    grid-area: title;\n}\n\n.checkbox-input {\n    grid-area: checkbox;\n}\n\n.priorityPart {\n    grid-area: priority;\n    height: 10px;\n}\n\n.categoryPart {\n    grid-area: category;\n    justify-self: end;\n    place-self: end;\n}\n\n.descriptionPart {\n    grid-area: description;\n}\n\n.content {\n    background: linear-gradient(-45deg, #bdc3c7, #ffffff, #b3e6ff);\n    background-size: 400% 400%;\n    animation: gradient 15s ease infinite;\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n\n\n"],"sourceRoot":""}]);
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

                        // Remove the post from the respective category section
                        const categoryPosts = contentDom.posts[project.category];
                        const categoryIndex = categoryPosts.findIndex((post) => post === project);
                        if (categoryIndex !== -1) {
                            categoryPosts.splice(categoryIndex, 1);
                        }

                        // Update the display for "Today" and the respective category section
                        contentDom.posts.domPoster(contentDom.posts.Today);
                        contentDom.posts.domPoster(contentDom.posts[selectionText]);
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
        const icons = document.querySelectorAll('.icons div');
        const todayIcon = document.querySelector('.today-icon');
        const projectsIcon = document.querySelector('.projects-icon');
        const personalIcon = document.querySelector('.personal-icon');
        const workIcon = document.querySelector('.work-icon');
        today.classList.add('highlighted');
        todayIcon.classList.add('highlighted-icons');

        

        function handleSelectionChange(selectedText) {
            selection.textContent = selectedText;
            domChecker.checker(selection.textContent);
        }
        function removeHighlightClass() {
            [today, projects, personal, work].forEach((element) => {
                element.classList.remove('highlighted');
            });
            icons.forEach((icon) => {
                icon.classList.remove('highlighted-icons');
            });
        }

        today.addEventListener('click', () => {
            handleSelectionChange('Today:');
            removeHighlightClass();
            today.classList.add('highlighted')
            todayIcon.classList.add('highlighted-icons');
            console.log(_DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Today)
        });
        projects.addEventListener('click', () => {
            handleSelectionChange('Projects:');
            
            removeHighlightClass();
            projects.classList.add('highlighted')
            projectsIcon.classList.add('highlighted-icons');
        });
        personal.addEventListener('click', () => {
            handleSelectionChange('Personal:');
            removeHighlightClass();
            personal.classList.add('highlighted')
            personalIcon.classList.add('highlighted-icons');
        });
        work.addEventListener('click', () => {
            handleSelectionChange('Work:');
            removeHighlightClass();
            work.classList.add('highlighted')
            workIcon.classList.add('highlighted-icons');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlB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LmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NcG9zdGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tU3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdGdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaWNvbnMvQmlvUmh5bWUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ljb25zL0Jpb1JoeW1lLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJpY29ucy9tb3VudGFpbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzglMjcgaGVpZ2h0PSUyNzglMjcgdmlld0JveD0lMjcwIDAgOCA4JTI3JTNFJTNDcGF0aCBmaWxsPSUyNyUyMzAwMDAwMCUyNyBkPSUyN004IDNMNSA2VjB6TTAgM2wzLTNoMnY2SDNMMCAzeiUyNy8lM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogUmVwbGFjZSB3aXRoIHlvdXIgZGVzaXJlZCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogI0FERDhFNjtcXG4gICAgLS1saWdodC1ncmF5OiAjRDNEM0QzO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInNpZGViYXIgY29udGVudFxcXCJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAvKiBSZXNpemVzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgaGVhZGVyICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgLyogQ2VudGVycyB0aGUgYmFja2dyb3VuZCBpbWFnZSB3aXRoaW4gdGhlIGhlYWRlciAqL1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDEwZnI7XFxufVxcblxcbi5oZWFkZXItaWNvbiBpbWcge1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgICBmb250LXNpemU6IDkwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IC0ycHggMCAjZmZmLCAycHggLTJweCAwICNmZmYsIC0ycHggMnB4IDAgI2ZmZiwgMnB4IDJweCAwICNmZmY7XFxuICAgIC8qIFNldCB0aGUgd2hpdGUgc2hhZG93IGFyb3VuZCB0aGUgZWRnZXMgKi9cXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxMGZyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGVuZDtcXG59XFxuXFxuLmljb25zIGltZyB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDEwZnI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLndvcmsge1xcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xcbn1cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgLyogU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIHdoaXRlICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YTdlZTtcXG4gICAgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGxpZ2h0IGJsdWUgKi9cXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAvKiBBZGQgc29tZSBwYWRkaW5nIGZvciBzcGFjaW5nICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuXFxuICAgIC8qIEFkZCByb3VuZGVkIGNvcm5lcnMgKi9cXG59XFxuXFxuLyogQWRkIHN0eWxlcyBmb3IgdGhlIFxcXCJUb2RheVxcXCIgY2F0ZWdvcnkgaWNvbiAqL1xcbi5oaWdobGlnaHRlZC1pY29ucyBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgIC8qIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uICovXFxuICAgIGZpbGw6ICM1NWE3ZWU7XFxuICAgIC8qIFNldCB0aGUgY29sb3Igb2YgdGhlIGljb24gdG8gbWF0Y2ggdGhlIGJhY2tncm91bmQgKi9cXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcbiAgICAvKiBBZGQgYSBkcm9wIHNoYWRvdyBlZmZlY3QgKi9cXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIGJsYWNrLCAxcHggLTFweCAwIGJsYWNrLCAtMXB4IDFweCAwIGJsYWNrLCAxcHggMXB4IDAgYmxhY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MmEzO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgXFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmJsdXI+Kjpub3QoLmZvcm0tY29udGFpbmVyKSB7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBGb3JtIGNvbnRhaW5lciAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybSBzZWxlY3QsXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOUQ2REY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuLmZvcm0gc2VsZWN0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQWRkaXRpb25hbCBTdHlsaW5nICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuc2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5ncmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCUgMCUgMCUgMCUgLyAwJSAwJSAwJSAwJTtcXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IHJnYmEoODQsIDg0LCA4NCwgMC4xNSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcXG59XFxuXFxuLm5ld1Bvc3Q6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDkzLCA5MywgOTMsIDAuMjUpO1xcbn1cXG5cXG4ubmV3UG9zdCAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInNlbGVjdGlvbiBuZXdwb3N0IG5ld3Byb2plY3RcXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiBzZWxlY3Rpb247XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBuZXdwcm9qZWN0O1xcbn1cXG5cXG4ubmV3UG9zdDpudGgtY2hpbGQoMSkge1xcbiAgICBncmlkLWFyZWE6IG5ld3Bvc3Q7XFxuICAgXFxufVxcbi5uZXdQb3N0IHtcXG4gICAgZ3JpZC1jb2x1bW46IG5ld3Bvc3Q7XFxufVxcblxcblxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJwcmlvcml0eSB0aXRsZSBkZWxldGVcXFwiXFxuICAgICAgICBcXFwiY2hlY2tib3ggZGVzY3JpcHRpb24gY2F0ZWdvcnlcXFwiXFxuICAgICAgICBcXFwiLiAuIC5cXFwiO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDAuNSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnRpdGxlUGFydCB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxufVxcblxcbi5wcmlvcml0eVBhcnQge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi5jYXRlZ29yeVBhcnQge1xcbiAgICBncmlkLWFyZWE6IGNhdGVnb3J5O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgcGxhY2Utc2VsZjogZW5kO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25QYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYmRjM2M3LCAjZmZmZmZmLCAjYjNlNmZmKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XFxuICAgIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckI7NkRBQzBEO0FBQzlEOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDViwrQ0FBK0M7SUFDL0MseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7O3VCQUdtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseURBQXlDO0lBQ3pDLHNCQUFzQjtJQUN0Qiw0REFBNEQ7SUFDNUQsMkJBQTJCO0lBQzNCLG1EQUFtRDtJQUNuRCxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwrRUFBK0U7SUFDL0UsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixTQUFTO0lBQ1QsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCwyQkFB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eUI7SUFDekIsd0NBQXdDO0lBQ3hDLDRDQUE0QztJQUM1Qyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxxQkFBcUI7SUFDckI7c0NBQ2tDO0lBQ2xDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7O0FBSUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0I7OztlQUdXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4REFBOEQ7SUFDOUQsMEJBQTBCO0lBQzFCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vaWNvbnMvQmlvUmh5bWUtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgICAgICB1cmwoJy9zcmMvaWNvbnMvQmlvUmh5bWUtRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWJsdWU6ICNBREQ4RTY7XFxuICAgIC0tbGlnaHQtZ3JheTogI0QzRDNEMztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiXFxuICAgICAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDExZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGljb25zL21vdW50YWluLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC8qIFJlc2l6ZXMgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBoZWFkZXIgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHdpdGhpbiB0aGUgaGVhZGVyICovXFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTBmcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIGltZyB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggLTJweCAwICNmZmYsIDJweCAtMnB4IDAgI2ZmZiwgLTJweCAycHggMCAjZmZmLCAycHggMnB4IDAgI2ZmZjtcXG4gICAgLyogU2V0IHRoZSB3aGl0ZSBzaGFkb3cgYXJvdW5kIHRoZSBlZGdlcyAqL1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOGZyO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbi5pY29ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDEwZnI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogZW5kO1xcbn1cXG5cXG4uaWNvbnMgaW1nIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG59XFxuXFxuLnRvZG9zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMTBmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGxhY2UtaXRlbXM6IHN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ud29yayB7XFxuICAgIG1hcmdpbi10b3A6IC03cHg7XFxufVxcbi5oaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAvKiBTZXQgdGhlIHRleHQgY29sb3IgdG8gd2hpdGUgKi9cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIC8qIEFkanVzdCB0aGUgZm9udCBzaXplIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhN2VlO1xcbiAgICAvKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbGlnaHQgYmx1ZSAqL1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIC8qIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG5cXG4gICAgLyogQWRkIHJvdW5kZWQgY29ybmVycyAqL1xcbn1cXG5cXG4vKiBBZGQgc3R5bGVzIGZvciB0aGUgXFxcIlRvZGF5XFxcIiBjYXRlZ29yeSBpY29uICovXFxuLmhpZ2hsaWdodGVkLWljb25zIGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24gKi9cXG4gICAgZmlsbDogIzU1YTdlZTtcXG4gICAgLyogU2V0IHRoZSBjb2xvciBvZiB0aGUgaWNvbiB0byBtYXRjaCB0aGUgYmFja2dyb3VuZCAqL1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICAgIC8qIEFkZCBhIGRyb3Agc2hhZG93IGVmZmVjdCAqL1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgYmxhY2ssIDFweCAtMXB4IDAgYmxhY2ssIC0xcHggMXB4IDAgYmxhY2ssIDFweCAxcHggMCBibGFjaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgyYTM7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYmx1cj4qOm5vdCguZm9ybS1jb250YWluZXIpIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIEZvcm0gY29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtIHNlbGVjdCxcXG4uZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M5RDZERjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uZm9ybSBzZWxlY3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZmlsbD0nJTIzMDAwMDAwJyBkPSdNOCAzTDUgNlYwek0wIDNsMy0zaDJ2NkgzTDAgM3onLyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQWRkaXRpb25hbCBTdHlsaW5nICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuc2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5ncmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCUgMCUgMCUgMCUgLyAwJSAwJSAwJSAwJTtcXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IHJnYmEoODQsIDg0LCA4NCwgMC4xNSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcXG59XFxuXFxuLm5ld1Bvc3Q6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDkzLCA5MywgOTMsIDAuMjUpO1xcbn1cXG5cXG4ubmV3UG9zdCAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInNlbGVjdGlvbiBuZXdwb3N0IG5ld3Byb2plY3RcXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiBzZWxlY3Rpb247XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBuZXdwcm9qZWN0O1xcbn1cXG5cXG4ubmV3UG9zdDpudGgtY2hpbGQoMSkge1xcbiAgICBncmlkLWFyZWE6IG5ld3Bvc3Q7XFxuICAgXFxufVxcbi5uZXdQb3N0IHtcXG4gICAgZ3JpZC1jb2x1bW46IG5ld3Bvc3Q7XFxufVxcblxcblxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJwcmlvcml0eSB0aXRsZSBkZWxldGVcXFwiXFxuICAgICAgICBcXFwiY2hlY2tib3ggZGVzY3JpcHRpb24gY2F0ZWdvcnlcXFwiXFxuICAgICAgICBcXFwiLiAuIC5cXFwiO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDAuNSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbn1cXG5cXG4uZGVsZXRlQnV0dG9uIHtcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnRpdGxlUGFydCB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxufVxcblxcbi5wcmlvcml0eVBhcnQge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi5jYXRlZ29yeVBhcnQge1xcbiAgICBncmlkLWFyZWE6IGNhdGVnb3J5O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgcGxhY2Utc2VsZjogZW5kO1xcbn1cXG5cXG4uZGVzY3JpcHRpb25QYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjYmRjM2M3LCAjZmZmZmZmLCAjYjNlNmZmKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MDAlIDQwMCU7XFxuICAgIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNvbnRlbnREb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RzID0ge1xuICAgICAgICBUb2RheTogW10sXG4gICAgICAgIFByb2plY3RzOiBbXSxcbiAgICAgICAgUGVyc29uYWw6IFtdLFxuICAgICAgICBXb3JrOiBbXSxcbiAgICAgICAgZG9tTWFuaXB1bGF0b3I6IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBwb3N0cy5Ub2RheS5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgaWYgKHByb2plY3QuY2F0ZWdvcnkgPT09ICdQcm9qZWN0cycpIHtcbiAgICAgICAgICAgICAgICBwb3N0cy5Qcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2plY3QuY2F0ZWdvcnkgPT09ICdQZXJzb25hbCcpIHtcbiAgICAgICAgICAgICAgICBwb3N0cy5QZXJzb25hbC5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2plY3QuY2F0ZWdvcnkgPT09ICdXb3JrJykge1xuICAgICAgICAgICAgICAgIHBvc3RzLldvcmsucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkb21Qb3N0ZXI6IGZ1bmN0aW9uIChwcm9qZWN0QXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvLyBHZXQgdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQb3N0cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld1Bvc3QnKTtcblxuICAgICAgICAgICAgLy8gY29uc3Qgcm93U3BhbiA9IGV4aXN0aW5nUG9zdHMubGVuZ3RoICsgNTtcblxuICAgICAgICAgICAgLy8gZXhpc3RpbmdQb3N0cy5mb3JFYWNoKChwb3N0KSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcG9zdC5zdHlsZS5ncmlkUm93RW5kID0gYHNwYW4gJHtyb3dTcGFufWA7XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nUG9zdHMgYmVmb3JlIGFwcGVuZGluZyBuZXcgcG9zdHNcbiAgICAgICAgICAgIGV4aXN0aW5nUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvc3QucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGV4aXN0aW5nUG9zdHMgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZXdQb3N0Jyk7XG4gICAgICAgICAgICAvLyBpZiAoIWV4aXN0aW5nUG9zdHMgfHwgZXhpc3RpbmdQb3N0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm47IC8vIEV4aXQgdGhlIGZ1bmN0aW9uIGlmIG5vIFwibmV3UG9zdFwiIGVsZW1lbnRzIGFyZSBmb3VuZFxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gY29uc3Qgcm93U3BhbiA9IGV4aXN0aW5nUG9zdHMubGVuZ3RoICsgMjtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIGV4aXN0aW5nUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHBvc3Quc3R5bGUuZ3JpZFJvd0VuZCA9IGBzcGFuICR7cm93U3Bhbn1gO1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5ld1Bvc3QuY2xhc3NMaXN0LmFkZCgnbmV3UG9zdCcpO1xuXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeVBhcnQnKTtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IHByb2plY3QuY2F0ZWdvcnk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlUGFydCcpO1xuICAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaWJ0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpYnRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpYnRpb25QYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpYnRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlQYXJ0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5UGFydCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaXJjbGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5UGFydC5hcHBlbmRDaGlsZChzZWxlY3RlZENpcmNsZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc3QucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSBcIlRvZGF5XCIgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXlQb3N0cyA9IGNvbnRlbnREb20ucG9zdHMuVG9kYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheUluZGV4ID0gdG9kYXlQb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZGF5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXlQb3N0cy5zcGxpY2UodG9kYXlJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSByZXNwZWN0aXZlIGNhdGVnb3J5IHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5UG9zdHMgPSBjb250ZW50RG9tLnBvc3RzW3Byb2plY3QuY2F0ZWdvcnldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGNhdGVnb3J5UG9zdHMuZmluZEluZGV4KChwb3N0KSA9PiBwb3N0ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5UG9zdHMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGRpc3BsYXkgZm9yIFwiVG9kYXlcIiBhbmQgdGhlIHJlc3BlY3RpdmUgY2F0ZWdvcnkgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5Ub2RheSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzW3NlbGVjdGlvblRleHRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuXG5cbiAgICAgICAgICAgICAgICBuZXdQb3N0LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChkZXNjcmlidGlvbik7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChwcmlvcml0eVBhcnQpO1xuICAgICAgICAgICAgICAgIG5ld1Bvc3QuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29udGVudC5wcmVwZW5kKG5ld1Bvc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzLFxuICAgIH07XG59KSgpO1xuXG5cblxuXG5cblxuXG4iLCJcblxuaW1wb3J0IHsgY29udGVudERvbSB9IGZyb20gJy4vRE9NcG9zdGVyJztcblxuXG5cbmV4cG9ydCBjb25zdCBkb21DaGVja2VyID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjaGVja2VyKHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnVG9kYXk6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5Ub2RheSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnUHJvamVjdHM6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5Qcm9qZWN0cylcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnUGVyc29uYWw6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5QZXJzb25hbClcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnV29yazonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLldvcmspXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VPZlNlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwnKTtcbiAgICAgICAgY29uc3Qgd29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb24nKVxuICAgICAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29ucyBkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LWljb24nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWljb24nKTtcbiAgICAgICAgY29uc3QgcGVyc29uYWxJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbmFsLWljb24nKTtcbiAgICAgICAgY29uc3Qgd29ya0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay1pY29uJyk7XG4gICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJyk7XG4gICAgICAgIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuXG4gICAgICAgIFxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZFRleHQpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkVGV4dDtcbiAgICAgICAgICAgIGRvbUNoZWNrZXIuY2hlY2tlcihzZWxlY3Rpb24udGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodENsYXNzKCkge1xuICAgICAgICAgICAgW3RvZGF5LCBwcm9qZWN0cywgcGVyc29uYWwsIHdvcmtdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkLWljb25zJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKCdUb2RheTonKTtcbiAgICAgICAgICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzKCk7XG4gICAgICAgICAgICB0b2RheS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICB0b2RheUljb24uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQtaWNvbnMnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnREb20ucG9zdHMuVG9kYXkpXG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdGlvbkNoYW5nZSgnUHJvamVjdHM6Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzKCk7XG4gICAgICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICBwcm9qZWN0c0ljb24uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQtaWNvbnMnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBlcnNvbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKCdQZXJzb25hbDonKTtcbiAgICAgICAgICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzKCk7XG4gICAgICAgICAgICBwZXJzb25hbC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICBwZXJzb25hbEljb24uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQtaWNvbnMnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoJ1dvcms6Jyk7XG4gICAgICAgICAgICByZW1vdmVIaWdobGlnaHRDbGFzcygpO1xuICAgICAgICAgICAgd29yay5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICB3b3JrSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9tQ2hlY2tlci5jaGVja2VyKHNlbGVjdGlvbi50ZXh0Q29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hlY2tlcixcbiAgICAgICAgY2hhbmdlT2ZTZWxlY3Rpb24sXG4gICAgfTtcbn0pKCk7XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3QnKTtcblxuICAgIFxuICAgICAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvcm0gZWxlbWVudFxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHNlbGVjdCBpbnB1dCBmb3IgY2F0ZWdvcnlcbiAgICAgICAgY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICdDYXRlZ29yeTonO1xuICAgICAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RJbnB1dC5uYW1lID0gJ2NhdGVnb3J5JztcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFsnUHJvamVjdHMnLCAnUGVyc29uYWwnLCAnV29yayddO1xuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdExhYmVsLmFwcGVuZENoaWxkKHNlbGVjdElucHV0KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZvciB0aXRsZVxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgICAgICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZm9yIGRlc2NyaXB0aW9uXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZm9yIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ1ByaW9yaXR5Oic7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBncmF5Q2lyY2xlID0gY3JlYXRlUHJpb3JpdHlDaXJjbGUoJ2dyYXknKTtcbiAgICAgICAgY29uc3QgYmx1ZUNpcmNsZSA9IGNyZWF0ZVByaW9yaXR5Q2lyY2xlKCdibHVlJyk7XG4gICAgICAgIGNvbnN0IHJlZENpcmNsZSA9IGNyZWF0ZVByaW9yaXR5Q2lyY2xlKCdyZWQnKTtcblxuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChncmF5Q2lyY2xlKTtcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoYmx1ZUNpcmNsZSk7XG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHJlZENpcmNsZSk7XG5cbiAgICAgICAgcHJpb3JpdHlMYWJlbC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzdWJtaXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICAgICAgICAvLyBBcHBlbmQgYWxsIHRoZSBmb3JtIGVsZW1lbnRzIHRvIHRoZSBmb3JtXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0TGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBmb3JtIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZm9ybSBjb250YWluZXIgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiBmb3JtQ29udGFpbmVyLm9mZnNldFRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIFJldHJpZXZlIGZvcm0gdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHNlbGVjdElucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBnZXRTZWxlY3RlZFByaW9yaXR5KCk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGZvcm1Db250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmx1cicpO1xuICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlU3VibWl0KTtcblxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGEgcHJpb3JpdHkgY2lyY2xlXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5Q2lyY2xlKGNvbG9yKSB7XG4gICAgICAgICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY2lyY2xlJyk7XG4gICAgICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZChjb2xvcik7XG4gICAgICAgICAgICBjaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JheUNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGJsdWVDaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICByZWRDaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNpcmNsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBnZXQgdGhlIHNlbGVjdGVkIHByaW9yaXR5XG4gICAgICAgIGZ1bmN0aW9uIGdldFNlbGVjdGVkUHJpb3JpdHkoKSB7XG4gICAgICAgICAgICBpZiAoZ3JheUNpcmNsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2dyYXknO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChibHVlQ2lyY2xlLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYmx1ZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlZENpcmNsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICBcbn1cbiIsIlxuXG5jbGFzcyBQcm9qZWN0R2VuIHtcbiAgICBjb25zdHJ1Y3RvcihjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgaW5mbygpIHtcbiAgICAgICAgcmV0dXJuIGBDYXRlZ29yeTogJHt0aGlzLmNhdGVnb3J5fSwgVGl0bGU6ICR7dGhpcy50aXRsZX0sIERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259LCBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWA7XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0R2VuIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUHJvamVjdEdlbiB9IGZyb20gJy4vcHJvamVjdGdlbmVyYXRvcidcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHsgY29udGVudERvbSB9IGZyb20gJy4vRE9NcG9zdGVyJztcbmltcG9ydCB7IGRvbUNoZWNrZXIgfSBmcm9tICcuL2RvbVN3aXRjaGVyJztcblxuXG5jb25zb2xlLmxvZygnUmFkaSByYWRpJylcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBoZWFkZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1pY29uJyk7XG5jb25zdCBoZWFkZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1uYW1lJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25zJyk7XG5jb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktaWNvbicpO1xuY29uc3QgcHJvamVjdHNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWljb24nKTtcbmNvbnN0IHBlcnNvbmFsSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJzb25hbC1pY29uJyk7XG5jb25zdCB3b3JrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLWljb24nKTtcbmNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IHBlcnNvbmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbmFsJyk7XG5jb25zdCB3b3JrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmsnKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuXG5cblxuLy8gQ3JlYXRlIGEgbmV3IGRpdiBlbGVtZW50XG5jb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24nKTtcbnNlbGVjdGlvbi50ZXh0Q29udGVudCA9ICdUb2RheTonO1xuXG4vLyBBcHBlbmQgdGhlIHNlbGVjdGlvbiBkaXYgdG8gdGhlIGNvbnRlbnQgZWxlbWVudFxuY29udGVudC5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuXG5cbmNvbnN0IGNsaWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jbGlja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0JylcbmNsaWNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0NsaWNrJztcblxuLy8gQXBwZW5kIHRoZSBidXR0b24gdG8gdGhlIGNvbnRlbnQgZWxlbWVudFxuY29udGVudC5hcHBlbmRDaGlsZChjbGlja0J1dHRvbik7XG5cblxuY2xpY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlRm9ybSgoY2F0ZWdvcnksIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0R2VuKGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbiAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21NYW5pcHVsYXRvcihwcm9qZWN0KVxuICAgICAgICBkb21DaGVja2VyLmNoZWNrZXIoc2VsZWN0aW9uLnRleHRDb250ZW50KVxuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSk7XG59KTtcbmRvbUNoZWNrZXIuY2hhbmdlT2ZTZWxlY3Rpb24oKTtcbmRvbUNoZWNrZXIuY2hlY2tlcihzZWxlY3Rpb24pXG5jb25zb2xlLmxvZyhzZWxlY3Rpb24udGV4dENvbnRlbnQpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9