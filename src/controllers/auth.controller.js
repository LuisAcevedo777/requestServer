const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authServices = require("../services/auth.service");
const transporter = require('../utils/mailer');
const employeeServices = require("../services/employee.service");

//Código del login

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  
  //verificación de empleado por medio del email
  try {
    const employee = await authServices.getEmployee(email);
    if (!employee) {
      return res.status(400).json({ message: "Empleado no existe" });
    }
    
 //verificación de empleado por medio de comprobación del password enviado

    const pass = await bcrypt.compare(password, employee.password);
    if (!pass) {
      return res.status(400).json({ message: "La contraseña está mal" });
    }
     
 //Destructuración de propiedades de empleado una vez verificado

    const { name, roleId, employeeId, dateEntry, salary} = employee;

 //consulta del objeto del rol con el Id proporcionado

    const roleEmployee = await employeeServices.getRole(roleId)
        if (!roleEmployee) {return res.status(400).json({ message: "Role no existe" });
    }

    //Envío de objeto a servicios para ser firmado con un token

    const token =  authServices.genToken({ name, email, roleEmployee, employeeId, dateEntry, salary});
    
    //Asignación del nombre del rol a una variable "role"

    const role = roleEmployee.name
   
    //envío de respuesta en formato json incluyendo el role y el token entre otros
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


//código de registro de usuarios

const registerController = async (req, res, next) => {
  try {
    const newEmployee = req.body;
    const employeeCreated = await authServices.createOne(newEmployee);
    
    //código para enviar a email del administrador una vez creado el usuario con la finalidad de que sea cambiado su rol
    
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
