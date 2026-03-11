import ResponseHandler from "../../../common/reponse_handler.js"
import AddressService from "../service/address.service.js"


class AddressController{

    async getAddress(req,res){

        const userId=req.params.userId;
        if(!userId){
            return ResponseHandler.error(res,"UserId is required");

        }
        else{
            const response = await AddressService.getAddress(userId);
            return  ResponseHandler.success(res,response);
        }

    }


    async addAddress(req,res){

    }


    async updateAddress(req,res){

    }

    async deleteAddress(req,res){

    }


}

export {AddressController};