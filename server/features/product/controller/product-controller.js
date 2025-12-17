import ResponseHandler from "../../../common/reponse_handler.js"


class ProductController {
   productList = (req, res) => {
      ResponseHandler.success(res, [], 'Product List Fetched', 200)
   }

   //update product details
   updateProduct = (req, res) => {
      ResponseHandler.success(res, [], 'Product Updated', 200)
   }

   //add new product
   addProduct = (req, res) => {
      ResponseHandler.success(res, [], 'Product Added', 200)
   }

   //delete product
   deleteProduct = (req, res) => {
      ResponseHandler.success(res, [], 'Product Deleted', 200)
   }
}

export { ProductController }