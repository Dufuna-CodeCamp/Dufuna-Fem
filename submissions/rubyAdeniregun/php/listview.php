<?php

require_once("db_connection.php");

echo "<h5> List View Page </h5>";

setcookie("name", "Customer Details", time()+3600, "/", "", false);

try{
    $sql= "SELECT * FROM customer_details";
    $result= $pdo->query($sql);
    if ($result->rowCount() > 0){
        echo "<table>";
            echo "<tr>";
                echo "<th>serial_number</th>";
                echo "<th>full_name</th>";
                echo "<th>email_address</th>";
                echo "<th>created_at</th>";
                echo "<th>actions</th>";
            echo "</tr>";
        while($row = $result->fetch()){
            echo "<tr>";
                echo "<td>" . $row['serial_number'] . "</td>";
                echo "<td>" . $row['full_name'] . "</td>";
                echo "<td>" . $row['email_address'] . "</td>";
                echo "<td>" . $row['created_at'] . "</td>";
                echo "<td>" . $row['actions'] . "</td>";
                echo "<td><button type=button>View</button>" . $row['actions'] . "</td>";
            echo "</tr>";
    }
        echo "</table>";
        unset($result);
    } else{
        echo "No records matching your query were found.";
    }
} catch(PDOException $e){
    die("ERROR:Could not be able to execute $sql. " . $e->getMessage());
}

unset($pdo);

?>
<html>
    <head>
        <title>List View Page</title>
    </head>
    <body>
        <?php echo "<h4>Cookies is Set"."</h4><br/>"; ?>
        <h3>Please find list of <?php echo $_COOKIE["name"]. "<br/>"; ?></p>
        <a href="customer_cookie2.php"><h5>Access cookies</h5></a>
    </body>
</html>