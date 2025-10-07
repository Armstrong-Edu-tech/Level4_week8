const mongoose = require('mongoose');
const connectDB = () => {
  mongoose
    .connect("mongodb+srv://marwanmagdy826:<db_password>@cluster0.ibv1u.mongodb.net/")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};
module.exports = connectDB;