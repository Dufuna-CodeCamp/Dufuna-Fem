<?php

require_once("db_connection.php");

try{
    $sql = "INSERT INTO customer_details(serial_number, full_name, email_address, created_at, actions) VALUES
            (1, 'John Mark', 'johnmark@mail.com', now(), 'Bought two movie tickets'),
            (2, 'James Smith', 'jamessmith@mail.com', now(), 'Purchased a pair of boots'),
            (3, 'Jonathan Barnes', 'jbarnes@mail.com', now(), 'Bought a pair of pants'),
            (4, 'Jack Bauer', 'jackb@mail.com', now(), 'Bought a Macbook')";

    $pdo->exec($sql);

    echo "Records inserted successfully.";
} catch(PDOException $e){
    die("ERROR:Could not be able to execute $sql. " . $e->getMessage());
}

unset($pdo);