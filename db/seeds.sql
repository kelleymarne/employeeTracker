INSERT INTO department (department_name)
VALUES 
("Legal"),
("Administration"),
("Clinical");

INSERT INTO roles (title, salary, department_id, manager_id)
VALUES 
("Attorney", "250000", 1, "John Jones"),
("CFO", "200000", 2,  "Lisa Levy"),
("CNO", "150000", 2,  "Lisa Levy"),
("Medical Doctor", "250000", 3, "Jaymi Johnson"),
("Anesthesiologist", "300000", 3, "Jaymi Johnson"),
("Registered Nurse", "70000", 3, "Jaymi Johnson");
