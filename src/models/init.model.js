const employeeModel = require("../models/employee.model");
const requestModel = require("../models/request.model");
const roleModel = require("../models/role.model");

//relaciones de las tablas

const initModel = () => {
  

  employeeModel.hasMany(requestModel, { foreignKey: "employeeId" }); 
   requestModel.belongsTo(employeeModel, { foreignKey: "employeeId" }); 

  
};

module.exports = initModel;

