<?php

try{
    $pdo = new PDO("mysql:host=localhost;dbname=ecommercesite", "root", "mysql");
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e){
    die("ERROR: could not connect. " . $e->getmessage());
}