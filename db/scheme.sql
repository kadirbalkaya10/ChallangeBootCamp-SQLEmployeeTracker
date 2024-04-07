g-- Checks for existing database if it exists, deletes the database
DROP DATABASE IF EXISTS employeetracker_db;
-- Create a new database
CREATE DATABASE employeetracker_db;
\c employeetracker_db;

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
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create a new table employee
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
