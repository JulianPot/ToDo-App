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

var Operations = function Operations() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    statusOpen = _useState2[0],
    setStatusOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addTime = _useState4[0],
    setAddTime = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    timeCounter = _useState6[0],
    setTimeCounter = _useState6[1];
  var addTimeOperation = function addTimeOperation() {
    setStatusOpen(false);
    setAddTime(true);
  };
  var cancelAddTime = function cancelAddTime() {
    setStatusOpen(true);
    setAddTime(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-group list-group-flush"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Wygl\u0105d domy\u015Blny", timeCounter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "badge badge-success badge-pill ml-2"
  }, "time")), statusOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success btn-sm mr-2",
    onClick: addTimeOperation
  }, "Add time", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-clock ml-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash"
  }))), addTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group input-group-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    className: "form-control",
    placeholder: "Spent time in minutes",
    style: {
      "width": "12rem"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-dark",
    onClick: cancelAddTime
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-times false"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Operations);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0956ec61c5a7f7f37b1b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNWY1YjUzN2I4ZmZkMzI0ODY5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQUFDLFNBQUEsR0FBb0NGLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBQ2hDLElBQUFJLFVBQUEsR0FBOEJQLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXRDRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBc0NYLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQTdDRSxXQUFXLEdBQUFELFVBQUE7SUFBRUUsY0FBYyxHQUFBRixVQUFBO0VBRWxDLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztJQUM3QlQsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNwQkksVUFBVSxDQUFDLElBQUksQ0FBQztFQUNsQixDQUFDO0VBRUQsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDMUJWLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkJJLFVBQVUsQ0FBQyxLQUFLLENBQUM7RUFDbkIsQ0FBQztFQUVELG9CQUNFWCwwREFBQTtJQUFJbUIsU0FBUyxFQUFDO0VBQTZCLGdCQUN6Q25CLDBEQUFBO0lBQUltQixTQUFTLEVBQUM7RUFBbUUsZ0JBQy9FbkIsMERBQUEsY0FBSywyQkFDRCxFQUFDYyxXQUFXLGlCQUFJZCwwREFBQTtJQUFNbUIsU0FBUyxFQUFDO0VBQXFDLEdBQUMsTUFBSSxDQUFPLENBQy9FLEVBQ0xiLFVBQVUsaUJBQUlOLDBEQUFBLDJCQUNiQSwwREFBQTtJQUFRbUIsU0FBUyxFQUFDLHFDQUFxQztJQUFDQyxPQUFPLEVBQUVKO0VBQWlCLEdBQUMsVUFFakYsZUFBQWhCLDBEQUFBO0lBQUdtQixTQUFTLEVBQUM7RUFBbUIsRUFBRyxDQUM1QixlQUNUbkIsMERBQUE7SUFBUW1CLFNBQVMsRUFBQztFQUErQixnQkFDL0NuQiwwREFBQTtJQUFHbUIsU0FBUyxFQUFDO0VBQWMsRUFBRyxDQUN2QixDQUNMLEVBQ0xULE9BQU8saUJBQUlWLDBEQUFBLDRCQUNSQSwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQTRCLGdCQUN2Q25CLDBEQUFBO0lBQU9xQixJQUFJLEVBQUMsUUFBUTtJQUFDRixTQUFTLEVBQUMsY0FBYztJQUFDRyxXQUFXLEVBQUMsdUJBQXVCO0lBQUNDLEtBQUssRUFBRTtNQUFDLE9BQU8sRUFBRTtJQUFPO0VBQUUsRUFBRSxlQUM5R3ZCLDBEQUFBO0lBQUttQixTQUFTLEVBQUM7RUFBb0IsZ0JBQy9CbkIsMERBQUE7SUFBUW1CLFNBQVMsRUFBQztFQUF5QixnQkFDdkNuQiwwREFBQTtJQUFHbUIsU0FBUyxFQUFDO0VBQWEsRUFBRSxDQUN2QixlQUNUbkIsMERBQUE7SUFBUW1CLFNBQVMsRUFBQyxzQkFBc0I7SUFBQ0MsT0FBTyxFQUFFSDtFQUFjLGdCQUM1RGpCLDBEQUFBO0lBQUdtQixTQUFTLEVBQUM7RUFBb0IsRUFBRSxDQUM5QixDQUNQLENBQ0osQ0FDSCxDQUNKLENBQ0Y7QUFFVCxDQUFDO0FBRUQsaUVBQWVqQixVQUFVOzs7Ozs7OztVQ2xEekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9PcGVyYXRpb25zLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBPcGVyYXRpb25zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0dXNPcGVuLCBzZXRTdGF0dXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFthZGRUaW1lLCBzZXRBZGRUaW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGltZUNvdW50ZXIsIHNldFRpbWVDb3VudGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBhZGRUaW1lT3BlcmF0aW9uID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzT3BlbihmYWxzZSk7XHJcbiAgICBzZXRBZGRUaW1lKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FuY2VsQWRkVGltZSA9ICgpID0+IHtcclxuICAgIHNldFN0YXR1c09wZW4odHJ1ZSk7XHJcbiAgICBzZXRBZGRUaW1lKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXY+V3lnbMSFZCBkb215xZtsbnlcclxuICAgICAgICAgICAge3RpbWVDb3VudGVyICYmIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+dGltZTwvc3Bhbj59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3N0YXR1c09wZW4gJiYgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLXNtIG1yLTJcIiBvbkNsaWNrPXthZGRUaW1lT3BlcmF0aW9ufT5cclxuICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrIG1sLTFcIiAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiIC8+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAge2FkZFRpbWUgJiYgPGZvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIiBzdHlsZT17e1wid2lkdGhcIjogXCIxMnJlbVwifX0vPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIiBvbkNsaWNrPXtjYW5jZWxBZGRUaW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Zvcm0+fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9ucztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDk1NmVjNjFjNWE3ZjdmMzdiMWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk9wZXJhdGlvbnMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdGF0dXNPcGVuIiwic2V0U3RhdHVzT3BlbiIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiYWRkVGltZSIsInNldEFkZFRpbWUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInRpbWVDb3VudGVyIiwic2V0VGltZUNvdW50ZXIiLCJhZGRUaW1lT3BlcmF0aW9uIiwiY2FuY2VsQWRkVGltZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9