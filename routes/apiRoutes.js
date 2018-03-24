const db = require("../models")
const passport = require('passport');


module.exports = app => {

  app.get("/api/posts", function (req, res) {
    db.Post
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.post("/api/posts", function (req, res) {
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

  app.put("/api/posts/:id", function (req, res) {
    db.Post
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })

  app.delete("/api/posts/:id", function (req, res) {
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
      .catch(err => res.status(422).json(err));;
  })

  app.get("/auth", function(req,res){
      db.Userdata
      .find()
      .then(response => {
          console.log(response)
          res.json(response)
      })
  })

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
        res.redirect('/api/current_user');
    }
);

app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.get('/api/current_user', (req, res) => {
    res.send(req.user);
});
}