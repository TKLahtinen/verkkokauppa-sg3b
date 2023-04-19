<?php

require "headers.php";
require "usercontroller.php";

$body = file_get_contents("php://input");
$kayttajat = json_decode($body);

if(!isset($kayttajat->id) || !isset($kayttajat->firstname) || !isset($kayttajat->lastname) || !isset($kayttajat->email) || !isset($kayttajat->pw)) {
    http_response_code(400);
    echo "Käyttäjää ei ole määritelty. Syötä oikeat tiedot";
    exit;
}

try {
    registerUser($kayttajat->id, $kayttajat->firstname, $kayttajat->lastname, $kayttajat->email, $kayttajat->pw);
} catch (Exception $e) {
    http_response_code(500);
    echo $e->getMessage();
    exit;
}

http_response_code(200);
echo "Käyttäjä nimellä ".$kayttajat->firstname." ".$kayttajat->lastname." luotu onnistuneesti.";

