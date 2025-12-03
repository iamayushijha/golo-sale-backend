import express from 'express'
import { AuthController } from './controller/auth-controller.js'
import { validate } from '../../utils/validate.middleware.js'
import  AuthValidations from '../auth/auth.validations.js'
const authController = new AuthController()

//AuthController().doLogin

const router = express.Router()

router.post("/register", validate(AuthValidations.registerSchema), authController.doRegister)

router.post("/login", authController.doLogin)

router.get("/test", (req, res)=>{
    res.send("Ok working")
})
export default router

// xyz.com/getStates --list 
//xyz.com/getAllDistrictById?stateId=123

//xyz.com/stateDistrict/123