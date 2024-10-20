const { Router } = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/auth.controller");
const loginValidator = require('../validators/login.validator')
const registerValidator = require('../validators/register.validator')

//Todas las rutas de authenticación para registrarse y login

const authRouter = Router();

authRouter.post("/api/auth/login/",loginValidator, loginController);
authRouter.post("/api/auth/register/",registerValidator, registerController);

module.exports = authRouter;
