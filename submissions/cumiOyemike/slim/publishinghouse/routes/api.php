<?php

use App\Controller\ArticleController;
use App\Middleware\JsonBodyParserMiddleware;
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function(RouteCollectorProxy $group) {
    $group->get('/articles', ArticleController::class . ':showArticles');

    $group->get('/articles/{id}', ArticleController::class . ':findArticle');

    $group->post('/articles', ArticleController::class . ':createArticle')
        ->add(new JsonBodyParserMiddleware());

    $group->put('/articles/{id}', ArticleController::class . ':updateArticle')
        ->add(new JsonBodyParserMiddleware());

    $group->put('/articles/publish/{id}', ArticleController::class . ':publishArticle')
        ->add(new JsonBodyParserMiddleware());

    $group->delete('/articles/{id}', ArticleController::class . ':deleteArticle')
        ->add(new JsonBodyParserMiddleware());
});