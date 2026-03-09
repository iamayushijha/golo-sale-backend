import sequelize  from "../../../database/sequelize.js";
import {DataTypes} from 'sequelize';

const Address = sequelize.define("userAddress", {

    addressId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false
    },
    holderName:{
        type:DataTypes.STRING,
    },
    building:{
        type:DataTypes.STRING,
    },
    landmark:{
        type:DataTypes.STRING,
    },
    cityId:{
        type:DataTypes.UUID,
    },
    setAsDefault:{
        type:DataTypes.TINYINT,
    },
    latitude:{
        type:DataTypes.DECIMAL
    },
    longitude:{
        type:DataTypes.DECIMAL
    },
    houseImage:{
        type:DataTypes.STRING,
    },
    addressType:{
        type:DataTypes.ENUM('home','office','other'),
        defaultValue:'home',
    },
    status:{
        type:DataTypes.ENUM('active','inactive'),
        defaultValue:'active',
    }
 },
    {
        timestamps: true,
        tableName:'useraddress',
        createdAt:'createdOn',
        updatedAt:'updatedOn',
    }
);



export default Address;