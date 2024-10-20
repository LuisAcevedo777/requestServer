
const { DataTypes } = require("sequelize");
const db = require("../utils/db");
const bcrypt = require("bcrypt");
const roleModel = require('../models/role.model')

//Definición de la tabla de empleados con sus características

const Employee = db.define(
  "employees",
  {
    employeeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "employee_id",
    },
    roleId: {
      type: DataTypes.INTEGER,
      field: "role_id",
      defaultValue: 3          
    },
    name: { type: DataTypes.STRING(50), allowNull: false },
    dateEntry:{type: DataTypes.STRING(15), field: "date_entry"},
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: { type: DataTypes.STRING(555), allowNull: false },
    salary:{type:DataTypes.INTEGER, defaultValue: 0}    
  },
   
  {
    timestamps: true,

    //código para encriptar la información suministrada en la contraseña del usuario

    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(user.password, salt);
        user.password = pass;
      },
    },
  }
);

module.exports = Employee;
