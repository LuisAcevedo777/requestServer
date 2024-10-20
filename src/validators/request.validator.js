const { check, body } = require("express-validator");
const validate = require("../utils/validate");

//validación para las rutas de las solicitudes

const requestValidator = [

  check("code", "error in code")
     .isString()
    .withMessage("code should be a string")
    .isLength({ max: 50 })
    .withMessage("title should have just 50 characteres"),

  check("summary", "error in summary")
    .exists()
    .withMessage("summary should to exist")
    .isString()
    .withMessage("summary should be a string")
    .isLength({ max: 50 })
    .withMessage("summary should have just 50 characteres"),

  
  (req, res, next) => {
    validate(req, res, next);
  },
];

module.exports = requestValidator;
