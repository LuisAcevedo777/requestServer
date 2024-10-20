const jwt = require("jsonwebtoken");

//middleware para verificar que el usuario tenga token

const authMiddleware = (req, res, next) => {
  const token = req.headers["token"];
  try {
    const employeeToken = jwt.verify(token, "clave", { algorithm: "HS512" });
    
    req.tok = employeeToken;
    req.role = employeeToken.roleEmployee.name
    next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

//middleware para verificacion del rol y poder acceder al controlador

const verificarRol = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.role)) {
      next();
    } else {
      return res.status(403).send('Acceso denegado');
    }
  };
};


module.exports = {
  
  authMiddleware, 
  verificarRol
}
