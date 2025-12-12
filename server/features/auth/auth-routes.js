import express from 'express'
import { AuthController } from './controller/auth-controller.js'

const authController = new AuthController()

//AuthController().doLogin

const router = express.Router()

router.post("/authUser", authController.authenticateUser)
router.get("/sendOtp", authController.sendOTP)


router.get("/test", (req, res)=>{
    res.send("Ok working")
})
export default router

