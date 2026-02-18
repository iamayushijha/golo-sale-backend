import ResponseHandler from "../../../common/reponse_handler.js"
import productService from "../service/product.service.js";
import { v4 as uuidv4 } from 'uuid';
import {Op} from "sequelize";

class ProductController {

   productList = async (req, res) => {
      
      try{
         const response=await productService.getAllProducts()
         return ResponseHandler.success(res,response,'Product List Fetched',200)
      }catch (error){
         return ResponseHandler.error(res,error,500)
      }

   }

   //update product details
   updateProduct = async(req, res) => {
        // Data Body for Product (productId, productTitle, productInfo, productPrice, productMrp, productStock, productThumbnail, productCategoryId, hasSubscriptionModel, productUnitTag,status)
            const {productId,productTitle, productInfo, productPrice, productMrp, productStock, productThumbnail, productCategoryId, hasSubscriptionModel, productUnitTag,status}=req.body;

      
      
      
      
        try{

         const response=await productService.updateProduct(productId,{
            productTitle,productInfo, productPrice, productMrp, productStock, productThumbnail, productCategoryId, hasSubscriptionModel, productUnitTag, status
         })
         return ResponseHandler.success(res,[],"Product Updated",200)

        }catch(error){
         console.log(error)
         return ResponseHandler.error(res,error,400)
        }

      ResponseHandler.success(res, [], 'Product Updated', 200)
   }

   //add a new product
   addProduct = async (req, res) => {
      // Data Body for Product (productId, productTitle, productInfo, productPrice, productMrp, productStock, productThumbnail, productCategoryId, hashSubscriptionModel, productUnitTag,status)

      const {productTitle, productInfo, productPrice, productMrp, productStock, productThumbnail, productCategoryId, hasSubscriptionModel,productUnitTag}=req.body;

      if(!productTitle){
         return ResponseHandler.error(res,'Product Title is required',400)
      }
      if(!productInfo){
         return ResponseHandler.error(res,'Product Info is required',400)
      }
      if(!productPrice){
         return ResponseHandler.error(res,'Product Price is required',400)
      }
      if(!productMrp){
         return ResponseHandler.error(res,'Product MRP is required',400)
      }
      if(!productStock){
         return ResponseHandler.error(res,'Product Stock is required',400)
      }
      if(!productThumbnail){
         return ResponseHandler.error(res,'Product Thumbnail is required',400)
      }
      if(!productCategoryId){
         return ResponseHandler.error(res,'Product Category Id is required',400)
      }
      if(hasSubscriptionModel===undefined){
         return ResponseHandler.error(res,'Has Subscription Model is required',400)
      }

      if(productUnitTag===undefined){
         return ResponseHandler.error(res,'Has UnitTag is required',400)
      }

      const productId=uuidv4()

      try{
         const response=await productService.addProduct({
            productId,productTitle,productInfo,
            productPrice,productMrp,productStock,
            productThumbnail,productCategoryId,
            hasSubscriptionModel,productUnitTag,})
         return ResponseHandler.success(res,response,'Product Added',200)
      }catch (e) {
         return ResponseHandler.error(res,e,500)
      }


   }


   /// Search Product
   searchProduct = async (req, res) => {
      try {

         let { productTitle, categoryId,productId } = req.query;

         let whereCondition = {};

         // Search by Product Title (LIKE search for single word also)
         if (productTitle && productTitle.trim() !== "") {
            whereCondition.productTitle = {
               [Op.like]: `%${productTitle.trim()}%`
            };
         }

         // Search by I'd

         if(productId){
            whereCondition.productId = productId
         }

         // Search by Category
         if (categoryId) {
            whereCondition.productCategoryId = categoryId;
         }

         const response = await productService.searchProduct(whereCondition);

         return ResponseHandler.success(
             res,
             response,
             "Product Search Result",
             200
         );

      } catch (error) {
         return ResponseHandler.error(res, error.message, 500);
      }
   };


   //delete product
   deleteProduct = (req, res) => {
      ResponseHandler.success(res, [], 'Product Deleted', 200)
   }
}

export { ProductController }