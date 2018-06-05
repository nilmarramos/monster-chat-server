const User = require('../models/user.model.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create and Save a new user
exports.create = (req, res) => {
  if (req.body.email &&
    req.body.username &&
    req.body.password) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      company: req.body.company
    }
    //use schema.create to insert data into the db

    const user = new User(userData);

       // Save Note in the database
       user.save()
       .then(data => {
           res.send(data);
       }).catch(err => {
           res.status(500).send({
               message: err.message || "Some error occurred while creating the user."
           });
       });
  }
};

exports.auth = (req, res) => {
  console.log('auth')
  let userData;
  if(req.body.username) {
    userData = {
      username: req.body.username
    }
  }
  else {
    userData = {
      email: req.body.email
    }
  }

  console.log(userData)
  User.findOne(userData)
      .then(user => {
          if(!user) {
              return res.status(404).send({
                  message: "user not found "
              });
          }
          else {
            console.log(user)
            bcrypt.compare(req.body.password, user.password).then(function(result) {
              if(result == true){
              let token =  jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60),
              data: user
            }, 'monster-chat', function(err, token) {
              console.log(token)
              return res.status(200).send({
                  token: token
              });
              });

              }
              else {
                return res.status(404).send({
                    message: "wrong password "
                });
              }
            });

          }

      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "user not found with id "
              });
          }
          return res.status(500).send({
              message: "Error retrieving note with id " + req.params.noteId
          });
      });

};

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {

};

exports.userData = (req, res) => {
  if(req.header('token')) {
    var decoded = jwt.decode(req.header('token'));
    return res.send(decoded.data)
  }
  else {
    return res.send({})
  }

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
