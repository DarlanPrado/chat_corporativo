<?php

namespace App\Http\Controllers;
use App\Models\Feed;

class FeedController extends Controller {

    public function getListFeed(){
        $feeds = Feed::all();
        return response()->json([
            "code" => "200",
            "status" => "Ok",
            "message" => "sucesso ao encontrar os feeds",
            "data"=> $feeds,
        ], 200);
    }

    public function getFeedById(Request $request){
        $request->validate([
            'id' => 'required|string'
        ]);

        $feed = User::select($request->id)->first();
        if($feed->isEmpty()){
            return response()->json([
                "code" => "404",
                "status" => "Not Found",
                "message" => "O feed não foi encontrado",
                "data"=> $feed,
            ], 404);
        }else{
            return response()->json([
                "code" => "200",
                "status" => "Ok",
                "message" => "sucesso ao encontrar o feed",
                "data"=> $feed,
            ], 200);
        }
    }

    
    public function updateFeed(Request $request){
        $request->validate([
            "id" => "required|string",
            "name" => "string",
            "icon" => "string",
            "timestamp_post" => "number",
            "min_perm_from_post" => "number",
            "max_char" => "number",
            "allow_mention" => "boolean",
            "allow_temporary_posts" => "boolean"
        ]);

        $feed = Feed::find($request->id);

        if (!$feed) {
            return response()->json([
                "code" => "404",
                "status" => "Not Found",
                "message" => "Feed não encontrado",
                "data"=> $feed,
            ], 404);
        }

        if ($request->has('name')) {
            $feed->user = $request->name;
        }

        if ($request->has('icon')) {
            $feed->icon = $request->icon;
        }

        if ($request->has('timestamp_post')) {
            $feed->timestamp_post = $request->timestamp_post;
        }

        if ($request->has('min_perm_from_post')) {
            $feed->min_perm_from_post = $request->min_perm_from_post;
        }

        if ($request->has('max_char')) {
            $feed->max_char = $request->max_char;
        }

        if ($request->has('allow_mention')) {
            $feed->allow_mention = $request->allow_mention;
        }

        if ($request->has('allow_temporary_posts')) {
            $feed->allow_temporary_posts = $request->allow_temporary_posts;
        }

        $feed->save();

        return response()->json([
            "code" => "200",
            "status" => "OK",
            "message" => "sucesso ao atualizar o feed",
            "data"=> $feed,
        ], 200);
    }
}