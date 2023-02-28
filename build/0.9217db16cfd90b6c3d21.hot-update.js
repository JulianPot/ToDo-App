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
/******/ 	__webpack_require__.h = () => ("d98751b9b8ee1f1099b0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MjE3ZGIxNmNmZDkwYjZjM2QyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDZixJQUFBQyxTQUFBLEdBQThCSiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBSyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF0Q0csT0FBTyxHQUFBRixVQUFBO0lBQUVHLFVBQVUsR0FBQUgsVUFBQTtFQUUxQixJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTLENBQUMsQ0FBQztFQUUzQixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTLENBQUMsQ0FBQztFQUUzQixJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7SUFDM0JILFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDcEIsQ0FBQztFQUVELElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxFQUFFLEVBQUVDLENBQUMsRUFBSyxDQUFDLENBQUM7RUFFbEMsb0JBQ1FmLDBEQUFBO0lBQVNpQixTQUFTLEVBQUMscUJBQXFCO0lBQUNDLEdBQUcsRUFBRWQsSUFBSSxDQUFDVTtFQUFHLGdCQUNwRGQsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUErRCxnQkFDNUVqQiwwREFBQSwyQkFDRUEsMERBQUEsYUFBS0ksSUFBSSxDQUFDZSxLQUFLLENBQU0sZUFDckJuQiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQTBCLEdBQUViLElBQUksQ0FBQ2dCLFdBQVcsQ0FBTSxDQUM1RCxlQUNOcEIsMERBQUEsY0FDR0ksSUFBSSxDQUFDaUIsTUFBTSxLQUFLLE1BQU0saUJBQ3JCckIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBO0lBQ0VpQixTQUFTLEVBQUMsMEJBQTBCO0lBQ3BDTSxPQUFPLEVBQUVYO0VBQWlCLEdBQzNCLGVBRUMsZUFBQVosMERBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUF5QixFQUFLLENBQ3BDLGVBQ1RqQiwwREFBQTtJQUNFaUIsU0FBUyxFQUFDLHFCQUFxQjtJQUMvQk0sT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUNQYixVQUFVLENBQUNOLElBQUksQ0FBQ2UsS0FBSyxFQUFFZixJQUFJLENBQUNnQixXQUFXLEVBQUVoQixJQUFJLENBQUNVLEVBQUUsQ0FBQztJQUFBO0VBQ2xELEdBQ0YsUUFFQyxlQUFBZCwwREFBQTtJQUFHaUIsU0FBUyxFQUFDO0VBQXFCLEVBQUssQ0FDaEMsQ0FFWixlQUVDakIsMERBQUE7SUFDRWlCLFNBQVMsRUFBQyxvQ0FBb0M7SUFDOUNNLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTVosVUFBVSxDQUFDUCxJQUFJLENBQUNVLEVBQUUsQ0FBQztJQUFBO0VBQUMsZ0JBRW5DZCwwREFBQTtJQUFHaUIsU0FBUyxFQUFDO0VBQW9CLEVBQUcsQ0FDN0IsQ0FFUCxDQUNGLEVBQ0xULE9BQU8saUJBQ05SLDBEQUFBO0lBQUtpQixTQUFTLEVBQUM7RUFBVyxnQkFDeEJqQiwwREFBQTtJQUFNd0IsUUFBUSxFQUFFLFNBQUFBLFNBQUNULENBQUM7TUFBQSxPQUFLRixZQUFZLENBQUNULElBQUksQ0FBQ1UsRUFBRSxFQUFFQyxDQUFDLENBQUM7SUFBQTtFQUFDLGdCQUM5Q2YsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFhLGdCQUMxQmpCLDBEQUFBO0lBQ0V5QixJQUFJLEVBQUMsTUFBTTtJQUNYUixTQUFTLEVBQUMsY0FBYztJQUN4QlMsV0FBVyxFQUFDLHVCQUF1QjtJQUNuQ0MsS0FBSyxFQUFFQyxvQkFBcUI7SUFDNUJDLFFBQVEsRUFBRSxTQUFBQSxTQUFDZCxDQUFDO01BQUEsT0FBS2UsbUJBQW1CLENBQUNmLENBQUMsQ0FBQ2dCLE1BQU0sQ0FBQ0osS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUNyRCxlQUNGM0IsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFvQixnQkFDakNqQiwwREFBQTtJQUFRaUIsU0FBUyxFQUFDO0VBQWMsR0FBQyxLQUUvQixlQUFBakIsMERBQUE7SUFBR2lCLFNBQVMsRUFBQztFQUF5QixFQUFHLENBQ2xDLENBQ0wsQ0FDRixDQUNELENBRVYsQ0FDTztBQUV0QixDQUFDO0FBRUQsaUVBQWVmLElBQUk7Ozs7Ozs7O1VDOUVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHtkYXRhfSkgPT4ge1xyXG4gICAgY29uc3QgW2FkZFZpZXcsIHNldEFkZFZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGZpbmlzaFRhc2sgPSAoKSA9PiB7fVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7fVxyXG4gICAgXHJcbiAgICBjb25zdCBhZGRPcGVyYXRpb25WaWV3ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFkZFZpZXcodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkT3BlcmF0aW9uID0gKGlkLCBlKSA9PiB7fVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcmQgbXQtNSBzaGFkb3ctc21cIiBrZXk9e2RhdGEuaWR9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGg1PntkYXRhLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlIHRleHQtbXV0ZWRcIj57ZGF0YS5kZXNjcmlwdGlvbn08L2g2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7ZGF0YS5zdGF0dXMgPT09IFwib3BlblwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gYnRuLXNtIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRPcGVyYXRpb25WaWV3fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgb3BlcmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmlzaFRhc2soZGF0YS50aXRsZSwgZGF0YS5kZXNjcmlwdGlvbiwgZGF0YS5pZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBGaW5pc2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFyY2hpdmUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIGJ0bi1zbSBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2soZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoIGZhbHNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7YWRkVmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGFkZE9wZXJhdGlvbihkYXRhLmlkLCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3BlcmF0aW9uRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3BlcmF0aW9uRGVzY3JpcChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm91dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkOTg3NTFiOWI4ZWUxZjEwOTliMFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVGFzayIsIl9yZWYiLCJkYXRhIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWRkVmlldyIsInNldEFkZFZpZXciLCJmaW5pc2hUYXNrIiwiZGVsZXRlVGFzayIsImFkZE9wZXJhdGlvblZpZXciLCJhZGRPcGVyYXRpb24iLCJpZCIsImUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIkZyYWdtZW50Iiwib25DbGljayIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvcGVyYXRpb25EZXNjcmlwdGlvbiIsIm9uQ2hhbmdlIiwic2V0T3BlcmF0aW9uRGVzY3JpcCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=