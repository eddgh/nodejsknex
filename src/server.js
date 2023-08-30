require("dotenv").config();

const express = require('express')
// const routes = require('./routes')

const app = express();

const port = process.env.SERVER_PORT;

app.get("/", function (req, res) {
        res.send("<h1 style='color: blue;'>Olá, seja Bem-vindo!</h1>")
})

app.listen(port, () =>  console.log(`Server is running on http://localhost: ${port}`))