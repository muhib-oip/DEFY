const express = require("express");
const router = express.Router();
const uploads = require('../config/multer')
const controllerColor = require('../controllers/color.controller');

router.get('/', controllerColor.getdata);
router.post('/uploadSImage', uploads.single('image'), controllerColor.uploadSingleimg);
router.post('/uploadMImage', uploads.array('images', 10), controllerColor.uploadMulimg);
router.post('/adddata', controllerColor.adddata);
router.delete('/delimage/:imgpath', controllerColor.delimage)


module.exports = router