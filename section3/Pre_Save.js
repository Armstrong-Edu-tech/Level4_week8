const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
  title: String,
  createdAt: Date
});

// Add a pre-save hook
postSchema.pre('save', function(next) {
  this.createdAt = new Date(); // Set current time
  next(); // move to the next step (very important)
});

const Post = mongoose.model('Post', postSchema);

// Saving a new post
const newPost = new Post({ title: 'My First Post' });
newPost.save().then(doc => console.log('Saved:', doc));