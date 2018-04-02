const db = require("../models")
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {

  app.get("/api/posts", function (req, res) {
    db.Post
      .find(req.query)
      .populate('user')
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
      .populate('user')
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
  app.post('/api/conversations/:id', async (req,res) =>{
      //If users already match && 
      if(req.params.id != req.user._id){      
        const existingConversation = await db.Conversation.findOne({
          users: {
              $all: [req.params.id, req.user._id]
          }
      })

        if (existingConversation){
            return res.json(existingConversation)
        }

        db.Conversation
            .create({users:[req.user._id, req.params.id]})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }else{
        console.log('you cannot rent your own item!');
    }

  });
  //Note that these routes do not prevent a user from accessing conversations that do not belong to him! (yet)
  //Shows the conversations the user has started. (Lists the inbox)
  app.get('/api/conversations', requireLogin, function(req,res){
      db.Conversation
        .find({users: req.user._id})
        .populate('users')
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });
  //Gets a specific conversation and populates their messages. (Data will be displayed in message well) 
  app.get('/api/conversations/:cid', requireLogin, function(req,res){
      db.Conversation
        .findById(req.params.cid)
        .populate({
            path: 'messages',
            options: {
                sort: {
                    date: -1
                }
            },
            populate: {
                path: 'sender'
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });
  //POSTs messages as well as push to appropriate conversation. (Hooks up to the messaging box)
  app.post('/api/messages/', requireLogin, function(req,res){
      db.Message
        .create({
            conversation: req.body.conversation,
            sender: req.user._id,
            content: req.body.content
        })
        .then(dbModel => {
            return(
            
            db.Conversation
                .findByIdAndUpdate(
                    {
                        _id:req.body.conversation
                    },
                    {
                        $push:{messages: dbModel._id}
                    }
                )
        )})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  });
 


   
    
    
}