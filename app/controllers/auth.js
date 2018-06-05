module.exports = (app) => (req, res) => {
  const User = app.models.user;
  const jwt = require('jsonwebtoken');
  const pass = require('../middleware/password');

  const query = {
    $or: [{ username: req.body.username }, { email: req.body.email }]
  };

  User.findOne(query, { token: 0 })
    .exec()
    .then(({ email, username, company, _id, password }) => {
      if (!email) {
        res.status(401).json({ success: false, message: 'Invalid login' });
      } else {
        // const obj = user.toObject();
        // delete obj.password;
        if (!pass.validate(password, req.body.password)) {
          res.status(401).json({ success: false, message: 'Invalid password' });
        } else {
          // const expire = new Date();
          // expire.setDate(expire.getDate() + 5);
          // const time = expire.getTime();
          const token = jwt.sign(
            {
              data: { email, username, company, _id }
            },
            app.get('superSecret'),
            {
              expiresIn: '7d',
              algorithm: 'HS512'
            }
          );

          console.log('User: ', { email, username, company, _id, password });
          console.log('Token: ', token);
          User.update({ _id: _id }, { $set: { token: token } })
            .then((us) => {
              console.log('Update Token: ', us);
              res.json({
                success: true,
                message: 'Token Ativado',
                token: token,
                user: { email, username, company, _id }
              });
            })
            .catch((err) => {
              console.log('Deu erro');
              throw err;
            });
        }
      }
    })
    .catch((err) => {
      console.log('Deu erro');
      throw err;
    });
};
