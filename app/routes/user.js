module.exports = (app) => {
  const url = `${app.url}/users`;
  const Controller = app.controllers.user;
  const auth = app.controllers.auth;

  // route login jwt
  app
    .route('/auth/login')
    .get((req, res) =>
      res.json({ msg: 'Bem vindo api Monster Chat', version: '0.0.1' })
    )
    .post(auth);

  // Create a new user
  app.post(url, Controller.create);

  // Retrieve all users
  app.get(url, Controller.listAll);

  // Retrieve a single user with userId
  app.get(`${url}/:userId`, Controller.findOne);

  // Update a user with userId
  app.put(`${url}/:userId`, Controller.update);

  // Delete a user with userId
  app.delete(`${url}/:userId`, Controller.delete);
};
