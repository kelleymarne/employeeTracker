INSERT INTO department (department_name)
VALUES 
("Legal"),
("Administration"),
("Clinical");

INSERT INTO role (title, salary, department_id)
VALUES 
("Attorney", "250000", 1),
("CFO", "200000", 2),
("CNO", "150000", 2),
("Medical Doctor", "250000", 3),
("Anesthesiologist", "300000", 3),
("Registered Nurse", "70000", 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Kelley", "Worthington", 6, 3),
("John", "Smith", 1, 3),
("Jill", "Jones", 2, null),
("Allen", "Avery", 4, 3)
;
