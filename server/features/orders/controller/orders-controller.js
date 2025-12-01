import ResponseHandler from "../../../common/reponse_handler.js"


class OrdersController{

    ordersList = (req, res)=>{
        ResponseHandler.success(res, [], "Orders List Fetched", 200)
    }
}

export {OrdersController}