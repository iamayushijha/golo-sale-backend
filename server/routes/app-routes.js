import express from 'express'
import authRoutes from '../features/auth/auth-routes.js'
import productRoutes from '../features/product/product-routes.js'
import promotionsRoutes from '../features/promotions/promotions-routes.js'
import reportsRoutes from '../features/reports/reports-routes.js'
import cartRoutes from '../features/cart/cart-routes.js'
import ordersRoutes from '../features/orders/orders-routes.js'
import categoryRoutes from '../features/category/category-routes.js'
import settingsRoutes from '../features/settings/settings-routes.js'

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


// Cart Routes

router.use("/cart", cartRoutes)


// Order Routes

router.use("/orders", ordersRoutes)


// Category Routes
router.use('/category',categoryRoutes)

//Settings Routes
router.use('/settings',settingsRoutes)

export default router


