const Bubble = require("../models/Bubble.model")

//find all
module.exports.allBubbles = (req, res) => {
    Bubble.find()
        .then(allBubbles => res.json({results: allBubbles}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

//create
module.exports.createBubble = (req, res) => {
    Bubble.create(req.body)
    .then(newBubble => res.json({results: newBubble}))
    .catch(err => res.status(400).json(err))
}

//find one
module.exports.oneBubble = (req, res) => {
    Bubble.findOne({_id: req.params.id})
        .then(bubble => res.json({results: bubble}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

//update
module.exports.updateBubble = (req, res) => {
    Bubble.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true})
        .then(bubble => res.json({results: bubble}))
        .catch(err => res.status(400).json(err))
}

//delete
module.exports.deleteBubble = (req, res) => {
    Bubble.deleteOne({_id: req.params.id})
        .then(result => res.json({results: result}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}