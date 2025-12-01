import express from 'express'
import {ProductController} from './controller/product-controller.js'

const productController = new ProductController()

const router = express.Router()

router.get("/list", productController.productList)


export default router



