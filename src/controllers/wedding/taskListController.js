const db = require("../../models");
const factory = require('../handlerFactory');

exports.createTask = factory.createOne(db.tasks);
exports.getTask = factory.getOne(db.tasks);
exports.updateTask = factory.updateOne(db.tasks);
exports.deleteTask = factory.deleteOne(db.tasks);
exports.getTaskList = catchAsync(async(req, res, next) => {
  return;
});
