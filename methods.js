/**
 * Created by bogdan on 5/5/16.
 */

var methods = {
  getUsers: function () {
    console.log("Fetching users!");
  },
  authenticate: function () {
    console.log("Authenticating");
  },
  deleteUser: function () {
    console.log("Deleting user...");
  }
};

//Export only what is needed
exports.data = methods;