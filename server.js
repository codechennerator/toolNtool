const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
//Passport requirements
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./config/passport');
require('./models');
//====================================
const app = express();
const PORT = process.env.PORT || 3001;


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

//Configuring passport for app use.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//=====================================================================================================================================================================
mongoose.Promise = global.Promise;// Set up promises with mongoose
mongoose.connect(// Connect to the Mongo DB
  keys.mongoURI, //change to keys.mongoURI when going to production.
  {
    useMongoClient: true
  }
);
//=====================================================================================================================================================================

require('./routes/authRoutes')(app);

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
// });


//=====================================================================================================================================================================
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});