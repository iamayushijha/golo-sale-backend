import express from 'express'
import  {BannersController} from './controller/banners-controller.js'


const router = express.Router()
const bannersController = new BannersController();

router.get("/list", bannersController.bannersList)
router.get('/bannersByCity',bannersController.bannerByCityId)
router.post("/add", bannersController.addBanner)
router.put("/update", bannersController.updateBanner)
router.delete("/delete", bannersController.deleteBanner)



export default router