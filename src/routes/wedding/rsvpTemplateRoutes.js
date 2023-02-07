const express = require('express');
const authController = require('../../controllers/auth/authController');
const rsvpTemplateController = require('../../controllers/wedding/rsvpTemplateController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, rsvpTemplateController.getAllRSVPTemplates)
  .post(authController.protect, authController.restrictTo('admin'), rsvpTemplateController.uploadTemplateImages, rsvpTemplateController.resizeTemplateImages, rsvpTemplateController.createRSVPTemplate);

router
  .route('/:rsvpTemplateId')
  .get(authController.protect, rsvpTemplateController.checkId, rsvpTemplateController.getRSVPTemplate)
  .patch(authController.protect, authController.restrictTo('admin'), rsvpTemplateController.checkId, rsvpTemplateController.uploadTemplateImages, rsvpTemplateController.resizeTemplateImages, rsvpTemplateController.updateRSVPTemplate)
  .delete(authController.protect, authController.restrictTo('admin'), rsvpTemplateController.checkId, rsvpTemplateController.deleteRSVPTemplate);

module.exports = router;