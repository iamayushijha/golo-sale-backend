import multer from 'multer';
import path from 'path';
import fs from 'fs';

/* ================= HELPER ================= */

const ensureDirExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

/* ================= MAIN FUNCTION ================= */

/**
 * Upload media inside controller
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Object} options
 */
export const uploadMedia = (req, res, options) => {
    const {
        fieldName = 'file',
        fileName,
        storeLocation,
        maxSize = 2 * 1024 * 1024, // 2MB
    } = options;

    if (!fileName) throw new Error('fileName is required');
    if (!storeLocation) throw new Error('storeLocation is required');

    ensureDirExists(storeLocation);

    const storage = multer.diskStorage({
        destination: storeLocation,
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, `${fileName}${ext}`);
        },
    });

    const fileFilter = (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files allowed'), false);
        }
    };

    const upload = multer({
        storage,
        fileFilter,
        limits: { fileSize: maxSize },
    }).single(fieldName);

    // 🔑 Convert middleware → Promise
    return new Promise((resolve, reject) => {
        upload(req, res, (err) => {
            if (err) return reject(err);
            resolve(req.file);
        });
    });
};
