import AgentService from "../service/agent.service.js";
import ResponseHandler from "../../../common/reponse_handler.js";
import { v4 as uuidv4 } from 'uuid';

class DeliveryPartnerController {

  // Fetch delivery partner list
  deliveryPartnerList =async (req, res) => {

    try {
      const response= await AgentService.getAllDeliveryPartner();
      return ResponseHandler.success(res, response);
    }catch(err) {
      return ResponseHandler.error(res, err);
    }
  };

  // Update delivery partner details
  updateDeliveryPartner = (req, res) => {
    ResponseHandler.success(res, [], "Delivery Partner Updated", 200);
  };

  // Add new delivery partner
  addDeliveryPartner = async (req, res) => {
    const requiredFields = [
      "firstName",
      "lastName",
      "mobile",
      "cityId",
      "status",
    ];
    const missingField = requiredFields.find(field => req.body[field] === undefined);

    if (missingField) {
      return ResponseHandler.error(res, `${missingField} is required`, 400);
    }

    const aId= uuidv4()
    req.body.agentId= aId;
    try{
      const response=await AgentService.addDeliveryPartner(req.body);
      return ResponseHandler.success(res, response);
    }catch(err) {
      return ResponseHandler.error(res, err);
    }

  };

  // Delete delivery partner
  deleteDeliveryPartner = async (req, res) => {
   try{
     if(req.query.agentId===undefined){
       return  ResponseHandler.error(res,"Agent ID is required");
     }
     else{
       const response=await AgentService.deleteDeliveryPartner(req.query.agentId);
       return ResponseHandler.success(res, response);
     }
   }catch (err){
     return ResponseHandler.error(res, err);
   }
  };
}

export { DeliveryPartnerController };