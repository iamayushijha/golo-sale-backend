import axios from "axios";

class SmsService {
    async sendOtpSms(mobile, otp) {
        const url =
            "http://146.88.24.157/api/mt/SendSMS" +
            "?user=Golo-Sale" +
            "&password=q12345" +
            "&senderid=GOLOEP" +
            "&channel=Trans" +
            "&DCS=0" +
            "&flashsms=0" +
            `&number=91${mobile}` +
            `&text=Dear Customer, your OTP for account verification is ${otp}. Please do not share this OTP with anyone. - GOLOSALE ENTERPRISES` +
            "&DLTTemplateId=1707176767589967847" +
            "&TelemarketerId=12071651285xxxxxxx" +
            "&Peid=1701176414464527430" +
            "&route=06";

        const response = await axios.get(encodeURI(url));
        return response.data;
    }

    async sendOrderStatusViaSms(mobile, message) {
        const url =
            "http://146.88.24.157/api/mt/SendSMS" +
            "?user=Golo-Sale" +
            "&password=q12345" +
            "&senderid=GOLOEP" +
            "&channel=Trans" +
            "&DCS=0" +
            "&flashsms=0" +
            `&number=91${mobile}` +
            `&text=${message}` +
            "&DLTTemplateId=1707XXXXXXXXXXXXXXX" +
            "&TelemarketerId=12071651285xxxxxxx" +
            "&Peid=1701176414464527430" +
            "&route=06";

        const response = await axios.get(encodeURI(url));
        return response.data;
    }
}

export default new SmsService();
