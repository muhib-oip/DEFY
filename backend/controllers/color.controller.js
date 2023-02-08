const { fileupl } = require('../models/color');
const fs = require("fs");

const uploadSingleimg = ((req, res) => {
    try {

        req.file = req.file.path.replace(/\\/g, "/")
        res.status(200).send(req.file);

    }

    catch (error) {
        res.status(400).send({ error: error.message })
    }

});


const uploadMulimg = ((req, res) => {
    try {
        if (req.files.length > 0) {
            req.files = req.files.map((file) => {
                return {
                    ...file, //spread copy
                    path: file.path.replace(/\\/g, "/")
                }
            })
            res.status(200).send(req.files.map(files => files.path));
        }

        else {
            res.status(400).send('please select files');

        }
    }

    catch (error) {
        res.status(400).send({ error: error.message })
    }

})


const adddata = (async (req, res) => {
    let user = new fileupl({
        images: req.body.images,
        color: req.body.color
    })
    await user.save();
    res.send(user);
});


const delimage = ((req, res) => {
    // console.log(req.params)
    fs.unlink('./upload' + '/' + req.params.imgpath, (err) => {
        if (err) {
            return res.status(404).send("Image Not Found")
        }
        else {
            return res.send('Image deleted Successfully');
        }
    });
});


const getdata = (async (req, res) => {
    let user = await fileupl.find({ color: req.body.color })
    res.send(user);
});

module.exports = {
    uploadSingleimg,
    uploadMulimg,
    adddata,
    delimage,
    getdata
}