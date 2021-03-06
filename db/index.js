// DB queries to reference in functions on server.js

const connection = require('./connection');


class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAll() {
        return this.connection
            .promise()
            .query(
                `SELECT employees.id, employees.first_name, employees.last_name, role.title, role.salary, department.name AS Department, 
                role.salary, CONCAT(manager.first_name, " ", manager.last_name) AS Manager
                FROM employees 
                LEFT JOIN role on employees.role_id = role.id 
                LEFT JOIN department ON role.department_id = department.id
                LEFT JOIN employees manager ON manager.id = employees.manager_id;`
                )};

    findDept() {
        return this.connection
        .promise()
        .query(
            `SELECT * FROM department;`
        )
    };

    findRole() {
        return this.connection
        .promise()
        .query(
            `SELECT role.id as Id, title as Role, salary as Salary, department.name as Department 
            FROM role 
            LEFT JOIN department ON role.department_id = department.id;`
        )
    }

    addDept(newDept) {
        console.log(newDept);
        return this.connection
        .promise()
        .query(
            `INSERT INTO department SET ?`, newDept
        )
    }

    updateRole(roleId, empId) {
        return this.connection
        .promise()
        .query(
            `UPDATE employees SET role_id = ?
            WHERE id = ?
            `, [roleId, empId]
        )
    }

    addEmployee(newEmployee) {
        return this.connection
        .promise()
        .query(
            `INSERT INTO employees (first_name, last_name, role_id, manager_id)
             VALUES (?, ?, ?, ?)`
             , newEmployee
            
        )
    }

    delete(deletedEmployee) {
        console.log(deletedEmployee);
        return this.connection
        .promise()
        .query(`DELETE FROM employees WHERE id = ?`, deletedEmployee)
    }

}

module.exports = new DB(connection);