Student.deleteOne({ name: 'Laila' })
  .then(res => console.log('Delete result:', res))
  .catch(err => console.error(err));