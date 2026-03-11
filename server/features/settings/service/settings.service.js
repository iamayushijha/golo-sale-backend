import Settings from '../model/settings.model.js';


class SettingService  {

    //Get Settings
    getSettings () {
      return Settings.findAll({raw: true});
    }

    //Update Setting
    updateSettings (settingId, settingData) {
        return Settings.update(settingData,{
            where: {id: settingId}
        })
    }
}

export default new SettingService();