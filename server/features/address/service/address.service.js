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

    updateAddress(addressId, address){
        return Address.update(address,{where: {addressId:addressId}});
    }


    /// Delete Address
    deleteAddress(addressId){
        return Address.destroy({where:{addressId:addressId}});
    }
}


export default new AddressService();