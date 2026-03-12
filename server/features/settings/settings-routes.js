import express from 'express'
import { SettingsController } from './controller/settings-controller.js'

const router = express.Router()
const settingsController = new SettingsController();

/**
 * @swagger
 * tags:
 *   name: Settings
 *   description: Application Settings APIs
 */


/**
 * @swagger
 * /settings/get:
 *   get:
 *     summary: Get application settings
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: Settings fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 settingsId:
 *                   type: integer
 *                   example: 1
 *                 deliveryFreeAbove:
 *                   type: integer
 *                   example: 500
 *                 deliveryFee:
 *                   type: integer
 *                   example: 40
 *                 referReceiverCommission:
 *                   type: integer
 *                   example: 50
 *                 maintenanceMode:
 *                   type: integer
 *                   example: 0
 *                 isCodEnable:
 *                   type: integer
 *                   example: 0
 */
// Get Settings
router.get('/get', settingsController.getSettings)


/**
 * @swagger
 * /settings/update:
 *   patch:
 *     summary: Update application settings
 *     tags: [Settings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deliveryFreeAbove:
 *                 type: integer
 *                 example: 500
 *               deliveryFee:
 *                 type: integer
 *                 example: 40
 *               referReceiverCommission:
 *                 type: integer
 *                 example: 50
 *               maintenanceMode:
 *                 type: integer
 *                 description: 0 = OFF, 1 = ON
 *                 example: 0
 *               paymentMethod:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Settings updated successfully
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */
// Update Settings
router.patch('/update', settingsController.updateSettings)

/**
 * @swagger
 * /settings/dashboard:
 *   get:
 *     summary: Get dashboard statistics
 *     tags: [Settings]
 *     responses:
 *       200:
 *         description: Dashboard data fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalUsers:
 *                   type: integer
 *                   example: 120
 *                 totalProducts:
 *                   type: integer
 *                   example: 85
 *                 totalOrders:
 *                   type: integer
 *                   example: 540
 *                 pendingOrders:
 *                   type: integer
 *                   example: 12
 *                 totalSubscriptions:
 *                   type: integer
 *                   example: 34
 *       500:
 *         description: Server error
 */
// Dashboard data

router.get('/dashboard', settingsController.getDashboard)

export default router