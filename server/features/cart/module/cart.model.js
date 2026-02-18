import { DataTypes } from 'sequelize';
import sequelize from '../../../database/sequelize.js'

const Cart = sequelize.define('Cart',
    {
      cartId:{
          type: DataTypes.UUID,
          primaryKey: true,
          allowNull: false,
      },

        userId: {
          type: DataTypes.UUID,
            allowNull: false,
        },
        productId: {
          type: DataTypes.UUID,
            allowNull: false,
        },
        productQty:{
          type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        createdOn:{
          type: DataTypes.DATE,
            allowNull: false,
        },
        updatedOn:{
          type: DataTypes.DATE,
            allowNull: false,
        }

    },
    {
        tableName: 'userCart',
        timestamps: true,
        updatedAt: 'updatedOn',
        createdAt: 'createdOn',
    }
    )

export default Cart;