<?php

use App\Controller\ArcadeController;
use App\Middleware\JsonParserMiddleware;
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function (RouteCollectorProxy $group) {

    //All the routes will be placed here

    $group->get('/articles/{id}', ArcadeController::class . ':getArticle'); // "/api/articles/1"

    $group->post('/articles', ArcadeController::class . ':create')
        ->add(new JsonParserMiddleware());

    $group->put('/articles/{id}', ArcadeController::class . ':update')
        ->add(new JsonParserMiddleware());

    $group->delete('/articles/{id}', ArcadeController::class . ':delete');

    $group->put('/articles/publish/{id}', ArcadeController::class . ':publishArticle')
        ->add(new JsonParserMiddleware());

    $group->get('/published-articles', ArcadeController::class . ':allPublishedArticles');
});
