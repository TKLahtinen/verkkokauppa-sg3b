<?php

require './dbconnection.php';
require './headers.php';

$body = file_get_contents('php://input');
$data =  json_decode($body);
$dbcon = createDbConnection();

$checkquery = "SELECT * FROM tuote WHERE nimi = ?";

$statement = $dbcon->prepare($checkquery);
$statement->execute(array($data->nimi));

if($statement->rowCount() > 0){
    echo json_encode(array("message" => "Samanniminen tuote on olemassa"));
    exit;
    }
else{
    $sql = "INSERT INTO tuote (nimi, kuvaus, img, valmistaja, toimittaja, hinta, trid) VALUES (?,?,?,?,?,?,?)";
    $statement = $dbcon->prepare($sql);
    $statement->execute(array($data->nimi, $data->kuvaus, $data->img, $data->valmistaja, $data->toimittaja, $data->hinta, $data->trid));
    echo json_encode(array("message" => "Tuote lisätty onnistuneesti"));
    exit;
}