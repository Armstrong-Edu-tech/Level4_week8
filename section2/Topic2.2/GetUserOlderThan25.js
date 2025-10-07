User.find({ age: { $gt: 25 } })                    
  .then(users => console.log('Users > 25:', users));