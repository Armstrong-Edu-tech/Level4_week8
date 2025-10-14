User.findOneAndUpdate(
  {name:"Aya"},
  { $set: { age: 35 } },
  { new: true } // return the updated document
)
.then(user => console.log('Updated user:', user))
.catch(err => console.error(err));