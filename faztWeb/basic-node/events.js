const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// como el addEventListener
customEmitter.on("response", (data, secondData) => {
  console.log(data);
  console.log(secondData);
});

customEmitter.emit("response", "Hello world", [1, 2, 3]);
