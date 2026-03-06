import express from 'express'
import { CartController } from './controller/cart-controller.js'

const cartController = new CartController()


const router = express.Router()

router.get('/getCart', cartController.cartList)

router.post('/add',cartController.addToCart)

router.put('/update',cartController.updateCart)

router.delete('/remove',cartController.removeItemFromCart)

export default router