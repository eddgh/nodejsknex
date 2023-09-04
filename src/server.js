require("dotenv").config();

const port = process.env.SERVER_PORT;

const express = require('express')
const app = express();

const userController = require('./controllers/pacienteController');

app.use("/", userController);

app.listen(port, () => console.log(`Server is running on http://localhost: ${port}`))