<?php 


use App\Middleware\JsonBodyParserMiddleware;
use App\Controller\ArticleController;
use Slim\Routing\RouteCollectorProxy;

$app->group('/api', function(RouteCollectorProxy $group) {
    
    $group->get('/articles/{id}', ArticleController::class.':findById');
    $group->post('/articles', ArticleController::class.':create');
    $group->put('/articles/{id}', ArticleController::class.':update')
        ->add(new JsonBodyParserMiddleware());
    $group->delete('/articles/{id}', ArticleController::class .':delete');
    $group->put('/articles/publish/{id}', ArticleController::class.':publishArticle')
        ->add(new JsonBodyParserMiddleware());
    $group->get('/published-articles', ArticleController::class.':allPublishedArticles');

});