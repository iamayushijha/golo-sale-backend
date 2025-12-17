import dbPool from "../../../../database/dbPool.js";
import ResponseHandler from "../../../../common/reponse_handler.js";

class PromotionsController {
  // Fetch promotions list
  promotionsList = (req, res) => {
    ResponseHandler.success(res, [], "Promotions List Fetched", 200);
  };

  // Update promotion details
  updatePromotion = (req, res) => {
    ResponseHandler.success(res, [], "Promotion Updated", 200);
  };

  // Add new promotion
  addPromotion = (req, res) => {
    ResponseHandler.success(res, [], "Promotion Added", 200);
  };

  // Delete promotion
  deletePromotion = (req, res) => {
    ResponseHandler.success(res, [], "Promotion Deleted", 200);
  };
}

export { PromotionsController };