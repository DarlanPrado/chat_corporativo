<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPermFeed extends Model {

    protected $table = "user_perm_post";

    protected $fillable = [
        "id_user",
        "id_perm",
        "id_feed",
    ];
}