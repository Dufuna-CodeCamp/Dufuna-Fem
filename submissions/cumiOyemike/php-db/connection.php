<?php

try{
    $pdo = new PDO("mysql:host=localhost;dbname=infinity_sparkles", "root", "mysql");

    // Set the PDO mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected Successfully . Host info: "  .
$pdo->getAttribute(constant("PDO::ATTR_CONNECTION_STATUS"));
} catch(PDOException $e) {
    die("ERROR: Could not connect. " . $e->getMessage());
}