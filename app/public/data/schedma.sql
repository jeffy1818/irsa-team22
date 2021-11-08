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
    gameTime varchar(24),
    gameStatus varchar(24) DEFAULT "Unassigned"
);

INSERT INTO games (gameID, stadium, gameDate, gameTime, gameStatus) VALUES 
(01, 'Kuntz Stadium', '2020-05-09', '20:00', 'Unassigned'),
(02, 'Kuntz Stadium', '2021-11-09', '19:00', 'Unassigned'),
(03, 'Carroll Stadium', '2021-11-10', '18:30', 'Unassigned'),
(04, 'Carroll Stadium', '2021-11-12', '17:30', 'Unassigned'),
(05, 'Kuntz Stadium', '2021-11-13', '10:30', 'Unassigned');


CREATE TABLE assignments (
	assignmentID int PRIMARY KEY AUTO_INCREMENT,
    gameID int, 
    refID int,
    assignmentStatus varchar(24) DEFAULT "",
    assignmentPosition varchar(24) DEFAULT "",
    FOREIGN KEY (gameID) REFERENCES games(gameID),
    FOREIGN KEY (refID) REFERENCES referees(refID)
);

INSERT INTO assignments (assignmentID, gameID, refID, assignmentPosition, assignmentStatus) VALUES 
(0001, 01, 01, 'Head Referee', 'Accepted'); 

/* Shows a Referee with all game assignments within a given date range */
SELECT assignments.gameID, refID, gameDate, gameTime, stadium
FROM assignments RIGHT OUTER JOIN games ON assignments.gameID = games.gameID
WHERE gameDate BETWEEN "2021-01-01" AND "2021-12-31"
AND refID=1;

/* Shows all future games with at least one "unassigned" game */
SELECT games.gameID, gameDate, gameTime, stadium, assignmentStatus  
FROM assignments RIGHT OUTER JOIN games ON assignments.gameID = games.gameID
WHERE gameDate > CURDATE()