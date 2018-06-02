var jwt = require('jsonwebtoken');

module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/users', users.create);

    app.get('/users/login', users.auth)

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single user with userId
    app.get('/users/:userId', users.findOne);

    // Update a user with userId
    app.put('/users/:userId', users.update);

    // Delete a user with userId
    app.delete('/users/:userId', users.delete);
}
