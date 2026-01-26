import ResponseHandler from '../../../common/reponse_handler.js'
import CategoryService from "../service/category.service.js";
import { v4 as uuidv4 } from 'uuid';
import normalizeStatus from "../../../utils/normalization.js";

class CategoryController{

    /// get Category

    getCategory= async (req,res)=>{
        if(!req.query.cityId){
            try{
                const response=await CategoryService.getAllCategories()
                return ResponseHandler.success(res,response,'Category Fetched',200)
            }catch (e){
                return ResponseHandler.error(res,e,500)
            }
        }else{
            try{
                const response=await CategoryService.getCategoryByCityId(req.query.cityId)
                return ResponseHandler.success(res,response,'Category Fetched',200)
            }catch (e){
                return ResponseHandler.error(res,e,500)
            }
        }

    }

    /// Update category

    updateCategory=async (req,res)=>{
        const {categoryId,categoryTitle,categoryInfo,categoryPictureId,cityId,status}=req.body;

        if(!categoryId){
            return ResponseHandler.error(res,'Category Id is required',400)
        }
        if(!categoryTitle){

            return ResponseHandler.error(res,'Category Title is required',400)
        }
        if(!categoryInfo){
            return ResponseHandler.error(res,'Category Info is required',400)
        }
        if(!categoryPictureId){
            return ResponseHandler.error(res,'Category Picture Id is required',400)
        }
        if(!cityId){
            return ResponseHandler.error(res,'City Id is required',400)
        }
        if(!status){
            return ResponseHandler.error(res,'Status is required',400)
        }
        const categoryStatus=normalizeStatus(status)


        try{
            await CategoryService.updateCategory(
                categoryId,
                {categoryTitle,categoryInfo,categoryPictureId,cityId,categoryStatus})
            return ResponseHandler.success(res,[],"Category Updated Successfully",201)
        }catch (e){
            return ResponseHandler.error(res,e,500)
        }
    }
  

    /// add category

    addCategory= async (req,res)=>{
        /// Data body -> categoryId, categoryTitle, categoryInfo, categoryPicture, status
        const categoryId=uuidv4()
        const {categoryTitle,categoryInfo,categoryPictureId,cityId,status}=req.body;

        if(!categoryTitle){
            return ResponseHandler.error(res,'Category Title is required',400)
        }
        if(!categoryInfo){
            return ResponseHandler.error(res,'Category Info is required',400)
        }
        if(!categoryPictureId){
            return ResponseHandler.error(res,'Category Picture Id is required',400)
        }
        if(!cityId){
            return ResponseHandler.error(res,'City Id is required',400)
        }
        if(!status){
            return ResponseHandler.error(res,'Status is required',400)
        }
        const categoryStatus=normalizeStatus(status)

      try{
            const response=await CategoryService.addCategory({
                categoryId,categoryTitle,categoryInfo,categoryPictureId,cityId,categoryStatus
            })
          return ResponseHandler.success(res,[response],"Category Added Successfully",201)
      }catch (e){
          return ResponseHandler.error(res,e,500)
      }



    }



    deleteCategory= (req,res)=>{
        return ResponseHandler.success(res,[],"delete")
    }
}


export { CategoryController}