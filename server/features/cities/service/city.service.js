import City from "../model/city.model.js";

class CitiesService {
    async getAllCities() {
        return City.findAll({ raw: true });
    }

    async createCity(data) {
        return City.create(data);
    }
}

export default new CitiesService();
