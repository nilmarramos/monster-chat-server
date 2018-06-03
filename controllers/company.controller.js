const Company = require('../models/company.model.js');

// Create and Save a new user
exports.create = (req, res) => {
  if (req.body.name &&
    req.body.admin) {
    var companyData = {
      name: req.body.name,
      admin: req.body.admin
    }
    //use schema.create to insert data into the db

    const company = new Company(companyData);

       // Save Note in the database
       company.save()
       .then(data => {
           res.send(data);
       }).catch(err => {
           res.status(500).send({
               message: err.message || "Some error occurred while creating the company."
           });
       });
  }
};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {

};

// Find a single user with a userId
exports.findOne = (req, res) => {

};

// Update a user identified by the userId in the request
exports.update = (req, res) => {

};

// Delete a user with the specified userId in the request
exports.delete = (req, res) => {

};
