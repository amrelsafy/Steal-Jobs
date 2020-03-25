<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

use Illuminate\Support\Facades\Auth;

$router->get('/getAuthAdmin', function () use ($router) {
    dd(Auth::guard('admins')->user());
});

// $router->get('/createAdmin', function () use ($router) {
//     $admin = \App\Admin::create([
//         'fullName' => "Amr Elsafy",
//         'email' =>"amrelsafyy@gmail.com",
//         'password' => "password"
//     ]);
// });

$router->group(['prefix' => 'api'], function($router){
    $router->get('users', ["uses" => "UserController@index" , 'middleware' => 'auth:admins']); //index
    $router->get('users/{id}',["uses" => "UserController@show" , 'middleware' => 'auth:admins']); //show
    $router->post('users',["uses" => "UserController@store"]); //store
    $router->put('users/{id}',["uses" => "UserController@update" , 'middleware' => 'auth:admins']); 
    $router->delete('users/{id}',["uses" => "UserController@destroy" , 'middleware' => 'auth:admins']); //destroy

    $router->get('admins',["uses" => "AdminController@index" , 'middleware' => 'auth:admins']);
    $router->get('admins/{id}', ["uses" => "AdminController@show" , 'middleware' => 'auth:admins']);
    $router->post('admins', ["uses" => "AdminController@store" , 'middleware' => 'auth:admins']);
    $router->put('admins/{id}', ["uses" => "AdminController@update" , 'middleware' => 'auth:admins']);
    $router->delete('admins/{id}', ["uses" => "AdminController@destroy" , 'middleware' => 'auth:admins']);

    $router->get('companies',["uses" => "CompanyController@index" , 'middleware' => 'auth:admins']);
    $router->get('companies/{id}',["uses" => "CompanyController@show" , 'middleware' => 'auth:admins']);
    $router->post('companies',["uses" => "CompanyController@store" , 'middleware' => 'auth:admins']);
    $router->put('companies/{id}',["uses" => "CompanyController@update" , 'middleware' => 'auth:admins']);
    $router->delete('companies/{id}',["uses" => "CompanyController@destroy" , 'middleware' => 'auth:admins']);

    $router->get('jobs',["uses" => "JobController@index"]);
    $router->get('jobs/{id}',["uses" => "JobController@show" , 'middleware' => 'auth:admins']);
    $router->post('jobs',["uses" => "JobController@store" , 'middleware' => 'auth:admins']);
    $router->put('jobs/{id}',["uses" => "JobController@update" , 'middleware' => 'auth:admins']);
    $router->delete('jobs/{id}',["uses" => "JobController@destroy" , 'middleware' => 'auth:admins']);

    $router->get('applications', ["uses" => "ApplicationController@index"  , 'middleware' => 'auth:admins']);
    $router->get('applications/{id}', ["uses" => "ApplicationController@show"  , 'middleware' => 'auth:admins']);
    $router->post('applications', ["uses" => "ApplicationController@store" , 'middleware' => 'auth:api']);
    $router->put('applications/{id}', ["uses" => "ApplicationController@update" , 'middleware' => 'auth:admins']);
    $router->delete('applications/{id}', ["uses" => "ApplicationController@destroy" , 'middleware' => 'auth:admins']);

    $router->get('departments', ["uses" => "DepartmentController@index"]);
    $router->get('departments/{id}', ["uses" => "DepartmentController@show" , 'middleware' => 'auth:admins']);
    $router->post('departments', ["uses" => "DepartmentController@store" , 'middleware' => 'auth:admins']);
    $router->put('departments/{id}', ["uses" => "DepartmentController@update" , 'middleware' => 'auth:admins']);
    $router->delete('departments/{id}', ["uses" => "DepartmentController@destroy" , 'middleware' => 'auth:admins']);

    $router->get('comp_deps', ["uses" => "CompDepsController@index" , 'middleware' => 'auth:admins']);
    $router->get('comp_deps/{id}', ["uses" => "CompDepsController@show" , 'middleware' => 'auth:admins']);
    $router->post('comp_deps', ["uses" => "CompDepsController@store" , 'middleware' => 'auth:admins']);
    $router->put('comp_deps/{id}', ["uses" => "CompDepsController@update" , 'middleware' => 'auth:admins']);
    $router->delete('comp_deps/{id}', ["uses" => "CompDepsController@destroy" , 'middleware' => 'auth:admins']);

    $router->post('/auth/login', 'AuthController@postLogin');
    $router->post('/auth/loginU', 'AuthController@postLoginU');
});

$router->get('/test' , function(){
    // Query builder
    $company = \App\Company::with('companyDepartment')->get();
    dd($company);
});