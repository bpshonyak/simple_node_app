/**
 * Created by bogdan on 5/5/16.
 */

//Node creates this by default...
//module.exports = exports = {}

var methods = module.exports = {};

methods.getUsers = function () {
  console.log("Fetching users!");
};

methods.authenticate = function () {
  console.log("Authenticating");
};

methods.deleteUser = function () {
  console.log("Deleting user...");
};