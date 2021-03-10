<?php
    require_once('db_connection.php');
    $id = $_GET['created_by_registered_customers_id'];
    class Data extends  Connect {
        public function List($id) {
            try {
                $sql = "SELECT order_items.quantity, order_items.unit_prices, 
            order_items.total_amount, order_items.created_at, customer_orders.id,
            customers_addresses.street_address, customers_addresses.city, customers_addresses.state, 
            customers_addresses.country,products.product_name 
            FROM order_items 
            LEFT JOIN customer_orders ON customer_orders.created_by_registered_customers_id = order_items.customer_orders_id
            LEFT JOIN customers_addresses on customer_orders.created_by_registered_customers_id = customers_addresses.registered_customers_id
            LEFT JOIN products ON products.id = order_items.products_id 
            WHERE customer_orders.created_by_registered_customers_id = order_items.customer_orders_id";
  
                    $stmt = $this->connect()->query($sql);
                    $customer_orders = $stmt->fetchAll();
                // setting up the cookie to save the result gotten from the databse
                    setcookie("customer_orders", json_encode($customer_orders), time() +3600);
                    return $customer_orders;
                } catch (PDOException $e) {
                    die ('could not execute' . $sql . $e->getMessage());
                }
        }
    }
    if (isset($_COOKIE["customer_orders"])) {
        $customer_orders = json_decode($_COOKIE["customer_orders"], true);
    } else {
        $data = new Data();
        $customer_orders = $data->List($id);
    }
    try {
        if(count($customer_orders) > 0) {
        echo "<table>";
            echo "<tr>";
                echo "<th> S/N </th>";
                echo "<th> Product Name </th>";
                echo "<th> Order Unit Price </th>"; 
                echo "<th> Order Quantity </th>";
                echo "<th> Order Total Price </th>";
                echo "<th> Created Date </th>";
                echo "<th> Customer Location </th>";
            echo "</tr>";
            foreach ($customer_orders as $row) {
                echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['product_name'] . "</td>";
                    echo "<td>" . $row['unit_prices'] . "</td>";
                    echo "<td>" . $row['quantity'] . "</td>";
                    echo "<td>" . $row['total_amount'] . "</td>";
                    echo "<td>" . $row['created_at'] . "</td>";
                    echo "<td>" . $row['street_address'] .", " . $row['city'] . ", " . $row['state'] .", " . $row['country'] . "</td>";
                echo "</tr>";
            }
        echo "</table>";
        unset($customer_orders);
    }   else {
        echo "could not execute query";
    }
} catch (PDOException $e) {
    die ('could not execute ' . $sql . $e->getMessage());
}
?>