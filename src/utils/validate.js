
const { validationResult } = require("express-validator");

//Porción de código para lanzar manejar los errores de validación con express-validator

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    
    return res.status(400).json({ errors: errors.array() });
  }
  next(); 
};

module.exports = validate;
