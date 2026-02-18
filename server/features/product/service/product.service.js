import Product from '../model/product.model.js'

class  ProductService{

    getAllProducts = () => {
        return Product.findAll({raw: true})
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