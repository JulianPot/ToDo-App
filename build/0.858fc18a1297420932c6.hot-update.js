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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, data.description, data.timeSpent !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, data.timeSpent, " min")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, v.task.status === "open" && !addTimeDisplay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("f50eb2ff4b4e9e651d70")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NThmYzE4YTEyOTc0MjA5MzJjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDQTtBQUVuRCxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDcEIsb0JBQ0lQLDBEQUFBO0lBQUlTLFNBQVMsRUFBQztFQUE2QixnQkFDekNULDBEQUFBO0lBQ0VTLFNBQVMsRUFBQyxtRUFBbUU7SUFDN0VDLEdBQUcsRUFBRUgsSUFBSSxDQUFDSTtFQUFHLGdCQUViWCwwREFBQSxjQUNHTyxJQUFJLENBQUNLLFdBQVcsRUFDaEJMLElBQUksQ0FBQ00sU0FBUyxLQUFLLENBQUMsaUJBQ25CYiwwREFBQTtJQUFNUyxTQUFTLEVBQUM7RUFBcUMsR0FDbERGLElBQUksQ0FBQ00sU0FBUyxFQUFDLE1BQ2xCLENBQ0QsQ0FDRyxlQUNOYiwwREFBQSxjQUNHYyxDQUFDLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxLQUFLLE1BQU0sSUFBSSxDQUFDQyxjQUFjLGlCQUMxQ2pCLDBEQUFBO0lBQ0VTLFNBQVMsRUFBQyxxQ0FBcUM7SUFDL0NTLE9BQU8sRUFBRUM7RUFBWSxHQUN0QixVQUVDLGVBQUFuQiwwREFBQTtJQUFHUyxTQUFTLEVBQUM7RUFBbUIsRUFBRyxDQUV0QyxFQUNBLENBQUNRLGNBQWMsaUJBQ2RqQiwwREFBQTtJQUNFUyxTQUFTLEVBQUMsK0JBQStCO0lBQ3pDUyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1FLGVBQWUsQ0FBQ04sQ0FBQyxDQUFDSCxFQUFFLENBQUM7SUFBQTtFQUFDLGdCQUVyQ1gsMERBQUE7SUFBR1MsU0FBUyxFQUFDO0VBQWMsRUFBRyxDQUVqQyxDQUNHLEVBQ0xRLGNBQWMsaUJBQ2JqQiwwREFBQSw0QkFDRUEsMERBQUE7SUFBS1MsU0FBUyxFQUFDO0VBQTRCLGdCQUN6Q1QsMERBQUE7SUFDRXFCLElBQUksRUFBQyxRQUFRO0lBQ2JaLFNBQVMsRUFBQyxjQUFjO0lBQ3hCYSxXQUFXLEVBQUMsdUJBQXVCO0lBQ25DQyxLQUFLLEVBQUU7TUFBRUMsS0FBSyxFQUFFO0lBQVEsQ0FBRTtJQUMxQkMsS0FBSyxFQUFFQyxTQUFVO0lBQ2pCQyxRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsQ0FBQztNQUFBLE9BQUtDLFlBQVksQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNMLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFDOUMsZUFDRnpCLDBEQUFBO0lBQUtTLFNBQVMsRUFBQztFQUFvQixnQkFDakNULDBEQUFBO0lBQ0VTLFNBQVMsRUFBQyx5QkFBeUI7SUFDbkNTLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTWEsT0FBTyxDQUFDakIsQ0FBQyxDQUFDSCxFQUFFLENBQUM7SUFBQTtFQUFDLGdCQUU3QlgsMERBQUE7SUFBR1MsU0FBUyxFQUFDO0VBQWEsRUFBRyxDQUN0QixlQUNUVCwwREFBQTtJQUNFUyxTQUFTLEVBQUMsc0JBQXNCO0lBQ2hDUyxPQUFPLEVBQUVjO0VBQWMsZ0JBRXZCaEMsMERBQUE7SUFBR1MsU0FBUyxFQUFDO0VBQW9CLEVBQUcsQ0FDN0IsQ0FDTCxDQUNGLENBRVQsQ0FDRSxDQUNKO0FBRVgsQ0FBQztBQUVELGlFQUFlSixTQUFTOzs7Ozs7OztVQ3RFeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9PcGVyYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBUElfS0VZLCBBUElfVVJMIH0gZnJvbSBcIi4vQVBJL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgT3BlcmF0aW9uID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7ZGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICB7ZGF0YS50aW1lU3BlbnQgIT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2VzcyBiYWRnZS1waWxsIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEudGltZVNwZW50fSBtaW5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7di50YXNrLnN0YXR1cyA9PT0gXCJvcGVuXCIgJiYgIWFkZFRpbWVEaXNwbGF5ICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93QWRkVGltZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrIG1sLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7IWFkZFRpbWVEaXNwbGF5ICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVPcGVyYXRpb24odi5pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2FkZFRpbWVEaXNwbGF5ICYmIChcclxuICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNwZW50IHRpbWUgaW4gbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJyZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aW1lSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaW1lSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFRpbWUodi5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NhbmNlbEFkZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb247IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjUwZWIyZmY0YjRlOWU2NTFkNzBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFQSV9LRVkiLCJBUElfVVJMIiwiT3BlcmF0aW9uIiwiX3JlZiIsImRhdGEiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwiaWQiLCJkZXNjcmlwdGlvbiIsInRpbWVTcGVudCIsInYiLCJ0YXNrIiwic3RhdHVzIiwiYWRkVGltZURpc3BsYXkiLCJvbkNsaWNrIiwic2hvd0FkZFRpbWUiLCJkZWxldGVPcGVyYXRpb24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwidmFsdWUiLCJ0aW1lSW5wdXQiLCJvbkNoYW5nZSIsImUiLCJzZXRUaW1lSW5wdXQiLCJ0YXJnZXQiLCJhZGRUaW1lIiwiY2FuY2VsQWRkVGltZSJdLCJzb3VyY2VSb290IjoiIn0=