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
/* harmony export */   "removeFromLocalStorage": () => (/* binding */ removeFromLocalStorage),
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
        _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Today = savedPosts.Today || [];
        _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Projects = savedPosts.Projects || [];
        _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Personal = savedPosts.Personal || [];
        _DOMposter__WEBPACK_IMPORTED_MODULE_0__.contentDom.posts.Work = savedPosts.Work || [];
    }
}

function removeFromLocalStorage(project) {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || {};
    const updatedPosts = {
        Today: removeProjectFromArray(savedPosts.Today, project),
        Projects: removeProjectFromArray(savedPosts.Projects, project),
        Personal: removeProjectFromArray(savedPosts.Personal, project),
        Work: removeProjectFromArray(savedPosts.Work, project),
    };
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
}

function removeProjectFromArray(array, project) {
    return array.filter((p) => p !== project);
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

_DOMposter__WEBPACK_IMPORTED_MODULE_3__.contentDom.posts.domManipulator(newProject)



// Retrieve the saved projects from local storage and update contentDom.posts when the page is loaded
window.addEventListener('load', () => {
    ;(0,_storage__WEBPACK_IMPORTED_MODULE_5__.getProjectsFromLocalStorage)();
    _domSwitcher__WEBPACK_IMPORTED_MODULE_4__.domChecker.checker(selection.textContent);
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsOERBQXNCO0FBQzlDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEZNO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsY0FBYyxXQUFXLFdBQVcsVUFBVSxjQUFjLGVBQWUsaUJBQWlCLGNBQWMsY0FBYztBQUNwSjtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJtQjs7QUFFekM7O0FBRU87QUFDUCxpREFBaUQsd0RBQWdCO0FBQ2pFOztBQUVPO0FBQ1A7QUFDQTtBQUNBLFFBQVEsOERBQXNCO0FBQzlCLFFBQVEsaUVBQXlCO0FBQ2pDLFFBQVEsaUVBQXlCO0FBQ2pDLFFBQVEsNkRBQXFCO0FBQzdCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNYO0FBQ0s7QUFDRTtBQUNpRTs7O0FBRzVHOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0EsSUFBSSxpREFBVTtBQUNkLDRCQUE0Qix5REFBVTtBQUN0QyxRQUFRLHVFQUErQjtBQUN2QyxRQUFRLDREQUFrQjtBQUMxQixRQUFRLHFFQUEwQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCxzRUFBNEI7OztBQUc1Qjs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFQUErQjs7OztBQUkvQjtBQUNBO0FBQ0EsSUFBSSxzRUFBMkI7QUFDL0IsSUFBSSw0REFBa0I7QUFDdEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET01wb3N0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21Td2l0Y2hlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0Z2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaWNvbnMvQmlvUmh5bWUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ljb25zL0Jpb1JoeW1lLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJpY29ucy9tb3VudGFpbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSUyN2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJTI3IHdpZHRoPSUyNzglMjcgaGVpZ2h0PSUyNzglMjcgdmlld0JveD0lMjcwIDAgOCA4JTI3JTNFJTNDcGF0aCBmaWxsPSUyNyUyMzAwMDAwMCUyNyBkPSUyN004IDNMNSA2VjB6TTAgM2wzLTNoMnY2SDNMMCAzeiUyNy8lM0UlM0Mvc3ZnJTNFXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgLyogUmVwbGFjZSB3aXRoIHlvdXIgZGVzaXJlZCBiYWNrZ3JvdW5kIGNvbG9yICovXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogI0FERDhFNjtcXG4gICAgLS1saWdodC1ncmF5OiAjRDNEM0QzO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInNpZGViYXIgY29udGVudFxcXCJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAvKiBSZXNpemVzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgaGVhZGVyICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgLyogQ2VudGVycyB0aGUgYmFja2dyb3VuZCBpbWFnZSB3aXRoaW4gdGhlIGhlYWRlciAqL1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ibHVlKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDEwZnI7XFxufVxcblxcbi5oZWFkZXItaWNvbiBpbWcge1xcbiAgICB3aWR0aDogOTBweDtcXG4gICAgaGVpZ2h0OiA5MHB4O1xcbn1cXG5cXG4uaGVhZGVyLW5hbWUge1xcbiAgICBmb250LXNpemU6IDkwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHRleHQtc2hhZG93OiAtMnB4IC0ycHggMCAjZmZmLCAycHggLTJweCAwICNmZmYsIC0ycHggMnB4IDAgI2ZmZiwgMnB4IDJweCAwICNmZmY7XFxuICAgIC8qIFNldCB0aGUgd2hpdGUgc2hhZG93IGFyb3VuZCB0aGUgZWRnZXMgKi9cXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxMGZyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGVuZDtcXG59XFxuXFxuLmljb25zIGltZyB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDEwZnI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLndvcmsge1xcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xcbn1cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgLyogU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIHdoaXRlICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YTdlZTtcXG4gICAgLyogU2V0IHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGxpZ2h0IGJsdWUgKi9cXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAvKiBBZGQgc29tZSBwYWRkaW5nIGZvciBzcGFjaW5nICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3BhY2l0eTogMC45O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuXFxuICAgIC8qIEFkZCByb3VuZGVkIGNvcm5lcnMgKi9cXG59XFxuXFxuLyogQWRkIHN0eWxlcyBmb3IgdGhlIFxcXCJUb2RheVxcXCIgY2F0ZWdvcnkgaWNvbiAqL1xcbi5oaWdobGlnaHRlZC1pY29ucyBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XFxuICAgIC8qIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uICovXFxuICAgIGZpbGw6ICM1NWE3ZWU7XFxuICAgIC8qIFNldCB0aGUgY29sb3Igb2YgdGhlIGljb24gdG8gbWF0Y2ggdGhlIGJhY2tncm91bmQgKi9cXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcbiAgICAvKiBBZGQgYSBkcm9wIHNoYWRvdyBlZmZlY3QgKi9cXG59XFxuXFxuLnNlbGVjdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwIGJsYWNrLCAxcHggLTFweCAwIGJsYWNrLCAtMXB4IDFweCAwIGJsYWNrLCAxcHggMXB4IDAgYmxhY2s7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MmEzO1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgXFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuLmJsdXI+Kjpub3QoLmZvcm0tY29udGFpbmVyKSB7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBDU1MgKi9cXG4vKiBGb3JtIGNvbnRhaW5lciAqL1xcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgbGlnaHRibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybSBzZWxlY3QsXFxuLmZvcm0gaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOUQ2REY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzMzMzMzMztcXG59XFxuXFxuLmZvcm0gc2VsZWN0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQWRkaXRpb25hbCBTdHlsaW5nICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuc2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5ncmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCUgMCUgMCUgMCUgLyAwJSAwJSAwJSAwJTtcXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IHJnYmEoODQsIDg0LCA4NCwgMC4xNSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcXG59XFxuXFxuLm5ld1Bvc3Q6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDkzLCA5MywgOTMsIDAuMjUpO1xcbn1cXG5cXG4ubmV3UG9zdCAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInNlbGVjdGlvbiBuZXdwb3N0IG5ld3Byb2plY3RcXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiBzZWxlY3Rpb247XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBuZXdwcm9qZWN0O1xcbn1cXG5cXG4ubmV3UG9zdDpudGgtY2hpbGQoMSkge1xcbiAgICBncmlkLWFyZWE6IG5ld3Bvc3Q7XFxuICAgXFxufVxcbi5uZXdQb3N0IHtcXG4gICAgZ3JpZC1jb2x1bW46IG5ld3Bvc3Q7XFxufVxcblxcblxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJwcmlvcml0eSB0aXRsZSBkZWxldGVcXFwiXFxuICAgICAgICBcXFwiY2hlY2tib3ggZGVzY3JpcHRpb24gY2F0ZWdvcnlcXFwiXFxuICAgICAgICBcXFwiLiBkdWVEYXRlIC5cXFwiO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDAuNSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbn1cXG4uZHVlRGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogZHVlRGF0ZTtcXG4gICAgY29sb3I6ICMwMDU2YjM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi50aXRsZVBhcnQge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBncmlkLWFyZWE6IGNoZWNrYm94O1xcbn1cXG5cXG4ucHJpb3JpdHlQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnlQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBjYXRlZ29yeTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uUGFydCB7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2JkYzNjNywgI2ZmZmZmZiwgI2IzZTZmZik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcbiAgICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8v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OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vaWNvbnMvQmlvUmh5bWUtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgICAgICB1cmwoJy9zcmMvaWNvbnMvQmlvUmh5bWUtRXh0cmFCb2xkLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWxpZ2h0LWJsdWU6ICNBREQ4RTY7XFxuICAgIC0tbGlnaHQtZ3JheTogI0QzRDNEMztcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyIGhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJzaWRlYmFyIGNvbnRlbnRcXFwiXFxuICAgICAgICBcXFwiZm9vdGVyIGZvb3RlclxcXCI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDExZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA2ZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGljb25zL21vdW50YWluLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC8qIFJlc2l6ZXMgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBoZWFkZXIgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHdpdGhpbiB0aGUgaGVhZGVyICovXFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTBmcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIGltZyB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggLTJweCAwICNmZmYsIDJweCAtMnB4IDAgI2ZmZiwgLTJweCAycHggMCAjZmZmLCAycHggMnB4IDAgI2ZmZjtcXG4gICAgLyogU2V0IHRoZSB3aGl0ZSBzaGFkb3cgYXJvdW5kIHRoZSBlZGdlcyAqL1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBjb2xvcjogIzMzMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgOGZyO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbi5pY29ucyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDEwZnI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwbGFjZS1pdGVtczogZW5kO1xcbn1cXG5cXG4uaWNvbnMgaW1nIHtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG59XFxuXFxuLnRvZG9zIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMTBmcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGxhY2UtaXRlbXM6IHN0YXJ0O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG4ud29yayB7XFxuICAgIG1hcmdpbi10b3A6IC03cHg7XFxufVxcbi5oaWdobGlnaHRlZCB7XFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAvKiBTZXQgdGhlIHRleHQgY29sb3IgdG8gd2hpdGUgKi9cXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFxuICAgIC8qIEFkanVzdCB0aGUgZm9udCBzaXplIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhN2VlO1xcbiAgICAvKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbGlnaHQgYmx1ZSAqL1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIC8qIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG5cXG4gICAgLyogQWRkIHJvdW5kZWQgY29ybmVycyAqL1xcbn1cXG5cXG4vKiBBZGQgc3R5bGVzIGZvciB0aGUgXFxcIlRvZGF5XFxcIiBjYXRlZ29yeSBpY29uICovXFxuLmhpZ2hsaWdodGVkLWljb25zIGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24gKi9cXG4gICAgZmlsbDogIzU1YTdlZTtcXG4gICAgLyogU2V0IHRoZSBjb2xvciBvZiB0aGUgaWNvbiB0byBtYXRjaCB0aGUgYmFja2dyb3VuZCAqL1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICAgIC8qIEFkZCBhIGRyb3Agc2hhZG93IGVmZmVjdCAqL1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgYmxhY2ssIDFweCAtMXB4IDAgYmxhY2ssIC0xcHggMXB4IDAgYmxhY2ssIDFweCAxcHggMCBibGFjaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDgyYTM7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4uYmx1cj4qOm5vdCguZm9ybS1jb250YWluZXIpIHtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIENTUyAqL1xcbi8qIEZvcm0gY29udGFpbmVyICovXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtIHNlbGVjdCxcXG4uZm9ybSBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0M5RDZERjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uZm9ybSBzZWxlY3Qge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nOCcgaGVpZ2h0PSc4JyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZmlsbD0nJTIzMDAwMDAwJyBkPSdNOCAzTDUgNlYwek0wIDNsMy0zaDJ2NkgzTDAgM3onLyUzRSUzQy9zdmclM0VcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgOHB4IGNlbnRlcjtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QkZGO1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLyogQWRkaXRpb25hbCBTdHlsaW5nICovXFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb3JtIGxhYmVsIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbn1cXG5cXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDUwcHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuc2VsZWN0ZWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5ncmF5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5yZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMCUgMCUgMCUgMCUgLyAwJSAwJSAwJSAwJTtcXG4gICAgYm94LXNoYWRvdzogMjBweCAyMHB4IHJnYmEoODQsIDg0LCA4NCwgMC4xNSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcXG59XFxuXFxuLm5ld1Bvc3Q6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDkzLCA5MywgOTMsIDAuMjUpO1xcbn1cXG5cXG4ubmV3UG9zdCAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInNlbGVjdGlvbiBuZXdwb3N0IG5ld3Byb2plY3RcXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiBzZWxlY3Rpb247XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBuZXdwcm9qZWN0O1xcbn1cXG5cXG4ubmV3UG9zdDpudGgtY2hpbGQoMSkge1xcbiAgICBncmlkLWFyZWE6IG5ld3Bvc3Q7XFxuICAgXFxufVxcbi5uZXdQb3N0IHtcXG4gICAgZ3JpZC1jb2x1bW46IG5ld3Bvc3Q7XFxufVxcblxcblxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJwcmlvcml0eSB0aXRsZSBkZWxldGVcXFwiXFxuICAgICAgICBcXFwiY2hlY2tib3ggZGVzY3JpcHRpb24gY2F0ZWdvcnlcXFwiXFxuICAgICAgICBcXFwiLiBkdWVEYXRlIC5cXFwiO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI5LCAyMjksIDAuNSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbn1cXG4uZHVlRGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogZHVlRGF0ZTtcXG4gICAgY29sb3I6ICMwMDU2YjM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi50aXRsZVBhcnQge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbn1cXG5cXG4uY2hlY2tib3gtaW5wdXQge1xcbiAgICBncmlkLWFyZWE6IGNoZWNrYm94O1xcbn1cXG5cXG4ucHJpb3JpdHlQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2F0ZWdvcnlQYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBjYXRlZ29yeTtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHBsYWNlLXNlbGY6IGVuZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uUGFydCB7XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2JkYzNjNywgI2ZmZmZmZiwgI2IzZTZmZik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcbiAgICBhbmltYXRpb246IGdyYWRpZW50IDE1cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBkb21DaGVja2VyIH0gZnJvbSBcIi4vZG9tU3dpdGNoZXJcIjtcblxuXG5leHBvcnQgY29uc3QgY29udGVudERvbSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcG9zdHMgPSB7XG4gICAgICAgIFRvZGF5OiBbXSxcbiAgICAgICAgUHJvamVjdHM6IFtdLFxuICAgICAgICBQZXJzb25hbDogW10sXG4gICAgICAgIFdvcms6IFtdLFxuICAgICAgICBkb21NYW5pcHVsYXRvcjogZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgICAgIHBvc3RzLlRvZGF5LnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICBpZiAocHJvamVjdC5jYXRlZ29yeSA9PT0gJ1Byb2plY3RzJykge1xuICAgICAgICAgICAgICAgIHBvc3RzLlByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvamVjdC5jYXRlZ29yeSA9PT0gJ1BlcnNvbmFsJykge1xuICAgICAgICAgICAgICAgIHBvc3RzLlBlcnNvbmFsLnB1c2gocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvamVjdC5jYXRlZ29yeSA9PT0gJ1dvcmsnKSB7XG4gICAgICAgICAgICAgICAgcG9zdHMuV29yay5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB9LFxuXG4gICAgICAgIGRvbVBvc3RlcjogZnVuY3Rpb24gKHByb2plY3RBcnJheSkge1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7IC8vIEdldCB0aGUgY29udGVudCBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1Bvc3RzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV3UG9zdCcpO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGV4aXN0aW5nUG9zdHMgYmVmb3JlIGFwcGVuZGluZyBuZXcgcG9zdHNcbiAgICAgICAgICAgIGV4aXN0aW5nUG9zdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvc3QucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuZXdQb3N0LmNsYXNzTGlzdC5hZGQoJ25ld1Bvc3QnKTtcblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZCgnY2F0ZWdvcnlQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBwcm9qZWN0LmNhdGVnb3J5O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZVBhcnQnKTtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVEYXRlJyk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3QuZHVlRGF0ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaWJ0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpYnRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpYnRpb25QYXJ0Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpYnRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlQYXJ0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5UGFydCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaXJjbGUuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJvamVjdC5wcmlvcml0eTtcblxuICAgICAgICAgICAgICAgIHByaW9yaXR5UGFydC5hcHBlbmRDaGlsZChzZWxlY3RlZENpcmNsZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gtaW5wdXQnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHNlbGVjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Bvc3QucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSBcIlRvZGF5XCIgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXlQb3N0cyA9IGNvbnRlbnREb20ucG9zdHMuVG9kYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheUluZGV4ID0gdG9kYXlQb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZGF5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kYXlQb3N0cy5zcGxpY2UodG9kYXlJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSByZXNwZWN0aXZlIGNhdGVnb3J5IHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5UG9zdHMgPSBjb250ZW50RG9tLnBvc3RzW3Byb2plY3QuY2F0ZWdvcnldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGNhdGVnb3J5UG9zdHMuZmluZEluZGV4KChwb3N0KSA9PiBwb3N0ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5UG9zdHMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBkaXNwbGF5IGZvciBcIlRvZGF5XCIgYW5kIHRoZSByZXNwZWN0aXZlIGNhdGVnb3J5IHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tQ2hlY2tlci5jaGVja2VyKHNlbGVjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgICAgICBuZXdQb3N0LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgICAgICAgICAgICBuZXdQb3N0LmFwcGVuZENoaWxkKGRlc2NyaWJ0aW9uKTtcbiAgICAgICAgICAgICAgICBuZXdQb3N0LmFwcGVuZENoaWxkKHByaW9yaXR5UGFydCk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb250ZW50LnByZXBlbmQobmV3UG9zdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zdHMsXG4gICAgfTtcbn0pKCk7XG5cblxuXG5cblxuICAgICAgICAvLyBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleCgocG9zdCkgPT4gcG9zdCA9PT0gcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3UG9zdC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSBcIlRvZGF5XCIgc2VjdGlvblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdG9kYXlQb3N0cyA9IGNvbnRlbnREb20ucG9zdHMuVG9kYXk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCB0b2RheUluZGV4ID0gdG9kYXlQb3N0cy5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHRvZGF5SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdG9kYXlQb3N0cy5zcGxpY2UodG9kYXlJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSByZXNwZWN0aXZlIGNhdGVnb3J5IHNlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNhdGVnb3J5UG9zdHMgPSBjb250ZW50RG9tLnBvc3RzW3Byb2plY3QuY2F0ZWdvcnldO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGNhdGVnb3J5UG9zdHMuZmluZEluZGV4KChwb3N0KSA9PiBwb3N0ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChjYXRlZ29yeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNhdGVnb3J5UG9zdHMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBVcGRhdGUgdGhlIGRpc3BsYXkgZm9yIFwiVG9kYXlcIiBhbmQgdGhlIHJlc3BlY3RpdmUgY2F0ZWdvcnkgc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzW3NlbGVjdGlvbi50ZXh0Q29udGVudF0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG5cbiIsIlxuXG5pbXBvcnQgeyBjb250ZW50RG9tIH0gZnJvbSAnLi9ET01wb3N0ZXInO1xuXG5cblxuZXhwb3J0IGNvbnN0IGRvbUNoZWNrZXIgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGNoZWNrZXIoc2VsZWN0aW9uKSB7XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdUb2RheTonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLlRvZGF5KVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdQcm9qZWN0czonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLlByb2plY3RzKVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdQZXJzb25hbDonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLlBlcnNvbmFsKVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rpb24gPT09ICdXb3JrOicpIHtcbiAgICAgICAgICAgIGNvbnRlbnREb20ucG9zdHMuZG9tUG9zdGVyKGNvbnRlbnREb20ucG9zdHMuV29yaylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZU9mU2VsZWN0aW9uKCkge1xuICAgICAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgICAgICBjb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJzb25hbCcpO1xuICAgICAgICBjb25zdCB3b3JrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmsnKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGlvbicpXG4gICAgICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb25zIGRpdicpO1xuICAgICAgICBjb25zdCB0b2RheUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXktaWNvbicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtaWNvbicpO1xuICAgICAgICBjb25zdCBwZXJzb25hbEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwtaWNvbicpO1xuICAgICAgICBjb25zdCB3b3JrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrLWljb24nKTtcbiAgICAgICAgdG9kYXkuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgdG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkLWljb25zJyk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGVkVGV4dCkge1xuICAgICAgICAgICAgc2VsZWN0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRUZXh0O1xuICAgICAgICAgICAgZG9tQ2hlY2tlci5jaGVja2VyKHNlbGVjdGlvbi50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlSGlnaGxpZ2h0Q2xhc3MoKSB7XG4gICAgICAgICAgICBbdG9kYXksIHByb2plY3RzLCBwZXJzb25hbCwgd29ya10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQtaWNvbnMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoJ1RvZGF5OicpO1xuICAgICAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0Q2xhc3MoKTtcbiAgICAgICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29udGVudERvbS5wb3N0cy5Ub2RheSlcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKCdQcm9qZWN0czonKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0Q2xhc3MoKTtcbiAgICAgICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIHByb2plY3RzSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGVyc29uYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoJ1BlcnNvbmFsOicpO1xuICAgICAgICAgICAgcmVtb3ZlSGlnaGxpZ2h0Q2xhc3MoKTtcbiAgICAgICAgICAgIHBlcnNvbmFsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIHBlcnNvbmFsSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuICAgICAgICB9KTtcbiAgICAgICAgd29yay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdGlvbkNoYW5nZSgnV29yazonKTtcbiAgICAgICAgICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzKCk7XG4gICAgICAgICAgICB3b3JrLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJylcbiAgICAgICAgICAgIHdvcmtJY29uLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkLWljb25zJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb21DaGVja2VyLmNoZWNrZXIoc2VsZWN0aW9uLnRleHRDb250ZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjaGVja2VyLFxuICAgICAgICBjaGFuZ2VPZlNlbGVjdGlvbixcbiAgICB9O1xufSkoKTtcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oY2FsbGJhY2spIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2xpY2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvamVjdCcpO1xuXG4gICAgXG4gICAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvcm0gY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZm9ybSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc2VsZWN0IGlucHV0IGZvciBjYXRlZ29yeVxuICAgICAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gJ0NhdGVnb3J5Oic7XG4gICAgICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNlbGVjdElucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gWydQcm9qZWN0cycsICdQZXJzb25hbCcsICdXb3JrJ107XG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgICAgICAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0TGFiZWwuYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZm9yIHRpdGxlXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpdGxlOic7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRpdGxlSW5wdXQubmFtZSA9ICd0aXRsZSc7XG4gICAgICAgIHRpdGxlTGFiZWwuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZvciBkdWUgZGF0ZVxuICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlOic7XG4gICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkdWVEYXRlSW5wdXQubmFtZSA9ICdkdWVEYXRlJztcbiAgICBkdWVEYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZvciBkZXNjcmlwdGlvblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbjonO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gJ2Rlc2NyaXB0aW9uJztcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZvciBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eTonO1xuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgZ3JheUNpcmNsZSA9IGNyZWF0ZVByaW9yaXR5Q2lyY2xlKCdncmF5Jyk7XG4gICAgICAgIGNvbnN0IGJsdWVDaXJjbGUgPSBjcmVhdGVQcmlvcml0eUNpcmNsZSgnYmx1ZScpO1xuICAgICAgICBjb25zdCByZWRDaXJjbGUgPSBjcmVhdGVQcmlvcml0eUNpcmNsZSgncmVkJyk7XG5cbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoZ3JheUNpcmNsZSk7XG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGJsdWVDaXJjbGUpO1xuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChyZWRDaXJjbGUpO1xuXG4gICAgICAgIHByaW9yaXR5TGFiZWwuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgc3VibWl0IGJ1dHRvblxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgICAgICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgICAgICAgLy8gQXBwZW5kIGFsbCB0aGUgZm9ybSBlbGVtZW50cyB0byB0aGUgZm9ybVxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBmb3JtIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZm9ybSBjb250YWluZXIgdG8gdGhlIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgdG9wOiBmb3JtQ29udGFpbmVyLm9mZnNldFRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIFJldHJpZXZlIGZvcm0gdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHNlbGVjdElucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZ2V0U2VsZWN0ZWRQcmlvcml0eSgpO1xuXG4gICAgICAgICAgICBjYWxsYmFjayhjYXRlZ29yeSwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSk7XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXInKTtcbiAgICAgICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZVN1Ym1pdCk7XG5cbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHByaW9yaXR5IGNpcmNsZVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcmlvcml0eUNpcmNsZShjb2xvcikge1xuICAgICAgICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNpcmNsZScpO1xuICAgICAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoY29sb3IpO1xuICAgICAgICAgICAgY2lyY2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyYXlDaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICBibHVlQ2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgcmVkQ2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjaXJjbGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzZWxlY3RlZCBwcmlvcml0eVxuICAgICAgICBmdW5jdGlvbiBnZXRTZWxlY3RlZFByaW9yaXR5KCkge1xuICAgICAgICAgICAgaWYgKGdyYXlDaXJjbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdncmF5JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYmx1ZUNpcmNsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JsdWUnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWRDaXJjbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdyZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgXG59XG4iLCJcblxuY2xhc3MgUHJvamVjdEdlbiB7XG4gICAgY29uc3RydWN0b3IoY2F0ZWdvcnksIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGluZm8oKSB7XG4gICAgICAgIHJldHVybiBgQ2F0ZWdvcnk6ICR7dGhpcy5jYXRlZ29yeX0sIFRpdGxlOiAke3RoaXMudGl0bGV9LCBEYXRlOiAke3RoaXMuZHVlRGF0ZX0gRGVzY3JpcHRpb246ICR7dGhpcy5kZXNjcmlwdGlvbn0sIFByaW9yaXR5OiAke3RoaXMucHJpb3JpdHl9YDtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFByb2plY3RHZW4gfTtcbiIsImltcG9ydCB7IGNvbnRlbnREb20gfSBmcm9tICcuL0RPTXBvc3Rlcic7XG5cbi8vIHN0b3JhZ2UuanNcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3N0cycsIEpTT04uc3RyaW5naWZ5KGNvbnRlbnREb20ucG9zdHMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgICBjb25zdCBzYXZlZFBvc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zdHMnKSk7XG4gICAgaWYgKHNhdmVkUG9zdHMpIHtcbiAgICAgICAgY29udGVudERvbS5wb3N0cy5Ub2RheSA9IHNhdmVkUG9zdHMuVG9kYXkgfHwgW107XG4gICAgICAgIGNvbnRlbnREb20ucG9zdHMuUHJvamVjdHMgPSBzYXZlZFBvc3RzLlByb2plY3RzIHx8IFtdO1xuICAgICAgICBjb250ZW50RG9tLnBvc3RzLlBlcnNvbmFsID0gc2F2ZWRQb3N0cy5QZXJzb25hbCB8fCBbXTtcbiAgICAgICAgY29udGVudERvbS5wb3N0cy5Xb3JrID0gc2F2ZWRQb3N0cy5Xb3JrIHx8IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UocHJvamVjdCkge1xuICAgIGNvbnN0IHNhdmVkUG9zdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb3N0cycpKSB8fCB7fTtcbiAgICBjb25zdCB1cGRhdGVkUG9zdHMgPSB7XG4gICAgICAgIFRvZGF5OiByZW1vdmVQcm9qZWN0RnJvbUFycmF5KHNhdmVkUG9zdHMuVG9kYXksIHByb2plY3QpLFxuICAgICAgICBQcm9qZWN0czogcmVtb3ZlUHJvamVjdEZyb21BcnJheShzYXZlZFBvc3RzLlByb2plY3RzLCBwcm9qZWN0KSxcbiAgICAgICAgUGVyc29uYWw6IHJlbW92ZVByb2plY3RGcm9tQXJyYXkoc2F2ZWRQb3N0cy5QZXJzb25hbCwgcHJvamVjdCksXG4gICAgICAgIFdvcms6IHJlbW92ZVByb2plY3RGcm9tQXJyYXkoc2F2ZWRQb3N0cy5Xb3JrLCBwcm9qZWN0KSxcbiAgICB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3N0cycsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQb3N0cykpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbUFycmF5KGFycmF5LCBwcm9qZWN0KSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigocCkgPT4gcCAhPT0gcHJvamVjdCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgUHJvamVjdEdlbiB9IGZyb20gJy4vcHJvamVjdGdlbmVyYXRvcidcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHsgY29udGVudERvbSB9IGZyb20gJy4vRE9NcG9zdGVyJztcbmltcG9ydCB7IGRvbUNoZWNrZXIgfSBmcm9tICcuL2RvbVN3aXRjaGVyJztcbmltcG9ydCB7IHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlLCBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsIHJlbW92ZUZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5cbmNvbnNvbGUubG9nKCdSYWRpIHJhZGknKVxuXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IGhlYWRlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWljb24nKTtcbmNvbnN0IGhlYWRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW5hbWUnKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbnMnKTtcbmNvbnN0IHRvZGF5SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheS1pY29uJyk7XG5jb25zdCBwcm9qZWN0c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtaWNvbicpO1xuY29uc3QgcGVyc29uYWxJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbmFsLWljb24nKTtcbmNvbnN0IHdvcmtJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmstaWNvbicpO1xuY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3MnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwnKTtcbmNvbnN0IHdvcmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yaycpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG5cblxuXG4vLyBDcmVhdGUgYSBuZXcgZGl2IGVsZW1lbnRcbmNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGlvbicpO1xuc2VsZWN0aW9uLnRleHRDb250ZW50ID0gJ1RvZGF5Oic7XG5cbi8vIEFwcGVuZCB0aGUgc2VsZWN0aW9uIGRpdiB0byB0aGUgY29udGVudCBlbGVtZW50XG5jb250ZW50LmFwcGVuZENoaWxkKHNlbGVjdGlvbik7XG5cblxuY29uc3QgY2xpY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNsaWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3QnKVxuY2xpY2tCdXR0b24udGV4dENvbnRlbnQgPSAnQ2xpY2snO1xuXG4vLyBBcHBlbmQgdGhlIGJ1dHRvbiB0byB0aGUgY29udGVudCBlbGVtZW50XG5jb250ZW50LmFwcGVuZENoaWxkKGNsaWNrQnV0dG9uKTtcblxuXG5jbGlja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVGb3JtKChjYXRlZ29yeSwgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3RHZW4oY2F0ZWdvcnksIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbU1hbmlwdWxhdG9yKHByb2plY3QpXG4gICAgICAgIGRvbUNoZWNrZXIuY2hlY2tlcihzZWxlY3Rpb24udGV4dENvbnRlbnQpXG4gICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pO1xufSk7XG5kb21DaGVja2VyLmNoYW5nZU9mU2VsZWN0aW9uKCk7XG5cblxuY29uc29sZS5sb2coc2VsZWN0aW9uLnRleHRDb250ZW50KVxuXG5cblxuXG4vLyAvLyBFeGFtcGxlIHVzYWdlOlxuY29uc3QgbmV3UHJvamVjdCA9IHtcbiAgICBjYXRlZ29yeTogJ1Byb2plY3RzJyxcbiAgICB0aXRsZTogJ05ldyBQcm9qZWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIHRoZSBuZXcgcHJvamVjdCcsXG4gICAgcHJpb3JpdHk6ICdibHVlJyxcbiAgICBkdWVEYXRlOiAnMjAyMy0wNS0zMScsXG59O1xuXG5jb250ZW50RG9tLnBvc3RzLmRvbU1hbmlwdWxhdG9yKG5ld1Byb2plY3QpXG5cblxuXG4vLyBSZXRyaWV2ZSB0aGUgc2F2ZWQgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCB1cGRhdGUgY29udGVudERvbS5wb3N0cyB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgZG9tQ2hlY2tlci5jaGVja2VyKHNlbGVjdGlvbi50ZXh0Q29udGVudCk7XG59KTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=