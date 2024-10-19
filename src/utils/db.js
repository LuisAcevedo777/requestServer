const { Sequelize } = require("sequelize");


const db = new Sequelize({
  database: "pruebadb", //"railway",
  port: 5432,
  host: "localhost", //"postgres.railway.internal",
  dialect: "postgres",
  username: "postgres",
  password: "root", // "LIQVEgnCRImBZCHCYybNUlfThsLqmphS",
  logging: false,
});

module.exports = db;
