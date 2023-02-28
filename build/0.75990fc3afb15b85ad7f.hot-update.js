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
  var _useState = useState(false),
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
/******/ 	__webpack_require__.h = () => ("016093851104382d6304")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2V9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGFzayA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFthZGRWaWV3LCBzZXRBZGRWaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCIga2V5PXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT57ZGF0YS50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e2RhdGEuZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzID09PSBcIm9wZW5cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbSBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkT3BlcmF0aW9uVmlld31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hPcGVyYXRpb24oZGF0YS50aXRsZSwgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICB7bm9PcGVyYXRpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2soZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoIGZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHthZGRWaWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gYWRkT3BlcmF0aW9uKGRhdGEuaWQsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRpb25EZXNjcmlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9wZXJhdGlvbkRlc2NyaXAoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5vdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDxPcGVyYXRpb25zIGlkVGFzaz17ZGF0YS5pZH0gLz5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAxNjA5Mzg1MTEwNDM4MmQ2MzA0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlIiwiVGFzayIsIl9yZWYiLCJkYXRhIiwiX3VzZVN0YXRlIiwidXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhZGRWaWV3Iiwic2V0QWRkVmlldyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJhZGRPcGVyYXRpb25WaWV3IiwiZmluaXNoT3BlcmF0aW9uIiwibm9PcGVyYXRpb25zIiwiZGVsZXRlVGFzayIsIm9uU3VibWl0IiwiZSIsImFkZE9wZXJhdGlvbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib3BlcmF0aW9uRGVzY3JpcCIsIm9uQ2hhbmdlIiwic2V0T3BlcmF0aW9uRGVzY3JpcCIsInRhcmdldCIsIk9wZXJhdGlvbnMiLCJpZFRhc2siXSwic291cmNlUm9vdCI6IiJ9