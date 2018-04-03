const db = require("../models")
const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');


module.exports = app => {
   //===================MOBILE ROUTES ===================================
   app.post('/auth/mobile/', async (req,res) =>{
    const existingUser = await db.User.findOne({ googleId: req.body.id });  
    console.log(existingUser);
    if (existingUser){
        return res.json(existingUser);
    }
    db.User.create({ 
        googleId: req.body.id,
        name: req.body.name,
        email: req.body.email
    })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});
app.post("/api/posts/mobile", function (req, res){
    db.Post
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});
//Had to use post. Finds all the conversations for the user. 
app.post('/api/mobile/conversations', function(req,res){
    db.Conversation
      .find({users: req.body})
      .populate('users')
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});
//Populates the messages for an individual conversation. 
app.post('/api/mobile/messages', function(req,res){
    db.Conversation
      .findById(req.body.cid)
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
//  //Making a new conversation
app.post('/api/mobile/startconversation', async (req,res) =>{
//If users already match && 
console.log(req.body);
if(req.body.postUserId != req.body.userId){      
  const existingConversation = await db.Conversation.findOne({
    users: {
        $all: [req.body.postUserId, req.body.userId]
    }
})
   console.log(existingConversation);
  if (existingConversation){
      return res.json(existingConversation)
  }

  db.Conversation
      .create({users:[req.body.postUserId, req.body.userId]})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}else{
    return res.send('You cannot start a conversation with yourself');
}
});

//POSTs messages as well as push to appropriate conversation. (Hooks up to the messaging box)
app.post('/api/mobile/sendmessage/', function(req,res){
    console.log(req.body);
    db.Message
      .create({
          conversation: req.body.cid,
          sender: req.body.uid,
          content: req.body.content
      })
      .then(dbModel => {
          return(
          db.Conversation
              .findByIdAndUpdate(
                  {
                      _id:req.body.cid //Find the right conversation.
                  },
                  {
                      $push:{messages: dbModel._id} //Push the message.
                  }
              )
      )})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});
app.post("/api/mobile/userposts", function(req,res) {
    console.log(req.body);
    db.Post
      .find({user: req.body.id})
      .populate('user')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});
}