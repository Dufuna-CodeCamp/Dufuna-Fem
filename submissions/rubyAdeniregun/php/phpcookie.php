<?php

setcookie("serial_number", "08", time()+ 3600, "/", "", 0);

setcookie("full_name", "Andrew Peters", time()+ 3600, "/", "", 0);

setcookie("email_address", "andrew@mail.com", time()+ 3600, "/", "", 0 );

setcookie("created_at", "29th Sept 2021", time()+ 3600, "/", "", 0 );

setcookie("actions", "Booked a ticket", time()+ 3600, "/", "", 0 );

?>

<html>
    <head>
        <<title>List View Page</title>
    </head>   

    <body>

    <?php echo "Customer Details"."<br />";?>

    <p> S/N: <?php echo $_COOKIE["serial_number"];?> </p>

    <p> Name: <?php echo $_COOKIE["full_name"];?> </p>

    <p> Email Adress: <?php echo $_COOKIE["email_address"];?> </p>

    <p> Created at: <?php echo $_COOKIE["created_at"];?> </p>

    <p> Actions: <?php echo $_COOKIE["actions"];?> </p>

        <body>

    <html>
