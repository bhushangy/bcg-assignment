const catchAsync = require('../utils/catchAsync');
const {
  getAllConnections,
  updateRecord,
  connectionStats,
  approvalStats,
} = require('../queries/connections');

exports.getAllConnections = catchAsync(async (req, res, next) => {
  const connections = await getAllConnections();

  res.status(200).json({
    status: 'success',
    data: {
      connections,
    },
  });
});

exports.updateConnection = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { colId, newValue } = req.body;

  const updatedConnection = await updateRecord(id, colId, newValue);

  res.status(200).json({
    status: 'success',
    data: {
      connection: updatedConnection,
    },
  });
});

exports.getConnectionStats = catchAsync(async (req, res, next) => {
  const stats = await connectionStats();

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});

exports.getApprovalStats = catchAsync(async (req, res, next) => {
  const stats = await approvalStats();

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});
