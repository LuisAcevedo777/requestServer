const requestModel = require("../models/request.model");

class requestServices {
  static async createOne(newRequest) {
    try {
      const requestCreated = await requestModel.create(newRequest);
      return requestCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const getAllRequests = await requestModel.findAll();
      return getAllRequests;
    } catch (error) {
      throw error;
    }
  }

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
