const { extColorSch } = require('../models/extcolor');

// get all car Exterior Colors
const getextColor = async (req, res) => {
    try {
        const getextColor = await extColorSch.find();
        res.send(getextColor);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// get car Exterior Colors by id
const getextColorid = async (req, res) => {
    try {
        const getextColorid = await extColorSch.findById(req.params.id);
        res.send(getextColorid);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// add car Exterior Colors
const addextColor = async (req, res) => {
    try {
        const extColor = await extColorSch(req.body)
        await extColor.save();
        res.send(extColor);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// update car Exterior Colors
const updextColor = async (req, res) => {
    try {
        const extColor = await extColorSch.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true,
                runValidators: false
            }
        );
        await extColor.save();
        res.status(200).send(extColor);
    }
    catch (err) {
        res.status(400).send(err)
    }
};

// delete car Exterior Colors by Id
const delextColor = async (req, res) => {
    try {
        const extColor = await extColorSch.findByIdAndDelete(req.params.id);
        res.send(extColor.id + ' is deleted ');
    }
    catch (err) {
        res.status(400).send(err)
    }
};

module.exports = {
    getextColor,
    addextColor,
    getextColorid,
    updextColor,
    delextColor
}