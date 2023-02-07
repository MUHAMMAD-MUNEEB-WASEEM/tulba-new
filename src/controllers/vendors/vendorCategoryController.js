const db = require("../../models");
const factory = require('../handlerFactory');

exports.checkId = factory.checkId(db.vendorCategories);
exports.getAllVendorCategories = factory.getAll(db.vendorCategories);
exports.getVendorCategory = factory.getOne(db.vendorCategories);