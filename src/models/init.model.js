const employeeModel = require("../models/employee.model");
const requestModel = require("../models/request.model");
const roleModel = require("../models/role.model");

const initModel = () => {
  

  employeeModel.hasMany(requestModel, { foreignKey: "employeeId" }); 
   requestModel.belongsTo(employeeModel, { foreignKey: "employeeId" }); 

  
};

module.exports = initModel;

