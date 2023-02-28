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

var Operations = function Operations(_ref) {
  var id = _ref.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    operations = _useState2[0],
    setOperations = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    statusOpen = _useState4[0],
    setStatusOpen = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    addTime = _useState6[0],
    setAddTime = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    timeCounter = _useState8[0],
    setTimeCounter = _useState8[1];
  var addTimeOperation = function addTimeOperation() {
    setStatusOpen(false);
    setAddTime(true);
  };
  var cancelAddTime = function cancelAddTime() {
    setStatusOpen(true);
    setAddTime(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Wygl\u0105d domy\u015Blny", timeCounter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, "time")), statusOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success btn-sm mr-2",
    onClick: addTimeOperation
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-clock ml-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }))), addTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    style: {
      width: "12rem"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-dark",
    onClick: cancelAddTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operations);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed2b89b51ea2682effa1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBPcGVyYXRpb25zID0gKHtpZH0pID0+IHtcclxuICAgIGNvbnN0IFtvcGVyYXRpb25zLCBzZXRPcGVyYXRpb25zXSA9IHVzZVN0YXRlKClcclxuICBjb25zdCBbc3RhdHVzT3Blbiwgc2V0U3RhdHVzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbYWRkVGltZSwgc2V0QWRkVGltZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RpbWVDb3VudGVyLCBzZXRUaW1lQ291bnRlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgYWRkVGltZU9wZXJhdGlvbiA9ICgpID0+IHtcclxuICAgIHNldFN0YXR1c09wZW4oZmFsc2UpO1xyXG4gICAgc2V0QWRkVGltZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjYW5jZWxBZGRUaW1lID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzT3Blbih0cnVlKTtcclxuICAgIHNldEFkZFRpbWUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICBXeWdsxIVkIGRvbXnFm2xueVxyXG4gICAgICAgICAge3RpbWVDb3VudGVyICYmIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj50aW1lPC9zcGFuPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7c3RhdHVzT3BlbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFRpbWVPcGVyYXRpb259XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgdGltZVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG9jayBtbC0xXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FkZFRpbWUgJiYgKFxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEycmVtXCIgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbEFkZFRpbWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBmYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbnM7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVkMmI4OWI1MWVhMjY4MmVmZmExXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJPcGVyYXRpb25zIiwiX3JlZiIsImlkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlcmF0aW9ucyIsInNldE9wZXJhdGlvbnMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInN0YXR1c09wZW4iLCJzZXRTdGF0dXNPcGVuIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJhZGRUaW1lIiwic2V0QWRkVGltZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwidGltZUNvdW50ZXIiLCJzZXRUaW1lQ291bnRlciIsImFkZFRpbWVPcGVyYXRpb24iLCJjYW5jZWxBZGRUaW1lIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==