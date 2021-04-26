<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=top_clothing", "root", "pollock7/");

    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("ERROR: Could not connect. " + $e->getMessage());
}