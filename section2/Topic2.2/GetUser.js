User.find({ city: 'Cairo' })
  .then(users => console.log('Users in Cairo:', users));