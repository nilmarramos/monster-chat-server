
module.exports = (app) => {
    const User = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/users', User.create);

    app.post('/users/login', User.auth)

    // Retrieve all users
    app.get('/users', User.findAll);

    app.get('/auth/user', User.userData);

    // Retrieve a single user with userId
    app.get('/users/:userId', User.findOne);

    // Update a user with userId
    app.put('/users/:userId', User.update);

    // Delete a user with userId
    app.delete('/users/:userId', User.delete);
}
