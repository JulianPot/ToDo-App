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
  var showAddTime = function showAddTime() {
    setAddTimeDisplay();
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
/******/ 	__webpack_require__.h = () => ("6c86ac25dbb0d29e3eb7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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czYtcmVhY3QvLi9qcy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBUElfS0VZLCBBUElfVVJMIH0gZnJvbSBcIi4vQVBJL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgT3BlcmF0aW9uID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2FkZFRpbWVEaXNwbGF5LCBzZXRBZGRUaW1lRGlzcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FkZFRpbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkVGltZURpc3BsYXkoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZU9wZXJhdGlvbiA9ICgpID0+IHt9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBrZXk9e2RhdGEuaWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2RhdGEuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAge2RhdGEudGltZVNwZW50ICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLnRpbWVTcGVudH0gbWluXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2RhdGEudGFzay5zdGF0dXMgPT09IFwib3BlblwiICYmICFhZGRUaW1lRGlzcGxheSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbSBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0FkZFRpbWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG9jayBtbC0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgeyFhZGRUaW1lRGlzcGxheSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlT3BlcmF0aW9uKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHthZGRUaW1lRGlzcGxheSAmJiAoXHJcbiAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEycmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGltZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGltZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRUaW1lKHYuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93QWRkVGltZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2Yzg2YWMyNWRiYjBkMjllM2ViN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX0tFWSIsIkFQSV9VUkwiLCJPcGVyYXRpb24iLCJfcmVmIiwiZGF0YSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFRpbWVEaXNwbGF5Iiwic2V0QWRkVGltZURpc3BsYXkiLCJzaG93QWRkVGltZSIsImRlbGV0ZU9wZXJhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJpZCIsImRlc2NyaXB0aW9uIiwidGltZVNwZW50IiwidGFzayIsInN0YXR1cyIsIm9uQ2xpY2siLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwidmFsdWUiLCJ0aW1lSW5wdXQiLCJvbkNoYW5nZSIsImUiLCJzZXRUaW1lSW5wdXQiLCJ0YXJnZXQiLCJhZGRUaW1lIiwidiJdLCJzb3VyY2VSb290IjoiIn0=