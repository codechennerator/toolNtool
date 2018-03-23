const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
<<<<<<< HEAD
const keys = require('./keys');

const User = mongoose.model('User');


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
=======
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (existingUser) {
                    // we already have a record with the given profile ID
                    done(null, existingUser);
                } else {
                    // we don't have a user record with this ID, make a new record!
                    new User({ 
                            googleId: profile.id,
                            name: profile.name,
                            email: profile.emails[0].value
                        })
                        .save()
                        .then(user => done(null, user));
                }
            });
        }
    )
>>>>>>> 0c6f451caab3401a30e1c1da23264be693226198
);