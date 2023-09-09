"use strict";
(self["webpackChunk_2023_top_project_weather_app"] = self["webpackChunk_2023_top_project_weather_app"] || []).push([["main"],{

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeatherData: () => (/* binding */ getWeatherData),
/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)
/* harmony export */ });
const getWeatherData = async (location = 'toronto') => {
    const respone = await fetch(`http://api.weatherapi.com/v1/current.json?key=${"e1367f1dc7d34221a2e203758230709"}&q=${location}&aqi=${"no"}`, { mode: 'cors' });
    const weatherData = await respone.json();
    return weatherData;
};

const processWeatherData = (_weatherData) => {
    console.log(_weatherData);
    const { name, region, country } = _weatherData.location;
    const { temp_c, temp_f, feelslike_c, feelslike_f } = _weatherData.current;
    return { name, region, country, temp_c, temp_f, feelslike_c, feelslike_f };
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/api.js */ "./src/components/api.js");


const data = await (0,_components_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)('vancouver');
console.log((0,_components_api_js__WEBPACK_IMPORTED_MODULE_0__.processWeatherData)(data));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsaUZBQWlGLGlDQUFtQixDQUFDLEtBQUssU0FBUyxPQUFPLElBQW9CLENBQUMsS0FBSyxjQUFjO0FBQ2xLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx3QkFBd0I7QUFDcEMsWUFBWSwyQ0FBMkM7QUFDdkQsYUFBYTtBQUNiOztBQUU4Qzs7Ozs7Ozs7Ozs7Ozs7QUNiMkI7O0FBRXpFLG1CQUFtQixrRUFBYztBQUNqQyxZQUFZLHNFQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovLzIwMjMtdG9wLXByb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9hcGkuanMiLCJ3ZWJwYWNrOi8vMjAyMy10b3AtcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIChsb2NhdGlvbiA9ICd0b3JvbnRvJykgPT4ge1xuICAgIGNvbnN0IHJlc3BvbmUgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PSR7cHJvY2Vzcy5lbnYuQVBJX0tFWX0mcT0ke2xvY2F0aW9ufSZhcWk9JHtwcm9jZXNzLmVudi5BUUlfTU9ERX1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbmUuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbn07XG5cbmNvbnN0IHByb2Nlc3NXZWF0aGVyRGF0YSA9IChfd2VhdGhlckRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhfd2VhdGhlckRhdGEpO1xuICAgIGNvbnN0IHsgbmFtZSwgcmVnaW9uLCBjb3VudHJ5IH0gPSBfd2VhdGhlckRhdGEubG9jYXRpb247XG4gICAgY29uc3QgeyB0ZW1wX2MsIHRlbXBfZiwgZmVlbHNsaWtlX2MsIGZlZWxzbGlrZV9mIH0gPSBfd2VhdGhlckRhdGEuY3VycmVudDtcbiAgICByZXR1cm4geyBuYW1lLCByZWdpb24sIGNvdW50cnksIHRlbXBfYywgdGVtcF9mLCBmZWVsc2xpa2VfYywgZmVlbHNsaWtlX2YgfTtcbn07XG5cbmV4cG9ydCB7IGdldFdlYXRoZXJEYXRhLCBwcm9jZXNzV2VhdGhlckRhdGEgfTtcbiIsImltcG9ydCB7IGdldFdlYXRoZXJEYXRhLCBwcm9jZXNzV2VhdGhlckRhdGEgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBpLmpzJztcblxuY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXJEYXRhKCd2YW5jb3V2ZXInKTtcbmNvbnNvbGUubG9nKHByb2Nlc3NXZWF0aGVyRGF0YShkYXRhKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=