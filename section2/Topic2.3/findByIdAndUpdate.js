User.findByIdAndUpdate(
  '68654df4f72c5c5cc6f6b8d2',
  { $set: { age: 35 } },
  { new: true } // return the updated document
)
.then(user => console.log('Updated user:', user))
.catch(err => console.error(err));