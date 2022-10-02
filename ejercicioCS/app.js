const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const main = async () => {

  const response = await axios.get('https://rickandmortyapi.com/api/character');

  let {data: {results}} = response;

  let characters = results
    .map(character => {
      return {
        id: character.id,
        name: character.name,
        species: character.species
      }
    })

  let data = characters
    .map(item => Object.values(item)
    .join(','))
    .join('\n')

  let headers = Object.keys(characters[0])
    .join(',');

    let result = headers + '\n' + data;

    await fs.writeFile(path.join(__dirname, 'data2.csv'), result);

  console.log(headers);
  console.log(data);

}

main();