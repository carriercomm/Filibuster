var config = require("./configs.js");
var filibuster = require("./lib/filibuster.js");
var express = require('express');
var app = express();
var server = module.exports = filibuster(app);

server.listen(config.port);