/**
 * Created by bogdan on 5/6/16.
 */
var fs = require("fs");

//reading from a file
fs.readFile('./files/names', 'utf8', function (error, data) {
  console.log(data);
});

//writing to a file
fs.writeFile('./files/names2', "Hello File!",'utf8', function (error) {
  if (error)
      throw error;

  console.log("File written");
});
