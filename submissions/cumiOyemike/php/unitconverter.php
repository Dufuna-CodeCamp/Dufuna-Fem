<?php

// This function takes a parameter and converts it from kilos to pounds
function kilosToPounds($kiloValue) {
    $poundValue = $kiloValue * 2.205;

    echo "$kiloValue kilos is equal to $poundValue pounds.<br>"; 
}

kilosToPounds(10);

// This function takes a parameter and converts it from meters to yards
function metersToYards($meterValue) {
    $yardValue = $meterValue * 1.093613;

    echo "$meterValue meters is equal to $yardValue yards.<br>";
}

metersToYards(40);

// This function takes a paramaeter and converts it from celsius to farenheit
function celsiusToFarenheit($celsiusValue) {
    $farenheitValue = ($celsiusValue * 1.8) + 32;

    echo "$celsiusValue degrees celsius is equal to $farenheitValue degrees farenheit.<br>";
}

celsiusToFarenheit(33);
