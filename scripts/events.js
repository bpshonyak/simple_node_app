/**
 * Created by bogdan on 5/6/16.
 */

var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on("myCustomEvent", function (data) {
  console.log("Event Fired! Data: " + data);
});

setTimeout(function () {
  eventEmitter.emit("myCustomEvent", "my custom data string");
}, 2000);
