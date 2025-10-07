const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myApp');  //myApp that is a db we will use

const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', userSchema);


const newUser = new User({ name: 'Laila', age: 31 });
newUser.save()
  .then(doc => console.log('User saved:', doc))
  .catch(err => console.error('Save error:', err.message));


  User.create({ name: 'Omar', age: 22 })
  .then(user => console.log('Added:', user))
  .catch(err => console.error('Error:', err));