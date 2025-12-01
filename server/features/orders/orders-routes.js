import express from 'express'
import { OrdersController } from './controller/orders-controller.js'

const ordersController = new OrdersController()

const router = express.Router()

router.get("/list", ordersController.ordersList)

export default router