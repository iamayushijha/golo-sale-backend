import City from "../model/city.model.js";

class CitiesService {
    async getAllCities() {
        return City.findAll({ raw: true });
    }

    async createCity(data) {
        return City.create(data);
    }

    async updateCity(cityId, updateData) {
        return City.update(updateData, {
            where: {cityId}
        })
    }
}

export default new CitiesService();
