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
  console.log(data);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    addView = _useState2[0],
    setAddView = _useState2[1];
  var addOperationView = function addOperationView() {
    setAddView(true);
  };
  var finishTask = function finishTask() {};
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
  }))), noOperations && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm ml-2",
    onClick: function onClick() {
      return deleteTask(data.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash false"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("85d9159f1ca3e91ae694")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZmJlOTBlYTY5ZjUyMWM2ODdkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDZkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUNqQixJQUFBRyxTQUFBLEdBQThCTiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBTyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF0Q0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUUxQixJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7SUFDM0JELFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDcEIsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVMsQ0FBQyxDQUFDO0VBRTNCLG9CQUNRYiwwREFBQTtJQUFTZSxTQUFTLEVBQUMscUJBQXFCO0lBQUNDLEdBQUcsRUFBRVosSUFBSSxDQUFDYTtFQUFHLGdCQUNwRGpCLDBEQUFBO0lBQUtlLFNBQVMsRUFBQztFQUErRCxnQkFDNUVmLDBEQUFBLDJCQUNFQSwwREFBQSxhQUFLSSxJQUFJLENBQUNjLEtBQUssQ0FBTSxlQUNyQmxCLDBEQUFBO0lBQUllLFNBQVMsRUFBQztFQUEwQixHQUFFWCxJQUFJLENBQUNlLFdBQVcsQ0FBTSxDQUM1RCxlQUNObkIsMERBQUEsY0FDR0ksSUFBSSxDQUFDZ0IsTUFBTSxLQUFLLE1BQU0saUJBQ3JCcEIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBO0lBQ0VlLFNBQVMsRUFBQywwQkFBMEI7SUFDcENPLE9BQU8sRUFBRVY7RUFBaUIsR0FDM0IsZUFFQyxlQUFBWiwwREFBQTtJQUFHZSxTQUFTLEVBQUM7RUFBeUIsRUFBSyxDQUNwQyxlQUNUZiwwREFBQTtJQUNFZSxTQUFTLEVBQUMscUJBQXFCO0lBQy9CTyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQ1BULFVBQVUsQ0FBQ1QsSUFBSSxDQUFDYyxLQUFLLEVBQUVkLElBQUksQ0FBQ2UsV0FBVyxFQUFFZixJQUFJLENBQUNhLEVBQUUsQ0FBQztJQUFBO0VBQ2xELEdBQ0YsUUFFQyxlQUFBakIsMERBQUE7SUFBR2UsU0FBUyxFQUFDO0VBQXFCLEVBQUssQ0FDaEMsQ0FFWixFQUVBUSxZQUFZLGlCQUNYdkIsMERBQUE7SUFDRWUsU0FBUyxFQUFDLG9DQUFvQztJQUM5Q08sT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNRSxVQUFVLENBQUNwQixJQUFJLENBQUNhLEVBQUUsQ0FBQztJQUFBO0VBQUMsZ0JBRW5DakIsMERBQUE7SUFBR2UsU0FBUyxFQUFDO0VBQW9CLEVBQUcsQ0FFdkMsQ0FDRyxDQUNGLENBc0JFO0FBRXRCLENBQUM7QUFFRCxpRUFBZWIsSUFBSTs7Ozs7Ozs7VUM1RW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvVGFzay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRhc2sgPSAoe2RhdGF9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnN0IFthZGRWaWV3LCBzZXRBZGRWaWV3XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBhZGRPcGVyYXRpb25WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFkZFZpZXcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluaXNoVGFzayA9ICgpID0+IHt9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+e2RhdGEudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXR1cyA9PT0gXCJvcGVuXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZE9wZXJhdGlvblZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoVGFzayhkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbmlzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYXJjaGl2ZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgIHtub09wZXJhdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIHthZGRWaWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gYWRkT3BlcmF0aW9uKGRhdGEuaWQsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRpb25EZXNjcmlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9wZXJhdGlvbkRlc2NyaXAoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5vdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg1ZDkxNTlmMWNhM2U5MWFlNjk0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJUYXNrIiwiX3JlZiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWRkVmlldyIsInNldEFkZFZpZXciLCJhZGRPcGVyYXRpb25WaWV3IiwiZmluaXNoVGFzayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJub09wZXJhdGlvbnMiLCJkZWxldGVUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==