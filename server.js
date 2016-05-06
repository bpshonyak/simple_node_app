/**
 * Created by bogdan on 5/5/16.
 */
var methods = require("./methods");
var server = require("http"); //http module

methods.data.getUsers();

var engine = function (req, res) {

  res.writeHead("200", {'Content-Type': 'text/plain'});
  res.end("Hello, World!");

};

server.createServer(engine).listen(1337); //leet port

