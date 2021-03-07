<?php

require_once("connection.php");

$allOrders = "";

function fetchOrders($database) {
    try {
        $sql = "SELECT customer_orders.id, products.product_name, 
        customer_order_items.unit_price, customer_order_items.quantity, 
        customer_order_items.total_amount, customer_orders.created_at, 
        customer_addresses.street_address, customer_addresses.city, 
        customer_addresses.state, customer_addresses.country
        FROM customer_order_items
        LEFT JOIN customer_orders on customer_orders.id = customer_order_items.customer_order_id
        LEFT JOIN products on products.id = customer_order_items.customer_product_id
        LEFT JOIN customer_addresses on customer_orders.registered_customer_id =  customer_addresses.id
        ";

        $result = $database->query($sql);

        $orders = $result->fetchAll();

        setcookie("orders", json_encode($orders), time() + 3600, "/");

        return $orders;
    } catch (PDOException $e) {
        die ("ERROR: Could not activate $sql. " . $e->getMessage());
    }
}

$orders_data = fetchOrders($pdo);

if(isset($_COOKIE["orders"])) {
    $allOrders = json_decode(stripslashes($_COOKIE["orders"]), true);
} else {
    $allOrders = $orders_data;
}

if (sizeof($allOrders) > 0) {
    echo "<h3>List of registered customers orders</h3>";

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

        foreach ($allOrders as $row) {
            echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["product_name"] . "</td>";
                echo "<td>" . $row["unit_price"] . "</td>";
                echo "<td>" . $row["quantity"] . "</td>";
                echo "<td>" . $row["total_amount"] . "</td>";
                echo "<td>" . $row["created_at"] . "</td>";
                echo "<td>" . $row["street_address"] . " " . $row["city"] . " " . $row["state"] . " " . $row["country"] . "</td>";
            echo "</tr>";

        }
        echo "</table>";

        unset($allOrders);
} else {
    echo "No records matching your query were found.";
}

// close connection
unset($pdo);

?>