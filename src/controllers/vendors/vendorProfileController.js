const db = require("../../models");
const factory = require('../handlerFactory');

exports.checkId = factory.checkId(db.vendorProfiles);
exports.getAllVendorProfiles = factory.getAll(db.vendorProfiles);
exports.createVendorProfile = factory.createOne(db.vendorProfiles);
exports.getVendorProfile = factory.getOne(db.vendorProfiles);
exports.updateVendorProfile = factory.updateOne(db.vendorProfiles);
exports.deleteVendorProfile = factory.deleteOne(db.vendorProfiles);