// encargado de manipular todo los datos en CRUD

// datos para mostrar en el servidor
const data = require("./MOCK_DATA.json");

// desarrollar modulos -> este archivo sera exportado para poder ser usando en otros archivos
module.exports = {
  // exportar data a traves de la funcion getUsers
  getUsers: () => data,
  // obtener un solo usuario
  getUser: (id) => {
    // convertir id(string) a numero
    let identificador = Number(id);
    let user = data.filter((person) => person.id === identificador)[0];
    return user;
  },
  // crear usuario
  createUser: (dataUser) => {
    let newUser = {
      // crear id consecutivo
      id: data.length + 1,
      ...dataUser,
    };
    // agregar usuario al array data
    data.push(newUser);

    // retornar los datos del usuario que ha sido agregado
    return newUser;
  },
  // actualizar datos de usuario
  updateUser: (id, userData) => {
    let idUsuario = data.findIndex(usuario => usuario.id === Number(id));
    let newData = {
      id: idUsuario,
      ...userData
    };
    data[idUsuario] = newData;
    return newData;
  },
  // eliminar usuario
  deletUser: id => {
    let idUsuario = data.findIndex(usuario => usuario.id === Number(id));
    data.splice(idUsuario, 1);
  }
};
