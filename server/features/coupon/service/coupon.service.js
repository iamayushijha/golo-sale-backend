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
        return Coupon.destroy(couponId);
    }
}

export default new CouponService();