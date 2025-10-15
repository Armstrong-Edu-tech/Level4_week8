userSchema.pre('find', function(next) {
  console.log('About to execute find...');
  next();
});
