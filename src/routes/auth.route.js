const { Router } = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/auth.controller");

//Todas las rutas de authenticación para registrarse y login

const authRouter = Router();

authRouter.post("/api/auth/login/", loginController);
authRouter.post("/api/auth/register/", registerController);

module.exports = authRouter;
