import dbPool from "../../../../database/dbPool.js";
import ResponseHandler from "../../../../common/reponse_handler.js";

class DeliveryPartnerController {
  // Fetch delivery partner list
  deliveryPartnerList = (req, res) => {
    ResponseHandler.success(res, [], "Delivery Partner List Fetched", 200);
  };

  // Update delivery partner details
  updateDeliveryPartner = (req, res) => {
    ResponseHandler.success(res, [], "Delivery Partner Updated", 200);
  };

  // Add new delivery partner
  addDeliveryPartner = (req, res) => {
    ResponseHandler.success(res, [], "Delivery Partner Added", 200);
  };

  // Delete delivery partner
  deleteDeliveryPartner = (req, res) => {
    ResponseHandler.success(res, [], "Delivery Partner Deleted", 200);
  };
}

export { DeliveryPartnerController };