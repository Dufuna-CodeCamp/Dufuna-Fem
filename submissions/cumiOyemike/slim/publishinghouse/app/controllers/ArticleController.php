<?php

namespace App\Controller;

use App\Constants\Constants;
use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArticleController
{
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
        $article->description = $data['description'];
        $article->save();

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'data' => $article->toArray()
        ]));

        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

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
            'message' => 'Article deleted successfully'
        ]));

        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

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

    public function showArticles(Request $request, Response $response)
    {
        $articles = Article::all();

        $response->getBody()->write(json_encode([
            'status' => 'success',
            'data' => $articles->toArray()
        ]));

        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

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