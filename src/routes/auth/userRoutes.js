const express = require('express');
const userController = require('../../controllers/auth/userController');
const authController = require('../../controllers/auth/authController');
const vendorProfileRouter = require('../../routes/vendors/vendorProfileRoutes');
const vendorDocRouter = require('../../routes/vendors/vendorDocRoutes');
const socialMediaLinkRouter = require('../../routes/vendors/socialMediaLinkRoutes');

const router = express.Router();

router.use('/:id/vendorProfiles', vendorProfileRouter);
router.use('/:id/vendorDocs', vendorDocRouter);
router.use('/:id/socialMediaLinks', socialMediaLinkRouter);

router
  .route('/')
  .get(authController.protect, authController.restrictTo('super-admin'), userController.getAllUsers)
  .post(authController.protect, authController.restrictTo('super-admin'), userController.createUser);

router
  .route('/addPhoto')
  .patch(authController.protect, userController.uploadUserPhoto, userController.resizeUserPhoto, userController.updatePhoto);

router
  .route('/:id/toggleStatus')
  .patch(authController.protect, authController.restrictTo('super-admin'), userController.checkId, userController.toggleStatus);
  
router
  .route('/:id/changePassword')
  .patch(authController.protect, authController.restrictTo('super-admin'), userController.checkId, userController.changePassword);

module.exports = router;