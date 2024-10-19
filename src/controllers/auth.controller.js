const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authServices = require("../services/auth.service");
const transporter = require('../utils/mailer');
const employeeServices = require("../services/employee.service");

const loginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const employee = await authServices.getEmployee(email);
    if (!employee) {
      return res.status(400).json({ message: "employee doesnt exist in db" });
    }
    const pass = await bcrypt.compare(password, employee.password);
    if (!pass) {
      return res.status(400).json({ message: "pass not match with employee" });
    }

    const { name, roleId, employeeId, dateEntry, salary} = employee;
    const roleEmployee = await employeeServices.getRole(roleId)
        if (!roleEmployee) {return res.status(400).json({ message: "role doesnt exist in db" });
    }
    const token =  authServices.genToken({ name, email, roleEmployee, employeeId, dateEntry, salary});
    const role = roleEmployee.name
    res.status(200).json({
      
      name,
      email,
      role,
      employeeId,
      dateEntry,
      salary,
      token,
    });
  } catch (error) {
    next(error);
  }
};

const registerController = async (req, res, next) => {
  try {
    const newEmployee = req.body;
    const employeeCreated = await authServices.createOne(newEmployee);
    
    
    /*await transporter.sendMail({

      from: 'corporative@gmail.com', 
      to: "admin1@gmail.com", 
      subject: 'Solicitud de autorizacion',
       html: `<h1>Buenas tardes</h1>
              <p>Un nuevo empleado:  ${newEmployee} ha ingresado a la base de datos </p>
            `
            
      })*/
      
    res.status(201).send(employeeCreated);
    
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
  registerController,
};
