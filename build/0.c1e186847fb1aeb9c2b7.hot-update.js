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
    key: data.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, data.description, v.timeSpent !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bcd7c6f1132861b6d4b7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMWUxODY4NDdmYjFhZWI5YzJiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDQTtBQUVuRCxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDcEIsb0JBQ0lQLDBEQUFBO0lBQUlTLFNBQVMsRUFBQztFQUE2QixnQkFDekNULDBEQUFBO0lBQ0VTLFNBQVMsRUFBQyxtRUFBbUU7SUFDN0VDLEdBQUcsRUFBRUgsSUFBSSxDQUFDSTtFQUFHLGdCQUViWCwwREFBQSxjQUNHTyxJQUFJLENBQUNLLFdBQVcsRUFDaEJDLENBQUMsQ0FBQ0MsU0FBUyxLQUFLLENBQUMsaUJBQ2hCZCwwREFBQTtJQUFNUyxTQUFTLEVBQUM7RUFBcUMsR0FDbERJLENBQUMsQ0FBQ0MsU0FBUyxFQUFDLE1BQ2YsQ0FDRCxDQUNHLGVBQ05kLDBEQUFBLGNBQ0dhLENBQUMsQ0FBQ0UsSUFBSSxDQUFDQyxNQUFNLEtBQUssTUFBTSxJQUFJLENBQUNDLGNBQWMsaUJBQzFDakIsMERBQUE7SUFDRVMsU0FBUyxFQUFDLHFDQUFxQztJQUMvQ1MsT0FBTyxFQUFFQztFQUFZLEdBQ3RCLFVBRUMsZUFBQW5CLDBEQUFBO0lBQUdTLFNBQVMsRUFBQztFQUFtQixFQUFHLENBRXRDLEVBQ0EsQ0FBQ1EsY0FBYyxpQkFDZGpCLDBEQUFBO0lBQ0VTLFNBQVMsRUFBQywrQkFBK0I7SUFDekNTLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUUsZUFBZSxDQUFDUCxDQUFDLENBQUNGLEVBQUUsQ0FBQztJQUFBO0VBQUMsZ0JBRXJDWCwwREFBQTtJQUFHUyxTQUFTLEVBQUM7RUFBYyxFQUFHLENBRWpDLENBQ0csRUFDTFEsY0FBYyxpQkFDYmpCLDBEQUFBLDRCQUNFQSwwREFBQTtJQUFLUyxTQUFTLEVBQUM7RUFBNEIsZ0JBQ3pDVCwwREFBQTtJQUNFcUIsSUFBSSxFQUFDLFFBQVE7SUFDYlosU0FBUyxFQUFDLGNBQWM7SUFDeEJhLFdBQVcsRUFBQyx1QkFBdUI7SUFDbkNDLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUU7SUFBUSxDQUFFO0lBQzFCQyxLQUFLLEVBQUVDLFNBQVU7SUFDakJDLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxDQUFDO01BQUEsT0FBS0MsWUFBWSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUM5QyxlQUNGekIsMERBQUE7SUFBS1MsU0FBUyxFQUFDO0VBQW9CLGdCQUNqQ1QsMERBQUE7SUFDRVMsU0FBUyxFQUFDLHlCQUF5QjtJQUNuQ1MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNYSxPQUFPLENBQUNsQixDQUFDLENBQUNGLEVBQUUsQ0FBQztJQUFBO0VBQUMsZ0JBRTdCWCwwREFBQTtJQUFHUyxTQUFTLEVBQUM7RUFBYSxFQUFHLENBQ3RCLGVBQ1RULDBEQUFBO0lBQ0VTLFNBQVMsRUFBQyxzQkFBc0I7SUFDaENTLE9BQU8sRUFBRWM7RUFBYyxnQkFFdkJoQywwREFBQTtJQUFHUyxTQUFTLEVBQUM7RUFBb0IsRUFBRyxDQUM3QixDQUNMLENBQ0YsQ0FFVCxDQUNFLENBQ0o7QUFFWCxDQUFDO0FBRUQsaUVBQWVKLFNBQVM7Ozs7Ozs7O1VDdEV4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL09wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFQSV9LRVksIEFQSV9VUkwgfSBmcm9tIFwiLi9BUEkvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBPcGVyYXRpb24gPSAoe2RhdGF9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAga2V5PXtkYXRhLmlkfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtkYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgIHt2LnRpbWVTcGVudCAhPT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICB7di50aW1lU3BlbnR9IG1pblxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHt2LnRhc2suc3RhdHVzID09PSBcIm9wZW5cIiAmJiAhYWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dBZGRUaW1lfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgdGltZVxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIHshYWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZU9wZXJhdGlvbih2LmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7YWRkVGltZURpc3BsYXkgJiYgKFxyXG4gICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3BlbnQgdGltZSBpbiBtaW51dGVzXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMnJlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpbWVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpbWVJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkVGltZSh2LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQWRkVGltZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wZXJhdGlvbjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiY2Q3YzZmMTEzMjg2MWI2ZDRiN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQVBJX0tFWSIsIkFQSV9VUkwiLCJPcGVyYXRpb24iLCJfcmVmIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJpZCIsImRlc2NyaXB0aW9uIiwidiIsInRpbWVTcGVudCIsInRhc2siLCJzdGF0dXMiLCJhZGRUaW1lRGlzcGxheSIsIm9uQ2xpY2siLCJzaG93QWRkVGltZSIsImRlbGV0ZU9wZXJhdGlvbiIsInR5cGUiLCJwbGFjZWhvbGRlciIsInN0eWxlIiwid2lkdGgiLCJ2YWx1ZSIsInRpbWVJbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInNldFRpbWVJbnB1dCIsInRhcmdldCIsImFkZFRpbWUiLCJjYW5jZWxBZGRUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==