<?php
    setcookie("serial_number", "", time()+ 3600, "/", "", 0);

    setcookie("full_name", "", time()+ 3600, "/", "", 0);
    
    setcookie("email_address", "", time()+ 3600, "/", "", 0 );
    
    setcookie("created_at", "", time()+ 3600, "/", "", 0 );
    
    setcookie("actions", "", time()+ 3600, "/", "", 0 );
    
?>

<html>
    <head>
        <title>Setting Cookies for Customer</title>
    </head>
    <body>
        <?php echo "<h1>Set Cookies"."</h1><br/>"; ?>
        <h2>My name is <?php echo $_COOKIE["name"]. "<br/>"; ?></p>
        <h2>my email address is <?php echo $_COOKIE["email"]; ?> </p>
        <a href="listview.php"><h5>Customer list View  page</h5></a>
    </body>
</html>