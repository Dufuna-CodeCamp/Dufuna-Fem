<?php
    setcookie("name", "John Mark", time()+3600, "/", "", false);
    setcookie("email", "johnmark@mail.com", time()+3600, "/", "", false);
?>

<html>
    <head>
        <title>Setting Cookies for Customer</title>
    </head>
    <body>
        <?php echo "<h1>Set Cookies"."</h1><br/>"; ?>
        <h2>My name is <?php echo $_COOKIE["name"]. "<br/>"; ?></p>
        <h2>my email address is <?php echo $_COOKIE["email"]; ?> </p>
        <a href="customer_cookie2.php"><h5>Customer list View  page</h5></a>
    </body>
</html>