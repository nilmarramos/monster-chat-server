module.exports = (app) => {
  const User = app.models.user;
  const Help = app.helpers.crud;

  const pass = require('../middleware/password');

  function configPass(v) {
    return pass.hash(v);
  }

  return {
    create: (req, res) => {
      const user = new User();

      Object.assign(user, req.body);

      Help.createUser(user, res);
    },

    passwordUpdate: (req, res) => {
      const query = {
        _id: req.params._id
      };
      const options = {
        returnNewDocument: true
      };
      if (req.body.password) req.body.password = configPass(req.body.password);
      const mod = { $set: { password: req.body.password } };

      // res.status(200).json({params: req.params, res: mod, query: query, options: options})
      Help.findOneAndUpdate(User, query, mod, res, options);
    },

    // Update a user identified by the userId in the request
    update: (req, res) => {
      const query = {
        _id: req.params._id
      };
      if (req.body.password) req.body.password = configPass(req.body.password);
      const mod = req.body;

      Help.update(User, query, mod, res);
    },

    // Delete a user with the specified userId in the request
    delete: (req, res) => {
      const query = req.params;
    },

    // Retrieve and return all users from the database.
    listAll: (req, res) => {
      const query = {};
      const mod = {
        page: 1,
        limit: 10,
        select: '-password'
      };

      Help.listAll(User, query, mod, res);
    },

    // Find a single user with a userId
    findOne: (req, res) => {
      const query = req.params;
      const mod = { password: 0, token: 0 };

      Help.listOne(User, query, mod, res);
    }
  };
};

// module.exports = (app) => {
//   const User = app.models.user;
//   const bcrypt = require('bcrypt');

//   return {
//     // Create and Save a new user
//     create: (req, res) => {
//       if (req.body.email && req.body.username && req.body.password) {
//         var userData = {
//           email: req.body.email,
//           username: req.body.username,
//           password: bcrypt.hashSync(req.body.password, 10),
//           company: req.body.company
//         };
//         //use schema.create to insert data into the db

//         const user = new User(userData);

//         // Save Note in the database
//         user
//           .save()
//           .then((data) => {
//             res.send(data);
//           })
//           .catch((err) => {
//             res.status(500).send({
//               message:
//                 err.message || 'Some error occurred while creating the user.'
//             });
//           });
//       }
//     },

//     auth: (req, res) => {
//       let userData;
//       if (req.body.username) {
//         userData = {
//           username: req.body.username,
//           password: bcrypt.hashSync(req.body.password, 10)
//         };
//       } else {
//         userData = {
//           email: req.body.email,
//           password: bcrypt.hashSync(req.body.password, 10)
//         };
//       }
//       User.findOne(userData)
//         .then((user) => {
//           if (!user) {
//             return res.status(404).send({
//               message: 'user not found '
//             });
//           }
//           let token = jwt.sign(
//             {
//               exp: Math.floor(Date.now() / 1000) + 60 * 60,
//               data: user
//             },
//             'monster-chat',
//             function(err, token) {
//               console.log(token);
//               return token;
//             }
//           );
//           console.log(token);
//           res.send({ token: token });
//         })
//         .catch((err) => {
//           if (err.kind === 'ObjectId') {
//             return res.status(404).send({
//               message: 'user not found with id '
//             });
//           }
//           return res.status(500).send({
//             message: 'Error retrieving note with id ' + req.params.noteId
//           });
//         });
//     }
//   };
// };
