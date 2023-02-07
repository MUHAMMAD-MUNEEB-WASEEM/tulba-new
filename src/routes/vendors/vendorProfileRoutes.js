const express = require('express');
const authController = require('../../controllers/auth/authController');
const userController = require('../../controllers/auth/userController');
const vendorProfileController = require('../../controllers/vendors/vendorProfileController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(authController.protect, userController.checkId, vendorProfileController.getAllVendorProfiles)
  .post(authController.protect, authController.restrictTo('vendor'), userController.checkId, vendorProfileController.createVendorProfile);

router
  .route('/:vendorProfileId')
  .get(authController.protect, userController.checkId, vendorProfileController.checkId, vendorProfileController.getVendorProfile)
  .patch(authController.protect, authController.restrictTo('vendor'), userController.checkId, vendorProfileController.checkId, vendorProfileController.updateVendorProfile)
  .delete(authController.protect, authController.restrictTo('vendor'), userController.checkId, vendorProfileController.checkId, vendorProfileController.deleteVendorProfile);

module.exports = router;