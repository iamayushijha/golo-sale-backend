import { DataTypes } from "sequelize";
import sequelize from "../../../database/sequelize.js";


export default sequelize.define("Category", {
    categoryId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    categoryTitle: {
        type: DataTypes.STRING,

    },
    categoryInfo:{
        type:DataTypes.STRING,
    },
    categoryPicture:{
        type:DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "inactive",
    },
    createdOn:{
        type:DataTypes.DATE
    },
    updatedOn:{
        type:DataTypes.DATE
    },

}, {
    tableName: "productCategory",
    timestamps: true,
    createdAt: "createdOn",
    updatedAt: "updatedOn",
}
);