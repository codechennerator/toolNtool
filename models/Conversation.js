const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    users: [{type:Schema.Types.ObjectId, ref: 'User'}],
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;