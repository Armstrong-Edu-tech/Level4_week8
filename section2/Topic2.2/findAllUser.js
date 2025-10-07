User.find({})
  .then(users => console.log('All users:', users))
  .catch(err => console.error('Error:', err));