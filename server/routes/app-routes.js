import express from 'express'
import authRoutes from '../features/auth/auth-routes.js'
import productRoutes from '../features/product/product-routes.js'
import promotionsRoutes from '../features/promotions/promotions-routes.js'
import reportsRoutes from '../features/reports/reports-routes.js'
const router = express.Router()

// Feature Routes

// Auth Routes starts

router.use("/auth", authRoutes)


// auth routes end

// Product Routes Starts

router.use("/product", productRoutes)

// Products Routes Ends 

//Promotions Routes  

router.use("/promotions", promotionsRoutes)

// Reports Routes

router.use("/reports", reportsRoutes)


export default router