const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "tasks.json");
let tasks = [];

const loadTasks = () => {
  if (fs.existsSync(filePath)) {
    try {
      const data = fs.readFileSync(filePath);
      tasks = JSON.parse(data);
    } catch (error) {
      console.error("Error reading tasks.json:", error);
      tasks = [];
    }
  }
};

const saveTasks = () => {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};


loadTasks();

const getTasks = () => tasks;

const addTask = (title) => {
  if (!title || typeof title !== "string" || title.trim() === "") {
    return { error: "Task title is required and must be a non-empty string." };
  }

  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };
  tasks.push(newTask);
  saveTasks();
  return { success: "Task created successfully.", task: newTask };
};

const markTaskAsCompleted = (id) => {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.completed = true;
    saveTasks();
    return { success: "Task marked as completed.", task };
  }
  return { error: "Task not found." };
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex((t) => t.id === id);
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    saveTasks();
    return { success: "Task deleted successfully." };
  }
  return { error: "Task not found." };
};

module.exports = {
  getTasks,
  addTask,
  markTaskAsCompleted,
  deleteTask,
};
