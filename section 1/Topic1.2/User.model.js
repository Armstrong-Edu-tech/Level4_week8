const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },          // must be provided
  email: { type: String, required: true, unique: true },  // must be unique
  age: { type: Number, min: 18 },                   // must be at least 18
  createdAt: { type: Date, default: Date.now }      // auto-filled
});
const User = mongoose.model('User', userSchema);
