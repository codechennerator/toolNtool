const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    conversation: {type: Schema.Types.ObjectId, ref: 'Conversation'},
    sender:{type: Schema.Types.ObjectId, ref: 'User'},
    content: String,
    isRead: {type: Boolean, default: false},
    date : { type : Date, default: Date.now }    
    }
)

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;