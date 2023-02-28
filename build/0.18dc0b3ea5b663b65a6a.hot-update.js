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
/******/ 	__webpack_require__.h = () => ("75990fc3afb15b85ad7f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvVGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICBjb25zdCBbYWRkVmlldywgc2V0QWRkVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+e2RhdGEudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXR1cyA9PT0gXCJvcGVuXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZE9wZXJhdGlvblZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoT3BlcmF0aW9uKGRhdGEudGl0bGUsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICBcclxuICAgICAgICAgICAgICAgICAge25vT3BlcmF0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYXNrKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaCBmYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7YWRkVmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGFkZE9wZXJhdGlvbihkYXRhLmlkLCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3BlcmF0aW9uRGVzY3JpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcGVyYXRpb25EZXNjcmlwKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlub3V0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8T3BlcmF0aW9ucyBpZFRhc2s9e2RhdGEuaWR9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NTk5MGZjM2FmYjE1Yjg1YWQ3ZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhc2siLCJfcmVmIiwiZGF0YSIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWRkVmlldyIsInNldEFkZFZpZXciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwiYWRkT3BlcmF0aW9uVmlldyIsImZpbmlzaE9wZXJhdGlvbiIsIm5vT3BlcmF0aW9ucyIsImRlbGV0ZVRhc2siLCJvblN1Ym1pdCIsImUiLCJhZGRPcGVyYXRpb24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9wZXJhdGlvbkRlc2NyaXAiLCJvbkNoYW5nZSIsInNldE9wZXJhdGlvbkRlc2NyaXAiLCJ0YXJnZXQiLCJPcGVyYXRpb25zIiwiaWRUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==