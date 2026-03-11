import express from 'express'
import { SettingsController } from './controller/settings-controller.js'


const router = express.Router()
const settingsController = new SettingsController();


/**
 * @swagger
 * /settings/get:
 *   get:
 *     summary: Get Settings
 *     tags: [Setting]
 *     responses:
 *       200:
 *         description: Setting fetched successfully
 */
//Get Settings
router.get('/get', settingsController.getSettings)

//Update Settings
router.patch('/update', settingsController.updateSettings)



export default router

