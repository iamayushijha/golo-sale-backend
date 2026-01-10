import { DataTypes } from "sequelize";
import sequelize from "../../../database/sequelize.js";

const Media = sequelize.define(
    "Media",
    {
        mediaId: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },

        tag: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },

        fileName: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        filePath: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },

        mimeType: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        fileSize: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "media",
        timestamps: true,
        createdAt: "createdOn",
        updatedAt: "updatedOn",
    }
);

export default Media;
