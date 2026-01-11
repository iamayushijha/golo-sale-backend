import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

/**
 * Media upload middleware
 * Stores file at: /uploads/{tag}/{uuid}.{ext}
 */
export const mediaUploadMiddleware = () => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            // 🔥 FIX: read tag from query (safe for multer)
            const { tag } = req.query;

            if (!tag) {
                return cb(new Error("tag is required as query param"), null);
            }

            const uploadDir = path.join(process.cwd(), "uploads", tag);

            // ✅ auto-create directory if not exists
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            cb(null, uploadDir);
        },

        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const mediaId = uuidv4();

            // expose mediaId to controller
            req.mediaId = mediaId;

            cb(null, `${mediaId}${ext}`);
        },
    });

    const fileFilter = (req, file, cb) => {
        if (!file.mimetype.startsWith("image/")) {
            return cb(new Error("Only image files are allowed"), false);
        }
        cb(null, true);
    };

    return multer({
        storage,
        fileFilter,
        limits: {
            fileSize: 5 * 1024 * 1024, // 5MB
        },
    }).single("file");
};
