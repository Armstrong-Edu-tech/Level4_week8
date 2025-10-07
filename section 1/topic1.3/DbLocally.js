const mongoose = require('mongoose');
const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/your-database-name")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};


module.exports = connectDB;