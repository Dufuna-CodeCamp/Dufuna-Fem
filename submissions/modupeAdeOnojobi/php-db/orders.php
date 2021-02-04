<?php

require_once("connection.php");

try{
    $sql = "SELECT order_items.quantity, order_items.unit_prices, 
    order_items.total_amount, orders.date, orders.id, customer_address.street, 
    customer_address.city, customer_address.state, customer_address.country, products.product_name 
    FROM order_items 
    LEFT JOIN orders ON orders.id = order_items.order_id
    LEFT JOIN customer_address on orders.customer_id = customer_address.id
    LEFT JOIN products ON products.id = order_items.product_id 
    WHERE orders.customer_id = order_items.id";

    $stmt = $pdo->query($sql);
    $orders = $stmt->fetchAll();

    setcookie("orders", json_encode($orders), time() + 7200);

    if(isset($_COOKIE['orders'])) {
        $orders = json_decode(stripslashes($_COOKIE['orders']), true);
    }

    if(count($orders) > 0) {
        echo "<table cellspacing=4 cellpadding=4>";
            echo "<tr>";
                echo "<td>S/N</td>";
                echo "<td>Product Name</td>";
                echo "<td>Unit Price</td>";
                echo "<td>Quantity</td>";
                echo "<td>Total Prices</td>";
                echo "<td>Order Date</td>";
                echo "<td>Customer Location</td>";
            echo "</tr>";
        foreach ($orders as $row) {
            echo "<tr>";
                echo "<td>" .$row['id'] . "</td>";
                echo "<td>"  .$row['product_name'] ."</td>";
                echo "<td>" . $row['unit_prices'] . "</td>";
                echo "<td>" . $row['quantity'] . "</td>";
                echo "<td>" . $row['total_amount'] . "</td>";
                echo "<td>" . $row['date'] . "</td>";
                echo "<td>" . $row['street'] . ", ". $row['city'] . ", " . $row['state'] . ", " .$row['country'] ."</td>";
            echo "</tr>";
        };
    echo "</table>";
    unset($result);
    } else{
        echo "No records matching your query were found.";
    }
} catch(PDOException $e){
    die("ERROR: Could not execute $sql. " . $e->getMessage());
}