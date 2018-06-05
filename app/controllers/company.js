module.exports = (app) => {
  const Company = app.models.company;

  return {
    // Create and Save a new user
    create: (req, res) => {
      if (req.body.name && req.body.admin) {
        var companyData = {
          name: req.body.name,
          admin: req.body.admin
        };
        //use schema.create to insert data into the db

        const company = new Company(companyData);

        // Save Note in the database
        company
          .save()
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || 'Some error occurred while creating the company.'
            });
          });
      }
    },

    // Retrieve and return all users from the database.
    findAll: (req, res) => {},

    // Find a single user with a userId
    findOne: (req, res) => {},

    // Update a user identified by the userId in the request
    update: (req, res) => {},

    // Delete a user with the specified userId in the request
    delete: (req, res) => {}
  };
};
