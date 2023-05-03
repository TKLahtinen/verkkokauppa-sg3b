<?php

require "./dbconnection.php";

function registerUser($username, $password) {
    $dbcon = createDbConnection();

    $sql = "INSERT INTO users (username, pw) VALUES (?,?)";

    $statement = $dbcon->prepare($sql);
    $statement->execute(array($username, $password));
}

function loginUser($username, $password) {
    $dbcon = createDbConnection();
    $sql = "SELECT id, username, rights FROM users WHERE username = ? AND pw = ?";
    $statement = $dbcon->prepare($sql);
    $statement->execute(array($username, $password));
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    return json_encode($data);
}
