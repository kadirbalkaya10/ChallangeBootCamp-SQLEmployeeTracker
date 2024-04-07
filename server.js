//DEPENDENCIES
const express = require("express");

// Import and require Pool (node-postgres)
// We'll be creating a Connection Pool
const { Pool } = require("pg");
const fs = require("fs");

// PORT \ APP

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  {
    user: "postgres",
    password: "password123",
    host: "localhost",
    database: "employeeTracker_db",
  },
  console.log(`Connected to the employeeTracker_db database.`)
);

pool.connect();

//ROUTES
//Api Routes

//START APP
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
