import ResponseHandler from "../../../common/reponse_handler.js";
import mediaService from "../service/media.service.js";
import path from "path";
import fs from "fs";

export const uploadMedia = async (req, res) => {
    try {
        if (!req.file) {
            return ResponseHandler.error(res, "Image file is required", 400);
        }

        const { tag } = req.query;

            await mediaService.insertMedia({
                mediaId: req.mediaId,
                tag,
                fileName: req.file.filename,
                filePath: `/uploads/${tag}/${req.file.filename}`,
                mimeType: req.file.mimetype,
                fileSize: req.file.size,
            });
        return ResponseHandler.success(
            res,
            [
                {
                    mediaId: req.mediaId,
                    tag,
                    fileName: req.file.filename,
                    path: `/uploads/${tag}/${req.file.filename}`,
                    mimeType: req.file.mimetype,
                    size: req.file.size,
                },
            ],
            "Media uploaded successfully",
            201
        );


    } catch (error) {
        console.error(error);
        return ResponseHandler.error(res, error.message || "Upload failed", 500);
    }
};

export const getMediaById = async (req, res) => {
    try {
        const { mediaId } = req.query;

        if (!mediaId) {
            return res.status(400).send("mediaId is required");
        }

        const media = await mediaService.getMediaById(mediaId);

        if (!media) {
            return ResponseHandler.error(res, "Media not found", 404);
        }

        const absolutePath = path.join(process.cwd(), media.filePath);

        if (!fs.existsSync(absolutePath)) {
            return ResponseHandler.error(res,"Media not found on server",404)
        }


        res.setHeader("Content-Type", media.mimeType);


        res.setHeader(
            "Content-Disposition",
            `inline; filename="${media.fileName}"`
        );

        return res.sendFile(absolutePath);
    } catch (error) {
        console.error(error);
        return ResponseHandler.error(res, error.message || "Internal Server Error", 404);
    }
};


export const getAllMedia = async (req, res) => {
    try{
        const media=await mediaService.getAllMedia()
        if(!media){
            return ResponseHandler.error(res,'Media not found',404)
        }else
        return ResponseHandler.success(res, media, 'Media fetched successfully', 200)

    }catch (e){
        console.log(e)
        return ResponseHandler.error(res,e,500)
    }
}