// constante para obtener datos API
const axios = require("axios");
// constante para file system | .promises es especifico de file system
const fs = require("fs").promises;
// funcionalidad para las rutas
const path = require("path");

const main = async () => {
  // obtener datos con axios
  // axios es asincrono
  let response = await axios.get("https://rickandmortyapi.com/api/character");

  // destructuracion
  let {
    data: { results },
  } = response;

  // obtener id
  let characters = results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
    };
  });

  let data = characters.map((item) => Object.values(item).join(",")).join("\n");

  let headers = Object.keys(characters[0]).join(",");

  // encontrar el path para generar el archivo
  // console.log(path.join(__dirname, 'data.csv'));

  // unir resultados

  let result = headers + "\n" + data;

  // crear archivo con promesas
  await fs.writeFile(path.join(__dirname, "data.csv"), result);

  // imprimir
  console.log(result);
};

// se va a ejecutar cada que se llame al archivo main.js
main();
