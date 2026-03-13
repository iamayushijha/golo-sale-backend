import express from 'express'
import { AddressController } from './controller/address-controller.js'

const addressController = new AddressController()
const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Address
 *   description: User address management APIs
 */


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
 *         description: No address found
 */
router.get('/list', addressController.getAddress)


/**
 * @swagger
 * /address/add:
 *   post:
 *     summary: Add new address
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - holderName
 *               - building
 *               - landmark
 *               - cityId
 *               - setAsDefault
 *               - latitude
 *               - longitude
 *               - houseImage
 *               - addressType
 *               - status
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "USR123"
 *               holderName:
 *                 type: string
 *                 example: "Rahul Sharma"
 *               building:
 *                 type: string
 *                 example: "A-45 Green Apartment"
 *               landmark:
 *                 type: string
 *                 example: "Near Metro Station"
 *               cityId:
 *                 type: string
 *                 example: "CITY001"
 *               setAsDefault:
 *                 type: integer
 *                 example: 1
 *               latitude:
 *                 type: string
 *                 example: "28.6139"
 *               longitude:
 *                 type: string
 *                 example: "77.2090"
 *               houseImage:
 *                 type: string
 *                 example: "house1.png"
 *               addressType:
 *                 type: string
 *                 example: "home"
 *               status:
 *                 type: string
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Address added successfully
 *       400:
 *         description: Validation error
 */
router.post('/add', addressController.addAddress)


/**
 * @swagger
 * /address/update:
 *   put:
 *     summary: Update address
 *     tags: [Address]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - addressId
 *             properties:
 *               addressId:
 *                 type: string
 *                 example: "ADDR12345"
 *               holderName:
 *                 type: string
 *                 example: "Rahul Sharma"
 *               building:
 *                 type: string
 *                 example: "A-45 Green Apartments"
 *               landmark:
 *                 type: string
 *                 example: "Near City Mall"
 *               cityId:
 *                 type: string
 *                 example: "CITY001"
 *               setAsDefault:
 *                 type: integer
 *                 example: 1
 *               latitude:
 *                 type: string
 *                 example: "28.6139"
 *               longitude:
 *                 type: string
 *                 example: "77.2090"
 *               houseImage:
 *                 type: string
 *                 example: "house_front.jpg"
 *               addressType:
 *                 type: string
 *                 example: "home"
 *               status:
 *                 type: string
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Address updated successfully
 *       400:
 *         description: Validation error
 */
router.put('/update', addressController.updateAddress)

/**
 * @swagger
 * /address/delete:
 *   delete:
 *     summary: Delete address
 *     tags: [Address]
 *     parameters:
 *       - in: query
 *         name: addressId
 *         required: true
 *         schema:
 *           type: string
 *         description: Address ID to delete
 *     responses:
 *       200:
 *         description: Address deleted successfully
 *       400:
 *         description: addressId is required
 */
router.delete('/delete', addressController.deleteAddress)


export default router