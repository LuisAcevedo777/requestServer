const { Router } = require("express");
const {
  createRequestController,
  getAllRequestsController,
  getRequestController

} = require("../controllers/request.controller");

const requestRouter = Router();

requestRouter.post("/api/request", createRequestController);

requestRouter.get("/api/request", getAllRequestsController);

requestRouter.get("/api/request/:id", getRequestController);

module.exports = requestRouter;
