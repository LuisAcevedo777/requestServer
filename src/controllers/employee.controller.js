const employeeServices = require("../services/employee.service");

const getAllEmployeesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getEmployees = await employeeServices.getAll();
    res.json(getEmployees);
  } catch (error) {
    next(error);
  }
};

const getEmployeeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getEmployees = await employeeServices.getOne(id);
    res.json(getEmployees);
  } catch (error) {
    next(error);
  }
};

const createEmployeeController = async (req, res, next) => {
  try {
    const newEmployee = req.body;
    const employeeCreated = await employeeServices.createOne(newEmployee);
    res.status(201).send(employeeCreated);
  } catch (error) {
    next(error);
  }
};


const deleteEmployeeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeDelete = await employeeServices.deleteOne(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const updateEmployeeController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const employeeToUpdate = req.body;
    const employeeUpdated = await employeeServices.updateOne(id, employeeToUpdate);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEmployeeController,
  getAllEmployeesController,
  createEmployeeController,
  deleteEmployeeController,
  updateEmployeeController,
};
