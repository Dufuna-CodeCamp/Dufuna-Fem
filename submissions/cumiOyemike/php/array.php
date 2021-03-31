<?php

$firstName = ['Chidi', 'Aisha', 'Dami', 'Kosi', 'Diepiriye', 'Sam', 'Osayuwa', 'Isioma'];

$hobby =['Hiking', 'Singing', 'Golfing', 'Running', 'Painting', 'Sculpting', 'Playing the ukulele', 'Making videos'];

foreach ($firstName as $key => $value) { 
    echo "My name is $firstName[$key]. I love $hobby[$key].<br>";
}