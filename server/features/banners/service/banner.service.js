import Banner from "../model/banner.model.js";
import City from "../../cities/model/city.model.js";

class BannerService {

    // create banner
    addBanner = (data) => {
        return Banner.create(data);
    }

    // get all banners with city details
    getBanners = () => {
        return Banner.findAll({
            attributes: {
                include: [
                    [City.sequelize.col("city.cityName"), "cityName"]
                ]
            },
            include: [
                {
                    model: City,
                    as: "city",
                    attributes: []
                }
            ],
            raw: true
        });
    }

    // delete banner
    deleteBanner = (id) => {
        return Banner.destroy({
            where: { bannerId: id }
        });
    }

    // update banner
    updateBanner = (bannerId, data) => {
        return Banner.update(data, {
            where: { bannerId }
        });
    }

    // get city-specific banners with city details
    getCityBanner = (cityId) => {
        return Banner.findAll({
            where: { cityId },
            include: [
                {
                    model: City,
                    as: "city",
                    attributes: ["cityId", "cityName", "cityImageId", "cityStatus"]
                }
            ]
        });
    }

}

export default new BannerService();