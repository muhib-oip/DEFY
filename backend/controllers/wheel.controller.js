const { wheelsSch } = require('../models/wheels');

// get all car Wheels
const getwheels = async (req, res) => {
    try {
        const carwheel = await wheelsSch.find();
        res.send(carwheel);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// get car Wheels by id
const getwheelsid = async (req, res) => {
    try {
        const getwheelsid = await wheelsSch.findById(req.params.id);
        res.send(getwheelsid);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// add car wheels
const addwheels = async (req, res) => {
    try {
        const carwheel = await wheelsSch(req.body)
        await carwheel.save();
        res.send(carwheel);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// upd car wheels
const updatewheels = async (req, res) => {
    try {
        const updatewheels = await wheelsSch.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true,
                runValidators: false
            }
        );
        await updatewheels.save();
        res.status(200).send(updatewheels);
    }
    catch (err) {
        res.status(400).send(err)
    }
}

// delete car interior Colors by Id
const delwheels = async (req, res) => {
    try {
        const delwheels = await wheelsSch.findByIdAndDelete(req.params.id);
        res.send(delwheels.id + ' is deleted ');
    }
    catch (err) {
        res.status(400).send(err)
    }
};

module.exports = {
    getwheels,
    getwheelsid,
    addwheels,
    updatewheels,
    delwheels
}