const multer = require('multer');
const path = require('path');


module.exports = {
    dest: path.resolve(__dirname, "..", "..", "..", "..", "www", "museu", "uploads"),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "..", "..", "..", "..", "www", "museu", "uploads"));
        },
        filename: (req, file, cb) => {
            const fileName = `${file.originalname}`;
            cb(null, fileName);
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }
}