<?php

namespace App\Http\Controllers;
use App\Models\User;

class userController extends Controller {
    public function getListUser(){
        $usuarios = User::select('user','name','email','status')->get();
        return response()->json([
            "code" => "200",
            "status" => "Ok",
            "message" => "sucesso ao encontrar os usuários",
            "data"=> $usuarios,
        ], 200);
    }

    public function getUserById(Request $request){
        $request->validate([
            'id' => 'required|string'
        ]);

        $usuario = User::select('user','name','email','status').where('id', $request->id);
        if($usuario->isEmpty()){
            return response()->json([
                "code" => "404",
                "status" => "Not Found",
                "message" => "O usuário não foi encontrado",
                "data"=> $usuario,
            ], 404);
        }else{
            return response()->json([
                "code" => "200",
                "status" => "Ok",
                "message" => "sucesso ao encontrar o usuários",
                "data"=> $usuario,
            ], 200);
        }
    }

    public function updateUser(Request $request){
        $request->validate([
            "id" => "required|string",
            "user" => "string",
            "email" => "mail",
            "status" => "boolean"
        ]);

        $usuario = User::find($request->id);

        if (!$usuario) {
            return response()->json([
                "code" => "404",
                "status" => "Not Found",
                "message" => "Usuário não encontrado",
                "data"=> $usuario,
            ], 404);
        }

        if ($request->has('user')) {
            $usuario->user = $request->user;
        }

        if ($request->has('email')) {
            $usuario->email = $request->email;
        }

        if ($request->has('status')) {
            $usuario->status = $request->status;
        }

        $usuario->save();

        return response()->json([
            "code" => "200",
            "status" => "OK",
            "message" => "sucesso ao encontrar o usuários",
            "data"=> $usuario,
        ], 200);
    }
}