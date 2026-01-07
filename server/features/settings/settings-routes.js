import express from 'express'
import { SettingsController } from './controller/settings-controller.js'


const router = express.Router()
const settingsController = new SettingsController();

//Get Settings
router.get('/get', settingsController.getSettings)

//Update Settings
router.patch('/update', settingsController.updateSettings)



export default router

