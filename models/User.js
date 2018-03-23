const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    googleId: String,
    name: { familyName: String, givenName: String },
    email: String
});

const User = mongoose.model("User", userSchema);

<<<<<<< HEAD
module.exports = User;
=======
module.exports = User;
>>>>>>> 0c6f451caab3401a30e1c1da23264be693226198
