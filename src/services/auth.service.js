const jwt = require("jsonwebtoken");
const employeeModel = require("../models/employee.model");

//clase que contiene todos los servicios de authenticación

class authServices {

  //Función para generar un nuevo token

  static genToken(payload) {
    try {
      const token = jwt.sign(payload, "clave", {
        algorithm: "HS512",
        expiresIn: "1d",
      });
      return token;
    } catch (error) {
      throw error;
    }
  }

  //Función para crear un empleado

  static async createOne(newEmployee) {
    try {
      const employeeCreated = await employeeModel.create(newEmployee);
      return employeeCreated;
    } catch (error) {
      throw error;
    }
  }

 //Función para obtener un empleado encontrandolo por su email

  static async getEmployee(email) {
    try {
      const getEmployees = await employeeModel.findOne({ where: { email } });
      return getEmployees;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = authServices;
