<?php

// convert kilos to pounds
function kilosToPounds($kilos) {
    $pounds = $kilos * 2.205;
    echo "$kilos kilos is equal to $pounds pounds";
}

echo kilosToPounds(5);

// convert meters to yards
function meterToYards($meters) {
    $yards = $meters * 1.0936;
    echo "$meters meters is equal to $yards yards";
}

echo meterToYards(40);

// convert celsius to fahrenheit
function celsiusToFahrenheit($celsius) {
    $fahrenheit =  (1.8 * $celsius) + 32;
    echo "$celsius degree Celsius is equal to $fahrenheit degree Fahrenheit";
}

echo celsiusToFahrenheit(20);