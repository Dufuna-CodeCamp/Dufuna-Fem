<?php 

require_once("connection.php");
try{
    $sql = "SELECT * FROM customers";
    $result = $pdo->query($sql);
   setcookie('customers',  json_encode($result), time() + 3600);

    if($result->rowCount() > 0){
        echo "<h3>Customer detail list</h3>";
        echo "<table>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address</th>";
                echo "<th>Created At</th>";
                echo "<th>Action </th>";
            echo "</tr>";
    while($row = $result->fetch()){
        echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";
            echo "<td>" . $row['created_at'] . "</td>";
            echo "<td><button>View</button></td>";
        echo "</tr>";
    }
    echo "</table>";

    unset($result);
    } else{
        echo "No records matching your query were found.";
    }
} catch(PDOException $e){
    die("ERROR: Could not execute $sql. " . $e->getMessage());

}

?>