  User.create({ name: 'Omar', age: 22 })
  .then(user => console.log('Added:', user))
  .catch(err => console.error('Error:', err));
