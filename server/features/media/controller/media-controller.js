import ResponseHandler from "../../../common/reponse_handler.js";
import mediaService from "../service/media.service.js";


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
