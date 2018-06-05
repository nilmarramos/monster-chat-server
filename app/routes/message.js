module.exports = (app) => {
  const url = `${app.url}/messages`;
  const Controller = app.controllers.message;

  // Create a new message
  app.post(url, Controller.create);

  // Retrieve all messages
  app.get(url, Controller.findAll);

  // Retrieve a single message with messageId
  app.get(`${url}/:messageId`, Controller.findOne);

  // Update a message with messageId
  app.put(`${url}/:messageId`, Controller.update);

  // Delete a message with messageId
  app.delete(`${url}/:messageId`, Controller.delete);
};
