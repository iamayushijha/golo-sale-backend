import dbPool from "../../../../database/dbPool.js";
import ResponseHandler from "../../../../common/reponse_handler.js";

class reportsController {
  // Fetch reports list
  reportsList = (req, res) => {
    ResponseHandler.success(res, [], "Reports List Fetched", 200);
  };

  // Update report details
  updateReport = (req, res) => {
    ResponseHandler.success(res, [], "Report Updated", 200);
  };            
}


export { reportsController };