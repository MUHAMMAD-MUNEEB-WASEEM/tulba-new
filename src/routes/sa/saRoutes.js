const express = require('express');
const saController = require('../../controllers/saController');

const router = express.Router();

router
  .route('/defaultSetup')
  .get(saController.setup)

module.exports = router;