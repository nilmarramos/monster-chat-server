module.exports = (app) => {
    const channels = require('../controllers/channel.controller.js');

    // Create a new channel
    app.post('/channels', channels.create);

    // Retrieve all channels
    app.get('/channels', channels.findAll);

    // Retrieve a single channel with channelId
    app.get('/channels/:channelId', channels.findOne);

    // Update a channel with channelId
    app.put('/channels/:channelId', channels.update);

    // Delete a channel with channelId
    app.delete('/channels/:channelId', channels.delete);
}
