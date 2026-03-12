import sequelize  from "../../../database/sequelize.js";
import {DataTypes} from 'sequelize';

const Settings = sequelize.define("settings", {

    settingsId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    deliveryFreeAbove:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    deliveryFee:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

    referReceiverCommission:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    maintenanceMode:{
        type:DataTypes.TINYINT,
        allowNull:false,
    },

        isCodEnable:{
        type:DataTypes.TINYINT,
    }

},
    {
        timestamps: false,
        tableName: "settings",

    }

);

export default Settings;