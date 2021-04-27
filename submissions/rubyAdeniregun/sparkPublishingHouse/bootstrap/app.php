<?php

use Dotenv\Dotenv;
use Slim\Factory\AppFactory;

require __DIR__ .'/../vendor/autoload.php';

$dotenv = \Dotenv\Dotenv::createimmutable(__DIR__ . '../..');
$dotenv->load();

require 'web.php';
require 'database.php';

//instantiate the app

$app = AppFactory::create();

require __DIR__ . '/../routes/api.php';

