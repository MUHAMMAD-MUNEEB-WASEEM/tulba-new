const express = require('express');
const authController = require('../../controllers/auth/authController');
const userController = require('../../controllers/auth/userController');
const vendorDocController = require('../../controllers/vendors/vendorDocController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(authController.protect, authController.restrictTo('vendor', 'admin'), userController.checkId, vendorDocController.getAllVendorDocsByVendor)
  .post(authController.protect, authController.restrictTo('vendor'), userController.checkId, vendorDocController.uploadDocument, vendorDocController.checkDuplicateDoc, vendorDocController.createVendorDoc);

router
  .route('/:vendorDocId')
  .get(authController.protect, authController.restrictTo('vendor', 'admin'), userController.checkId, vendorDocController.checkId, vendorDocController.getVendorDoc)
  .patch(authController.protect, authController.restrictTo('vendor'), userController.checkId, vendorDocController.checkId, vendorDocController.uploadDocument, vendorDocController.updateVendorDoc)
  .delete(authController.protect, authController.restrictTo('vendor'), userController.checkId, vendorDocController.checkId, vendorDocController.deleteVendorDoc);

module.exports = router;