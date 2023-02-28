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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'js/API/constants'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
/******/ 	__webpack_require__.h = () => ("e021b3e6d81f275b9839")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZmRiNGE1YTZhODA2YWI4ZDQ3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDUztBQUVqRCxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQUFDLFNBQUEsR0FBMEJKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFLLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsUUFBUSxHQUFBSCxVQUFBO0VBQ3RCLElBQUFJLFVBQUEsR0FBc0NULCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFVLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQTNDRSxXQUFXLEdBQUFELFVBQUE7SUFBRUUsY0FBYyxHQUFBRixVQUFBO0VBRWxDLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTLENBRTVCLENBQUM7RUFFRCxvQkFDSWQsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFhLGdCQUN4QmhCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBVyxnQkFDdEJoQiwwREFBQTtJQUFJZ0IsU0FBUyxFQUFDO0VBQVksR0FBQyxVQUFRLENBQUssZUFDeENoQiwwREFBQTtJQUFNaUIsUUFBUSxFQUFFSDtFQUFjLGdCQUMxQmQsMERBQUE7SUFBS2dCLFNBQVMsRUFBQztFQUFZLGdCQUN2QmhCLDBEQUFBO0lBQU9rQixJQUFJLEVBQUMsTUFBTTtJQUFDRixTQUFTLEVBQUMsY0FBYztJQUFDRyxJQUFJLEVBQUMsT0FBTztJQUFDQyxXQUFXLEVBQUMsT0FBTztJQUFDQyxLQUFLLEVBQUViLEtBQU07SUFBQ2MsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLZCxRQUFRLENBQUNjLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUUsQ0FDckksZUFDTnJCLDBEQUFBO0lBQUtnQixTQUFTLEVBQUM7RUFBWSxnQkFDdkJoQiwwREFBQTtJQUFPa0IsSUFBSSxFQUFDLE1BQU07SUFBQ0YsU0FBUyxFQUFDLGNBQWM7SUFBQ0csSUFBSSxFQUFDLGFBQWE7SUFBQ0MsV0FBVyxFQUFDLGFBQWE7SUFBQ0MsS0FBSyxFQUFFVCxXQUFZO0lBQUNVLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxDQUFDO01BQUEsT0FBS1YsY0FBYyxDQUFDVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFFLENBQzdKLGVBQ05yQiwwREFBQTtJQUFRZ0IsU0FBUyxFQUFDO0VBQWMsR0FBQyxVQUNqQyxlQUFBaEIsMERBQUE7SUFBR2dCLFNBQVMsRUFBQztFQUF5QixFQUFLLENBQ2xDLENBQ04sQ0FDTCxDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlWixPQUFPOzs7Ozs7Ozs7Ozs7QUMvQkk7QUFDb0I7QUFDZDtBQUVoQyxTQUFTc0IsR0FBR0EsQ0FBQSxFQUFHO0VBQ2Isb0JBQU8xQiwwREFBQSxDQUFDSSxnREFBTyxPQUFHO0FBQ3BCO0FBRUEsSUFBTXVCLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR0wsNERBQVUsQ0FBQ0UsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQy9CLDBEQUFBLENBQUMwQixHQUFHLE9BQUcsQ0FBQzs7Ozs7Ozs7VUNWcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9OZXdUYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0FQSV9LRVksIEFQSV9VUkx9IGZyb20gXCJqcy9BUEkvY29uc3RhbnRzXCJcclxuXHJcbmNvbnN0IE5ld1Rhc2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBzdWJtaXROZXdUYXNrID0gKCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+TmV3IHRhc2s8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdE5ld1Rhc2t9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+QWRkIHRhc2tcclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1cy1jaXJjbGUgbWwtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld1Rhc2s7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcclxuaW1wb3J0IE5ld1Rhc2sgZnJvbSBcIi4vTmV3VGFza1wiO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiA8TmV3VGFzayAvPlxyXG59XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcclxuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcclxucm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwMjFiM2U2ZDgxZjI3NWI5ODM5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBUElfS0VZIiwiQVBJX1VSTCIsIk5ld1Rhc2siLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0aXRsZSIsInNldFRpdGxlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwic3VibWl0TmV3VGFzayIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=