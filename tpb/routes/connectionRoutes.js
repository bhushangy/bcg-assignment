const express = require('express');
const {
  getAllConnections,
  updateConnection,
  getConnectionStats,
  getApprovalStats,
} = require('../controllers/connectionController');

const router = express.Router();

router.route('/').get(getAllConnections);

router.route('/:id').patch(updateConnection);

router.route('/connectionStats').get(getConnectionStats);

router.route('/approvalStats').get(getApprovalStats);

module.exports = router;
