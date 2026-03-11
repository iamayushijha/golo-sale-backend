import SettingsService from "../service/settings.service.js";
import ResponseHandler from "../../../common/reponse_handler.js";


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

    };



}


export { SettingsController };