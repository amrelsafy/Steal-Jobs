<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    //

    public function index(){
        $users = User::all();
        return response()->json([
            "data" => $users,
            "message" => "Users retrieved successfully"
        ]);
    }

    public function show($id){
        $user = User::find($id);
        return response()->json([
            "data" => $user,
            "message" => "User retrieved successfully"
        ]);
    }

    public function store(Request $request){
        //validation
        $this->validate($request,[ 
            "fullName" => "required",
            "jobStatus" => "required",
            "email" => "required",
            "mobile" => "required",
            "country" => "required",
            "bdate" => "required",
            "experience" => "required"
        ]);

        //insertion
        $user = User::create($request->all());
        return response()->json([
            "data" => $user,
            "message" => "User created successfully"
        ], 201);
    }

    public function update($id, Request $request){
        //validation
        
        //update
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json([
            "data" => $user,
            "message" => "User updated successfully"
        ], 200);
    }

    public function destroy($id){
        User::findOrFail($id)->delete();
        return response("User deleted successfully", 200);
    }
}
