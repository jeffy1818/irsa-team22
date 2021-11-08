<?php
// require 'common.php';
require 'class/DbConnection.php';

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$sql = 'SELECT gameID, gameDate, gameTime, stadium, gameStatus  
        FROM games 
        WHERE gameDate > CURDATE()
        AND gameStatus = "Unassigned"';
$vars = [];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$assignmentsGame = $stmt->fetchAll();

if (isset($_GET['format']) && $_GET['format']=='csv') {
    header('Content-Type: text/csv');   

    echo "Game ID, Date, Time, Stadium, Assignment Status\r\n";

    foreach($assignmentsGame as $b) {
        echo "\"".$b['gameID'] ."\","
            .$b['gameDate'] .','
            .$b['gameTime'] .','
            .$b['stadium'] .','
            .$b['gameStatus'] ."\r\n";
    }

} else {
// Step 3: Convert to JSON
$json = json_encode($assignmentsGame, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
}