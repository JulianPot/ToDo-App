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
/******/ 	__webpack_require__.h = () => ("3f623e7c5f2d7ae66315")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRVY7RUFBWSxnQkFFckJqQiwwREFBQTtJQUFHb0IsU0FBUyxFQUFDO0VBQW9CLEVBQUcsQ0FDN0IsQ0FDTCxDQUNGLENBRVQsQ0FDRSxDQUNKO0FBRVgsQ0FBQztBQUVELGlFQUFlZixTQUFTOzs7Ozs7OztVQ2hGeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBUElfS0VZLCBBUElfVVJMIH0gZnJvbSBcIi4vQVBJL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgT3BlcmF0aW9uID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2FkZFRpbWVEaXNwbGF5LCBzZXRBZGRUaW1lRGlzcGxheV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdGltZUlucHV0LCBzZXRUaW1lSW5wdXRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FkZFRpbWUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkVGltZURpc3BsYXkoIWFkZFRpbWVEaXNwbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVPcGVyYXRpb24gPSAoKSA9PiB7fVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAga2V5PXtkYXRhLmlkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHtkYXRhLnRpbWVTcGVudCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS50aW1lU3BlbnR9IG1pblxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtkYXRhLnRhc2suc3RhdHVzID09PSBcIm9wZW5cIiAmJiAhYWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBZGRUaW1lfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgdGltZVxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHshYWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU9wZXJhdGlvbihkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7YWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMnJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVGltZSh2LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0FkZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb247IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2Y2MjNlN2M1ZjJkN2FlNjYzMTVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSV9LRVkiLCJBUElfVVJMIiwiT3BlcmF0aW9uIiwiX3JlZiIsImRhdGEiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhZGRUaW1lRGlzcGxheSIsInNldEFkZFRpbWVEaXNwbGF5IiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJ0aW1lSW5wdXQiLCJzZXRUaW1lSW5wdXQiLCJzaG93QWRkVGltZSIsImRlbGV0ZU9wZXJhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJpZCIsImRlc2NyaXB0aW9uIiwidGltZVNwZW50IiwidGFzayIsInN0YXR1cyIsIm9uQ2xpY2siLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJhZGRUaW1lIiwidiJdLCJzb3VyY2VSb290IjoiIn0=