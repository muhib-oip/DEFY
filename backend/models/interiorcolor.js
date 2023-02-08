const mongoose = require('mongoose');

const intColorSch = mongoose.model('intColor', new mongoose.Schema({
        color: {
            type: String,
            required: false
        },
        mainImage: {
            type: String,
            required: false
        },
        price:{
            type: String,
            default: "0",
            required: false
        },
        code: {
            type: String,
            required: false
        }
}));

exports.intColorSch = intColorSch;