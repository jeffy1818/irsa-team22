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

INSERT INTO referees (refID, firstName, lastName, age, grade, skill) VALUES 
(1111, 'Jeffrey', 'Yu', 25, 9, 80),
(2222, 'Andrew', 'Wilderman', 22, 5, 90),
(3333, 'Kevin', 'Alvarado', 23, 5, 90),
(4444, 'Eshwar', 'Jayaprakash', 23, 1, 100);

DROP TABLE IF EXISTS games;
CREATE TABLE games (
	gameID int PRIMARY KEY,
    stadium VARCHAR(24),
    dy DATE,
    tme varchar(24)
);

INSERT INTO games (gameID, stadium, dy, tme) VALUES 
(0001, 'Kuntz Stadium', 2021-11-04, '20:00:00'),
(0002, 'Kuntz Stadium', 2021-11-09, '19:00:00'),
(0003, 'Carroll Stadium', 2021-11-10, '18:30:00'),
(0004, 'Carroll Stadium', 2021-11-12, '17:30:00'),
(0005, 'Kuntz Stadium', 2021-11-13, '10:30:00');

