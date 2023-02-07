const express = require('express');
const authController = require('../../controllers/auth/authController');
const rsvpInvitationController = require('../../controllers/wedding/rsvpInvitationController');

const router = express.Router();

router
  .route('/')
  .post(authController.protect, rsvpInvitationController.createRSVPInvitation);

router
  .route('/:id')
  .get(authController.protect, rsvpInvitationController.getRSVPInvitation)
  .patch(authController.protect, rsvpInvitationController.updateRSVPInvitation)
  .delete(authController.protect, rsvpInvitationController.deleteRSVPInvitation);

module.exports = router;