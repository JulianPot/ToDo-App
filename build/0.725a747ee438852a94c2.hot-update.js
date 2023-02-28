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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    operationDescription = _useState4[0],
    setOperationDescrip = _useState4[1];
  var finishTask = function finishTask() {};
  var deleteTask = function deleteTask() {};
  var addOperationView = function addOperationView() {
    setAddView(true);
  };
  var addOperation = function addOperation(id, e) {};
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
    value: operationDescription,
    onChange: function onChange(e) {
      return setOperationDescription(e.target.value);
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
/******/ 	__webpack_require__.h = () => ("b496fbe665c4c9eb5e1f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxFQUFDLHVCQUF1QjtJQUNuQ0MsS0FBSyxFQUFFbkIsb0JBQXFCO0lBQzVCb0IsUUFBUSxFQUFFLFNBQUFBLFNBQUNiLENBQUM7TUFBQSxPQUFLYyx1QkFBdUIsQ0FBQ2QsQ0FBQyxDQUFDZSxNQUFNLENBQUNILEtBQUssQ0FBQztJQUFBO0VBQUMsRUFDekQsZUFDRi9CLDBEQUFBO0lBQUtxQixTQUFTLEVBQUM7RUFBb0IsZ0JBQ2pDckIsMERBQUE7SUFBUXFCLFNBQVMsRUFBQztFQUFjLEdBQUMsS0FFL0IsZUFBQXJCLDBEQUFBO0lBQUdxQixTQUFTLEVBQUM7RUFBeUIsRUFBRyxDQUNsQyxDQUNMLENBQ0YsQ0FDRCxDQUVWLENBQ087QUFFdEIsQ0FBQztBQUVELGlFQUFlbkIsSUFBSTs7Ozs7Ozs7VUMvRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvVGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICBjb25zdCBbYWRkVmlldywgc2V0QWRkVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlcmF0aW9uRGVzY3JpcHRpb24sIHNldE9wZXJhdGlvbkRlc2NyaXBdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgZmluaXNoVGFzayA9ICgpID0+IHt9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHt9XHJcbiAgICBcclxuICAgIGNvbnN0IGFkZE9wZXJhdGlvblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkVmlldyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRPcGVyYXRpb24gPSAoaWQsIGUpID0+IHt9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+e2RhdGEudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXR1cyA9PT0gXCJvcGVuXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZE9wZXJhdGlvblZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoVGFzayhkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHthZGRWaWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gYWRkT3BlcmF0aW9uKGRhdGEuaWQsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRpb25EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcGVyYXRpb25EZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm91dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNDk2ZmJlNjY1YzRjOWViNWUxZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGFzayIsIl9yZWYiLCJkYXRhIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWRkVmlldyIsInNldEFkZFZpZXciLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm9wZXJhdGlvbkRlc2NyaXB0aW9uIiwic2V0T3BlcmF0aW9uRGVzY3JpcCIsImZpbmlzaFRhc2siLCJkZWxldGVUYXNrIiwiYWRkT3BlcmF0aW9uVmlldyIsImFkZE9wZXJhdGlvbiIsImlkIiwiZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic2V0T3BlcmF0aW9uRGVzY3JpcHRpb24iLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9