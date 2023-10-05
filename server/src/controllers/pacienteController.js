const knex = require('../database')

const express = require('express');
const router = express.Router();

router.get('/pacientes', async (req, res) => {
    // req.accepts('application/json');
    await knex.select('*')    
        .from('clientes')
        .where('tipo', 'C')
        .andWhere('locdial', '<>', '')
        .orderBy('nome')
        .then((results) => res.json(results))
})

module.exports = router;