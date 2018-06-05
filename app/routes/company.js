module.exports = (app) => {
  const url = `${app.url}/companies`;
  const Controller = app.controllers.company;

  // Create a new company
  app.post(url, Controller.create);

  // Retrieve all companys
  app.get(url, Controller.findAll);

  // Retrieve a single company with companyId
  app.get(`${url}/:companyId`, Controller.findOne);

  // Update a company with companyId
  app.put(`${url}/:companyId`, Controller.update);

  // Delete a company with companyId
  app.delete(`${url}/:companyId`, Controller.delete);
};
