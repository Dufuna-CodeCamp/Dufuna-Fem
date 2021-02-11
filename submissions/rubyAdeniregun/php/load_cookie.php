<?php
    session_start();
    if (isset($_SESSION['counter'])) {
        $_SESSION['counter'] += 1;
    } else {
        $_SESSION['counter'] = 1;
    }

    $msg = "<h1>You have visited this site (". $_SESSION['counter'];
    $msg .= ") in this session</h1>";
?>

<html>
    <head>
        <title>Setting up a PHP session</title>
    </head>
    <body>
        <?php echo ($msg) ?>
        <h3>
            To continue click the following link <br />
            <a href="listview.php"><h5>Click here to check the list view page</h5></a>
        </h3>
    </body>
</html>