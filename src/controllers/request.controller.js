const requestServices = require("../services/request.service");

const createRequestController = async (req, res, next) => {
  try {
    const newRequest = req.body;
    const requestCreated = await requestServices.createOne(newRequest);
    res.status(201).send(requestCreated);
  } catch (error) {
    next(error);
  }
};


const getAllRequestsController = async (req, res, next) => {
  try {
    
    const getRequests = await requestServices.getAll();
    res.json(getRequests)
  } catch (error) {
    next(error);
  }
};


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
