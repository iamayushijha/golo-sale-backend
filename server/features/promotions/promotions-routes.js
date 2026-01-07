import express from 'express'
import  {PromotionsController} from './controller/promotions-controller.js'


const router = express.Router()
const promotionsController = new PromotionsController();

router.get("/list", promotionsController.promotionsList)
router.post("/add", promotionsController.addPromotion)
router.patch("/update", promotionsController.updatePromotion)
router.delete("/delete", promotionsController.deletePromotion)



export default router