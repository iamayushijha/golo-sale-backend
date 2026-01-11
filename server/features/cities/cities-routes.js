import { Router } from 'express';
import {CitiesController} from './controller/cities-controller.js'


const router = Router();
const citiesController = new CitiesController();


router.get('/getAllCities', async (req, res, next) => {
     await citiesController.citiesList(req, res, next);
});


router.post('/addCity',citiesController.addCity)

router.put('/updateCity',citiesController.updateCity)



export default router;