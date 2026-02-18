import ResponseHandler from "../../../common/reponse_handler.js"
import CartService from "../service/cart.service.js";
import {v4 as uuidv4} from "uuid";
import ProductService from "../../product/service/product.service.js";


class CartController{

    cartList = async (req, res) => {
        const { userId } = req.query;

        if (!userId) {
            return ResponseHandler.error(res, "UserId is required");
        }

        try {
            const cartItems = await CartService.getUserCart(userId);

            if (!cartItems || cartItems.length === 0) {
                return ResponseHandler.success(res, []);
            }

            // Fetch product details in parallel (BEST PRACTICE)
            const finalCart = await Promise.all(
                cartItems.map(async (item) => {
                    const productDetails = await ProductService.searchProduct({productId: item.productId});

                    return {
                        ...item,
                        productDetails: productDetails[0] || null
                    };
                })
            );

            return ResponseHandler.success(res, finalCart);

        } catch (error) {
            return ResponseHandler.error(res, error.message || error);
        }
    };



    addToCart =async (req , res)=>{

        const {userId,productId,productQty} = req.body
        const cartId=uuidv4()
        if(!userId || !productId || !productQty){
            return ResponseHandler.error(res,"Incorrect userId or productId or quantity")
        }else{
            try{
                const response=await  CartService.addItemToCart({
                    cartId,
                    userId,
                    productId,
                    productQty
                })
                return  ResponseHandler.success(res, response,200)
            }catch(e){
                return ResponseHandler.error(res,e)
            }
        }
    }




    updateCart = async (req , res)=>{


    }

    removeItemFromCart = async (req , res)=>{
        const {cartId} = req.query
        if(cartId===undefined){
            return ResponseHandler.error(res,"Cart Id is required");
        }else{
            try{
                const response=await  CartService.removeItemFromCart(cartId)
                return  ResponseHandler.success(res, response,200)
            }catch(e){
                return  ResponseHandler.error(res,e)
            }
        }

    }

    
}

export {CartController}