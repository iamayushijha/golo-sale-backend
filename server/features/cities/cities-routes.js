import { Router } from 'express';
import {CitiesController} from './controller/cities-controller.js'
const router = Router();
const citiesController = new CitiesController();


router.get('/getAllCities', async (req, res, next) => {
     await citiesController.citiesList(req, res, next);
});


router.put('/addCity', async (req, res, next) => {
    await citiesController.addCity(req, res, next);
})



export default router;