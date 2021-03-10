<?php
include('cookie.php');
$customer = new Customer();
if(isset($_COOKIE['name'])){
    $showlist = json_decode($_COOKIE['name'], true);
 }else{
    $showlist =$customer->allData();
}
try{
    if(count($showlist) > 0){
        echo "<table>";
        echo "<table cellspacing=3 cellpadding=4>";
            echo "<tr>";
                echo "<th>serialnumber</th>";
                echo "<th>fullname</th>";
                echo "<th>emailaddress</th>";
                echo "<th>createdat</th>";
                echo "<th>actions</th>";
            echo "</tr>";
        foreach($showlist as $row){
            echo"<tr>";
            echo "<td>" . $row['id'] . "</td>";
            echo "<td>" . $row['first_name'] . " " . $row['last_name'] . "</td>";
            echo "<td>" . $row['email_address'] . "</td>";
            echo "<td>" . $row['created_at'] . "</td>";
            echo "<td>" . '<button><a href ="orderpage2.php?created_by_registered_customers_id='. $row['created_by_registered_customers_id'] . '"> View </a></button>' ."</td>";
            echo "</tr>";
    }
    echo"<table>";

        unset($showlist);
    } else{
        echo "No records matching your query were found.";
    }
} catch(PDOException $e){
    die("ERROR:Could not be able to execute $sql. " . $e->getMessage());
}

?>