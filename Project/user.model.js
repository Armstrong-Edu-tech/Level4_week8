// user.model.js
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/ // basic email format
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;




