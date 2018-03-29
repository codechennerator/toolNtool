const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  img:{type:Object, required: false},
<<<<<<< HEAD
  user: { type: Schema.Types.ObjectId, ref: "User" },
=======
  user: { type: String, required: true },
>>>>>>> c55b12b546be53490b9291271190ee2d8ec9688a
  description: { type: String, required: true },
  location:{type: String, required: true},
  coordinate:{type:String, required: false},
  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
