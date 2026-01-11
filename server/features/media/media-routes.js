import express from "express";
import { mediaUploadMiddleware} from "../../middleware/mediaUpload.middleware.js";
import { uploadMedia,getMediaById,getAllMedia} from "./controller/media-controller.js";

const router = express.Router();

router.post(
    "/uploadMedia",
    mediaUploadMiddleware(),
    uploadMedia
);

router.get("/getMediaById", getMediaById);

router.get("/getAllMedia", getAllMedia)

//Todo: Add Delete Media route too

export default router;
