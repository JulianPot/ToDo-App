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
  }))))), addView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0da87e5ac07687532d60")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yNGMyZDJkNjUyZTA5YjhkYzNjNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDZixJQUFBQyxTQUFBLEdBQThCSiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF0Q0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUUxQixJQUFNSSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7SUFDM0JELFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDcEIsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVMsQ0FBQyxDQUFDO0VBRTNCLG9CQUNRWCwwREFBQTtJQUFTYSxTQUFTLEVBQUMscUJBQXFCO0lBQUNDLEdBQUcsRUFBRVYsSUFBSSxDQUFDVztFQUFHLGdCQUNwRGYsMERBQUE7SUFBS2EsU0FBUyxFQUFDO0VBQStELGdCQUM1RWIsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUtJLElBQUksQ0FBQ1ksS0FBSyxDQUFNLGVBQ3JCaEIsMERBQUE7SUFBSWEsU0FBUyxFQUFDO0VBQTBCLEdBQUVULElBQUksQ0FBQ2EsV0FBVyxDQUFNLENBQzVELGVBQ05qQiwwREFBQSxjQUNHSSxJQUFJLENBQUNjLE1BQU0sS0FBSyxNQUFNLGlCQUNyQmxCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQTtJQUNFYSxTQUFTLEVBQUMsMEJBQTBCO0lBQ3BDTyxPQUFPLEVBQUVWO0VBQWlCLEdBQzNCLGVBRUMsZUFBQVYsMERBQUE7SUFBR2EsU0FBUyxFQUFDO0VBQXlCLEVBQUssQ0FDcEMsZUFDVGIsMERBQUE7SUFDRWEsU0FBUyxFQUFDLHFCQUFxQjtJQUMvQk8sT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUNQVCxVQUFVLENBQUNQLElBQUksQ0FBQ1ksS0FBSyxFQUFFWixJQUFJLENBQUNhLFdBQVcsRUFBRWIsSUFBSSxDQUFDVyxFQUFFLENBQUM7SUFBQTtFQUNsRCxHQUNGLFFBRUMsZUFBQWYsMERBQUE7SUFBR2EsU0FBUyxFQUFDO0VBQXFCLEVBQUssQ0FDaEMsQ0FFWixDQVVHLENBQ0YsRUFDTEwsT0FBTyxpQkFDTlIsMERBQUE7SUFBS2EsU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCYiwwREFBQTtJQUFNcUIsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLQyxZQUFZLENBQUNuQixJQUFJLENBQUNXLEVBQUUsRUFBRU8sQ0FBQyxDQUFDO0lBQUE7RUFBQyxnQkFDOUN0QiwwREFBQTtJQUFLYSxTQUFTLEVBQUM7RUFBYSxnQkFDMUJiLDBEQUFBO0lBQ0V3QixJQUFJLEVBQUMsTUFBTTtJQUNYWCxTQUFTLEVBQUMsY0FBYztJQUN4QlksV0FBVyxFQUFDLHVCQUF1QjtJQUNuQ0MsS0FBSyxFQUFFQyxnQkFBaUI7SUFDeEJDLFFBQVEsRUFBRSxTQUFBQSxTQUFDTixDQUFDO01BQUEsT0FBS08sbUJBQW1CLENBQUNQLENBQUMsQ0FBQ1EsTUFBTSxDQUFDSixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQ3JELGVBQ0YxQiwwREFBQTtJQUFLYSxTQUFTLEVBQUM7RUFBb0IsZ0JBQ2pDYiwwREFBQTtJQUFRYSxTQUFTLEVBQUM7RUFBYyxHQUFDLEtBRS9CLGVBQUFiLDBEQUFBO0lBQUdhLFNBQVMsRUFBQztFQUF5QixFQUFHLENBQ2xDLENBQ0wsQ0FDRixDQUNELENBRVYsQ0FDTztBQUV0QixDQUFDO0FBRUQsaUVBQWVYLElBQUk7Ozs7Ozs7O1VDM0VuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2FkZFZpZXcsIHNldEFkZFZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGFkZE9wZXJhdGlvblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0QWRkVmlldyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaW5pc2hUYXNrID0gKCkgPT4ge31cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXJkIG10LTUgc2hhZG93LXNtXCIga2V5PXtkYXRhLmlkfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT57ZGF0YS50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZSB0ZXh0LW11dGVkXCI+e2RhdGEuZGVzY3JpcHRpb259PC9oNj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge2RhdGEuc3RhdHVzID09PSBcIm9wZW5cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIGJ0bi1zbSBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkT3BlcmF0aW9uVmlld31cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2hUYXNrKGRhdGEudGl0bGUsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICBcclxuICAgICAgICAgICAgICAgICAgey8qIHtub09wZXJhdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayhkYXRhLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2ggZmFsc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHthZGRWaWV3ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gYWRkT3BlcmF0aW9uKGRhdGEuaWQsIGUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wZXJhdGlvbiBkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcGVyYXRpb25EZXNjcmlwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE9wZXJhdGlvbkRlc2NyaXAoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5vdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGRhODdlNWFjMDc2ODc1MzJkNjBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhc2siLCJfcmVmIiwiZGF0YSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZFZpZXciLCJzZXRBZGRWaWV3IiwiYWRkT3BlcmF0aW9uVmlldyIsImZpbmlzaFRhc2siLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwiRnJhZ21lbnQiLCJvbkNsaWNrIiwib25TdWJtaXQiLCJlIiwiYWRkT3BlcmF0aW9uIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvcGVyYXRpb25EZXNjcmlwIiwib25DaGFuZ2UiLCJzZXRPcGVyYXRpb25EZXNjcmlwIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==