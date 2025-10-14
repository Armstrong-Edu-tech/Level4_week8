Student.create({ name: 'Laila', age: 16, grade: '10th' })
  .then(doc => console.log('Student added:', doc))
  .catch(err => console.error(err));