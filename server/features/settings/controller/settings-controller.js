import SettingsService from "../service/settings.service.js";
import ResponseHandler from "../../../common/reponse_handler.js";
import ProductService from "../../product/service/product.service.js";
import UserModel from "../../auth/model/auth.model.js"


class SettingsController {
    // Fetch settings
    getSettings = async (req, res) => {

    try{
        const settings = await SettingsService.getSettings();
        return ResponseHandler.success(res, settings);
    }catch (e) {
        return ResponseHandler.error(res,e);
    }

    };


    // Update settings
    updateSettings = async (req, res) => {
        try{
            const response = await SettingsService.updateSettings(1,req.body);
            return ResponseHandler.success(res, response);
        }catch (e) {
            return ResponseHandler.error(res,e);
        }
    };



    // Get DashBoard Data
    getDashboard=async (req, res) => {
        try{
            const dataBody={
                totalUsers:0,
                totalProducts:0,
                totalOrders:0,
                pendingOrders:0,
                totalSubscriptions:0,
            }
            return ResponseHandler.success(res, dataBody);
        }catch (e) {
            return ResponseHandler.error(res,e);
        }
    }

}


export { SettingsController };