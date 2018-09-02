'use strict';
const taskController = require('../controllers/taskController');

module.exports = function(app) {
  app.route('/tasks')
    .get(taskController.listTasks)
    .post(taskController.createTask);

  app.route('/tasks/:taskId')
    .get(taskController.readTask)
    .put(taskController.updateTask)
    .delete(taskController.deleteTask);
};