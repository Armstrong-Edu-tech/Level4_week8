const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myApp');  //myApp that is a db we will use

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);


User.create({ name: 'Yousef', age: 29 }, (err, user) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('User added:', user);
  }
});