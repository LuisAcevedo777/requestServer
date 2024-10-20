const { Router } = require("express");
const {
  getEmployeeController,
  getAllEmployeesController,
  createEmployeeController,
  deleteEmployeeController,
  updateEmployeeController,
} = require("../controllers/employee.controller");
const employeeValidator = require('../validators/employee.validator')
const {authMiddleware,verificarRol } = require('../middlewares/auth.middleware')


const employeeRouter = Router();

employeeRouter.get("/api/employee/",authMiddleware,verificarRol(['admin']), getAllEmployeesController);

employeeRouter.get("/api/employee/:id",authMiddleware,verificarRol(['admin']), getEmployeeController);

employeeRouter.post("/api/employee/",employeeValidator,authMiddleware, verificarRol(['admin']),createEmployeeController);

employeeRouter.delete("/api/employee/:id",authMiddleware,verificarRol(['admin']), deleteEmployeeController);

employeeRouter.put("/api/employee/:id",employeeValidator,authMiddleware, verificarRol(['admin']),updateEmployeeController);

module.exports = employeeRouter;
