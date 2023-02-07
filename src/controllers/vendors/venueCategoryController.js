const db = require("../../models");
const factory = require('../handlerFactory');

exports.checkId = factory.checkId(db.venueCategories);
exports.getAllVenueCategories = factory.getAll(db.venueCategories);
exports.getVenueCategory = factory.getOne(db.venueCategories);