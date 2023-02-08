const mongoose = require('mongoose');

const extColorSch = mongoose.model('extColor', new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    },
    mainImage: {
        type: String,
        required: false
    },
    wheels: {
        type: [String],
        required: false
    },
    price: {
        type: String,
        default: "0"
    },
    code: {
        type: String,
        required: false
    }
}));

exports.extColorSch = extColorSch