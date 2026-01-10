import ResponseHandler from '../../../common/reponse_handler.js'
import SmsService from "../../../common/sms_service.js";
import { generateOtp } from "../../../utils/otp.utils.js";
import authService from "../service/auth.service.js";
import { v4 as uuidv4 } from 'uuid';
import referralService from "../../../features/refer/service/refer.service.js";


class AuthController {


    updateUser = async (req, res) => {
        try{
            const response = await authService.updateUser(req.params.userId,req.body)
            return ResponseHandler.success(res,response,'User Updated',200)
        }catch (e) {
            return ResponseHandler.error(res,e.errors[0].message,500)
        }
    }



    sendOTP = async (req, res) => {
        try {
            const { mobile } = req.body || {};

            if (mobile === undefined) {
                return ResponseHandler.error(res, "Mobile No. is required", 400);
            }

            if (typeof mobile !== "string" || mobile.trim() === "") {
                return ResponseHandler.error(res, "Mobile No. cannot be empty", 400);
            }


            const otp = generateOtp();

            const user = await authService.login({ userMobile: mobile });


            if (user) {
                // Existing user
                await authService.updateUser(user.userId, {
                    otpCode: otp,
                    otpValidity: Date.now() + 5 * 60 * 1000,
                });
            } else {
                // New user
                const referralCode = await referralService.generateReferralCode();
                console.log("Referral Code:", referralCode);
                await authService.register({
                    userMobile: mobile,
                    otpCode: otp,
                    refferalCode: referralCode,
                    userEmail:mobile,
                    otpValidity: Date.now() + 5 * 60 * 1000,
                    status: "active",
                });
            }

            await SmsService.sendOtpSms(mobile, otp);

            return ResponseHandler.success(res, [], "OTP Sent");
        } catch (error) {
            console.error(error);
            return ResponseHandler.error(res, "Internal server error", 500);
        }
    };



    verifyOTP = async (req, res) => {
        const otp = req.body.otpCode
        const mobile = req.body.mobile
        try{
            const response=await  authService.login({userMobile:mobile,otpCode:otp})
        if(response===null){
            return ResponseHandler.error(res,'Invalid OTP',400)
        }else{
            /// verify otp validity form response.otpValidity

            if(response.otpValidity<Date.now()){
                return ResponseHandler.error(res,'OTP Expired',400)
            }else{
                // After verification delete otp from db
                await authService.updateUser(response.userId,{otpCode:6969,otpValidity:0})
                return ResponseHandler.success(res,response,'OTP Verified')
            }


        }

        }catch (error){
            console.error(error)
            return ResponseHandler.error(res,error.errors[0].message,400)
        }
    }

}



export { AuthController }