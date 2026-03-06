import express from 'express'
import {AddressController} from './controller/address-controller.js'


const addressController = new AddressController()
const router = express.Router()


router.get('/list',addressController.getAddress)

router.post('/add',addressController.addAddress)

router.put('/update',addressController.updateAddress)

router.delete('/delete',addressController.deleteAddress)


export default router