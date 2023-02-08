const express = require("express");
const router = express.Router();

const controllerintColor = require('../controllers/intColor.controller');
router.get('/', controllerintColor.getintColor);
router.get('/intcolorid/:id', controllerintColor.getintColorid);
router.post('/addintcolor', controllerintColor.addintColor);
router.patch('/intcolor/:id', controllerintColor.updateInteriorColor);
router.delete('/delintcolor/:id', controllerintColor.delintColor);


module.exports = router