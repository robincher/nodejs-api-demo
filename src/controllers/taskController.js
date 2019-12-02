'use strict';
const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

let TaskController = {};

TaskController.listTasks = (req, res) => {
    Task.find({}, (err, task) => {
        if (err) {
            res.send(err);
        }
        res.json(task);
      });
};

TaskController.createTask = (req, res) => {
    let newTask = new Task(req.body);
    newTask.save((err, task) => {
        if (err){
            res.send(err);
        }
        res.json(task);
    });
};

TaskController.readTask = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if (err) {
          res.send(err);
        }
        res.json(task);
      });
};


TaskController.updateTask = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
        if (err) {
          res.send(err);
        }
        res.json(task);
      });
};

TaskController.deleteTask = (req, res) => {
    Task.remove({_id: req.params.taskId}, (err, task) => {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Task successfully deleted' });
    });
};

module.exports = TaskController;