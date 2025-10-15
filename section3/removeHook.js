postSchema.pre('remove', function(next) {
  if (this.title === 'Important') {
    next(new Error('Cannot delete important posts!'));
  } else {
    next();
  }
});
