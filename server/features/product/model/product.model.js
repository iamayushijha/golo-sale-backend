import sequelize from '../../../database/sequelize.js'
import { DataTypes } from 'sequelize';
import Category from "../../category/model/category.model.js";

const Product= sequelize.define( 'Product', {
    productId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    productTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productInfo: {
        type: DataTypes.STRING,
    },
    productPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    productMrp:{
        type:DataTypes.DECIMAL(10, 2),
        allowNull:false
    },
    productStock:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    productThumbnail:{
        type:DataTypes.STRING,

    },
    productCategoryId:{
        type:DataTypes.STRING,
    },
    hasSubscriptionModel:{
        type:DataTypes.TINYINT,
    },

    productUnitTag:{
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

},
    {
        tableName: 'products',
        timestamps: true,
        createdAt: "createdOn",
        updatedAt: "updatedOn",
    }
    )

/// Association
Product.belongsTo(Category,{
    foreignKey: 'productCategoryId',
    targetKey: 'categoryId',
    as: 'category',
})

export default Product;
