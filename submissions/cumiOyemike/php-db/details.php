<?php

require_once("connection.php");

function getCustomers($pdo) {
    try {
        $sql = "SELECT * FROM registered_customers";
        $stmt = $pdo->query($sql);
        $customers = $stmt->fetchAll();

        setcookie("customers", json_encode($customers), time() + 3600, "/");

        return $customers;
    } catch (PDOException $e) {
        die ("ERROR: Could not execute $sql. " . $e->getMessage());
    }
}

$customers_details = getCustomers($pdo);

if (isset($_COOKIE["customers"])) {
    $customers = json_decode(stripslashes($_COOKIE["customers"]), true);
} else {
    $customers = $customers_details;
}

if (count($customers) > 0) {
    
    echo "<h3>List of registered customers</h3>";

    echo "<table>";
        echo "<tr>";
            echo "<th>S/N</th>";
            echo "<th>Full Name</th>";
            echo "<th>Email Address</th>";
            echo "<th>Created At</th>";
            echo "<th>Actions</th>";
        echo "</tr>";

        foreach ($customers as $row) {

            echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["first_name"] . " " . $row["last_name"] . "</td>";
                echo "<td>" . $row["email"] . "</td>";
                echo "<td>" . $row["created_at"] . "</td>";
                echo "<td> <a href = 'order-list.php'><button>View</button></a> </td>";
            echo "</tr>";

        }
        echo "</table>";

        unset($customers);
} else {
    echo "No records matching your query were found.";
}

// Close connection
unset($pdo);

?>