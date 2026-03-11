import Coupon from "../model/coupon.model.js";


class  CouponService {

    async addCoupon(data) {
        return Coupon.create(data);
    }

    async getAllCoupons() {
        return Coupon.findAll();
    }


    async updateCoupon(couponId,updatedData) {
        return Coupon.update(updatedData,{where: {couponId}});
    }


    async deleteCoupon(couponId) {
        return Coupon.destroy({where: couponId});
    }

    async searchCoupon(code){
        return Coupon.findAll({where: {couponCode:code}})
    }
}

export default new CouponService();