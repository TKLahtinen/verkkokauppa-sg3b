<?php

require 'headers.php';
require 'functions.php';

$body = file_get_contents("php://input");
$user = json_decode($body);

if(!isset($user->username) || !isset($user->password)){
    http_response_code(400);
    echo "Käyttäjän tiedot ovat väärät";
    exit;
}

try{
    registerUser($user->username, $user->password);
}catch(Exception $e){
    http_response_code(500);
    echo $e->getMessage();
    exit;
}

http_response_code(200);
echo "Käyttäjä ". $user->username . " lisätty";


