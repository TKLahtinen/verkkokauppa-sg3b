<?php

require "dbconnection.php";

function registerUser($firstname, $lastname, $email, $pw) {
    $db = createDbConnection();

    $sql = "INSERT INTO kayttajat VALUES (?,?,?,?,?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($firstname, $lastname, $email, $pw));
}