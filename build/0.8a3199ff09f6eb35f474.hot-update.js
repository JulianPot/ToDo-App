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
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }

var Operations = function Operations(_ref) {
  _objectDestructuringEmpty(_ref);
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
      width: "12rem"
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
/******/ 	__webpack_require__.h = () => ("0d2eabefe99664bcaf00")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44YTMxOTlmZjA5ZjZlYjM1ZjQ3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFFeEMsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUFDLElBQUEsRUFBVztFQUFBQyx5QkFBQSxDQUFBRCxJQUFBO0VBQ3pCLElBQUFFLFNBQUEsR0FBb0NKLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBQ2hDLElBQUFJLFVBQUEsR0FBOEJULCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFVLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXRDRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBc0NiLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFjLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQTdDRSxXQUFXLEdBQUFELFVBQUE7SUFBRUUsY0FBYyxHQUFBRixVQUFBO0VBRWxDLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztJQUM3QlQsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNwQkksVUFBVSxDQUFDLElBQUksQ0FBQztFQUNsQixDQUFDO0VBRUQsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDMUJWLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkJJLFVBQVUsQ0FBQyxLQUFLLENBQUM7RUFDbkIsQ0FBQztFQUVELG9CQUNFYiwwREFBQTtJQUFJcUIsU0FBUyxFQUFDO0VBQTZCLGdCQUN6Q3JCLDBEQUFBO0lBQUlxQixTQUFTLEVBQUM7RUFBbUUsZ0JBQy9FckIsMERBQUEsY0FBSywyQkFFSCxFQUFDZ0IsV0FBVyxpQkFDVmhCLDBEQUFBO0lBQU1xQixTQUFTLEVBQUM7RUFBcUMsR0FBQyxNQUFJLENBQzNELENBQ0csRUFDTGIsVUFBVSxpQkFDVFIsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQ0VxQixTQUFTLEVBQUMscUNBQXFDO0lBQy9DQyxPQUFPLEVBQUVKO0VBQWlCLEdBQzNCLFVBRUMsZUFBQWxCLDBEQUFBO0lBQUdxQixTQUFTLEVBQUM7RUFBbUIsRUFBRyxDQUM1QixlQUNUckIsMERBQUE7SUFBUXFCLFNBQVMsRUFBQztFQUErQixnQkFDL0NyQiwwREFBQTtJQUFHcUIsU0FBUyxFQUFDO0VBQWMsRUFBRyxDQUN2QixDQUVaLEVBQ0FULE9BQU8saUJBQ05aLDBEQUFBLDRCQUNFQSwwREFBQTtJQUFLcUIsU0FBUyxFQUFDO0VBQTRCLGdCQUN6Q3JCLDBEQUFBO0lBQ0V1QixJQUFJLEVBQUMsUUFBUTtJQUNiRixTQUFTLEVBQUMsY0FBYztJQUN4QkcsV0FBVyxFQUFDLHVCQUF1QjtJQUNuQ0MsS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFRO0VBQUUsRUFDMUIsZUFDRjFCLDBEQUFBO0lBQUtxQixTQUFTLEVBQUM7RUFBb0IsZ0JBQ2pDckIsMERBQUE7SUFBUXFCLFNBQVMsRUFBQztFQUF5QixnQkFDekNyQiwwREFBQTtJQUFHcUIsU0FBUyxFQUFDO0VBQWEsRUFBRyxDQUN0QixlQUNUckIsMERBQUE7SUFDRXFCLFNBQVMsRUFBQyxzQkFBc0I7SUFDaENDLE9BQU8sRUFBRUg7RUFBYyxnQkFFdkJuQiwwREFBQTtJQUFHcUIsU0FBUyxFQUFDO0VBQW9CLEVBQUcsQ0FDN0IsQ0FDTCxDQUNGLENBRVQsQ0FDRSxDQUNGO0FBRVQsQ0FBQztBQUVELGlFQUFlbkIsVUFBVTs7Ozs7Ozs7VUNwRXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvT3BlcmF0aW9ucy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgT3BlcmF0aW9ucyA9ICh7fSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0dXNPcGVuLCBzZXRTdGF0dXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFthZGRUaW1lLCBzZXRBZGRUaW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGltZUNvdW50ZXIsIHNldFRpbWVDb3VudGVyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBhZGRUaW1lT3BlcmF0aW9uID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzT3BlbihmYWxzZSk7XHJcbiAgICBzZXRBZGRUaW1lKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNhbmNlbEFkZFRpbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0dXNPcGVuKHRydWUpO1xyXG4gICAgc2V0QWRkVGltZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIFd5Z2zEhWQgZG9tecWbbG55XHJcbiAgICAgICAgICB7dGltZUNvdW50ZXIgJiYgKFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzIGJhZGdlLXBpbGwgbWwtMlwiPnRpbWU8L3NwYW4+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtzdGF0dXNPcGVuICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkVGltZU9wZXJhdGlvbn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFkZCB0aW1lXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNsb2NrIG1sLTFcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaFwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7YWRkVGltZSAmJiAoXHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTJyZW1cIiB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYXJrXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQWRkVGltZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9ucztcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGQyZWFiZWZlOTk2NjRiY2FmMDBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk9wZXJhdGlvbnMiLCJfcmVmIiwiX29iamVjdERlc3RydWN0dXJpbmdFbXB0eSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0YXR1c09wZW4iLCJzZXRTdGF0dXNPcGVuIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGRUaW1lIiwic2V0QWRkVGltZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidGltZUNvdW50ZXIiLCJzZXRUaW1lQ291bnRlciIsImFkZFRpbWVPcGVyYXRpb24iLCJjYW5jZWxBZGRUaW1lIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==