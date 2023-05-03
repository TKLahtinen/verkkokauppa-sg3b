<?php

require './dbconnection.php';
require './headers.php';

$body = file_get_contents('php://input');
$data =  json_decode($body);
$dbcon = createDbConnection();

$checkquery = "SELECT * FROM tuote WHERE tuoteid = ?";

$statement = $dbcon->prepare($checkquery);
$statement->execute(array($data->tuoteid));

if($statement->rowCount() < 1){
    echo json_encode(array("message" => "Tuotetta ei ole olemassa"));
    exit;
    }
else{
    $sql = "DELETE FROM tuote WHERE tuoteid = ?";
    $statement = $dbcon->prepare($sql);
    $statement->execute(array($data->tuoteid));
    echo json_encode(array("message" => "Tuote poistettu"));
    exit;
}