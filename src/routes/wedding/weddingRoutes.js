const express = require('express');
const authController = require('../../controllers/auth/authController');
const handlerFactory = require('../../controllers/handlerFactory');
const weddingController = require('../../controllers/wedding/weddingController');
const weddingEventRouter = require('../../routes/wedding/weddingEventRoutes');

const router = express.Router();

router.use('/:weddingId/weddingEvents', weddingEventRouter);

router
  .route('/')
  .get(authController.protect, weddingController.getWeddingsByUser)
  .post(authController.protect, weddingController.createWedding);

router
  .route('/:weddingId')
  .get(authController.protect, weddingController.checkId, weddingController.getWedding)
  .patch(authController.protect, weddingController.checkId, weddingController.updateWedding)
  .delete(authController.protect, weddingController.checkId, weddingController.deleteWedding);

module.exports = router;