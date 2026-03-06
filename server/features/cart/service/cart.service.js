import cartModel from "../module/cart.model.js";
import {where} from "sequelize";

class  CartService{


    async getUserCart(userId){
        return cartModel.findAll({
            where: { userId },
            raw: true
        });
    }

async  addItemToCart(data){
    return cartModel.create(data)
    }

    async updateQuantity(cartId, data) {
    return cartModel.update(data, {
        where: {cartId}
    })
    }

    async removeItemFromCart(cartId){
        return await cartModel.destroy({
            where: { cartId: cartId }
        });
    }


}


export default  new CartService();