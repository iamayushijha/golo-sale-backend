import express from 'express'
import { CategoryController }  from './controller/category-controller.js'
const router=express.Router()
const categoryController=new CategoryController();



/// Get Categories
router.get('/getCategories',categoryController.getCategory)



/// Save Categories
router.post('/addCategory',categoryController.addCategory)





/// Update Categories
router.put('/updateCategory',categoryController.updateCategory)


export default router