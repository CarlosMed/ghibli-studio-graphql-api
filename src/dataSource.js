const { RESTDataSource } = require('apollo-datasource-rest');

class GhibliAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://ghibliapi.herokuapp.com`;
  }

  async getFilms() {
    return this.get('/films');
  }
  async getPeople() {
    return this.get('/people');
  }
  async getLocations() {
    return this.get('/locations');
  }
  async getSpecies() {
    return this.get('/species');
  }
  async getVehicles() {
    return this.get('/vehicles');
  }
}

module.exports = GhibliAPI;
