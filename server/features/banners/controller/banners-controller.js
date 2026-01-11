import bannerService from "../service/banner.service.js";
import ResponseHandler from "../../../common/reponse_handler.js"
import { v4 as uuidv4 } from 'uuid';
import normalizeStatus from "../../../utils/normalization.js";

class BannersController {

  // Fetch banners list
  bannersList = async (req, res) => {

    const cityId = req.query.cityId;
    if(cityId===undefined){
      // return all banner
      try{
        const bannerResponse =await  bannerService.getBanners();
        return ResponseHandler.success(res,bannerResponse,'banners List Fetched',200)
      }catch (error){
        return ResponseHandler.error(res,error.errors[0].message,500)
      }
    }else {
      // return banner for city
      try{
        const bannerResponse=await bannerService.getCityBanner(cityId)
        return ResponseHandler.success(res,bannerResponse,'banners List Fetched',200)
      }catch (error){
        return ResponseHandler.error(res,error.errors[0].message,500)
      }
    }
  };

  // Update banner details
  updateBanner = async(req, res) => {
    /// Update banner details
    try{

      const {bannerId,status,cityId,bannerType,bannerImageId}=req.body;


      if(!bannerType){
        return ResponseHandler.error(res,'Banner Type is required',400)
      }
      if(!cityId){
        return ResponseHandler.error(res,'City Id is required',400)
      }if(!status){
        return ResponseHandler.error(res,'Status is required',400)
      }if(!bannerImageId){
        return ResponseHandler.error(res,'Banner Image Id is required',400)
      }

      const bannerStatus=normalizeStatus(status)


      const response= await bannerService.updateBanner(bannerId,{bannerImageId:bannerImageId,bannerType:bannerType,cityId:cityId,bannerStatus:bannerStatus})
      return ResponseHandler.success(res,response,'Banner Updated',201)

    }catch (error){
      console.error(error)
      return ResponseHandler.error(res,error,500)
    }
  };

  // Add a new banner
  addBanner = async (req, res) => {
    // upload banner image and store form data into db
    try{
      const bannerId=uuidv4()

      const {cityId,bannerType,status,bannerImageId}=req.body;
      if(!bannerType){
        return ResponseHandler.error(res,'Banner Type is required',400)
      }
      if(!cityId){
        return ResponseHandler.error(res,'City Id is required',400)
      }if(!status){
        return ResponseHandler.error(res,'Status is required',400)
      }if(!bannerImageId){
        return ResponseHandler.error(res,'Banner Image is required',400)
      }
      const bannerStatus=normalizeStatus(status)


     const response= await bannerService.addBanner(
         {
           bannerId,
           bannerImageId:bannerImageId,
           bannerType:bannerType,
           cityId:cityId,
           bannerStatus:bannerStatus

         }
      )
      return ResponseHandler.success(res,response,'Banner Added',201)

    }catch (error){
      console.error(error)
      return ResponseHandler.error(res,error,500)
    }
  };

  // Delete banner
  deleteBanner = async (req, res) => {
    const bannerId = req.query.bannerId;
    console.log(bannerId)
    if(bannerId===undefined){
      return ResponseHandler.error(res,'Banner Id is required',400)
    }else{
      try{
        const response=await bannerService.deleteBanner({bannerId:bannerId})
        return ResponseHandler.success(res,response,'Banner Deleted',200)
      }catch (error){
        console.error(error)
        return ResponseHandler.error(res,error,500)
      }
    }

  };
}

export { BannersController };