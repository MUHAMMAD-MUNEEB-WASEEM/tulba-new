const db = require("../../models");
const factory = require('../handlerFactory');

exports.createRSVP = factory.createOne(db.rsvps);
exports.getRSVP = factory.getOne(db.rsvps);
exports.updateRSVP = factory.updateOne(db.rsvps);
exports.deleteRSVP = factory.deleteOne(db.rsvps);
exports.getRSVPList = catchAsync(async(req, res, next) => {
  return;
});
