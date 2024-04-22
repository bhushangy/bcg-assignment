const dotenv = require('dotenv');

// Listen for uncaught exceptions.
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION');
  console.log(err.name, err.message);
  process.exit(1);
});

// Whenever there is an unhandled promise rejection, process object emits the below event.
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED PROMISE REJECTION');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

dotenv.config({ path: './.env' }); // This will read the data from the .env file and saves it in the node process.env object

const app = require('./app');
require('./db');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Express running on port ${port}!!`);
});
