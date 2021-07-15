const inquirer = require('inquirer');
const db = require('./db/connection');

const PORT = process.env.PORT || 3001;
// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on ${PORT}`);
    });
});

const tracker = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do today?',
        choices: [
            'View All Employees',
            'View All Employee Departments',
            'View All Employee Roles',
            'Update an Employee Role',
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

            case 'Exit':
                endTracker();
                break;

            default:
                console.log(`Invalid action: ${answer.action}`);
                break;
        }
    })
}
