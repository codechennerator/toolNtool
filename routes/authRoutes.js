const db = require("../models")
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
     //===================AUTH ROUTES ===================================
     app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/dashboard');
        
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}