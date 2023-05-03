<?php
require './dbconnection.php';
require './headers.php';

$dbcon = createDbConnection();

$searchWord = $_GET['searchQuery'];
$sql = "SELECT * FROM tuote WHERE nimi LIKE '%$searchWord%'";

$statement = $dbcon->prepare($sql);
$statement->execute();

$rows = $statement->fetchAll(PDO::FETCH_ASSOC);

header('HTTP/1.1 200 OK');
$json = json_encode($rows);

echo $json;

