import ResponseHandler from "../../../common/reponse_handler.js"
import dbPool from "../../../database/db.pool.js"

class CitiesController {
  // Fetch cities list
  citiesList = async (req, res, next) => {
    try {
      const [rows] = await dbPool.execute('SELECT * FROM cities');
      ResponseHandler.success(res, rows, 'Cities List Fetched', 200);
    } catch (error) {
      ResponseHandler.error(res, error.message, 500);
    }
  };


  // Update city details
  updateCity = (req, res) => {
    ResponseHandler.success(res, [], "City Updated", 200);
  };

  // Add new city
  addCity = (req, res) => {

    ResponseHandler.success(res, [], "City Added", 200);
  };

  // Delete city
  deleteCity = (req, res) => {
    ResponseHandler.success(res, [], "City Deleted", 200);
  };
}

export { CitiesController };