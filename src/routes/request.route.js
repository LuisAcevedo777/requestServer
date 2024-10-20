const { Router } = require("express");
const {
  createRequestController,
  getAllRequestsController,
  getRequestController

} = require("../controllers/request.controller");
const requestValidator = require('../validators/request.validator')
const {authMiddleware, verificarRol} = require('../middlewares/auth.middleware')


const requestRouter = Router();

requestRouter.post("/api/request",requestValidator,authMiddleware,verificarRol(['admin','employee']),createRequestController);

requestRouter.get("/api/request",authMiddleware,verificarRol(['admin','employee']),getAllRequestsController);

requestRouter.get("/api/request/:id",authMiddleware, verificarRol(['admin','employee']), getRequestController);

module.exports = requestRouter;
