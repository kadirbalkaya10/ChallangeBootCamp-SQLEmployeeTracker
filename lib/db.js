//DEPENDENCIES
const { Pool } = require("pg");

// Connect to database
const pool = new Pool(
  {
    user: "postgres",
    password: "password123",
    host: "localhost",
    database: "employeetracker_db",
  },
  console.log(`Connected to the employeetracker_db database.`)
);

pool.connect();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
