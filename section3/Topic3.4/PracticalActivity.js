const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2
  },
age: {
type:Number,
required:true}
});
userSchema.virtual("fullNameAndAge").get(function () {
  return `${this.firstName} ${this.lastName} iam in ${this.age} years old`;
});
userSchema.set("toJSON", { virtuals: true });


userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "author"
});


async function create(){
const user = await User.create({ firstName: "Ali", lastName: "Khaled" , age: 30 });
await Post.create([
  { title: "First Post", content: "Post content 1", author: user._id },
  { title: "Second Post", content: "Post content 2", author: user._id }
]);
}
create();



async function getData(){
const users = await User.find().populate("posts");
console.log(JSON.stringify(users, null, 2));}
getData();