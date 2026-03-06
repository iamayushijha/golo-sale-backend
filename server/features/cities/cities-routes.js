import { Router } from 'express';
import { CitiesController } from './controller/cities-controller.js'

const router = Router();
const citiesController = new CitiesController();

/**
 * @swagger
 * /cities/getAllCities:
 *   get:
 *     summary: Get all cities
 *     tags: [Cities]
 *     responses:
 *       200:
 *         description: Cities fetched successfully
 */
router.get('/getAllCities', async (req, res, next) => {
     await citiesController.citiesList(req, res, next);
});


/**
 * @swagger
 * /cities/addCity:
 *   post:
 *     summary: Add a new city
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Delhi
 *               cityImageId:
 *                 type: string
 *                 example: adfaf23f
 *               status:
 *                 type: string
 *                 example: active
 *
 *     responses:
 *       200:
 *         description: City added successfully
 */
router.post('/addCity', citiesController.addCity)


/**
 * @swagger
 * /cities/updateCity:
 *   put:
 *     summary: Update city
 *     tags: [Cities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Delhi
 *               cityImageId:
 *                 type: string
 *                 example: adfaf23f
 *               status:
 *                 type: string
 *                 example: active
 *               cityId:
 *                  type: string
 *                  example:  3916514a-42eb-44a2-816a-a23141724133
 *     responses:
 *       200:
 *         description: City updated successfully
 */
router.put('/updateCity', citiesController.updateCity)

export default router;