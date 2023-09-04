require("dotenv").config();
let knex = require('../database')

exports.getAll = async (req, res) => {

            await knex.select('nome', 'escala', 'turno')
            .from('clientes')
            .where('tipo', 'C')
            .andWhere('locdial', '<>', '')
            .orderBy('nome')
            .then((results) => res.json(results)

            ).catch(function (err) {
                console.log(err);
            }).finally(function () {
                knex.destroy();
            });
        }
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         alunos: [
    //             {
    //                 id: 1,
    //                 nome: 'Fulano Silva',
    //                 idade: 27
    //             },
    //             {
    //                 id: 2,
    //                 nome: 'Ciclano Almeida',
    //                 idade: 32
    //             }
    //         ]
    //     }
    // });



