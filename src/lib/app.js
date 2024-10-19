const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("../utils/db");
const initModel = require("../models/init.model");
const authRouter = require("../routes/auth.route");
const employeeRouter = require("../routes/employee.route");
const requestRouter = require("../routes/request.route");
const errorRouter = require("../routes/errorHandler.route");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("../../swagger.json");
const seedRoles = require("../seed");

require("dotenv").config();

const app = express();
initModel();


  db.authenticate();
  console.log("db authenticated");

   db.sync({alter: true });
  console.log('db synchronized');

 



  const PORT = process.env.PORT || 8001;

  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
  app.use(employeeRouter);
  app.use(requestRouter);
  app.use(authRouter);
  errorRouter(app);

  if (require.main === module) {
  app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  });}



module.exports = app;
 