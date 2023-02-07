const db = require("../../models");
const factory = require('../handlerFactory');

exports.checkId = factory.checkId(db.vendorDocTypes);
exports.getAllVendorDocTypes = factory.getAll(db.vendorDocTypes);
exports.getVendorDocType = factory.getOne(db.vendorDocTypes);