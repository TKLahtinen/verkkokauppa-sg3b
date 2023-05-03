<?php

require 'dbconnection.php';
require 'headers.php';

$body = file_get_contents('php://input');
$data =  json_decode($body);
$dbcon = createDbConnection();

$checkquery = "SELECT * FROM tuoteryhma WHERE trnimi = ? OR trid = ?";

$statement = $dbcon->prepare($checkquery);
$statement->execute(array($data->trnimi, $data->trid));

if($statement->rowCount() > 0){
    echo json_encode(array("message" => "Category already exists"));
    exit;
    }
else{
    $sql = "INSERT INTO tuoteryhma (trid, trnimi) VALUES (?, ?)";
    $statement = $dbcon->prepare($sql);
    $statement->execute(array($data->trid, $data->trnimi));
    echo json_encode(array("message" => "Category added"));
    exit;
}

