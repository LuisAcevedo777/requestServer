const requestServices = require("../services/request.service");

//Función para crear una solicitud en la base de datos

const createRequestController = async (req, res, next) => {
  try {
    const newRequest = req.body;
    const requestCreated = await requestServices.createOne(newRequest);
    res.status(201).send(requestCreated);
  } catch (error) {
     next(error);
  }
};


//Función para obtener todas las solicitudes de la base de datos

const getAllRequestsController = async (req, res, next) => {
  try {
    
    const getRequests = await requestServices.getAll();
    res.json(getRequests)
  } catch (error) {
    next(error);
  }
};


//Función para obtener una sola solicitud de la base de datos

const getRequestController = async (req, res, next) => {
  try {
    
    const {id} = req.params
    const getRequests = await requestServices.getOne(id);
    res.json(getRequests)
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRequestController,
  getAllRequestsController,
  getRequestController
};
