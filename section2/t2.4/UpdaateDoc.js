Student.updateOne({ name: 'Laila' }, { $set: { grade: '11th' } })
  .then(res => console.log('Update result:', res))
  .catch(err => console.error(err));