import Product from '../model/product.model.js'

class  ProductService{

    getAllProducts = () => {
        return Product.findAll({raw: true})
    }
    addProduct = (data) => {
        return Product.create(data)
    }

    searchProduct = (data) => {
        return Product.findAll({where: data,raw: true})
    }
}

export default new ProductService();