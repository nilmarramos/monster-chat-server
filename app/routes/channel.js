module.exports = (app) => {
  const url = `${app.url}/channels`;
  const Controller = app.controllers.channel;
  // const Validate = app.validates.channels

  // Create a new channel
  app.post(url, Controller.create);

  // Retrieve all channels
  app.get(url, Controller.findAll);

  // Retrieve a single channel with channelId
  app.get(`${url}/:channelId`, Controller.findOne);

  // Update a channel with channelId
  app.put(`${url}/:channelId`, Controller.update);

  // Delete a channel with channelId
  app.delete(`${url}/:channelId`, Controller.delete);
};
