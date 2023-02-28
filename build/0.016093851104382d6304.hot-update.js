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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    addView = _useState2[0],
    setAddView = _useState2[1];
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
      return finishOperation(data.title, data.description, data.id);
    }
  }, "Finish", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-archive ml-1"
  }))), noOperations && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm ml-2",
    onClick: function onClick() {
      return deleteTask(data.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash false"
  })))), addView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: function onSubmit(e) {
      return addOperation(data.id, e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Operation description",
    value: operationDescrip,
    onChange: function onChange(e) {
      return setOperationDescrip(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "inout-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info"
  }, "Add", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Operations, {
    idTask: data.id
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e6eda077599ef044367b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2FkZFZpZXcsIHNldEFkZFZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGg1PntkYXRhLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57ZGF0YS5kZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5zdGF0dXMgPT09IFwib3BlblwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRPcGVyYXRpb25WaWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaE9wZXJhdGlvbihkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIHtub09wZXJhdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2FkZFZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBhZGRPcGVyYXRpb24oZGF0YS5pZCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wZXJhdGlvbkRlc2NyaXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3BlcmF0aW9uRGVzY3JpcChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm91dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPE9wZXJhdGlvbnMgaWRUYXNrPXtkYXRhLmlkfSAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTZlZGEwNzc1OTllZjA0NDM2N2JcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhc2siLCJfcmVmIiwiZGF0YSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFZpZXciLCJzZXRBZGRWaWV3IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImtleSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIkZyYWdtZW50Iiwib25DbGljayIsImFkZE9wZXJhdGlvblZpZXciLCJmaW5pc2hPcGVyYXRpb24iLCJub09wZXJhdGlvbnMiLCJkZWxldGVUYXNrIiwib25TdWJtaXQiLCJlIiwiYWRkT3BlcmF0aW9uIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvcGVyYXRpb25EZXNjcmlwIiwib25DaGFuZ2UiLCJzZXRPcGVyYXRpb25EZXNjcmlwIiwidGFyZ2V0IiwiT3BlcmF0aW9ucyIsImlkVGFzayJdLCJzb3VyY2VSb290IjoiIn0=