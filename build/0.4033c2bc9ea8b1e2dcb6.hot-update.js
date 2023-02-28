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


var Operation = function Operation(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center",
    key: v.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, v.description, v.timeSpent !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, v.timeSpent, " min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, v.task.status === "open" && !addTimeDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success btn-sm mr-2",
    onClick: showAddTime
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-clock ml-1"
  })), !addTimeDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm",
    onClick: function onClick() {
      return deleteOperation(v.id);
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
    onClick: cancelAddTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false"
  })))))), "))");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2c1bde4fc513fb0f256c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40MDMzYzJiYzllYThiMWUyZGNiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDQTtBQUVuRCxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDcEIsb0JBQ0lQLDBEQUFBO0lBQUlTLFNBQVMsRUFBQztFQUE2QixnQkFDekNULDBEQUFBO0lBQ0VTLFNBQVMsRUFBQyxtRUFBbUU7SUFDN0VDLEdBQUcsRUFBRUMsQ0FBQyxDQUFDQztFQUFHLGdCQUVWWiwwREFBQSxjQUNHVyxDQUFDLENBQUNFLFdBQVcsRUFDYkYsQ0FBQyxDQUFDRyxTQUFTLEtBQUssQ0FBQyxpQkFDaEJkLDBEQUFBO0lBQU1TLFNBQVMsRUFBQztFQUFxQyxHQUNsREUsQ0FBQyxDQUFDRyxTQUFTLEVBQUMsTUFDZixDQUNELENBQ0csZUFDTmQsMERBQUEsY0FDR1csQ0FBQyxDQUFDSSxJQUFJLENBQUNDLE1BQU0sS0FBSyxNQUFNLElBQUksQ0FBQ0MsY0FBYyxpQkFDMUNqQiwwREFBQTtJQUNFUyxTQUFTLEVBQUMscUNBQXFDO0lBQy9DUyxPQUFPLEVBQUVDO0VBQVksR0FDdEIsVUFFQyxlQUFBbkIsMERBQUE7SUFBR1MsU0FBUyxFQUFDO0VBQW1CLEVBQUcsQ0FFdEMsRUFDQSxDQUFDUSxjQUFjLGlCQUNkakIsMERBQUE7SUFDRVMsU0FBUyxFQUFDLCtCQUErQjtJQUN6Q1MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNRSxlQUFlLENBQUNULENBQUMsQ0FBQ0MsRUFBRSxDQUFDO0lBQUE7RUFBQyxnQkFFckNaLDBEQUFBO0lBQUdTLFNBQVMsRUFBQztFQUFjLEVBQUcsQ0FFakMsQ0FDRyxFQUNMUSxjQUFjLGlCQUNiakIsMERBQUEsNEJBQ0VBLDBEQUFBO0lBQUtTLFNBQVMsRUFBQztFQUE0QixnQkFDekNULDBEQUFBO0lBQ0VxQixJQUFJLEVBQUMsUUFBUTtJQUNiWixTQUFTLEVBQUMsY0FBYztJQUN4QmEsV0FBVyxFQUFDLHVCQUF1QjtJQUNuQ0MsS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFRLENBQUU7SUFDMUJDLEtBQUssRUFBRUMsU0FBVTtJQUNqQkMsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLQyxZQUFZLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDTCxLQUFLLENBQUM7SUFBQTtFQUFDLEVBQzlDLGVBQ0Z6QiwwREFBQTtJQUFLUyxTQUFTLEVBQUM7RUFBb0IsZ0JBQ2pDVCwwREFBQTtJQUNFUyxTQUFTLEVBQUMseUJBQXlCO0lBQ25DUyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1hLE9BQU8sQ0FBQ3BCLENBQUMsQ0FBQ0MsRUFBRSxDQUFDO0lBQUE7RUFBQyxnQkFFN0JaLDBEQUFBO0lBQUdTLFNBQVMsRUFBQztFQUFhLEVBQUcsQ0FDdEIsZUFDVFQsMERBQUE7SUFDRVMsU0FBUyxFQUFDLHNCQUFzQjtJQUNoQ1MsT0FBTyxFQUFFYztFQUFjLGdCQUV2QmhDLDBEQUFBO0lBQUdTLFNBQVMsRUFBQztFQUFvQixFQUFHLENBQzdCLENBQ0wsQ0FDRixDQUVULENBQ0UsTUFFVCxDQUFLO0FBRVgsQ0FBQztBQUVELGlFQUFlSixTQUFTOzs7Ozs7OztVQ3ZFeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBUElfS0VZLCBBUElfVVJMIH0gZnJvbSBcIi4vQVBJL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgT3BlcmF0aW9uID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgIGtleT17di5pZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7di5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICB7di50aW1lU3BlbnQgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAge3YudGltZVNwZW50fSBtaW5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7di50YXNrLnN0YXR1cyA9PT0gXCJvcGVuXCIgJiYgIWFkZFRpbWVEaXNwbGF5ICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93QWRkVGltZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrIG1sLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7IWFkZFRpbWVEaXNwbGF5ICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVPcGVyYXRpb24odi5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2FkZFRpbWVEaXNwbGF5ICYmIChcclxuICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNwZW50IHRpbWUgaW4gbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaW1lSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRpbWUodi5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbEFkZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpXHJcbiAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYzFiZGU0ZmM1MTNmYjBmMjU2Y1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX0tFWSIsIkFQSV9VUkwiLCJPcGVyYXRpb24iLCJfcmVmIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJ2IiwiaWQiLCJkZXNjcmlwdGlvbiIsInRpbWVTcGVudCIsInRhc2siLCJzdGF0dXMiLCJhZGRUaW1lRGlzcGxheSIsIm9uQ2xpY2siLCJzaG93QWRkVGltZSIsImRlbGV0ZU9wZXJhdGlvbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwid2lkdGgiLCJ2YWx1ZSIsInRpbWVJbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInNldFRpbWVJbnB1dCIsInRhcmdldCIsImFkZFRpbWUiLCJjYW5jZWxBZGRUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==