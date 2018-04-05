const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  img:{type:Object, required: false},
  user: { type: Schema.Types.ObjectId, ref: "User" },
  description: { type: String, required: true },
  location:{type: String, required: true},
  coordinate:{type:Object, required: false},
  price:{type: Number, required: true},
  date: { type: String}
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
