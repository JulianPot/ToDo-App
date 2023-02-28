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
    key: v.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, v.description, v.timeSpent !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
/******/ 	__webpack_require__.h = () => ("4e3a17c1723a2601f924")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jODA0Mjc4ZDRhNjBkZDlhZDViZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDQTtBQUVuRCxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDcEIsb0JBQ0lQLDBEQUFBO0lBQUlTLFNBQVMsRUFBQztFQUE2QixnQkFDekNULDBEQUFBO0lBQ0VTLFNBQVMsRUFBQyxtRUFBbUU7SUFDN0VDLEdBQUcsRUFBRUMsQ0FBQyxDQUFDQztFQUFHLGdCQUVWWiwwREFBQSxjQUNHVyxDQUFDLENBQUNFLFdBQVcsRUFDYkYsQ0FBQyxDQUFDRyxTQUFTLEtBQUssQ0FBQyxpQkFDaEJkLDBEQUFBO0lBQU1TLFNBQVMsRUFBQztFQUFxQyxHQUNsREUsQ0FBQyxDQUFDRyxTQUFTLEVBQUMsTUFDZixDQUNELENBQ0csZUFDTmQsMERBQUEsY0FDR1csQ0FBQyxDQUFDSSxJQUFJLENBQUNDLE1BQU0sS0FBSyxNQUFNLElBQUksQ0FBQ0MsY0FBYyxpQkFDMUNqQiwwREFBQTtJQUNFUyxTQUFTLEVBQUMscUNBQXFDO0lBQy9DUyxPQUFPLEVBQUVDO0VBQVksR0FDdEIsVUFFQyxlQUFBbkIsMERBQUE7SUFBR1MsU0FBUyxFQUFDO0VBQW1CLEVBQUcsQ0FFdEMsRUFDQSxDQUFDUSxjQUFjLGlCQUNkakIsMERBQUE7SUFDRVMsU0FBUyxFQUFDLCtCQUErQjtJQUN6Q1MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNRSxlQUFlLENBQUNULENBQUMsQ0FBQ0MsRUFBRSxDQUFDO0lBQUE7RUFBQyxnQkFFckNaLDBEQUFBO0lBQUdTLFNBQVMsRUFBQztFQUFjLEVBQUcsQ0FFakMsQ0FDRyxFQUNMUSxjQUFjLGlCQUNiakIsMERBQUEsNEJBQ0VBLDBEQUFBO0lBQUtTLFNBQVMsRUFBQztFQUE0QixnQkFDekNULDBEQUFBO0lBQ0VxQixJQUFJLEVBQUMsUUFBUTtJQUNiWixTQUFTLEVBQUMsY0FBYztJQUN4QmEsV0FBVyxFQUFDLHVCQUF1QjtJQUNuQ0MsS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFRLENBQUU7SUFDMUJDLEtBQUssRUFBRUMsU0FBVTtJQUNqQkMsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLQyxZQUFZLENBQUNELENBQUMsQ0FBQ0UsTUFBTSxDQUFDTCxLQUFLLENBQUM7SUFBQTtFQUFDLEVBQzlDLGVBQ0Z6QiwwREFBQTtJQUFLUyxTQUFTLEVBQUM7RUFBb0IsZ0JBQ2pDVCwwREFBQTtJQUNFUyxTQUFTLEVBQUMseUJBQXlCO0lBQ25DUyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1hLE9BQU8sQ0FBQ3BCLENBQUMsQ0FBQ0MsRUFBRSxDQUFDO0lBQUE7RUFBQyxnQkFFN0JaLDBEQUFBO0lBQUdTLFNBQVMsRUFBQztFQUFhLEVBQUcsQ0FDdEIsZUFDVFQsMERBQUE7SUFDRVMsU0FBUyxFQUFDLHNCQUFzQjtJQUNoQ1MsT0FBTyxFQUFFYztFQUFjLGdCQUV2QmhDLDBEQUFBO0lBQUdTLFNBQVMsRUFBQztFQUFvQixFQUFHLENBQzdCLENBQ0wsQ0FDRixDQUVULENBQ0UsQ0FDSjtBQUVYLENBQUM7QUFFRCxpRUFBZUosU0FBUzs7Ozs7Ozs7VUN0RXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vanMvT3BlcmF0aW9uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQVBJX0tFWSwgQVBJX1VSTCB9IGZyb20gXCIuL0FQSS9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IE9wZXJhdGlvbiA9ICh7ZGF0YX0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcbiAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBrZXk9e3YuaWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3YuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAge3YudGltZVNwZW50ICE9PSAwICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXN1Y2Nlc3MgYmFkZ2UtcGlsbCBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt2LnRpbWVTcGVudH0gbWluXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3YudGFzay5zdGF0dXMgPT09IFwib3BlblwiICYmICFhZGRUaW1lRGlzcGxheSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1zbSBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0FkZFRpbWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jbG9jayBtbC0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgeyFhZGRUaW1lRGlzcGxheSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlT3BlcmF0aW9uKHYuaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHthZGRUaW1lRGlzcGxheSAmJiAoXHJcbiAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTcGVudCB0aW1lIGluIG1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEycmVtXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGltZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGltZUlucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRUaW1lKHYuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxBZGRUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBmYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3BlcmF0aW9uOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjRlM2ExN2MxNzIzYTI2MDFmOTI0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBUElfS0VZIiwiQVBJX1VSTCIsIk9wZXJhdGlvbiIsIl9yZWYiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImtleSIsInYiLCJpZCIsImRlc2NyaXB0aW9uIiwidGltZVNwZW50IiwidGFzayIsInN0YXR1cyIsImFkZFRpbWVEaXNwbGF5Iiwib25DbGljayIsInNob3dBZGRUaW1lIiwiZGVsZXRlT3BlcmF0aW9uIiwidHlwZSIsInBsYWNlaG9sZGVyIiwic3R5bGUiLCJ3aWR0aCIsInZhbHVlIiwidGltZUlucHV0Iiwib25DaGFuZ2UiLCJlIiwic2V0VGltZUlucHV0IiwidGFyZ2V0IiwiYWRkVGltZSIsImNhbmNlbEFkZFRpbWUiXSwic291cmNlUm9vdCI6IiJ9