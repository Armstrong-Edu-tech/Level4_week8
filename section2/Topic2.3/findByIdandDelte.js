User.findByIdAndDelete('686543b4a8b79ecfc6133198')
  .then(user => console.log('Deleted user:', user))
  .catch(err => console.error(err));