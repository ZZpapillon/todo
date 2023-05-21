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
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! icons/purple.jpg */ "./src/icons/purple.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23000000%27 d=%27M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z%27/%3E%3C/svg%3E */ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%278%27 height=%278%27 viewBox=%270 0 8 8%27%3E%3Cpath fill=%27%23000000%27 d=%27M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z%27/%3E%3C/svg%3E"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'MyFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n    background: radial-gradient(#a23982, #1f1013);\n        \n    }\n        \n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar content\"\n        \"footer footer\";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 6fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    /* Resizes the background image to cover the entire header */\n    background-position: center;\n    /* Centers the background image within the header */\n    opacity: 0.8;\n    padding: 20px;\n    /* color: var(--light-blue); */\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n}\n\n.header-icon img {\n    width: 90px;\n    height: 90px;\n}\n\n.header-name {\n    font-size: 90px;\n    font-weight: bolder;\n    white-space: nowrap;\n    text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;\n    /* Set the white shadow around the edges */\n}\n\n.sidebar {\n    grid-area: sidebar;\n    /* background: radial-gradient(#a23982, #1f1013); */\n    padding: 10px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    overflow-y: auto;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n}\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    gap: 15px;\n    width: 250px;\n    box-sizing: border-box;\n    padding-top: 30px;\n}\n\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 25px;\n    grid-template-columns: auto;\n    align-items: center;\n    place-items: end;\n}\n\n.icons img {\n    width: 45px;\n    height: 45px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 30px;\n    grid-template-columns: auto;\n    font-size: 25px;\n    justify-content: start;\n    place-items: start;\n    margin-top: 10px;\n}\n.work {\n    margin-top: -7px;\n}\n.highlighted {\n    color: #ffffff;\n    /* Set the text color to white */\n    font-weight: bold;\n\n    /* Adjust the font size to your preference */\n    background-color: purple;\n    /* Set the background color to light blue */\n    padding: 5px 10px;\n    margin-left: 20px;\n    /* Add some padding for spacing */\n    border-radius: 5px;\n    opacity: 0.9;\n    transform: scale(1.3);\n\n    /* Add rounded corners */\n}\n\n/* Add styles for the \"Today\" category icon */\n.highlighted-icons img {\n    transform: scale(1.4);\n    /* Set the height of the icon */\n    fill: #55a7ee;\n    /* Set the color of the icon to match the background */\n    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));\n    /* Add a drop shadow effect */\n}\n\n.selection {\n    font-size: 24px;\n        font-weight: bold;\n        color: white;\n        text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;\n        background-color: purple;\n        padding: 10px;\n        border-radius: 5px;\n        border: 2px solid black;\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n    \n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.newProject {\n    /* height: 20px;\n    width: 100px; */\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 400px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n\n.form {\n    display: grid;\n    gap: 20px;\n}\n\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type=\"text\"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type=\"submit\"] {\n    padding: 15px 25px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type=\"submit\"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto;\n}\n\n.form button[type=\"submit\"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n    border: 2px solid transparent;\n    margin-top: 10px;\n}\n\n.priority-circle.selected {\n    display: inline-block;\n    border: 5px solid lightblue;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\n.priority-circle.gray {\n    background-color: gray;\n}\n\n.priority-circle.blue {\n    background-color: blue;\n}\n\n.priority-circle.red {\n    background-color: red;\n}\n\n\n\n.newPost:hover {\n    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n    box-shadow: 10px 10px rgba(93, 93, 93, 0.25);\n}\n\n.newPost .title {\n    font-weight: bold;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-auto-rows: 100px;\n    grid-template-areas:\n        \"selection newpost newproject\";\n    justify-items: center;\n    align-items: start;\n    gap: 30px;\n}\n\n.selection {\n    grid-area: selection;\n}\n\n.newProject {\n    grid-area: newproject;\n}\n\n.newPost:nth-child(1) {\n    grid-area: newpost;\n   \n}\n.newPost {\n    grid-column: newpost;\n}\n\n\n\n.checkbox-input {\n    height: 20px;\n    width: 20px;\n}\n\n.newPost {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n    grid-template-areas:\n        \"priority title delete\"\n        \"checkbox description category\"\n        \". dueDate .\";\n    grid-gap: 10px;\n    padding: 10px;\n    height: 70px;\n    width: 760px;\n    border-radius: 25px;\n    border: 2px solid white;\n    background-color: rgba(27, 27, 27, 0.5);\n    overflow: hidden;\n    \n}\n.dueDate {\n    grid-area: dueDate;\n    color: #0056b3;\n    font-size: 15px;\n    font-weight: bolder;\n    margin-bottom: 10px;\n}\n.deleteButton {\n    grid-area: delete;\n    height: 20px;\n}\n\n.titlePart {\n    grid-area: title;\n    color: white;\n}\n\n.checkbox-input {\n    grid-area: checkbox;\n}\n\n.priorityPart {\n    grid-area: priority;\n    height: 10px;\n}\n\n.categoryPart {\n    grid-area: category;\n    justify-self: end;\n    place-self: end;\n    padding: 0.5em 2em 0.5em 2.5em;\n        font-size: 0.5em;\n        font-weight: bold;\n        border-radius: 15px;\n        color: #fff6fb;\n        letter-spacing: 0.3em;\n        text-shadow: -2px 2px 5px #FD3084;\n        background-color: transparent;\n        border: 2px solid #FEB1DE;\n        box-shadow: 0 0 0px 1px #F11271,\n            0 0 10px 2px #FD3084,\n            inset 0 0 0px 1px #F11271,\n            inset 0 0 10px 2px #FD3084;\n        transition: 100ms;\n    }\n    \n    .categoryPart:hover {\n        box-shadow: 0 0 0px 1px #F11271,\n            0 0 10px 2px #FD3084,\n            inset 0 0 0px 1px #F11271,\n            inset 0 0 30px 2px #FD3084;\n        text-shadow: 0 0 10px #FD3084;\n        transform: translateY(-5px);\n    }\n    \n      \n.descriptionPart {\n    grid-area: description;\n}\n\n.content {\n    background: #3a3a3a;\n        /* fallback for old browsers */\n        /* background: -webkit-linear-gradient(to right, #89fffd, #ef32d9); */\n        /* Chrome 10-25, Safari 5.1-6 */\n        /* background: linear-gradient(to right, #89fffd, #ef32d9); */\n        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  \n}\n\n.newProject {\n    display: flex;\n    color: white;\n    font-size: 20px;\n    justify-content: center;\n    align-items: center;\n    width: 10rem;\n    height: 3rem;\n    background-size: 300% 300%;\n    backdrop-filter: blur(1rem);\n    border-radius: 5rem;\n    transition: 0.5s;\n    animation: gradient_301 5s ease infinite;\n    border: double 4px transparent;\n    background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #FE53BB 45%, #8F51EA 67%, #0044ff 87%);\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n}\n\n#container-stars {\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    transition: 0.5s;\n    backdrop-filter: blur(1rem);\n    border-radius: 5rem;\n}\n\nstrong {\n    z-index: 2;\n    font-family: 'Avalors Personal Use';\n    font-size: 12px;\n    letter-spacing: 5px;\n    color: #FFFFFF;\n    text-shadow: 0 0 4px white;\n}\n\n#glow {\n    position: absolute;\n    display: flex;\n    width: 12rem;\n}\n\n.circle {\n    width: 100%;\n    height: 30px;\n    filter: blur(2rem);\n    animation: pulse_3011 4s infinite;\n    z-index: -1;\n}\n\n.circle:nth-of-type(1) {\n    background: rgba(254, 83, 186, 0.636);\n}\n\n.circle:nth-of-type(2) {\n    background: rgba(142, 81, 234, 0.704);\n}\n\n.btn:hover #container-stars {\n    z-index: 1;\n    background-color: #212121;\n}\n\n.btn:hover {\n    transform: scale(1.1)\n}\n\n.btn:active {\n    border: double 4px #FE53BB;\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n    animation: none;\n}\n\n.btn:active .circle {\n    background: #FE53BB;\n}\n\n#stars {\n    position: relative;\n    background: transparent;\n    width: 200rem;\n    height: 200rem;\n}\n\n#stars::after {\n    content: \"\";\n    position: absolute;\n    top: -10rem;\n    left: -100rem;\n    width: 100%;\n    height: 100%;\n    animation: animStarRotate 90s linear infinite;\n}\n\n#stars::after {\n    background-image: radial-gradient(#ffffff 1px, transparent 1%);\n    background-size: 50px 50px;\n}\n\n#stars::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: -50%;\n    width: 170%;\n    height: 500%;\n    animation: animStar 60s linear infinite;\n}\n\n#stars::before {\n    background-image: radial-gradient(#ffffff 1px, transparent 1%);\n    background-size: 50px 50px;\n    opacity: 0.5;\n}\n\n@keyframes animStar {\n    from {\n        transform: translateY(0);\n    }\n\n    to {\n        transform: translateY(-135rem);\n    }\n}\n\n@keyframes animStarRotate {\n    from {\n        transform: rotate(360deg);\n    }\n\n    to {\n        transform: rotate(0);\n    }\n}\n\n@keyframes gradient_301 {\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n@keyframes pulse_3011 {\n    0% {\n        transform: scale(0.75);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n    }\n\n    70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n    }\n\n    100% {\n        transform: scale(0.75);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./icons/BioRhyme-Bold.ttf') format('truetype'),\n        url('/src/icons/BioRhyme-ExtraBold.ttf') format('ttf');\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    /* Replace with your desired background color */\n    font-family: Arial, Helvetica, sans-serif;\n    background: radial-gradient(#a23982, #1f1013);\n        \n    }\n        \n\n:root {\n    --light-blue: #ADD8E6;\n    --light-gray: #D3D3D3;\n}\n\n.container {\n    display: grid;\n    grid-template-areas:\n        \"header header\"\n        \"sidebar content\"\n        \"footer footer\";\n    grid-template-rows: 1fr 11fr 1fr;\n    grid-template-columns: 1fr 6fr;\n    height: 100vh;\n}\n\n.header {\n    grid-area: header;\n    background-image: url(icons/purple.jpg);\n    background-size: cover;\n    /* Resizes the background image to cover the entire header */\n    background-position: center;\n    /* Centers the background image within the header */\n    opacity: 0.8;\n    padding: 20px;\n    /* color: var(--light-blue); */\n    display: grid;\n    grid-template-columns: 1fr 1fr 10fr;\n}\n\n.header-icon img {\n    width: 90px;\n    height: 90px;\n}\n\n.header-name {\n    font-size: 90px;\n    font-weight: bolder;\n    white-space: nowrap;\n    text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff;\n    /* Set the white shadow around the edges */\n}\n\n.sidebar {\n    grid-area: sidebar;\n    /* background: radial-gradient(#a23982, #1f1013); */\n    padding: 10px;\n    color: #fff;\n}\n\n.content {\n    grid-area: content;\n    background-color: var(--light-gray);\n    padding: 20px;\n    overflow-y: auto;\n    border-top: 3px solid white;\n}\n\n.footer {\n    grid-area: footer;\n    background-color: white;\n    padding: 3px;\n    color: #333;\n    text-align: center;\n    font-size: 25px;\n    overflow: hidden;\n}\n\n.sidebar {\n    display: grid;\n    grid-template-columns: 1fr 8fr;\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    gap: 15px;\n    width: 250px;\n    box-sizing: border-box;\n    padding-top: 30px;\n}\n\n.icons {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 25px;\n    grid-template-columns: auto;\n    align-items: center;\n    place-items: end;\n}\n\n.icons img {\n    width: 45px;\n    height: 45px;\n}\n\n.todos {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr 1fr 10fr;\n    gap: 30px;\n    grid-template-columns: auto;\n    font-size: 25px;\n    justify-content: start;\n    place-items: start;\n    margin-top: 10px;\n}\n.work {\n    margin-top: -7px;\n}\n.highlighted {\n    color: #ffffff;\n    /* Set the text color to white */\n    font-weight: bold;\n\n    /* Adjust the font size to your preference */\n    background-color: purple;\n    /* Set the background color to light blue */\n    padding: 5px 10px;\n    margin-left: 20px;\n    /* Add some padding for spacing */\n    border-radius: 5px;\n    opacity: 0.9;\n    transform: scale(1.3);\n\n    /* Add rounded corners */\n}\n\n/* Add styles for the \"Today\" category icon */\n.highlighted-icons img {\n    transform: scale(1.4);\n    /* Set the height of the icon */\n    fill: #55a7ee;\n    /* Set the color of the icon to match the background */\n    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));\n    /* Add a drop shadow effect */\n}\n\n.selection {\n    font-size: 24px;\n        font-weight: bold;\n        color: white;\n        text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black;\n        background-color: purple;\n        padding: 10px;\n        border-radius: 5px;\n        border: 2px solid black;\n        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);\n    \n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.newProject {\n    /* height: 20px;\n    width: 100px; */\n    justify-self: end;\n}\n\n.blur>*:not(.form-container) {\n    filter: blur(5px);\n}\n\n/* CSS */\n/* CSS */\n/* CSS */\n/* CSS */\n/* Form container */\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    height: 400px;\n    background-color: #fff;\n    border: 4px solid lightblue;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n    padding: 30px;\n}\n\n.form {\n    display: grid;\n    gap: 20px;\n}\n\n.form label {\n    font-weight: bold;\n}\n\n.form select,\n.form input[type=\"text\"],\n.form textarea {\n    width: 100%;\n    padding: 10px;\n    border: 1px solid #C9D6DF;\n    border-radius: 5px;\n    background-color: #FFFFFF;\n    font-size: 14px;\n    color: #333333;\n}\n\n.form select {\n    appearance: none;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%23000000' d='M8 3L5 6V0zM0 3l3-3h2v6H3L0 3z'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 8px center;\n    padding-right: 30px;\n}\n\n.form textarea {\n    resize: vertical;\n}\n\n.form button[type=\"submit\"] {\n    padding: 15px 25px;\n    border: none;\n    border-radius: 5px;\n    background-color: #007BFF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: bold;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.form button[type=\"submit\"]:hover {\n    background-color: #0056b3;\n}\n\n.form button[type=\"submit\"]:focus {\n    outline: none;\n}\n\n/* Additional Styling */\n\n.form-container {\n    max-width: 400px;\n    margin: 0 auto;\n}\n\n.form label {\n    margin-bottom: 2px;\n}\n\n.form textarea {\n    min-height: 30px;\n    max-height: 50px;\n    overflow-y: auto;\n}\n\n.form button[type=\"submit\"] {\n    width: 50%;\n    margin-top: 30px;\n    margin-left: 200px;\n}\n\n.priority-circle {\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n    border: 2px solid transparent;\n    margin-top: 10px;\n}\n\n.priority-circle.selected {\n    display: inline-block;\n    border: 5px solid lightblue;\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\n.priority-circle.gray {\n    background-color: gray;\n}\n\n.priority-circle.blue {\n    background-color: blue;\n}\n\n.priority-circle.red {\n    background-color: red;\n}\n\n\n\n.newPost:hover {\n    border-radius: 0% 0% 50% 50% / 0% 0% 5% 5%;\n    box-shadow: 10px 10px rgba(93, 93, 93, 0.25);\n}\n\n.newPost .title {\n    font-weight: bold;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr 10fr 1fr;\n    grid-auto-rows: 100px;\n    grid-template-areas:\n        \"selection newpost newproject\";\n    justify-items: center;\n    align-items: start;\n    gap: 30px;\n}\n\n.selection {\n    grid-area: selection;\n}\n\n.newProject {\n    grid-area: newproject;\n}\n\n.newPost:nth-child(1) {\n    grid-area: newpost;\n   \n}\n.newPost {\n    grid-column: newpost;\n}\n\n\n\n.checkbox-input {\n    height: 20px;\n    width: 20px;\n}\n\n.newPost {\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    grid-template-rows: 1fr 5fr 1fr;\n    grid-template-areas:\n        \"priority title delete\"\n        \"checkbox description category\"\n        \". dueDate .\";\n    grid-gap: 10px;\n    padding: 10px;\n    height: 70px;\n    width: 760px;\n    border-radius: 25px;\n    border: 2px solid white;\n    background-color: rgba(27, 27, 27, 0.5);\n    overflow: hidden;\n    \n}\n.dueDate {\n    grid-area: dueDate;\n    color: #0056b3;\n    font-size: 15px;\n    font-weight: bolder;\n    margin-bottom: 10px;\n}\n.deleteButton {\n    grid-area: delete;\n    height: 20px;\n}\n\n.titlePart {\n    grid-area: title;\n    color: white;\n}\n\n.checkbox-input {\n    grid-area: checkbox;\n}\n\n.priorityPart {\n    grid-area: priority;\n    height: 10px;\n}\n\n.categoryPart {\n    grid-area: category;\n    justify-self: end;\n    place-self: end;\n    padding: 0.5em 2em 0.5em 2.5em;\n        font-size: 0.5em;\n        font-weight: bold;\n        border-radius: 15px;\n        color: #fff6fb;\n        letter-spacing: 0.3em;\n        text-shadow: -2px 2px 5px #FD3084;\n        background-color: transparent;\n        border: 2px solid #FEB1DE;\n        box-shadow: 0 0 0px 1px #F11271,\n            0 0 10px 2px #FD3084,\n            inset 0 0 0px 1px #F11271,\n            inset 0 0 10px 2px #FD3084;\n        transition: 100ms;\n    }\n    \n    .categoryPart:hover {\n        box-shadow: 0 0 0px 1px #F11271,\n            0 0 10px 2px #FD3084,\n            inset 0 0 0px 1px #F11271,\n            inset 0 0 30px 2px #FD3084;\n        text-shadow: 0 0 10px #FD3084;\n        transform: translateY(-5px);\n    }\n    \n      \n.descriptionPart {\n    grid-area: description;\n}\n\n.content {\n    background: #3a3a3a;\n        /* fallback for old browsers */\n        /* background: -webkit-linear-gradient(to right, #89fffd, #ef32d9); */\n        /* Chrome 10-25, Safari 5.1-6 */\n        /* background: linear-gradient(to right, #89fffd, #ef32d9); */\n        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  \n}\n\n.newProject {\n    display: flex;\n    color: white;\n    font-size: 20px;\n    justify-content: center;\n    align-items: center;\n    width: 10rem;\n    height: 3rem;\n    background-size: 300% 300%;\n    backdrop-filter: blur(1rem);\n    border-radius: 5rem;\n    transition: 0.5s;\n    animation: gradient_301 5s ease infinite;\n    border: double 4px transparent;\n    background-image: linear-gradient(#212121, #212121), linear-gradient(137.48deg, #ffdb3b 10%, #FE53BB 45%, #8F51EA 67%, #0044ff 87%);\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n}\n\n#container-stars {\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    transition: 0.5s;\n    backdrop-filter: blur(1rem);\n    border-radius: 5rem;\n}\n\nstrong {\n    z-index: 2;\n    font-family: 'Avalors Personal Use';\n    font-size: 12px;\n    letter-spacing: 5px;\n    color: #FFFFFF;\n    text-shadow: 0 0 4px white;\n}\n\n#glow {\n    position: absolute;\n    display: flex;\n    width: 12rem;\n}\n\n.circle {\n    width: 100%;\n    height: 30px;\n    filter: blur(2rem);\n    animation: pulse_3011 4s infinite;\n    z-index: -1;\n}\n\n.circle:nth-of-type(1) {\n    background: rgba(254, 83, 186, 0.636);\n}\n\n.circle:nth-of-type(2) {\n    background: rgba(142, 81, 234, 0.704);\n}\n\n.btn:hover #container-stars {\n    z-index: 1;\n    background-color: #212121;\n}\n\n.btn:hover {\n    transform: scale(1.1)\n}\n\n.btn:active {\n    border: double 4px #FE53BB;\n    background-origin: border-box;\n    background-clip: content-box, border-box;\n    animation: none;\n}\n\n.btn:active .circle {\n    background: #FE53BB;\n}\n\n#stars {\n    position: relative;\n    background: transparent;\n    width: 200rem;\n    height: 200rem;\n}\n\n#stars::after {\n    content: \"\";\n    position: absolute;\n    top: -10rem;\n    left: -100rem;\n    width: 100%;\n    height: 100%;\n    animation: animStarRotate 90s linear infinite;\n}\n\n#stars::after {\n    background-image: radial-gradient(#ffffff 1px, transparent 1%);\n    background-size: 50px 50px;\n}\n\n#stars::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: -50%;\n    width: 170%;\n    height: 500%;\n    animation: animStar 60s linear infinite;\n}\n\n#stars::before {\n    background-image: radial-gradient(#ffffff 1px, transparent 1%);\n    background-size: 50px 50px;\n    opacity: 0.5;\n}\n\n@keyframes animStar {\n    from {\n        transform: translateY(0);\n    }\n\n    to {\n        transform: translateY(-135rem);\n    }\n}\n\n@keyframes animStarRotate {\n    from {\n        transform: rotate(360deg);\n    }\n\n    to {\n        transform: rotate(0);\n    }\n}\n\n@keyframes gradient_301 {\n    0% {\n        background-position: 0% 50%;\n    }\n\n    50% {\n        background-position: 100% 50%;\n    }\n\n    100% {\n        background-position: 0% 50%;\n    }\n}\n\n@keyframes pulse_3011 {\n    0% {\n        transform: scale(0.75);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n    }\n\n    70% {\n        transform: scale(1);\n        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n    }\n\n    100% {\n        transform: scale(0.75);\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/icons/purple.jpg":
/*!******************************!*\
  !*** ./src/icons/purple.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9cc661ff9468b3c49a0.jpg";

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
clickButton.classList.add('newProject');
clickButton.textContent = 'New Todo';




// Create container-stars div
const containerStars = document.createElement('div');
containerStars.id = 'container-stars';

// Create stars div
const stars = document.createElement('div');
stars.id = 'stars';

// Append stars div to container-stars div
containerStars.appendChild(stars);

// Create glow div
const glow = document.createElement('div');
glow.id = 'glow';

// Create circle divs
const circle1 = document.createElement('div');
circle1.classList.add('circle');
const circle2 = document.createElement('div');
circle2.classList.add('circle');

// Append circle divs to glow div
glow.appendChild(circle1);
glow.appendChild(circle2);

// Append container-stars and glow to clickButton
clickButton.appendChild(containerStars);
clickButton.appendChild(glow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxPQUFPLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsUUFBUSxPQUFPLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4REFBc0I7QUFDOUMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRk07QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixjQUFjLFdBQVcsV0FBVyxVQUFVLGNBQWMsZUFBZSxpQkFBaUIsY0FBYyxjQUFjO0FBQ3BKO0FBQ0E7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbUI7O0FBRXpDOztBQUVPO0FBQ1AsaURBQWlELHdEQUFnQjtBQUNqRTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQTZCO0FBQ3JDLFFBQVEsd0VBQWdDO0FBQ3hDLFFBQVEsd0VBQWdDO0FBQ3hDLFFBQVEsb0VBQTRCOztBQUVwQzs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1RUFBK0I7QUFDM0M7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjtBQUNYO0FBQ0s7QUFDRTtBQUNpRTs7O0FBRzVHOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQSxJQUFJLGlEQUFVO0FBQ2QsNEJBQTRCLHlEQUFVO0FBQ3RDLFFBQVEsdUVBQStCO0FBQ3ZDLFFBQVEsNERBQWtCO0FBQzFCLFFBQVEscUVBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRCxzRUFBNEI7OztBQUc1Qjs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0EsSUFBSSxxRUFBMkI7QUFDL0I7QUFDQSxJQUFJLDREQUFrQjtBQUN0QixDQUFDOztBQUVELHVFQUErQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9ET01wb3N0ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21Td2l0Y2hlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0Z2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaWNvbnMvQmlvUmh5bWUtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2ljb25zL0Jpb1JoeW1lLUV4dHJhQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJpY29ucy9wdXJwbGUuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjc4JTI3IGhlaWdodD0lMjc4JTI3IHZpZXdCb3g9JTI3MCAwIDggOCUyNyUzRSUzQ3BhdGggZmlsbD0lMjclMjMwMDAwMDAlMjcgZD0lMjdNOCAzTDUgNlYwek0wIDNsMy0zaDJ2NkgzTDAgM3olMjcvJTNFJTNDL3N2ZyUzRVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGRlc2lyZWQgYmFja2dyb3VuZCBjb2xvciAqL1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNhMjM5ODIsICMxZjEwMTMpO1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgICAgIFxcblxcbjpyb290IHtcXG4gICAgLS1saWdodC1ibHVlOiAjQUREOEU2O1xcbiAgICAtLWxpZ2h0LWdyYXk6ICNEM0QzRDM7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBjb250ZW50XFxcIlxcbiAgICAgICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC8qIFJlc2l6ZXMgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBoZWFkZXIgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHdpdGhpbiB0aGUgaGVhZGVyICovXFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgLyogY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTBmcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIGltZyB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggLTJweCAwICNmZmYsIDJweCAtMnB4IDAgI2ZmZiwgLTJweCAycHggMCAjZmZmLCAycHggMnB4IDAgI2ZmZjtcXG4gICAgLyogU2V0IHRoZSB3aGl0ZSBzaGFkb3cgYXJvdW5kIHRoZSBlZGdlcyAqL1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgLyogYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNhMjM5ODIsICMxZjEwMTMpOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxMGZyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGVuZDtcXG59XFxuXFxuLmljb25zIGltZyB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDEwZnI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLndvcmsge1xcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xcbn1cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgLyogU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIHdoaXRlICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICAvKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbGlnaHQgYmx1ZSAqL1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIC8qIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG5cXG4gICAgLyogQWRkIHJvdW5kZWQgY29ybmVycyAqL1xcbn1cXG5cXG4vKiBBZGQgc3R5bGVzIGZvciB0aGUgXFxcIlRvZGF5XFxcIiBjYXRlZ29yeSBpY29uICovXFxuLmhpZ2hsaWdodGVkLWljb25zIGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24gKi9cXG4gICAgZmlsbDogIzU1YTdlZTtcXG4gICAgLyogU2V0IHRoZSBjb2xvciBvZiB0aGUgaWNvbiB0byBtYXRjaCB0aGUgYmFja2dyb3VuZCAqL1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICAgIC8qIEFkZCBhIGRyb3Agc2hhZG93IGVmZmVjdCAqL1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgYmxhY2ssIDFweCAtMXB4IDAgYmxhY2ssIC0xcHggMXB4IDAgYmxhY2ssIDFweCAxcHggMCBibGFjaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIFxcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICAvKiBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDBweDsgKi9cXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5ibHVyPio6bm90KC5mb3JtLWNvbnRhaW5lcikge1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogRm9ybSBjb250YWluZXIgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm0gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0gc2VsZWN0LFxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzlENkRGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5mb3JtIHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDhweCBjZW50ZXI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0JGRjtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi8qIEFkZGl0aW9uYWwgU3R5bGluZyAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZm9ybSBsYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuLmZvcm0gdGV4dGFyZWEge1xcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA1MHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLnNlbGVjdGVkIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBsaWdodGJsdWU7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuZ3JheSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUuYmx1ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxufVxcblxcbi5wcmlvcml0eS1jaXJjbGUucmVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5cXG5cXG4ubmV3UG9zdDpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlIDAlIDUwJSA1MCUgLyAwJSAwJSA1JSA1JTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IHJnYmEoOTMsIDkzLCA5MywgMC4yNSk7XFxufVxcblxcbi5uZXdQb3N0IC50aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwZnIgMWZyO1xcbiAgICBncmlkLWF1dG8tcm93czogMTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwic2VsZWN0aW9uIG5ld3Bvc3QgbmV3cHJvamVjdFxcXCI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5zZWxlY3Rpb24ge1xcbiAgICBncmlkLWFyZWE6IHNlbGVjdGlvbjtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBncmlkLWFyZWE6IG5ld3Byb2plY3Q7XFxufVxcblxcbi5uZXdQb3N0Om50aC1jaGlsZCgxKSB7XFxuICAgIGdyaWQtYXJlYTogbmV3cG9zdDtcXG4gICBcXG59XFxuLm5ld1Bvc3Qge1xcbiAgICBncmlkLWNvbHVtbjogbmV3cG9zdDtcXG59XFxuXFxuXFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLm5ld1Bvc3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInByaW9yaXR5IHRpdGxlIGRlbGV0ZVxcXCJcXG4gICAgICAgIFxcXCJjaGVja2JveCBkZXNjcmlwdGlvbiBjYXRlZ29yeVxcXCJcXG4gICAgICAgIFxcXCIuIGR1ZURhdGUgLlxcXCI7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA3NjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDI3LCAyNywgMC41KTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgXFxufVxcbi5kdWVEYXRlIHtcXG4gICAgZ3JpZC1hcmVhOiBkdWVEYXRlO1xcbiAgICBjb2xvcjogIzAwNTZiMztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZGVsZXRlQnV0dG9uIHtcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICAgIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnRpdGxlUGFydCB7XFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrYm94LWlucHV0IHtcXG4gICAgZ3JpZC1hcmVhOiBjaGVja2JveDtcXG59XFxuXFxuLnByaW9yaXR5UGFydCB7XFxuICAgIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICAgIGhlaWdodDogMTBweDtcXG59XFxuXFxuLmNhdGVnb3J5UGFydCB7XFxuICAgIGdyaWQtYXJlYTogY2F0ZWdvcnk7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBwbGFjZS1zZWxmOiBlbmQ7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDJlbSAwLjVlbSAyLjVlbTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgICAgICBjb2xvcjogI2ZmZjZmYjtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjNlbTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAtMnB4IDJweCA1cHggI0ZEMzA4NDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0ZFQjFERTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMXB4ICNGMTEyNzEsXFxuICAgICAgICAgICAgMCAwIDEwcHggMnB4ICNGRDMwODQsXFxuICAgICAgICAgICAgaW5zZXQgMCAwIDBweCAxcHggI0YxMTI3MSxcXG4gICAgICAgICAgICBpbnNldCAwIDAgMTBweCAycHggI0ZEMzA4NDtcXG4gICAgICAgIHRyYW5zaXRpb246IDEwMG1zO1xcbiAgICB9XFxuICAgIFxcbiAgICAuY2F0ZWdvcnlQYXJ0OmhvdmVyIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwcHggMXB4ICNGMTEyNzEsXFxuICAgICAgICAgICAgMCAwIDEwcHggMnB4ICNGRDMwODQsXFxuICAgICAgICAgICAgaW5zZXQgMCAwIDBweCAxcHggI0YxMTI3MSxcXG4gICAgICAgICAgICBpbnNldCAwIDAgMzBweCAycHggI0ZEMzA4NDtcXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjRkQzMDg0O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgICB9XFxuICAgIFxcbiAgICAgIFxcbi5kZXNjcmlwdGlvblBhcnQge1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6ICMzYTNhM2E7XFxuICAgICAgICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXFxuICAgICAgICAvKiBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzg5ZmZmZCwgI2VmMzJkOSk7ICovXFxuICAgICAgICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xcbiAgICAgICAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjODlmZmZkLCAjZWYzMmQ5KTsgKi9cXG4gICAgICAgIC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cXG4gIFxcbn1cXG5cXG4ubmV3UHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJSAzMDAlO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMXJlbSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGFuaW1hdGlvbjogZ3JhZGllbnRfMzAxIDVzIGVhc2UgaW5maW5pdGU7XFxuICAgIGJvcmRlcjogZG91YmxlIDRweCB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMyMTIxMjEsICMyMTIxMjEpLCBsaW5lYXItZ3JhZGllbnQoMTM3LjQ4ZGVnLCAjZmZkYjNiIDEwJSwgI0ZFNTNCQiA0NSUsICM4RjUxRUEgNjclLCAjMDA0NGZmIDg3JSk7XFxuICAgIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94LCBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGFpbmVyLXN0YXJzIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG5zdHJvbmcge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBmb250LWZhbWlseTogJ0F2YWxvcnMgUGVyc29uYWwgVXNlJztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA0cHggd2hpdGU7XFxufVxcblxcbiNnbG93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTJyZW07XFxufVxcblxcbi5jaXJjbGUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmaWx0ZXI6IGJsdXIoMnJlbSk7XFxuICAgIGFuaW1hdGlvbjogcHVsc2VfMzAxMSA0cyBpbmZpbml0ZTtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi5jaXJjbGU6bnRoLW9mLXR5cGUoMSkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NCwgODMsIDE4NiwgMC42MzYpO1xcbn1cXG5cXG4uY2lyY2xlOm50aC1vZi10eXBlKDIpIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDIsIDgxLCAyMzQsIDAuNzA0KTtcXG59XFxuXFxuLmJ0bjpob3ZlciAjY29udGFpbmVyLXN0YXJzIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcXG59XFxuXFxuLmJ0bjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxcbn1cXG5cXG4uYnRuOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogZG91YmxlIDRweCAjRkU1M0JCO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveCwgYm9yZGVyLWJveDtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG5cXG4uYnRuOmFjdGl2ZSAuY2lyY2xlIHtcXG4gICAgYmFja2dyb3VuZDogI0ZFNTNCQjtcXG59XFxuXFxuI3N0YXJzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDIwMHJlbTtcXG4gICAgaGVpZ2h0OiAyMDByZW07XFxufVxcblxcbiNzdGFyczo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0xMHJlbTtcXG4gICAgbGVmdDogLTEwMHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uOiBhbmltU3RhclJvdGF0ZSA5MHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4jc3RhcnM6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCNmZmZmZmYgMXB4LCB0cmFuc3BhcmVudCAxJSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xcbn1cXG5cXG4jc3RhcnM6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTUwJTtcXG4gICAgd2lkdGg6IDE3MCU7XFxuICAgIGhlaWdodDogNTAwJTtcXG4gICAgYW5pbWF0aW9uOiBhbmltU3RhciA2MHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4jc3RhcnM6OmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjZmZmZmZmIDFweCwgdHJhbnNwYXJlbnQgMSUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcXG4gICAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1TdGFyIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIH1cXG5cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMzVyZW0pO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbVN0YXJSb3RhdGUge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG5cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudF8zMDEge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuICAgIH1cXG5cXG4gICAgNTAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2VfMzAxMSB7XFxuICAgIDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gICAgfVxcblxcbiAgICA3MCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQjs2REFDMEQ7QUFDOUQ7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLCtDQUErQztJQUMvQyx5Q0FBeUM7SUFDekMsNkNBQTZDOztJQUU3Qzs7O0FBR0o7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiOzs7dUJBR21CO0lBQ25CLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlC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QUNJO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLG9DQUFvQztJQUN4QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ljb25zL0Jpb1JoeW1lLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLFxcbiAgICAgICAgdXJsKCcvc3JjL2ljb25zL0Jpb1JoeW1lLUV4dHJhQm9sZC50dGYnKSBmb3JtYXQoJ3R0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICAvKiBSZXBsYWNlIHdpdGggeW91ciBkZXNpcmVkIGJhY2tncm91bmQgY29sb3IgKi9cXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgjYTIzOTgyLCAjMWYxMDEzKTtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgICAgICBcXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtYmx1ZTogI0FERDhFNjtcXG4gICAgLS1saWdodC1ncmF5OiAjRDNEM0QzO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcInNpZGViYXIgY29udGVudFxcXCJcXG4gICAgICAgIFxcXCJmb290ZXIgZm9vdGVyXFxcIjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDZmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaWNvbnMvcHVycGxlLmpwZyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIC8qIFJlc2l6ZXMgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBoZWFkZXIgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAvKiBDZW50ZXJzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHdpdGhpbiB0aGUgaGVhZGVyICovXFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgLyogY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpOyAqL1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMTBmcjtcXG59XFxuXFxuLmhlYWRlci1pY29uIGltZyB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDkwcHg7XFxufVxcblxcbi5oZWFkZXItbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogOTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggLTJweCAwICNmZmYsIDJweCAtMnB4IDAgI2ZmZiwgLTJweCAycHggMCAjZmZmLCAycHggMnB4IDAgI2ZmZjtcXG4gICAgLyogU2V0IHRoZSB3aGl0ZSBzaGFkb3cgYXJvdW5kIHRoZSBlZGdlcyAqL1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgLyogYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNhMjM5ODIsICMxZjEwMTMpOyAqL1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDhmcjtcXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4uaWNvbnMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxMGZyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGxhY2UtaXRlbXM6IGVuZDtcXG59XFxuXFxuLmljb25zIGltZyB7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi50b2RvcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDEwZnI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLndvcmsge1xcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xcbn1cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgLyogU2V0IHRoZSB0ZXh0IGNvbG9yIHRvIHdoaXRlICovXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAvKiBBZGp1c3QgdGhlIGZvbnQgc2l6ZSB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICAvKiBTZXQgdGhlIGJhY2tncm91bmQgY29sb3IgdG8gbGlnaHQgYmx1ZSAqL1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICAgIC8qIEFkZCBzb21lIHBhZGRpbmcgZm9yIHNwYWNpbmcgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvcGFjaXR5OiAwLjk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG5cXG4gICAgLyogQWRkIHJvdW5kZWQgY29ybmVycyAqL1xcbn1cXG5cXG4vKiBBZGQgc3R5bGVzIGZvciB0aGUgXFxcIlRvZGF5XFxcIiBjYXRlZ29yeSBpY29uICovXFxuLmhpZ2hsaWdodGVkLWljb25zIGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgLyogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24gKi9cXG4gICAgZmlsbDogIzU1YTdlZTtcXG4gICAgLyogU2V0IHRoZSBjb2xvciBvZiB0aGUgaWNvbiB0byBtYXRjaCB0aGUgYmFja2dyb3VuZCAqL1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDJweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICAgIC8qIEFkZCBhIGRyb3Agc2hhZG93IGVmZmVjdCAqL1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgYmxhY2ssIDFweCAtMXB4IDAgYmxhY2ssIC0xcHggMXB4IDAgYmxhY2ssIDFweCAxcHggMCBibGFjaztcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIFxcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICAvKiBoZWlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDBweDsgKi9cXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbi5ibHVyPio6bm90KC5mb3JtLWNvbnRhaW5lcikge1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogQ1NTICovXFxuLyogRm9ybSBjb250YWluZXIgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIGxpZ2h0Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm0gbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0gc2VsZWN0LFxcbi5mb3JtIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzlENkRGO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICMzMzMzMzM7XFxufVxcblxcbi5mb3JtIHNlbGVjdCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzgnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBmaWxsPSclMjMwMDAwMDAnIGQ9J004IDNMNSA2VjB6TTAgM2wzLTNoMnY2SDNMMCAzeicvJTNFJTNDL3N2ZyUzRVxcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA4cHggY2VudGVyO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi5mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkY7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG4uZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4vKiBBZGRpdGlvbmFsIFN0eWxpbmcgKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmZvcm0gbGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbi5mb3JtIHRleHRhcmVhIHtcXG4gICAgbWluLWhlaWdodDogMzBweDtcXG4gICAgbWF4LWhlaWdodDogNTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLmZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLnByaW9yaXR5LWNpcmNsZS5zZWxlY3RlZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm9yZGVyOiA1cHggc29saWQgbGlnaHRibHVlO1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLmdyYXkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLmJsdWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucHJpb3JpdHktY2lyY2xlLnJlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuXFxuLm5ld1Bvc3Q6aG92ZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwJSAwJSA1MCUgNTAlIC8gMCUgMCUgNSUgNSU7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCByZ2JhKDkzLCA5MywgOTMsIDAuMjUpO1xcbn1cXG5cXG4ubmV3UG9zdCAudGl0bGUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMGZyIDFmcjtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcInNlbGVjdGlvbiBuZXdwb3N0IG5ld3Byb2plY3RcXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4uc2VsZWN0aW9uIHtcXG4gICAgZ3JpZC1hcmVhOiBzZWxlY3Rpb247XFxufVxcblxcbi5uZXdQcm9qZWN0IHtcXG4gICAgZ3JpZC1hcmVhOiBuZXdwcm9qZWN0O1xcbn1cXG5cXG4ubmV3UG9zdDpudGgtY2hpbGQoMSkge1xcbiAgICBncmlkLWFyZWE6IG5ld3Bvc3Q7XFxuICAgXFxufVxcbi5uZXdQb3N0IHtcXG4gICAgZ3JpZC1jb2x1bW46IG5ld3Bvc3Q7XFxufVxcblxcblxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5uZXdQb3N0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJwcmlvcml0eSB0aXRsZSBkZWxldGVcXFwiXFxuICAgICAgICBcXFwiY2hlY2tib3ggZGVzY3JpcHRpb24gY2F0ZWdvcnlcXFwiXFxuICAgICAgICBcXFwiLiBkdWVEYXRlIC5cXFwiO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbiAgICB3aWR0aDogNzYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI3LCAyNywgMjcsIDAuNSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIFxcbn1cXG4uZHVlRGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogZHVlRGF0ZTtcXG4gICAgY29sb3I6ICMwMDU2YjM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi50aXRsZVBhcnQge1xcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jaGVja2JveC1pbnB1dCB7XFxuICAgIGdyaWQtYXJlYTogY2hlY2tib3g7XFxufVxcblxcbi5wcmlvcml0eVBhcnQge1xcbiAgICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi5jYXRlZ29yeVBhcnQge1xcbiAgICBncmlkLWFyZWE6IGNhdGVnb3J5O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgcGxhY2Utc2VsZjogZW5kO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAyZW0gMC41ZW0gMi41ZW07XFxuICAgICAgICBmb250LXNpemU6IDAuNWVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICAgICAgY29sb3I6ICNmZmY2ZmI7XFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zZW07XFxuICAgICAgICB0ZXh0LXNoYWRvdzogLTJweCAycHggNXB4ICNGRDMwODQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRUIxREU7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDFweCAjRjExMjcxLFxcbiAgICAgICAgICAgIDAgMCAxMHB4IDJweCAjRkQzMDg0LFxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwcHggMXB4ICNGMTEyNzEsXFxuICAgICAgICAgICAgaW5zZXQgMCAwIDEwcHggMnB4ICNGRDMwODQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcztcXG4gICAgfVxcbiAgICBcXG4gICAgLmNhdGVnb3J5UGFydDpob3ZlciB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMHB4IDFweCAjRjExMjcxLFxcbiAgICAgICAgICAgIDAgMCAxMHB4IDJweCAjRkQzMDg0LFxcbiAgICAgICAgICAgIGluc2V0IDAgMCAwcHggMXB4ICNGMTEyNzEsXFxuICAgICAgICAgICAgaW5zZXQgMCAwIDMwcHggMnB4ICNGRDMwODQ7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI0ZEMzA4NDtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gICAgfVxcbiAgICBcXG4gICAgICBcXG4uZGVzY3JpcHRpb25QYXJ0IHtcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xcbiAgICAgICAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xcbiAgICAgICAgLyogYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM4OWZmZmQsICNlZjMyZDkpOyAqL1xcbiAgICAgICAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cXG4gICAgICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzg5ZmZmZCwgI2VmMzJkOSk7ICovXFxuICAgICAgICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXFxuICBcXG59XFxuXFxuLm5ld1Byb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMzAwJTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFyZW0pO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBhbmltYXRpb246IGdyYWRpZW50XzMwMSA1cyBlYXNlIGluZmluaXRlO1xcbiAgICBib3JkZXI6IGRvdWJsZSA0cHggdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMjEyMTIxLCAjMjEyMTIxKSwgbGluZWFyLWdyYWRpZW50KDEzNy40OGRlZywgI2ZmZGIzYiAxMCUsICNGRTUzQkIgNDUlLCAjOEY1MUVBIDY3JSwgIzAwNDRmZiA4NyUpO1xcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveCwgYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRhaW5lci1zdGFycyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcmVtKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuc3Ryb25nIHtcXG4gICAgei1pbmRleDogMjtcXG4gICAgZm9udC1mYW1pbHk6ICdBdmFsb3JzIFBlcnNvbmFsIFVzZSc7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgNHB4IHdoaXRlO1xcbn1cXG5cXG4jZ2xvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEycmVtO1xcbn1cXG5cXG4uY2lyY2xlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZmlsdGVyOiBibHVyKDJyZW0pO1xcbiAgICBhbmltYXRpb246IHB1bHNlXzMwMTEgNHMgaW5maW5pdGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uY2lyY2xlOm50aC1vZi10eXBlKDEpIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTQsIDgzLCAxODYsIDAuNjM2KTtcXG59XFxuXFxuLmNpcmNsZTpudGgtb2YtdHlwZSgyKSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQyLCA4MSwgMjM0LCAwLjcwNCk7XFxufVxcblxcbi5idG46aG92ZXIgI2NvbnRhaW5lci1zdGFycyB7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcXG59XFxuXFxuLmJ0bjphY3RpdmUge1xcbiAgICBib3JkZXI6IGRvdWJsZSA0cHggI0ZFNTNCQjtcXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3gsIGJvcmRlci1ib3g7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG59XFxuXFxuLmJ0bjphY3RpdmUgLmNpcmNsZSB7XFxuICAgIGJhY2tncm91bmQ6ICNGRTUzQkI7XFxufVxcblxcbiNzdGFycyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiAyMDByZW07XFxuICAgIGhlaWdodDogMjAwcmVtO1xcbn1cXG5cXG4jc3RhcnM6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTByZW07XFxuICAgIGxlZnQ6IC0xMDByZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFuaW1hdGlvbjogYW5pbVN0YXJSb3RhdGUgOTBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuI3N0YXJzOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjZmZmZmZmIDFweCwgdHJhbnNwYXJlbnQgMSUpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDUwcHggNTBweDtcXG59XFxuXFxuI3N0YXJzOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IC01MCU7XFxuICAgIHdpZHRoOiAxNzAlO1xcbiAgICBoZWlnaHQ6IDUwMCU7XFxuICAgIGFuaW1hdGlvbjogYW5pbVN0YXIgNjBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuI3N0YXJzOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoI2ZmZmZmZiAxcHgsIHRyYW5zcGFyZW50IDElKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltU3RhciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTM1cmVtKTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1TdGFyUm90YXRlIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnRfMzAxIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcbiAgICB9XFxuXFxuICAgIDUwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlXzMwMTEge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxuICAgIH1cXG5cXG4gICAgNzAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UsIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgZG9tQ2hlY2tlciB9IGZyb20gXCIuL2RvbVN3aXRjaGVyXCI7XG5cblxuZXhwb3J0IGNvbnN0IGNvbnRlbnREb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHBvc3RzID0ge1xuICAgICAgICBUb2RheTogW10sXG4gICAgICAgIFByb2plY3RzOiBbXSxcbiAgICAgICAgUGVyc29uYWw6IFtdLFxuICAgICAgICBXb3JrOiBbXSxcbiAgICAgICAgZG9tTWFuaXB1bGF0b3I6IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBwb3N0cy5Ub2RheS5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgaWYgKHByb2plY3QuY2F0ZWdvcnkgPT09ICdQcm9qZWN0cycpIHtcbiAgICAgICAgICAgICAgICBwb3N0cy5Qcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIC8vIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9qZWN0LmNhdGVnb3J5ID09PSAnUGVyc29uYWwnKSB7XG4gICAgICAgICAgICAgICAgcG9zdHMuUGVyc29uYWwucHVzaChwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAvLyBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvamVjdC5jYXRlZ29yeSA9PT0gJ1dvcmsnKSB7XG4gICAgICAgICAgICAgICAgcG9zdHMuV29yay5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgICAgIC8vIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgfSxcblxuICAgICAgICBkb21Qb3N0ZXI6IGZ1bmN0aW9uIChwcm9qZWN0QXJyYXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpOyAvLyBHZXQgdGhlIGNvbnRlbnQgZWxlbWVudFxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdQb3N0cyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLm5ld1Bvc3QnKTtcblxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIC8vIENsZWFyIHRoZSBleGlzdGluZ1Bvc3RzIGJlZm9yZSBhcHBlbmRpbmcgbmV3IHBvc3RzXG4gICAgICAgICAgICBleGlzdGluZ1Bvc3RzLmZvckVhY2goKHBvc3QpID0+IHtcbiAgICAgICAgICAgICAgICBwb3N0LnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5jbGFzc0xpc3QuYWRkKCduZXdQb3N0Jyk7XG5cblxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5UGFydCcpO1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gcHJvamVjdC5jYXRlZ29yeTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGVQYXJ0Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlRGF0ZScpO1xuICAgICAgICAgICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlidGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaWJ0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaWJ0aW9uUGFydCcpO1xuICAgICAgICAgICAgICAgIGRlc2NyaWJ0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5UGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5UGFydC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eVBhcnQnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWNpcmNsZScpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHByb2plY3QucHJpb3JpdHk7XG5cbiAgICAgICAgICAgICAgICBwcmlvcml0eVBhcnQuYXBwZW5kQ2hpbGQoc2VsZWN0ZWRDaXJjbGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWlucHV0Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChzZWxlY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0QXJyYXkuZmluZEluZGV4KChwb3N0KSA9PiBwb3N0ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdQb3N0LnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHBvc3QgZnJvbSB0aGUgXCJUb2RheVwiIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5UG9zdHMgPSBjb250ZW50RG9tLnBvc3RzLlRvZGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXlJbmRleCA9IHRvZGF5UG9zdHMuZmluZEluZGV4KChwb3N0KSA9PiBwb3N0ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2RheUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZGF5UG9zdHMuc3BsaWNlKHRvZGF5SW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcG9zdCBmcm9tIHRoZSByZXNwZWN0aXZlIGNhdGVnb3J5IHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5UG9zdHMgPSBjb250ZW50RG9tLnBvc3RzW3Byb2plY3QuY2F0ZWdvcnldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGNhdGVnb3J5UG9zdHMuZmluZEluZGV4KChwb3N0KSA9PiBwb3N0ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5UG9zdHMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcm9qZWN0IGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UoKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgZGlzcGxheSBmb3IgXCJUb2RheVwiIGFuZCB0aGUgcmVzcGVjdGl2ZSBjYXRlZ29yeSBzZWN0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUNoZWNrZXIuY2hlY2tlcihzZWxlY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuXG5cblxuXG4gICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICAgICAgICAgIG5ld1Bvc3QuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgIG5ld1Bvc3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICAgICAgICAgIG5ld1Bvc3QuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChkZXNjcmlidGlvbik7XG4gICAgICAgICAgICAgICAgbmV3UG9zdC5hcHBlbmRDaGlsZChwcmlvcml0eVBhcnQpO1xuICAgICAgICAgICAgICAgIG5ld1Bvc3QuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgY29udGVudC5wcmVwZW5kKG5ld1Bvc3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvc3RzLFxuICAgIH07XG59KSgpO1xuXG5cblxuXG5cbiAgICAgICAgLy8gZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBpbmRleCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgoKHBvc3QpID0+IHBvc3QgPT09IHByb2plY3QpO1xuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld1Bvc3QucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBSZW1vdmUgdGhlIHBvc3QgZnJvbSB0aGUgXCJUb2RheVwiIHNlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHRvZGF5UG9zdHMgPSBjb250ZW50RG9tLnBvc3RzLlRvZGF5O1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgdG9kYXlJbmRleCA9IHRvZGF5UG9zdHMuZmluZEluZGV4KChwb3N0KSA9PiBwb3N0ID09PSBwcm9qZWN0KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmICh0b2RheUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRvZGF5UG9zdHMuc3BsaWNlKHRvZGF5SW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAvLyBSZW1vdmUgdGhlIHBvc3QgZnJvbSB0aGUgcmVzcGVjdGl2ZSBjYXRlZ29yeSBzZWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zdCBjYXRlZ29yeVBvc3RzID0gY29udGVudERvbS5wb3N0c1twcm9qZWN0LmNhdGVnb3J5XTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGNhdGVnb3J5SW5kZXggPSBjYXRlZ29yeVBvc3RzLmZpbmRJbmRleCgocG9zdCkgPT4gcG9zdCA9PT0gcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoY2F0ZWdvcnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjYXRlZ29yeVBvc3RzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gVXBkYXRlIHRoZSBkaXNwbGF5IGZvciBcIlRvZGF5XCIgYW5kIHRoZSByZXNwZWN0aXZlIGNhdGVnb3J5IHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0c1tzZWxlY3Rpb24udGV4dENvbnRlbnRdKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuXG4iLCJcblxuaW1wb3J0IHsgY29udGVudERvbSB9IGZyb20gJy4vRE9NcG9zdGVyJztcblxuXG5cbmV4cG9ydCBjb25zdCBkb21DaGVja2VyID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBjaGVja2VyKHNlbGVjdGlvbikge1xuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnVG9kYXk6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5Ub2RheSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnUHJvamVjdHM6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5Qcm9qZWN0cylcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnUGVyc29uYWw6Jykge1xuICAgICAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21Qb3N0ZXIoY29udGVudERvbS5wb3N0cy5QZXJzb25hbClcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0aW9uID09PSAnV29yazonKSB7XG4gICAgICAgICAgICBjb250ZW50RG9tLnBvc3RzLmRvbVBvc3Rlcihjb250ZW50RG9tLnBvc3RzLldvcmspXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VPZlNlbGVjdGlvbigpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICAgICAgY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwnKTtcbiAgICAgICAgY29uc3Qgd29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrJyk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3Rpb24nKVxuICAgICAgICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29ucyBkaXYnKTtcbiAgICAgICAgY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LWljb24nKTtcbiAgICAgICAgY29uc3QgcHJvamVjdHNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWljb24nKTtcbiAgICAgICAgY29uc3QgcGVyc29uYWxJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlcnNvbmFsLWljb24nKTtcbiAgICAgICAgY29uc3Qgd29ya0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay1pY29uJyk7XG4gICAgICAgIHRvZGF5LmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJyk7XG4gICAgICAgIHRvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuXG4gICAgICAgIFxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdGlvbkNoYW5nZShzZWxlY3RlZFRleHQpIHtcbiAgICAgICAgICAgIHNlbGVjdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkVGV4dDtcbiAgICAgICAgICAgIGRvbUNoZWNrZXIuY2hlY2tlcihzZWxlY3Rpb24udGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUhpZ2hsaWdodENsYXNzKCkge1xuICAgICAgICAgICAgW3RvZGF5LCBwcm9qZWN0cywgcGVyc29uYWwsIHdvcmtdLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkLWljb25zJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKCdUb2RheTonKTtcbiAgICAgICAgICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzKCk7XG4gICAgICAgICAgICB0b2RheS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICB0b2RheUljb24uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQtaWNvbnMnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbnRlbnREb20ucG9zdHMuVG9kYXkpXG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdGlvbkNoYW5nZSgnUHJvamVjdHM6Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzKCk7XG4gICAgICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICBwcm9qZWN0c0ljb24uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQtaWNvbnMnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBlcnNvbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uQ2hhbmdlKCdQZXJzb25hbDonKTtcbiAgICAgICAgICAgIHJlbW92ZUhpZ2hsaWdodENsYXNzKCk7XG4gICAgICAgICAgICBwZXJzb25hbC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICBwZXJzb25hbEljb24uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQtaWNvbnMnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHdvcmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb25DaGFuZ2UoJ1dvcms6Jyk7XG4gICAgICAgICAgICByZW1vdmVIaWdobGlnaHRDbGFzcygpO1xuICAgICAgICAgICAgd29yay5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpXG4gICAgICAgICAgICB3b3JrSWNvbi5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZC1pY29ucycpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9tQ2hlY2tlci5jaGVja2VyKHNlbGVjdGlvbi50ZXh0Q29udGVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hlY2tlcixcbiAgICAgICAgY2hhbmdlT2ZTZWxlY3Rpb24sXG4gICAgfTtcbn0pKCk7XG5cbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb3JtKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNsaWNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3QnKTtcblxuICAgIFxuICAgICAgICAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBmb3JtIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvcm0gZWxlbWVudFxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHNlbGVjdCBpbnB1dCBmb3IgY2F0ZWdvcnlcbiAgICAgICAgY29uc3Qgc2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9ICdDYXRlZ29yeTonO1xuICAgICAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzZWxlY3RJbnB1dC5uYW1lID0gJ2NhdGVnb3J5JztcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFsnUHJvamVjdHMnLCAnUGVyc29uYWwnLCAnV29yayddO1xuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xuICAgICAgICAgICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGVjdExhYmVsLmFwcGVuZENoaWxkKHNlbGVjdElucHV0KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZvciB0aXRsZVxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaXRsZTonO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICB0aXRsZUlucHV0Lm5hbWUgPSAndGl0bGUnO1xuICAgICAgICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBpbnB1dCBmb3IgZHVlIGRhdGVcbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgZHVlRGF0ZUlucHV0Lm5hbWUgPSAnZHVlRGF0ZSc7XG4gICAgZHVlRGF0ZUxhYmVsLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpbnB1dCBmb3IgZGVzY3JpcHRpb25cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246JztcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9ICdkZXNjcmlwdGlvbic7XG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBpbnB1dCBmb3IgcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcblxuICAgICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnN0IGdyYXlDaXJjbGUgPSBjcmVhdGVQcmlvcml0eUNpcmNsZSgnZ3JheScpO1xuICAgICAgICBjb25zdCBibHVlQ2lyY2xlID0gY3JlYXRlUHJpb3JpdHlDaXJjbGUoJ2JsdWUnKTtcbiAgICAgICAgY29uc3QgcmVkQ2lyY2xlID0gY3JlYXRlUHJpb3JpdHlDaXJjbGUoJ3JlZCcpO1xuXG4gICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGdyYXlDaXJjbGUpO1xuICAgICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChibHVlQ2lyY2xlKTtcbiAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocmVkQ2lyY2xlKTtcblxuICAgICAgICBwcmlvcml0eUxhYmVsLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHN1Ym1pdCBidXR0b25cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgICAgIC8vIEFwcGVuZCBhbGwgdGhlIGZvcm0gZWxlbWVudHMgdG8gdGhlIGZvcm1cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZm9ybSB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIGZvcm0gY29udGFpbmVyIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIC8vIFNjcm9sbCB0byB0aGUgZm9ybSBjb250YWluZXJcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvKHtcbiAgICAgICAgICAgIHRvcDogZm9ybUNvbnRhaW5lci5vZmZzZXRUb3AsXG4gICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBSZXRyaWV2ZSBmb3JtIHZhbHVlc1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBzZWxlY3RJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGdldFNlbGVjdGVkUHJpb3JpdHkoKTtcblxuICAgICAgICAgICAgY2FsbGJhY2soY2F0ZWdvcnksIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVTdWJtaXQpO1xuXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcmlvcml0eSBjaXJjbGVcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHlDaXJjbGUoY29sb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1jaXJjbGUnKTtcbiAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKGNvbG9yKTtcbiAgICAgICAgICAgIGNpcmNsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBncmF5Q2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgYmx1ZUNpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHJlZENpcmNsZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY2lyY2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgc2VsZWN0ZWQgcHJpb3JpdHlcbiAgICAgICAgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRQcmlvcml0eSgpIHtcbiAgICAgICAgICAgIGlmIChncmF5Q2lyY2xlLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZ3JheSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJsdWVDaXJjbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdibHVlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVkQ2lyY2xlLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAncmVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgIFxufVxuIiwiXG5cbmNsYXNzIFByb2plY3RHZW4ge1xuICAgIGNvbnN0cnVjdG9yKGNhdGVnb3J5LCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBpbmZvKCkge1xuICAgICAgICByZXR1cm4gYENhdGVnb3J5OiAke3RoaXMuY2F0ZWdvcnl9LCBUaXRsZTogJHt0aGlzLnRpdGxlfSwgRGF0ZTogJHt0aGlzLmR1ZURhdGV9IERlc2NyaXB0aW9uOiAke3RoaXMuZGVzY3JpcHRpb259LCBQcmlvcml0eTogJHt0aGlzLnByaW9yaXR5fWA7XG4gICAgfVxufVxuXG5leHBvcnQgeyBQcm9qZWN0R2VuIH07XG4iLCJpbXBvcnQgeyBjb250ZW50RG9tIH0gZnJvbSAnLi9ET01wb3N0ZXInO1xuXG4vLyBzdG9yYWdlLmpzXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zdHMnLCBKU09OLnN0cmluZ2lmeShjb250ZW50RG9tLnBvc3RzKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gICAgY29uc3Qgc2F2ZWRQb3N0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc3RzJykpO1xuICAgIGlmIChzYXZlZFBvc3RzKSB7XG4gICAgICAgIC8vIENsZWFyIGV4aXN0aW5nIHBvc3RzIGluIGVhY2ggY2F0ZWdvcnkgYXJyYXlcbiAgICAgICAgY29udGVudERvbS5wb3N0cy5Ub2RheS5sZW5ndGggPSAwO1xuICAgICAgICBjb250ZW50RG9tLnBvc3RzLlByb2plY3RzLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbnRlbnREb20ucG9zdHMuUGVyc29uYWwubGVuZ3RoID0gMDtcbiAgICAgICAgY29udGVudERvbS5wb3N0cy5Xb3JrLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgXG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjYXRlZ29yeSBhcnJheXMgd2l0aCByZXRyaWV2ZWQgZGF0YVxuICAgICAgICBzYXZlZFBvc3RzLlRvZGF5LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnRlbnREb20ucG9zdHMuZG9tTWFuaXB1bGF0b3IocHJvamVjdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBQcm9qZWN0R2VuIH0gZnJvbSAnLi9wcm9qZWN0Z2VuZXJhdG9yJ1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQgeyBjb250ZW50RG9tIH0gZnJvbSAnLi9ET01wb3N0ZXInO1xuaW1wb3J0IHsgZG9tQ2hlY2tlciB9IGZyb20gJy4vZG9tU3dpdGNoZXInO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UsIGdldFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSwgcmVtb3ZlRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cblxuY29uc29sZS5sb2coJ1JhZGkgcmFkaScpXG5cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgaGVhZGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItaWNvbicpO1xuY29uc3QgaGVhZGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItbmFtZScpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5jb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29ucycpO1xuY29uc3QgdG9kYXlJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5LWljb24nKTtcbmNvbnN0IHByb2plY3RzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1pY29uJyk7XG5jb25zdCBwZXJzb25hbEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVyc29uYWwtaWNvbicpO1xuY29uc3Qgd29ya0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29yay1pY29uJyk7XG5jb25zdCB0b2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvcycpO1xuY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKTtcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XG5jb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZXJzb25hbCcpO1xuY29uc3Qgd29yayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53b3JrJyk7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcblxuXG5cbi8vIENyZWF0ZSBhIG5ldyBkaXYgZWxlbWVudFxuY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWxlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0aW9uJyk7XG5zZWxlY3Rpb24udGV4dENvbnRlbnQgPSAnVG9kYXk6JztcblxuXG4vLyBBcHBlbmQgdGhlIHNlbGVjdGlvbiBkaXYgdG8gdGhlIGNvbnRlbnQgZWxlbWVudFxuY29udGVudC5hcHBlbmRDaGlsZChzZWxlY3Rpb24pO1xuXG5cbmNvbnN0IGNsaWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5jbGlja0J1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0Jyk7XG5jbGlja0J1dHRvbi50ZXh0Q29udGVudCA9ICdOZXcgVG9kbyc7XG5cblxuXG5cbi8vIENyZWF0ZSBjb250YWluZXItc3RhcnMgZGl2XG5jb25zdCBjb250YWluZXJTdGFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyU3RhcnMuaWQgPSAnY29udGFpbmVyLXN0YXJzJztcblxuLy8gQ3JlYXRlIHN0YXJzIGRpdlxuY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN0YXJzLmlkID0gJ3N0YXJzJztcblxuLy8gQXBwZW5kIHN0YXJzIGRpdiB0byBjb250YWluZXItc3RhcnMgZGl2XG5jb250YWluZXJTdGFycy5hcHBlbmRDaGlsZChzdGFycyk7XG5cbi8vIENyZWF0ZSBnbG93IGRpdlxuY29uc3QgZ2xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZ2xvdy5pZCA9ICdnbG93JztcblxuLy8gQ3JlYXRlIGNpcmNsZSBkaXZzXG5jb25zdCBjaXJjbGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jaXJjbGUxLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuY29uc3QgY2lyY2xlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY2lyY2xlMi5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcblxuLy8gQXBwZW5kIGNpcmNsZSBkaXZzIHRvIGdsb3cgZGl2XG5nbG93LmFwcGVuZENoaWxkKGNpcmNsZTEpO1xuZ2xvdy5hcHBlbmRDaGlsZChjaXJjbGUyKTtcblxuLy8gQXBwZW5kIGNvbnRhaW5lci1zdGFycyBhbmQgZ2xvdyB0byBjbGlja0J1dHRvblxuY2xpY2tCdXR0b24uYXBwZW5kQ2hpbGQoY29udGFpbmVyU3RhcnMpO1xuY2xpY2tCdXR0b24uYXBwZW5kQ2hpbGQoZ2xvdyk7XG5cbi8vIEFwcGVuZCB0aGUgYnV0dG9uIHRvIHRoZSBjb250ZW50IGVsZW1lbnRcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY2xpY2tCdXR0b24pO1xuXG5cblxuY2xpY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlRm9ybSgoY2F0ZWdvcnksIHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0R2VuKGNhdGVnb3J5LCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbiAgICAgICAgY29udGVudERvbS5wb3N0cy5kb21NYW5pcHVsYXRvcihwcm9qZWN0KVxuICAgICAgICBkb21DaGVja2VyLmNoZWNrZXIoc2VsZWN0aW9uLnRleHRDb250ZW50KVxuICAgICAgICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSgpXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pO1xufSk7XG5kb21DaGVja2VyLmNoYW5nZU9mU2VsZWN0aW9uKCk7XG5cblxuY29uc29sZS5sb2coc2VsZWN0aW9uLnRleHRDb250ZW50KVxuXG5cblxuXG4vLyAvLyBFeGFtcGxlIHVzYWdlOlxuY29uc3QgbmV3UHJvamVjdCA9IHtcbiAgICBjYXRlZ29yeTogJ1Byb2plY3RzJyxcbiAgICB0aXRsZTogJ05ldyBQcm9qZWN0JyxcbiAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIHRoZSBuZXcgcHJvamVjdCcsXG4gICAgcHJpb3JpdHk6ICdibHVlJyxcbiAgICBkdWVEYXRlOiAnMjAyMy0wNS0zMScsXG59O1xuXG5cblxuXG5cbi8vIFJldHJpZXZlIHRoZSBzYXZlZCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIHVwZGF0ZSBjb250ZW50RG9tLnBvc3RzIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBcbiAgICBkb21DaGVja2VyLmNoZWNrZXIoc2VsZWN0aW9uLnRleHRDb250ZW50KTtcbn0pO1xuXG5jb250ZW50RG9tLnBvc3RzLmRvbU1hbmlwdWxhdG9yKG5ld1Byb2plY3QpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=