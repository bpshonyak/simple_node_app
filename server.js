/**
 * Created by bogdan on 5/5/16.
 */
var methods = require("./local_modules/methods");
var path = require("path");
var fs = require("fs");

var express = require("express");
var app = module.exports = express();

//serve files
app.use("/assets", express.static(__dirname + "/assets"));


//default path
app.get("/", function(req, res){
  res.sendFile("index.html", {root: path.join(__dirname, "./files")}); //Home page
});

//handle query params
app.get("/json", function (req, res) {
  res.end(JSON.stringify(req.query));
});

//handle gender file requests
app.get(/^(.+)$/, function (req, res) {

  console.log(path.join(__dirname, "./files/", req.params[0] + ".html"));

  try {
    //If the file exists, return its contents
    if(fs.statSync(path.join(__dirname, "./files/", req.params[0] + ".html")).isFile()){
      res.sendFile(req.params[0] + ".html", {root: path.join(__dirname, "./files")});
    }
  } catch (err) {
    // console.log(err);
    res.sendFile("404.html", {root: path.join(__dirname, "./files")}); //404 page
  }

});



