const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});
// Define a virtual property called "fullName"
userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});
 
