const { DataTypes } = require("sequelize");
const db = require("../utils/db");

const Request = db.define(
  "requests",
  {
    requestId: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "request_id",
    },
     code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      },

    description: { type: DataTypes.STRING(50), allowNull: false },
    employeeId: { type: DataTypes.INTEGER,allowNull:false},
    summary: { type: DataTypes.STRING(50), allowNull: false },
      },
  { timestamps: true }
);

module.exports = Request;
