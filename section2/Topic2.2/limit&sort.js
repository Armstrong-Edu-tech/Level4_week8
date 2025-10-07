User.find({}).sort({ age: -1 }).limit(3)
  .then(users => console.log('Top 3 oldest:', users));