CREATE DATABASE IF NOT EXISTS finalproject;
USE finalproject;

DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS games;
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

CREATE TABLE games (
	gameID int PRIMARY KEY AUTO_INCREMENT,
    stadium VARCHAR(24),
    gameDate DATE,
    gameTime varchar(24)
);

INSERT INTO games (gameID, stadium, gameDate, gameTime) VALUES 
(01, 'Kuntz Stadium', 2021-11-04, '20:00:00'),
(02, 'Kuntz Stadium', 2021-11-09, '19:00:00'),
(03, 'Carroll Stadium', 2021-11-10, '18:30:00'),
(04, 'Carroll Stadium', 2021-11-12, '17:30:00'),
(05, 'Kuntz Stadium', 2021-11-13, '10:30:00');


CREATE TABLE assignments (
	assignmentID int PRIMARY KEY AUTO_INCREMENT,
    gameID int, 
    refID int,
    assignmentStatus varchar(24),
    assignmentPosition varchar(24),
    FOREIGN KEY (gameID) REFERENCES games(gameID),
    FOREIGN KEY (refID) REFERENCES referees(refID)
);

INSERT INTO assignments (assignmentID, gameID, refID, assignmentPosition, assignmentStatus) VALUES 
(0001, 01, 01, 'Head Referee', 'Accepted'); 

SELECT * FROM assignments
INNER JOIN referees ON assignments.refID = referees.refID;




