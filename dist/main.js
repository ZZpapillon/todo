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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'MyFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar content\"\n        \"footer footer\";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 6fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    /* Resizes the background image to cover the entire header */\n    background-position: center;\n    /* Centers the background image within the header */\n    opacity: 0.8;\n    padding: 20px;\n    color: var(--light-blue);\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n}\n\n.header-icon img {\n    width: 90px;\n    height: 90px;\n}\n\n.header-name {\n    font-size: 90px;\n    font-weight: bolder;\n    white-space: nowrap;\n    text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;\n    /* Set the white shadow around the edges */\n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: var(--light-blue);\n    padding: 10px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    overflow-y: auto;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n}\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    gap: 15px;\n    width: 250px;\n    box-sizing: border-box;\n    padding-top: 30px;\n}\n\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 25px;\n    grid-template-columns: auto;\n    align-items: center;\n    place-items: end;\n}\n\n.icons img {\n    width: 45px;\n    height: 45px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 30px;\n    grid-template-columns: auto;\n    font-size: 25px;\n    justify-content: start;\n    place-items: start;\n    margin-top: 10px;\n}\n.work {\n    margin-top: -7px;\n}\n.highlighted {\n    color: #ffffff;\n    /* Set the text color to white */\n    font-weight: bold;\n\n    /* Adjust the font size to your preference */\n    background-color: #55a7ee;\n    /* Set the background color to light blue */\n    padding: 5px 10px;\n    margin-left: 20px;\n    /* Add some padding for spacing */\n    border-radius: 5px;\n    opacity: 0.9;\n    transform: scale(1.3);\n\n    /* Add rounded corners */\n}\n\n/* Add styles for the \"Today\" category icon */\n.highlighted-icons img {\n    transform: scale(1.4);\n    /* Set the height of the icon */\n    fill: #55a7ee;\n    /* Set the color of the icon to match the background */\n    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));\n    /* Add a drop shadow effect */\n}\n\n.selection {\n    font-size: 24px;\n        font-weight: bold;\n        color: white;\n        text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;\n        background-color: #0082a3;\n        padding: 10px;\n        border-radius: 5px;\n        border: 2px solid black;\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n    \n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.newProject {\n    height: 20px;\n    width: 100px;\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 400px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n\n.form {\n    display: grid;\n    gap: 20px;\n}\n\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type=\"text\"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type=\"submit\"] {\n    padding: 15px 25px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type=\"submit\"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto;\n}\n\n.form button[type=\"submit\"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n    border: 2px solid transparent;\n    margin-top: 10px;\n}\n\n.priority-circle.selected {\n    display: inline-block;\n    border: 5px solid lightblue;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\n.priority-circle.gray {\n    background-color: gray;\n}\n\n.priority-circle.blue {\n    background-color: blue;\n}\n\n.priority-circle.red {\n    background-color: red;\n}\n\n.newPost {\n    padding: 10px;\n    background-color: #f0f0f0;\n    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\n    box-shadow: 20px 20px rgba(84, 84, 84, 0.15);\n    transition: all .4s ease;\n}\n\n.newPost:hover {\n    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n    box-shadow: 10px 10px rgba(93, 93, 93, 0.25);\n}\n\n.newPost .title {\n    font-weight: bold;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-auto-rows: 100px;\n    grid-template-areas:\n        \"selection newpost newproject\";\n    justify-items: center;\n    align-items: start;\n    gap: 30px;\n}\n\n.selection {\n    grid-area: selection;\n}\n\n.newProject {\n    grid-area: newproject;\n}\n\n.newPost:nth-child(1) {\n    grid-area: newpost;\n   \n}\n.newPost {\n    grid-column: newpost;\n}\n\n\n\n.checkbox-input {\n    height: 20px;\n    width: 20px;\n}\n\n.newPost {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n    grid-template-areas:\n        \"priority title delete\"\n        \"checkbox description category\"\n        \". dueDate .\";\n    grid-gap: 10px;\n    height: 70px;\n    width: 760px;\n    border-radius: 25px;\n    border: 2px solid white;\n    background-color: rgba(229, 229, 229, 0.5);\n    overflow: hidden;\n    \n}\n.dueDate {\n    grid-area: dueDate;\n    color: #0056b3;\n    font-size: 15px;\n    font-weight: bolder;\n    margin-bottom: 10px;\n}\n.deleteButton {\n    grid-area: delete;\n    height: 20px;\n}\n\n.titlePart {\n    grid-area: title;\n}\n\n.checkbox-input {\n    grid-area: checkbox;\n}\n\n.priorityPart {\n    grid-area: priority;\n    height: 10px;\n}\n\n.categoryPart {\n    grid-area: category;\n    justify-self: end;\n    place-self: end;\n}\n\n.descriptionPart {\n    grid-area: description;\n}\n\n.content {\n    background: linear-gradient(-45deg, #bdc3c7, #ffffff, #b3e6ff);\n    background-size: 400% 400%;\n    animation: gradient 15s ease infinite;\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./icons/BioRhyme-Bold.ttf') format('truetype'),\n        url('/src/icons/BioRhyme-ExtraBold.ttf') format('ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar content\"\n        \"footer footer\";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 6fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-image: url(icons/mountain.jpg);\n    background-size: cover;\n    /* Resizes the background image to cover the entire header */\n    background-position: center;\n    /* Centers the background image within the header */\n    opacity: 0.8;\n    padding: 20px;\n    color: var(--light-blue);\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n}\n\n.header-icon img {\n    width: 90px;\n    height: 90px;\n}\n\n.header-name {\n    font-size: 90px;\n    font-weight: bolder;\n    white-space: nowrap;\n    text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;\n    /* Set the white shadow around the edges */\n}\n\n.sidebar {\n    grid-area: sidebar;\n    background-color: var(--light-blue);\n    padding: 10px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    overflow-y: auto;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n}\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    gap: 15px;\n    width: 250px;\n    box-sizing: border-box;\n    padding-top: 30px;\n}\n\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 25px;\n    grid-template-columns: auto;\n    align-items: center;\n    place-items: end;\n}\n\n.icons img {\n    width: 45px;\n    height: 45px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 30px;\n    grid-template-columns: auto;\n    font-size: 25px;\n    justify-content: start;\n    place-items: start;\n    margin-top: 10px;\n}\n.work {\n    margin-top: -7px;\n}\n.highlighted {\n    color: #ffffff;\n    /* Set the text color to white */\n    font-weight: bold;\n\n    /* Adjust the font size to your preference */\n    background-color: #55a7ee;\n    /* Set the background color to light blue */\n    padding: 5px 10px;\n    margin-left: 20px;\n    /* Add some padding for spacing */\n    border-radius: 5px;\n    opacity: 0.9;\n    transform: scale(1.3);\n\n    /* Add rounded corners */\n}\n\n/* Add styles for the \"Today\" category icon */\n.highlighted-icons img {\n    transform: scale(1.4);\n    /* Set the height of the icon */\n    fill: #55a7ee;\n    /* Set the color of the icon to match the background */\n    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));\n    /* Add a drop shadow effect */\n}\n\n.selection {\n    font-size: 24px;\n        font-weight: bold;\n        color: white;\n        text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;\n        background-color: #0082a3;\n        padding: 10px;\n        border-radius: 5px;\n        border: 2px solid black;\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n    \n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.newProject {\n    height: 20px;\n    width: 100px;\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 400px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n\n.form {\n    display: grid;\n    gap: 20px;\n}\n\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type=\"text\"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%23000000' d='M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type=\"submit\"] {\n    padding: 15px 25px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type=\"submit\"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto;\n}\n\n.form button[type=\"submit\"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n    border: 2px solid transparent;\n    margin-top: 10px;\n}\n\n.priority-circle.selected {\n    display: inline-block;\n    border: 5px solid lightblue;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\n.priority-circle.gray {\n    background-color: gray;\n}\n\n.priority-circle.blue {\n    background-color: blue;\n}\n\n.priority-circle.red {\n    background-color: red;\n}\n\n.newPost {\n    padding: 10px;\n    background-color: #f0f0f0;\n    border-radius: 0% 0% 0% 0% / 0% 0% 0% 0%;\n    box-shadow: 20px 20px rgba(84, 84, 84, 0.15);\n    transition: all .4s ease;\n}\n\n.newPost:hover {\n    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n    box-shadow: 10px 10px rgba(93, 93, 93, 0.25);\n}\n\n.newPost .title {\n    font-weight: bold;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-auto-rows: 100px;\n    grid-template-areas:\n        \"selection newpost newproject\";\n    justify-items: center;\n    align-items: start;\n    gap: 30px;\n}\n\n.selection {\n    grid-area: selection;\n}\n\n.newProject {\n    grid-area: newproject;\n}\n\n.newPost:nth-child(1) {\n    grid-area: newpost;\n   \n}\n.newPost {\n    grid-column: newpost;\n}\n\n\n\n.checkbox-input {\n    height: 20px;\n    width: 20px;\n}\n\n.newPost {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n    grid-template-areas:\n        \"priority title delete\"\n        \"checkbox description category\"\n        \". dueDate .\";\n    grid-gap: 10px;\n    height: 70px;\n    width: 760px;\n    border-radius: 25px;\n    border: 2px solid white;\n    background-color: rgba(229, 229, 229, 0.5);\n    overflow: hidden;\n    \n}\n.dueDate {\n    grid-area: dueDate;\n    color: #0056b3;\n    font-size: 15px;\n    font-weight: bolder;\n    margin-bottom: 10px;\n}\n.deleteButton {\n    grid-area: delete;\n    height: 20px;\n}\n\n.titlePart {\n    grid-area: title;\n}\n\n.checkbox-input {\n    grid-area: checkbox;\n}\n\n.priorityPart {\n    grid-area: priority;\n    height: 10px;\n}\n\n.categoryPart {\n    grid-area: category;\n    justify-self: end;\n    place-self: end;\n}\n\n.descriptionPart {\n    grid-area: description;\n}\n\n.content {\n    background: linear-gradient(-45deg, #bdc3c7, #ffffff, #b3e6ff);\n    background-size: 400% 400%;\n    animation: gradient 15s ease infinite;\n}\n\n@keyframes gradient {\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _domSwitcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domSwitcher */ "./src/domSwitcher.js");




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
                // saveProjectsToLocalStorage()
                
            }
            if (project.category === 'Personal') {
                posts.Personal.push(project);
                // saveProjectsToLocalStorage()
                
            }
            if (project.category === 'Work') {
                posts.Work.push(project);
                // saveProjectsToLocalStorage()
                
            }
            
           
        },

        domPoster: function (projectArray) {
            const content = document.querySelector('.content'); // Get the content element
            const existingPosts = content.querySelectorAll('.newPost');

            

            // Clear the existingPosts before appending new posts
            existingPosts.forEach((post) => {
                post.remove();
            });
            

            projectArray.forEach((project) => {
                const newPost = document.createElement('div');
                newPost.classList.add('newPost');


               

                
                

               
                

                const category = document.createElement('div');
                category.classList.add('categoryPart');
                category.textContent = project.category;

                const title = document.createElement('div');
                title.classList.add('titlePart');
                title.textContent = project.title;

                const dueDate = document.createElement('div');
                dueDate.classList.add('dueDate');
                dueDate.textContent = project.dueDate;

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
                deleteButton.addEventListener('click', (selection) => {
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


                        // Remove the project from local storage
                        (0,_storage__WEBPACK_IMPORTED_MODULE_0__.saveProjectsToLocalStorage)()


                        // Update the display for "Today" and the respective category section

                        _domSwitcher__WEBPACK_IMPORTED_MODULE_1__.domChecker.checker(selection)
                    }
                });





        




                newPost.appendChild(deleteButton);
                newPost.appendChild(category);
                newPost.appendChild(title);
                newPost.appendChild(dueDate);
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





        // deleteButton.addEventListener('click', () => {
                //     const index = projectArray.findIndex((post) => post === project);
                //     if (index !== -1) {
                //         projectArray.splice(index, 1);
                //         newPost.remove();
                       

                //         // Remove the post from the "Today" section
                //         const todayPosts = contentDom.posts.Today;
                //         const todayIndex = todayPosts.findIndex((post) => post === project);
                //         if (todayIndex !== -1) {
                //             todayPosts.splice(todayIndex, 1);
                //         }

                //         // Remove the post from the respective category section
                //         const categoryPosts = contentDom.posts[project.category];
                //         const categoryIndex = categoryPosts.findIndex((post) => post === project);
                //         if (categoryIndex !== -1) {
                //             categoryPosts.splice(categoryIndex, 1);
                //         }

                //         // Update the display for "Today" and the respective category section
                        
                //         contentDom.posts.domPoster(contentDom.posts[selection.textContent]);
                //         saveProjectsToLocalStorage();
                //     }
                // });




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

    // Create the input for due date
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    dueDateLabel.appendChild(dueDateInput);

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
        form.appendChild(dueDateLabel);
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
            const dueDate = dueDateInput.value;
            const description = descriptionInput.value;
            const priority = getSelectedPriority();

            callback(category, title, dueDate, description, priority);

            

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
    constructor(category, title, dueDate, description, priority) {
        this.category = category;
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }

    info() {
        return `Category: ${this.category}, Title: ${this.title}, Date: ${this.dueDate} Description: ${this.description}, Priority: ${this.priority}`;
    }
}




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjectsFromLocalStorage": () => (/* binding */ getProjectsFromLocalStorage),
/* harmony export */   "saveProjectsToLocalStorage": () => (/* binding */ saveProjectsToLocalStorage)
/* harmony export */ });
/* harmony import */ var _DOMposter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMposter */ "./src/DOMposter.js");


// storage.js

function saveProjectsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(_DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts));
}

function getProjectsFromLocalStorage() {
    const savedPosts = JSON.parse(localStorage.getItem('posts'));
    if (savedPosts) {
        // Clear existing posts in each category array
        _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Today.length = 0;
        _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Projects.length = 0;
        _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Personal.length = 0;
        _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Work.length = 0;

        

        // Update the category arrays with retrieved data
        savedPosts.Today.forEach((project) => {
            _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.domManipulator(project);
            
        });
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/storage.js");








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
    (0,_form__WEBPACK_IMPORTED_MODULE_2__.createForm)((category, title, dueDate, description, priority) => {
        const project = new _projectgenerator__WEBPACK_IMPORTED_MODULE_1__.ProjectGen(category, title, dueDate, description, priority);
        _DOMposter__WEBPACK_IMPORTED_MODULE_3__.contentDom.posts.domManipulator(project)
        _domSwitcher__WEBPACK_IMPORTED_MODULE_4__.domChecker.checker(selection.textContent)
        ;(0,_storage__WEBPACK_IMPORTED_MODULE_5__.saveProjectsToLocalStorage)()
        
        
        
        
    });
});
_domSwitcher__WEBPACK_IMPORTED_MODULE_4__.domChecker.changeOfSelection();


console.log(selection.textContent)




// // Example usage:
const newProject = {
    category: 'Projects',
    title: 'New Project',
    description: 'Description of the new project',
    priority: 'blue',
    dueDate: '2023-05-31',
};





// Retrieve the saved projects from local storage and update contentDom.posts when the page is loaded
window.addEventListener('load', () => {
    (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProjectsFromLocalStorage)();
    
    _domSwitcher__WEBPACK_IMPORTED_MODULE_4__.domChecker.checker(selection.textContent);
});

_DOMposter__WEBPACK_IMPORTED_MODULE_3__.contentDom.posts.domManipulator(newProject)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlB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QUFDLDZEQUFxQjtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBc0I7QUFDOUMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRk07QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixjQUFjLFdBQVcsV0FBVyxVQUFVLGNBQWMsZUFBZSxpQkFBaUIsY0FBYyxjQUFjO0FBQ3BKO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbUI7O0FBRXpDOztBQUVPO0FBQ1AsaURBQWlELHdEQUFnQjtBQUNqRTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQTZCO0FBQ3JDLFFBQVEsd0VBQWdDO0FBQ3hDLFFBQVEsd0VBQWdDO0FBQ3hDLFFBQVEsb0VBQTRCOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1RUFBK0I7QUFDM0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNYO0FBQ0s7QUFDRTtBQUNpRTs7O0FBRzVHOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EsSUFBSSxpREFBVTtBQUNkLDRCQUE0Qix5REFBVTtBQUN0QyxRQUFRLHVFQUErQjtBQUN2QyxRQUFRLDREQUFrQjtBQUMxQixRQUFRLHFFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Qsc0VBQTRCOzs7QUFHNUI7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLElBQUkscUVBQTJCO0FBQy9CO0FBQ0EsSUFBSSw0REFBa0I7QUFDdEIsQ0FBQzs7QUFFRCx1RUFBK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvRE9NcG9zdGVyLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tU3dpdGNoZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdGdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL0Jpb1JoeW1lLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9pY29ucy9CaW9SaHltZS1FeHRyYUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiaWNvbnMvbW91bnRhaW4uanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc4JTI3IGhlaWdodD0lMjc4JTI3IHZpZXdCb3g9JTI3MCAwIDggOCUyNyUzRSUzQ3BhdGggZmlsbD0lMjclMjMwMDAwMDAlMjcgZD0lMjdNOCAzTDUgNlYwek0wIDNsMy0zaDJ2NkgzTDAgM3olMjcvJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWJsdWU6ICNBREQ4RTY7XFxuICAgIC0tbGlnaHQtZ3JheTogI0QzRDNEMztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiXFxuICAgICAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDExZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgLyogUmVzaXplcyB0aGUgYmFja2dyb3VuZCBpbWFnZSB0byBjb3ZlciB0aGUgZW50aXJlIGhlYWRlciAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIC8qIENlbnRlcnMgdGhlIGJhY2tncm91bmQgaW1hZ2Ugd2l0aGluIHRoZSBoZWFkZXIgKi9cXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxMGZyO1xcbn1cXG5cXG4uaGVhZGVyLWljb24gaW1nIHtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogOTBweDtcXG59XFxuXFxuLmhlYWRlci1uYW1lIHtcXG4gICAgZm9udC1zaXplOiA5MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAtMnB4IDAgI2ZmZiwgMnB4IC0ycHggMCAjZmZmLCAtMnB4IDJweCAwICNmZmYsIDJweCAycHggMCAjZmZmO1xcbiAgICAvKiBTZXQgdGhlIHdoaXRlIHNoYWRvdyBhcm91bmQgdGhlIGVkZ2VzICovXFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA4ZnI7XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgd2hpdGU7XFxuICAgIGdhcDogMTVweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuLmljb25zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMTBmcjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBsYWNlLWl0ZW1zOiBlbmQ7XFxufVxcblxcbi5pY29ucyBpbWcge1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbn1cXG5cXG4udG9kb3Mge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxMGZyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwbGFjZS1pdGVtczogc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi53b3JrIHtcXG4gICAgbWFyZ2luLXRvcDogLTdweDtcXG59XFxuLmhpZ2hsaWdodGVkIHtcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxuICAgIC8qIFNldCB0aGUgdGV4dCBjb2xvciB0byB3aGl0ZSAqL1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgLyogQWRqdXN0IHRoZSBmb250IHNpemUgdG8geW91ciBwcmVmZXJlbmNlICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NWE3ZWU7XFxuICAgIC8qIFNldCB0aGUgYmFja2dyb3VuZCBjb2xvciB0byBsaWdodCBibHVlICovXFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgLyogQWRkIHNvbWUgcGFkZGluZyBmb3Igc3BhY2luZyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcblxcbiAgICAvKiBBZGQgcm91bmRlZCBjb3JuZXJzICovXFxufVxcblxcbi8qIEFkZCBzdHlsZXMgZm9yIHRoZSBcXFwiVG9kYXlcXFwiIGNhdGVnb3J5IGljb24gKi9cXG4uaGlnaGxpZ2h0ZWQtaWNvbnMgaW1nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xcbiAgICAvKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiAqL1xcbiAgICBmaWxsOiAjNTVhN2VlO1xcbiAgICAvKiBTZXQgdGhlIGNvbG9yIG9mIHRoZSBpY29uIHRvIG1hdGNoIHRoZSBiYWNrZ3JvdW5kICovXFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcXG4gICAgLyogQWRkIGEgZHJvcCBzaGFkb3cgZWZmZWN0ICovXFxufVxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCBibGFjaywgMXB4IC0xcHggMCBibGFjaywgLTFweCAxcHggMCBibGFjaywgMXB4IDFweCAwIGJsYWNrO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODJhMztcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIFxcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5ibHVyPio6bm90KC5mb3JtLWNvbnRhaW5lcikge1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogRm9ybSBjb250YWluZXIgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm0gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0gc2VsZWN0LFxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzlENkRGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5mb3JtIHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JGRjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIEFkZGl0aW9uYWwgU3R5bGluZyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLnNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuZ3JheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUucmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubmV3UG9zdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlIDAlIDAlIDAlIC8gMCUgMCUgMCUgMCU7XFxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCByZ2JhKDg0LCA4NCwgODQsIDAuMTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XFxufVxcblxcbi5uZXdQb3N0OmhvdmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCUgMCUgNTAlIDUwJSAvIDAlIDAlIDUlIDUlO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiYSg5MywgOTMsIDkzLCAwLjI1KTtcXG59XFxuXFxuLm5ld1Bvc3QgLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJzZWxlY3Rpb24gbmV3cG9zdCBuZXdwcm9qZWN0XFxcIjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogc2VsZWN0aW9uO1xcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGdyaWQtYXJlYTogbmV3cHJvamVjdDtcXG59XFxuXFxuLm5ld1Bvc3Q6bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1hcmVhOiBuZXdwb3N0O1xcbiAgIFxcbn1cXG4ubmV3UG9zdCB7XFxuICAgIGdyaWQtY29sdW1uOiBuZXdwb3N0O1xcbn1cXG5cXG5cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ubmV3UG9zdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwicHJpb3JpdHkgdGl0bGUgZGVsZXRlXFxcIlxcbiAgICAgICAgXFxcImNoZWNrYm94IGRlc2NyaXB0aW9uIGNhdGVnb3J5XFxcIlxcbiAgICAgICAgXFxcIi4gZHVlRGF0ZSAuXFxcIjtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDc2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIyOSwgMjI5LCAwLjUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG59XFxuLmR1ZURhdGUge1xcbiAgICBncmlkLWFyZWE6IGR1ZURhdGU7XFxuICAgIGNvbG9yOiAjMDA1NmIzO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5kZWxldGVCdXR0b24ge1xcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGl0bGVQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG59XFxuXFxuLnByaW9yaXR5UGFydCB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuLmNhdGVnb3J5UGFydCB7XFxuICAgIGdyaWQtYXJlYTogY2F0ZWdvcnk7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBwbGFjZS1zZWxmOiBlbmQ7XFxufVxcblxcbi5kZXNjcmlwdGlvblBhcnQge1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNiZGMzYzcsICNmZmZmZmYsICNiM2U2ZmYpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG4gICAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wi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b250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ljb25zL0Jpb1JoeW1lLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAgICAgdXJsKCcvc3JjL2ljb25zL0Jpb1JoeW1lLUV4dHJhQm9sZC50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBSZXBsYWNlIHdpdGggeW91ciBkZXNpcmVkIGJhY2tncm91bmQgY29sb3IgKi9cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjQUREOEU2O1xcbiAgICAtLWxpZ2h0LWdyYXk6ICNEM0QzRDM7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBjb250ZW50XFxcIlxcbiAgICAgICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChpY29ucy9tb3VudGFpbi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAvKiBSZXNpemVzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgaGVhZGVyICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgLyogQ2VudGVycyB0aGUgYmFja2dyb3VuZCBpbWFnZSB3aXRoaW4gdGhlIGhlYWRlciAqL1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDEwZnI7XFxufVxcblxcbi5oZWFkZXItaWNvbiBpbWcge1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgICBmb250LXNpemU6IDkwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IC0ycHggMCAjZmZmLCAycHggLTJweCAwICNmZmYsIC0ycHggMnB4IDAgI2ZmZiwgMnB4IDJweCAwICNmZmY7XFxuICAgIC8qIFNldCB0aGUgd2hpdGUgc2hhZG93IGFyb3VuZCB0aGUgZWRnZXMgKi9cXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxMGZyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGVuZDtcXG59XFxuXFxuLmljb25zIGltZyB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDEwZnI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLndvcmsge1xcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xcbn1cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgLyogU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIHdoaXRlICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YTdlZTtcXG4gICAgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGxpZ2h0IGJsdWUgKi9cXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAvKiBBZGQgc29tZSBwYWRkaW5nIGZvciBzcGFjaW5nICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuXFxuICAgIC8qIEFkZCByb3VuZGVkIGNvcm5lcnMgKi9cXG59XFxuXFxuLyogQWRkIHN0eWxlcyBmb3IgdGhlIFxcXCJUb2RheVxcXCIgY2F0ZWdvcnkgaWNvbiAqL1xcbi5oaWdobGlnaHRlZC1pY29ucyBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgIC8qIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uICovXFxuICAgIGZpbGw6ICM1NWE3ZWU7XFxuICAgIC8qIFNldCB0aGUgY29sb3Igb2YgdGhlIGljb24gdG8gbWF0Y2ggdGhlIGJhY2tncm91bmQgKi9cXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcbiAgICAvKiBBZGQgYSBkcm9wIHNoYWRvdyBlZmZlY3QgKi9cXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIGJsYWNrLCAxcHggLTFweCAwIGJsYWNrLCAtMXB4IDFweCAwIGJsYWNrLCAxcHggMXB4IDAgYmxhY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MmEzO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgXFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmJsdXI+Kjpub3QoLmZvcm0tY29udGFpbmVyKSB7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBGb3JtIGNvbnRhaW5lciAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybSBzZWxlY3QsXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOUQ2REY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuLmZvcm0gc2VsZWN0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGZpbGw9JyUyMzAwMDAwMCcgZD0nTTggM0w1IDZWMHpNMCAzbDMtM2gydjZIM0wwIDN6Jy8lM0UlM0Mvc3ZnJTNFXFxcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JGRjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIEFkZGl0aW9uYWwgU3R5bGluZyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLnNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuZ3JheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUucmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubmV3UG9zdCB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlIDAlIDAlIDAlIC8gMCUgMCUgMCUgMCU7XFxuICAgIGJveC1zaGFkb3c6IDIwcHggMjBweCByZ2JhKDg0LCA4NCwgODQsIDAuMTUpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XFxufVxcblxcbi5uZXdQb3N0OmhvdmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCUgMCUgNTAlIDUwJSAvIDAlIDAlIDUlIDUlO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggcmdiYSg5MywgOTMsIDkzLCAwLjI1KTtcXG59XFxuXFxuLm5ld1Bvc3QgLnRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTBmciAxZnI7XFxuICAgIGdyaWQtYXV0by1yb3dzOiAxMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJzZWxlY3Rpb24gbmV3cG9zdCBuZXdwcm9qZWN0XFxcIjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIGdyaWQtYXJlYTogc2VsZWN0aW9uO1xcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGdyaWQtYXJlYTogbmV3cHJvamVjdDtcXG59XFxuXFxuLm5ld1Bvc3Q6bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1hcmVhOiBuZXdwb3N0O1xcbiAgIFxcbn1cXG4ubmV3UG9zdCB7XFxuICAgIGdyaWQtY29sdW1uOiBuZXdwb3N0O1xcbn1cXG5cXG5cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ubmV3UG9zdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwicHJpb3JpdHkgdGl0bGUgZGVsZXRlXFxcIlxcbiAgICAgICAgXFxcImNoZWNrYm94IGRlc2NyaXB0aW9uIGNhdGVnb3J5XFxcIlxcbiAgICAgICAgXFxcIi4gZHVlRGF0ZSAuXFxcIjtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuICAgIGhlaWdodDogNzBweDtcXG4gICAgd2lkdGg6IDc2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIyOSwgMjI5LCAwLjUpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBcXG59XFxuLmR1ZURhdGUge1xcbiAgICBncmlkLWFyZWE6IGR1ZURhdGU7XFxuICAgIGNvbG9yOiAjMDA1NmIzO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5kZWxldGVCdXR0b24ge1xcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGl0bGVQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG59XFxuXFxuLnByaW9yaXR5UGFydCB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuLmNhdGVnb3J5UGFydCB7XFxuICAgIGdyaWQtYXJlYTogY2F0ZWdvcnk7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBwbGFjZS1zZWxmOiBlbmQ7XFxufVxcblxcbi5kZXNjcmlwdGlvblBhcnQge1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNiZGMzYzcsICNmZmZmZmYsICNiM2U2ZmYpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG4gICAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudCB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcblxcbiAgICA1MCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2dldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkb21DaGVja2VyIH0gZnJvbSBcIi4vZG9tU3dpdGNoZXJcIjtcblxuXG5leHBvcnQgY29uc3QgY29udGVudERvbSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcG9zdHMgPSB7XG4gICAgICAgIFRvZGF5OiBbXSxcbiAgICAgICAgUHJvamVjdHM6IFtdLFxuICAgICAgICBQZXJzb25hbDogW10sXG4gICAgICAgIFdvcms6IFtdLFxuICAgICAgICBkb21NYW5pcHVsYXRvcjogZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgICAgIHBvc3RzLlRvZGF5LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5jYXRlZ29yeSA9PT0gJ1Byb2plY3RzJykge1xuICAgICAgICAgICAgICAgIHBvc3RzLlByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2plY3QuY2F0ZWdvcnkgPT09ICdQZXJzb25hbCcpIHtcbiAgICAgICAgICAgICAgICBwb3N0cy5QZXJzb25hbC5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIC8vIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmNhdGVnb3J5ID09PSAnV29yaycpIHtcbiAgICAgICAgICAgICAgICBwb3N0cy5Xb3JrLnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB9LFxuXG4gICAgICAgIGRvbVBvc3RlcjogZnVuY3Rpb24gKHByb2plY3RBcnJheSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vIEdldCB0aGUgY29udGVudCBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1Bvc3RzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3UG9zdCcpO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nUG9zdHMgYmVmb3JlIGFwcGVuZGluZyBuZXcgcG9zdHNcbiAgICAgICAgICAgIGV4aXN0aW5nUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvc3QucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuZXdQb3N0LmNsYXNzTGlzdC5hZGQoJ25ld1Bvc3QnKTtcblxuXG4gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBwcm9qZWN0LmNhdGVnb3J5O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZVBhcnQnKTtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJyk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaWJ0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpYnRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpYnRpb25QYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpYnRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlQYXJ0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5UGFydCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaXJjbGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5UGFydC5hcHBlbmRDaGlsZChzZWxlY3RlZENpcmNsZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc3QucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSBcIlRvZGF5XCIgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXlQb3N0cyA9IGNvbnRlbnREb20ucG9zdHMuVG9kYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheUluZGV4ID0gdG9kYXlQb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZGF5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXlQb3N0cy5zcGxpY2UodG9kYXlJbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwb3N0IGZyb20gdGhlIHJlc3BlY3RpdmUgY2F0ZWdvcnkgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlQb3N0cyA9IGNvbnRlbnREb20ucG9zdHNbcHJvamVjdC5jYXRlZ29yeV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gY2F0ZWdvcnlQb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlQb3N0cy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBkaXNwbGF5IGZvciBcIlRvZGF5XCIgYW5kIHRoZSByZXNwZWN0aXZlIGNhdGVnb3J5IHNlY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tQ2hlY2tlci5jaGVja2VyKHNlbGVjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG5cblxuXG5cbiAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgICAgICBuZXdQb3N0LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBuZXdQb3N0LmFwcGVuZENoaWxkKGRlc2NyaWJ0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdQb3N0LmFwcGVuZENoaWxkKHByaW9yaXR5UGFydCk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb250ZW50LnByZXBlbmQobmV3UG9zdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdHMsXG4gICAgfTtcbn0pKCk7XG5cblxuXG5cblxuICAgICAgICAvLyBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleCgocG9zdCkgPT4gcG9zdCA9PT0gcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3UG9zdC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSBcIlRvZGF5XCIgc2VjdGlvblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdG9kYXlQb3N0cyA9IGNvbnRlbnREb20ucG9zdHMuVG9kYXk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0b2RheUluZGV4ID0gdG9kYXlQb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHRvZGF5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9kYXlQb3N0cy5zcGxpY2UodG9kYXlJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSByZXNwZWN0aXZlIGNhdGVnb3J5IHNlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNhdGVnb3J5UG9zdHMgPSBjb250ZW50RG9tLnBvc3RzW3Byb2plY3QuY2F0ZWdvcnldO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGNhdGVnb3J5UG9zdHMuZmluZEluZGV4KChwb3N0KSA9PiBwb3N0ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChjYXRlZ29yeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNhdGVnb3J5UG9zdHMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBVcGRhdGUgdGhlIGRpc3BsYXkgZm9yIFwiVG9kYXlcIiBhbmQgdGhlIHJlc3BlY3RpdmUgY2F0ZWdvcnkgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzW3NlbGVjdGlvbi50ZXh0Q29udGVudF0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG5cbiIsIlxuXG5pbXBvcnQgeyBjb250ZW50RG9tIH0gZnJvbSAnLi9ET01wb3N0ZXInO1xuXG5cblxuZXhwb3J0IGNvbnN0IGRvbUNoZWNrZXIgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNoZWNrZXIoc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdUb2RheTonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLlRvZGF5KVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdQcm9qZWN0czonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLlByb2plY3RzKVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdQZXJzb25hbDonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLlBlcnNvbmFsKVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdXb3JrOicpIHtcbiAgICAgICAgICAgIGNvbnRlbnREb20ucG9zdHMuZG9tUG9zdGVyKGNvbnRlbnREb20ucG9zdHMuV29yaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZU9mU2VsZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJzb25hbCcpO1xuICAgICAgICBjb25zdCB3b3JrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmsnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbicpXG4gICAgICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb25zIGRpdicpO1xuICAgICAgICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktaWNvbicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtaWNvbicpO1xuICAgICAgICBjb25zdCBwZXJzb25hbEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwtaWNvbicpO1xuICAgICAgICBjb25zdCB3b3JrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLWljb24nKTtcbiAgICAgICAgdG9kYXkuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkLWljb25zJyk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkVGV4dCkge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRUZXh0O1xuICAgICAgICAgICAgZG9tQ2hlY2tlci5jaGVja2VyKHNlbGVjdGlvbi50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSGlnaGxpZ2h0Q2xhc3MoKSB7XG4gICAgICAgICAgICBbdG9kYXksIHByb2plY3RzLCBwZXJzb25hbCwgd29ya10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQtaWNvbnMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoJ1RvZGF5OicpO1xuICAgICAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0Q2xhc3MoKTtcbiAgICAgICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudERvbS5wb3N0cy5Ub2RheSlcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKCdQcm9qZWN0czonKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0Q2xhc3MoKTtcbiAgICAgICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIHByb2plY3RzSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGVyc29uYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoJ1BlcnNvbmFsOicpO1xuICAgICAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0Q2xhc3MoKTtcbiAgICAgICAgICAgIHBlcnNvbmFsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIHBlcnNvbmFsSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuICAgICAgICB9KTtcbiAgICAgICAgd29yay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdGlvbkNoYW5nZSgnV29yazonKTtcbiAgICAgICAgICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzKCk7XG4gICAgICAgICAgICB3b3JrLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIHdvcmtJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkLWljb25zJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb21DaGVja2VyLmNoZWNrZXIoc2VsZWN0aW9uLnRleHRDb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja2VyLFxuICAgICAgICBjaGFuZ2VPZlNlbGVjdGlvbixcbiAgICB9O1xufSkoKTtcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2xpY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdCcpO1xuXG4gICAgXG4gICAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGlucHV0IGZvciBjYXRlZ29yeVxuICAgICAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gJ0NhdGVnb3J5Oic7XG4gICAgICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdElucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gWydQcm9qZWN0cycsICdQZXJzb25hbCcsICdXb3JrJ107XG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0TGFiZWwuYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZm9yIHRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZvciBkdWUgZGF0ZVxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcbiAgICBkdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZvciBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZvciBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgZ3JheUNpcmNsZSA9IGNyZWF0ZVByaW9yaXR5Q2lyY2xlKCdncmF5Jyk7XG4gICAgICAgIGNvbnN0IGJsdWVDaXJjbGUgPSBjcmVhdGVQcmlvcml0eUNpcmNsZSgnYmx1ZScpO1xuICAgICAgICBjb25zdCByZWRDaXJjbGUgPSBjcmVhdGVQcmlvcml0eUNpcmNsZSgncmVkJyk7XG5cbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoZ3JheUNpcmNsZSk7XG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGJsdWVDaXJjbGUpO1xuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChyZWRDaXJjbGUpO1xuXG4gICAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc3VibWl0IGJ1dHRvblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgICAgICAgLy8gQXBwZW5kIGFsbCB0aGUgZm9ybSBlbGVtZW50cyB0byB0aGUgZm9ybVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBmb3JtIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZm9ybSBjb250YWluZXIgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiBmb3JtQ29udGFpbmVyLm9mZnNldFRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIFJldHJpZXZlIGZvcm0gdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHNlbGVjdElucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZ2V0U2VsZWN0ZWRQcmlvcml0eSgpO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhjYXRlZ29yeSwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XG5cbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByaW9yaXR5IGNpcmNsZVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eUNpcmNsZShjb2xvcikge1xuICAgICAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNpcmNsZScpO1xuICAgICAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoY29sb3IpO1xuICAgICAgICAgICAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyYXlDaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBibHVlQ2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgcmVkQ2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjaXJjbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzZWxlY3RlZCBwcmlvcml0eVxuICAgICAgICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByaW9yaXR5KCkge1xuICAgICAgICAgICAgaWYgKGdyYXlDaXJjbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdncmF5JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmx1ZUNpcmNsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JsdWUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWRDaXJjbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgXG59XG4iLCJcblxuY2xhc3MgUHJvamVjdEdlbiB7XG4gICAgY29uc3RydWN0b3IoY2F0ZWdvcnksIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGluZm8oKSB7XG4gICAgICAgIHJldHVybiBgQ2F0ZWdvcnk6ICR7dGhpcy5jYXRlZ29yeX0sIFRpdGxlOiAke3RoaXMudGl0bGV9LCBEYXRlOiAke3RoaXMuZHVlRGF0ZX0gRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn0sIFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3RHZW4gfTtcbiIsImltcG9ydCB7IGNvbnRlbnREb20gfSBmcm9tICcuL0RPTXBvc3Rlcic7XG5cbi8vIHN0b3JhZ2UuanNcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3N0cycsIEpTT04uc3RyaW5naWZ5KGNvbnRlbnREb20ucG9zdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzYXZlZFBvc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zdHMnKSk7XG4gICAgaWYgKHNhdmVkUG9zdHMpIHtcbiAgICAgICAgLy8gQ2xlYXIgZXhpc3RpbmcgcG9zdHMgaW4gZWFjaCBjYXRlZ29yeSBhcnJheVxuICAgICAgICBjb250ZW50RG9tLnBvc3RzLlRvZGF5Lmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbnRlbnREb20ucG9zdHMuUHJvamVjdHMubGVuZ3RoID0gMDtcbiAgICAgICAgY29udGVudERvbS5wb3N0cy5QZXJzb25hbC5sZW5ndGggPSAwO1xuICAgICAgICBjb250ZW50RG9tLnBvc3RzLldvcmsubGVuZ3RoID0gMDtcblxuICAgICAgICBcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIGNhdGVnb3J5IGFycmF5cyB3aXRoIHJldHJpZXZlZCBkYXRhXG4gICAgICAgIHNhdmVkUG9zdHMuVG9kYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21NYW5pcHVsYXRvcihwcm9qZWN0KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IFByb2plY3RHZW4gfSBmcm9tICcuL3Byb2plY3RnZW5lcmF0b3InXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7IGNvbnRlbnREb20gfSBmcm9tICcuL0RPTXBvc3Rlcic7XG5pbXBvcnQgeyBkb21DaGVja2VyIH0gZnJvbSAnLi9kb21Td2l0Y2hlcic7XG5pbXBvcnQgeyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSwgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlLCByZW1vdmVGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuXG5jb25zb2xlLmxvZygnUmFkaSByYWRpJylcblxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBoZWFkZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1pY29uJyk7XG5jb25zdCBoZWFkZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci1uYW1lJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25zJyk7XG5jb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktaWNvbicpO1xuY29uc3QgcHJvamVjdHNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWljb24nKTtcbmNvbnN0IHBlcnNvbmFsSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJzb25hbC1pY29uJyk7XG5jb25zdCB3b3JrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLWljb24nKTtcbmNvbnN0IHRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbmNvbnN0IHBlcnNvbmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbmFsJyk7XG5jb25zdCB3b3JrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmsnKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuXG5cblxuLy8gQ3JlYXRlIGEgbmV3IGRpdiBlbGVtZW50XG5jb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlbGVjdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3Rpb24nKTtcbnNlbGVjdGlvbi50ZXh0Q29udGVudCA9ICdUb2RheTonO1xuXG4vLyBBcHBlbmQgdGhlIHNlbGVjdGlvbiBkaXYgdG8gdGhlIGNvbnRlbnQgZWxlbWVudFxuY29udGVudC5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuXG5cbmNvbnN0IGNsaWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jbGlja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0JylcbmNsaWNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0NsaWNrJztcblxuLy8gQXBwZW5kIHRoZSBidXR0b24gdG8gdGhlIGNvbnRlbnQgZWxlbWVudFxuY29udGVudC5hcHBlbmRDaGlsZChjbGlja0J1dHRvbik7XG5cblxuY2xpY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlRm9ybSgoY2F0ZWdvcnksIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0R2VuKGNhdGVnb3J5LCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbiAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21NYW5pcHVsYXRvcihwcm9qZWN0KVxuICAgICAgICBkb21DaGVja2VyLmNoZWNrZXIoc2VsZWN0aW9uLnRleHRDb250ZW50KVxuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pO1xufSk7XG5kb21DaGVja2VyLmNoYW5nZU9mU2VsZWN0aW9uKCk7XG5cblxuY29uc29sZS5sb2coc2VsZWN0aW9uLnRleHRDb250ZW50KVxuXG5cblxuXG4vLyAvLyBFeGFtcGxlIHVzYWdlOlxuY29uc3QgbmV3UHJvamVjdCA9IHtcbiAgICBjYXRlZ29yeTogJ1Byb2plY3RzJyxcbiAgICB0aXRsZTogJ05ldyBQcm9qZWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIHRoZSBuZXcgcHJvamVjdCcsXG4gICAgcHJpb3JpdHk6ICdibHVlJyxcbiAgICBkdWVEYXRlOiAnMjAyMy0wNS0zMScsXG59O1xuXG5cblxuXG5cbi8vIFJldHJpZXZlIHRoZSBzYXZlZCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSBjb250ZW50RG9tLnBvc3RzIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBcbiAgICBkb21DaGVja2VyLmNoZWNrZXIoc2VsZWN0aW9uLnRleHRDb250ZW50KTtcbn0pO1xuXG5jb250ZW50RG9tLnBvc3RzLmRvbU1hbmlwdWxhdG9yKG5ld1Byb2plY3QpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=