"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  res.send("hola mundo desde el archivo de rutas");
});
var _default = router;
exports["default"] = _default;