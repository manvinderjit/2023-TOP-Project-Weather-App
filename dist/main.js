"use strict";
(self["webpackChunk_2023_top_project_weather_app"] = self["webpackChunk_2023_top_project_weather_app"] || []).push([["main"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --color-background-theme-dark: rgb(34, 40, 49);
    --color-background-theme-light: rgb(221, 221, 221);
    --color-text-red: rgb(240, 84, 84);
    --color-text-blue: rgb(48, 71, 94);
    --color-text-light-gray: rgb(221, 221, 221);
}

body {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0 auto;
    padding: 0;
    width: 1220px;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

header {
    height: 5rem;
    background-color: var(--color-background-theme-dark);
    color: var(--color-text-red);
}

#logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

#logo-container > p {
    margin: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
}

main {
    background-color: var(--color-background-theme-light);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
    padding: 2rem;
}

#get-weather-data {
    margin: 0 auto;
    max-width: 600px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}

#display-form-errors > span {
    height: 1rem;
    padding: 0.3rem;
    color: var(--color-text-red);
    font-size: 0.8rem;
    font-weight: 500;
}

#get-weather-data > div {
    margin: 1rem;
    display: flex;
    gap: 2rem;    
}

input {
    height: 1.5rem;    
    width: 10rem;
    border-radius: 0.4rem;
    border: none;
}

button {
    height: 1.5rem;
    width: 7rem;
    font-weight: 500;
}

/* Toggle temperature styling */

.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 1.5rem;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}
  
.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: var(--color-text-red);
}

input:focus + .slider, input:hover, button:focus, button:hover {
    box-shadow: 0 0 3px var(--color-text-red);
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 40px;
}

.slider.round:before {
    border-radius: 50%;
}

.display-header {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
}

#display-wrapper {
    width: 400px;
    margin: 0 auto;
}

#current-location, #current-temperature, #toggle-temperature {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 500;    
}

#display-subheader {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
}

/* Styling for loading spinner */
.loader {
    border: 16px solid var(--color-background-theme-dark);
    border-top: 16px solid var(--color-text-red);
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    animation: spin 2s linear infinite;
    margin: 0 auto;
}

.hidden {
    display: none;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Error Display */
#display-error {
    margin: 0 auto;
}

/* Footer */
footer {
    height: 4rem;
    background-color: var(--color-background-theme-dark);
    margin-top: auto;
    color: var(--color-text-red);
    text-align: center;
}
footer > p {
    margin: 0.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8CAA8C;IAC9C,kDAAkD;IAClD,kCAAkC;IAClC,kCAAkC;IAClC,2CAA2C;AAC/C;;AAEA;IACI,yFAAyF;IACzF,cAAc;IACd,UAAU;IACV,aAAa;IACb,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,oDAAoD;IACpD,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,qDAAqD;IACrD,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,6BAA6B;IAC7B,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,4BAA4B;IAC5B,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,SAAS;AACb;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,gBAAgB;AACpB;;AAEA,+BAA+B;;AAE/B;IACI,kBAAkB;IAClB,qBAAqB;IACrB,WAAW;IACX,cAAc;AAClB;;AAEA,+BAA+B;AAC/B;IACI,UAAU;IACV,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;AAChB;;AAEA,eAAe;AACf;IACI,kBAAkB;IAClB,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,mCAAmC;IACnC,+BAA+B;IAC/B,2BAA2B;AAC/B;;AAEA,oBAAoB;AACpB;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,qBAAqB;AACzB;;AAEA,gCAAgC;AAChC;IACI,qDAAqD;IACrD,4CAA4C;IAC5C,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,KAAK,uBAAuB,EAAE;IAC9B,OAAO,yBAAyB,EAAE;AACtC;;AAEA,kBAAkB;AAClB;IACI,cAAc;AAClB;;AAEA,WAAW;AACX;IACI,YAAY;IACZ,oDAAoD;IACpD,gBAAgB;IAChB,4BAA4B;IAC5B,kBAAkB;AACtB;AACA;IACI,cAAc;AAClB","sourcesContent":[":root {\n    --color-background-theme-dark: rgb(34, 40, 49);\n    --color-background-theme-light: rgb(221, 221, 221);\n    --color-text-red: rgb(240, 84, 84);\n    --color-text-blue: rgb(48, 71, 94);\n    --color-text-light-gray: rgb(221, 221, 221);\n}\n\nbody {\n    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0 auto;\n    padding: 0;\n    width: 1220px;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    height: 5rem;\n    background-color: var(--color-background-theme-dark);\n    color: var(--color-text-red);\n}\n\n#logo-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n#logo-container > p {\n    margin: 0.5rem;\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n\nmain {\n    background-color: var(--color-background-theme-light);\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    height: 100%;\n    padding: 2rem;\n}\n\n#get-weather-data {\n    margin: 0 auto;\n    max-width: 600px;\n    display: flex;\n    justify-content: space-evenly;\n    flex-direction: column;\n}\n\n#display-form-errors > span {\n    height: 1rem;\n    padding: 0.3rem;\n    color: var(--color-text-red);\n    font-size: 0.8rem;\n    font-weight: 500;\n}\n\n#get-weather-data > div {\n    margin: 1rem;\n    display: flex;\n    gap: 2rem;    \n}\n\ninput {\n    height: 1.5rem;    \n    width: 10rem;\n    border-radius: 0.4rem;\n    border: none;\n}\n\nbutton {\n    height: 1.5rem;\n    width: 7rem;\n    font-weight: 500;\n}\n\n/* Toggle temperature styling */\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 50px;\n    height: 1.5rem;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0.25rem;\n}\n\n/* The slider */\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n  \n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 20px;\n    width: 20px;\n    left: 2px;\n    bottom: 2px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked + .slider {\n    background-color: var(--color-text-red);\n}\n\ninput:focus + .slider, input:hover, button:focus, button:hover {\n    box-shadow: 0 0 3px var(--color-text-red);\n}\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n    border-radius: 40px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n.display-header {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n}\n\n#display-wrapper {\n    width: 400px;\n    margin: 0 auto;\n}\n\n#current-location, #current-temperature, #toggle-temperature {\n    margin: 0;\n    padding: 0;\n    font-size: 2rem;\n    font-weight: 500;    \n}\n\n#display-subheader {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: center;\n}\n\n/* Styling for loading spinner */\n.loader {\n    border: 16px solid var(--color-background-theme-dark);\n    border-top: 16px solid var(--color-text-red);\n    border-radius: 50%;\n    width: 5rem;\n    height: 5rem;\n    animation: spin 2s linear infinite;\n    margin: 0 auto;\n}\n\n.hidden {\n    display: none;\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n/* Error Display */\n#display-error {\n    margin: 0 auto;\n}\n\n/* Footer */\nfooter {\n    height: 4rem;\n    background-color: var(--color-background-theme-dark);\n    margin-top: auto;\n    color: var(--color-text-red);\n    text-align: center;\n}\nfooter > p {\n    margin: 0.5rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherData: () => (/* binding */ fetchWeatherData)
/* harmony export */ });
const getWeatherData = async (location = 'toronto') => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${"e1367f1dc7d34221a2e203758230709"}&q=${location}&aqi=${"no"}`, { mode: 'cors', headers: { 'Access-Control-Allow-Origin': 'https://api.weatherapi.com/' } });
        if (response.status === 200) {
            const weatherData = await response.json();
            return ([response.status, weatherData]);
        } else {
            return ([response.status]);
        }
    } catch (error) {
        console.error(error);
    }
};

const fetchWeatherData = async (_location) => {
    try {
        const _weatherData = await getWeatherData(_location);
        if (_weatherData[0] === 200) {
            const { name, region, country } = _weatherData[1].location;
            const { temp_c, temp_f, feelslike_c, feelslike_f } = _weatherData[1].current;
            return { name, region, country, temp_c, temp_f, feelslike_c, feelslike_f };
        } else {
            return ({ error: 'Something went wrong', status: _weatherData[0] });
        }
    } catch (error) {
        console.error(error);
    }
};




/***/ }),

/***/ "./src/components/validate.js":
/*!************************************!*\
  !*** ./src/components/validate.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateInput: () => (/* binding */ validateInput)
/* harmony export */ });
const validateInput = () => {
    const inputSearchLocation = document.getElementById('location');
    const spanErrorDisplay = document.querySelector('#display-form-errors > span.error');
    const formSearchWeather = document.getElementById('display-form-errors');

    const checkEventsList = ['input', 'focusout'];

    checkEventsList.forEach((individualEvent) => {
        inputSearchLocation.addEventListener(individualEvent, () => {
            if (!inputSearchLocation.validity.valid) {
                showErrors();
            }
        });
    });

    formSearchWeather.addEventListener('submit', () => {
        if (!formSearchWeather.checkValidity) {
            showErrors();
        }
    });

    const showErrors = () => {
        if (inputSearchLocation.validity.valueMissing) {
            inputSearchLocation.setCustomValidity('Please provide a location!');
            spanErrorDisplay.textContent = 'Error: Please provide a location!';
        } else if (inputSearchLocation.validity.tooShort) {
            inputSearchLocation.setCustomValidity('Location must be at least two characters!');
            spanErrorDisplay.textContent = 'Error: Location must be at least two characters!';
        } else {
            inputSearchLocation.setCustomValidity('');
            spanErrorDisplay.textContent = '';
        }
    };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



window.createHomeContent = _modules_home_js__WEBPACK_IMPORTED_MODULE_0__.homeContent;


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeContent: () => (/* binding */ homeContent)
/* harmony export */ });
/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/api.js */ "./src/components/api.js");
/* harmony import */ var _components_validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/validate.js */ "./src/components/validate.js");



const homeContent = (() => {
    'use strict';

    let weatherData;

    const createHeader = () => {
        const headerElement = document.createElement('header');
        document.body.appendChild(headerElement);

        const headerContent = createHeaderContent();
        headerElement.appendChild(headerContent);
    };

    const createHeaderContent = () => {
        const headerLogoSection = document.createElement('div');
        headerLogoSection.id = 'logo-container';

        const headerLogo = document.createElement('p');
        headerLogo.textContent = "Manvinderjit's Weather App";
        headerLogoSection.appendChild(headerLogo);

        return headerLogoSection;
    };

    const createMainElement = () => {
        const mainElement = document.createElement('main');
        document.body.appendChild(mainElement);
    };

    const createWeatherForm = () => {
        const formElement = document.createElement('form');
        formElement.id = 'get-weather-data';

        const formItems = createFormItems();
        formElement.appendChild(formItems);

        const formErrors = createFormErrorSection();
        formElement.appendChild(formErrors);

        document.querySelector('main').appendChild(formElement);
        submitFormBehavior();
    };

    const createFormItems = () => {
        const formItemWrapper = document.createElement('div');

        const searchInput = document.createElement('input');
        searchInput.type = 'search';
        searchInput.id = 'location';
        searchInput.required = true;
        searchInput.minLength = '2';
        searchInput.placeholder = 'Enter location here';
        formItemWrapper.appendChild(searchInput);

        const searchSubmitButton = document.createElement('button');
        searchSubmitButton.type = 'submit';
        searchSubmitButton.textContent = 'Search';
        formItemWrapper.appendChild(searchSubmitButton);

        return formItemWrapper;
    };

    const createFormErrorSection = () => {
        const formErrorWrapper = document.createElement('div');
        formErrorWrapper.id = 'display-form-errors';

        const formErrorSpan = document.createElement('span');
        formErrorSpan.classList.add('error');
        formErrorSpan.ariaLive = 'polite';

        formErrorWrapper.appendChild(formErrorSpan);
        return formErrorWrapper;
    };

    const createToggleSwitch = () => {
        const toggleTemperatureSliderContainer = document.createElement('div');
        toggleTemperatureSliderContainer.classList.add('slider-container');

        const toggleTemperatureWrapper = document.createElement('label');
        toggleTemperatureWrapper.classList.add('switch');

        const toggleTemperatureCheckbox = document.createElement('input');
        toggleTemperatureCheckbox.type = 'checkbox';
        toggleTemperatureCheckbox.id = 'temp-unit';
        toggleTemperatureCheckbox.addEventListener('change', () => {
            populateTemperatureFields(weatherData);
        });
        toggleTemperatureWrapper.appendChild(toggleTemperatureCheckbox);

        const toggleTemperatureSpan = document.createElement('span');
        toggleTemperatureSpan.classList.add('slider', 'round');
        toggleTemperatureWrapper.appendChild(toggleTemperatureSpan);

        toggleTemperatureSliderContainer.appendChild(toggleTemperatureWrapper);

        const temperatureUnitLabel = document.createElement('label');
        temperatureUnitLabel.id = 'label-temp-unit';
        temperatureUnitLabel.textContent = 'Change Unit';
        toggleTemperatureSliderContainer.appendChild(temperatureUnitLabel);

        const mainElement = document.querySelector('main');
        mainElement.appendChild(toggleTemperatureSliderContainer);
    };

    const submitFormBehavior = () => {
        const formElement = document.getElementById('get-weather-data');
        formElement.addEventListener('submit', (event) => {
            resetError();
            const location = document.getElementById('location').value;
            populateWeatherDisplay(location);
            event.preventDefault();
        });
    };

    const createWeatherDisplay = () => {
        const mainElement = document.querySelector('main');
        const displayWrapper = document.createElement('div');
        displayWrapper.id = 'display-wrapper';

        const displayHeader = createWeatherDisplayHeader();
        displayWrapper.appendChild(displayHeader);

        const displaySubheader = createWeatherDisplaySubheader();
        displayWrapper.appendChild(displaySubheader);
        mainElement.appendChild(displayWrapper);
    };

    const createWeatherDisplayHeader = () => {
        const displayHeader = document.createElement('div');
        displayHeader.classList.add('display-header');

        const displayLocation = document.createElement('h1');
        displayLocation.id = 'current-location';
        displayHeader.appendChild(displayLocation);

        const displayCurrentTemperature = document.createElement('div');
        displayCurrentTemperature.id = 'current-temperature';
        displayHeader.appendChild(displayCurrentTemperature);

        return displayHeader;
    };

    const createWeatherDisplaySubheader = () => {
        const displaySubheader = document.createElement('div');
        displaySubheader.id = 'display-subheader';

        const displayRegion = document.createElement('p');
        displayRegion.id = 'display-region';
        displaySubheader.appendChild(displayRegion);

        const displayFeelsLike = document.createElement('p');
        displayFeelsLike.id = 'feels-like';
        displaySubheader.appendChild(displayFeelsLike);

        return displaySubheader;
    };

    const createErrorElement = () => {
        const errorElement = document.createElement('div');
        errorElement.id = 'display-error';
        errorElement.classList.add('hidden', 'invalid');
        const mainElement = document.querySelector('main');
        mainElement.appendChild(errorElement);
    };

    const showError = (error, status) => {
        const errorElement = document.getElementById('display-error');
        errorElement.classList.remove('hidden');
        errorElement.textContent = `${error}, code: ${status}`;
    };

    const resetError = () => {
        const errorElement = document.getElementById('display-error');
        errorElement.classList.add('hidden');
        errorElement.textContent = '';
    };

    const populateWeatherDisplay = async (location) => {
        toggleLoadingSpinner(true);
        toggleTemperatureDisplay(false);

        weatherData = await (0,_components_api_js__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherData)(location);
        if (weatherData.error) {
            toggleLoadingSpinner(false);
            toggleTemperatureDisplay(false);
            showError(weatherData.error, weatherData.status);
            return;
        }

        toggleLoadingSpinner(false);
        toggleTemperatureDisplay(true);

        const locationName = document.getElementById('current-location');
        locationName.textContent = weatherData.name;

        const displayRegion = document.getElementById('display-region');
        displayRegion.textContent = `${weatherData.region}, ${weatherData.country}`;

        populateTemperatureFields(weatherData);
    };

    const populateTemperatureFields = (data) => {
        const toggleTemperatureCheckboxStatus = document.getElementById('temp-unit').checked;
        const locationTemp = document.getElementById('current-temperature');
        locationTemp.textContent = toggleTemperatureCheckboxStatus ? `${data.temp_f}\u00B0F` : `${data.temp_c}\u00B0C`;
        const displayFeelsLike = document.getElementById('feels-like');
        displayFeelsLike.textContent = toggleTemperatureCheckboxStatus ? `Feels Like: ${data.feelslike_f}\u00B0F` : `Feels Like: ${data.feelslike_c}\u00B0C`;
    };

    const createLoadingSpinner = () => {
        const loadingSpinner = document.createElement('div');
        loadingSpinner.classList.add('loader', 'hidden');

        const mainElement = document.querySelector('main');
        mainElement.appendChild(loadingSpinner);
    };

    const toggleLoadingSpinner = (visibilityStatus = false) => {
        const loadingSpinner = document.querySelector('.loader');
        visibilityStatus ? loadingSpinner.classList.remove('hidden') : loadingSpinner.classList.add('hidden');
    };

    const toggleTemperatureDisplay = (visibilityStatus = true) => {
        const temperatureDisplayElement = document.getElementById('display-wrapper');
        visibilityStatus ? temperatureDisplayElement.classList.remove('hidden') : temperatureDisplayElement.classList.add('hidden');
    };

    const createFooter = () => {
        const footerElement = document.createElement('footer');

        const footerText = document.createElement('p');
        footerText.textContent = '\u00A9 Manvinderjit 2023';
        footerElement.appendChild(footerText);

        document.body.appendChild(footerElement);
    };

    createHeader();
    createMainElement();
    createWeatherForm();
    (0,_components_validate_js__WEBPACK_IMPORTED_MODULE_1__.validateInput)();
    createToggleSwitch();
    createLoadingSpinner();
    createWeatherDisplay();
    createErrorElement();
    populateWeatherDisplay();
    createFooter();
})();




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVks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b3AtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vMjAyMy10b3AtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vMjAyMy10b3AtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLzIwMjMtdG9wLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vMjAyMy10b3AtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8yMDIzLXRvcC1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8yMDIzLXRvcC1wcm9qZWN0LXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLzIwMjMtdG9wLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vMjAyMy10b3AtcHJvamVjdC13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLzIwMjMtdG9wLXByb2plY3Qtd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8yMDIzLXRvcC1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvYXBpLmpzIiwid2VicGFjazovLzIwMjMtdG9wLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8yMDIzLXRvcC1wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLzIwMjMtdG9wLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kLXRoZW1lLWRhcms6IHJnYigzNCwgNDAsIDQ5KTtcbiAgICAtLWNvbG9yLWJhY2tncm91bmQtdGhlbWUtbGlnaHQ6IHJnYigyMjEsIDIyMSwgMjIxKTtcbiAgICAtLWNvbG9yLXRleHQtcmVkOiByZ2IoMjQwLCA4NCwgODQpO1xuICAgIC0tY29sb3ItdGV4dC1ibHVlOiByZ2IoNDgsIDcxLCA5NCk7XG4gICAgLS1jb2xvci10ZXh0LWxpZ2h0LWdyYXk6IHJnYigyMjEsIDIyMSwgMjIxKTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTIyMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oZWFkZXIge1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLXRoZW1lLWRhcmspO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXJlZCk7XG59XG5cbiNsb2dvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuI2xvZ28tY29udGFpbmVyID4gcCB7XG4gICAgbWFyZ2luOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZC10aGVtZS1saWdodCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuI2dldC13ZWF0aGVyLWRhdGEge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jZGlzcGxheS1mb3JtLWVycm9ycyA+IHNwYW4ge1xuICAgIGhlaWdodDogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjNyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcmVkKTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jZ2V0LXdlYXRoZXItZGF0YSA+IGRpdiB7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtOyAgICBcbn1cblxuaW5wdXQge1xuICAgIGhlaWdodDogMS41cmVtOyAgICBcbiAgICB3aWR0aDogMTByZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICB3aWR0aDogN3JlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBUb2dnbGUgdGVtcGVyYXR1cmUgc3R5bGluZyAqL1xuXG4uc3dpdGNoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogMS41cmVtO1xufVxuXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xuLnN3aXRjaCBpbnB1dCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjI1cmVtO1xufVxuXG4vKiBUaGUgc2xpZGVyICovXG4uc2xpZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbn1cbiAgXG4uc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGxlZnQ6IDJweDtcbiAgICBib3R0b206IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXJlZCk7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciwgaW5wdXQ6aG92ZXIsIGJ1dHRvbjpmb2N1cywgYnV0dG9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLWNvbG9yLXRleHQtcmVkKTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uZGlzcGxheS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNkaXNwbGF5LXdyYXBwZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuI2N1cnJlbnQtbG9jYXRpb24sICNjdXJyZW50LXRlbXBlcmF0dXJlLCAjdG9nZ2xlLXRlbXBlcmF0dXJlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDsgICAgXG59XG5cbiNkaXNwbGF5LXN1YmhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLyogU3R5bGluZyBmb3IgbG9hZGluZyBzcGlubmVyICovXG4ubG9hZGVyIHtcbiAgICBib3JkZXI6IDE2cHggc29saWQgdmFyKC0tY29sb3ItYmFja2dyb3VuZC10aGVtZS1kYXJrKTtcbiAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHZhcigtLWNvbG9yLXRleHQtcmVkKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIEVycm9yIERpc3BsYXkgKi9cbiNkaXNwbGF5LWVycm9yIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogRm9vdGVyICovXG5mb290ZXIge1xuICAgIGhlaWdodDogNHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLXRoZW1lLWRhcmspO1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcmVkKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIgPiBwIHtcbiAgICBtYXJnaW46IDAuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4Q0FBOEM7SUFDOUMsa0RBQWtEO0lBQ2xELGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0kseUZBQXlGO0lBQ3pGLGNBQWM7SUFDZCxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9EQUFvRDtJQUNwRCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBLCtCQUErQjs7QUFFL0I7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBLCtCQUErQjtBQUMvQjtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLDJCQUEyQjtBQUMvQjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxxQkFBcUI7QUFDekI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0kscURBQXFEO0lBQ3JELDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxLQUFLLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8seUJBQXlCLEVBQUU7QUFDdEM7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksY0FBYztBQUNsQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxZQUFZO0lBQ1osb0RBQW9EO0lBQ3BELGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kLXRoZW1lLWRhcms6IHJnYigzNCwgNDAsIDQ5KTtcXG4gICAgLS1jb2xvci1iYWNrZ3JvdW5kLXRoZW1lLWxpZ2h0OiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxuICAgIC0tY29sb3ItdGV4dC1yZWQ6IHJnYigyNDAsIDg0LCA4NCk7XFxuICAgIC0tY29sb3ItdGV4dC1ibHVlOiByZ2IoNDgsIDcxLCA5NCk7XFxuICAgIC0tY29sb3ItdGV4dC1saWdodC1ncmF5OiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHdpZHRoOiAxMjIwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZC10aGVtZS1kYXJrKTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcmVkKTtcXG59XFxuXFxuI2xvZ28tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2xvZ28tY29udGFpbmVyID4gcCB7XFxuICAgIG1hcmdpbjogMC41cmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtdGhlbWUtbGlnaHQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuI2dldC13ZWF0aGVyLWRhdGEge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkaXNwbGF5LWZvcm0tZXJyb3JzID4gc3BhbiB7XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1yZWQpO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI2dldC13ZWF0aGVyLWRhdGEgPiBkaXYge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTsgICAgXFxufVxcblxcbmlucHV0IHtcXG4gICAgaGVpZ2h0OiAxLjVyZW07ICAgIFxcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgd2lkdGg6IDdyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi8qIFRvZ2dsZSB0ZW1wZXJhdHVyZSBzdHlsaW5nICovXFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC4yNXJlbTtcXG59XFxuXFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG4gIFxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgbGVmdDogMnB4O1xcbiAgICBib3R0b206IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC1yZWQpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIsIGlucHV0OmhvdmVyLCBidXR0b246Zm9jdXMsIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0tY29sb3ItdGV4dC1yZWQpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5kaXNwbGF5LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Rpc3BsYXktd3JhcHBlciB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiNjdXJyZW50LWxvY2F0aW9uLCAjY3VycmVudC10ZW1wZXJhdHVyZSwgI3RvZ2dsZS10ZW1wZXJhdHVyZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwOyAgICBcXG59XFxuXFxuI2Rpc3BsYXktc3ViaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBsb2FkaW5nIHNwaW5uZXIgKi9cXG4ubG9hZGVyIHtcXG4gICAgYm9yZGVyOiAxNnB4IHNvbGlkIHZhcigtLWNvbG9yLWJhY2tncm91bmQtdGhlbWUtZGFyayk7XFxuICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgdmFyKC0tY29sb3ItdGV4dC1yZWQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG4vKiBFcnJvciBEaXNwbGF5ICovXFxuI2Rpc3BsYXktZXJyb3Ige1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kLXRoZW1lLWRhcmspO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1yZWQpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmZvb3RlciA+IHAge1xcbiAgICBtYXJnaW46IDAuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgKGxvY2F0aW9uID0gJ3Rvcm9udG8nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke3Byb2Nlc3MuZW52LkFQSV9LRVl9JnE9JHtsb2NhdGlvbn0mYXFpPSR7cHJvY2Vzcy5lbnYuQVFJX01PREV9YCwgeyBtb2RlOiAnY29ycycsIGhlYWRlcnM6IHsgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS8nIH0gfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICByZXR1cm4gKFtyZXNwb25zZS5zdGF0dXMsIHdlYXRoZXJEYXRhXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFtyZXNwb25zZS5zdGF0dXNdKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbn07XG5cbmNvbnN0IGZldGNoV2VhdGhlckRhdGEgPSBhc3luYyAoX2xvY2F0aW9uKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgX3dlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoX2xvY2F0aW9uKTtcbiAgICAgICAgaWYgKF93ZWF0aGVyRGF0YVswXSA9PT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUsIHJlZ2lvbiwgY291bnRyeSB9ID0gX3dlYXRoZXJEYXRhWzFdLmxvY2F0aW9uO1xuICAgICAgICAgICAgY29uc3QgeyB0ZW1wX2MsIHRlbXBfZiwgZmVlbHNsaWtlX2MsIGZlZWxzbGlrZV9mIH0gPSBfd2VhdGhlckRhdGFbMV0uY3VycmVudDtcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWUsIHJlZ2lvbiwgY291bnRyeSwgdGVtcF9jLCB0ZW1wX2YsIGZlZWxzbGlrZV9jLCBmZWVsc2xpa2VfZiB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICh7IGVycm9yOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcnLCBzdGF0dXM6IF93ZWF0aGVyRGF0YVswXSB9KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGZldGNoV2VhdGhlckRhdGEgfTtcbiIsImNvbnN0IHZhbGlkYXRlSW5wdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgaW5wdXRTZWFyY2hMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpO1xuICAgIGNvbnN0IHNwYW5FcnJvckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzcGxheS1mb3JtLWVycm9ycyA+IHNwYW4uZXJyb3InKTtcbiAgICBjb25zdCBmb3JtU2VhcmNoV2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWZvcm0tZXJyb3JzJyk7XG5cbiAgICBjb25zdCBjaGVja0V2ZW50c0xpc3QgPSBbJ2lucHV0JywgJ2ZvY3Vzb3V0J107XG5cbiAgICBjaGVja0V2ZW50c0xpc3QuZm9yRWFjaCgoaW5kaXZpZHVhbEV2ZW50KSA9PiB7XG4gICAgICAgIGlucHV0U2VhcmNoTG9jYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihpbmRpdmlkdWFsRXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaW5wdXRTZWFyY2hMb2NhdGlvbi52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHNob3dFcnJvcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmb3JtU2VhcmNoV2VhdGhlci5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgIGlmICghZm9ybVNlYXJjaFdlYXRoZXIuY2hlY2tWYWxpZGl0eSkge1xuICAgICAgICAgICAgc2hvd0Vycm9ycygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzaG93RXJyb3JzID0gKCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXRTZWFyY2hMb2NhdGlvbi52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIGlucHV0U2VhcmNoTG9jYXRpb24uc2V0Q3VzdG9tVmFsaWRpdHkoJ1BsZWFzZSBwcm92aWRlIGEgbG9jYXRpb24hJyk7XG4gICAgICAgICAgICBzcGFuRXJyb3JEaXNwbGF5LnRleHRDb250ZW50ID0gJ0Vycm9yOiBQbGVhc2UgcHJvdmlkZSBhIGxvY2F0aW9uISc7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXRTZWFyY2hMb2NhdGlvbi52YWxpZGl0eS50b29TaG9ydCkge1xuICAgICAgICAgICAgaW5wdXRTZWFyY2hMb2NhdGlvbi5zZXRDdXN0b21WYWxpZGl0eSgnTG9jYXRpb24gbXVzdCBiZSBhdCBsZWFzdCB0d28gY2hhcmFjdGVycyEnKTtcbiAgICAgICAgICAgIHNwYW5FcnJvckRpc3BsYXkudGV4dENvbnRlbnQgPSAnRXJyb3I6IExvY2F0aW9uIG11c3QgYmUgYXQgbGVhc3QgdHdvIGNoYXJhY3RlcnMhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlucHV0U2VhcmNoTG9jYXRpb24uc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICAgICAgc3BhbkVycm9yRGlzcGxheS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IHZhbGlkYXRlSW5wdXQgfTtcbiIsImltcG9ydCB7IGhvbWVDb250ZW50IH0gZnJvbSAnLi9tb2R1bGVzL2hvbWUuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbndpbmRvdy5jcmVhdGVIb21lQ29udGVudCA9IGhvbWVDb250ZW50O1xuIiwiaW1wb3J0IHsgZmV0Y2hXZWF0aGVyRGF0YSB9IGZyb20gJy4uL2NvbXBvbmVudHMvYXBpLmpzJztcbmltcG9ydCB7IHZhbGlkYXRlSW5wdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL3ZhbGlkYXRlLmpzJztcblxuY29uc3QgaG9tZUNvbnRlbnQgPSAoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGxldCB3ZWF0aGVyRGF0YTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBjcmVhdGVIZWFkZXJDb250ZW50KCk7XG4gICAgICAgIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUhlYWRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlckxvZ29TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckxvZ29TZWN0aW9uLmlkID0gJ2xvZ28tY29udGFpbmVyJztcblxuICAgICAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBoZWFkZXJMb2dvLnRleHRDb250ZW50ID0gXCJNYW52aW5kZXJqaXQncyBXZWF0aGVyIEFwcFwiO1xuICAgICAgICBoZWFkZXJMb2dvU2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkZXJMb2dvKTtcblxuICAgICAgICByZXR1cm4gaGVhZGVyTG9nb1NlY3Rpb247XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZU1haW5FbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluRWxlbWVudCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZVdlYXRoZXJGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybUVsZW1lbnQuaWQgPSAnZ2V0LXdlYXRoZXItZGF0YSc7XG5cbiAgICAgICAgY29uc3QgZm9ybUl0ZW1zID0gY3JlYXRlRm9ybUl0ZW1zKCk7XG4gICAgICAgIGZvcm1FbGVtZW50LmFwcGVuZENoaWxkKGZvcm1JdGVtcyk7XG5cbiAgICAgICAgY29uc3QgZm9ybUVycm9ycyA9IGNyZWF0ZUZvcm1FcnJvclNlY3Rpb24oKTtcbiAgICAgICAgZm9ybUVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9ybUVycm9ycyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50KTtcbiAgICAgICAgc3VibWl0Rm9ybUJlaGF2aW9yKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNyZWF0ZUZvcm1JdGVtcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybUl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzZWFyY2hJbnB1dC50eXBlID0gJ3NlYXJjaCc7XG4gICAgICAgIHNlYXJjaElucHV0LmlkID0gJ2xvY2F0aW9uJztcbiAgICAgICAgc2VhcmNoSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBzZWFyY2hJbnB1dC5taW5MZW5ndGggPSAnMic7XG4gICAgICAgIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIGxvY2F0aW9uIGhlcmUnO1xuICAgICAgICBmb3JtSXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzZWFyY2hTdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzZWFyY2hTdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU2VhcmNoJztcbiAgICAgICAgZm9ybUl0ZW1XcmFwcGVyLmFwcGVuZENoaWxkKHNlYXJjaFN1Ym1pdEJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIGZvcm1JdGVtV3JhcHBlcjtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlRm9ybUVycm9yU2VjdGlvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybUVycm9yV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3JtRXJyb3JXcmFwcGVyLmlkID0gJ2Rpc3BsYXktZm9ybS1lcnJvcnMnO1xuXG4gICAgICAgIGNvbnN0IGZvcm1FcnJvclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGZvcm1FcnJvclNwYW4uY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICAgICAgZm9ybUVycm9yU3Bhbi5hcmlhTGl2ZSA9ICdwb2xpdGUnO1xuXG4gICAgICAgIGZvcm1FcnJvcldyYXBwZXIuYXBwZW5kQ2hpbGQoZm9ybUVycm9yU3Bhbik7XG4gICAgICAgIHJldHVybiBmb3JtRXJyb3JXcmFwcGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVUb2dnbGVTd2l0Y2ggPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZVRlbXBlcmF0dXJlU2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZ2dsZVRlbXBlcmF0dXJlU2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlci1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0b2dnbGVUZW1wZXJhdHVyZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0b2dnbGVUZW1wZXJhdHVyZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3dpdGNoJyk7XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlVGVtcGVyYXR1cmVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRvZ2dsZVRlbXBlcmF0dXJlQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIHRvZ2dsZVRlbXBlcmF0dXJlQ2hlY2tib3guaWQgPSAndGVtcC11bml0JztcbiAgICAgICAgdG9nZ2xlVGVtcGVyYXR1cmVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBwb3B1bGF0ZVRlbXBlcmF0dXJlRmllbGRzKHdlYXRoZXJEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvZ2dsZVRlbXBlcmF0dXJlV3JhcHBlci5hcHBlbmRDaGlsZCh0b2dnbGVUZW1wZXJhdHVyZUNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCB0b2dnbGVUZW1wZXJhdHVyZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRvZ2dsZVRlbXBlcmF0dXJlU3Bhbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXInLCAncm91bmQnKTtcbiAgICAgICAgdG9nZ2xlVGVtcGVyYXR1cmVXcmFwcGVyLmFwcGVuZENoaWxkKHRvZ2dsZVRlbXBlcmF0dXJlU3Bhbik7XG5cbiAgICAgICAgdG9nZ2xlVGVtcGVyYXR1cmVTbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlVGVtcGVyYXR1cmVXcmFwcGVyKTtcblxuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZVVuaXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRlbXBlcmF0dXJlVW5pdExhYmVsLmlkID0gJ2xhYmVsLXRlbXAtdW5pdCc7XG4gICAgICAgIHRlbXBlcmF0dXJlVW5pdExhYmVsLnRleHRDb250ZW50ID0gJ0NoYW5nZSBVbml0JztcbiAgICAgICAgdG9nZ2xlVGVtcGVyYXR1cmVTbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcGVyYXR1cmVVbml0TGFiZWwpO1xuXG4gICAgICAgIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgICAgICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZCh0b2dnbGVUZW1wZXJhdHVyZVNsaWRlckNvbnRhaW5lcik7XG4gICAgfTtcblxuICAgIGNvbnN0IHN1Ym1pdEZvcm1CZWhhdmlvciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0LXdlYXRoZXItZGF0YScpO1xuICAgICAgICBmb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHJlc2V0RXJyb3IoKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJykudmFsdWU7XG4gICAgICAgICAgICBwb3B1bGF0ZVdlYXRoZXJEaXNwbGF5KGxvY2F0aW9uKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVXZWF0aGVyRGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpc3BsYXlXcmFwcGVyLmlkID0gJ2Rpc3BsYXktd3JhcHBlcic7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUhlYWRlciA9IGNyZWF0ZVdlYXRoZXJEaXNwbGF5SGVhZGVyKCk7XG4gICAgICAgIGRpc3BsYXlXcmFwcGVyLmFwcGVuZENoaWxkKGRpc3BsYXlIZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXlTdWJoZWFkZXIgPSBjcmVhdGVXZWF0aGVyRGlzcGxheVN1YmhlYWRlcigpO1xuICAgICAgICBkaXNwbGF5V3JhcHBlci5hcHBlbmRDaGlsZChkaXNwbGF5U3ViaGVhZGVyKTtcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoZGlzcGxheVdyYXBwZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVXZWF0aGVyRGlzcGxheUhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGxheUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNwbGF5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXktaGVhZGVyJyk7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgZGlzcGxheUxvY2F0aW9uLmlkID0gJ2N1cnJlbnQtbG9jYXRpb24nO1xuICAgICAgICBkaXNwbGF5SGVhZGVyLmFwcGVuZENoaWxkKGRpc3BsYXlMb2NhdGlvbik7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheUN1cnJlbnRUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNwbGF5Q3VycmVudFRlbXBlcmF0dXJlLmlkID0gJ2N1cnJlbnQtdGVtcGVyYXR1cmUnO1xuICAgICAgICBkaXNwbGF5SGVhZGVyLmFwcGVuZENoaWxkKGRpc3BsYXlDdXJyZW50VGVtcGVyYXR1cmUpO1xuXG4gICAgICAgIHJldHVybiBkaXNwbGF5SGVhZGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVXZWF0aGVyRGlzcGxheVN1YmhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGxheVN1YmhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNwbGF5U3ViaGVhZGVyLmlkID0gJ2Rpc3BsYXktc3ViaGVhZGVyJztcblxuICAgICAgICBjb25zdCBkaXNwbGF5UmVnaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkaXNwbGF5UmVnaW9uLmlkID0gJ2Rpc3BsYXktcmVnaW9uJztcbiAgICAgICAgZGlzcGxheVN1YmhlYWRlci5hcHBlbmRDaGlsZChkaXNwbGF5UmVnaW9uKTtcblxuICAgICAgICBjb25zdCBkaXNwbGF5RmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkaXNwbGF5RmVlbHNMaWtlLmlkID0gJ2ZlZWxzLWxpa2UnO1xuICAgICAgICBkaXNwbGF5U3ViaGVhZGVyLmFwcGVuZENoaWxkKGRpc3BsYXlGZWVsc0xpa2UpO1xuXG4gICAgICAgIHJldHVybiBkaXNwbGF5U3ViaGVhZGVyO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVFcnJvckVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlcnJvckVsZW1lbnQuaWQgPSAnZGlzcGxheS1lcnJvcic7XG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAnaW52YWxpZCcpO1xuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd0Vycm9yID0gKGVycm9yLCBzdGF0dXMpID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktZXJyb3InKTtcbiAgICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtlcnJvcn0sIGNvZGU6ICR7c3RhdHVzfWA7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0RXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWVycm9yJyk7XG4gICAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfTtcblxuICAgIGNvbnN0IHBvcHVsYXRlV2VhdGhlckRpc3BsYXkgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgICAgICAgdG9nZ2xlTG9hZGluZ1NwaW5uZXIodHJ1ZSk7XG4gICAgICAgIHRvZ2dsZVRlbXBlcmF0dXJlRGlzcGxheShmYWxzZSk7XG5cbiAgICAgICAgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbiAgICAgICAgaWYgKHdlYXRoZXJEYXRhLmVycm9yKSB7XG4gICAgICAgICAgICB0b2dnbGVMb2FkaW5nU3Bpbm5lcihmYWxzZSk7XG4gICAgICAgICAgICB0b2dnbGVUZW1wZXJhdHVyZURpc3BsYXkoZmFsc2UpO1xuICAgICAgICAgICAgc2hvd0Vycm9yKHdlYXRoZXJEYXRhLmVycm9yLCB3ZWF0aGVyRGF0YS5zdGF0dXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9nZ2xlTG9hZGluZ1NwaW5uZXIoZmFsc2UpO1xuICAgICAgICB0b2dnbGVUZW1wZXJhdHVyZURpc3BsYXkodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtbG9jYXRpb24nKTtcbiAgICAgICAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubmFtZTtcblxuICAgICAgICBjb25zdCBkaXNwbGF5UmVnaW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpc3BsYXktcmVnaW9uJyk7XG4gICAgICAgIGRpc3BsYXlSZWdpb24udGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS5yZWdpb259LCAke3dlYXRoZXJEYXRhLmNvdW50cnl9YDtcblxuICAgICAgICBwb3B1bGF0ZVRlbXBlcmF0dXJlRmllbGRzKHdlYXRoZXJEYXRhKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcG9wdWxhdGVUZW1wZXJhdHVyZUZpZWxkcyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZVRlbXBlcmF0dXJlQ2hlY2tib3hTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcC11bml0JykuY2hlY2tlZDtcbiAgICAgICAgY29uc3QgbG9jYXRpb25UZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtdGVtcGVyYXR1cmUnKTtcbiAgICAgICAgbG9jYXRpb25UZW1wLnRleHRDb250ZW50ID0gdG9nZ2xlVGVtcGVyYXR1cmVDaGVja2JveFN0YXR1cyA/IGAke2RhdGEudGVtcF9mfVxcdTAwQjBGYCA6IGAke2RhdGEudGVtcF9jfVxcdTAwQjBDYDtcbiAgICAgICAgY29uc3QgZGlzcGxheUZlZWxzTGlrZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVscy1saWtlJyk7XG4gICAgICAgIGRpc3BsYXlGZWVsc0xpa2UudGV4dENvbnRlbnQgPSB0b2dnbGVUZW1wZXJhdHVyZUNoZWNrYm94U3RhdHVzID8gYEZlZWxzIExpa2U6ICR7ZGF0YS5mZWVsc2xpa2VfZn1cXHUwMEIwRmAgOiBgRmVlbHMgTGlrZTogJHtkYXRhLmZlZWxzbGlrZV9jfVxcdTAwQjBDYDtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlTG9hZGluZ1NwaW5uZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdTcGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2xvYWRlcicsICdoaWRkZW4nKTtcblxuICAgICAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kQ2hpbGQobG9hZGluZ1NwaW5uZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVMb2FkaW5nU3Bpbm5lciA9ICh2aXNpYmlsaXR5U3RhdHVzID0gZmFsc2UpID0+IHtcbiAgICAgICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XG4gICAgICAgIHZpc2liaWxpdHlTdGF0dXMgPyBsb2FkaW5nU3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSA6IGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVUZW1wZXJhdHVyZURpc3BsYXkgPSAodmlzaWJpbGl0eVN0YXR1cyA9IHRydWUpID0+IHtcbiAgICAgICAgY29uc3QgdGVtcGVyYXR1cmVEaXNwbGF5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LXdyYXBwZXInKTtcbiAgICAgICAgdmlzaWJpbGl0eVN0YXR1cyA/IHRlbXBlcmF0dXJlRGlzcGxheUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykgOiB0ZW1wZXJhdHVyZURpc3BsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvb3RlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcblxuICAgICAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBmb290ZXJUZXh0LnRleHRDb250ZW50ID0gJ1xcdTAwQTkgTWFudmluZGVyaml0IDIwMjMnO1xuICAgICAgICBmb290ZXJFbGVtZW50LmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyRWxlbWVudCk7XG4gICAgfTtcblxuICAgIGNyZWF0ZUhlYWRlcigpO1xuICAgIGNyZWF0ZU1haW5FbGVtZW50KCk7XG4gICAgY3JlYXRlV2VhdGhlckZvcm0oKTtcbiAgICB2YWxpZGF0ZUlucHV0KCk7XG4gICAgY3JlYXRlVG9nZ2xlU3dpdGNoKCk7XG4gICAgY3JlYXRlTG9hZGluZ1NwaW5uZXIoKTtcbiAgICBjcmVhdGVXZWF0aGVyRGlzcGxheSgpO1xuICAgIGNyZWF0ZUVycm9yRWxlbWVudCgpO1xuICAgIHBvcHVsYXRlV2VhdGhlckRpc3BsYXkoKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhvbWVDb250ZW50IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=