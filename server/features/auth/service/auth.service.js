import AuthModel from "../model/auth.model.js";

class AuthService {

    async login(data) {
        return AuthModel.findOne({ where: data });
    }





    async register(data) {
        return AuthModel.create(data);
    }

    async updateUser(userId, updateData) {
        return AuthModel.update(updateData, {
                where: { userId },
            }
        );
    }

}

export default new AuthService();
