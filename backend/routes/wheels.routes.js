const express = require("express");
const router = express.Router();

const controllerWheels = require('../controllers/wheel.controller');
router.get('/', controllerWheels.getwheels);
router.get('/getwheelsid/:id', controllerWheels.getwheelsid);
router.patch('/updwheels/:id', controllerWheels.updatewheels);
router.post('/addwheels', controllerWheels.addwheels);
router.delete('/delwheels/:id', controllerWheels.delwheels);

module.exports = router