const { check, body } = require("express-validator");
const validate = require("../utils/validate");

//validación para las rutas de empleados


const employeeUpdateValidator = [

    body("roleId", "error in roleId")
    .optional()
    .isInt()
    .withMessage("roleId should be an integer"),

  check("name", "error in name")
    .optional()
    .isString()
    .withMessage("name should be a string")
    .isLength({ max: 50 })
    .withMessage("name should have just 50 characteres"),

  check("email", "error in email")
    .optional()
    .isEmail()
    .withMessage("email shoul be an valid email")
    .isString()
    .withMessage("email should be a string")
    .isLength({ max: 255 })
    .withMessage("email should have just 255 characteres"),

  check("password", "error in password")
    .optional()
    .isString()
    .withMessage("password should be a string")
    .isLength({ max: 555 })
    .withMessage("password should have just 555 characteres"),

  (req, res, next) => {
    validate(req, res, next);
  },
];

module.exports = employeeUpdateValidator;
