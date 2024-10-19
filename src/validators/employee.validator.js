const { check, body } = require("express-validator");
const validate = require("../utils/validate");

const employeeValidator = [
  body("employeeId", "error in employeeId")
    .exists()
    .withMessage("employeeId should to exist")
    .isInt()
    .withMessage("employeeId should be an integer"),

    body("roleId", "error in roleId")
    .exists()
    .withMessage("roleId should to exist")
    .isInt()
    .withMessage("roleId should be an integer"),

  check("name", "error in name")
    .exists()
    .withMessage("name should to exist")
    .isString()
    .withMessage("name should be a string")
    .isLength({ max: 50 })
    .withMessage("name should have just 50 characteres"),

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

module.exports = employeeValidator;
