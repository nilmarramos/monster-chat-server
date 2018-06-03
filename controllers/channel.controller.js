const Channel = require('../models/channel.model.js');

// Create and Save a new channel
exports.create = (req, res) => {
// Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: ":( Você deve digitar um nome para o canal"
        });
    }

    // Create a Note
    const channel = new Channel({
        name: "#" + (req.body.name || "Untitled")
    });

    // Save Note in the database
    channel.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the channel."
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
