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
      return finishOperation(data.title, data.description, data.id);
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
    idTask: data.id
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18dc0b3ea5b663b65a6a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kYzY5YTZhZmFlMmQwY2NiNjE5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFHZixvQkFDUUgsMERBQUE7SUFBU0ssU0FBUyxFQUFDLHFCQUFxQjtJQUFDQyxHQUFHLEVBQUVILElBQUksQ0FBQ0k7RUFBRyxnQkFDcERQLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUErRCxnQkFDNUVMLDBEQUFBLDJCQUNFQSwwREFBQSxhQUFLRyxJQUFJLENBQUNLLEtBQUssQ0FBTSxlQUNyQlIsMERBQUE7SUFBSUssU0FBUyxFQUFDO0VBQTBCLEdBQUVGLElBQUksQ0FBQ00sV0FBVyxDQUFNLENBQzVELGVBQ05ULDBEQUFBLGNBQ0dHLElBQUksQ0FBQ08sTUFBTSxLQUFLLE1BQU0saUJBQ3JCViwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUE7SUFDRUssU0FBUyxFQUFDLDBCQUEwQjtJQUNwQ08sT0FBTyxFQUFFQztFQUFpQixHQUMzQixlQUVDLGVBQUFiLDBEQUFBO0lBQUdLLFNBQVMsRUFBQztFQUF5QixFQUFLLENBQ3BDLGVBQ1RMLDBEQUFBO0lBQ0VLLFNBQVMsRUFBQyxxQkFBcUI7SUFDL0JPLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FDUEUsZUFBZSxDQUFDWCxJQUFJLENBQUNLLEtBQUssRUFBRUwsSUFBSSxDQUFDTSxXQUFXLEVBQUVOLElBQUksQ0FBQ0ksRUFBRSxDQUFDO0lBQUE7RUFDdkQsR0FDRixRQUVDLGVBQUFQLDBEQUFBO0lBQUdLLFNBQVMsRUFBQztFQUFxQixFQUFLLENBQ2hDLENBRVosRUFFQVUsWUFBWSxpQkFDWGYsMERBQUE7SUFDRUssU0FBUyxFQUFDLG9DQUFvQztJQUM5Q08sT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNSSxVQUFVLENBQUNiLElBQUksQ0FBQ0ksRUFBRSxDQUFDO0lBQUE7RUFBQyxnQkFFbkNQLDBEQUFBO0lBQUdLLFNBQVMsRUFBQztFQUFvQixFQUFHLENBRXZDLENBQ0csQ0FDRixFQUNMWSxPQUFPLGlCQUNOakIsMERBQUE7SUFBS0ssU0FBUyxFQUFDO0VBQVcsZ0JBQ3hCTCwwREFBQTtJQUFNa0IsUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFLQyxZQUFZLENBQUNqQixJQUFJLENBQUNJLEVBQUUsRUFBRVksQ0FBQyxDQUFDO0lBQUE7RUFBQyxnQkFDOUNuQiwwREFBQTtJQUFLSyxTQUFTLEVBQUM7RUFBYSxnQkFDMUJMLDBEQUFBO0lBQ0VxQixJQUFJLEVBQUMsTUFBTTtJQUNYaEIsU0FBUyxFQUFDLGNBQWM7SUFDeEJpQixXQUFXLEVBQUMsdUJBQXVCO0lBQ25DQyxLQUFLLEVBQUVDLGdCQUFpQjtJQUN4QkMsUUFBUSxFQUFFLFNBQUFBLFNBQUNOLENBQUM7TUFBQSxPQUFLTyxtQkFBbUIsQ0FBQ1AsQ0FBQyxDQUFDUSxNQUFNLENBQUNKLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFDckQsZUFDRnZCLDBEQUFBO0lBQUtLLFNBQVMsRUFBQztFQUFvQixnQkFDakNMLDBEQUFBO0lBQVFLLFNBQVMsRUFBQztFQUFjLEdBQUMsS0FFL0IsZUFBQUwsMERBQUE7SUFBR0ssU0FBUyxFQUFDO0VBQXlCLEVBQUcsQ0FDbEMsQ0FDTCxDQUNGLENBQ0QsQ0FFVixlQUNETCwwREFBQSxDQUFDNEIsVUFBVTtJQUFDQyxNQUFNLEVBQUUxQixJQUFJLENBQUNJO0VBQUcsRUFBRyxDQUN2QjtBQUV0QixDQUFDO0FBRUQsaUVBQWVOLElBQUk7Ozs7Ozs7O1VDdEVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2pzL1Rhc2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUYXNrID0gKHtkYXRhfSkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FyZCBtdC01IHNoYWRvdy1zbVwiIGtleT17ZGF0YS5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlciBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+e2RhdGEudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cImNhcmQtc3VidGl0bGUgdGV4dC1tdXRlZFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvaDY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHtkYXRhLnN0YXR1cyA9PT0gXCJvcGVuXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBidG4tc20gbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZE9wZXJhdGlvblZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmluaXNoT3BlcmF0aW9uKGRhdGEudGl0bGUsIGRhdGEuZGVzY3JpcHRpb24sIGRhdGEuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRmluaXNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlIG1sLTFcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICBcclxuICAgICAgICAgICAgICAgICAge25vT3BlcmF0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc20gbWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVUYXNrKGRhdGEuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaCBmYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7YWRkVmlldyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGFkZE9wZXJhdGlvbihkYXRhLmlkLCBlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcGVyYXRpb24gZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3BlcmF0aW9uRGVzY3JpcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPcGVyYXRpb25EZXNjcmlwKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlub3V0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzLWNpcmNsZSBtbC0xXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8T3BlcmF0aW9ucyBpZFRhc2s9e2RhdGEuaWR9IC8+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxOGRjMGIzZWE1YjY2M2I2NWE2YVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhc2siLCJfcmVmIiwiZGF0YSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJrZXkiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJhZGRPcGVyYXRpb25WaWV3IiwiZmluaXNoT3BlcmF0aW9uIiwibm9PcGVyYXRpb25zIiwiZGVsZXRlVGFzayIsImFkZFZpZXciLCJvblN1Ym1pdCIsImUiLCJhZGRPcGVyYXRpb24iLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9wZXJhdGlvbkRlc2NyaXAiLCJvbkNoYW5nZSIsInNldE9wZXJhdGlvbkRlc2NyaXAiLCJ0YXJnZXQiLCJPcGVyYXRpb25zIiwiaWRUYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==