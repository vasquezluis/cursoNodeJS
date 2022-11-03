// const { readFile } = require("fs");
const { readFile } = require("fs/promises");
// const { promisify } = require('util')


/* const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
 */
/* getText("./data/fourth.txt")
  .then((result) => {
    console.log(result);
  })
  .then(() => getText("./data/second.txt"))
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
 */

// crear promesa mas sencilla
// const readFilePromise = promisify(readFile)

// funciones ya convertidas


async function read() {
  try {
    // throw new Error("Esto no se esperaba");
    const result = await readFile("./data/first.txt", 'utf-8');
    const result2 = await readFile("./data/second.txt", 'utf-8');
    console.log(result);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}
read();
