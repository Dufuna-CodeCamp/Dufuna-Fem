<!DOCTYPE html>
    <head>
        <title>Accessing Customer Cookie</title>
    </head>
    <body>
        <?php 
            if (isset($_COOKIE["name"])) {
                echo "<h1>Welcome " . $_COOKIE["name"] . "</h1><br />";
            } else {
                echo "<h1>Sorry... Not recognized" . "</h1><br />";
            }
        ?>
    </body>
</html>