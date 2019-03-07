require("dotenv").load();

module.exports = {
  http: {
    port: process.env.AUTH_PORT
  },
  database: {
    server: process.env.AUTH_DB_SERVER,
    database: process.env.AUTH_DB_DATABASE,
    user: process.env.AUTH_DB_USER,
    password: process.env.AUTH_DB_PASSWORD,
    port: process.env.AUTH_DB_PORT,
    options: {
      encrypt: process.env.AUTH_DB_ENCRYPT === "true" ? true : false
    }
  },
  jwt: {
    senha: process.env.AUTH_MULTI_PROVIDER_JWT_SECRET,
    duracao: process.env.AUTH_MULTI_PROVIDER_JWT_DURACAO
  }
};
