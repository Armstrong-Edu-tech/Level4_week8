const User= require("./user.model.js");
const Task = require("./Task.model.js");
// create User
async function createUser(name, email, password) {
  try {
    const user = await User.create({ name, email, password });
    console.log("User created:", user);
  } catch (err) {
    console.error("Error creating user:", err);
  }

}
// create Task
async function createTask(title, description, assignedTo) {
  try {
    const task = await Task.create({ title, description, assignedTo });
    console.log("Task created:", task);
  } catch (err) {
    console.error("Error creating task:", err);
  }
}

//get Tasks
async function getTasks() {
  try {
    const tasks = await Task.find()
    console.log("Tasks retrieved:", tasks);
  } catch (err) {
    console.error("Error retrieving tasks:", err);
  }
}
//update Task
async function updateTask(id, updates) {
  try {
    const task = await Task.findByIdAndUpdate(id, updates, { new: true });
    console.log("Task updated:", task);
  }
  catch (err) {
    console.error("Error updating task:", err);
  }
}
//delete Task
async function deleteTask(id) {
  try {
    await Task.findByIdAndDelete(id);
    console.log("Task deleted");
  } catch (err) {
    console.error("Error deleting task:", err);
  }
}
module.exports = { createUser,createTask, getTasks, updateTask, deleteTask };