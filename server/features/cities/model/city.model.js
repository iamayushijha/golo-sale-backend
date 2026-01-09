import { DataTypes } from 'sequelize';
import sequelize from '../../../database/sequelize.js'

const City = sequelize.define(
    'City',
    {
        cityId: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        cityName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cityIcon: {
            type: DataTypes.STRING,
        },
        cityStatus: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active',
        },
    },
    {
        tableName: 'cities',
        timestamps: false,
    }
);

export default City;
