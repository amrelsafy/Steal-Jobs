<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{

    protected $fillable = [
        'title', 'description', 'image', 'created_by'
    ];

    protected $with = ['departmentAdmin'];
    
    public function departmentAdmin(){
        return $this->belongsTo(\App\Admin::class , 'created_by');
    }

}
