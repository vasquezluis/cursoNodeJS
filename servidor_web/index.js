const express = require("express");

// crear aplicacion de express
const app = express();

// puerto
const port = 3000;

// permite al servidor recibir datos de tipo json desde los clientes
app.use(express.json());

// obtener data desde service.js
const Service = require("./src/service");

// escuchar peticiones del servidor (ruta, controlador de ruta (request, response))
// cada ruta es un endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: Service.getUsers(),
  });
});

// endpoint para obtener un solo usario
app.get("/:id", (req, res) => {
  // obtener el id desde la ruta con request
  let {
    params: { id },
  } = req;
  let user = Service.getUser(id);

  res.json({
    message: `Usuario ${id}`,
    body: user,
  });
});

// endpoint para agregar usuario
app.post("/", (req, res) => {
  // obtener los datos del body y almacenarlos en newUser
  let { body: newUser } = req;
  // utilizar el servicio para agregar los datos al arreglo
  let user = Service.createUser(newUser);
  // responder al cliente que los datos se agregaron
  // .status(201) es para el codigo creacion(http)
  res.status(201).json({
    message: "El usuario ha sido creado",
    body: user,
  });
});

// endpoint para actualizar usuarios
app.put('/:id', (req, res) => {
  let {params: {id}} = req;
  let {body: userData} = req;
  let user = Service.updateUser(id, userData);
  res.json({
    message: `Usuario ${id} actualizado`,
    body: user
  })
});

// endpoint para eliminar usuarios
app.delete("/:id", (req, res) => {
  let {params: {id}} = req;
  Service.deletUser(id);
  res.json({
    message: `Usuario ${id} eliminado` 
  });
});

// levantar servidor (puerto, callback de notificacion)
app.listen(port, () => {
  console.log(`servidor escuchando en http://localhost:${port}`);
});
