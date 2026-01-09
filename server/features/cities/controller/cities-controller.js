import ResponseHandler from "../../../common/reponse_handler.js";
import {uploadMedia} from "../../../common/multer.js";
import { v4 as uuidv4 } from 'uuid';
import normalizeStatus from "../../../utils/normalization.js";
import CitiesService from "../service/city.service.js";

class CitiesController {
    /* ================= GET CITIES ================= */

    citiesList = async (req, res, next) => {
        try {
            const cities = await CitiesService.getAllCities();

            const data = cities.map(city => ({
                ...city,
                cityIcon: city.cityIcon
                    ? `${req.protocol}://${req.get('host')}/images/cities/${city.cityIcon}`
                    : null,
            }));

            ResponseHandler.success(res, data, 'Cities List Fetched');
        } catch (error) {
            next(error);
        }
    };

    /* ================= ADD CITY ================= */

    addCity = async (req, res, next) => {
        try {
            const cityId = uuidv4();

            // Parse multipart data
            await uploadMedia(req, res, {
                fieldName: 'image',
                fileName: `city_${cityId}`,
                storeLocation: './uploads/cities',
            });

            const { name, status } = req.body;

            if (!name) {
                return ResponseHandler.error(res, 'City name is required', 400);
            }

            const cityStatus = normalizeStatus(status);
            const imageName = req.file?.filename || null;

            await CitiesService.createCity({
                cityId,
                cityName: name,
                cityIcon: imageName,
                cityStatus,
            });

            ResponseHandler.success(
                res,
                { cityId, name, image: imageName },
                'City added successfully',
                201
            );
        } catch (error) {
            next(error);
        }
    };

    /* ================= UPDATE / DELETE ================= */

    updateCity = async (req, res) => {
        ResponseHandler.success(res, [], 'City Updated');
    };

    deleteCity = async (req, res) => {
        ResponseHandler.success(res, [], 'City Deleted');
    };
}

export { CitiesController };
