import express from 'express'
import { AuthController } from './controller/auth-controller.js'

const authController = new AuthController()

//AuthController().doLogin

const router = express.Router()


router.post("/sendOtp", authController.sendOTP)
router.post("/verifyOtp", authController.verifyOTP)





export default router

