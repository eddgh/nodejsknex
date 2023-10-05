# Projeto nodejsknex API pacientes
Esse projeto só contempla a rota "/GET"<br /><br />

## Objetivo
Criar crachás para os pacientes<br /><br />

## Como funciona
Implementa um servidor local, com SQL EXPRESS para buscar todos os pacientes ativos, inicialmente buscando os campos 'nome', 'escala', 'turno','codigo', 'num_reg' (esse número também nomeia a imagem de cadastro do paciente)<br /><br />

# Desenvolvimento
* Projeto desenvolvido com vite
 ```npm create vite@latest```

* Instalar as dependencias dotenv, express, knex, mssql e a dependencia de desenvolvimento (-D) nodemon

* modificar o arquivo package.json na parte de scripts:

```"scripts": { "start": "nodemon src/server.js" }```

* Criar o arquivo ```.env.example``` ***com os nomes*** das variáveis de conexão para poder subir no git
```
    DB_CLIENT:
    DE_SERVER: 
    DB_PORT:
    DB_DATABASE:
    DB_USER:
    DB_PASSWORD:

    SERVER_PORT: 
```

* Criar o arquivo ```.env``` ***com as variáveis*** de conexão para poder subir no git

* Criar o arquivo ```knexfile.js```
```
module.exports = {

  development: {
    client: process.env.DB_CLIENT,
    connection: {
      server: process.env.DB_SERVER,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool : {min : 2, max:40}
  }
};
```
* Criar a pasta 




