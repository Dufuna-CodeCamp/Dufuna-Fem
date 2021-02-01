<?php

// function to convert Kilos to Pounds
function convertKiloToPounds ($kilos) {
    $Pounds = $kilos * 2.20462;
    echo "$kilos" ."Kilos" . " is equal to $Pounds" . "Pounds" ."<br>";
}

convertKiloToPounds (40);


// function to convert Meters to Yards
function convertMeterToYard($meter) {
    $Yard = $meter * 1.09361;
    echo "$meter" ."Meters" . " is equal to $Yard" ."Yards" . "<br>";
}

convertMeterToYard(40);

// function to convert Celcius to Fahrenheit
function convertCtoF($C) {
    $F = ($C * 1.8) + 32;
    echo "$C" ."Degrees Celcius" . " is equal to $F" ."Degrees Fahrenheit";
}

convertCtoF(40);

?>