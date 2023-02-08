const express = require("express");
const router = express.Router();

const controllerCar = require('../controllers/car.controller');

router.get('/', controllerCar.getcars)
router.get('/carbycol/:id', controllerCar.getcarcol)
router.get('/getc/:id/', controllerCar.getc)
router.get('/carboned/:id', controllerCar.getcarbed)
router.post('/addcars', controllerCar.carmod)
router.patch('/updcars/:_id', controllerCar.updcar)
router.delete('/delcars/:_id', controllerCar.delcars)



module.exports = router 