<?php

function converter($type,$num) {
    if($type == 'kilo') {
        echo "$num kilo = " .$num * 2.205 . " Pounds <br>";
    } elseif ($type == 'meter') {
        echo "$num meter = " .$num * 1.094 . " Yards <br>";
    } elseif ($type == 'celsius') {
        echo "$num celsius = ", ($num * 9/5 + 32) , " Fahrenheit";    
    } else {
        echo "Not a valid value";
    }
   
} 

converter('kilo', 3);
converter('meter', 6);
converter('celsius', 9);