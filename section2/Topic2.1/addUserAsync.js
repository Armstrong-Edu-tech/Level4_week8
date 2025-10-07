const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myApp');  //myApp that is a db we will use

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);


async function addUser() {
  try {
    const user = await User.create({ name: 'Aya', age: 24 });
    console.log('User added:', user);
  } catch (err) {
    console.error('Error:', err);
  }
}
addUser();