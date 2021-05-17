<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

require __DIR__ . '/../bootstrap/app.php';

//Add route callbacks
$app->get('/', function (Request $request, Response $response) {
    $response->getBody()->write('Slim Application');
    return $response;
});





//Run application
$app->run();
