const express = require('express');
const authController = require('../../controllers/auth/authController');
const vendorDocTypeController = require('../../controllers/vendors/vendorDocTypeController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, vendorDocTypeController.getAllVendorDocTypes);
  
router
  .route('/:vendorDocTypeId')
  .get(authController.protect, vendorDocTypeController.checkId, vendorDocTypeController.getVendorDocType);

module.exports = router;