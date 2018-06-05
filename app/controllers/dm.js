module.exports = (app) => {
  const dm = app.models.dm;

  return {
    // Create and Save a new dm
    create: (req, res) => {},

    // Retrieve and return all dms from the database.
    findAll: (req, res) => {},

    // Find a single dm with a dmId
    findOne: (req, res) => {},

    // Update a dm identified by the dmId in the request
    update: (req, res) => {},

    // Delete a dm with the specified dmId in the request
    delete: (req, res) => {}
  };
};
