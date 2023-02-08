const mongoose = require('mongoose');

const carSum = mongoose.model('Summary', new mongoose.Schema(
    {
        car_id:[{
            model:{
                type: [String],
                required: false
            },
            exteriorColor:{
                type: [String],
                required: false
            }
        }]
    }
))

exports.carSum = carSum;