const db = require("../../models");
const factory = require('../handlerFactory');

exports.checkId = factory.checkId(db.weddingEvents);
exports.getAllWeddingsEvents = factory.getAll(db.weddingEvents);
exports.createWeddingEvent = factory.createOne(db.weddingEvents);
exports.getWeddingEvent = factory.getOne(db.weddingEvents);
exports.updateWeddingEvent = factory.updateOne(db.weddingEvents);
exports.deleteWeddingEvent = factory.deleteOne(db.weddingEvents);
