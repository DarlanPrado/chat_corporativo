<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DataType extends Model {

    protected $table = "data_type";

    protected $fillable = [
        "type",
    ];
}