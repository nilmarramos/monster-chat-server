const channel = require('../models/channel.model.js');

// Create and Save a new channel
exports.create = (req, res) => {
// Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const channel = new Channel({
        name: "#" + (req.body.name || "Untitled"), 
        content: req.body.content
    });

    // Save Note in the database
    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all channels from the database.
exports.findAll = (req, res) => {

};

// Find a single channel with a channelId
exports.findOne = (req, res) => {

};

// Update a channel identified by the channelId in the request
exports.update = (req, res) => {

};

// Delete a channel with the specified channelId in the request
exports.delete = (req, res) => {

};

