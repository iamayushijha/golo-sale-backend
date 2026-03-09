import Product from '../model/product.model.js'
import CategoryModel from "../../category/model/category.model.js";


class  ProductService{

    getAllProducts = () => {
        return Product.findAll(
            {
            include: [
                {
                    model:CategoryModel,
                    as: 'category',
                    attributes: [ 'categoryTitle', 'categoryInfo'],
                },

            ]})
    }
    addProduct = (data) => {
        return Product.create(data)
    }

    searchProduct = (whereCondition) => {
        return Product.findAll({
            where: whereCondition,
            raw: true
        });
    };


    updateProduct =(productId,data)=>{
        return Product.update(
             data,
            {where:{productId}}
        )
    }

}

export default new ProductService();