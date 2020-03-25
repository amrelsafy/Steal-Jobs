<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{

    protected $fillable = [
        'title', 'description', 'company', 'department', 'applicants', 'startDate', 'experience', 'image', 'salary', 'type','expiryDate', 'created_by'
    ];

    protected $with = ['jobDepartment', 'jobCompany', 'jobAdmin'];
    
    public function jobDepartment(){
        return $this->belongsTo(\App\Department::class , 'department');
    }
    
    public function jobCompany(){
        return $this->belongsTo(\App\Company::class, 'company');
    }

    public function jobAdmin(){
        return $this->belongsTo(\App\Admin::class, 'created_by');
    }
}
