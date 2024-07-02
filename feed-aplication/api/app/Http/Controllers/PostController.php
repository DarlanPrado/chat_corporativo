<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\Feed;
use Illuminate\Http\Request;


class PostController extends Controller{

    public function getPostByIdFeed(Request $request){
        $request->validate([
            "id" => "required|string",
        ]);

        $feed = Feed::find($request->id);
        if(!$feed){
            return response()->json([
                "code" => "404",
                "status" => "Not Found",
                "message" => "Feed não encontrado",
            ], 404);
        }

        $posts = Post::join("feeds as f", "post.id_feed", "=", "f.id_feed")
            ->where("f.id_feed", $request->id)
            ->select("post.*")
        ->get();

        return response()->json([
            "code" => "200",
            "status" => "Ok",
            "message" => "Posts do feed encontrados",
            "data"=> $posts,
        ]);
    }

    public function createPost(Request $request){
        $request->validate([
            'id_feed' => 'string|required',
            'id_user_from' => 'string|required',
            'data' => 'string|required|min:1',
            'timestamp' => 'number|min:1',
            'id_data_type' => 'string|required',
            'bl_ativo' => 'boolean'
        ]);

        $newPost= [
            "id_feed" => $request->id_feed,
            "id_user_from" => $request->id_user_from,
            "data" => $request->data,
            "id_data_type" => $request->id_data_type,
        ];

        if ($request->timestamp){
            $newPost["timestamp"] = $request->timestamp;
        }
        if ($request->bl_ativo){
            $newPost["bl_ativo"] = $request->bl_ativo;
        }

        $post = Post::create($newPost);

        return response()->json([
            "code" => "201",
            "status" => "Created",
            "message" => "sucesso ao cadastrar o post",
            "data"=> $post,
        ], 201);
    }

    public function removePost(Request $request){
        $request->validate([
            "id" => "required|string"
        ]);

        $post = Post::find($request->id);

        if(!$post){
            return response()->json([
                "code" => "404",
                "status" => "Not Found",
                "message" => "O post não foi encontrado",
            ], 404);
        }

        $post->update(["bl_ativo" => $request->bl_ativo]);

        return response()->json([
            "code" => "200",
            "status" => "Ok",
            "message" => "sucesso ao remover o post",
            "data"=> $post,
        ], 200);
    }

}


// namespace App\Http\Controllers;
// use App\Models\Feed;

// class FeedController extends Controller {

//     public function getListFeed(){
//         $feeds = Feed::all();
//         return response()->json([
//             "code" => "200",
//             "status" => "Ok",
//             "message" => "sucesso ao encontrar os feeds",
//             "data"=> $feeds,
//         ], 200);
//     }

//     public function getFeedById(Request $request){
//         $request->validate([
//             'id' => 'required|string'
//         ]);

//         $feed = User::select($request->id)->first();
//         if($feed->isEmpty()){
//             return response()->json([
//                 "code" => "404",
//                 "status" => "Not Found",
//                 "message" => "O feed não foi encontrado",
//                 "data"=> $feed,
//             ], 404);
//         }else{
//             return response()->json([
//                 "code" => "200",
//                 "status" => "Ok",
//                 "message" => "sucesso ao encontrar o feed",
//                 "data"=> $feed,
//             ], 200);
//         }
//     }

//     public function createFeed(Request $request){
//         $request->validate([
//             "name"                  => "string|required",
//             "icon"                  => "string",
//             "timestamp_post"        => "number",
//             "min_perm_from_post"    => "number",
//             "max_char"              => "number",
//             "allow_mention"         => "boolean",
//             "allow_temporary_posts" => "boolean"
//         ]);

//         $newFeed = [
//             "name" => $request->name
//         ];

//         if($request->filled('icon')){
//             $newFeed["icon"] = $request->icon;
//         }
//         if($request->filled('timestamp_post')){
//             $newFeed["timestamp_post"] = $request->timestamp_post;
//         }
//         if($request->filled('min_perm_from_post')){
//             $newFeed["min_perm_from_post"] = $request->min_perm_from_post;
//         }
//         if($request->filled('allow_mentions')){
//             $newFeed["allow_mentions"] = $request->allow_mentions;
//         }
//         if($request->filled('allow_temporary_posts')){
//             $newFeed["allow_temporary_posts"] = $request->allow_temporary_posts;
//         }

//         $feed = Feed::create($newFeed);

//         return response()->json([
//             "code" => "201",
//             "status" => "Created",
//             "message" => "sucesso ao criar o feed",
//             "data"=> $feed,
//         ], 201);
//     }

//     public function updateFeed(Request $request){
//         $request->validate([
//             "id" => "required|string",
//             "name" => "string",
//             "icon" => "string",
//             "timestamp_post" => "number",
//             "min_perm_from_post" => "number",
//             "max_char" => "number",
//             "allow_mention" => "boolean",
//             "allow_temporary_posts" => "boolean"
//         ]);

//         $feed = Feed::find($request->id);

//         if (!$feed) {
//             return response()->json([
//                 "code" => "404",
//                 "status" => "Not Found",
//                 "message" => "Feed não encontrado",
//                 "data"=> $feed,
//             ], 404);
//         }

//         if ($request->filled('name')) {
//             $feed->user = $request->name;
//         }

//         if ($request->filled('icon')) {
//             $feed->icon = $request->icon;
//         }

//         if ($request->filled('timestamp_post')) {
//             $feed->timestamp_post = $request->timestamp_post;
//         }

//         if ($request->filled('min_perm_from_post')) {
//             $feed->min_perm_from_post = $request->min_perm_from_post;
//         }

//         if ($request->filled('max_char')) {
//             $feed->max_char = $request->max_char;
//         }

//         if ($request->filled('allow_mention')) {
//             $feed->allow_mention = $request->allow_mention;
//         }

//         if ($request->filled('allow_temporary_posts')) {
//             $feed->allow_temporary_posts = $request->allow_temporary_posts;
//         }

//         $feed->save();

//         return response()->json([
//             "code" => "200",
//             "status" => "OK",
//             "message" => "sucesso ao atualizar o feed",
//             "data"=> $feed,
//         ], 200);
//     }
// }
