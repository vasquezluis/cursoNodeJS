const fs = require("fs");

// const first = fs.readFileSync("./data/first.txt", "utf-8");
// const second = fs.readFileSync("./data/second.txt");

// console.log(first);
// console.log(second.toString());

// // create
// const title = 'Este contenido se ha a;adido'

// fs.writeFileSync("./data/third.txt", "Este es un tercer archivo");
// fs.writeFileSync("./data/fourth.txt", title, {
//   flag: 'a'
// });

fs.readFile("./data/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }

  fs.readFile("./data/second.txt", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }

    fs.writeFile(
      "./data/newfile.txt",
      "Archivo creado desde fs",
      (error, data) => {
        console.log(error);
        console.log(data);
      }
    );
  });
});
