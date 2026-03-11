import express from 'express'
import {AddressController} from './controller/address-controller.js'


const addressController = new AddressController()
const router = express.Router()

/**
 * @swagger
 * /address/list:
 *   get:
 *     summary: Get all addresses for a user
 *     tags: [Address]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID to fetch addresses
 *     responses:
 *       200:
 *         description: Addresses fetched successfully
 *       400:
 *         description: userId is required
 *       404:
 *         description: No address found for this user
 */
router.get('/list',addressController.getAddress)

router.post('/add',addressController.addAddress)

router.put('/update',addressController.updateAddress)

router.delete('/delete',addressController.deleteAddress)


export default router