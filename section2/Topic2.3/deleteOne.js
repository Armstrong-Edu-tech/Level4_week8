User.deleteOne({ name: 'marwan' })
  .then(res => console.log('Delete result:', res))
  .catch(err => console.error('Delete error:', err));