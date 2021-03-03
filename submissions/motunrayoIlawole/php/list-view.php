<?php

$customers_data;

if (isset($_COOKIE["customers"])) {
    $customers_data = json_decode(stripslashes($_COOKIE["customers"]), true);
} else {
    require("connection.php");

    try {
        $sql = "SELECT * FROM registered_customers";

        $result = $pdo->query($sql);
        
        if ($result->rowCount() > 0) {
            $customers_data = $result->fetchAll();

            setcookie( "customers", json_encode($customers_data), time() + 3600, "/" );

        }  else {
            echo "No records matching your query were found.";
        }
    } catch (PDOException $e) {
        die ("ERROR: Could not activate $sql. " . $e->getMessage());
    }

}

if (!empty($customers_data)) {

    echo "<h3>List of registered customers</h3>";
    
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address</th>";
                echo "<th>Created At</th>";
                echo "<th>Action</th>";
            echo "</tr>";

        while ($row = $customers_data) {
            echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["first_name"] . " " . $row["last_name"] . "</td>";
                echo "<td>" . $row["email_address"] . "</td>";
                echo "<td>" . $row["created_at"] . "</td>";
                echo "<td> <a href = '#'><button>View</button></a> </td>";
            echo "</tr>";

        }
        echo "</table>";

        unset($customers_data);
}

// close connection
unset($pdo);

?>