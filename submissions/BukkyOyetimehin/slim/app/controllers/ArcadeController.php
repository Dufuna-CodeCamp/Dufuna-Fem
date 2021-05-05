<?php

namespace App\Controller;

use App\Constants\Constants;
use App\Model\Article;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArcadeController
{
    // Get a single Article
    public function getArticle(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode(['error' => 'This Article cannot be found']));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(404);
        }
        $response->getBody()->write(json_encode(['Status' => 'Success']));
        $response->getBody()->write($article->toJson());
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    //Create a new Article
    public function create(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $article = Article::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $data['status'],
            'created_by' => $data['created_by'],
            'created_at' => date('Y-m-d H:i:s')
        ]);
        $article->save();
        $response->getBody()->write(json_encode(['Status' => 'Success']));
        $response->getBody()->write($article->toJson());
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    // Update a new Article
    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args["id"];
        $article = Article::find($id);
        $article->title = $data["title"];
        $article->description = $data["description"];
        $article->save();
        $response->getBody()->write(json_encode(['Status' => 'Success']));
        $response->getBody()->write($article->toJson());
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    //Delete an Article
    public function delete(Request $request, Response $response, $args)
    {
        $id = $args["id"];
        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode(['error' => 'This article was not found']));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(404);
        }
        $article->delete();
        $response->getBody()->write('This article was successfully deleted');
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(200);
    }

    // Publish unpublshed Article
    public function publishArticle(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];
        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode(['error' => 'Article not found']));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)->withStatus(404);
        }
        $article->status = $data['status'];
        $article->save();
        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article->toarray()]));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    // Show all published Articles
    public function allPublishedArticles(Request $request, Response $response, $args)
    {

        $articles = Article::select('*')->where('articles.status', '=', 'published')->get();
        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $articles->toarray()]));
        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
}
