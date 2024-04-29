<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model {

    protected $table = "perms";

    protected $fillable = [
        "id_feed",
        "id_user_from",
        "date_envite",
        "data",
        "id_data_type",
        "status"
    ];
}