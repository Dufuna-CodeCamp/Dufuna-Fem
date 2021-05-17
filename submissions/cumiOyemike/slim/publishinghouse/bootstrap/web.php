<?php

use Illuminate\Container\Container;

$container = new Container();

$container['settings'] = [
    'determineRouteBeforeMiddleware' => false,
    'displayErrorDetails' => true,
    'db' => [
        'driver' => 'mysql',
        'host' => $_ENV['dbHostname'],
        'database' => $_ENV['dbName'],
        'username' => $_ENV['dbUsername'],
        'password' => $_ENV['dbPassword'],
        'charset' => 'utf8',
        'collation' => 'utf8_unicode_ci',
        'prefix' => '',
    ]
    ];