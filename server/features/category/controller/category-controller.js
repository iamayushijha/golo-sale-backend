import ResponseHandler from '../../../common/reponse_handler.js'
import CategoryService from "../service/category.service.js";

class CategoryController{

    /// get Category

    getCategory= async (req,res)=>{
        try{
            const response=await CategoryService.getAllCategories()
            return ResponseHandler.success(res,response,'Category Fetched',200)
        }catch (e){
            return ResponseHandler.error(res,e,500)
        }
    }

    /// Update category

    updateCategory=(res,req)=>{
        return ResponseHandler.success(res,[],"abc")
    }
  

    /// add category

    addCategory= (res,req)=>{
        return ResponseHandler.success(res,[],"af")
    }

    deleteCategory= (res,req)=>{
        return ResponseHandler.success(res,[],"delete")
    }
}


export { CategoryController}