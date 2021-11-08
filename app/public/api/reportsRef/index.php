<?php
// require 'common.php';
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query

$sql = 'SELECT assignments.gameID, refID, gameDate, gameTime, stadium
        FROM assignments RIGHT OUTER JOIN games ON assignments.gameID = games.gameID
        WHERE gameDate BETWEEN "2021-01-01" AND "2021-12-31"
        AND refID=1';
$vars = [];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$assignmentRef = $stmt->fetchAll();

if (isset($_GET['format']) && $_GET['format']=='csv') {
    header('Content-Type: text/csv');

    echo "Game ID, Referee ID, Game Date, Game Time, Stadium\r\n";

    foreach($assignmentRef as $a) {
        echo "\"".$a['gameID'] ."\","
            .$a['refID'] .','
            .$a['gameDate'] .','
            .$a['gameTime'] .','
            .$a['stadium'] ."\r\n";
    }

} else {
// Step 3: Convert to JSON
$json = json_encode($assignmentRef, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
}