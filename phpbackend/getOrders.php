<?php

require 'headers.php';
require 'dbconnection.php';

$userid = $_GET['userid'];

$dbcon = createDbConnection();

$sql = "SELECT tilaus.id, tilausrivi.kpl, tuote.nimi, tuote.img FROM tilaus, tilausrivi, tuote WHERE userid = ? AND tilaus.id = tilausrivi.tilausid AND tuote.tuoteid = tilausrivi.tuoteid";

$statement = $dbcon->prepare($sql);
$statement->execute(array($userid));
$data = $statement->fetchAll(PDO::FETCH_ASSOC);

$json = json_encode($data);

echo $json;



