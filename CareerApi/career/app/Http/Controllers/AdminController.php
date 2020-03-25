<?php

namespace App\Http\Controllers;

use App\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
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
        $admins = Admin::all();
        return response()->json([
            "data"=> $admins,
            "message"=>"Admins retreived successfully"
        ], 200);
    }

    public function show($id){
        $admin = Admin::find($id);
        return response()->json([
            "data"=> $admins,
            "message"=>"Admins retreived successfully"
        ], 200);
    }

    public function store(Request $request){
        // validation
        $this->validate($request, [
            "fullName" => "required",
            "email" => "required"
        ]);

        //insertion
        $admin = Admin::create($request->all());
        return response()->json([
            "data"=> $admin,
            "message"=>"Admin created successfully"
        ], 201);
    }

    public function update($id, Request $request){
        // validate

        // update
        $admin = Admin::findOrFail($id);
        $admin->update($request->all());
        return response()->json([
            "data"=>$admin,
            "message"=>"Admin updated successfully" 
        ], 200);
    }

    public function destroy($id){
        Admin::findOrFail($id)->delete();
        return response("Admin deleted successfully", 200);
    }
}
