// Dependencies
const inquirer = require("inquirer");
const db = require("./db");

// TEST RENDER APP

// const renderApp = async function () {
//   await inquirer.prompt([
//     {
//       type: "list",
//       name: "claEmployeeTracker",
//       message: "What would you like to do ?",
//       choices: [
//         "View all the employees.",
//         "Add a new employee.",
//         "Update employee role.",
//         new inquirer.Separator(),
//         "View all roles.",
//         "Add role.",
//         new inquirer.Separator(),
//         "View all departments.",
//         "Add department.",
//         new inquirer.Separator(),
//       ],
//     },
//   ]);
// };

// renderApp();

// Fuction to add employee
const addEmployee = function () {
  //DATA
  let roles = [];
  let managers = [];

  //Database query to get roles from role table
  db.query("SELECT * FROM role", (err, { rows }) => {
    rows.forEach((row) => {
      roles.push(row.title);
    });
  });

  //Database query to get managers from employee
  db.query("SELECT * FROM employee LIMIT 4", (err, { rows }) => {
    rows.forEach((row) => {
      managers.push(row.first_name + " " + row.last_name);
    });
  });

  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name ?",
        validate: (input) => {
          if (input === "" || input.length > 30) {
            return "Can not be empty or more then 30 characters";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name ?",
        validate: (input) => {
          if (input === "" || input.length > 30) {
            return "Can not be empty or more then 30 characters";
          }
          return true;
        },
      },
      {
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role ",
        choices: roles,
      },
      {
        type: "list",
        name: "employeeManager",
        message: "Who is the employee's manager ? ",
        choices: managers,
      },
    ])
    .then((answers) => {
      // Data
      // Get the index of the selected manager and role, and add 1 to match database IDs
      const managerId = managers.indexOf(answers.employeeManager) + 1;
      const roleId = roles.indexOf(answers.employeeRole) + 1;
      // Capitalize the first letter of the first and last names
      const firstNameUppercase =
        answers.firstName[0].toUpperCase() + answers.firstName.slice(1);
      const lastNameUppercase =
        answers.lastName[0].toUpperCase() + answers.lastName.slice(1);
      // Insert the new employee into the database
      db.query(
        `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUES('${firstNameUppercase}','${lastNameUppercase}',${roleId},${managerId})`,
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Employee added successfully!");
        }
      );
    });
};

// addEmployee();
