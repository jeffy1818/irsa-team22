CREATE DATABASE IF NOT EXISTS finalproject;
USE finalproject;

DROP TABLE IF EXISTS referees;
CREATE TABLE referees (
	refID int PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(24),
    lastName varchar(24),
    age int,
    grade int,
    skill int
);

INSERT INTO referees (refID, firstName, lastName, age, grade, skill) VALUES 
(01, 'Jeffrey', 'Yu', 25, 9, 80),
(02, 'Andrew', 'Wilderman', 22, 5, 90),
(03, 'Kevin', 'Alvarado', 23, 5, 90),
(04, 'Eshwar', 'Jayaprakash', 23, 1, 100);

DROP TABLE IF EXISTS games;
CREATE TABLE games (
	gameID int PRIMARY KEY AUTO_INCREMENT,
    stadium VARCHAR(24),
    gameDate DATE,
    gameTime varchar(24)
);

INSERT INTO games (gameID, stadium, gameDate, gameTime) VALUES 
(0001, 'Kuntz Stadium', 2021-11-04, '20:00:00'),
(0002, 'Kuntz Stadium', 2021-11-09, '19:00:00'),
(0003, 'Carroll Stadium', 2021-11-10, '18:30:00'),
(0004, 'Carroll Stadium', 2021-11-12, '17:30:00'),
(0005, 'Kuntz Stadium', 2021-11-13, '10:30:00');

DROP TABLE IF EXISTS assignments;
CREATE TABLE assignments (
	assignmentID int PRIMARY KEY AUTO_INCREMENT,
    gameID int,
    stadium varchar(24),
    gameDate date,
    gameTime time, 
    headRef varchar(24) default '--',
    assistantRef_1 varchar(24) default '--',
    assistantRef_2 varchar(24) default '--',
    fourthOfficial varchar(24) default '--'
);

INSERT INTO assignments (assignmentID, gameID, stadium, gameDate, gameTime, headRef, assistantRef_1, assistantRef_2, fourthOfficial) VALUES 
(01, 01, 'Somewhere', 2021-11-04, '20:00:00', '--', '--', '--', '--');

