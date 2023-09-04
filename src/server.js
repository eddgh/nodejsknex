require("dotenv").config();

const port = process.env.SERVER_PORT;

const express = require('express')
const knex = require('./database')
const app = express();

const clienteController = require('./controllers/clienteController');
// const usuariosModel = require('./models/usuariosModel');

// app.use(express.json());


app.get("/", function (req, res) {
        res.send("<h1 style='color: blue;'>Olá Houser, seja Bem-vindo!</h1>")
})

app.get('/clientes', async (req, res) => {
        await knex.select('nome', 'escala', 'turno')
        .from('clientes')
        .where('tipo', 'C')
        .andWhere('locdial', '<>', '')
        .orderBy('nome')
        .then((results) => res.json(results))      
})

// app.get('/clientesteste', clienteController.getAll);
// beleza acima tratar depois...




app.listen(port, () => console.log(`Server is running on http://localhost: ${port}`))