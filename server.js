/**
 * Created by bogdan on 5/5/16.
 */
var methods = require("./local_modules/methods");

methods.getUsers();

var express = require("express");
var app = module.exports = express();

//serve files
app.use("/assets", express.static(__dirname + "/assets"));

//handle requests
app.get("/", function (req, res) {

  res.send("Hello World! -express");

});

