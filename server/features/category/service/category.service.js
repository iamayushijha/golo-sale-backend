import Category from '../model/category.model.js'
import {where} from "sequelize";



class CategoryService {

    getAllCategories=()=>{
        return Category.findAll({raw:true})
    }
    getCategoryByCityId=(cityId)=>{
        return Category.findAll({where:{cityId},raw:true})
    }
    addCategory=(data)=>{
        return Category.create(data)
    }
    updateCategory=(categoryId,data)=>{
        return Category.update(
            data,
            {where:{categoryId}}
        )
    }
}



export default new CategoryService();