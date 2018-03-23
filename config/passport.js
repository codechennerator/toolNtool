const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const mongoose = require('mongoose');
const keys = require('./keys');

// const User = mongoose.model('users');

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true //This line says that if google runs through the heroku proxy, it can trust it, and to use https instead of http.
    },
    (accessToken, refreshToken, profile, done) => {
    //   User.findOne({ googleId: profile.id }).then(existingUser => {
    //     if (existingUser) {
    //       // we already have a record with the given profile ID
    //       done(null, existingUser);
    //     } else {
    //       // we don't have a user record with this ID, make a new record!
    //       new User({ googleId: profile.id })
    //         .save()
    //         .then(user => {
    //             return done(null, user)});
    //     }
    //   });
    console.log('reached this point');
    }
  )
);