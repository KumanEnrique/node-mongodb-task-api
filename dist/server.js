"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index"));

var _task = _interopRequireDefault(require("./routes/task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //settings

app.set('port', process.env.PORT || 3000); //middlewares

app.use(_express["default"].json()); //routes

app.use(_index["default"]);
app.use('/task', _task["default"]);
var _default = app;
exports["default"] = _default;