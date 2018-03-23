const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    conversation: {type: Schema.Types.ObjectId, ref: 'Conversation'},
    user:{type: Schema.Types.ObjectId, ref: 'User'},
    content: String,    
}, {timestamps: {
    createdAt: 'created_at'
}});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;