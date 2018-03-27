const db = require("../models")
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {

  app.get("/api/posts", function (req, res) {
    db.Post
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.post("/api/posts", requireLogin, function (req, res){
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.get("/api/posts/:id", function (req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.get("/api/posts/:id", function (req, res) {
    db.Post
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.put("/api/posts/:id", requireLogin, function (req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.delete("/api/posts/:id", requireLogin,function (req, res) {
    db.Post
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.get("/api/posts/title/:title", function (req, res) {
    db.Post
      .find({ title: { $regex: `(?i).*${req.params.title}.*` } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  //TODO: Hook up this route with front end
  app.get("/api/usersposts", requireLogin, function(req,res) {
      db.Post
        .find({user: req.user._id})
        .populate('user')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });

 //===================MESSAGING ROUTES ===================================
//  //Making a new conversation
//   app.post('/api/message/:id', requireLogin, function(req,res){

//     Conversation.findOne({ googleId: profile.id }).then(existingUser => {
//         if (false) {
//             // we already have a record with the given profile ID
            
//         } else {
//             // we don't have a user record with this ID, make a new record!
//             new User({ 

//                 })
//                 .save()
//                 .then(user => done(null, user));
//         }
//     });
//       db.Conversation
//         .create()
//   });
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