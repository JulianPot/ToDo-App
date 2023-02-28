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
  var addOperationView = function addOperationView() {
    setAddView(true);
  };
  var finishTask = function finishTask() {};
  var deleteTask = function deleteTask() {};
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7fdafa76ab12ca3c9177")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUvQixlQUFBZCwwREFBQTtJQUFHYyxTQUFTLEVBQUM7RUFBeUIsRUFBRyxDQUNsQyxDQUNMLENBQ0YsQ0FDRCxDQUVWLENBQ087QUFFdEIsQ0FBQztBQUVELGlFQUFlWixJQUFJOzs7Ozs7OztVQzlFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGFzayA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFthZGRWaWV3LCBzZXRBZGRWaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBhZGRPcGVyYXRpb25WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFkZFZpZXcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluaXNoVGFzayA9ICgpID0+IHt9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHt9XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+e2RhdGEudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXR1cyA9PT0gXCJvcGVuXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZE9wZXJhdGlvblZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoVGFzayhkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHthZGRWaWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gYWRkT3BlcmF0aW9uKGRhdGEuaWQsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRpb25EZXNjcmlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9wZXJhdGlvbkRlc2NyaXAoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5vdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2ZkYWZhNzZhYjEyY2EzYzkxNzdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhc2siLCJfcmVmIiwiZGF0YSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFZpZXciLCJzZXRBZGRWaWV3IiwiYWRkT3BlcmF0aW9uVmlldyIsImZpbmlzaFRhc2siLCJkZWxldGVUYXNrIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImtleSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIkZyYWdtZW50Iiwib25DbGljayIsIm9uU3VibWl0IiwiZSIsImFkZE9wZXJhdGlvbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib3BlcmF0aW9uRGVzY3JpcCIsIm9uQ2hhbmdlIiwic2V0T3BlcmF0aW9uRGVzY3JpcCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=