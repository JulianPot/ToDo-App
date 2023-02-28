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

var Task = function Task(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "card mt-5 shadow-sm",
    key: v.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-header d-flex justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, v.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h6", {
    className: "card-subtitle text-muted"
  }, v.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, v.status === "open" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-info btn-sm mr-2",
    onClick: addOperationView
  }, "Add operation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-plus-circle ml-1"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-dark btn-sm",
    onClick: function onClick() {
      return finishOperation(v.title, v.description, v.id);
    }
  }, "Finish", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-archive ml-1"
  }))), noOperations && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-outline-danger btn-sm ml-2",
    onClick: function onClick() {
      return deleteTask(v.id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "fas fa-trash false"
  })))), addView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: function onSubmit(e) {
      return addOperation(v.id, e);
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
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Operations, {
    idTask: v.id
  })), "))}");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e712bc2f9c7dea00346")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45MTQ0ZmVmNGRiMzM5OGQyMmYwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDZixvQkFDSUgsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBO0lBQVNNLFNBQVMsRUFBQyxxQkFBcUI7SUFBQ0MsR0FBRyxFQUFFQyxDQUFDLENBQUNDO0VBQUcsZ0JBQ2pEVCwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBK0QsZ0JBQzVFTiwwREFBQSwyQkFDRUEsMERBQUEsYUFBS1EsQ0FBQyxDQUFDRSxLQUFLLENBQU0sZUFDbEJWLDBEQUFBO0lBQUlNLFNBQVMsRUFBQztFQUEwQixHQUFFRSxDQUFDLENBQUNHLFdBQVcsQ0FBTSxDQUN6RCxlQUNOWCwwREFBQSxjQUNHUSxDQUFDLENBQUNJLE1BQU0sS0FBSyxNQUFNLGlCQUNsQlosMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBO0lBQ0VNLFNBQVMsRUFBQywwQkFBMEI7SUFDcENPLE9BQU8sRUFBRUM7RUFBaUIsR0FDM0IsZUFFQyxlQUFBZCwwREFBQTtJQUFHTSxTQUFTLEVBQUM7RUFBeUIsRUFBSyxDQUNwQyxlQUNUTiwwREFBQTtJQUNFTSxTQUFTLEVBQUMscUJBQXFCO0lBQy9CTyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQ1BFLGVBQWUsQ0FBQ1AsQ0FBQyxDQUFDRSxLQUFLLEVBQUVGLENBQUMsQ0FBQ0csV0FBVyxFQUFFSCxDQUFDLENBQUNDLEVBQUUsQ0FBQztJQUFBO0VBQzlDLEdBQ0YsUUFFQyxlQUFBVCwwREFBQTtJQUFHTSxTQUFTLEVBQUM7RUFBcUIsRUFBSyxDQUNoQyxDQUVaLEVBRUFVLFlBQVksaUJBQ1hoQiwwREFBQTtJQUNFTSxTQUFTLEVBQUMsb0NBQW9DO0lBQzlDTyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1JLFVBQVUsQ0FBQ1QsQ0FBQyxDQUFDQyxFQUFFLENBQUM7SUFBQTtFQUFDLGdCQUVoQ1QsMERBQUE7SUFBR00sU0FBUyxFQUFDO0VBQW9CLEVBQUcsQ0FFdkMsQ0FDRyxDQUNGLEVBQ0xZLE9BQU8saUJBQ05sQiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBVyxnQkFDeEJOLDBEQUFBO0lBQU1tQixRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsQ0FBQztNQUFBLE9BQUtDLFlBQVksQ0FBQ2IsQ0FBQyxDQUFDQyxFQUFFLEVBQUVXLENBQUMsQ0FBQztJQUFBO0VBQUMsZ0JBQzNDcEIsMERBQUE7SUFBS00sU0FBUyxFQUFDO0VBQWEsZ0JBQzFCTiwwREFBQTtJQUNFc0IsSUFBSSxFQUFDLE1BQU07SUFDWGhCLFNBQVMsRUFBQyxjQUFjO0lBQ3hCaUIsV0FBVyxFQUFDLHVCQUF1QjtJQUNuQ0MsS0FBSyxFQUFFQyxnQkFBaUI7SUFDeEJDLFFBQVEsRUFBRSxTQUFBQSxTQUFDTixDQUFDO01BQUEsT0FBS08sbUJBQW1CLENBQUNQLENBQUMsQ0FBQ1EsTUFBTSxDQUFDSixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQ3JELGVBQ0Z4QiwwREFBQTtJQUFLTSxTQUFTLEVBQUM7RUFBb0IsZ0JBQ2pDTiwwREFBQTtJQUFRTSxTQUFTLEVBQUM7RUFBYyxHQUFDLEtBRS9CLGVBQUFOLDBEQUFBO0lBQUdNLFNBQVMsRUFBQztFQUF5QixFQUFHLENBQ2xDLENBQ0wsQ0FDRixDQUNELENBRVYsZUFDRE4sMERBQUEsQ0FBQzZCLFVBQVU7SUFBQ0MsTUFBTSxFQUFFdEIsQ0FBQyxDQUFDQztFQUFHLEVBQUcsQ0FDcEIsT0FFZCxDQUFHO0FBRVgsQ0FBQztBQUVELGlFQUFlUixJQUFJOzs7Ozs7OztVQ3ZFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9qcy9UYXNrLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGFzayA9ICh7ZGF0YX0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiIGtleT17di5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+e3YudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPnt2LmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHt2LnN0YXR1cyA9PT0gXCJvcGVuXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZE9wZXJhdGlvblZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoT3BlcmF0aW9uKHYudGl0bGUsIHYuZGVzY3JpcHRpb24sIHYuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICBcclxuICAgICAgICAgICAgICAgICAge25vT3BlcmF0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYXNrKHYuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaCBmYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7YWRkVmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGFkZE9wZXJhdGlvbih2LmlkLCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3BlcmF0aW9uRGVzY3JpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcGVyYXRpb25EZXNjcmlwKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlub3V0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8T3BlcmF0aW9ucyBpZFRhc2s9e3YuaWR9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNlNzEyYmMyZjljN2RlYTAwMzQ2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFzayIsIl9yZWYiLCJkYXRhIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwia2V5IiwidiIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsIm9uQ2xpY2siLCJhZGRPcGVyYXRpb25WaWV3IiwiZmluaXNoT3BlcmF0aW9uIiwibm9PcGVyYXRpb25zIiwiZGVsZXRlVGFzayIsImFkZFZpZXciLCJvblN1Ym1pdCIsImUiLCJhZGRPcGVyYXRpb24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9wZXJhdGlvbkRlc2NyaXAiLCJvbkNoYW5nZSIsInNldE9wZXJhdGlvbkRlc2NyaXAiLCJ0YXJnZXQiLCJPcGVyYXRpb25zIiwiaWRUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==