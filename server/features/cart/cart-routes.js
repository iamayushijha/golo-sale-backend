import express from 'express'
import { CartController } from './controller/cart-controller.js'

const cartController = new CartController()


const router = express.Router()

router.get("/list", cartController.cartList)

export default router