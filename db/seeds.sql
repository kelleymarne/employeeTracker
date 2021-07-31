INSERT INTO department (name)
VALUES 
("Legal"),
("Administration"),
("Clinical");

INSERT INTO role (title, salary, department_id)
VALUES
("Attorney", "250000", 1), -- 1
("Cheif Financial Officer", "200000", 2), -- 2
("Cheif Medical Director", "200000", 2), -- 3
("Cheif Nursing Officer", "150000", 2), -- 4
("Medical Doctor", "250000", 3), -- 5
("Anesthesiologist", "300000", 3), -- 6
("Registered Nurse", "70000", 3); -- 7

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("John", "Smith", 1, null), -- 1 Attorney manager for Legal(1) 
("Jill", "Jones", 2, null), -- 2 CFO manager for Admin(2)
("Alice", "Avery", 4, 4), -- 3 CNO manager for all Nursing staff/Clinical(3) -- but her manager is the CMD
("Leon", "Chambers", 3, null), -- 4 CMD manager for all MD's/Clinical(3)
("Charles", "Logan", 1, 1),
("Chloe", "Carter", 1, 1),
("Lizzy", "Stevens", 6, 3),
("April", "Keppner", 6, 3),
("Meredith", "Grey", 4, 4),
("Christina", "Yang", 4, 4),
("Derek", "Shep", 5, 4)
;