const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema({
    users: [Schema.Types.ObjectId],
});

const Conversation = mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;