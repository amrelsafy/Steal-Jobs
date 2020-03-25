<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{

    protected $fillable = [
        'title', 'location', 'type'
    ];

    public function companyDepartment(){
        return $this->belongsToMany(\App\Department::class , 'comp_deps' , 'compID' , 'depID');
    }
    
}
