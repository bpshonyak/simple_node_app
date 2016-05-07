/**
 * Created by bogdan on 5/6/16.
 */
var app = require("./server");


app.listen(process.env.PORT || 8080, function () {
  console.log("Listening on Port 8080");
});