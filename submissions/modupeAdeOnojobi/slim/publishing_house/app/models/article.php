<?php

namespace App\Model;


use Illuminate\Database\Eloquent\Model;
use App\Model\Admin;

class Article extends Model
{
    protected $fillable = ['title', 'description', 'status', 'created_by', 'created_at'];
    public $timestamps = false;

    

    public function user()
    {
        return $this->belongsTo(Admin::class, 'created_by');
    }

    // public $rob = "f";

    // public function admin() {

    //     return $this->hasOne('App\Model\Admin');

    // }

}

