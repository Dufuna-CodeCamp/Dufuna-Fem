<?php

require_once("db_connection.php");

echo "<h5> Order Page </h5>";

setcookie("name", "json_encode($result)", time() + (86400 * 30), "/");

try{
    $sql= "SELECT * FROM order_details";
    $result= $pdo->query($sql);
    if ($result->rowCount() > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>customer_details_id</th>";
                echo "<th>serial_number</th>";
                echo "<th>product_name</th>";
                echo "<th>order_unit_price</th>";
                echo "<th>order_quantity</th>";
                echo "<th>order_total_price</th>";
                echo "<th>created_date</th>";
                echo "<th>customer_location</th>";
            echo "</tr>";
        while($row = $result->fetch()){
            echo "<tr>";
                echo "<td>" . $row['customer_details_id'] . "</td>";
                echo "<td>" . $row['serial_number'] . "</td>";
                echo "<td>" . $row['product_name'] . "</td>";
                echo "<td>" . $row['order_unit_price'] . "</td>";
                echo "<td>" . $row['order_quantity'] . "</td>";
                echo "<td>" . $row['order_total_price'] . "</td>";
                echo "<td>" . $row['created_date'] . "</td>";
                echo "<td>" . $row['customer_location'] . "</td>";
            echo "</tr>";
    }
        echo "</table>";
        unset($result);
    } else{
        echo "No records matching your query were found.";
    }
} catch(PDOException $e){
    die("ERROR:Could not be able to execute $sql. " . $e->getMessage());
}

unset($pdo);

$db_orders = '$result($sql)';

if(isset($_COOKIE['name']) ) {
    $name = json_decode(stripslashes($_COOKIE['name']), true );
} else {
    $name = $db_orders;
}

?>