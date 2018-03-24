const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const session = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models');
require('./config/passport');

mongoose.connect("mongodb://toolntooladmin:toolntool123@ds261678.mlab.com:61678/heroku_c0hzwfm7");

const app = express();

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey]
//   })
// );
app.use(session({secret: keys.cookieKey, resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/apiRoutes')(app);

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
const PORT = process.env.PORT || 3001;
app.listen(PORT);