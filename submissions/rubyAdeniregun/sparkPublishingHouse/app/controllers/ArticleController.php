<?php

namespace App\Controller;

use App\Model\Article; 
use App\Constants\Constants;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class ArticleController
{
    public function index(Request $request, Response $response) //An endpoint to show all published articles
    {
        $articles = Article::where('status', '=', 'published')->get();
        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $articles,]));
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)
        ->withStatus(200);
    }  
    public function findById(Request $request, Response $response, $args) //An endpoint to retrieve just a single article
    {
        $id = $args['id'];
        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode( ['error' => 'Article not found'] ));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)
            ->withStatus(404);
        }
        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article,]));
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)
        ->withStatus(200);
    }

    public function delete(Request $request, Response $response, $args) //An endpoint to delete an existing article.
    {
        $id = $args['id'];
        $article = Article::find($id);
        if (!$article) {
            $response->getBody()->write(json_encode( ['error' => 'Article not found'] ));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)
            ->withStatus(404);
        }
        $article->delete();
        $response->getBody()->write(json_encode( ['status' => 'success',
                                                 'message' => 'This article was successfully deleted'] ));
            return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)
            ->withStatus(200);
            
}

public function update(Request $request, Response $response, $args) //An endpoint to update an existing article
{
    $data = $request->getParsedbody()['data'];
    $id = $args['id'];
    $article = Article::find($id);

    $article->title = $data['title'];
    $article->description = $data['description'];
    $article->status = $data['status'];
    $article->created_by = $data['created_by'];
   
    $article->save();

    $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article,]));
    return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)
    ->withStatus(200);
}


    public function create(Request $request, Response $response, $args) //An endpoint to create a new article
    {
        $data = $request->getParsedbody();

        $createdAt = date('Y-m-d h:i:s');
     
        $article = Article::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'status' => $data['status'],
            'created_by' => $data['created_by'],
            'created_at' => $createdAt
        ]);

        $article->save();

        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article,]));
        return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)
        ->withStatus(200);
    }

    public function publish(Request $request, Response $response, $args) //An endpoint to update an existing article
{
    $data = $request->getParsedbody()['data'];
    $id = $args['id'];
    $article = Article::find($id);

    $article->status = $data['status'];
   
    $article->save();

    $response->getBody()->write(json_encode(['status' => 'success', 'data' => $article,]));
    return $response->withHeader(Constants::CONTENT_TYPE_HEADER, Constants::APPLICATION_JSON)
    ->withStatus(200);
}
}