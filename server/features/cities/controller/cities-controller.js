import dbPool from "../../../../database/dbPool.js";
import ResponseHandler from "../../../../common/reponse_handler.js";

class CitiesController {
  // Fetch cities list
  citiesList = (req, res) => {
    ResponseHandler.success(res, [], "Cities List Fetched", 200);
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