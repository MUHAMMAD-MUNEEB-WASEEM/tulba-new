const db = require("../../models");
const factory = require('../handlerFactory');

exports.checkId = factory.checkId(db.socialMediaLinkTypes);
exports.getAllSocialMediaLinkTypes = factory.getAll(db.socialMediaLinkTypes);
exports.getSocialMediaLinkType = factory.getOne(db.socialMediaLinkTypes);