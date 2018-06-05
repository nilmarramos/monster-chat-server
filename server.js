const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

// create express app
const app = express();

app.use(cors())

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});


// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Silence is gold"});
});

require('./routes/user.routes.js')(app);
require('./routes/company.routes.js')(app);
require('./routes/message.routes.js')(app);
require('./routes/dm.routes.js')(app);
require('./routes/channel.routes.js')(app);



// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
