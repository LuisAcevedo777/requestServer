const { check, body } = require("express-validator");
const validate = require("../utils/validate");

//validación para las rutas de empleados


const loginValidator = [

    check("email", "error in email")
    .exists()
    .withMessage("email should to exist")
    .isEmail()
    .withMessage("email shoul be an valid email")
    .isString()
    .withMessage("email should be a string")
    .isLength({ max: 255 })
    .withMessage("email should have just 255 characteres"),

  check("password", "error in password")
    .exists()
    .withMessage("password should to exist")
    .isString()
    .withMessage("password should be a string")
    .isLength({ max: 555 })
    .withMessage("password should have just 555 characteres"),

  (req, res, next) => {
    validate(req, res, next);
  },
];

module.exports = loginValidator;
