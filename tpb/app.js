const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const connectionRouter = require('./routes/connectionRoutes');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

app.disable('x-powered-by');

// Morgan is the request logging middleware.
if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

// Enable CORS for all requests.
app.use(cors());

// Middleware to parse the request body.
app.use(
  express.json({
    limit: '10kb', // Limit the request body size to 10kb
  })
);

// Mount the connection router middleware.
app.use('/api/v1/connections', connectionRouter);

// Handle incorrect routes.
app.all('*', (req, res, next) => {
  next(new AppError(`Cannot find route ${req.originalUrl}`, 404));
});

// Error handling middleware
app.use(globalErrorHandler);

module.exports = app;
