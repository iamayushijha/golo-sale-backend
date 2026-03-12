import sequelize from "../../../database/sequelize.js";
import { DataTypes } from "sequelize";

const AgentModel = sequelize.define(
    "deliveryagents",
    {
        agentId: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        mobile: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        otp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        otpValidity: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        walletAmount: {
            type: DataTypes.DECIMAL(10, 0),
            defaultValue: 0,
        },

        cityId: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        isOnline: {
            type: DataTypes.TINYINT,
            defaultValue: 0,
        },

        status: {
            type: DataTypes.ENUM("active", "inactive", "suspend", "hold"),
            allowNull: false,
        },

        createdOn: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        tableName: "deliveryagents",
    }
);

export default AgentModel;