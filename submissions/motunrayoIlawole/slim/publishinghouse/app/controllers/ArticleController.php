<?php

namespace App\Controller;

use App\Constants\Constants;
use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArticleController
{
    // Endpoint to create an article
    public function createArticle(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();

        $createdAt = date('Y-m-d H:i:s');

        $createdBy = 1;

        $article = Article::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $data['status'],
            'created_by' => $createdBy,
            'created_at' => $createdAt
        ]);
        $article->save();
        $response->getBody()->write(json_encode([
            'status' => 'success',
            'data' => $article->toArray()
        ]));
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    // Endpoint to update an article
    public function updateArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $data = $request->getParsedBody();

        $article = Article::find($id);

        if (!$article) {
            $response->getBody()->write(json_encode([ 
                'error' => 'Article not found' 
            ]));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(404);
        }

        $article->title = $data['title'];
        $article->save();

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'data' => $article->toArray()
        ]));

        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    // Endpoint to delete an article
    public function deleteArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $article = Article::find($id);

        if (!$article) {
            $response->getBody()->write(json_encode([ 
                'error' => 'Article not found' 
            ]));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(404);
        }

        $article->delete();
        $response->getBody()->write(json_encode([
            'status' => 'success',
            'message' => 'This article was succesfully deleted'
        ]));

        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    // Endpoint to publish an article
    public function publishArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $data = $request->getParsedBody();
        $article = Article::find($id);

        if (!$article) {
            $response->getBody()->write(json_encode([ 
                'error' => 'Article not found' 
            ]));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(404);
        }

        $article->status = $data['status'];
        $article->save();

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'data' => $article->toArray()
        ]));

        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    // Endpoint to retrieve all articles
    public function showArticles(Request $request, Response $response)
    {
        $articles = Article::all();

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'data' => $articles->toArray()
        ]));

        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    // Endpoint to retrieve one article
    public function findArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $article = Article::find($id);

        if (!$article) {
            $response->getBody()->write(json_encode([
                'error' => 'Article not found'
            ]));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(400);
        }

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'data' => $article->toArray()
        ]));

        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }
    
}