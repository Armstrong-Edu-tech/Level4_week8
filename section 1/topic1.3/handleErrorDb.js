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

mongoose.connection.on('connected', () => {
  console.log(' Mongoose is connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log(' Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log(' Mongoose connection disconnected');
});

module.exports = connectDB;