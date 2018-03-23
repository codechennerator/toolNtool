const router = require("express").Router();
const passport = require("passport");
router.get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  router.get('/auth/google/callback', passport.authenticate('google',{
    successRedirect: '/surveys',
    failureRedirect: '/auth/google/callback'
  }));

  router.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  router.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

module.exports = router;