<?php



try{
    $pdo = new PDO("mysql:host=localhost;dbname=ecommercesite", "root", "mysql");
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e){
    die("ERROR: could not connect. " . $e->getmessage());
}

try{
    $sql = "CREATE TABLE customer_details(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    s_n INT NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    created_at DATETIME,
    actions VARCHAR(200) NOT NULL
    )";
    
    $pdo->exec($sql);
    echo "Table created successfully.";

} catch(PDOException $e){
    die("Error: could not connect. " . $e->getmessage());
}

unset($pdo);