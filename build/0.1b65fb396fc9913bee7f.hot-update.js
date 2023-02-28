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

var Task = function Task(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, d.map(function (v) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      className: "card mt-5 shadow-sm",
      key: v.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card-header d-flex justify-content-between align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, v.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
      className: "card-subtitle text-muted"
    }, v.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, v.status === "open" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn-info btn-sm mr-2",
      onClick: addOperationView
    }, "Add operation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fas fa-plus-circle ml-1"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn-dark btn-sm",
      onClick: function onClick() {
        return finishOperation(v.title, v.description, v.id);
      }
    }, "Finish", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fas fa-archive ml-1"
    }))), noOperations && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "btn btn-outline-danger btn-sm ml-2",
      onClick: function onClick() {
        return deleteTask(v.id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "fas fa-trash false"
    })))), addView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "card-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      onSubmit: function onSubmit(e) {
        return addOperation(v.id, e);
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
      idTask: v.id
    }));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9144fef4db3398d22f03")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2QubWFwKCh2KSA9PiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIiBrZXk9e3YuaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGg1Pnt2LnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57di5kZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7di5zdGF0dXMgPT09IFwib3BlblwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRPcGVyYXRpb25WaWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaE9wZXJhdGlvbih2LnRpdGxlLCB2LmRlc2NyaXB0aW9uLCB2LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIHtub09wZXJhdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayh2LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2FkZFZpZXcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBhZGRPcGVyYXRpb24odi5pZCwgZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3BlcmF0aW9uIGRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29wZXJhdGlvbkRlc2NyaXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3BlcmF0aW9uRGVzY3JpcChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm91dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPE9wZXJhdGlvbnMgaWRUYXNrPXt2LmlkfSAvPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MTQ0ZmVmNGRiMzM5OGQyMmYwM1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhc2siLCJfcmVmIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImQiLCJtYXAiLCJ2IiwiY2xhc3NOYW1lIiwia2V5IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwib25DbGljayIsImFkZE9wZXJhdGlvblZpZXciLCJmaW5pc2hPcGVyYXRpb24iLCJub09wZXJhdGlvbnMiLCJkZWxldGVUYXNrIiwiYWRkVmlldyIsIm9uU3VibWl0IiwiZSIsImFkZE9wZXJhdGlvbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib3BlcmF0aW9uRGVzY3JpcCIsIm9uQ2hhbmdlIiwic2V0T3BlcmF0aW9uRGVzY3JpcCIsInRhcmdldCIsIk9wZXJhdGlvbnMiLCJpZFRhc2siXSwic291cmNlUm9vdCI6IiJ9