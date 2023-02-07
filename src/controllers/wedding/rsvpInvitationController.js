const db = require("../../models");
const factory = require('../handlerFactory');

exports.createRSVPInvitation = factory.createOne(db.rsvpInvitations);
exports.getRSVPInvitation = factory.getOne(db.rsvpInvitations);
exports.updateRSVPInvitation = factory.updateOne(db.rsvpInvitations);
exports.deleteRSVPInvitation = factory.deleteOne(db.rsvpInvitations);
