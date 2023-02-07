const express = require('express');
const authController = require('../../controllers/auth/authController');
const socialMediaLinkTypeController = require('../../controllers/vendors/socialMediaLinkTypeController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, socialMediaLinkTypeController.getAllSocialMediaLinkTypes);
  
router
  .route('/:socialMediaLinkTypeId')
  .get(authController.protect, socialMediaLinkTypeController.checkId, socialMediaLinkTypeController.getSocialMediaLinkType);

module.exports = router;