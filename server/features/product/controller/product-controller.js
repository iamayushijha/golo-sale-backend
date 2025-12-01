import ResponseHandler from "../../../common/reponse_handler.js"


class ProductController{
     productList = (req , res)=>{
        ResponseHandler.success(res, [], 'Product List Fetched', 200)
     }
}

export {ProductController}