<?php
$temperature = 28;

switch($temperature) {
    case $temperature <= 20;
        echo "It is freezing today";
        break;
    case $temperature > 20 && $temperature < 30;
        echo "The weather is just perfect.";
        break;
    case $temperature >= 30 && $temperature < 40;
        echo "It's so hot today.";
        break;
    case $temperature >= 40;
        echo "Am I in the Sahara Desert?!";
        break;
    default;
        echo "No comment";
}