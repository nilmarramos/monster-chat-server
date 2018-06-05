const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const jwt = require('jsonwebtoken');

// create express app
const app = express();

// port
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

// JWT SECRET
app.set(
  'superSecret',
  '1a5H(qzO&1+!8M35tX##vai#3A*@$%JF%Os]eOoG63/Oo+:1S(R[%x[js09UKDam0#85'
);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.jwt = require('./app/config/jwt')(app).validate;

// DESCOMENTE A LINHA ABAIXO, PARA ATIVAR A AUTENTICACAO.
// app.use('/api', app.jwt);

app.url = require('./app/config/urls').api;

// const dbConfig = require('./app/config/database');
// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// // Connecting to the database
// mongoose
//   .connect(dbConfig.url)
//   .then(() => {
//     console.log('Successfully connected to the database');
//   })
//   .catch((err) => {
//     console.log('Could not connect to the database. Exiting now...: ');
//     process.exit();
//   });

// // define a simple route
// app.get('/', (req, res) => {
//   res.json({
//     message:
//       'Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.'
//   });
// });

app.use(function(req, res, next) {
  res.set('X-Powered-By', 'PHP/7.1.7');
  next();
});

consign({ cwd: 'app', verbose: false })
  .include('config')
  .include('models')
  .include('helpers')
  .include('controllers')
  .include('routes')
  //   .include('email')
  .into(app);

// require('./app/routes/user')(app);
// require('./app/routes/company')(app);
// require('./app/routes/message')(app);
// require('./app/routes/dm')(app);
// require('./app/routes/channel')(app);

// 404
app.use(function(req, res, next) {
  var err = { error: 'Route not found' };
  res.status(404).json(err);
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
