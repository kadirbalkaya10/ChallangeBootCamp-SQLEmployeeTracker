-- Checks for existing database if its exist ,deletes the database
DROP DATABASE IF EXISTS employeTracker_db
-- Create a new database
CREATE DATABASE employeeTracker_db;
\c employeeTracker_db

-- Create a new table department
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name varchar(30) UNIQUE NOT NULL
);

-- Create a new table role
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title varchar(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department INT,
    FOREIGN KEY (department) REFERENCES department(id)
);

-- Create a new table employee
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name varchar(30),
    last_name varchar(30),
    role_id INT NOT NULL,
    maneger_id INT NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (maneger_id) REFERENCES employee(id),
)