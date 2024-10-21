const { Sequelize } = require("sequelize");
require("dotenv").config();

//conexión con base de datos

const db = new Sequelize(/*process.env.DATABASE_URL,*/{
  database: 'pruebadb', //"railway", 
  port: 5432,
  host: "localhost", // "postgres.railway.internal",
  dialect: "postgres",
  username: "postgres",
  password: "root", //"DACgsQmfmFZAdDDxWjArVZLmwmNtTcTe",
  logging: false,
});

module.exports = db;
