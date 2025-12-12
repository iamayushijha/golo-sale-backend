import express from 'express'
import { CategoryController }  from './controller/category-controller.js'
const router=express.Router()
const categoryController=new CategoryController();



/// Get Categories
router.get('/getCategories',categoryController.getCategory)



/// Save Categories

router.put('/addCategory',categoryController.addCategory)


/// Update Categories

router.patch('/updateCategory',categoryController.updateCategory)


export default router