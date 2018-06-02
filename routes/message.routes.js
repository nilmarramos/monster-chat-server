module.exports = (app) => {
    const messages = require('../controllers/message.controller.js');

    // Create a new message
    app.post('/messages', messages.create);

    // Retrieve all messages
    app.get('/messages', messages.findAll);

    // Retrieve a single message with messageId
    app.get('/messages/:messageId', messages.findOne);

    // Update a message with messageId
    app.put('/messages/:messageId', messages.update);

    // Delete a message with messageId
    app.delete('/messages/:messageId', messages.delete);
}
