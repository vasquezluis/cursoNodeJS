const fs = require("fs");

const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

console.log(first);
console.log(second.toString());

// create
const title = 'Este contenido se ha a;adido'

fs.writeFileSync("./data/third.txt", "Este es un tercer archivo");
fs.writeFileSync("./data/fourth.txt", title, {
  flag: 'a'
});
