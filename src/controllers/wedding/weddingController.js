const db = require("../../models");
const factory = require('../handlerFactory');

exports.checkId = factory.checkId(db.weddings);
exports.getWeddingsByUser = factory.getAll(db.weddings);
exports.createWedding = factory.createOne(db.weddings);
exports.getWedding = factory.getOne(db.weddings);
exports.updateWedding = factory.updateOne(db.weddings);
exports.deleteWedding = factory.deleteOne(db.weddings);
