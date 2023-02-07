const express = require('express');
const authController = require('../../controllers/auth/authController');
const weddingController = require('../../controllers/wedding/weddingController');
const weddingEventController = require('../../controllers/wedding/weddingEventController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(authController.protect, weddingController.checkId, weddingEventController.getAllWeddingsEvents)
  .post(authController.protect, weddingController.checkId, weddingEventController.createWeddingEvent);

router
  .route('/:weddingEventId')
  .get(authController.protect, weddingController.checkId, weddingEventController.checkId, weddingEventController.getWeddingEvent)
  .patch(authController.protect, weddingController.checkId, weddingEventController.checkId, weddingEventController.updateWeddingEvent)
  .delete(authController.protect, weddingController.checkId, weddingEventController.checkId, weddingEventController.deleteWeddingEvent);

module.exports = router;