User.findOne({ name: 'Ali' })
  .then(user => {
    if (user) console.log('User found:', user);
    else console.log('User not found');
  });
