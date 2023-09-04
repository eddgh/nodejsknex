
require("dotenv").config();
let knex = require('./database')

knex.select('nome', 'escala', 'turno')
    .from('clientes')
    .where('tipo', 'C')
    .andWhere('locdial', '<>', '')
    .orderBy('nome')
    .then(function (clientes) {
        clientes.forEach(function (cliente) {
        });
        console.log(JSON.stringify(clientes));
        console.log(`\nA tabela contém ${clientes.length} pacientes`);
    }
    ).catch(function (err) {
        console.log(err);
    }).finally(function () {
        knex.destroy();
    });

    module.exports = knex

