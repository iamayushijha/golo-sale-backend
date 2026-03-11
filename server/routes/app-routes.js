import express from 'express'
import authRoutes from '../features/auth/auth-routes.js'
import productRoutes from '../features/product/product-routes.js'
import bannerRoutes from '../features/banners/banners-routes.js'
import reportsRoutes from '../features/reports/reports-routes.js'
import cartRoutes from '../features/cart/cart-routes.js'
import ordersRoutes from '../features/orders/orders-routes.js'
import categoryRoutes from '../features/category/category-routes.js'
import settingsRoutes from '../features/settings/settings-routes.js'
import cityRoutes from '../features/cities/cities-routes.js'
import mediaRoutes from '../features/media/media-routes.js'
import addressRoutes from "../features/address/address-routes.js";
import couponRoutes from "../features/coupon/coupon-routes.js"

const router = express.Router()

// Feature Routes

// Auth Routes

router.use("/auth", authRoutes)


// Product Routes

router.use("/product", productRoutes)


//Promotions Routes  

router.use("/banners", bannerRoutes)

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

// Cities Routes
router.use('/cities',cityRoutes)


//// Media Routes
router.use('/media',mediaRoutes)


/// Coupon
router.use('/coupon',couponRoutes)

// Address Routes
router.use('/address',addressRoutes)

export default router


