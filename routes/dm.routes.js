module.exports = (app) => {
    const dms = require('../controllers/dm.controller.js');

    // Create a new dm
    app.post('/dms', dms.create);

    // Retrieve all dms
    app.get('/dms', dms.findAll);

    // Retrieve a single dm with dmId
    app.get('/dms/:dmId', dms.findOne);

    // Update a dm with dmId
    app.put('/dms/:dmId', dms.update);

    // Delete a dm with dmId
    app.delete('/dms/:dmId', dms.delete);
}
