const { validationResult } = require("express-validator");

//Porción de código para lanzar la validación con express-validator

const validate = (req, res, next) => {
  validationResult(req).throw();
  return next();
};

module.exports = validate;
