import { Router } from "express";
import { CouponController } from "./controller/coupon_controller.js";

const router = Router()
const couponController = new CouponController()

/**
 * @swagger
 * tags:
 *   name: Coupons
 *   description: Coupon management APIs
 */


/**
 * @swagger
 * /coupon/search:
 *   get:
 *     summary: Search coupons by couponCode
 *     tags: [Coupons]
 *     parameters:
 *       - in: query
 *         name: couponCode
 *         required: false
 *         schema:
 *           type: string
 *           example: 23b
 *         description: Search coupon by code (example coupon/search?couponCode=23b)
 *     responses:
 *       200:
 *         description: Coupons fetched successfully
 */
router.get('/search', couponController.searchCoupons)


/**
 * @swagger
 * /coupon/add:
 *   post:
 *     summary: Add new coupon
 *     tags: [Coupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               couponCode:
 *                 type: string
 *                 example: SAVE20
 *               couponInfo:
 *                 type: string
 *                 example: 20% discount on orders
 *               discountPercentage:
 *                 type: number
 *                 example: 20
 *               maxCap:
 *                 type: number
 *                 example: 500
 *               minCap:
 *                 type: number
 *                 example: 100
 *               status:
 *                 type: string
 *                 example: active
 *
 *     responses:
 *       200:
 *         description: Coupon created successfully
 */
router.post('/add', couponController.addCoupon)


/**
 * @swagger
 * /coupon/update:
 *   put:
 *     summary: Update coupon
 *     tags: [Coupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               couponId:
 *                 type: integer
 *                 example: 1
 *               couponCode:
 *                 type: string
 *                 example: SAVE25
 *               couponInfo:
 *                 type: string
 *                 example: 25% discount on orders
 *               discountPercentage:
 *                 type: number
 *                 example: 25
 *               maxCap:
 *                 type: number
 *                 example: 700
 *               minCap:
 *                 type: number
 *                 example: 150
 *               status:
 *                 type: string
 *                 example: active

 *     responses:
 *       200:
 *         description: Coupon updated successfully
 */
router.put('/update', couponController.updateCoupon)


/**
 * @swagger
 * /coupon/delete:
 *   delete:
 *     summary: Delete coupon
 *     tags: [Coupons]
 *     parameters:
 *       - in: query
 *         name: couponId
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Coupon ID to delete
 *     responses:
 *       200:
 *         description: Coupon deleted successfully
 */
router.delete('/delete', couponController.deleteCoupon)


/**
 * @swagger
 * /coupon/list:
 *   get:
 *     summary: Get all coupons
 *     tags: [Coupons]
 *     responses:
 *       200:
 *         description: Coupon list fetched successfully
 */
router.get('/list', couponController.getCoupons)

export default router