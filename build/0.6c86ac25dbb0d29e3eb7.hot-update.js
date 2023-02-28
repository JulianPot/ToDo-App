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
/******/ 	__webpack_require__.h = () => ("0e2e2a1a48e9f17e82cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvT3BlcmF0aW9uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQVBJX0tFWSwgQVBJX1VSTCB9IGZyb20gXCIuL0FQSS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IE9wZXJhdGlvbiA9ICh7ZGF0YX0pID0+IHtcclxuICAgIGNvbnN0IFthZGRUaW1lRGlzcGxheSwgc2V0QWRkVGltZURpc3BsYXldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHNob3dBZGRUaW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFkZFRpbWVEaXNwbGF5KCFhZGRUaW1lRGlzcGxheSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVPcGVyYXRpb24gPSAoKSA9PiB7fVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAga2V5PXtkYXRhLmlkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHtkYXRhLnRpbWVTcGVudCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS50aW1lU3BlbnR9IG1pblxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtkYXRhLnRhc2suc3RhdHVzID09PSBcIm9wZW5cIiAmJiAhYWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBZGRUaW1lfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgdGltZVxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHshYWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU9wZXJhdGlvbihkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7YWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMnJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVGltZSh2LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0FkZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb247IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGUyZTJhMWE0OGU5ZjE3ZTgyY2ZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSV9LRVkiLCJBUElfVVJMIiwiT3BlcmF0aW9uIiwiX3JlZiIsImRhdGEiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhZGRUaW1lRGlzcGxheSIsInNldEFkZFRpbWVEaXNwbGF5Iiwic2hvd0FkZFRpbWUiLCJkZWxldGVPcGVyYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwiaWQiLCJkZXNjcmlwdGlvbiIsInRpbWVTcGVudCIsInRhc2siLCJzdGF0dXMiLCJvbkNsaWNrIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJ3aWR0aCIsInZhbHVlIiwidGltZUlucHV0Iiwib25DaGFuZ2UiLCJlIiwic2V0VGltZUlucHV0IiwidGFyZ2V0IiwiYWRkVGltZSIsInYiXSwic291cmNlUm9vdCI6IiJ9