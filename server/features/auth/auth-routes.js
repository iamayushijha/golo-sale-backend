import express from 'express'
import { AuthController } from './controller/auth-controller.js'

const authController = new AuthController()
const router = express.Router()

/**
 * @swagger
 * /auth/sendOtp:
 *   post:
 *     summary: Send OTP to user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *     responses:
 *       200:
 *         description: OTP sent successfully
 */
router.post("/sendOtp", authController.sendOTP)

/**
 * @swagger
 * /auth/verifyOtp:
 *   post:
 *     summary: Verify OTP
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "9876543210"
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: OTP verified successfully
 */
router.post("/verifyOtp", authController.verifyOTP)

/**
 * @swagger
 * /auth/getAllUsers:
 *   get:
 *     summary: Get all users with pagination
 *     tags: [Auth]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         required: false
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         required: false
 *         description: Number of users per page
 *     responses:
 *       200:
 *         description: List of users with pagination
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: All Users
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalUsers:
 *                       type: integer
 *                       example: 150
 *                     totalPages:
 *                       type: integer
 *                       example: 15
 *                     currentPage:
 *                       type: integer
 *                       example: 1
 *                     pageSize:
 *                       type: integer
 *                       example: 10
 *                     users:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           userId:
 *                             type: string
 *                             example: 22dea9e6-7cfc-4452-8d7b-89fe904a03dc
 *                           firstName:
 *                             type: string
 *                             example: Guest
 *                           lastName:
 *                             type: string
 *                             example: User
 *                           userMobile:
 *                             type: string
 *                             example: "9026513690"
 *                           userEmail:
 *                             type: string
 *                             example: "9026513690"
 *                           gender:
 *                             type: string
 *                             example: male
 *                           walletAmount:
 *                             type: string
 *                             example: "0"
 *                           status:
 *                             type: string
 *                             example: active
 *                           createdOn:
 *                             type: string
 *                             example: "2026-02-24T08:55:58.000Z"
 */
router.get('/getAllUsers', authController.getAllUsers)

export default router