const knex = require('./database');


async function getUsers() {
    try {
        // knex('tabela').condições.campos
        let result = await knex.select('nome', 'escala', 'turno')
            .from('clientes')
            .where('tipo', 'C')
            .andWhere('locdial', '<>', '')
            .orderBy('nome');
            return result;      
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUsers
}