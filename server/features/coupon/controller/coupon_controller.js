import ResponseHandler from "../../../common/reponse_handler.js";
import { v4 as uuidv4 } from 'uuid';
import couponService from "../service/coupon.service.js";
import normalizeStatus from "../../../utils/normalization.js";

 class CouponController {

    async addCoupon(req, res) {
       const { couponCode, couponInfo,discountPercentage,maxCap,minCap, status} = req.body;

       if(couponCode===undefined){
          return ResponseHandler.error(res,"Coupon Code not found.");
       }
       if(couponInfo===undefined){
          return ResponseHandler.error(res,"Coupon Info not found.");
       }
       if(discountPercentage===undefined){
          return ResponseHandler.error(res,"Coupon Discount Percentage not found.");
       }
       if(maxCap===undefined){
          return ResponseHandler.error(res,"Coupon Max Cap not found.");
       }
       if(minCap===undefined){
          return ResponseHandler.error(res,"Coupon Min Cap not found.");
       }
       if(status===undefined){
          return ResponseHandler.error(res,"Coupon Status not found.");
       }

       try{
          const couponId = uuidv4();

          const response=await couponService.addCoupon({
             couponCode:couponCode,
             couponInfo:couponInfo,
             discountPercentage:discountPercentage,
             maxCap:maxCap,
             minCap:minCap,
             status:status,
             couponId:couponId,

          });
          return ResponseHandler.success(res,response);
       }catch(e){
          return ResponseHandler.error(res,e);
       }
    }


    async updateCoupon(req, res) {
       try {

          const { couponId, ...updatedData } = req.body;

          if(couponId===undefined){
             return ResponseHandler.error(res,"Coupon Id not found.");
          }

          const response = await couponService.updateCoupon(couponId, updatedData);

          return ResponseHandler.success(res, response);

       } catch (e) {
          return ResponseHandler.error(res, e);
       }
    }


    async deleteCoupon(req, res) {
       const {couponId} = req.query;

       if(couponId===undefined){
          return ResponseHandler.error(res,"Coupon Id not found.");
       }else{
         try{
            const response=await couponService.deleteCoupon({couponId:couponId},);
            return ResponseHandler.success(res,response);
         }catch (e) {
            return ResponseHandler.error(res,e);
         }
       }
    }

    async getCoupons(req, res) {
       try{

          const response =await couponService.getAllCoupons()
          return ResponseHandler.success(res,response);
       }catch(e){
          return ResponseHandler.error(res,e);
       }
    }


    async searchCoupons(req, res) {
       const {couponCode} = req.query;
       if(couponCode===undefined){
          return ResponseHandler.error(res,"Coupon Code not found.");
       }else{
          // Search In Database
          try{
             const response=await couponService.searchCoupon(couponCode);
             if(response.length===0){
                return ResponseHandler.error(res,"Wrong Coupon Code.");
             }else{
                return ResponseHandler.success(res,response);
             }
          }catch (e){
             return ResponseHandler.error(res,e);
          }
       }
    }

}

export {CouponController};