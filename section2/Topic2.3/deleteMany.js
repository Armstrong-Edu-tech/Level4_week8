User.deleteMany({ status: 'inactive' })
  .then(result => console.log('Deleted:', result.deletedCount))
  .catch(err => console.error(err));