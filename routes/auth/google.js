const passport = require('passport');
const router = require("express").Router();

router.get(
    '/',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get(
    '/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/api/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;
