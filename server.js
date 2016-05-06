/**
 * Created by bogdan on 5/5/16.
 */
var methods = require("./methods");
var server = require("http"); //http module

methods.data.getUsers();

var engine = function () {
  
};

server.createServer(engine).listen(1337); //leet port