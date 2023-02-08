const express = require("express");
const router = express.Router();

const controllerextColor = require('../controllers/extcolor.controller');

router.get('/', controllerextColor.getextColor);
router.get('/extcolorid/:id', controllerextColor.getextColorid);
router.post('/addextcolor', controllerextColor.addextColor);
router.patch('/updextcolor/:id', controllerextColor.updextColor);
router.delete('/delextcolor/:id', controllerextColor.delextColor);

module.exports = router 