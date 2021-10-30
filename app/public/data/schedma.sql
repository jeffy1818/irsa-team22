CREATE DATABASE IF NOT EXISTS finalproject;
USE finalproject;

DROP TABLE IF EXISTS referees;
CREATE TABLE referees (
	refID int PRIMARY KEY,
    firstName varchar(24),
    lastName varchar(24),
    age int,
    grade int,
    skill int
);

INSERT INTO referees (id, firstName, lastName, age, grade, skill) VALUES 
(1111, 'Jeffrey', 'Yu', 25, 9, 80),
(2222, 'Andrew', 'Wilderman', 22, 5, 90),
(3333, 'Kevin', 'Alvarado', 23, 5, 90),
(4444, 'Eshwar', 'Jayaprakash', 23, 1, 100);
