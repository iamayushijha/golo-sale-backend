import Category from '../model/category.model.js'



class CategoryService {

    getAllCategories=()=>{
        return Category.findAll({raw:true})
    }
    addCategory=()=>{
        return Category.create({})
    }
    updateCategory=()=>{

    }
}



export default new CategoryService();