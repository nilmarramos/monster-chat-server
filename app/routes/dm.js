module.exports = (app) => {
  const url = `${app.url}/dms`;
  const Controller = app.controllers.dm;

  // Create a new dm
  app.post(url, Controller.create);

  // Retrieve all dms
  app.get(url, Controller.findAll);

  // Retrieve a single dm with dmId
  app.get(`${url}/:dmId`, Controller.findOne);

  // Update a dm with dmId
  app.put(`${url}/:dmId`, Controller.update);

  // Delete a dm with dmId
  app.delete(`${url}/:dmId`, Controller.delete);
};
