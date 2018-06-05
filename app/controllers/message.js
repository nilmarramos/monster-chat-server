module.exports = (app) => {
  const Message = app.models.message;

  return {
    // Create and Save a new message
    create: (req, res) => {},

    // Retrieve and return all messages from the database.
    findAll: (req, res) => {},

    // Find a single message with a messageId
    findOne: (req, res) => {},

    // Update a message identified by the messageId in the request
    update: (req, res) => {},

    // Delete a message with the specified messageId in the request
    delete: (req, res) => {}
  };
};
