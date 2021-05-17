<?php

    require_once("connection.php");

    $orders_data = "";

    function getOrders($pdo) {
        try{
            $sql = "SELECT orders.id, products.product_name, order_items.unit_price, order_items.quantity, 
            order_items.total_amount, orders.created_at, contact_addresses.street, contact_addresses.city, 
            contact_addresses.state, contact_addresses.country
            FROM order_items 
            LEFT JOIN orders ON orders.id = order_items.order_id
            LEFT JOIN contact_addresses on orders.registered_customer_id = contact_addresses.id
            LEFT JOIN products ON products.id = order_items.product_id";
            
                $stmt = $pdo->query($sql);
                $orders = $stmt->fetchAll();

                setcookie('orders',  json_encode($orders), time() + 3600 );
                 
                return $orders;
        } catch (PDOException $e) {
        die("ERROR: Could not execute $sql. " . $e->getMessage());
        }  
    }

    $orders_details = getOrders($pdo);    
    if(isset($_COOKIE['orders']) ) {
        $orders_data = json_decode(stripslashes($_COOKIE['orders']), true );
    } else{
        $orders_data = $orders_details;
   }
    
    if (count($orders_data) > 0) {
        echo "<h3>Customer orders List view</h3>";
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Product Name</th>";
                echo "<th>Order Unit Price</th>";
                echo "<th>Order Quantity</th>";
                echo "<th>Order Total Price</th>";
                echo "<th>Created Date</th>";
                echo "<th>Customer Location</th>";
            echo "</tr>";
        
            foreach ($orders_data as $row) {
                echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['product_name'] . "</td>";
                    echo "<td>" . $row['unit_price'] . "</td>";
                    echo "<td>" . $row['quantity'] . "</td>";
                    echo "<td>" . $row['total_amount'] . "</td>";
                    echo "<td>" . $row['created_at'] . "</td>";
                    echo "<td>" . $row['street'] . ", ". $row['city'] . ", " . $row['state'] . ", " .$row['country'] ."</td>";
                echo "</tr>";
            };
            echo "</table>";
        
            unset($orders);
    } else {
    echo 'No records matching your query were found';
    }

?>