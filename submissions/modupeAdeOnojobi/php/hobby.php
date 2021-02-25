<?php

$names = ['Joy', 'Tosin', 'Elsa', 'Ramon', 'Tim', 'Emma', 'Casidi', 'Lora'];
$hobbies = ['singing', 'dancing', 'traveling', 'hiking', 'eating', 'sleeping', 'reading', 'writing'];

foreach($names as $key => $name) {
    $hobby = $hobbies[$key];
    echo "My name is $name. I love $hobby<br>";
}