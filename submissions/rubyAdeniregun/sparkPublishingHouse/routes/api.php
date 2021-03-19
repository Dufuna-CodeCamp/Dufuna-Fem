<?php

use Slim\Routing\RouteCollectorProxy;
use App\Controller\ArticleController;
use App\Middleware\JsonParserMiddleware;

$app->group('/api', function(RouteCollectorProxy $group){

    $group->get('/articles', ArticleController::class . ':index');

    $group->get('/articles/{id}', ArticleController::class .':findById');

    $group->delete('/articles/{id}', ArticleController::class .':delete');

    $group->put('/articles/{id}', ArticleController::class .':update')
           ->add(new JsonParserMiddleware());

    $group->post('/articles', ArticleController::class .':create')
           ->add(new JsonParserMiddleware());

    $group->post('/articles/{id}', ArticleController::class .':publish')
           ->add(new JsonParserMiddleware());


});