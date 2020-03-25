<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{

    protected $fillable = [
        'status','user','job'
    ];

    protected $with = ['applicationUser', 'applicationJob'];
    
    public function applicationUser(){
        return $this->belongsTo(\App\User::class, 'user');
    }

    public function applicationJob(){
        return $this->belongsTo(\App\Job::class , 'job');
    }
}
