<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Perm extends Model {

    protected $table = "perms";

    protected $fillable = [
        "name",
        "nivel",
        "status",
    ];
}