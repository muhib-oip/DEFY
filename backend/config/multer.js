const multer = require('multer');
const path = require('path');
const fs = require("fs");


const imageStorage = multer.diskStorage({
    destination: 'upload',
    // destination: (req, file, cb) => {
    //     const userId = req.query.folder
    //     const dir = `images/${userId}`
    //     fs.exists(dir, exist => {
    //         if (!exist) {
    //             return fs.mkdir(dir, error => cb(error, dir))
    //         }
    //         return cb(null, dir)
    //     })
    // },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now()
            + path.extname(file.originalname));

    }
});

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 50 * 1024 * 1024
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            return cb(new Error('Please upload a Image'));
        }
        cb(undefined, true)
    }
});

module.exports = imageUpload;