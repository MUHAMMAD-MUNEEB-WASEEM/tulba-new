const express = require('express');
const authController = require('../../controllers/auth/authController');
const userController = require('../../controllers/auth/userController');
const socialMediaLinkController = require('../../controllers/vendors/socialMediaLinkController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(authController.protect, userController.checkId, socialMediaLinkController.getAllSocialMediaLinksByVendor)
  .post(authController.protect, authController.restrictTo('vendor'), userController.checkId, socialMediaLinkController.checkDuplicateDoc, socialMediaLinkController.createSocialMediaLink);

router
  .route('/:socialMediaLinkId')
  .get(authController.protect, userController.checkId, socialMediaLinkController.checkId, socialMediaLinkController.getSocialMediaLink)
  .patch(authController.protect, authController.restrictTo('vendor'), userController.checkId, socialMediaLinkController.checkId, socialMediaLinkController.updateSocialMediaLink)
  .delete(authController.protect, authController.restrictTo('vendor'), userController.checkId, socialMediaLinkController.checkId, socialMediaLinkController.deleteSocialMediaLink);

module.exports = router;