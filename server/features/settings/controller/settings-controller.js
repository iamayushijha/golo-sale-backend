
import ResponseHandler from "../../../common/reponse_handler.js";
class SettingsController {
    // Fetch settings
    getSettings = (req, res) => {

        ResponseHandler.success(res, [], "Settings Fetched", 200);
    };
    // Update settings
    updateSettings = (req, res) => {
        ResponseHandler.success(res, [], "Settings Updated", 200);
    };
}

export { SettingsController };