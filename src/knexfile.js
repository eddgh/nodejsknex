module.exports = {

  development: {
    client: process.env.DB_CLIENT,
    connection: {
      server: process.env.DB_SERVER,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  }
};
