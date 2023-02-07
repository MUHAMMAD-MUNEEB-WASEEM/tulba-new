const express = require('express');
const authController = require('../../controllers/auth/authController');
const venueCategoryController = require('../../controllers/vendors/venueCategoryController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, venueCategoryController.getAllVenueCategories);
  
router
  .route('/:venueCategoryId')
  .get(authController.protect, venueCategoryController.checkId, venueCategoryController.getVenueCategory);

module.exports = router;