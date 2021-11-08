<?php

try {
  $_POST = json_decode(
              file_get_contents('php://input'), 
              true,
              2,
              JSON_THROW_ON_ERROR
          );
} catch (Exception $e) {
  header($_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request");
  // print_r($_POST);
  // echo file_get_contents('php://input');
  exit;
}

require ('class/DbConnection.php');

// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();
// This is an example of a parameterized query
$sql = 'SELECT games.stadium, games.gameDate, games.gameTime, assignments.assignmentStatus,
 assignments.refID, assignments.assignmentID FROM games
  INNER JOIN assignments ON games.gameID = assignments.gameID 
  WHERE assignments.refID = ? AND games.gameDate >? AND games.gameDate<? ;';

$vars = [ $_POST['refID'],
          $_POST['startDate'],
          $_POST['endDate'] ];

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$assignDetail = $stmt->fetchAll();

if (isset($_GET['format']) && $_GET['format']=='csv') {
    header('Content-Type: text/csv');   

    echo "Game Stadium, Date, Time, Assignment Status\r\n";

    foreach($assignDetail as $assign) {
        echo "\"".$assign['stadium'] ."\","
            .$assign['gameDate'] .','
            .$assign['gameTime'] .','
            .$assign['assignmentStatus'] ."\r\n";
    }

} else {
// Step 3: Convert to JSON
$json = json_encode($assignDetail, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
}