const express = require('express');
const authController = require('../../controllers/auth/authController');
const rsvpListController = require('../../controllers/wedding/rsvpListController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, rsvpListController.getRSVPList)
  .post(authController.protect, rsvpListController.createRSVP);

router
  .route('/:id')
  .get(authController.protect, rsvpListController.getRSVP)
  .patch(authController.protect, rsvpListController.updateRSVP)
  .delete(authController.protect, rsvpListController.deleteRSVP);

module.exports = router;