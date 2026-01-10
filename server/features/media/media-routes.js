import express from "express";
import { mediaUploadMiddleware} from "../../middleware/mediaUpload.middleware.js";
import { uploadMedia} from "./controller/media-controller.js";

const router = express.Router();

router.post(
    "/uploadMedia",
    mediaUploadMiddleware(),
    uploadMedia
);

//Todo: Add Delete Media route too

export default router;
