const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers["token"];
  try {
    const employeeToken = jwt.verify(token, "clave", { algorithm: "HS512" });
    req.tok = employeeToken;
    next();
  } catch (error) {
    return res.status(400).json(error);
  }
};


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
