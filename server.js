const inquirer = require('inquirer');
const db = require('./db');

// const PORT = process.env.PORT || 3001;
// // Start server after DB connection
// db.connect(err => {
//     if (err) throw err;
//     console.log('Database connected.');
//     app.listen(PORT, () => {
//         console.log(`Server running on ${PORT}`);
//     });
// });

const startTracker = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do today?',
        choices: [
            'View All Employees',
            'View All Employee Departments',
            'View All Employee Roles',
            'Update an Employee Role',
            'Add New Employee',
            'Exit'
        ],
    })
        .then((answer) => {
            switch (answer.action) {
                case 'View All Employees':
                    viewEmployees();
                    break;

                case 'View All Employee Departments':
                    viewDepartments();
                    break;

                case 'View All Employee Roles':
                    viewRoles();
                    break;

                case 'Update an Employee Role':
                    updateRole();
                    break;

                case 'Add New Employee':
                    addEmployee();
                    break;

                case 'Exit':
                    endTracker();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};


// // Question functions
// function viewEmployees() {
// db.
// }


// function viewDepartments() {

// }


// function viewRoles() {

// }


// function updateRole() {

// }


// function addEmployee() {
//     inquirer
//         .prompt([{
//             name: 'first_name',
//             type: 'input',
//             message: 'Please enter employees first name',
//         },
//         {
//             name: 'last_name',
//             type: 'input',
//             message: 'Please enter employee last name'
//         },
//         {
//             name: 'role',
//             type: 'input',
//             message: 'Please choose a jobe title',
//             choices: [
//                 'Attorney',
//                 'CFO',
//                 'CNO',
//                 'MD',
//                 'Anesthesia',
//                 'RN'
//             ]
//         },
//         {
//             name: 'department',
//             type: 'input',
//             message: 'Please enter the department employee will be in',
//             choices: [
//                 'Legal',
//                 'Administration',
//                 'Clinical'
//             ]
//         },
//         {
//             name: 'salary',
//             type: 'input',
//             message: "Please entery the salary for this employee",
//             validate(value) {
//               const pass = value.match(
//                 /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//               );
//               if (pass) {
//                 return true;
//               }
        
//               return 'Please enter a valid number';
//             }
//           }
//         ])
// }


// function endTracker() {
//     connection.end();
// }

startTracker();

