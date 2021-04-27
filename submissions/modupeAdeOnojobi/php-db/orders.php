<?php

    require("connection.php");

    $_id = $_GET['id'];

    function getAllData($_id, $pdo) {
        try{
            $sql = "SELECT order_items.quantity, order_items.unit_prices, 
            order_items.total_amount, orders.date, orders.id,customer_address.street, customer_address.city,customer_address.state, 
            customer_address.country,products.product_name 
            FROM order_items 
            LEFT JOIN orders ON orders.id = order_items.order_id
            LEFT JOIN customer_address on orders.customer_id = customer_address.id
            LEFT JOIN products ON products.id = order_items.product_id 
            WHERE orders.customer_id = ' $_id' ";
            
                $stmt = $pdo->query($sql);
                $orders = $stmt->fetchAll();

                setcookie('orders',  json_encode($orders), time() + 3600 );
                 
                cookieJar($orders);
                return $orders;
        } catch (PDOException $e) {
        die("ERROR: Could not execute $sql. " . $e->getMessage());
        }  
    }

    function cookieJar($orders){
        return setcookie('orders',  json_encode($orders), time() + 3600 );
    }

    $main = getAllData($_id, $pdo);    
    if( isset($_COOKIE['orders']) ) {
        $orders = json_decode(stripslashes($_COOKIE['orders']), true );
    } else{
        $orders = $main;
   }
    
    if ($orders && count($orders) > 0) {
        echo "<h3>Order detail list</h3>";
        echo "<table cellspacing=4 cellpadding=4>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Product Name</th>";
                echo "<th>Unit Price</th>";
                echo "<th>Quantity</th>";
                echo "<th>Total Price</th>";
                echo "<th>Order Date</th>";
                echo "<th>Customer Location</th>";
            echo "</tr>";
        foreach ($orders as $row) {
            echo "<tr>";
                echo "<td>" . $row['id'] . "</td>";
                echo "<td>" . $row['product_name'] . "</td>";
                echo "<td>" . $row['unit_prices'] . "</td>";
                echo "<td>" . $row['quantity'] . "</td>";
                echo "<td>" . $row['total_amount'] . "</td>";
                echo "<td>" . $row['date'] . "</td>";
                echo "<td>" . $row['street'] . ", ". $row['city'] . ", " . $row['state'] . ", " .$row['country'] ."</td>";
            echo "</tr>";
        };
        echo "</table>";
        unset($orders);
    } else {
    echo 'No records matching your query were found';
    }

?>