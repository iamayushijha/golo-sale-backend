import sequelize from "../../../database/sequelize.js";

class ReferService {
    async generateReferralCode() {
        return sequelize.transaction(async (t) => {
            // Lock the row to avoid race condition
            const [rows] = await sequelize.query(
                "SELECT lastNumber FROM referralCounter WHERE id = 1 FOR UPDATE",
                { transaction: t }
            );

            const lastNumber = rows[0].lastNumber;
            const nextNumber = lastNumber + 1;

            // Update counter
            await sequelize.query(
                "UPDATE referralCounter SET lastNumber = ? WHERE id = 1",
                {
                    replacements: [nextNumber],
                    transaction: t,
                }
            );

            // Format referral code
            const referralCode = `GOLO${String(nextNumber).padStart(4, "0")}`;

            return referralCode;
        });
    }
}

export default new ReferService();
