const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = model("User", userSchema);
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Reference to the User model
  }
});
const Post= model("Post", postSchema);
