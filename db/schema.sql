DROP DATABASE IF EXISTS hospital_employees;
CREATE DATABASE hospital_employees;
USE hospital_employees;

CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL (10, 2),
    department_id INTEGER,
    manager VARCHAR (30) NOT NULL
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    department_id INTEGER,
    salary_id INTEGER,
    manager_id INTEGER
)

