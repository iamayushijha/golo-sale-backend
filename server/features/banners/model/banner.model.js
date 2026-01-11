import { DataTypes } from "sequelize";
import sequelize from "../../../database/sequelize.js";

export default sequelize.define("Banner", {
    bannerId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    cityId: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
    },
    bannerImageId: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '',
    },
    status: DataTypes.ENUM("active", "inactive"),
    bannerType: DataTypes.ENUM("link", "product", "subscription", "refer"),
}, {
    tableName: "banner",
    timestamps: true,
    createdAt: "createdOn",
    updatedAt: "updatedOn",
});