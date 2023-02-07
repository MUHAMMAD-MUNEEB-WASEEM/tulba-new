const express = require('express');
const authController = require('../../controllers/auth/authController');
const taskListController = require('../../controllers/wedding/taskListController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, taskListController.getTaskList)
  .post(authController.protect, taskListController.createTask);

router
  .route('/:id')
  .get(authController.protect, taskListController.getTask)
  .patch(authController.protect, taskListController.updateTask)
  .delete(authController.protect, taskListController.deleteTask);

module.exports = router;