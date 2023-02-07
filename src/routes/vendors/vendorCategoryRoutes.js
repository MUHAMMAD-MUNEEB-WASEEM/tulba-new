const express = require('express');
const authController = require('../../controllers/auth/authController');
const vendorCategoryController = require('../../controllers/vendors/vendorCategoryController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, vendorCategoryController.getAllVendorCategories);
  
router
  .route('/:vendorCategoryId')
  .get(authController.protect, vendorCategoryController.checkId, vendorCategoryController.getVendorCategory)
;

module.exports = router;