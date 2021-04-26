<?php

require_once("connection.php");

$allCustomers = "";

function fetchCustomers($database) {
    try {
        $sql = "SELECT * FROM registered_customers";

        $result = $database->query($sql);

        $customers = $result->fetchAll();

        setcookie("customers", json_encode($customers), time() + 3600, "/");

        return $customers;
    } catch (PDOException $e) {
        die ("ERROR: Could not activate $sql. " . $e->getMessage());
    }
}

$customers_data = fetchCustomers($pdo);

if (isset($_COOKIE["customers"])) {
    $allCustomers = json_decode(stripslashes($_COOKIE["customers"]), true);
} else {
    $allCustomers = $customers_data;
}

if (sizeof($allCustomers) > 0) {
    
    echo "<h3>List of registered customers</h3>";

    echo "<table>";
        echo "<tr>";
            echo "<th>S/N</th>";
            echo "<th>Full Name</th>";
            echo "<th>Email Address</th>";
            echo "<th>Created At</th>";
            echo "<th>Action</th>";
        echo "</tr>";

        foreach ($allCustomers as $row) {

            echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["first_name"] . " " . $row["last_name"] . "</td>";
                echo "<td>" . $row["email_address"] . "</td>";
                echo "<td>" . $row["created_at"] . "</td>";
                echo "<td> <a href = 'orders_list.php'><button>View</button></a> </td>";
            echo "</tr>";

        }
        echo "</table>";

        unset($allCustomers);
} else {
    echo "No records matching your query were found.";
}

// close connection
unset($pdo);

?>