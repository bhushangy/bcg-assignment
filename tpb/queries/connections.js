const sql = require('../db');

exports.getAllConnections = async function () {
  return await sql`SELECT * FROM connections ORDER BY id ASC`;
};

exports.updateRecord = async function (id, columnId, newValue) {
  return await sql`UPDATE connections SET ${sql(
    columnId
  )} = ${newValue} WHERE id = ${id} RETURNING *`;
};

exports.connectionStats = async function () {
  return await sql`SELECT COUNT(id), SPLIT_PART(date_of_application, '-', 2)::integer as month from connections GROUP by month order by month asc`;
};

exports.approvalStats = async function () {
  return await sql`select COUNT(id), status from connections GROUP by status`;
};
