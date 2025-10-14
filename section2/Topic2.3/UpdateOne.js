User.updateOne(
  { name: 'Ali' },                  // filter condition
  { $set: { city: 'Alexandria' } }  // update operation
)
.then(result => console.log('Update result:', result))
.catch(err => console.error('Error:', err));
