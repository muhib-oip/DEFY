const { intColorSch } = require('../models/interiorcolor');

// get all car interior
const getintColor = async (req, res) => {
    try {
        const intColors = await intColorSch.find();
        res.send(intColors);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// get car interior Colors by id
const getintColorid = async (req, res) => {
    try {
        const getintColorid = await intColorSch.findById(req.params.id);
        res.send(getintColorid);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// add car interior
const addintColor = async (req, res) => {
    try {
        const intColors = await intColorSch(req.body)
        await intColors.save();
        res.send(intColors);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// upd car interior
const updateInteriorColor = async (req, res) => {
    try {
        const updateInteriorColor = await intColorSch.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true,
                runValidators: false
            }
        );
        await updateInteriorColor.save();
        res.status(200).send(updateInteriorColor);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// delete car interior Colors by Id
const delintColor = async (req, res) => {
    try {
        const delintColor = await intColorSch.findByIdAndDelete(req.params.id);
        res.send(delintColor.id + ' is deleted ');
    }
    catch (err) {
        res.status(400).send(err)
    }
};


module.exports = {
    getintColor,
    getintColorid,
    addintColor,
    updateInteriorColor,
    delintColor
}