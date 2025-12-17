import dbPool from '../../../database/db.pool.js'
import ResponseHandler from '../../../common/reponse_handler.js'


class CategoryController{

    /// get Category

    getCategory= (res,req)=>{
        return ResponseHandler.success(res,[],"working")
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