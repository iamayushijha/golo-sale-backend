import Address from "../model/address.model.js";

class AddressService {

    /// Create Address
    addAddress(address){
        return Address.create(address)
    }

    /// Get User's Address
    getAddress(userId){
        return Address.findAll({where:{userId:userId}});
    }

    /// Update Address

    updateAddress(userId, address){
        return Address.update
    }
}


export default new AddressService();