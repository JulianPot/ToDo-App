"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _API_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Operation = function Operation(_ref) {
  var data = _ref.data;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    addTimeDisplay = _useState2[0],
    setAddTimeDisplay = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    timeInput = _useState4[0],
    setTimeInput = _useState4[1];
  var showAddTime = function showAddTime() {
    setAddTimeDisplay(!addTimeDisplay);
  };
  var deleteOperation = function deleteOperation() {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center",
    key: data.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, data.description, data.timeSpent !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, data.timeSpent, " min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, data.task.status === "open" && !addTimeDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success btn-sm mr-2",
    onClick: showAddTime
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-clock ml-1"
  })), !addTimeDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm",
    onClick: function onClick() {
      return deleteOperation(data.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }))), addTimeDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    style: {
      width: "12rem"
    },
    value: timeInput,
    onChange: function onChange(e) {
      return setTimeInput(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success",
    onClick: function onClick() {
      return addTime(v.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-dark",
    onClick: showAddTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e4b81ae8758b8faac1c6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRVY7RUFBWSxnQkFDNURqQiwwREFBQTtJQUFHb0IsU0FBUyxFQUFDO0VBQW9CLEVBQUcsQ0FDN0IsQ0FDTCxDQUNGLENBRVQsQ0FDRSxDQUNGO0FBRVQsQ0FBQztBQUVELGlFQUFlZixTQUFTOzs7Ozs7OztVQzVFeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBUElfS0VZLCBBUElfVVJMIH0gZnJvbSBcIi4vQVBJL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgT3BlcmF0aW9uID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW2FkZFRpbWVEaXNwbGF5LCBzZXRBZGRUaW1lRGlzcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RpbWVJbnB1dCwgc2V0VGltZUlucHV0XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBzaG93QWRkVGltZSA9ICgpID0+IHtcclxuICAgIHNldEFkZFRpbWVEaXNwbGF5KCFhZGRUaW1lRGlzcGxheSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlT3BlcmF0aW9uID0gKCkgPT4ge307XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICBrZXk9e2RhdGEuaWR9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICB7ZGF0YS50aW1lU3BlbnQgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhLnRpbWVTcGVudH0gbWluXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtkYXRhLnRhc2suc3RhdHVzID09PSBcIm9wZW5cIiAmJiAhYWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBZGRUaW1lfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHshYWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU9wZXJhdGlvbihkYXRhLmlkKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7YWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEycmVtXCIgfX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRpbWUodi5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9e3Nob3dBZGRUaW1lfT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9uO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNGI4MWFlODc1OGI4ZmFhYzFjNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX0tFWSIsIkFQSV9VUkwiLCJPcGVyYXRpb24iLCJfcmVmIiwiZGF0YSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFRpbWVEaXNwbGF5Iiwic2V0QWRkVGltZURpc3BsYXkiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInRpbWVJbnB1dCIsInNldFRpbWVJbnB1dCIsInNob3dBZGRUaW1lIiwiZGVsZXRlT3BlcmF0aW9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImtleSIsImlkIiwiZGVzY3JpcHRpb24iLCJ0aW1lU3BlbnQiLCJ0YXNrIiwic3RhdHVzIiwib25DbGljayIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwid2lkdGgiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImFkZFRpbWUiLCJ2Il0sInNvdXJjZVJvb3QiOiIifQ==