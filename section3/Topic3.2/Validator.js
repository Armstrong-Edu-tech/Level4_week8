const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,               // name is required
    minLength: 3                  // name must be at least 3 characters
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/           // simple email regex
  },
  age: {
    type: Number,
    min: 18                       // age must be at least 18
  }
});
const User = mongoose.model('User', userSchema);