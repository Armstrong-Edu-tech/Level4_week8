userSchema.pre('find', function(next) {
  console.log('About to execute find...');
  next();
});
userSchema.post('updateOne', function(res) {
  console.log('Document updated successfully');
next();
});
