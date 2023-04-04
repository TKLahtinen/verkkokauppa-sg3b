<?php

require 'headers.php';
require 'dbconnection.php';

$dbcon = createDbConnection();

$productid = $_GET['tuoteid'];

$sql = "SELECT * FROM tuote WHERE tuoteid = $productid";

$statement = $dbcon->prepare($sql);
$statement->execute();

$row = $statement->fetchAll(PDO::FETCH_ASSOC);

header('HTTP/1.1 200 OK');
$json = json_encode($row);

echo $json;