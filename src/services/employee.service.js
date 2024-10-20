const employeeModel = require("../models/employee.model");
const requestModel = require("../models/request.model");
const roleModel = require("../models/role.model")

//Clase de todos los servicios de los empleados

class employeeServices {

//Obtiene todos los empleados

  static async getAll() {
    try {
      const getEmployees = await employeeModel.findAll();
      return getEmployees;
    } catch (error) {
      throw error;
    }
  }

  //Obtiene un solo empleado incluyendo en el objeto todas las solicitudes que ha realizado

  static async getOne(id) {
    try {
      const getEmployees = await employeeModel.findByPk(id, {
        include: { model: requestModel},
      });
      return getEmployees;
    } catch (error) {
      throw error;
    }
  }

  //Obtiene el objeto role con el id

  static async getRole(id) {
   
    try {
      const getRoleEmployee = await roleModel.findByPk(id);
      return getRoleEmployee;
    } catch (error) {
      throw error;
    }
  }

  //Crea un nuevo empleado

  static async createOne(newEmployee) {
    try {
      const employeeCreated = await employeeModel.create(newEmployee);
      return employeeCreated;
    } catch (error) {
      throw error;
    }
  }


  //Elimina un empleado con el ID suministrado

  static async deleteOne(id) {
    try {
      const employeeDelete = await employeeModel.destroy({ where: { employeeId: id } });
      return employeeDelete;
    } catch (error) {
      throw error;
    }
  }

 //Actualiza la información de un empleado 

  static async updateOne(id, employeeToUpdate) {
    try {
      const employeeUpdated = await employeeModel.update(employeeToUpdate, {
        where: { employeeId: id },
      });
      return await employeeModel.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = employeeServices;
