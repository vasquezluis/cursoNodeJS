const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write("Welcome to index");
    return res.end();
  }

  if (req.url === "/about") {
    res.write("Acerca de");
    return res.end();
  }

  res.write("<h1>Not found</h1>");
  res.end();
});

server.listen(3000);

console.log("Servidor escuchando en el puerto 3000");
