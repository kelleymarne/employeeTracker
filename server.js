const inquirer = require('inquirer');
// const { addDepartment } = require('./db');
const db = require('./db');
const connection = require('./db/connection');

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
            'View All Departments',
            'View All Employee Roles',
            'Update an Employee Role',
            'Add a Department',
            'Add New Employee',
            'Remove Employee',
            'Exit'
        ],
    })
        .then((answer) => {
            switch (answer.action) {
                case 'View All Employees':
                    displayEmployees();
                    break;

                case 'View All Departments':
                    displayDept();
                    break;

                case 'View All Employee Roles':
                    displayRoles();
                    break;

                case 'Update an Employee Role':
                    updateRole();
                    break;

                case 'Add a Department':
                    addDepartment();
                    break;


                case 'Add New Employee':
                    addEmployee();
                    break;

                case 'Remove Employee':
                    removeEmployee();
                    break;

                case 'Exit':
                    endTracker();
                    return;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};




function displayEmployees() {
    db.findAll()
        .then(([rows]) => {
            let data = rows;
            console.log('\n ');
            console.table(data);
            console.log('\n ');
            startTracker();
        });

};

function displayDept() {
    db.findDept()
        .then(([rows]) => {
            let data = rows;
            console.log('\n ');
            console.table(data);
            console.log('\n ');

            startTracker();

        });
};


function displayRoles() {
    db.findRole()
        .then(([rows]) => {
            let data = rows;
            console.log('\n ');
            console.table(data);
            console.log('\n ');

            startTracker();

        });
}


async function updateRole() {
    //
    // await displayEmployees(); 
    let data = await inquirer.prompt({
        name: 'chooseEmployee',
        type: 'input',
        message: 'What employee ID do you want to update',
    })
    // await displayRoles(); 
    let role = await inquirer.prompt({
        name: 'updateRole',
        type: 'input',
        message: 'What Role ID Would You Like to Set',
    })
    db.updateRole(role.updateRole, data.chooseEmployee);
    startTracker();
}

function addDepartment() {
    let newDept = inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'What is the name of the new department?'
    }])
    .then(answer => {
         db.addDept(answer)
         startTracker();

    })
}

function addEmployee() {
    let name = inquirer.prompt([{
        name: 'first_name',
        type: 'input',
        message: 'Please enter employees first name',
    },
    {
        name: 'last_name',
        type: 'input',
        message: 'Please enter employee last name'
    },
    {
        name: 'role',
        type: 'input',
        message: 'Please enter in a role ID'
    },
    {
        name: 'manager',
        type: 'input',
        message: 'What is the manager ID'
    }
   
])
        .then(answer => {
            const newEmployee = [answer.first_name, answer.last_name, answer.role, answer.manager];
            console.log(newEmployee);
            db.addEmployee(newEmployee);
            startTracker();
                })
            
        
}

function removeEmployee() {
    inquirer.prompt({
        name: 'id',
        type: 'input',
        message: 'What employee ID do you want to remove from database?',
    })
    .then(answer => {
        console.log(answer);
        db.delete(answer);
        console.log('Employee Removed!');
        startTracker();
    })
}


function endTracker() {
    connection.end();
    console.log('Thanks for using Employee Tracker!');
}

startTracker();

