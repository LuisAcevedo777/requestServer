const employeeModel = require("../models/employee.model");
const requestModel = require("../models/request.model");
const roleModel = require("../models/role.model")

class employeeServices {
  static async getAll() {
    try {
      const getEmployees = await employeeModel.findAll();
      return getEmployees;
    } catch (error) {
      throw error;
    }
  }

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

  static async getRole(id) {
    try {
      const getRoleEmployee = await roleModel.findByPk(id);
      return getRoleEmployee;
    } catch (error) {
      throw error;
    }
  }

  static async createOne(newEmployee) {
    try {
      const employeeCreated = await employeeModel.create(newEmployee);
      return employeeCreated;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    try {
      const employeeDelete = await employeeModel.destroy({ where: { employeeId: id } });
      return employeeDelete;
    } catch (error) {
      throw error;
    }
  }

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
