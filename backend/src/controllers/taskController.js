const taskModel = require("../models/taskModel");

const getAllTasks = (req, res) => {
  const tasks = taskModel.getTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title } = req.body;
  const result = taskModel.addTask(title);

  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  res.status(201).json({ message: result.success, task: result.task });
};

const completeTask = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const result = taskModel.markTaskAsCompleted(taskId);

  if (result.error) {
    return res.status(404).json({ error: result.error });
  }

  res.json({ message: result.success, task: result.task });
};

const removeTask = (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const result = taskModel.deleteTask(taskId);

  if (result.error) {
    return res.status(404).json({ error: result.error });
  }

  res.status(204).json({ message: result.success });
};

module.exports = {
  getAllTasks,
  createTask,
  completeTask,
  removeTask,
};
