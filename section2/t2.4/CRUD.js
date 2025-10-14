const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));


  const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String
});
const Student = mongoose.model('Student', studentSchema);


Student.create({ name: 'Laila', age: 16, grade: '10th' })
  .then(doc => console.log('Student added:', doc))
  .catch(err => console.error(err));

Student.find({})
  .then(students => console.log('All students:', students))
  .catch(err => console.error(err));

Student.updateOne({ name: 'Laila' }, { $set: { grade: '11th' } })
  .then(res => console.log('Update result:', res))
  .catch(err => console.error(err));
 
Student.deleteOne({ name: 'Laila' })
  .then(res => console.log('Delete result:', res))
  .catch(err => console.error(err));
