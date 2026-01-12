import { DataTypes } from "sequelize";
import sequelize from "../../../database/sequelize.js";

const User = sequelize.define(
    "User",
    {
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        firstName: {
            type:DataTypes.STRING,
            defaultValue:'Guest'
        },
        lastName:{
            type:DataTypes.STRING,
            defaultValue:'User'
        },

        userMobile: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        userEmail: {
            type: DataTypes.STRING,
            allowNull:true
        },

        gender: DataTypes.ENUM("male", "female", "other"),

        walletAmount: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0,
        },

        refferalCode: DataTypes.STRING,

        otpCode: DataTypes.INTEGER,
        otpValidity: {
            type:DataTypes.STRING,
            defaultValue:'10'
        },

        parentUserReferralCode: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
        },

        profilePicture:{
            type:DataTypes.STRING,
        },

        status: {
            type: DataTypes.ENUM("active", "inactive"),
            defaultValue: "inactive",
        },
    },
    {
        tableName: "users",
        timestamps: true,
        createdAt: "createdOn",
        updatedAt: "updatedOn",
    }
);

export default User;
