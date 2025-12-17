import dbPool from "../../../../database/dbPool.js";
import ResponseHandler from "../../../../common/reponse_handler.js";

class SubscriptionController {

    // Fetch subscription list
    subscriptionList = (req, res) => {
        ResponseHandler.success(res, [], "Subscription List Fetched", 200);
    }
}

export { SubscriptionController };