import Banner from '../model/banner.model.js';


class  BannerService {

    addBanner = (data) => {
        return Banner.create(data);
    }
    getBanners = () => {
        return Banner.findAll({ raw: true });
    }
    deleteBanner = (id) => {
        return Banner.destroy({ where: id });
    }
    updateBanner=(bannerId,data)=>{
        return Banner.update(data, {
                where: { bannerId },
            }
        );
    }

    // get city-specific banner
    getCityBanner = (cityId) => {
        return Banner.findAll({ where: { cityId } });
    }
}


export default new BannerService();