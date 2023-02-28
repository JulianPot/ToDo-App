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
/******/ 	__webpack_require__.h = () => ("1189606d4d0e6b2012d1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wOTU2ZWM2MWM1YTdmN2YzN2IxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3ZCLElBQUFDLFNBQUEsR0FBb0NGLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNDRyxVQUFVLEdBQUFGLFVBQUE7SUFBRUcsYUFBYSxHQUFBSCxVQUFBO0VBQ2hDLElBQUFJLFVBQUEsR0FBOEJQLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQXRDRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBc0NYLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQTdDRSxXQUFXLEdBQUFELFVBQUE7SUFBRUUsY0FBYyxHQUFBRixVQUFBO0VBRWxDLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztJQUM3QlQsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUNwQkksVUFBVSxDQUFDLElBQUksQ0FBQztFQUNsQixDQUFDO0VBRUQsSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDMUJWLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkJJLFVBQVUsQ0FBQyxLQUFLLENBQUM7RUFDbkIsQ0FBQztFQUVELG9CQUNFWCwwREFBQTtJQUFJbUIsU0FBUyxFQUFDO0VBQTZCLGdCQUN6Q25CLDBEQUFBO0lBQUltQixTQUFTLEVBQUM7RUFBbUUsZ0JBQy9FbkIsMERBQUEsY0FBSywyQkFFSCxFQUFDYyxXQUFXLGlCQUNWZCwwREFBQTtJQUFNbUIsU0FBUyxFQUFDO0VBQXFDLEdBQUMsTUFBSSxDQUMzRCxDQUNHLEVBQ0xiLFVBQVUsaUJBQ1ROLDBEQUFBLDJCQUNFQSwwREFBQTtJQUNFbUIsU0FBUyxFQUFDLHFDQUFxQztJQUMvQ0MsT0FBTyxFQUFFSjtFQUFpQixHQUMzQixVQUVDLGVBQUFoQiwwREFBQTtJQUFHbUIsU0FBUyxFQUFDO0VBQW1CLEVBQUcsQ0FDNUIsZUFDVG5CLDBEQUFBO0lBQVFtQixTQUFTLEVBQUM7RUFBK0IsZ0JBQy9DbkIsMERBQUE7SUFBR21CLFNBQVMsRUFBQztFQUFjLEVBQUcsQ0FDdkIsQ0FFWixFQUNBVCxPQUFPLGlCQUNOViwwREFBQSw0QkFDRUEsMERBQUE7SUFBS21CLFNBQVMsRUFBQztFQUE0QixnQkFDekNuQiwwREFBQTtJQUNFcUIsSUFBSSxFQUFDLFFBQVE7SUFDYkYsU0FBUyxFQUFDLGNBQWM7SUFDeEJHLFdBQVcsRUFBQyx1QkFBdUI7SUFDbkNDLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUU7SUFBUTtFQUFFLEVBQzFCLGVBQ0Z4QiwwREFBQTtJQUFLbUIsU0FBUyxFQUFDO0VBQW9CLGdCQUNqQ25CLDBEQUFBO0lBQVFtQixTQUFTLEVBQUM7RUFBeUIsZ0JBQ3pDbkIsMERBQUE7SUFBR21CLFNBQVMsRUFBQztFQUFhLEVBQUcsQ0FDdEIsZUFDVG5CLDBEQUFBO0lBQ0VtQixTQUFTLEVBQUMsc0JBQXNCO0lBQ2hDQyxPQUFPLEVBQUVIO0VBQWMsZ0JBRXZCakIsMERBQUE7SUFBR21CLFNBQVMsRUFBQztFQUFvQixFQUFHLENBQzdCLENBQ0wsQ0FDRixDQUVULENBQ0UsQ0FDRjtBQUVULENBQUM7QUFFRCxpRUFBZWpCLFVBQVU7Ozs7Ozs7O1VDcEV6QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL09wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE9wZXJhdGlvbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3N0YXR1c09wZW4sIHNldFN0YXR1c09wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2FkZFRpbWUsIHNldEFkZFRpbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0aW1lQ291bnRlciwgc2V0VGltZUNvdW50ZXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGFkZFRpbWVPcGVyYXRpb24gPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0dXNPcGVuKGZhbHNlKTtcclxuICAgIHNldEFkZFRpbWUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FuY2VsQWRkVGltZSA9ICgpID0+IHtcclxuICAgIHNldFN0YXR1c09wZW4odHJ1ZSk7XHJcbiAgICBzZXRBZGRUaW1lKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgV3lnbMSFZCBkb215xZtsbnlcclxuICAgICAgICAgIHt0aW1lQ291bnRlciAmJiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+dGltZTwvc3Bhbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3N0YXR1c09wZW4gJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbSBtci0yXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXthZGRUaW1lT3BlcmF0aW9ufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkIHRpbWVcclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2xvY2sgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHthZGRUaW1lICYmIChcclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNwZW50IHRpbWUgaW4gbWludXRlc1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMnJlbVwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxBZGRUaW1lfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcGVyYXRpb25zO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMTg5NjA2ZDRkMGU2YjIwMTJkMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9ucyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInN0YXR1c09wZW4iLCJzZXRTdGF0dXNPcGVuIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJhZGRUaW1lIiwic2V0QWRkVGltZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidGltZUNvdW50ZXIiLCJzZXRUaW1lQ291bnRlciIsImFkZFRpbWVPcGVyYXRpb24iLCJjYW5jZWxBZGRUaW1lIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==