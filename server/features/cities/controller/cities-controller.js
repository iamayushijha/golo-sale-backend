import ResponseHandler from "../../../common/reponse_handler.js";
import { v4 as uuidv4 } from 'uuid';
import normalizeStatus from "../../../utils/normalization.js";
import CitiesService from "../service/city.service.js";
import cityService from "../service/city.service.js";

class CitiesController {


    citiesList = async (req, res,) => {
        try {
            const cities = await CitiesService.getAllCities();

            ResponseHandler.success(res, cities, 'Cities List Fetched',200);
        } catch (error) {
            console.log(error);
        }
    };



    addCity = async (req, res,) => {
        try {
            const cityId = uuidv4();

            const { name, status,cityImageId } = req.body;

            if (!name) {
                return ResponseHandler.error(res, 'City name is required', 400);
            }if(!status){
                return ResponseHandler.error(res,'Status is required',400)
            }if(!cityImageId){
                return ResponseHandler.error(res,'City Image is required',400)
            }

            const cityStatus = normalizeStatus(status);


            await CitiesService.createCity({
                cityId,
                cityName: name,
                cityImageId: cityImageId,
                cityStatus,
            });

            ResponseHandler.success(
                res,
                { cityId, name, cityImageId: cityImageId, status: cityStatus },
                'City added successfully',
                201
            );
        } catch (error) {
         return  ResponseHandler.error(res, error, 500);
        }
    };



    updateCity = async (req, res) => {
        const {cityId,status,cityImageId}=req.body;
        if(!cityId){
            return ResponseHandler.error(res,'City Id is required',400)
        }if(!status){
            return ResponseHandler.error(res,'Status is required',400)
        }if(!cityImageId){
            return ResponseHandler.error(res,'City Image is required',400)
        }
        try{
            const response=await cityService.updateCity(cityId,{cityImageId:cityImageId,cityStatus:status})
            return ResponseHandler.success(res,response,'City Updated',201)
        }catch (error){
            return ResponseHandler.error(res,error,500)
        }
    };


}

export { CitiesController };
