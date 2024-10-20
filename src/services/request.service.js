const requestModel = require("../models/request.model");

//Clase de todos los servicios de las solicitudes

class requestServices {

//crea una nueva solicitud

  static async createOne(newRequest) {
    try {
      const requestCreated = await requestModel.create(newRequest);
      return requestCreated;
    } catch (error) {
      throw error;
    }
  }

  //obtiene todas las solicitudes de la base de datos

  static async getAll() {
    try {
      const getAllRequests = await requestModel.findAll();
      return getAllRequests;
    } catch (error) {
      throw error;
    }
  }

//Obitene una sola solicitud de la base de datos por medio del id de la solicitud

  static async getOne(id) {
    try {

      const getAllRequests = await requestModel.findByPk(id);
      return getAllRequests;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = requestServices;
