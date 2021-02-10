<?php
    setcookie("name", "Customer Details", time()+3600, "/", "", false);
?>

<html>
    <head>
        <title>Store Data in a Cookie</title>
    </head>
    <body>
        <?php echo "<h1>Set Cookies"."</h1><br/>"; ?>
        <h2>Kindly click link below to access <?php echo $_COOKIE["name"]. "<br/>"; ?></p>
        <a href="listview.php"><h5>Move to Customer Details</h5></a>
    </body>
</html