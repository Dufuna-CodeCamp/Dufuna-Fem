<?php

namespace App\Controller;


use App\Model\Article;
use App\Model\Admin;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArticleController
{
    #RETRIEVE ONE ARTICLE
    public function findById(Request $request, Response $response, $args)
    {
        $id = $args['id'];

        $articles = Article::where('articles.id', $id)->join('admins', 'articles.created_by', 'admins.id')
        ->select('articles.id', 'title', 'description', 'status', 'admins.name AS created_by')->get();

        if (!$articles) {
            $response->getBody()->write(json_encode([ 'error' => 'Article not found' ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $articles->toarray()]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    #CREATE A NEW ARTICLE
    public function create(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $createdAt = date('Y-m-d H:i:s');
        $createdBy = 4;
        $article = Article::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $data['status'],
            "created_at" => $createdAt,
            "created_by" => $createdBy
        ]);

        $article->save();
        
        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article->toarray()]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    #UPDATE AN EXISTING ARTICLE
    public function update(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];

        $article = Article::find($id);

        if (!$article) {
            $response->getBody()->write(json_encode([ 'error' => 'Article not found' ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $article->title = $data['title'];

        $article->save();

        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article->toarray()]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    #DELETE ARTICLES
    public function delete(Request $request, Response $response, $args)
    {
        $id = $args['id'];
        
        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode([ 'error' => 'Article not found' ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }
    
        $article->delete();

        $response->getBody()->write(json_encode(['status' => 'success', 'message' => 'This article was successfully deleted']));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    // PUBLISH UNPUBLISH ARTICLES
    public function publishArticle(Request $request, Response $response, $args)
    {
        $data = $request->getParsedBody();
        $id = $args['id'];

        $article = Article::find($id);

        if (!$article) {
            $response->getBody()->write(json_encode([ 'error' => 'Article not found' ]));
            return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
        }

        $article->status = $data['status'];

        $article->save();

        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article->toarray()]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }

    #SHOW ALL PUBLISHED ARTICLES
    public function allPublishedArticles(Request $request, Response $response, $args)
    {
    
        $articles = Article::select('*')->where('articles.status' , '=', 'published')->get();

        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $articles->toarray()]));
        return $response->withHeader('Content-Type', 'application/json')
            ->withStatus(200);
    }
}