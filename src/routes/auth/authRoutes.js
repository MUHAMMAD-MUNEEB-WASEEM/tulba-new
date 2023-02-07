const express = require('express');

const authController = require('../../controllers/auth/authController');

const router = express.Router();

router
  .route('/signup')
  .post(authController.signup);

router
  .route('/login')
  .post(authController.login);

router
  .route('/logout')
  .get(authController.logout);

router
  .route('/forgotPassword')
  .post(authController.forgotPassword);

router
  .route('/resetPassword/:token')
  .patch(authController.resetPassword);

router
  .route('/updateMyPassword')
  .patch(authController.protect, authController.updatePassword);

module.exports = router;
