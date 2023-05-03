<?php  

require 'headers.php';
require 'dbconnection.php';

$body = file_get_contents("php://input");
$data = json_decode($body);

$userData = $data->userData;
$cartItems = $data->cart;

$dbcon = createDbConnection();

$sql = "INSERT INTO tilaus (userId) VALUES (?)";

$statement = $dbcon->prepare($sql);
$statement->execute(array($userData->id));

$orderid = $dbcon->lastInsertId();

$sql2 = "INSERT INTO tilausrivi(tilausid, tuoteid, kpl) VALUES (?,?,?)";

$statement2 = $dbcon->prepare($sql2);

foreach($cartItems as $item) {
    $statement2->execute(array($orderid, $item->tuoteid, $item->amount));
}

