/**
 * Created by bogdan on 5/5/16.
 */
var methods = require("./methods");
var http = require("http"); //http module


methods.getUsers();

var engine = function (req, res) {

  res.writeHead("200", {'Content-Type': 'text/plain'});
  res.end("Hello, World!");

};

//Called every time the server receives a new request
var requestReceived = function(){
  console.log("NEW REQUEST!");
};


var server = module.exports = http.createServer(engine);

server.listen(1337, requestReceived); //leet port
