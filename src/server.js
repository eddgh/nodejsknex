require("dotenv").config();

const port = process.env.SERVER_PORT;

const express = require('express')
const app = express();

const pacienteController = require('./controllers/pacienteController');

app.use("/", pacienteController);

app.listen(port, () => console.log(`Server is running on http://localhost: ${port}`))