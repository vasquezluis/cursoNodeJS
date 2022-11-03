const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  await writeFile("./data/bigfile.txt", "Hello world".repeat(100000));
};

createBigFile();


// const { createReadStream } = require("fs");

// // crear stream
// const stream = createReadStream("./data/bigfile.txt", {
//   encoding: "utf-8",
// });

// // leer archivo grande por partes
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// // realizar algo cuando acabe la lectura
// stream.on("end", () => {
//   console.log("Ya termin[e de leer el archivo");
// });

// // obtener error
// stream.on("error", (error) => {
//   console.log(error);
// });
