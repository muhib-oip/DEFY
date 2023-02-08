const mongoose = require('mongoose');

const fileupl = mongoose.model('Images', new mongoose.Schema({
    images: {
        type: [String],
        required: false
    },
    color:{
        type: String,
        required: false
    }
}));

exports.fileupl = fileupl;