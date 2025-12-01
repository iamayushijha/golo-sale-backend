import ResponseHandler from "../../../common/reponse_handler.js"

class CartController{

    cartList = (req , res)=>{
        ResponseHandler.success(res, [], 'Cart Fetched Successfully', 200)
    }
}

export {CartController}