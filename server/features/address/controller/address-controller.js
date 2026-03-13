import ResponseHandler from "../../../common/reponse_handler.js"
import AddressService from "../service/address.service.js"
import {v4 as uuidv4} from 'uuid';

class AddressController{

    async getAddress(req,res){

        const userId=req.query.userId;
        if(!userId){
            return ResponseHandler.error(res,"UserId is required");

        }
        else{
            const response = await AddressService.getAddress(userId);
            return  ResponseHandler.success(res,response);
        }

    }


    async addAddress(req,res){

        const {
            userId,
            holderName,
            building,
            landmark,
            cityId,
            setAsDefault,
            latitude,
            longitude,
            houseImage,
            addressType,
            status
        } = req.body;

        const requiredFields = [
            "userId",
            "holderName",
            "building",
            "landmark",
            "cityId",
            "setAsDefault",
            "latitude",
            "longitude",
            "houseImage",
            "addressType",
            "status"
        ];

        const missingField = requiredFields.find(field => req.body[field] === undefined);

        if (missingField) {
            return ResponseHandler.error(res, `${missingField} is required`, 400);
        }

        try{
            req.body.addressId=uuidv4();
            const response = await AddressService.addAddress(req.body);
            return ResponseHandler.success(res,response);
        }catch(err){
            console.log(err);
            return ResponseHandler.error(res, err);
        }


    }


    async updateAddress(req,res){
        const {
            addressId,
            holderName,
            building,
            landmark,
            cityId,
            setAsDefault,
            latitude,
            longitude,
            houseImage,
            addressType,
            status
        } = req.body;

        const requiredFields = [
            "addressId",
            "holderName",
            "building",
            "landmark",
            "cityId",
            "setAsDefault",
            "latitude",
            "longitude",
            "houseImage",
            "addressType",
            "status"
        ];

        const missingField = requiredFields.find(field => req.body[field] === undefined);

        if (missingField) {
            return ResponseHandler.error(res, `${missingField} is required`, 400);
        }


        try{
            const response=await AddressService.updateAddress(req.body.addressId,req.body);
            return ResponseHandler.success(res,response);
        }catch (e) {
            console.log(e);
            return ResponseHandler.error(res, e);
        }
    }

    async deleteAddress(req,res){
        if(req.query.addressId===undefined) {
            return ResponseHandler.error(res,"AddressId is required");
        }else{
            try{
                const response = await AddressService.deleteAddress(req.query.addressId);
                return ResponseHandler.success(res,response);
            }catch(err){
                console.log(err);
                return ResponseHandler.error(res, err);
            }
        }
    }


}

export {AddressController};