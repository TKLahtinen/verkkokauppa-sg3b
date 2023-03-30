<?php
require "headers.php";
require "dbconnection.php";
header('Content-type: application/json');

$dbcon = createDbConnection();

$category = $_GET["tr"];
$sql = "SELECT * FROM tuote WHERE tr=$category";

$statement = $dbcon->prepare($sql);
$statement->execute();

$rows = $statement->fetchAll(PDO::FETCH_ASSOC);

header('HTTP/1.1 200 OK');
$json = json_encode($rows);

echo $json;