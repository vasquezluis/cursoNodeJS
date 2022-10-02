const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;

const Service = require('./src/service');

app.get('', (req, res) => {
    res.json({
        message: 'Mensaje',
        body: Service.getUsers()
    })
});

app.post('', (req, res) => {
    let {body: newUser} = req;
    let user = Service.createUser(newUser);
    res.status(201).json({
        message: 'Datos guardados',
        body: user
    })
})

app.listen(port, () => {
    console.log(`Server listen on http://localhost:${port}`);
})