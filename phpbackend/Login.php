<?php

require './headers.php';
require './functions.php';

$body = file_get_contents("php://input");
$user = json_decode($body);

if(!isset($user->username) || !isset($user->password)){
    http_response_code(400);
    echo "Käyttäjätunnus tai salasana puuttuu";
    exit;
}

try{
    $data = loginUser($user->username, $user->password);
    echo $data;
}catch(Exception $e){
    http_response_code(500);
    echo $e->getMessage();
    exit;
}
