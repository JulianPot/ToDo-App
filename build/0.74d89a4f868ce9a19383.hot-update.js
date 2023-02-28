"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module ''"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var NewTask = function NewTask() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    description = _useState4[0],
    setDescription = _useState4[1];
  var submitNewTask = function submitNewTask() {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "card-title"
  }, "New task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: submitNewTask
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "title",
    placeholder: "Title",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "form-control",
    name: "description",
    placeholder: "Description",
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info"
  }, "Add task", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _NewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NewTask__WEBPACK_IMPORTED_MODULE_2__["default"], null);
}
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1ce7618560939e7f4b3f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NGQ4OWE0Zjg2OGNlOWExOTM4My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUDtBQUVqQyxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBQ3RCLElBQUFJLFVBQUEsR0FBc0NULCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFVLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQTNDRSxXQUFXLEdBQUFELFVBQUE7SUFBRUUsY0FBYyxHQUFBRixVQUFBO0VBRWxDLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTLENBRTVCLENBQUM7RUFFRCxvQkFDSWQsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFhLGdCQUN4QmhCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBVyxnQkFDdEJoQiwwREFBQTtJQUFJZ0IsU0FBUyxFQUFDO0VBQVksR0FBQyxVQUFRLENBQUssZUFDeENoQiwwREFBQTtJQUFNaUIsUUFBUSxFQUFFSDtFQUFjLGdCQUMxQmQsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFZLGdCQUN2QmhCLDBEQUFBO0lBQU9rQixJQUFJLEVBQUMsTUFBTTtJQUFDRixTQUFTLEVBQUMsY0FBYztJQUFDRyxJQUFJLEVBQUMsT0FBTztJQUFDQyxXQUFXLEVBQUMsT0FBTztJQUFDQyxLQUFLLEVBQUViLEtBQU07SUFBQ2MsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLZCxRQUFRLENBQUNjLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsQ0FDckksZUFDTnJCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBWSxnQkFDdkJoQiwwREFBQTtJQUFPa0IsSUFBSSxFQUFDLE1BQU07SUFBQ0YsU0FBUyxFQUFDLGNBQWM7SUFBQ0csSUFBSSxFQUFDLGFBQWE7SUFBQ0MsV0FBVyxFQUFDLGFBQWE7SUFBQ0MsS0FBSyxFQUFFVCxXQUFZO0lBQUNVLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxDQUFDO01BQUEsT0FBS1YsY0FBYyxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFFLENBQzdKLGVBQ05yQiwwREFBQTtJQUFRZ0IsU0FBUyxFQUFDO0VBQWMsR0FBQyxVQUNqQyxlQUFBaEIsMERBQUE7SUFBR2dCLFNBQVMsRUFBQztFQUF5QixFQUFLLENBQ2xDLENBQ04sQ0FDTCxDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlWixPQUFPOzs7Ozs7Ozs7Ozs7QUMvQkk7QUFDb0I7QUFDZDtBQUVoQyxTQUFTc0IsR0FBR0EsQ0FBQSxFQUFHO0VBQ2Isb0JBQU8xQiwwREFBQSxDQUFDSSxnREFBTyxPQUFHO0FBQ3BCO0FBRUEsSUFBTXVCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR0wsNERBQVUsQ0FBQ0UsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQy9CLDBEQUFBLENBQUMwQixHQUFHLE9BQUcsQ0FBQzs7Ozs7Ozs7VUNWcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9OZXdUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0FQSV9LRVksIEFQSV9VUkx9IGZyb20gXCJcIlxyXG5cclxuY29uc3QgTmV3VGFzayA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IHN1Ym1pdE5ld1Rhc2sgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHNoYWRvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5OZXcgdGFzazwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0TmV3VGFza30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiB2YWx1ZT17dGl0bGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm9cIj5BZGQgdGFza1xyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3VGFzazsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5pbXBvcnQgTmV3VGFzayBmcm9tIFwiLi9OZXdUYXNrXCI7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIDxOZXdUYXNrIC8+XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xyXG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG5yb290LnJlbmRlcig8QXBwIC8+KTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWNlNzYxODU2MDkzOWU3ZjRiM2ZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFQSV9LRVkiLCJBUElfVVJMIiwiTmV3VGFzayIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRpdGxlIiwic2V0VGl0bGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJzdWJtaXROZXdUYXNrIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==