/**
 * Created by bogdan on 5/5/16.
 */
var methods = require("./local_modules/methods");
var http = require("http"); //http module


methods.getUsers();

var engine = function (req, res) {

  res.writeHead("200", {'Content-Type': 'text/plain'});
  res.end("Hello, World!");

};

var express = require("express");
var app = module.exports = express();


app.get("/", function (req, res) {

  res.send("Hello World! -express");

});

// var server = module.exports = http.createServer(engine);
