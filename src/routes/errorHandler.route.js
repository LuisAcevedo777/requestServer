const {
  logError,
  errorHandler,
  orm,
} = require("../middlewares/errorHandler.middleware");

//Código que utiliza los diferentes manejos dados en el middleware de error


const errorRouter = (app) => {
  app.use(logError);
  app.use(errorHandler);
  app.use(orm);
};

module.exports = errorRouter;
