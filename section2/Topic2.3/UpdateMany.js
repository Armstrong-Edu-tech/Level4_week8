User.updateMany(
  { age: { $lt: 30} },             // filter: age less than 25
  { $set: { status: 'student' } }   // set new field
)
.then(res => console.log('Updated many:', res));