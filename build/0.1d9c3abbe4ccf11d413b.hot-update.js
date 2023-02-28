"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Task = function Task(_ref) {
  var data = _ref.data;
  console.log(data);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    addView = _useState2[0],
    setAddView = _useState2[1];
  var addOperationView = function addOperationView() {
    setAddView(true);
  };
  var finishTask = function finishTask() {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm",
    key: data.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, data.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, data.status === "open" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info btn-sm mr-2",
    onClick: addOperationView
  }, "Add operation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-dark btn-sm",
    onClick: function onClick() {
      return finishTask(data.title, data.description, data.id);
    }
  }, "Finish", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-archive ml-1"
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6fbe90ea69f521c687d1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZDljM2FiYmU0Y2NmMTFkNDEzYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUNqQixJQUFBRyxTQUFBLEdBQThCTiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF0Q0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUUxQixJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7SUFDM0JELFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDcEIsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVMsQ0FBQyxDQUFDO0VBRTNCLG9CQUNRYiwwREFBQTtJQUFTZSxTQUFTLEVBQUMscUJBQXFCO0lBQUNDLEdBQUcsRUFBRVosSUFBSSxDQUFDYTtFQUFHLGdCQUNwRGpCLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUErRCxnQkFDNUVmLDBEQUFBLDJCQUNFQSwwREFBQSxhQUFLSSxJQUFJLENBQUNjLEtBQUssQ0FBTSxlQUNyQmxCLDBEQUFBO0lBQUllLFNBQVMsRUFBQztFQUEwQixHQUFFWCxJQUFJLENBQUNlLFdBQVcsQ0FBTSxDQUM1RCxlQUNObkIsMERBQUEsY0FDR0ksSUFBSSxDQUFDZ0IsTUFBTSxLQUFLLE1BQU0saUJBQ3JCcEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBO0lBQ0VlLFNBQVMsRUFBQywwQkFBMEI7SUFDcENPLE9BQU8sRUFBRVY7RUFBaUIsR0FDM0IsZUFFQyxlQUFBWiwwREFBQTtJQUFHZSxTQUFTLEVBQUM7RUFBeUIsRUFBSyxDQUNwQyxlQUNUZiwwREFBQTtJQUNFZSxTQUFTLEVBQUMscUJBQXFCO0lBQy9CTyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQ1BULFVBQVUsQ0FBQ1QsSUFBSSxDQUFDYyxLQUFLLEVBQUVkLElBQUksQ0FBQ2UsV0FBVyxFQUFFZixJQUFJLENBQUNhLEVBQUUsQ0FBQztJQUFBO0VBQ2xELEdBQ0YsUUFFQyxlQUFBakIsMERBQUE7SUFBR2UsU0FBUyxFQUFDO0VBQXFCLEVBQUssQ0FDaEMsQ0FFWixDQVVHLENBQ0YsQ0FzQkU7QUFFdEIsQ0FBQztBQUVELGlFQUFlYixJQUFJOzs7Ozs7OztVQzVFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGFzayA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc3QgW2FkZFZpZXcsIHNldEFkZFZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGFkZE9wZXJhdGlvblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkVmlldyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaW5pc2hUYXNrID0gKCkgPT4ge31cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCIga2V5PXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT57ZGF0YS50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e2RhdGEuZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzID09PSBcIm9wZW5cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbSBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkT3BlcmF0aW9uVmlld31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hUYXNrKGRhdGEudGl0bGUsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICBcclxuICAgICAgICAgICAgICAgICAgey8qIHtub09wZXJhdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiB7YWRkVmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGFkZE9wZXJhdGlvbihkYXRhLmlkLCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3BlcmF0aW9uRGVzY3JpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcGVyYXRpb25EZXNjcmlwKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlub3V0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZmJlOTBlYTY5ZjUyMWM2ODdkMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGFzayIsIl9yZWYiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFZpZXciLCJzZXRBZGRWaWV3IiwiYWRkT3BlcmF0aW9uVmlldyIsImZpbmlzaFRhc2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiRnJhZ21lbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==