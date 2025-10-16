const connectDB = require("./db.js");
const { createUser, createTask, getTasks, updateTask, deleteTask } = require("./Task.Controller.js");
const express = require("express");

connectDB();

const app = express();
app.use(express.json());


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

