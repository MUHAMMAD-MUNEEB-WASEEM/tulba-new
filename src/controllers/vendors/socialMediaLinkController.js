const db = require("../../models");
const factory = require('../handlerFactory');
const AppError = require('../../utils/appError');

exports.checkDuplicateDoc = catchAsync(async(req, res, next) => {
  const doc = await db.socialMediaLinks.findAll({ where: { userId: req.user.id, socialMediaLinkTypeId: req.body.socialMediaLinkTypeId }});

  if(doc.length > 0) {
    // Document already exists, cannot create duplicate document
    return next(new AppError('Can not add duplicate social media link. It already exists.'));
  }
  next();
});

exports.checkId = factory.checkId(db.socialMediaLinks);
exports.getAllSocialMediaLinksByVendor = factory.getAll(db.socialMediaLinks);
exports.createSocialMediaLink = factory.createOne(db.socialMediaLinks);
exports.getSocialMediaLink = factory.getOne(db.socialMediaLinks);
exports.updateSocialMediaLink = factory.updateOne(db.socialMediaLinks);
exports.deleteSocialMediaLink = factory.deleteOne(db.socialMediaLinks);