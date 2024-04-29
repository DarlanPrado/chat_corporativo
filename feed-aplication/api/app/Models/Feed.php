<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feed extends Model {

    protected $table = "feeds";

    protected $fillable = [
        "name",
        "icon",
        "timeout_post",
        "min_perm_from_post",
        "max_char",
        "allow_mention",
        "allow_temporary_post"
    ];
}