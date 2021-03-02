<?php

require_once("connection.php");

setcookie( "customers", json_encode($result), time() + 3600, "/" );

echo "<h3>List of registered customers</h3>";

try {
    $sql = "SELECT * FROM registered_customers";

    $result = $pdo->query($sql);
    $customers = $result->fetchAll();

    if ($result->rowCount() > 0) {
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address</th>";
                echo "<th>Created At</th>";
                echo "<th>Action</th>";
            echo "</tr>";

        while ($row = $result->fetch()) {
            echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["first_name"] . " " . $row["last_name"] . "</td>";
                echo "<td>" . $row["email_address"] . "</td>";
                echo "<td>" . $row["created_at"] . "</td>";
                echo "<td> <a href = '#'><button>View</button></a> </td>";
            echo "</tr>";

        }
        echo "</table>";

        unset($result);
    } else {
        echo "No records matching your query were found.";
    }
} catch (PDOException $e) {
    die ("ERROR: Could not activate $sql. " . $e->getMessage());
}

// close connection
unset($pdo);

// to ensure the database is not hit everytime the page is reloaded
if (isset($_COOKIE["customers"]) ) {
    $customer_data = json_decode(stripslashes($_COOKIE["customers"]), true);
} else {
    $customer_data = $customers;
}

?>