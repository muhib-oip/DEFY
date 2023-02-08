const mongoose = require('mongoose');

const wheelsSch = mongoose.model('Wheels', new mongoose.Schema({
        mainImage: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        size: {
            type: String,
            required: false
        },
        price: {
            type: String,
            required: false
        },
        code: {
            type: String,
            required: false
        }
}));

exports.wheelsSch = wheelsSch;