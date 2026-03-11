import { DataTypes } from "sequelize";
import sequelize from "../../../database/sequelize.js";
import City from "../../cities/model/city.model.js";

const Banner = sequelize.define(
    "Banner",
    {
        bannerId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        cityId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        bannerImageId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
        },
        status: {
            type: DataTypes.ENUM("active", "inactive"),
            defaultValue: "active",
        },
        bannerType: {
            type: DataTypes.ENUM("link", "product", "subscription", "refer"),
        },
    },
    {
        tableName: "banner",
        timestamps: true,
        createdAt: "createdOn",
        updatedAt: "updatedOn",
    }
);

// Association
Banner.belongsTo(City, {
    foreignKey: "cityId",
    targetKey: "cityId",
    as: "city",
});

export default Banner;