require("dotenv").config();

const port = process.env.SERVER_PORT;

const express = require('express')
const app = express();

const pacienteController = require('./controllers/pacienteController');

// CORS configs:
//Aqui a origem da requisição é o endereço/porta de onde esta rodando sua aplicação, no caso: 
//"http://localhost:5173");
//poderia subsituir o endereço acima por "*", porém ficaria vulnerável a ataques externos


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5174"); // Update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/", pacienteController);

app.listen(port, () => console.log(`Server is running on http://localhost: ${port}`))