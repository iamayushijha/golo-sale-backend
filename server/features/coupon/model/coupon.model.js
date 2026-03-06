import { DataTypes } from 'sequelize';
import sequelize from '../../../database/sequelize.js';

const Coupon = sequelize.define('coupon', {

    couponId: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },

    couponCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    couponInfo: {
        type: DataTypes.STRING,
        allowNull: true
    },

    discountPercentage: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    maxCap: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    minCap: {
        type: DataTypes.FLOAT,
        allowNull: true
    },

    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
    },

    createdOn: {
        type: DataTypes.DATE,
        allowNull: false,
    },

    updatedOn: {
        type: DataTypes.DATE,
        allowNull: true
    }

}, {
    tableName: "coupon",
    timestamps: true,
    updatedAt: "updatedOn",
    createdAt: "createdOn",
});

export default Coupon;