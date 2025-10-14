Student.find({})
  .then(students => console.log('All students:', students))
  .catch(err => console.error(err));