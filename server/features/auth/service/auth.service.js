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

    async getAllUsers(page, limit) {

        const offset = (page - 1) * limit

        const { count, rows } = await AuthModel.findAndCountAll({
            limit: limit,
            offset: offset,
            raw: true
        })

        return {
            totalUsers: count,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            pageSize: limit,
            users: rows
        }
    }

}

export default new AuthService();
