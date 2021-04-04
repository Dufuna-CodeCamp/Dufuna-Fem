<?php 

require("connection.php");

function getAllCustomers($pdo) {
    try{
        $sql = "SELECT * FROM customer";
            $stmt = $pdo->query($sql);
            $result = $stmt->fetchAll();

            cookieJar($result);
            return $result;
    } catch (PDOException $e) {
    die("ERROR: Could not execute $sql. " . $e->getMessage());
    }  
}

function cookieJar($result){
    return setcookie("customers",  json_encode($result), time() + 3600 );
}

$main = getAllCustomers($pdo);

if(isset($_COOKIE['customers']) ) {
    $customers = json_decode(stripslashes($_COOKIE['customers']), true );
} else {
    $customers = $main;
}



    if(count($customers) > 0){
        echo "<h3>Customer detail list</h3>";
        echo "<table cellspacing=3 cellpadding=4>";
            echo "<tr>";
                echo "<th>S/N</th>";
                echo "<th>Full Name</th>";
                echo "<th>Email Address</th>";
                echo "<th>Created At</th>";
                echo "<th>Action </th>";
            echo "</tr>";
    foreach($customers as $row){
        echo "<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
            echo "<td>" . $row['email'] . "</td>";
            echo "<td>" . $row['created_at'] . "</td>";
            echo "<td> <a href='orders.php?id=" . $row['id'] . "'><button>View</button></a></td>";
           
        echo "</tr>";
    }
    echo "</table>";

    unset($customers);
    } else{
        echo "No records matching your query were found.";
    }
?>