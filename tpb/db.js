const postgres = require('postgres');

// Construct the connection string from the environment variables.
const uri = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

let sql;

// Establish connection to the database.
function run() {
  try {
    sql = postgres(uri);
    console.log(
      'Pinged your deployment. You successfully connected to Postgres!'
    );
  } catch (error) {
    console.dir(error);
  }
}
run();

module.exports = sql;