import express from 'express'
import {ProductController} from './controller/product-controller.js'

const productController = new ProductController()

const router = express.Router()

/// Get All Products
router.get("/list", productController.productList)

/// Add Product
router.post("/add", productController.addProduct)

/// Update Product
router.put("/update", productController.updateProduct)

/// Search Product (Category wise, Name wise)
router.get('/search',productController.searchProduct)


export default router



